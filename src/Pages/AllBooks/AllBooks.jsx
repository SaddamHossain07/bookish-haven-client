import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

const AllBooks = () => {
    const [books, setBooks] = useState([])


    useEffect(() => {
        axios.get('https://bookish-haven-server.vercel.app/books')
            .then(res => {
                setBooks(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <div className="w-full rounded-lg relative">
                <img className="rounded-lg w-full" src="https://i.ibb.co/9bzMd11/get-In-Touch.png" alt="" />
                <div className="absolute w-full h-full top-0 flex justify-center items-center">
                    <h3 className="text-5xl text-orange-600 p-4 rounded-md bg-white font-bold underline italic">All Books</h3>
                </div>
            </div>

            <div className="my-24 w-11/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }

            </div>
        </div>
    );
};

export default AllBooks;