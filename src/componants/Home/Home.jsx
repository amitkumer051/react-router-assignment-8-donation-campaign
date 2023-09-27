import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";


const Home = () => {
    const cards =useLoaderData()
    return (
      <>
      <Banner cards={cards}></Banner>
      </>
    );
};

export default Home;