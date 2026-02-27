import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const vars = {
    KEYSTATIC_GITHUB_CLIENT_ID: process.env.KEYSTATIC_GITHUB_CLIENT_ID
      ? `SET (${process.env.KEYSTATIC_GITHUB_CLIENT_ID.length} chars)`
      : "NOT SET",
    KEYSTATIC_GITHUB_CLIENT_SECRET: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET
      ? `SET (${process.env.KEYSTATIC_GITHUB_CLIENT_SECRET.length} chars)`
      : "NOT SET",
    KEYSTATIC_SECRET: process.env.KEYSTATIC_SECRET
      ? `SET (${process.env.KEYSTATIC_SECRET.length} chars)`
      : "NOT SET",
  };

  return new Response(JSON.stringify(vars, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
};
