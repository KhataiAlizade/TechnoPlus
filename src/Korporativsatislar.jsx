import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Korporativsatislar = ({ content }) => {
  return (

    <div>
      <div className="Kecidler">
        <a href="/"> <span>{content.EsasSehife}</span></a>
        <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
        <label>{content.Korparativ1}</label>
      </div>
      <div className="Corporative">
        <h1>{content.Korparativ1}</h1>
        <p>
          {content.Korparativ2}{" "}
        </p>
        <p>
          {content.Korparativ3}
        </p>
        <span>{content.Korparativ4}</span>
        <ol className="Listes">
          <li>{content.Korparativ5}</li>
          <li>
            {content.Korparativ6}
          </li>
          <li>
            {content.Korparativ7}
          </li>
          <li>{content.Korparativ8}</li>
          <li>
            {content.Korparativ9}
          </li>
          <li>{content.Korparativ10}</li>
        </ol>
        <p style={{ marginTop: "30px" }} >
          {content.Korparativ11}
        </p>
        <ul>
          <li>+994(050)-977-11-81</li>
          <li>(012)-478-98-60</li>
          <li>
            {content.Korparativ12}  <a href="mailto:mahirabbasli777@gmail.com"> mahirabbasli777@gmail.com</a> </li>
        </ul>
      </div>
    </div>
  );
};

export default Korporativsatislar;
