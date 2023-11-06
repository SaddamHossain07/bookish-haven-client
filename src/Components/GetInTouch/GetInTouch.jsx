
import { FaGreaterThan } from 'react-icons/fa';
const GetInTouch = () => {
    return (
        <div className="my-24 h-56 w-ful relative overflow-hidden">
            <img className="w-full h-full object-cover " src="https://i.ibb.co/9bzMd11/get-In-Touch.png" alt="" />
            {/* <img className="w-full h-full object-cover opacity-50" src="https://i.ibb.co/vmQLz4h/liquid-cheese-1.png" alt="" /> */}

            {/* <img className='w-full h-full object-cover' src={bgImg} alt="" /> */}

            <div className="absolute flex items-center border-2 w-full h-full left-0 top-0 bg-gradient-to-r from-[#d28328e1] to-[rgba(21, 21, 21, 0)] px-10">
                <div className='w-3/4'>
                    <h3 className="text-5xl text-white font-bold">Top Books By Best Authors</h3>
                </div>
                <div className='h-20 w-1/4 flex text-white text-xl font-bold'>
                    <div className='bg-orange-600 items-center flex justify-center w-3/4'>
                        <h3>GET IN TOUCH</h3>
                    </div>
                    <button className='bg-orange-500 hover:bg-orange-700 items-center flex justify-center w-1/4'>
                        <FaGreaterThan />
                    </button>
                </div>

            </div>


        </div>
    );
};

export default GetInTouch;