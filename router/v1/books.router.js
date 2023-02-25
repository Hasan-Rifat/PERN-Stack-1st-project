const express = require("express");
const book = require("../../controllers/books.controller");
const router = express.Router();

router.route("/").get(book.getBooks).post(book.createBook);

router
  .route("/:id")
  .get(book.getBook)
  .patch(book.updateBook)
  .delete(book.deleteBook);

module.exports = router;
