import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardPack from './CardPack';
import imgview from '../images/logo-view.svg';
import imgapptv from '../images/logo-amazon.png';
import imgmegamil from '../images/img-megamil.png';

export default function Products() {
  const [visibleDiv, setVisibleDiv] = useState('doblepack');

  return (
    <div className="products">
      <div className="products__header">
        <Container>
          <Row>
            <Col>
                <div className="about__header__content">
                  <h2 className="text--subtitle text-center text--white">PROMOCIONES</h2>
                </div>
                <div className="about__header__content">
                  <p className='text--body text-center text--white'>
                    ¡Transforma tu manera de conectarte con los paquetes de Megacable! Disfruta de Internet de alta velocidad, canales de televisión premium y telefonía confiable, todo en un solo lugar. 
                  </p>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='polygon'>
        <div className='polygon__bottom--right'></div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="products__container">
              <div className="products__content">
                <div className='products__buttons'>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('doblepack')}>Doble Pack</button>
                  <button className="products__buttons__item btn--primary" onClick={() => setVisibleDiv('triplepack')}>Triple Pack</button>
                </div>
                <p className='text--lead text-center mb-4'>
                  (Cliente Nuevo)
                </p>
                {visibleDiv === 'doblepack' && (
                  <ul className="products__list doblepack">
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
                        precio={"$400"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 250 Megas"}
                        megas={"500 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$500"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 500 Megas"}
                        megas={"1000 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        precio={"$600"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                  </ul>
                )}
                {visibleDiv === 'triplepack' && (
                  <ul className="products__list triplepack">
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 60 Megas"}
                        megas={"120 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={"X 6 meses cortesía de Mega"}
                        precio={"$499"}
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
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={"X 6 meses cortesía de Mega"}
                        precio={"$599"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 250 Megas"}
                        megas={"500 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={"X 6 meses cortesía de Mega"}
                        precio={"$699"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                    <li className="products__item">
                      <CardPack 
                        description={"Internet Ilimitado 500 Megas"}
                        megas={"1000 Megas"}
                        mesesmegas={"x 6 meses*"}
                        telfija={"+ Telefonía Fija"}
                        imgview={imgview}
                        textview={["Más de 80 canales", <br /> ,"+ De 25,000 horas", <br />, "de películas y series"]}
                        imgapptv={imgapptv}
                        textapptv={"X 6 meses cortesía de Mega"}
                        precio={"$799"}
                        preciomes={"*al mes"}
                        mesesprecio={"x 6 meses*"}
                      />
                    </li>
                  </ul>
                )}
                <div className='cardpack__img--container'>
                  <a target="__blank" rel='norel' href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">
                    <img src={imgmegamil} alt="megacable-en-tuxtla" class="cardpack__img--megamil"/>
                  </a>
                </div>
                <p className='text--body text-center'>
                  En Tuxtla Gutiérrez, personalizamos cada paquete para satisfacer las necesidades únicas de tu hogar o negocio, asegurando que siempre estés conectado con lo que más te importa.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        
  )
}
