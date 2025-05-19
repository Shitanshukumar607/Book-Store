import { useFetchBookByIdQuery } from "@/redux/books/booksApi";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../redux/cart/cartSlice";

const SingleBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, error, isLoading } = useFetchBookByIdQuery(id);

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Please try again.</p>;
  }

  const book = data?.data || {};

  return (
    <div className="flex justify-center items-start py-10 px-4 bg-white">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-start gap-10 bg-white rounded-xl shadow-lg p-6 md:p-10">
        <div className="w-full md:w-1/3">
          <img
            src={`/books/${book.coverImage}`}
            alt={book.title}
            className="w-full rounded-lg shadow-md cursor-pointer hover:scale-102 transition-all duration-200"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {book.title}
          </h1>

          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "admin"}
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Published:</strong>{" "}
            {new Date(book?.createdAt).toLocaleDateString()}
          </p>

          <p className="text-gray-700 mb-2 capitalize">
            <strong>Genre:</strong> {book?.genre || "Uncategorized"}
          </p>

          <p className="text-gray-700 mt-4 mb-6">
            <strong>Description:</strong>{" "}
            {book.description || "No description provided."}
          </p>

          <button
            onClick={() => dispatch(addToCart(book))}
            className="bg-primary-regular hover:bg-yellow-500 cursor-pointer text-black font-semibold py-2 px-4 rounded flex items-center gap-2 transition"
          >
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
