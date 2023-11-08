import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Items from "./Items";

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
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                            <th>Return</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            borrows?.map(item => <Items
                                key={item._id}
                                handleDelete={handleDelete}
                                item={item}
                            ></Items>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;