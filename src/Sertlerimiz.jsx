import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";


const Sertlerimiz = ({ content }) => {
  return (
    <div>
      <div className="Kecidler">
        <a href="/"> <span>{content.EsasSehife}</span></a>
        <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
        <label>{content.Sertlerimiz1}</label>
      </div>
      <h1>{content.Sertlerimiz1}</h1>
      <h5>{content.Sertlerimiz2}</h5>
      <div className="MainTerms">
        <h5>{content.Sertlerimiz3}</h5>
        <div className="MainTerms1">
          <em>{content.Sertlerimiz4} - </em>
          <span>
            {content.Sertlerimiz5}
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>{content.Sertlerimiz6} - </em>
          <span>
            {content.Sertlerimiz7}
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>{content.Sertlerimiz8} - </em>
          <span>
            {content.Sertlerimiz9}
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>PORTAL - </em>
          <span>
            {content.Sertlerimiz10}
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em> {content.Sertlerimiz11} - </em>
          <span>
            {content.Sertlerimiz12}
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>{content.Sertlerimiz13} - </em>
          <span>
          {content.Sertlerimiz14}
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>{content.Sertlerimiz15} - </em>
          <span>
          {content.Sertlerimiz16}
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>{content.Sertlerimiz17} - </em>
          <span>
          {content.Sertlerimiz18}
          </span>
          <br />
        </div>
      </div>
      <div className="SpecialTerms">
        <h5 style={{ marginTop: "50px" }}>{content.Sertlerimiz19}</h5>
        <p>
          1. {content.Sertlerimiz20}
        </p>
        <p>
          2. {content.Sertlerimiz21}
        </p>
        <p>
          3. {content.Sertlerimiz22}
        </p>
        <p>
          4. {content.Sertlerimiz23}
        </p>
        <p>
          5. {content.Sertlerimiz24}
        </p>
        <p>
          6. {content.Sertlerimiz25}
        </p>
        <p>
          7. {content.Sertlerimiz26}
        </p>
        <p>
          8. {content.Sertlerimiz27}
        </p>
        <p>
          9. {content.Sertlerimiz28}
        </p>
        <p>
          10. {content.Sertlerimiz29}
        </p>
      </div>
      <div className="DeliveryTerms">
        <h5 style={{ marginTop: "40px" }}>{content.Sertlerimiz30}</h5>
        <p>
        {content.Sertlerimiz31}
        </p>
        <p>
        {content.Sertlerimiz32}
        </p>
        <p>
        {content.Sertlerimiz33}
        </p>
        <p>
        {content.Sertlerimiz34}
        </p>
        <p>
        {content.Sertlerimiz35}
        </p>
        <p>
        {content.Sertlerimiz36}
        </p>
      </div>
    </div>
  );
};

export default Sertlerimiz;
