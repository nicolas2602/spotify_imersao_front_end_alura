import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <div className={"line-card-text "+props.cor}>
            <h1>{props.msg}</h1>
            <img src={props.image} alt={props.alt} />
        </div>
    )
};

export default Card;