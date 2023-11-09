import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div className="max-w-[1280px]">
            <Banner></Banner>
            <Category></Category>
            <GetInTouch></GetInTouch>
            <Services></Services>
        </div>
    );
};

export default Home;