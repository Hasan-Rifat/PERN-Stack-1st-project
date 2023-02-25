const express = require("express");
const app = express();
const port = 5000;
const books = require("./router/v1/books.router");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/book", books);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
