import { useEffect, useState } from "react";
import DonationDetails from "../DonationDetails/DonationDetails";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [cardlength,setCardLength]= useState(4);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        setDonation(donationItems);
    }, [])
    return (
        <>
            <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-2 mb-8 mt-4">
                {
                donation.slice(0,cardlength).map(card => <DonationDetails key={card.id} card={card}></DonationDetails>)
                }
            </div>
            <div  className={`mb-5 mt-2 text-center ${cardlength === donation.length && 'hidden'} `}>
                <button onClick={()=> setCardLength(donation.length)} className="mt-2 p-2 px-4 text-base font-semibold bg-green-800 rounded-md text-white">See All</button>
            </div>
        </>
    );
};

export default Donation;