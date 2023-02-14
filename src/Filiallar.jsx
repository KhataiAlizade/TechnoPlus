import React from 'react'
import './Filiallar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Filiallar = ({content}) => {
  return (
    <div>
      <div className="Kecidler">
      <a href="/"> <span>{content.EsasSehife}</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>{content.Filiallar}</label>
      </div>
      <div className='filiallar_sozu'>{content.Filiallar}</div>
      <div className='iframe_map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11935.964475416074!2d49.84456509654231!3d40.377897686071385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e1!3m2!1saz!2s!4v1674809966497!5m2!1saz!2s"
          width="1170"
          height="500"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2 className='baki_seheri'>{content.BakiSeheri}</h2>
      <div className='filiallar_div'>
        <div className='filiallar_kicik_div_part'>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>AF Mall {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan1}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>{content.filiali1} {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan2}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>{content.filiali2} {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan3}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>20 Yanvar {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan4}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
        </div>
        <div className='filiallar_kicik_div_part'>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>{content.filiali3} {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan5}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>{content.filiali4} {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan6}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>{content.filiali5} {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan7}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>Nizami {content.filiali22}</span>
            <span className='adres_filial'>{content.filialUnvan8}</span>
            <span className='is_saati_filial'>{content.filialiİsSaati} 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filiallar
