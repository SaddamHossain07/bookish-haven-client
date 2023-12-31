import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";
const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://bookish-haven-server.vercel.app/category')
            .then(res => {
                setCategories(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="my-24 max-w-[1280px]">
            <div className="flex w-[100%] justify-between items-center">
                <h3 className="text-4xl font-bold text-orange-500">Top Categories</h3>
                <div className="w-[100px]">
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
                <div className="hidden md:flex gap-5 mt-16">
                    {
                        categories.map(category => <Card key={category._id} category={category}></Card>)
                    }
                </div>
            </Marquee>
            <div className="grid grid-cols-1 gap-6 md:hidden mt-16">
                {
                    categories.map(category => <Card key={category._id} category={category}></Card>)
                }
            </div>
        </div>
    );
};

export default Category;