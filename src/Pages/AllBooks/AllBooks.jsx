import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
import { FaFilter } from 'react-icons/fa';

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

    const handleFilter = () => {
        let filterBooks = books.filter(book => book.quantity > 0)
        console.log(filterBooks)
        setBooks(filterBooks)
    }

    return (
        <div className="max-w-[1280px]">
            <div className="w-[100%] rounded-lg relative">
                <img className="rounded-lg w-full" src="https://i.ibb.co/9bzMd11/get-In-Touch.png" alt="" />
                <div className="absolute w-full h-full top-0 flex justify-center items-center">
                    <h3 className="text-5xl text-orange-600 p-4 rounded-md bg-white font-bold underline italic">All Books</h3>
                </div>
            </div>
            <div className="flex w-11/12 mx-auto gap-6 justify-end  items-center mt-24">
                <h3 className="text-2xl font-bold">Available Books</h3>
                <button onClick={handleFilter} className="btn bg-orange-500 text-white hover:bg-orange-600 rounded-none px-6 py-2"><FaFilter className="text-white" /> Filter</button>
            </div>
            <div className="my-10 w-11/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }

            </div>
        </div>
    );
};

export default AllBooks;