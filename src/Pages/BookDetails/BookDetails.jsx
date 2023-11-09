import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const BookDetails = () => {
    const { user } = useAuth()
    const book = useLoaderData()
    const { _id, image, name, author, short_description, category_name, rating, quantity, content } = book

    let newDescription = short_description
    if (short_description.length > 60) {
        const splitDescription = short_description.split(" ")
        const sliceDescription = splitDescription.slice(0, 50)
        const updateDescription = sliceDescription.join(" ")
        newDescription = updateDescription
    }


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

    const [borrows, setBorrows] = useState([])
    const url = `/borrow?email=${user.email}`
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setBorrows(res.data))

    }, [url, axiosSecure])



    const [isBorrowed, setIsBorrowed] = useState(false)
    useEffect(() => {
        const checkBorrowedBook = borrows.filter(item => item.book_id === book._id)

        if (checkBorrowedBook.length > 0) {
            setIsBorrowed(true)
        }
    }, [borrows, book])





    const handleBorrowBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const borrowedDate = form.borrowedDate.value;
        const returnDate = form.returnDate.value;

        const borrowBook = {
            image: image,
            name: name,
            category_name: category_name,
            userName,
            email,
            borrowedDate,
            returnDate,
            book_id: _id,
        };

        if (isBorrowed) {
            toast.error('You already borrowed this book! Please return on the committed date.')
        } else if (quantity > 0) {
            fetch('https://bookish-haven-server.vercel.app/borrow', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(borrowBook),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        fetch(`https://bookish-haven-server.vercel.app/books/${_id}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify({ quantity: -1 }),
                        })
                            .then((res) => res.json())
                            .then((updatedBook) => {
                                console.log('Book quantity updated:', updatedBook);
                                toast.success('You borrowed this book successfully!');
                            })
                            .catch((error) => {
                                console.error('while updating book quantity:', error);
                            });
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };


    return (
        <div className="max-w-[1280px]">
            <div className="w-full rounded-lg relative">
                <img className="rounded-lg w-full" src="https://i.ibb.co/NthPxR2/single-Book.png" alt="" />
                <div className="absolute w-full h-full top-0 flex justify-center items-center">
                    <h3 className="text-3xl md:text-5xl text-orange-600 p-4 rounded-md bg-white font-bold underline italic">{name}</h3>
                </div>
            </div>

            <div className="w-10/12 mx-auto mt-24 flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 h-[500px] bg-slate-100 shadow-md flex items-center justify-center rounded-md">
                    <img className="w-[200px] h-[300px] rounded-md" src={image} alt="" />
                </div>
                <div className="w-full md:w-1/2 h-[500px] flex flex-col justify-between ">
                    <h2 className="text-4xl font-bold">{name}</h2>
                    <div className="flex gap-10 my-6 items-center">
                        <p className="text-xl font-semibold">Available Book : {quantity} Pice</p>
                        <div className="flex my-4">
                            {stars} <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                        </div>
                    </div>

                    <p className="text-justify pb-6">{newDescription} .......</p>
                    <hr />
                    <div className="text-xl font-medium space-y-2 mt-6">
                        <p>Category : <span className="text-orange-900">{category_name}</span></p>
                        <p>Author : <span className="text-orange-900 italic">{author}</span></p>

                    </div>
                    <div className="flex gap-16 mt-6">
                        <button id="borrowBtn" className="btn bg-orange-500 py-4 px-10 text-white font-semibold rounded-md" onClick={() => document.getElementById('my_modal_2').showModal()} disabled={quantity < 1}>Borrow</button>

                        <Link to={`/books/reading/${_id}`}>
                            <button className="btn bg-orange-500 py-4 px-10 text-white font-semibold rounded-md hover:bg-orange-600">Read</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto mt-16 mb-24 space-y-4 block">
                <h3 className="text-2xl font-bold">Some words from this book</h3>
                <p className="text-justify">{content}</p>
            </div>



            {/* modal form  */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl pb-4 mx-8 border-b-4 border-orange-600 text-center">Borrow The Book</h3>
                    <form method="dialog" className="card-body" onSubmit={handleBorrowBook}>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Borrowed Date</span>
                                </label>
                                <input type="date" name="borrowedDate" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Return Date</span>
                                </label>
                                <input type="date" name="returnDate" className="input input-bordered" required />
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-white font-semibold rounded-xl py-4" type="submit">Borrow</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    );
};

export default BookDetails;