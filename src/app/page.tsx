"use client";
import Link from "next/link";

import styles from "./index.module.css";
import type { QueryData } from "~/app/_types/post";

export const dynamic = "force-dynamic";

export const revalidate = 100;

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import Image from "next/image";

const query = gql`
  query getPosts @cached {
    wplf_posts(
      where: { post_status: { _eq: "publish" }, post_type: { _eq: "post" } }
      order_by: { post_modified: desc }
    ) {
      ID
      post_name
      post_title
      post_modified
      post_date
      post_content
      term_relationships {
        term_taxonomy {
          terms {
            name
          }
        }
      }
      user {
        user_url
        display_name
        ID
        user_meta(where: { meta_key: { _eq: "description" } }) {
          meta_value
        }
      }
      post_meta(where: { meta_key: { _eq: "_thumbnail_id" } }) {
        meta_value
        attached {
          guid
          post_content
          post_title
          post_excerpt
          post_meta(where: { meta_key: { _eq: "_wp_attachment_image_alt" } }) {
            meta_value
          }
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Gezeta <span className={styles.pinkSpan}>Esportiva</span> Demo
        </h1>
        <div className={styles.cardRow}>
          <Link className={styles.card} href="#latest">
            <h3 className={styles.cardTitle}>First Steps →</h3>
            <div className={styles.cardText}>
              Just the basics - below you can see all the latest posts from the
              database. Lots of posts to scroll to see speed.
            </div>
          </Link>
        </div>
        <Showcase />
      </div>
    </main>
  );
}

function Showcase() {
  // const { data } = useSuspenseQuery<QueryData>(query, {
  //   context: { fetchOptions: { cache: "force-cache" } },
  // });
  const { data } = useSuspenseQuery<QueryData>(query);

  const unescapeHTML = (str: string) =>
    str
      .replace(/\\"/g, '"')
      .replace(/\\&quot;/g, '"')
      .replace(/\\\\u0022/g, '"');

  return (
    <div className="container">
      {data && data.wplf_posts.length > 0 ? (
        <>
          <p className={styles.showcaseText} id="latest">
            Your most recent posts:
          </p>
          {data.wplf_posts.map((post) => (
            <div key={post.ID}>
              <p className={styles.showcaseText}>Title: {post.post_title}</p>
              {post.term_relationships &&
                Array.isArray(post.term_relationships) &&
                post.term_relationships.map((relationship, index) =>
                  relationship.term_taxonomy.terms.map((term) => (
                    <p key={index}>Category: {term.name}</p>
                  ))
                )}
              <div
                dangerouslySetInnerHTML={{
                  __html: unescapeHTML(post.post_content),
                }}
                className={styles.showcaseText}
              />
              {/* Display user info */}
              <p className={styles.showcaseText}>
                User: {post.user.display_name}
              </p>
              {post.post_meta.map((meta, index) => (
                <div key={index}>
                  <p className={styles.showcaseText}>
                    Thumbnail ID: {meta.meta_value}
                  </p>
                  {/* Since `attached` is an object, you don't need to map over it */}
                  <div className={styles.imagefit}>
                    <Image
                      src={meta.attached.guid}
                      alt={
                        meta.attached.post_meta.find(
                          (metaItem) => metaItem.meta_value
                        )?.meta_value ?? "Post thumbnail"
                      }
                      fill={true}
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 25vw"
                      quality={65}
                      className={styles.objectfit}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <p className={styles.showcaseText}>You have no posts yet.</p>
      )}
    </div>
  );
}
