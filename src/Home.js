import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";




const Home = () => (
  <>
    <h1 className="heading">List of top 5 netflix show in 2021</h1>;
    {
      Sdata.map(function ncard(val) {
        return (

          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}

          />
        );
      })}
  </>
);


export default Home;