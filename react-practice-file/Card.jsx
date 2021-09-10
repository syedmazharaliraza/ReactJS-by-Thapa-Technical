import React from "react";
import "./index.css";

function Card(props) {
    return (
        <>
                <div className="card">
                    <img className="cardImg" src={props.imgSrc} alt="SeriesImg" />
                    <div className="cardInfo">
                        <p className="sHeading">{props.sHeading}</p>
                        <h2 className="seriesName">{props.seriesName}</h2>
                        <a className="link" href={props.link} target="_blank">
                            <button className="watchNow">Watch Now</button>
                        </a>
                    </div>
                </div>
        </>
    );
};

export default Card;