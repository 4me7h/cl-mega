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
                  <h3 className="text--subtitle text-center">¡MEGACABLE Tuxtla llámanos!</h3>
                </div>  
                <div className="about__header__content">
                  <p className='text--body text--white text-center'>
                    Descubre los mejores paquetes de Internet, Televisión y Telefonía con Megacable, líder en servicios de telecomunicaciones en México. En Tuxtla Gutiérrez, ofrecemos soluciones personalizadas para cada hogar y negocio. 
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
                Con velocidades de Internet ultrarrápidas, canales de televisión de alta definición y planes de telefonía accesibles, Megacable te conecta con lo que más te importa. ¡Contáctanos hoy y comienza a disfrutar de una conexión sin igual!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
     
    </section>
  </>
  )
}
