import React, { useEffect, useState  } from "react";
import "./PgHeader.css";
import img1 from "./image/azerbaijan.png";
import img2 from "./image/united-kingdom.png";
import img3 from "./image/texnoplus-logo11.png";
import Katalog from "./Katalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as SearchIcon } from "@fortawesome/free-solid-svg-icons";
import { faUser as UserIcon } from "@fortawesome/free-regular-svg-icons";
import { faHeart as HeartIcon } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Pgmain.css"; 
import  Modal  from "react-modal";
import img4 from './image/million.png'
import img5 from './image/emanat12.png'
import img6 from './image/epul.png'
import img7 from './image/birbank1.png'
import img8 from './image/HOP portal logo1.jpg'
import img9 from './image/hesaba12.png'
import axios from "axios";
Modal.setAppElement('#root')
import Translate from './Translate.json'
import { useCart } from "react-use-cart";

const PgHeader = ({language,content,setLanguage,productnumber}) => {
  const [modal, setModal] = useState(false)
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [text,setText] =useState('');


 
  useEffect( () => {
    const loadUsers = async () => {
      const response =await axios.get('https://dummyjson.com/products/')
      setUsers(response.data.products)
    }
    loadUsers();
  }, []);
  
  

  const handleChange = event => {
    setText(event.target.value);
    let matches = [];
    if (event.target.value.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(event.target.value, "gi");
        return user.title.match(regex);
      });
    }
    setMatches(matches);
  }

  
  

  const handleModal =() => {
    setModal(true)
  }
  const handleClose =() => {
    setModal(false)
  }


  
  return (
    
    <div className="header_div">

      <header>
        <section className="section1">
          <div className="container1234">
            <div className="zad">
              <div className="raw">
                <div className="menu">
                  <ul className="menu1">
                    <li className="li1">
                      <a href='/Kampaniyalar'>{content.Kampaniyalar}</a>
                    </li>
                    <li className="li2">
                       <a href="/Bloglar">{content.Bloqlar}</a>
                    </li>
                    <li className="li3">
                      <a href="/Filiallar">{content.Filiallar}</a>
                    </li>
                  </ul>
                </div>
              </div>
             
              <div className="raw1">
                <ul className="menu2">
                  <li>
                    <a  className="M1" >
                     
                      <span style={{cursor: 'pointer'}} onClick={handleModal}> {content.Aylıq}</span>
                    </a>
                    <div className="modal">
                  <Modal style={{content: {
                    position:'fixed',
                    top:'230px',
                    left:'410px',
                    zIndex :'1050',
                    width: '700px',
                    height:'300px',
                    borderRadius :'6px',
                    border: '1px solid #BEBEBE',
                    backgroundColor :'#FFFFFF',
                  },  
                  overlay: {
                    backgroundColor: 'rgba(0,0,0,0.52)',
                    zIndex: '2'
                  }}}
                  
                  isOpen={modal} shouldCloseOnEsc onRequestClose={handleClose}>
                    <div className="modacontent1">
                   
                      <a href="https://www.million.az/" target={'_blank'}>    
                      <img src={img4} />
                      </a>
                      <a href="https://www.e-pul.az/epay/az/home" target={'_blank'}>
                    <img src={img6} />
                      </a>
                      <a href="https://emanat.az/" target={'_blank'}>
                      <img src={img5} />
                      </a>
          
                  </div>
                  <div className="modacontent2">
                    <a href="https://birbank.az/" target={'_blank'}>
                    <img className="birbank" src={img7} />
                    </a>
                    <a href="https://gpp.az/WebPortal/Infosite" target={'_blank'}>
                    <img src={img8} />
                    </a>
                    <a href="https://hesab.az/#/" target={'_blank'}>
                    <img src={img9} />
                    </a>
                    </div>
                  </Modal>
                    </div>
                  </li>
                
                  <li>
                    <a href="">
                      <span className="M2">*9955</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <button  value={language} onClick={(e) => {setLanguage('aze')}}
                       > <img  src={img1}/>
                      </button>                    
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <button value={language} onClick={(e) => {setLanguage('en')}}
                       > <img src={img2}/>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="section2">
          <div className="container123">
            <div className="header2ci">
              <div className="logo">
                <a href='/'><img alt src={img3} /></a>
              </div>
              <Katalog content={content}/>
              <div className="col1">
                <form className="form1">
                  <div className="dvform2">
                    <input  type="text"
                    onChange={handleChange}
                    value ={text}
                    className="input" placeholder={content.Axtaris}/>
                    <a className="icon11" href="">
                      <button>
                        <FontAwesomeIcon className="icon1" icon={SearchIcon} />
                      </button>
                    </a>
                    <a href ='./Login' className="icon21" >
                       <FontAwesomeIcon className="icon2" icon={UserIcon} />
                      <span> {content.Daxil}</span>
                    </a>
                    <a  href="" className="icon30">
                      <FontAwesomeIcon className="icon3" icon={HeartIcon} />
                      <span>{content.Beyen}</span>
                    </a>
                    <a href="./Sebet" className="icon41" >
                      <AiOutlineShoppingCart className="icon4" />
                      <span className="sebet41">{content.Sebet}</span>
                      <span className="CartBadge">{productnumber}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {matches.length > 0 && (
        <div className="Axtarisdiv">
          {matches.map(match => (
            <div className="Axtaris">
              <li className="Axtarisimage" key={match.id}><img src={match.thumbnail}/></li>
              <li className="Axtarisli" >{match.title}</li>
              <li className="Axtarisli2" >{match.price} AZN</li>
             
              <hr className="hraxtaris" />
            </div>
          ))}
        </div>
     )}
      </header>
    </div>

  );
};

export default PgHeader;
