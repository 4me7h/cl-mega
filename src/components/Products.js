import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Cards';

import image01 from '../images/img-08.jpg';
import image02 from '../images/img-10.jpg';
import image03 from '../images/img-09.jpg';

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Row>
          <Col>
            <div className="products__container">
              <div className="products__header">
                <h2 className="text--subtitle">Personal</h2>
              </div>
              <div className="products__content">
                <p className="text--body">
                  Explora nuestros servicios detallados y descubre cómo podemos hacer que tu próximo evento sea inolvidable.
                </p>
                <p className="text--body">
                  Gracias por considerar [Nombre de tu Empresa/Evento] para tu próximo evento especial.
                </p>
                <ul className="products__list">
                  <li className="products__item">
                    <Card 
                      image = {image01}
                      name = "Producción Integral"
                      description = "Diseñamos experiencias inolvidables desde el escenario hasta el último detalle logístico."
                    />
                  </li>
                  <li className="products__item">
                  <Card 
                      image = {image02}
                      name = "Promoción y Marketing"
                      description = "Maximiza la visibilidad de tu concierto con nuestra estrategia de promoción y marketing."
                    />
                  </li>
                  <li className="products__item">
                  <Card 
                      image = {image03}
                      name = "3. Catering y Experiencia Gastronómica"
                      description = "Eleva la experiencia de tus asistentes con nuestro servicio de catering especializado en eventos musicales."
                    />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
