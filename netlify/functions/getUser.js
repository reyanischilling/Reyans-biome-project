exports.handler = async function (event, context) {
  try {
    // Example: return a demo user
    return {
      statusCode: 200,
      body: JSON.stringify({ user: 'Demo' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: String(err) }),
    };
  }
};
