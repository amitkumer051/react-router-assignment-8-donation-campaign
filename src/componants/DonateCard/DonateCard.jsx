/* eslint-disable react/prop-types */
import swal from "sweetalert";

const DonateCard = ({ card }) => {
    const { id, img, title, font_color, overlay, description,donate } = card;
    const handleAddToDonation = () => {
        swal("Good job!", "Donation Successfull!", "success", {
            button: "OK!",
        });
        const addDonationItems = [];
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (!donationItems) {
            addDonationItems.push(card);
            localStorage.setItem('donation', JSON.stringify(addDonationItems))
        }
        else {
            // const isExist = donationItems.find(card => card.id === id)

            // if (!isExist) {
                addDonationItems.push(...donationItems, card)
                localStorage.setItem('donation', JSON.stringify(addDonationItems))
            // }
            // else {
            //     return;
            // }
        }
    }

    return (
        <><div className=" mb-5 px-1">
            <img className="md:h-[440px] h-[440px] w-full  absolute container " src={img} alt="" />
            <div className=" relative flex items-end justify-start h-[440px] w-full">
                <div style={{ background: overlay }} className="lg:w-full h-24 opacity-70  absolute container justify-end">
                </div>
                <button onClick={handleAddToDonation} style={{ background: font_color }} className="h-10 w-32 p-2 m-7 text-white font-semibold rounded text-xs relative">Donate {donate}</button>

            </div>
        </div>
            <div className="space-y-5 mb-5 px-1">
                <div>
                    <h2 className="font-bold text-4xl">{title}</h2>
                </div>
                <div>
                    <p className="text-sm text-justify ">{description}</p>
                </div>
            </div>
        </>
    );
};

export default DonateCard;
