function status(request, response) {
  // response.status(200).send("Api ON");
  response.status(200).json({ status: "ON" });
}

export default status;
