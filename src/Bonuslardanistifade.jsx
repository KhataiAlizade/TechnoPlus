import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Bonuslardanistifade = ({ content }) => {
  return (
    <div>
      <div className="Kecidler">
        <a href="/"> <span>{content.EsasSehife}</span></a>
        <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
        <label>{content.BonusIst1}</label>
      </div>
      <h1>{content.BonusIst1}</h1>
      <h5 style={{ display: "inline" }}>Bonus - </h5>
      <span style={{ display: "inline" }}>
        {content.BonusIst2}
      </span>
      <h5>{content.BonusIst3}</h5>
      <ol className="Listes">
        <li>
          {content.BonusIst4}
        </li>
        <li>
          {content.BonusIst5}
        </li>
        <li>
          {content.BonusIst6}
        </li>
        <li>
          {content.BonusIst7}
        </li>
      </ol>
      <h5>{content.BonusIst8}</h5>
      <ol className="Listes">
        <li>
          {content.BonusIst9}
          <strong> 10 {content.BonusIst10} </strong> {content.BonusIst11}
        </li>
        <li>
          {content.BonusIst12}
          <strong>{content.BonusIst13}</strong> {content.BonusIst14}
        </li>
        <li>
          {content.BonusIst15}
          <strong> {content.BonusIst16} </strong> {content.BonusIst17}
        </li>
        <li>
          {content.BonusIst18}
        </li>
        <li>
          {content.BonusIst19} <strong> {content.BonusIst20} </strong> {content.BonusIst21}
        </li>
        <li>
          <strong>
            {content.BonusIst22}
          </strong>
        </li>
        <li>
          {content.BonusIst23}
        </li>
        <li>
          {content.BonusIst24}
        </li>
      </ol>
      <h5>{content.BonusIst25}</h5>
      <ol className="Listes">
        <li>
          {content.BonusIst26}
        </li>
        <li>
          {content.BonusIst27}
        </li>
        <li>
          {content.BonusIst28}
        </li>
        <li>
          {content.BonusIst29}
        </li>
        <li>
          {content.BonusIst30}
        </li>
        <li>
          <strong>
            {content.BonusIst31}
          </strong>
        </li>
      </ol>
    </div>
  );
};

export default Bonuslardanistifade;
