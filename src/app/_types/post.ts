export type Term = {
  name: string;
};

export type TermTaxonomy = {
  terms: Term[];
};

export type TermRelationship = {
  term_taxonomy: TermTaxonomy;
};

export type UserMeta = {
  meta_value: string;
};

export type User = {
  user_url: string;
  display_name: string;
  ID: number;
  user_meta: UserMeta[];
};

export type PostMeta = {
  meta_value: string;
  attached: {
    guid: string;
    post_content: string;
    post_title: string;
    post_excerpt: string;
    post_meta: {
      meta_value: string;
    }[];
  }[];
};

export type Post = {
  __typename: "wplf_posts";
  ID: number; // Changed from bigint to number for simplicity
  post_name: string;
  post_title: string;
  post_date: string; // Changed from Date to string to match your GraphQL result directly
  post_modified: string; // Same as above
  post_content: string;
  term_relationships: TermRelationship[];
  user: User;
  post_meta: PostMeta[];
};

export type QueryData = {
  wplf_posts: Post[];
};
