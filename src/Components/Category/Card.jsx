import { Link } from "react-router-dom";

const Card = ({ category }) => {
    const { category_name, image } = category
    return (
        <div className="shadow-lg w-10/12 md:w-[300px] mx-auto border-2 rounded-lg border-slate-200 h-[350px] relative overflow-hidden">
            <img className="w-full h-[300px] z-30" src={image} alt="" />
            <div className="h-[150px] -skew-y-6 hover:skew-y-0 w-full bg-white -bottom-10 hover:-bottom-5 z-20 absolute"></div>
            <div className="text-3xl font-bold z-50 bottom-12 px-6 absolute w-full flex items-center justify-between">
                <div>
                    <h3>{category_name}</h3>
                </div>
                <Link to={`/books/category/${category_name}`}>
                    <button className="btn btn-sm text-white px-4 bg-orange-400 hover:bg-orange-500 border-0">View Page</button>
                </Link>
            </div>

        </div>
    );
};

export default Card;