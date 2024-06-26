import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';

import { Fade } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Fade triggerOnce direction='right' cascade>
                                    <p className='text--small text--white'>Megacable - La mejor conexión a tu alcance</p>
                                    <h1 className="text--title text--white">MEGA CABLE VENTAS TUXTLA</h1>
                                    <h2 className="text--subtitle text--white">¡Conéctate con la mejor señal en <span className='text--white'>Tuxtla Gutiérrez!</span></h2>
                                    <p className='text--body text--white'>Megacable ofrece servicios de Internet de alta velocidad, televisión digital y telefonía con tecnología avanzada para hogares y negocios en México, garantizando calidad y satisfacción a sus clientes.</p>
                                    <a className="btn btn--secondary" href="http;//linux.com">Cotiza tu Paquete de MEGA CABLE</a>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='polygon'>
                <div className='polygon__top--left'></div>
            </div>
        </section>
    )
}

export default Hero;