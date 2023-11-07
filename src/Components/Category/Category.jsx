import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";
const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // fetch('http://localhost:5000/category')
        axios.get('http://localhost:5000/category')
            .then(res => {
                setCategories(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="my-24">
            <div className="flex justify-between items-center">
                <div className="w-11/12">
                    <h3 className="text-4xl font-bold text-orange-500">Top Categories</h3>
                </div>
                <div className="w-1/12">
                    <Marquee speed={30}>
                        <div className="w-6 h-6 mr-4 bg-orange-700"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-600"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-500"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-400"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-300"></div>
                    </Marquee>
                </div>
            </div>
            <Marquee speed={30} pauseOnHover={true}>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
                    {
                        categories.map(category => <Card key={category._id} category={category}></Card>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Category;