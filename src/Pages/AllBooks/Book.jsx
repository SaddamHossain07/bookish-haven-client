import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { _id, image, name, author, category_name, rating, quantity } = book

    const newRating = Math.round(rating)
    const stars = []
    for (let i = 0; i < newRating; i++) {
        stars.push(
            <svg
                key={i}
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
            >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        );
    }

    return (
        <div className="card bg-base-100 shadow-xl items-center">
            <div className="w-[150px] h-[200px] rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-orange-700 italic"> by - {author}</p>
                <p className=""> {category_name}</p>
                <div className="flex my-2">
                    {stars} <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                </div>
                <Link to={`/books/update/${_id}`}>
                    <button className="btn bg-orange-500 text-white px-6 py-4 rounded-lg w-[250px]">Update</button>
                </Link>

            </div>
        </div>
    );
};

export default Book;