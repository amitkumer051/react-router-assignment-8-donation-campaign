import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";


const Home = () => {
    const cards =useLoaderData()
    return (
      <>
      <Banner cards={cards}></Banner>
      </>
    );
};

export default Home;