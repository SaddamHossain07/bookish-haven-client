import Marquee from "react-fast-marquee";
import img1 from '../../assets/images/books.jpg'
const Category = () => {
    return (
        <div className="my-24">
            <div className="flex justify-between items-center">
                <div className="w-11/12">
                    <h3 className="text-4xl font-bold text-orange-500">Top Categories</h3>
                </div>
                <div className="w-1/12">
                    <Marquee speed={20}>
                        <div className="w-6 h-6 mr-4 bg-orange-700"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-600"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-500"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-400"></div>
                        <div className="w-6 h-6 mr-4 bg-orange-300"></div>
                    </Marquee>
                </div>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
                <div className="shadow-lg border-2 rounded-lg border-slate-200 h-[350px] relative overflow-hidden">
                    <img className="w-full h-[300px] z-30" src="https://i.ibb.co/Lp8pWTy/download.jpg" alt="" />
                    <div className="h-[150px] -skew-y-6 hover:skew-y-0 w-full bg-white -bottom-10 hover:-bottom-5 z-20 absolute"></div>

                    <h3 className="text-3xl font-bold text-center z-50 inline-block bottom-12 left-6 absolute">Novel</h3>
                </div>
                <div className="shadow-lg border-2 rounded-lg border-slate-200 h-[350px] relative overflow-hidden">
                    <img className="w-full h-[300px] z-30" src="https://i.ibb.co/VHDSs2x/thrilled.png" alt="" />
                    <div className="h-[150px] -skew-y-6 hover:skew-y-0 w-full bg-white -bottom-10 hover:-bottom-5 z-20 absolute"></div>

                    <h3 className="text-3xl font-bold text-center z-50 inline-block bottom-12 left-6 absolute">Thriller</h3>
                </div>
                <div className="shadow-lg border-2 rounded-lg border-slate-200 h-[350px] relative overflow-hidden">
                    <img className="w-full h-[300px] z-30" src="https://i.ibb.co/CBVdnXN/history-2.jpg" alt="" />
                    <div className="h-[150px] -skew-y-6 hover:skew-y-0 w-full bg-white -bottom-10 hover:-bottom-5 z-20 absolute"></div>

                    <h3 className="text-3xl font-bold text-center z-50 inline-block bottom-12 left-6 absolute">History</h3>
                </div>
                <div className="shadow-lg border-2 rounded-lg border-slate-200 h-[350px] relative overflow-hidden">
                    <img className="w-full h-[300px] z-30" src="https://i.ibb.co/KrkpJ5p/images-3.jpg" alt="" />
                    <div className="h-[150px] -skew-y-6 hover:skew-y-0 w-full bg-white -bottom-10 hover:-bottom-5 z-20 absolute"></div>

                    <h3 className="text-3xl font-bold text-center z-50 inline-block bottom-12 left-6 absolute">Drama</h3>
                </div>
            </div>
        </div>
    );
};

export default Category;