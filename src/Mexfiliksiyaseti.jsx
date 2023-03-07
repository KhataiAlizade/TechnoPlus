import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Mexfiliksiyaseti = ({ content }) => {
  return (
    <div className="Termsofuse">
      <div className="Kecidler">
        <a href="/"> <span>{content.EsasSehife}</span></a>
        <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
        <label>{content.Mexfilik1}</label>
      </div>
      <h1>{content.Mexfilik1}</h1>
      <h5>{content.Mexfilik2}</h5>
      <p>
        {content.Mexfilik3}
      </p>
      <h5>{content.Mexfilik4}</h5>
      <p>
        {content.Mexfilik5}
      </p>
      <h5>{content.Mexfilik6}</h5>
      <p>
        {content.Mexfilik7}
      </p>
      <h5>Cookies</h5>
      <p>
        {content.Mexfilik8}
      </p>
      <h5>{content.Mexfilik9}</h5>
      <p>
        {content.Mexfilik10}
      </p>

    </div>
  );
};

export default Mexfiliksiyaseti;
