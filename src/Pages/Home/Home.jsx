import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div className="max-w-[1280px]">
            <div className="w-[100%]">
                <Banner></Banner>
            </div>
            <div className="w-[100%]">
                <Category></Category>
            </div>
            <div className="w-[100%]">
                <GetInTouch></GetInTouch>
            </div>
            <div className="w-[100%]">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;