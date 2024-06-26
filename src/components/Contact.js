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
                                    <h3 className="text--subtitle">Contáctanos</h3>
                                    <hr className='hr--basic'/>
                                </div>  
                                <div className="headercontent__content">
                                    <p className="text--lead text-uppercase">
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
                                    icon = {<FaLocationDot style={{color: '#742584', fontSize: '50px'}}/>}
                                />                                  
                            </li>
                            <li className='contact__list__item'>
                                <CardContact 
                                    title = "Teléfono"
                                    description = {["961 3020 343", <br/>, "961 4576 897"]}
                                    icon = {<FaPhone style={{color: '#742584', fontSize: '50px'}}/>}
                                />
                            </li>
                            <li className='contact__list__item'>
                                <CardContact 
                                    title = "E-mail"
                                    description = {["elcorreovaaqui@gmail.com", <br />, "otrocorreo@gmail.com"]}
                                    icon = {<FaEnvelope style={{color: '#742584', fontSize: '50px'}}/>}
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