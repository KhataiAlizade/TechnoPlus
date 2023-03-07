import React from 'react'
import './Kampaniyalar.css'
import img1 from './image/samsung-sayt-kampaniya-1-0.jpg'
import img2 from './image/samsung-sayt-kampaniya-2-0.jpg'
import img3 from './image/samsung-sayt-kampaniya-3-0.jpg'
import img4 from './image/samsung-sayt-kampaniya-4-0.jpg'
import img5 from './image/samsung-sayt-kampaniya-5-0.jpg'
import img6 from './image/samsung-sayt-kampaniya-6-0.jpg'
import img7 from './image/samsung-sayt-kampaniya-7-0.jpg'
import img8 from './image/samsung-sayt-kampaniya-8-0.jpg'
import img9 from './image/samsung-sayt-kampaniya-9-0.jpg'
import img10 from './image/samsung-sayt-kampaniya-10-0.jpg'
import img11 from './image/samsung-sayt-kampaniya-11-0.jpg'
import img12 from './image/samsung-sayt-kampaniya-12-0.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react'

const Kampaniyalar = ({content}) => {
  const [second,setSecond]= useState(44);
  const [clock,setClock] = useState(3);
  const [minute,setMinute] = useState(57);

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
  return (
    <section>
      <div className="Kecidler">
      <a href="/"> <span>{content.EsasSehife}</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>{content.Kampaniyalar}</label>
      </div>
      <div> 
        <h1 className='h1_class'>{content.Kampaniyalar}</h1>
        <div class='tum_xeber'>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img10} />
              </div> 
              <div className='tarix_soz_1'>
                <p className='tarix1'>1 {content.Fevral} - 28 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya1} </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img2} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>3 {content.Fevral} - 2 {content.Mart}</p>
                <p className='cumle1'>{content.Kampaniya2} </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img3} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>18 {content.Fevral} - 23 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya3}</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
          </div>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img4} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>5 {content.Fevral} - 27 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya4} </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img5} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>1 {content.Fevral} - 25 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya5}</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img6} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>5 {content.Fevral} - 26 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya6} </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
          </div>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img7} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>3 {content.Fevral} - 15 {content.Mart}</p>
                <p className='cumle1'>{content.Kampaniya7} </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img8} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>1 {content.Fevral}</p>
                <p className='cumle1'>Galaxy Unpacked 2023 </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img9} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>10 {content.Fevral} - 5 {content.Mart}</p>
                <p className='cumle1'>{content.Kampaniya8}</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
          </div>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img1} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>7 {content.Fevral} - 27 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya9} </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img11} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>17 {content.Fevral} - 28 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya10}</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img12} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>17 {content.Fevral} - 28 {content.Fevral}</p>
                <p className='cumle1'>{content.Kampaniya11}</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 {content.Gün} {clock} : {minute} : {second}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kampaniyalar