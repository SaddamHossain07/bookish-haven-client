import { Link } from "react-router-dom";
import { BsArrowRight, BsBookHalf } from 'react-icons/bs';
import { IoLibrarySharp } from 'react-icons/io5';
import { FcConferenceCall, FcLibrary } from 'react-icons/fc';
import { GiArchiveResearch } from 'react-icons/gi';
import { FaComputer } from 'react-icons/fa6';

const Services = () => {
    return (
        <div className="my-24 w-11/12 mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
                <div className="space-y-10 p-10 border-orange-100 border hover:scale-110 bg-white rounded-md">
                    <div className="w-20 h-20 rounded-full shadow-md flex items-center justify-center text-4xl text-orange-500">
                        <i><IoLibrarySharp /></i>
                    </div>
                    <h2 className="text-3xl font-bold">Ask a Librarian</h2>
                    <p>Feel free to ask our librarians about any book located at our library storage.</p>
                    <div className="text-orange-500 text-xl font-semibold flex items-center gap-4">
                        <p>READ MORE</p>
                        <Link><BsArrowRight /></Link>
                    </div>
                </div>
                <div className="space-y-10 p-10 border-orange-100 border hover:scale-110 bg-white rounded-md">
                    <div className="w-20 h-20 rounded-full shadow-md flex items-center justify-center text-4xl text-orange-500">
                        <i><FcConferenceCall /></i>
                    </div>
                    <h2 className="text-3xl font-bold">Meeting Rooms</h2>
                    <p>Our library provides well-equipped meeting rooms ranging in size from 12 to 300.</p>
                    <div className="text-orange-500 text-xl font-semibold flex items-center gap-4">
                        <p>READ MORE</p>
                        <Link><BsArrowRight /></Link>
                    </div>
                </div>
                <div className="space-y-10 p-10 border-orange-100 border hover:scale-110 bg-white rounded-md">
                    <div className="w-20 h-20 rounded-full shadow-md flex items-center justify-center text-4xl text-orange-500">
                        <i><BsBookHalf /></i>
                    </div>
                    <h2 className="text-3xl font-bold">Study Rooms</h2>
                    <p>Our study rooms located in library spaces can be reserved up to two weeks in advance.</p>
                    <div className="text-orange-500 text-xl font-semibold flex items-center gap-4">
                        <p>READ MORE</p>
                        <Link><BsArrowRight /></Link>
                    </div>
                </div>
                <div className="space-y-10 p-10 border-orange-100 border hover:scale-110 bg-white rounded-md">
                    <div className="w-20 h-20 rounded-full shadow-md flex items-center justify-center text-4xl text-orange-500">
                        <i><GiArchiveResearch /></i>
                    </div>
                    <h2 className="text-3xl font-bold">Research</h2>
                    <p>MagicBook library offers various set of resources for researchers and scholars.</p>
                    <div className="text-orange-500 text-xl font-semibold flex items-center gap-4">
                        <p>READ MORE</p>
                        <Link><BsArrowRight /></Link>
                    </div>
                </div>
                <div className="space-y-10 p-10 border-orange-100 border hover:scale-110 bg-white rounded-md">
                    <div className="w-20 h-20 rounded-full shadow-md flex items-center justify-center text-4xl text-orange-500">
                        <i><FcLibrary /></i>
                    </div>
                    <h2 className="text-3xl font-bold">Exhibitions</h2>
                    <p>Feel free to visit any of our regular book exhibitions featuring popular authors.</p>
                    <div className="text-orange-500 text-xl font-semibold flex items-center gap-4">
                        <p>READ MORE</p>
                        <Link><BsArrowRight /></Link>
                    </div>
                </div>
                <div className="space-y-10 p-10 border-orange-100 border hover:scale-110 bg-white rounded-md">
                    <div className="w-20 h-20 rounded-full shadow-md flex items-center justify-center text-4xl text-orange-500">
                        <i><FaComputer /></i>
                    </div>
                    <h2 className="text-3xl font-bold">Computer Classes</h2>
                    <p>Gain access to the immense eBook database using our computer classes.</p>
                    <div className="text-orange-500 text-xl font-semibold flex items-center gap-4">
                        <p>READ MORE</p>
                        <Link><BsArrowRight /></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;