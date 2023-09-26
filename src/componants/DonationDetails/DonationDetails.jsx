
const DonationDetails = ({ card }) => {
    const { img, title, category, donate, bg_color, font_color, font_bg } = card;
    console.log(card);
    return (
        <>
            <div style={{ backgroundColor: bg_color }} className=" gap-5 rounded-lg flex h-[150px]">
                <figure>
                    <img className="w-52 h-[150px] rounded-l-lg" src={img} alt="Image" />
                </figure>
                <div className=" space-y-1 mt-2">
                    <div style={{ color: font_color, backgroundColor: font_bg }} className="w-min px-2 py-1 text-xs rounded-md">
                        <p>{category}</p>
                    </div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p style={{ color: font_color }} className="text-sm font-semibold">{donate}</p>
                    <div>
                        <button style={{ backgroundColor: font_color }} className="mt-2 p-1 px-2 text-base font-semibold rounded-md text-white">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationDetails;