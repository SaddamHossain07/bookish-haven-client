import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Items from "./Items";
import BorrowedBookCard from "./BorrowedBookCard";

const BorrowedBooks = () => {
    const { user } = useAuth()
    const [borrows, setBorrows] = useState([])

    const url = `/borrow?email=${user.email}`

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setBorrows(res.data))

    }, [url, axiosSecure])


    const handleDelete = id => {
        const proceed = confirm('Are you sure want to return this book?')
        if (proceed) {
            fetch(`https://bookish-haven-server.vercel.app/borrow/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = borrows.filter(item => item._id !== id)
                        setBorrows(remaining)
                    }
                })
        }
    }

    return (
        <div className="w-[1280px]">
            <div className="w-full rounded-lg relative">
                <img className="rounded-lg w-full h-[400px]" src="https://i.ibb.co/qMn4Ksx/reading.png" alt="" />
                <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center">
                    <h3 className="text-5xl text-orange-600 p-4 rounded-lg bg-white font-bold underline italic -mt-3">Borrowed Books</h3>
                </div>
            </div>

            <div className="my-24 w-11/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    borrows.map(book => <BorrowedBookCard
                        key={book._id}
                        handleDelete={handleDelete}
                        book={book}
                    ></BorrowedBookCard>)
                }

            </div>
        </div>
    );
};

export default BorrowedBooks;