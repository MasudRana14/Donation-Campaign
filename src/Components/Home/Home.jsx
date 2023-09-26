
import Banner from "./Banner/Banner";
import Cards from "../Cards/Cards";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const card = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Cards card={card}></Cards>
        </div>
    );
};

export default Home;