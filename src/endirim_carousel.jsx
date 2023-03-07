import React, { useState,useEffect } from 'react'
import './endirim_carousel.css'
import {getDiscounts} from './services/api';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faManatSign as ManatIcon } from "@fortawesome/free-solid-svg-icons";
import { faHeart as HeartIcon } from "@fortawesome/free-regular-svg-icons";





const endirim_carousel = ({content}) => {
    const [second,setSecond]= useState(59);
    const [clock,setClock] = useState(6);
    const [minute,setMinute] = useState(47);

  const [discounts, setDiscounts] = useState([]);

  useEffect( () => { 

    getDiscountsList();    

  }, []);
  const getDiscountsList = async () => {
    const get_discounts = await getDiscounts([])
    setDiscounts(old_data => get_discounts);
  }

    useEffect(() => {
     const Seconds = setInterval(() => {
            setSecond(second=> {
                if (second === 0) {
                    return 59;
                }
                return second ---1;
            })
        },1000);
       return () => clearInterval(Seconds)
    }, [])

   useEffect(() => {
   const clocks = setInterval(() => {
        setClock(clock =>  {
            if (clock === 0){
                return 24;
            }
            return clock ---1;
        })
    }, 1440000);
   },[])


   useEffect(() => {
    const Minutes = setInterval(() => {
        setMinute(minute=> {
            if (minute===0) {
                return 60;
            }
            return minute---1;
        })
    }, 60000);
    return () => clearInterval(Minutes)
   }, [])
  
 const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true
    };

  return (
    <div>
      <div className="big_div">
        <div className="portre">
            <div className="hef_end">
                <span>{content.Hefte}</span>
            </div>
            <ul className="time">
                <li className="li_1 li_right1" >
                    <span className="hour">{clock}</span>
                    <span className="hour1">{content.Saats}</span>
                </li>
                <li className="li_2 li_right2">
                     <span className="minute">{minute}</span>
                    <span className="minute1">{content.Deqiqe}</span>
                </li>
                <li className="li_3">
                    <span className="second">{second}</span>
                    <span className="second2">{content.Saniye}</span>
                </li> 
            </ul>
            <Slider {...settings}>
                { 
            discounts?.map((discount) => {
            return (
                <div>
           <div  className="EveryCarousel1">               
              <div className="ImgCarousel1"> <img src={discount.image}/></div>
            <button>   <FontAwesomeIcon className="icon34" icon={HeartIcon} /></button> 
              <div className="Mehsullarin_adlari1"><span>{discount.title}</span></div>
              <div className="QiymetSpan1"> <span>{discount.price} <FontAwesomeIcon className="ManatIcon23" icon={ManatIcon} /></span></div>
              <div className="QiymetSpan2"> <span>{discount.discountprice} <FontAwesomeIcon className="ManatIcon23" icon={ManatIcon} /></span></div>
              <div className="Mehsulbtn1"><button>{content.Sebetat}</button></div>
           </div>
          
           
           </div>
           
                 )
            
                })}   
                 </Slider>                         
                    </div>
                    <span className="span_but_tek_bax">
                    {content.Butun}
                    </span>
                </div>
        </div>
  )
}

export default endirim_carousel
