import { useLoaderData } from "react-router-dom";
import { usePDF } from 'react-to-pdf';
import { BiSolidDownload } from 'react-icons/bi';

const ReadingBook = () => {
    const book = useLoaderData()
    const { name, image, content, author, short_description, category_name } = book
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    return (
        <div ref={targetRef} className="w-[1280px]">
            <div className="w-full rounded-lg relative">
                <img className="rounded-lg w-full h-[400px]" src="https://i.ibb.co/qMn4Ksx/reading.png" alt="" />
                <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center">
                    <img className="w-[170px] h-[200px] rounded-lg p-3 bg-white" src={image} alt="" />
                    <h3 className="text-xl text-orange-600 p-4 rounded-lg bg-white font-bold underline italic -mt-3">{name}</h3>
                </div>
            </div>

            <div className="w-10/12 mx-auto mt-24 flex justify-between">
                <div>
                    <h3 className="text-3xl font-bold text-orange-600">Book Name : {name}</h3>
                    <p className="font-semibold text-xl pt-3">Book Category : <span className="text-orange-900 italic">{category_name}</span></p>
                </div>
                <button onClick={() => toPDF()} className="bg-orange-500 px-10 text-white font-semibold rounded-md hover:bg-orange-600"><BiSolidDownload className="inline-block mr-2 text-2xl"></BiSolidDownload>PDF Download</button>
            </div>

            <div className="w-10/12 mx-auto mt-10 flex flex-row gap-10">
                <div className="w-1/2 h-[500px] bg-slate-100 shadow-md flex items-center justify-center rounded-md">
                    <img className="w-[200px] h-[300px] rounded-md" src={image} alt="" />
                </div>
                <div className="w-1/2 h-[500px] flex flex-col justify-between">
                    <h2 className="text-4xl font-bold pb-4 border-b-4 border-orange-600">Some words from this book :</h2>
                    <p className="font-semibold text-xl pt-3">Written by : <span className="text-orange-900 italic">{author}</span></p>
                    <p className="text-justify">{content}</p>
                </div>
            </div>
            <div className="w-10/12 mx-auto mt-10 mb-24 space-y-4">
                <p className="text-justify">{short_description}</p>
                <br />

            </div>
        </div>
    );
};

export default ReadingBook;