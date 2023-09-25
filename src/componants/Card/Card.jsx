/* eslint-disable react/prop-types */

const Card = ({ card }) => {

    return (
        <div className="card-compact w-60 bg-base-100 shadow-md border">
            <figure><img className="w-full h-40" src={card.img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>{card.title}</p>
                <div className="">
                    <button className="btn btn-primary">{card.category}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;