import React from "react";
import "./Pgmain.css";
import PgVideo from "./PgVideo";
import SidebarKataloq from "./SidebarKataloq";
import Carousel from "./Carousel";
import Endirim_carousel from "./endirim_carousel";
import Partnyor from "./Partnyor";
import MainCarousel from "./MainCarousel";





const PgMain = ({content,productnumber,setProductnumber}) => {
  return (
    <>
      <div className="maindiv">
        <div className="mainsct">
          <SidebarKataloq content={content} />
          <Carousel />
          <Endirim_carousel content={content}  />
        </div>
          <MainCarousel content={content} productnumber ={productnumber} setProductnumber={setProductnumber}  />
          <PgVideo content={content}  />
          <Partnyor content={content} />
      </div>
    </>
  );
};

export default PgMain;
