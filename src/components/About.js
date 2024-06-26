import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gridimg from './Gridimg';

import { Fade } from 'react-awesome-reveal';

const imagePaths01 = [  
  require('../images/img-02.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-04.jpg'),
  require('../images/img-05.jpg'),
];

export default function About() {
  return (
  <>
    <section className="about">
      <div className="about__header">
        <Container>
          <Row>
            <Col>
              <Fade cascade triggerOnce direction="left">
                <div className='about__header__content'>
                  <h3 className="text--subtitle text-center">Acerca de CLDEV</h3>
                </div>  
                <div className="about__header__content">
                  <p className='text--body text--white text-center'>
                    Somos un equipo de expertos en marketing digital apasionados por ayudar a las empresas a alcanzar sus objetivos en línea. Con <strong><span className='text--tertiary'>más de 14 años de experiencia en diseño web y estrategias de conversión</span></strong>, estamos aquí para potenciar tu presencia en línea y maximizar tu retorno de inversión.
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='polygon'>
        <div className='polygon__bottom--right'></div>
      </div>
      <Gridimg 
          imagePaths = {imagePaths01}
      />
      <Container>
        <Row>
          <Col>
            <div className="about__content">
              <p className='text--body'>
                Nuestro enfoque se centra en combinar creatividad y análisis de datos para diseñar landing pages que no solo sean visualmente atractivas, sino también altamente funcionales. Nos comprometemos a entender las necesidades únicas de cada cliente y a proporcionar soluciones personalizadas que generen resultados reales. Confía en nosotros para transformar tus ideas en páginas de destino que conviertan visitantes en clientes.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
     
    </section>
  </>
  )
}
