
const Banner = () => {

    return (
        <div className="carousel w-full max-h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Y8WDQhd/slider-2.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-8 pl-12'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Small Stories <br />
                            by Sam Wilson</h2>
                        <p>THE LIBRARY IS A PLACE FOR EVERYONE TO EXPLORE <br /> THE WORLD OF READING</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/rk5RpyW/background-1.png" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-8 pl-12'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Small Stories <br />
                            by Sam Wilson</h2>
                        <p>THE LIBRARY IS A PLACE FOR EVERYONE TO EXPLORE <br /> THE WORLD OF READING</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/zHzKxvN/slider-3.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-8 pl-12'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Small Stories <br />
                            by Sam Wilson</h2>
                        <p>THE LIBRARY IS A PLACE FOR EVERYONE TO EXPLORE <br /> THE WORLD OF READING</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/PhPrztY/slider-1.png" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-8 pl-12'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Small Stories <br />
                            by Sam Wilson</h2>
                        <p>THE LIBRARY IS A PLACE FOR EVERYONE TO EXPLORE <br /> THE WORLD OF READING</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;