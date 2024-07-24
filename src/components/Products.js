import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardPack from './CardPack';

export default function Products() {
  return (
    <div className="products">
      <div className="products__container">
        <div className="products__header">
          <Container>
            <Row>
              <Col>
                <div className="about__header__content">
                  <h2 className="text--subtitle text-center">Paquetes</h2>
                </div>
                <div className="about__header__content">
                  <p className='text--body text--white text-center'>
                    Descubre los mejores paquetes de Internet, Televisión y Telefonía con Megacable, líder en servicios de telecomunicaciones en México. En Tuxtla Gutiérrez, ofrecemos soluciones personalizadas para cada hogar y negocio. 
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="products__content">
          <ul className="products__list">
            <li className="products__item">
              <CardPack 
                description={"Internet Ilimitado 60 Megas"}
                megas={"120 Megas"}
                mesesmegas={"x 6 meses*"}
                telfija={"+ telefonía fija"}
                precio={"$300* al mes"}
                mesesprecio={"x 6 meses*"}
              />
            </li>
            <li className="products__item">
            asdf
            </li>
            <li className="products__item">
            asdfsdf
            </li>
          </ul>
        </div>
      </div>
        
    </div>
  )
}
