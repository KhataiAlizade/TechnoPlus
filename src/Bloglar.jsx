import React from 'react'
import './Bloglar.css'
import img1 from './image/samsung-sayt-bloglar-1-0.jpg'
import img2 from './image/samsung-sayt-bloglar-2-0.jpg'
import img3 from './image/samsung-sayt-bloglar-3-0.jpg'
import img4 from './image/samsung-sayt-bloglar-4-0.jpg'
import img5 from './image/samsung-sayt-bloglar-5-0.jpg'
import img6 from './image/samsung-sayt-bloglar-6-0.jpg'
import img7 from './image/samsung-sayt-bloglar-7-0.jpg'
import img8 from './image/samsung-sayt-bloglar-8-0.jpg'
import img9 from './image/samsung-sayt-bloglar-9-0.jpg'
import img10 from './image/samsung-sayt-bloglar-10-0.jpg'
import img11 from './image/samsung-sayt-bloglar-11-0.jpg'
import img12 from './image/samsung-sayt-bloglar-12-0.jpg'
import img13 from './image/samsung-sayt-bloglar-13-0.jpg'
import img14 from './image/samsung-sayt-bloglar-14-0.jpg'
import img15 from './image/samsung-sayt-bloglar-15-0.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Bloglar = ({content}) => {
    return (
        <>
            <div>
                <div className="Kecidler">
                    <a href="/"> <span>{content.EsasSehife}</span></a>
                    <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
                    <label>{content.Bloqlar}</label>
                </div>
                <h1 className='bloglar_h1'>{content.Bloqlar}</h1>
                <div class='tum_blog'>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img1} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs1}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs2}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img2} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs3}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs4}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img3} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs5}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs6}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img4} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs7}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs8}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img5} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs9}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs10}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img6} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs11}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs12}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img7} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs13}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs14}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img8} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs15}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs16}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img9} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs17}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs18}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img10} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs19}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs20}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img11} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs21}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs22}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img12} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs23}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs24}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img13} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs25}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs26}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img14} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs27}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs28}
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img15} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>{content.Blogs29}</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>{content.Blogs30}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bloglar