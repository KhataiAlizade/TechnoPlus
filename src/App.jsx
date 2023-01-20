import React, { Component, lazy, Suspense } from 'react'
import  './App.css';
import './reset.css'
import PgHeader from './PgHeader';
import Footer from './Footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

const PgMain =  lazy (() => import("./PgMain"));
const Kampaniyalar =  lazy (() => import("./Kampaniyalar"));
const Map =  lazy (() => import("./Map"));
const Sebet =  lazy (() => import("./Sebet"));


const App = () => {

      return (
        
        <div  className='boyuk_div'>
       
          <Router>      
          <PgHeader/>
          <Suspense fallback={<PgMain/>}>
          <Routes>
            
          <Route exact  path='/' element={<PgMain/>} />
          <Route exact  path='/Kampaniyalar' element={<Kampaniyalar/>} />
          <Route exact  path='/Map' element={<Map/>}/>
          <Route exact  path='/Sebet' element={<Sebet/>}/>
            </Routes>
            </Suspense>
            <Footer/>
            </Router>
        
        </div>
      );
    }


export default App
