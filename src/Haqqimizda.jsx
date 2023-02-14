import React from "react";
import "./Haqqimizda.css";
import img1 from './image/delivery.png'
import img2 from './image/guaranteed.png'
import img3 from './image/security.png'
import img4 from './image/history.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";
import "./Sertler.css"


const Haqqimizda = ({content}) => {
  return (
    <div>
       <div className="Kecidler">
      <a href="/"> <span>{content.EsasSehife}</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>{content.Haqqimizda}</label>
      </div>
      <div className="AboutUs">{content.Haqqimizda}</div>
      <div className="About1">
        <strong>{content.BizKimik}</strong>
        <div className="WhoWe">
        {content.SozlerHaqqimizda1}
        </div> 
        <div className="About2">
          <li className="lis">
            <strong>{content.Sevilen}</strong>
            <span>
            {content.SozlerHaqqimizda2}
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>{content.HaqqimizdaAxtardigin}</strong>
            <span>
            {content.SozlerHaqqimizda3}
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>{content.SerfeliHaqqimizda}</strong>
            <span>
            {content.SozlerHaqqimizda4}
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>
            {content.SeninHaqqimizda}
            </strong>
            <span>
            {content.SozlerHaqqimizda5}
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>{content.SosialHaqqimizda}</strong><br />
            <span>
            {content.SozlerHaqqimizda6}
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>{content.HemiseHaqqimizda}</strong>
            <span>
            {content.SozlerHaqqimizda7}
            </span>
          </li>
        </div>
      </div>
      <div className="About3">
        <strong>{content.TariximizHaqqimizda}</strong>
        <ul>
          <li className="lis">
          {content.li1Haqqimizda}
            <li className="lis">
            {content.li2Haqqimizda}
            </li>
          </li>
          <li className="lis">
          {content.li3Haqqimizda}
          </li>
          <li className="lis">
          {content.li4Haqqimizda}
          </li>
          <li className="lis">
          {content.li5Haqqimizda}
          </li>
          <li className="lis">
          {content.li6Haqqimizda}
          </li>
        </ul>
      </div>
      <div className="About4">
        <div className="firstdelivery">
        <img src={img1}></img>
        <div className="caption">
        <span className="st">{content.SuretliHaqqimizda}</span>
        <span className="sn">{content.CatdirilmaHaqqimizda}</span>
        </div>
        </div>
        <div className="firstdelivery2">
        <img src={img2}></img>
        <div className="caption">
        <span className="st">{content.ZemanetHaqqimizda}</span>
        <span className="sn">{content.SaytdaHaqqimizda}</span>
        </div>
        </div>
        <div className="firstdelivery3">
        <img src={img3}></img>
        <div className="caption">
        <span className="st">{content.TehlukesizHaqqimizda}</span>
        <span className="sn">{content.PaymentHaqqimizda}</span>
        </div>
        </div>
        <div className="firstdelivery4">
        <img src={img4}></img>
        <div className="caption">
        <span className="st">24/7</span>
        <span className="sn">{content.XidmetHaqqimizda}</span>
        </div>
        </div>
      
        
      </div>
    </div>
  );
};

export default Haqqimizda;
