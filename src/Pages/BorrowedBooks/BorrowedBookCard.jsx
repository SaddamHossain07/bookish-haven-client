
const BorrowedBookCard = ({ book, handleDelete }) => {
    const { _id, image, name, borrowedDate, returnDate, category_name } = book

    return (
        <div className="card bg-base-100 shadow-xl items-center">
            <div className="w-[150px] h-[200px] rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="card-body items-center space-y-2 text-center">
                <h2 className="card-title">{name}</h2>
                <p className="">Category : {category_name}</p>
                <p className="">Borrowed Date : {borrowedDate}</p>
                <p className="">Return Date : {returnDate}</p>

                <button onClick={() => handleDelete(_id)} className="btn bg-orange-500 text-white px-6 py-4 rounded-lg w-[250px]">Return</button>


            </div>
        </div>
    );
};

export default BorrowedBookCard;