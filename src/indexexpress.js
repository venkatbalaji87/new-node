const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/profile", (request, response) => {
  response.send("Profile Page");
});

app.get("/signup", (request, response) => {
  response.send("Welcome to Signup Page ");
});

const server = app.listen("8080", () => {
  console.log("Server Running on port : " + server.address().port + " .");
  console.log(`Server Running on Port: ${server.address().port}.`);
});
