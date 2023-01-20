import React  from 'react'
import './Footer.css';
import img5 from './image/texnoplus-logo12.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as PhoneIcon } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot as LocationIcon } from '@fortawesome/free-solid-svg-icons';
import { faFacebook as FbIcon } from '@fortawesome/free-brands-svg-icons';
import { faInstagram as InstaIcon } from '@fortawesome/free-brands-svg-icons';
import { faYoutube as YtIcon } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp as WpIcon } from '@fortawesome/free-brands-svg-icons';
import { faTelegram as TgIcon } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin as LkIcon } from '@fortawesome/free-brands-svg-icons';
import { faTwitter as TwIcon } from '@fortawesome/free-brands-svg-icons';
import { faTiktok as Tkicon } from '@fortawesome/free-brands-svg-icons';
import img6 from './image/visa.png'
import img7 from './image/master.png'
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className='Footer_div'>
      <footer>
        <section className='FtSection1'>
            <div className='Logo'>
              <a className='Logo2'><img src={img5}/> </a>
            </div>
                <div className='Links'>
                    <ul className='Sirket'>
                        <li className='sirket1'> Şirkət </li>
                        <li> <a href=""> <span>Haqqımızda </span>  </a></li>
                        <li> <a href=""> <span>Mağazalar</span>  </a></li>
                        <li> <a href=""> <span>Vakansiyalar </span>  </a></li>
                        <li> <a href=""> <span>Kampaniyalar </span>  </a></li>
                        <li> <a href=""> <span>Şərtlərimiz </span>  </a></li>
                        <li> <a href=""> <span>Karyera </span>  </a></li>
                        <li> <a href=""> <span>Servis Mərkəzləri </span>  </a></li>
                    </ul>
                    <ul className='Musteri'>
                    <li className='musteri1'> Müştəri üçün</li>
                    <li> <a href=""> <span>Saytın istifadə şərtləri </span>  </a></li>
                    <li> <a href=""> <span>Korporativ Satışlar </span>  </a></li>
                    <li> <a href=""> <span>Zəmanətlər </span>  </a></li>
                    <li> <a href=""> <span>Məxfililik siyasəti </span>  </a></li>
                    <li> <a href=""> <span>Bloq </span>  </a></li>
                    <li> <a href=""> <span>Şikayət və təkliflər </span>  </a></li>
                    </ul>
                </div>
                <p className='Huquq'>© 2022 TexnoPlus - Hüquqlarınız qorunur.</p>
        </section>
        <section className='FtSection2'>
              <div className='Contact'>
              <div className='contacts'>
                <h3>Əlaqə</h3>
                <ul>
                  <li><a href=""><FontAwesomeIcon className='foticon1' icon={PhoneIcon} /> <a href="tel: *9955"><span> *9955</span></a></a></li>
                  <li><a href="./Map"><FontAwesomeIcon className='foticon2' icon={LocationIcon} /><span>Mağazalarımız xəritədə</span></a></li>
                </ul>
                </div>
                <h4>Bizi izləyin</h4>
                <div className='SocialMedia'>
                  <ul>
                    <li><a href=""><FontAwesomeIcon className='Fbicon' icon={FbIcon} /></a></li>
                    <li><a href="https://www.instagram.com/mahirabbasli_/" target='_blank'><FontAwesomeIcon className='Instaicon' icon={InstaIcon} /></a></li>
                    <li><a href=""><FontAwesomeIcon className='Yticon' icon={YtIcon} /></a></li>
                    <li><a href=""><FontAwesomeIcon className='Wpicon' icon={WpIcon} /></a></li>
                    <li><a href=""><FontAwesomeIcon className='Tgicon' icon={TgIcon} /></a></li>
                    <li><a href=""><FontAwesomeIcon className='Lkicon' icon={LkIcon} /></a></li>
                    <li><a href=""><FontAwesomeIcon className='Twicon' icon={TwIcon} /></a></li>
                    <li><a href=""><FontAwesomeIcon className='Tkicon' icon={Tkicon} /></a></li>
                  </ul>
                </div>
                <div className='Payment'>
                  <ul>
                    <li><img src={img6} alt='Visa'/></li>
                    <li><img src={img7} alt="MasterCard" /> </li>
                  </ul>
                </div>
              </div>
          
        </section>
      </footer>
    </div>
  )
}

export default Footer
