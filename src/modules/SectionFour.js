import React from 'react';
import { Sections, Icon } from '../component';
import { Col, Figure, Row } from 'react-bootstrap';
import ImgOne from '../assets/images/img-pro-1.jpg';
import ImgTwo from '../assets/images/img-pro-2.jpg';
import ImgThree from '../assets/images/img-pro-3.jpg';
import ImgFour from '../assets/images/img-pro-4.jpg';

const SectionFour = () => {
  return (
    <Sections className="section-four">
      <Row>
        <Col sm={5}>
          <Figure className="figOne">
            <Figure.Image src={ImgOne} />
            <Figure.Caption>
              <h3>
                <Icon />
                Beyond Living
              </h3>
              <p>
                Modern and fresh, our spaces are outfitted with comfort and
                style, be it for a quick getaway to a long term stay.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm={7}>
          <Figure className="figTwo">
            <Figure.Image src={ImgTwo} />
            <Figure.Caption>
              <h3>
                <Icon />
                Prime Locations
              </h3>
              <p>
                Breathtaking views in convenient and sought after locations, a
                little something for everyone.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col sm={7}>
          <Figure className="figThree">
            <Figure.Image src={ImgThree} />
            <Figure.Caption>
              <h3>
                <Icon />
                Nullam efficitur turpis
              </h3>
              <p>
                Phasellus fermentum tellus vitae ante vehicula posuere.
                Curabitur metus metus, feugiat non semper lacinia, maximus sit
                amet ligula. Proin dictum quis ipsum.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm={5}>
          <Figure className="figFour">
            <Figure.Image src={ImgFour} />
            <Figure.Caption>
              <h3>
                <Icon />A Signature of Excellence
              </h3>
              <p>
                24/7 guest concierge, seamless check-in and immaculate
                cleanliness, always a flawless stay.
              </p>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Sections>
  );
};

export default SectionFour;
