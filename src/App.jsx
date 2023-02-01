import React, { Component, lazy, Suspense } from 'react'
import  './App.css';
import './reset.css'
import PgHeader from './PgHeader';
import Footer from './Footer';
import PgMain from './PgMain';
import Haqqimizda from './Haqqimizda';
import Kampaniyalar from './Kampaniyalar';
import Map from './Map';
import Basket from './Basket';
import Login from './Login';
import Sertler from './Sertler';
import Istifadesertleri from './İstifadesertleri';
import Korporativsatislar from './Korporativsatislar';
import Bonuslardanistifade from './Bonuslardan-istifade';
import Mexfiliksiyaseti from './Mexfiliksiyaseti';
import Sikayetveteklifler from './Sikayetveteklifler';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';





const App = () => {

      return (
        
        <div  className='boyuk_div'>
       
          <Router>      
          <PgHeader/>
          <Routes>
          <Route exact  path='/Login' element={<Login/>} />
          <Route exact  path='/' element={<PgMain/>} />
          <Route exact  path='/Kampaniyalar' element={<Kampaniyalar/>} />
          <Route exact  path='/Map' element={<Map/>}/>
          <Route exact  path='/Haqqimizda' element={<Haqqimizda/>}/>
          <Route exact  path='/Sertler' element={<Sertler/>}/>
          <Route exact  path='/Istifadesertleri' element={<Istifadesertleri/>}/>
          <Route exact  path='/Korporativsatislar' element={<Korporativsatislar/>}/>
          <Route exact  path='/Bonuslardan-istifade' element={<Bonuslardanistifade/>}/>
          <Route exact  path='/Mexfiliksiyaseti' element={<Mexfiliksiyaseti/>}/>
          <Route exact  path='/Sikayetveteklifler' element={<Sikayetveteklifler/>}/>
          <Route exact  path='/Basket' element={<Basket/>}/>
            </Routes>
            <Footer/>
            </Router>
        
        </div>
      );
    }


export default App
