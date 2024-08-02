import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardPack from './CardPack';

export default function Products() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="products">
            <div className="products__container">
              <div className="products__content">
                <div className="products__header">
                  <div className="about__header__content">
                    <h2 className="text--subtitle text-center text--white">PROMOCIONES</h2>
                  </div>
                  <div className="about__header__content">
                    <p className='text--body text-center text--white'>
                      ¡Transforma tu manera de conectarte con los paquetes de Megacable! Disfruta de Internet de alta velocidad, canales de televisión premium y telefonía confiable, todo en un solo lugar. 
                    </p>
                  </div>
                </div>
                <ul className="products__list">
                  <li className="products__item">
                    <CardPack 
                      description={"Internet Ilimitado 60 Megas"}
                      megas={"120 Megas"}
                      mesesmegas={"x 6 meses*"}
                      telfija={"+ Telefonía Fija"}
                      precio={"$300"}
                      preciomes={"*al mes"}
                      mesesprecio={"x 6 meses*"}
                    />
                  </li>
                  <li className="products__item">
                    <CardPack 
                      description={"Internet Ilimitado 100 Megas"}
                      megas={"200 Megas"}
                      mesesmegas={"x 6 meses*"}
                      telfija={"+ Telefonía Fija"}
                      precio={"$400* al mes"}
                      mesesprecio={"x 6 meses*"}
                    />
                  </li>
                  <li className="products__item">
                    <CardPack 
                      description={"Internet Ilimitado 250 Megas"}
                      megas={"500 Megas"}
                      mesesmegas={"x 6 meses*"}
                      telfija={"+ Telefonía Fija"}
                      precio={"$500* al mes"}
                      mesesprecio={"x 6 meses*"}
                    />
                  </li>
                  <li className="products__item">
                    <CardPack 
                      description={"Internet Ilimitado 500 Megas"}
                      megas={"1000 Megas"}
                      mesesmegas={"x 6 meses*"}
                      telfija={"+ Telefonía Fija"}
                      precio={"$600* al mes"}
                      mesesprecio={"x 6 meses*"}
                    />
                  </li>
                </ul>
                <p className='text--body text-center'>
                  En Tuxtla Gutiérrez, personalizamos cada paquete para satisfacer las necesidades únicas de tu hogar o negocio, asegurando que siempre estés conectado con lo que más te importa.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
