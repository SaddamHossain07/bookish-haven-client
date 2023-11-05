import bgImg from '../../assets/images/World Map.svg'
const GetInTouch = () => {
    return (
        <div className="my-24 h-52 w-full bg-orange-200 relative overflow-hidden">
            <img className="w-full h-full object-cover opacity-50" src="https://i.ibb.co/vmQLz4h/liquid-cheese-1.png" alt="" />

            {/* <img className='w-full h-full object-cover' src={bgImg} alt="" /> */}

            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#d28328e1] to-[rgba(21, 21, 21, 0)]">

                <h3 className="text-5xl text-white font-bold ml-10">Top Books By Best Authors</h3>

            </div>


        </div>
    );
};

export default GetInTouch;