import React from "react";
import Slider from "react-slick";
import "./MainCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faManatSign as ManatIcon } from "@fortawesome/free-solid-svg-icons";
import { faDollar as DollarIcon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {addToCard, getProducts, getProductLaptop} from './services/api';
import { useCart } from 'react-use-cart';

const MainCarousel = ({content,language,setLanguage}) => {

  const [products, setProducts] = useState([]);
  const [productlaptop, setProductLaptop] = useState([]);
  const [cart,setCart] = useState([])



  const AddCart = () =>{
    addItem(products);
}
  useEffect( () => { 

    // load products
    getProductList();    
    getProductLaptops();

  }, []);

  const getProductList = async () => {
    const get_products = await getProducts([])
    setProducts(old_data => get_products);
  }
  const getProductLaptops = async () => {
    const get_laptopproduct = await getProductLaptop([])
    setProductLaptop(old_data => get_laptopproduct);
  }




  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
      return (
          <div className="Main_Carousel">
           <b>{content.Smartfon}</b>
           <Slider {...settings}>
           
           { 
            products?.map((product) => {
            return (
              <div>
           <div  className="EveryCarousel">
            <a href="">
              
              <div className="orders">
                <span className="firstKomissiyasiz">{content.Komissiya}</span>
                <span className="firstFaizsiz">{content.Faiz}</span>
              </div>
              
              <div className="ImgCarousel"> <img src={product.thumbnail}/></div>
              <div className="Mehsullarin_adlari"><span>{product.title}</span></div>
              <div className="KreditSpan"><span>0 <FontAwesomeIcon className="ManatIcon1" icon={ManatIcon} />{content.Ay} </span></div>
              <div className="QiymetSpan"> <span>{product.price} <FontAwesomeIcon className="ManatIcon2" icon={ManatIcon} /></span></div>
              <div className="Mehsulbtn"><button onClick={AddCart}>{content.Sebetat}</button></div>
            </a>
           </div>
          
           
           </div>
           
           
           
            )
            
          })
        }
           

          
           </Slider>
           <div className="Main_Carousel">
           <b>{content.Noutbuks}</b>
<Slider {...settings}>
{
            productlaptop?.map((product) => {
            return (
              <div>
           <div  className="EveryCarousel">
            <a href="">
              
            <div className="orders">
                <span className="firstKomissiyasiz">{content.Komissiya}</span>
                <span className="firstFaizsiz">{content.Faiz}</span>
              </div>
              
              <div className="ImgCarousel"> <img src={product.thumbnail}/></div>
              <div className="Mehsullarin_adlari"><span>{product.title}</span></div>
              <div className="KreditSpan"><span>0 <FontAwesomeIcon className="ManatIcon1" icon={ManatIcon} />{content.Ay} </span></div>
              <div className="QiymetSpan"> <span>{product.price} <FontAwesomeIcon className="ManatIcon2" icon={ManatIcon} /></span></div>
              <div className="Mehsulbtn"> <button onClick={AddCart}>{content.Sebetat}</button></div>
            </a>
           </div>
          
           
           </div>
           
           
            )
            
          })
        }
</Slider>
           
           
          </div>
          </div>
          
        
      )
}
export default MainCarousel;