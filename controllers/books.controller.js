// get all books
exports.getBooks = async (req, res) => {
  try {
    res.status(200).json({ message: "Get all books" });
  } catch (error) {}
};

// get single book by id
exports.getBook = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Get book with id: ${id}` });
  } catch (error) {}
};

// create a book
/* 
name, description
*/
exports.createBook = async (req, res) => {
  try {
    const { name, description } = req.body;
    res
      .status(201)
      .json({ message: `Create a book ${name} and ${description}` });
  } catch (error) {}
};

// update a book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Update book with id: ${id}` });
  } catch (error) {}
};

// delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Delete book with id: ${id}` });
  } catch (error) {}
};
