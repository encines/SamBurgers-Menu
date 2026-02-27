import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  // Test the actual OAuth token exchange with GitHub
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;

  const testResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: "test_invalid_code",
      }),
    },
  );

  const result = await testResponse.json();

  return new Response(
    JSON.stringify(
      {
        status: testResponse.status,
        github_response: result,
        client_id_length: clientId?.length,
        client_secret_length: clientSecret?.length,
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/json" } },
  );
};
