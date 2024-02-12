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
  ID: number; // Assuming ID is a number based on your context
  user_meta: UserMeta[];
};

// Adjust PostMeta to reflect that 'attached' is an object, not an array
export type PostMeta = {
  meta_value: string;
  attached: {
    guid: string;
    post_content: string;
    post_title: string;
    post_excerpt: string;
    post_meta: {
      meta_value: string;
    }[]; // Assuming post_meta is an array of objects with a 'meta_value' property
  };
};

export type Post = {
  __typename: "wplf_posts";
  ID: number;
  post_name: string;
  post_title: string;
  post_date: string; // Keeping as string to directly match the GraphQL result
  post_modified: string;
  post_content: string;
  term_relationships: TermRelationship[];
  user: User;
  post_meta: PostMeta[];
};

export type QueryData = {
  wplf_posts: Post[];
};
