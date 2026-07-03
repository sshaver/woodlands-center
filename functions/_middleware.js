const unauthorized = () =>
  new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="CWMP Staging", charset="UTF-8"'
    }
  });

export const onRequest = async ({ env, next, request }) => {
  if (!env.STAGING_BASIC_AUTH_PASSWORD) return next();

  const username = env.STAGING_BASIC_AUTH_USERNAME || 'cwmp';
  const expected = `${username}:${env.STAGING_BASIC_AUTH_PASSWORD}`;
  const header = request.headers.get('Authorization') || '';

  if (!header.startsWith('Basic ')) return unauthorized();

  try {
    const actual = atob(header.slice('Basic '.length));
    if (actual === expected) return next();
  } catch {
    return unauthorized();
  }

  return unauthorized();
};
