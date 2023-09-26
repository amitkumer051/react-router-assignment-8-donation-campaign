import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "../DonateCard/DonateCard";

const DetailsOfCards = () => {
    const [card,setCard]= useState([]);
    const {id} =useParams();
    const datas = useLoaderData();
    console.log(id);
    useEffect(()=>{
        const findCard = datas.find(data => data.id == id)
        console.log(findCard);
        setCard(findCard)
    } ,[datas,id])
    return (
        <div>
            <DonateCard card={card}></DonateCard>
        </div>
    );
};

export default DetailsOfCards;