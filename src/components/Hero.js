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
                                    <p className='text--small text--white'>CLDEV desde 2010</p>
                                    <h1 className="text--title text--tertiary">Landing Pages</h1>
                                    <h2 className="text--subtitle">Bienvenido a la solución definitiva para tus necesidades de <span className='text--tertiary'>marketing digital.</span></h2>
                                    <p className='text--body text--white'>En nuestra plataforma, te ofrecemos las herramientas y la experiencia necesarias para desarrollar landing pages efectivas que impulsen tus ventas y potencien el crecimiento de tu negocio.</p>
                                    <a className="btn btn--tertiary" href="http;//linux.com">Cotiza tu Landing Page</a>
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