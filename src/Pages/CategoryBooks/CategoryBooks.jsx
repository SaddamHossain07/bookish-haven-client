
import SingleBook from "./SingleBook";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryBooks = () => {
    const books = useLoaderData()
    const { category_name } = useParams()

    return (
        <div className="w-[1280px]">
            <div className="w-full rounded-lg relative">
                <img className="rounded-lg w-full" src="https://i.ibb.co/9bzMd11/get-In-Touch.png" alt="" />
                <div className="absolute w-full h-full top-0 flex justify-center items-center">
                    <h3 className="text-5xl text-orange-600 p-4 rounded-md bg-white font-bold underline italic">{category_name} Books</h3>
                </div>
            </div>

            <div className="my-24 grid w-10/12 mx-auto gap-8 grid-cols-1 md:grid-cols-2">
                {
                    books.map(book => <SingleBook key={book._id} book={book}></SingleBook>)
                }

            </div>

        </div>
    );
};

export default CategoryBooks;