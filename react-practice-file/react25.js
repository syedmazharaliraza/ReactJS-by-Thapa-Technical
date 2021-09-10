import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";

ReactDOM.render(
    <>
        <h1 className="heading-1">My Top 5 Most Favourite Netflix Series</h1>
        <div className="cards">
            <Card imgSrc="https://bit.ly/2YjG1nJ" seriesName="Stranger Things" link="https://www.netflix.com/in/title/80057281" />
            <Card imgSrc={Sdata[1].imgSrc} seriesName={Sdata[1].seriesName} link={Sdata[1].link} />
            <Card imgSrc={Sdata[2].imgSrc} seriesName={Sdata[2].seriesName} link={Sdata[2].link} />
            <Card imgSrc={Sdata[3].imgSrc} seriesName={Sdata[3].seriesName} link={Sdata[3].link} />
            <Card imgSrc={Sdata[4].imgSrc} seriesName={Sdata[4].seriesName} link={Sdata[4].link} />
        </div>
    </>
    , document.getElementById("root"));
