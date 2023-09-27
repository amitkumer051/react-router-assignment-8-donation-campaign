import { useEffect, useState } from "react";
import DonationDetails from "../DonationDetails/DonationDetails";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [cardlength, setCardLength] = useState(4);
    const [noData, setNoData] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoData("No Data Available")
        }
    }, [])
    return (
        <>
                <div>
                    {
                        noData ? <p className="items-center text-center mt-20 text-2xl ">{noData}</p> :
                            <>
                                <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-2 mb-8 mt-4">
                                    {
                                    donation.slice(0, cardlength).map(card => <DonationDetails key={card.id} card={card}></DonationDetails>)
                                    }
                                </div>
                                <div className={`mb-5 mt-2 text-center ${cardlength == donation.length && 'hidden'}`}>
                                   {donation.length > 4 &&
                                     <button onClick={() => setCardLength(donation.length)} className="mt-2 p-2 px-4 text-base font-semibold bg-green-800 rounded-md text-white">See All</button>
                                   }
                                </div>
                            </>
                    }
                </div>
        </>
    );
};

export default Donation;