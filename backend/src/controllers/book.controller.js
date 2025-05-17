import { Book } from "../models/book.model.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ updatedAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: books,
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch books",
    });
  }
};

const addABook = async (req, res) => {
  try {
    const {
      title,
      description,
      genre,
      trending,
      coverImage,
      oldPrice,
      newPrice,
    } = req.body;

    if (
      !title ||
      !description ||
      !genre ||
      trending === undefined ||
      !coverImage ||
      !oldPrice ||
      !newPrice
    )
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });

    const newBook = new Book({
      title,
      description,
      genre,
      trending,
      coverImage,
      oldPrice,
      newPrice,
    });

    await newBook.save();

    return res.status(201).json({
      success: true,
      message: "Book added successfully",
    });
  } catch (error) {
    console.error("Error while adding book", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add the book",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book)
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });

    return res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (error) {
    console.error("Failed getting book by its id : ", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch the book",
    });
  }
};

export { getAllBooks, addABook, getBookById };
