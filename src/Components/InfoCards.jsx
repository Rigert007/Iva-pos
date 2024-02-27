import React from "react";
import "../style/InfoCards.css";

const InfoCard = ({ title, value }) => {
    return (
        <div className="info-card">
            <div className="title">{title}</div>
            <div className="value">{value}</div>
        </div>
    );
};

export default InfoCard;
