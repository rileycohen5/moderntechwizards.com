module.exports = async function (context, req) {
  const data = req.body;

  console.log("Form submission:", data);

  context.res = {
    status: 200,
    body: { message: "Form received successfully", received: data }
  };
};
