
const Items = ({ item, handleDelete }) => {
    const { _id, image, name, category_name, returnDate, book_id } = item
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {category_name}
            </td>
            <td>
                {returnDate}
            </td>
            <td>
                {returnDate}
            </td>
            <td>
                {book_id}
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning">
                    Return
                </button>
            </td>
        </tr>
    );
};

export default Items;