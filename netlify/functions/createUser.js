exports.handler = async function (event, context) {
  try {
    // parse body if present
    const body = event.body ? JSON.parse(event.body) : {};

    // TODO: add your create user logic here (DB calls, validation, etc.)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User created', input: body }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: String(err) }),
    };
  }
};
