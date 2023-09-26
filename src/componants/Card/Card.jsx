/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, img, title, bg_color, font_bg, font_color, category } = card || "";

    return (
           <Link to={`/cards/${id}`}>
            <div style={{ background: bg_color }} className="rounded-lg w-60 mx-auto">
                <figure><img className="w-full h-40 rounded-t-lg" src={img} alt="" /></figure>
                <div className=" p-3">
                    <h2 style={{ color: font_color, background: font_bg }} className="text-xs text-center items-center  p-[1px] w-[62px] rounded-md">{category}</h2>
                    <p style={{ color: font_color }} className="text-base font-bold">{title}</p>
                </div>
            </div>
           </Link>
    );
};

export default Card;