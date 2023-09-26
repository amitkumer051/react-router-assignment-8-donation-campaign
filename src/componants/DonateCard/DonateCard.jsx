import swal from "sweetalert";

const DonateCard = ({ card }) => {
    console.log(card);
    const { id, img, title, font_color, overlay, description, } = card;
    console.log(card);

    const handleClick=()=>{
        swal("Good job!", "Donation Successfull!", "success", {
            button: "OK!",
          });
    }

    return (
        <><div className=" mb-5 ">
            <img className="md:h-[440px] lg:h-[440px] lg:w-full h-auto w-auto absolute container " src={img} alt="" />
            <div className=" relative flex items-end justify-start md:h-[440px] lg:h-[440px] lg:w-full h-auto w-auto">
                <div style={{background:overlay}} className="w-full h-24 opacity-70  absolute container justify-end"></div>
                <button onClick={handleClick} style={{ background: font_color }} className="h-10 w-32 p-2 m-7 text-white font-semibold rounded text-base relative">Donate $290</button>
               
            </div>
        </div>
            <div className="space-y-5 mb-5">
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
