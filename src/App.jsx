import React, { lazy, Suspense,useState,useEffect } from 'react'
import './App.css';
import './reset.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PgHeader from './PgHeader';
import Footer from './Footer';
import PgMain from './PgMain';
import Kampaniyalar from './Kampaniyalar';
import Filiallar from './Filiallar';
import Sebet from './Sebet';
import Bloglar from './Bloglar';
import Vakansiyalar from './Vakansiyalar';
import Servismerkezleri from './Servismerkezleri';
import Zemanetler from './Zemanetler';
import Bonuslardanistifade from './Bonuslardanistifade';
import Haqqimizda from './Haqqimizda';
import IstifadeSertleri from './IstifadeSertleri';
import Korporativsatislar from './Korporativsatislar';
import Sertlerimiz from './Sertlerimiz';
import Mexfiliksiyaseti from './Mexfiliksiyaseti';
import Login from './Login'
import Sikayetveteklifler from './Sikayetveteklifler';
import WishList from './WishList';

import Translate from './Translate.json'





const App = () => {
  const [language,setLanguage] = useState(
    localStorage.getItem('language') || 'aze'
  )
  const [content,setContent] = useState({})

  const [productnumber,setProductnumber] =useState(0)
 
 
  useEffect(() => {
    if(language==="aze"){
      setContent(Translate.aze)
    } else if(language==="en"){
      setContent(Translate.en)
    } 
    localStorage.setItem('language', language);
  },  [language] )
  return (

    <div className='boyuk_div'>
 
      <Router>
        <PgHeader productnumber={productnumber}  content={content} language={language} setLanguage={setLanguage}/>
       
        <Suspense fallback={<PgMain />}>
          <Routes>

            <Route exact path='/' element={<PgMain productnumber ={productnumber} setProductnumber={setProductnumber} content={content} language={language} setLanguage={setLanguage} />} />
            <Route exact path='/Kampaniyalar' element={<Kampaniyalar content={content} />} />
            <Route exact path='/Bloglar' element={<Bloglar  content={content} />} />
            <Route exact path='/Filiallar' element={<Filiallar content={content} />} />
            <Route exact path='/Sebet' element={<Sebet/>} />
            <Route exact path='/Login' element={<Login  />} />
            <Route exact path='/Vakansiyalar' element={<Vakansiyalar content={content} />} />
            <Route exact path='/Servismerkezleri' element={<Servismerkezleri content={content}/>} />
            <Route exact path='/Zemanetler' element={<Zemanetler content={content} />} />
            <Route exact path='/Bonuslardanistifade' element={<Bonuslardanistifade content={content} />} />
            <Route exact path='/Haqqimizda' element={<Haqqimizda content={content} />} />
            <Route exact path='/IstifadeSertleri' element={<IstifadeSertleri content={content} />} />
            <Route exact path='/Korporativsatislar' element={<Korporativsatislar content={content} />} />
            <Route exact path='/Sertlerimiz' element={<Sertlerimiz content={content} />} />
            <Route exact path='/Mexfiliksiyaseti' element={<Mexfiliksiyaseti content={content} />} />
            <Route exact path='/Sikayetveteklifler' element={<Sikayetveteklifler content={content} />} />
          
            <Route exact path='/WishList' element={<WishList/>} />

          </Routes>
        </Suspense>
        <Footer content={content} />
      </Router>

    </div>
  );
}


export default App
