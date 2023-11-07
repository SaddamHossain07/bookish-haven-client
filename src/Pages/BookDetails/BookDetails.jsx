import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
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

    return (
        <div className="w-[1280px]">
            <div className="w-full rounded-lg relative">
                <img className="rounded-lg w-full" src="https://i.ibb.co/NthPxR2/single-Book.png" alt="" />
                <div className="absolute w-full h-full top-0 flex justify-center items-center">
                    <h3 className="text-5xl text-orange-600 p-4 rounded-md bg-white font-bold underline italic">{name}</h3>
                </div>
            </div>

            <div className="w-10/12 mx-auto mt-24 flex flex-row gap-10">
                <div className="w-1/2 h-[500px] bg-slate-100 shadow-md flex items-center justify-center rounded-md">
                    <img className="w-[200px] h-[300px] rounded-md" src={image} alt="" />
                </div>
                <div className="w-1/2 h-[500px] flex flex-col justify-between">
                    <h2 className="text-4xl font-bold">{name}</h2>
                    <div className="flex gap-10 my-6 items-center">
                        <p className="text-xl font-semibold">Available Book : {quantity} Pice</p>
                        <div className="flex my-4">
                            {stars} <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                        </div>
                    </div>

                    <p className="text-justify pb-6">{newDescription} .......</p>
                    <hr />
                    <div className="text-xl font-medium space-y-4 mt-6">
                        <p>Category : <span className="text-orange-900">{category_name}</span></p>
                        <p>Author : <span className="text-orange-900 italic">{author}</span></p>
                        <div className="flex gap-10">
                            <button className="bg-orange-500 py-4 px-10 text-white font-semibold rounded-md hover:bg-orange-600">Borrow</button>
                            <button className="bg-orange-500 py-4 px-10 text-white font-semibold rounded-md hover:bg-orange-600">Read</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto mt-10 mb-24 space-y-4">
                <h3 className="text-2xl font-bold">Some words from this book</h3>
                <p className="text-justify">{content}</p>

            </div>
        </div>
    );
};

export default BookDetails;