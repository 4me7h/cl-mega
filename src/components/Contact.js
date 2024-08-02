import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Fade } from 'react-awesome-reveal';
import CardContact from './CardContact';

import { FaPhone } from 'react-icons/fa6';

const Contact = () => {
    return(
        <section className='contact'>
            <div className='polygon'>
                <div className='polygon__top--left--primary'></div>
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
                                    title = "Teléfono"
                                    description = {[<a target="_blank" rel="noreferrer" href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">961 3020 343</a> ]}
                                    icon = {<FaPhone style={{color: '#0070C0', fontSize: '50px'}}/>}
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