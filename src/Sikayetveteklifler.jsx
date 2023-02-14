import React, { useState } from 'react'
import "./sikayetler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Sikayetveteklifler = ({content}) => {

  return (
    <div>
      <div className="Kecidler">
        <a href="/"> <span>{content.EsasSehife}</span></a>
        <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
        <label>{content.SikayetVeTeklif1}</label>
      </div>
      <div>
        <h1>{content.SikayetVeTeklif1}</h1>
        <form className='FormSikayet'>
          <input className='adinput' type='name' placeholder={content.SikayetVeTeklif2}></input>
          <input className='adinput2' type='tel' placeholder={content.SikayetVeTeklif3}></input>
          <input className='adinput3' type='text' placeholder={content.SikayetVeTeklif4}></input>
          <button className='btns1'>{content.SikayetVeTeklif5}</button>
        </form>
      </div>
    </div>
  )
}

export default Sikayetveteklifler
