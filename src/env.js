import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    GRAPHQL_API_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("YOUR_GRAPHQL_API_URL"),
        "You forgot to add YOUR_GRAPHQL_API_URL to your .env file."
      ),
    GRAPHQL_API_KEY: z
      .string()
      .refine(
        (str) => !str.includes("YOUR_GRAPHQL_API_KEY"),
        "You forgot to add YOUR_GRAPHQL_API_KEY to your .env file."
      ),
    GRAPHQL_API_KEY_HEADER: z
      .string()
      .refine(
        (str) => !str.includes("YOUR_GRAPHQL_API_KEY_HEADER"),
        "You forgot to add YOUR_GRAPHQL_API_KEY_HEADER to your .env file."
      ),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    GRAPHQL_API_KEY: process.env.GRAPHQL_API_KEY,
    GRAPHQL_API_KEY_HEADER: process.env.GRAPHQL_API_KEY_HEADER,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
