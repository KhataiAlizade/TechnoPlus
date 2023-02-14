import React from 'react'
import './Zemanetler.css'
import Accordion from 'react-bootstrap/Accordion'
import img1 from './image/shield.png'
import img2 from './image/dualzemanet-1.jpg'
import img3 from './image/qizilzemanet.jpg'
import img4 from './image/vipzemanet-3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";


const Zemanetler = ({ content }) => {
    return (
        <>
            <div className='zemanetler'>
                <div className="Kecidler">
                    <a href="/"> <span>{content.EsasSehife}</span></a>
                    <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
                    <label>{content.Zemanetler1}</label>
                </div>
                <div className='opsi_zemanet'>
                    <div className='Zemanetler_soz13'>{content.Zemanetler1} </div>
                    <img src={img1} className='Zemanetler_person' />
                </div>

                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="1" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Zemanetler2}</span></Accordion.Header>
                        <Accordion.Body>
                            <img src={img2} className='image_rm' />
                            <p className='teleb_34'><strong>{content.Zemanetler3}</strong></p>
                            <p className='p145'>{content.Zemanetler4}</p>
                            <p className='p145'>
                                <strong>a)</strong>
                                {content.Zemanetler5} <br />
                                <strong>b)</strong>
                                {content.Zemanetler6} <br />
                                <strong>c)</strong>
                                {content.Zemanetler7} <br />
                                <strong>{content.ZemanetlerHerf1}</strong>
                                {content.Zemanetler8} <br />
                                <strong>{content.ZemanetlerHerf2}</strong>
                                {content.Zemanetler9} <br />
                                <strong>{content.ZemanetlerHerf3}</strong>
                                {content.Zemanetler10} <br />
                                <p className='teleb_34'><strong>{content.Zemanetler11}</strong></p>
                                <br />
                                <strong>1.</strong>
                                {content.Zemanetler12} <br />
                                <strong>2.</strong>
                                {content.Zemanetler13} <br />
                                <strong>3.</strong>
                                {content.Zemanetler14} <br />
                                <strong>4.</strong>
                                {content.Zemanetler15} <br />
                                <strong>5.</strong>
                                {content.Zemanetler16} <br />
                                <strong>6.</strong>
                                {content.Zemanetler17} <br />
                                <strong>7.</strong>
                                {content.Zemanetler18} <br />
                                <strong>8.</strong>
                                {content.Zemanetler19} <br />
                                <strong>9.</strong>
                                {content.Zemanetler20} <br />
                                <strong>10.</strong>
                                {content.Zemanetler21} <br />
                                <strong>11.</strong>
                                {content.Zemanetler22} <br />
                                <strong>12.</strong>
                                {content.Zemanetler23} <br />
                                <strong>13.</strong>
                                {content.Zemanetler24} <br />
                                <strong>14.</strong>
                                {content.Zemanetler25} <br />
                                <p className='teleb_34'><strong>{content.Zemanetler26}</strong></p>
                                {content.Zemanetler27}
                            </p>



                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Zemanetler28}</span></Accordion.Header>
                        <Accordion.Body>
                            <img src={img3} className='image_rMm' />
                            <p className='p145'>{content.Zemanetler29}</p>
                            <p className='p145'>{content.Zemanetler30}</p>
                            <p className='p145'>{content.Zemanetler31}</p>

                            <p className='teleb_34'><strong>{content.Zemanetler32}</strong></p>
                            <p className='p145'>
                                <strong>1.</strong>
                                {content.Zemanetler33} <br />
                                <strong>2.</strong>
                                {content.Zemanetler34} <br />
                                <strong>3.</strong>
                                {content.Zemanetler35} <br />
                                <strong>4.</strong>
                                {content.Zemanetler36} <br />
                                <strong>5.</strong>
                                {content.Zemanetler37} <br />
                                <strong>6.</strong>
                                {content.Zemanetler38} <br />
                                <strong>7.</strong>
                                {content.Zemanetler39} <br />
                                <strong>8.</strong>
                                {content.Zemanetler40} <br />
                                <strong>9.</strong>
                                {content.Zemanetler41} <br />
                                <strong>10.</strong>
                                {content.Zemanetler42} <br />
                                <strong>11.</strong>
                                {content.Zemanetler43} <br />
                                <strong>12.</strong>
                                {content.Zemanetler44} <br />
                                <strong>13.</strong>
                                {content.Zemanetler45} <br />
                                <strong>14.</strong>
                                {content.Zemanetler46} <br />
                                <strong>15.</strong>
                                {content.Zemanetler47} <br />
                                <strong>16.</strong>
                                {content.Zemanetler48} <br />
                                <strong>17.</strong>
                                {content.Zemanetler49} <br />
                                <strong>18.</strong>
                                {content.Zemanetler50} <br />
                                <strong>19.</strong>
                                {content.Zemanetler51} <br />
                                <strong>20.</strong>
                                {content.Zemanetler52} <br />
                                <strong>21.</strong>
                                {content.Zemanetler53} <br />
                                <strong>22.</strong>
                                {content.Zemanetler54} <br />
                                <strong>23.</strong>
                                {content.Zemanetler55} <br />
                            </p>

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>{content.Zemanetler56}</span></Accordion.Header>
                        <Accordion.Body>

                            <img src={img4} className='image_rMm' />
                            <p className='p145'>
                                <strong>1.</strong>{content.Zemanetler57} <br />
                                <strong>2.</strong>{content.Zemanetler58} <br />
                                <strong>3.</strong>{content.Zemanetler59} <br />
                                <br />
                                <strong>{content.Zemanetler60}</strong>
                                <br /><br />
                                <strong>1.</strong>{content.Zemanetler61} <br />
                                <strong>2.</strong>{content.Zemanetler62} <br />
                                <strong>3.</strong>{content.Zemanetler63} <br />
                                <strong>4.</strong>{content.Zemanetler64} <br />
                                <strong>5.</strong>{content.Zemanetler65} <br />
                                <strong>6.</strong>{content.Zemanetler66} <br />
                                <strong>7.</strong>{content.Zemanetler67} <br /> <br />

                                <strong>{content.Zemanetler68}</strong><br /><br />

                                <strong>1.</strong>{content.Zemanetler69} <br />
                                <strong>2.</strong>{content.Zemanetler70} <br />
                                <strong>3.</strong>{content.Zemanetler71} <br />
                                <strong>4.</strong>{content.Zemanetler72} <br />
                                <strong>5.</strong>{content.Zemanetler73} <br />
                                <strong>6.</strong>{content.Zemanetler74} <br />
                                <strong>7.</strong>{content.Zemanetler75} <br />
                                <strong>8.</strong>{content.Zemanetler76} <br />
                                <strong>9.</strong>{content.Zemanetler77} <br />
                                <strong>10.</strong>{content.Zemanetler78}<br /> <br />

                                <strong>{content.Zemanetler79}</strong><br /><br />

                                <strong>1.</strong>{content.Zemanetler80} <br />
                                <strong>2.</strong>{content.Zemanetler81} <br /> <br />
                                
                                <strong>{content.Zemanetler82}</strong><br /><br />
                                
                                <strong>1.</strong>{content.Zemanetler83} <br />
                                <strong>2.</strong>{content.Zemanetler84} <br />
                                <strong>3.</strong>{content.Zemanetler85} <br />
                                <strong>4.</strong>{content.Zemanetler86} <br />
                                <strong>5.</strong>{content.Zemanetler87} <br />
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>
        </>
    )
}

export default Zemanetler
