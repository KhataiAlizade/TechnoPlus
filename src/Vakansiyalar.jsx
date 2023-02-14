import React from 'react'
import './Vakansiyalar.css'
import Accordion from 'react-bootstrap/Accordion'
import img1 from './image/resume.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Vakansiyalar = ({ content }) => {
    return (
        <div>
            <div className="Kecidler">
                <a href="/"> <span>{content.EsasSehife}</span></a>
                <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
                <label>{content.Vakansiyalar}</label>
            </div>
            <div className='vakansiya'>

                <div className='opsi_vakan'>
                    <div className='Vakansiyalar_soz13'>{content.Vakansiyalar} </div>
                    <img src={img1} className='vakansiya_person' />
                </div>

                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="1" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.SatisMeslehetcisi}</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>{content.XususiTelebler}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.OrtAliTehsil}</li>
                                <li className='li_classt'>{content.Vakansiya1}</li>
                                <li className='li_classt'>{content.Vakansiya2}</li>
                                <li className='li_classt'>{content.Vakansiya3}</li>
                                <li className='li_classt'>{content.Vakansiya4}</li>
                                <li className='li_classt'>{content.Vakansiya5}</li>
                                <li className='li_classt'>{content.Vakansiya6}</li>
                                <li className='li_classt'>{content.Vakansiya7}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.VezifeTelimati}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya8}</li>
                                <li className='li_classt'>{content.Vakansiya9}</li>
                                <li className='li_classt'>{content.Vakansiya10}</li>
                                <li className='li_classt'>{content.Vakansiya11}</li>
                                <li className='li_classt'>{content.Vakansiya12}</li>
                                <li className='li_classt'>{content.Vakansiya13}</li>
                                <li className='li_classt'>{content.Vakansiya14}</li>
                                <li className='li_classt'>{content.Vakansiya15}</li>
                                <li className='li_classt'>{content.Vakansiya16}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.MuracietFormasi}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Cv} <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Xezinedar}</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>{content.XususiTelebler}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya17}</li>
                                <li className='li_classt'>{content.Vakansiya18}</li>
                                <li className='li_classt'>{content.Vakansiya19}</li>
                                <li className='li_classt'>{content.Vakansiya20}</li>
                                <li className='li_classt'>{content.Vakansiya21}</li>
                                <li className='li_classt'>{content.Vakansiya22}</li>
                                <li className='li_classt'>{content.Vakansiya23}</li>
                                <li className='li_classt'>{content.Vakansiya24}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.VezifeTelimati}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya25}</li>
                                <li className='li_classt'>{content.Vakansiya26}</li>
                                <li className='li_classt'>{content.Vakansiya27}</li>
                                <li className='li_classt'>{content.Vakansiya28}</li>
                                <li className='li_classt'>{content.Vakansiya29}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.MuracietFormasi}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Cv} <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Emeliyatci}</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>{content.XususiTelebler}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya30}</li>
                                <li className='li_classt'>{content.Vakansiya31}</li>
                                <li className='li_classt'>{content.Vakansiya32}</li>
                                <li className='li_classt'>{content.Vakansiya33}</li>
                                <li className='li_classt'>{content.Vakansiya34}</li>
                                <li className='li_classt'>{content.Vakansiya35}</li>
                                <li className='li_classt'>{content.Vakansiya36}</li>
                                <li className='li_classt'>{content.Vakansiya37}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.VezifeTelimati}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya38}</li>
                                <li className='li_classt'>{content.Vakansiya39}</li>
                                <li className='li_classt'>{content.Vakansiya40}</li>
                                <li className='li_classt'>{content.Vakansiya41}</li>
                                <li className='li_classt'>{content.Vakansiya42}</li>
                                <li className='li_classt'>{content.Vakansiya43}</li>
                                <li className='li_classt'>{content.Vakansiya44}</li>
                                <li className='li_classt'>{content.Vakansiya45}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.MuracietFormasi}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Cv} <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Kreditİscisi}</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>{content.XususiTelebler}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya46}</li>
                                <li className='li_classt'>{content.Vakansiya47}</li>
                                <li className='li_classt'>{content.Vakansiya48}</li>
                                <li className='li_classt'>{content.Vakansiya49}</li>
                                <li className='li_classt'>{content.Vakansiya50}</li>
                                <li className='li_classt'>{content.Vakansiya51}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.VezifeTelimati}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya52}</li>
                                <li className='li_classt'>{content.Vakansiya53}</li>
                                <li className='li_classt'>{content.Vakansiya54}</li>
                                <li className='li_classt'>{content.Vakansiya55}</li>
                                <li className='li_classt'>{content.Vakansiya56}</li>
                                <li className='li_classt'>{content.Vakansiya57}</li>
                                <li className='li_classt'>{content.Vakansiya58}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.MuracietFormasi}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Cv} <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.QrafikDizayner}</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>{content.XususiTelebler}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya59}</li>
                                <li className='li_classt'>{content.Vakansiya60}</li>
                                <li className='li_classt'>{content.Vakansiya61}</li>
                                <li className='li_classt'>{content.Vakansiya62}</li>
                                <li className='li_classt'>{content.Vakansiya63}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.VezifeTelimati}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya64}</li>
                                <li className='li_classt'>{content.Vakansiya65}</li>
                                <li className='li_classt'>{content.Vakansiya66}</li>
                                <li className='li_classt'>{content.Vakansiya67}</li>
                                <li className='li_classt'>{content.Vakansiya68}</li>
                                <li className='li_classt'>{content.Vakansiya69}</li>
                                <li className='li_classt'>{content.Vakansiya70}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.MuracietFormasi}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Cv} <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Anbardar}</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>{content.XususiTelebler}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya71}</li>
                                <li className='li_classt'>{content.Vakansiya72}</li>
                                <li className='li_classt'>{content.Vakansiya73}</li>
                                <li className='li_classt'>{content.Vakansiya74}</li>
                                <li className='li_classt'>{content.Vakansiya75}</li>
                                <li className='li_classt'>{content.Vakansiya76}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.VezifeTelimati}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya77}</li>
                                <li className='li_classt'>{content.Vakansiya78}</li>
                                <li className='li_classt'>{content.Vakansiya79}</li>
                                <li className='li_classt'>{content.Vakansiya80}</li>
                                <li className='li_classt'>{content.Vakansiya81}</li>
                                <li className='li_classt'>{content.Vakansiya82}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.MuracietFormasi}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Cv} <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Qeydiyyatci}</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>{content.XususiTelebler}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya83}</li>
                                <li className='li_classt'>{content.Vakansiya84}</li>
                                <li className='li_classt'>{content.Vakansiya85}</li>
                                <li className='li_classt'>{content.Vakansiya86}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.VezifeTelimati}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Vakansiya87}</li>
                                <li className='li_classt'>{content.Vakansiya88}</li>
                                <li className='li_classt'>{content.Vakansiya89}</li>
                                <li className='li_classt'>{content.Vakansiya90}</li>
                                <li className='li_classt'>{content.Vakansiya91}</li>
                                <li className='li_classt'>{content.Vakansiya92}</li>
                                <li className='li_classt'>{content.Vakansiya93}</li>
                                <li className='li_classt'>{content.Vakansiya94}</li>
                            </ul>
                            <p className='teleb_34'><strong>{content.MuracietFormasi}</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>{content.Cv} <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>
        </div>
    )
}

export default Vakansiyalar;