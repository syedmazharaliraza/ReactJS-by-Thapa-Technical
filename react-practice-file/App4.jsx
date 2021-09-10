import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";

function ncard(val) {
    return(
        <Card
            key={val.id}
            imgSrc={val.imgSrc}
            seriesName={val.seriesName}
            sHeading={val.sHeading}
            link={val.link}
        />
    );
}

function App4() {
    return(
        <>
        <h1 className="heading-1">My Top 5 Most Favourite Netflix Series</h1>
        <div className="cards">
            {Sdata.map(ncard)}
        </div>
    </>
    );
};

export default App4;