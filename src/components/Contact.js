import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Fade } from 'react-awesome-reveal';
import CardContact from './CardContact';

import { FaLocationDot, FaPhone, FaEnvelope  } from 'react-icons/fa6';

const Contact = () => {
    return(
        <section className='contact'>
            <div className='polygon'>
                <div className='polygon__top--left--white'></div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="headercontent__container">
                            <div className="headercontent__header">
                                <Fade cascade triggerOnce direction="up"> 
                                <div className='headercontent__header__content'>
                                    <h3 className="text--subtitle text--white">Contáctanos</h3>
                                    <hr className='hr--basic hr--basic--white'/>
                                </div>  
                                <div className="headercontent__content">
                                    <p className="text--lead text-uppercase text--white">
                                        Ponte en contacto y déjanos saber como podemos ayudarte
                                    </p>    
                                </div>
                                </Fade>
                            </div>
                        </div>
                        <ul className='contact__list'>
                            <li className='contact__list__item'>
                                <CardContact 
                                    title = "Dirección" 
                                    description = {["13 Poniente #345", <br/>, "Col. Xamaipac 23094", <br/>, "Tuxtla Gutiérrez, Chiapas"]}
                                    icon = {<FaLocationDot style={{color: '#0070C0', fontSize: '50px'}}/>}
                                />                                  
                            </li>
                            <li className='contact__list__item'>
                                <CardContact 
                                    title = "Teléfono"
                                    description = {["961 3020 343", <br/>, "961 4576 897"]}
                                    icon = {<FaPhone style={{color: '#0070C0', fontSize: '50px'}}/>}
                                />
                            </li>
                            <li className='contact__list__item'>
                                <CardContact 
                                    title = "E-mail"
                                    description = {["elcorreovaaqui@gmail.com", <br />, "otrocorreo@gmail.com"]}
                                    icon = {<FaEnvelope style={{color: '#0070C0', fontSize: '50px'}}/>}
                                />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;