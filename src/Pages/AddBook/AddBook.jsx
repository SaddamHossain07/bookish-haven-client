import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const AddBook = () => {

    const [category, setCategory] = useState(null)

    const axiosSecure = useAxiosSecure()
    const categoryURL = '/category'
    const booksURL = '/books'


    useEffect(() => {
        axiosSecure.get(categoryURL)
            .then(res => {
                setCategory(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axiosSecure])


    const handleAddBook = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category_name = form.category_name.value;
        const short_description = form.short_description.value;
        const rating = form.rating.value;
        const content = form.content.value;

        const newBook = {
            image,
            name,
            quantity,
            author,
            category_name,
            short_description,
            rating,
            content,
        };


        try {
            const response = await axiosSecure.post(booksURL, newBook);
            console.log(response.data);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Book added successfully!',
                showConfirmButton: false,
                timer: 1500,
            });
            form.reset();

        } catch (error) {
            console.error('Error while adding book:', error);
        }
    };

    return (
        <div className="max-w-[1280px]">
            <div className="w-[100%] rounded-lg relative">
                <img className="rounded-lg w-full" src="https://i.ibb.co/PYwRQkb/banner-9.png" alt="" />
                <div className="absolute w-full h-full top-0 flex justify-center items-center">
                    <h3 className="text-3xl md:text-5xl text-orange-600 p-4 rounded-md bg-white font-bold underline italic">Add Books</h3>
                </div>
            </div>
            <form onSubmit={handleAddBook} className="w-10/12 mx-auto mt-10">
                <div className="space-y-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="block text-sm font-medium leading-6 text-gray-900">Book Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Book photo url http://example.com/img-1.png" className="input input-bordered w-full" />
                    </div>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Book Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Book Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Category</span>
                            </label>
                            <select name="category_name" className="input input-bordered w-full gap-4">
                                {
                                    category?.map(category => <option key={category._id}>{category.category_name}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Author</span>
                            </label>
                            <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="quantity" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Rating</span>
                            </label>
                            <select id="country" name="rating" className="input input-bordered w-full">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                        <div className="mt-2">
                            <textarea name="short_description" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Some words from the book</label>
                        <div className="mt-2">
                            <textarea name="content" rows="9" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6 mb-16">
                    <button className="btn bg-orange-500 text-white px-6 py-4 rounded-lg">Add Book</button>

                </div>
            </form>

        </div>
    );
};

export default AddBook;