// Config.ts
function getEnv(variable: string): string {
  const value = process.env[variable];
  console.log(value);
  if (!value) {
    throw new Error(`${variable} is not set in the .env file.`);
  }
  return value;
}

export const apiConfig = {
  graphqlApiUrl: getEnv("GRAPHQL_API_URL"),
  graphqlApiKeyHeader: getEnv("GRAPHQL_API_KEY_HEADER"),
  graphqlApiKey: getEnv("GRAPHQL_API_KEY"),
};
