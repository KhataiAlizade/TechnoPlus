import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";
import { ContentCopy } from "@mui/icons-material";

const IstifadeSertleri = ({ content }) => {
  return (
    <div className="Termsofuse">
      <div className="Kecidler">
        <a href="/"> <span>{content.EsasSehife}</span></a>
        <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
        <label>{content.Istifade1}</label>
      </div>
      <h1>{content.Istifade1}</h1>
      <h5>{content.Istifade2}</h5>
      <p>
        {content.Istifade3}
      </p>
      <h5>{content.Istifade4}</h5>
      <p>
        {content.Istifade5}
      </p>
      <h5>{content.Istifade6}</h5>
      <p>
        {content.Istifade7}
      </p>
      <h5>{content.Istifade8}</h5>
      <p>
        {content.Istifade9}
      </p>
      <h5>{content.Istifade10}</h5>
      <p>
        {content.Istifade11}
      </p>
      <h5>{content.Istifade12}</h5>
      <p>
        {content.Istifade13}
      </p>
      <h5>{content.Istifade14}</h5>
      <p>
        {content.Istifade15}
      </p>
    </div>
  );
};

export default IstifadeSertleri;
