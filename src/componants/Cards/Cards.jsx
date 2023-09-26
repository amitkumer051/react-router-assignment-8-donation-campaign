/* eslint-disable react/prop-types */

import Card from "../Card/Card";
const Cards = ({cards}) => {
    return (
        <div className="grid lg:grid-cols-4 gap-6 mb-6  md:grid-cols-2 grid-cols-1 mt-10">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;