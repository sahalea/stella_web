import React from 'react';
import Slider from "react-slick";
import {Badge, Figure} from 'react-bootstrap'
import {Sections} from '../component'
import SlideOne from '../assets/images/img-slider-2.jpg'
import SlideTwo from '../assets/images/img-slider-3.jpg'
import SlideThree from '../assets/images/img-slider-4.jpg'

const SectioTwo = () => {

const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
      <Sections className="section-two">
          <div className='title'>
            <h2>Featured stays</h2>
            <p>Beachfront villas to high rise apartments and penthouses, experience your next stay with <b>Stella.</b></p>
          </div>

        <Slider {...settings}>
            <div>
                <Figure>
                    <Figure.Image alt="slider" src={SlideOne} />
                    <Badge>from <b>AED 2,549</b> / night</Badge>
                    <Figure.Caption>
                        Spectacular 4 BDR Palm Villa | Beach | Private Pool
                        <span>Dubai <em>4 guests</em></span>
                    </Figure.Caption>
                </Figure>
            </div>
            <div>
                <Figure>
                    <Figure.Image alt="slider" src={SlideTwo} />
                    <Badge>from <b>AED 2,549</b> / night</Badge>
                    <Figure.Caption>
                    Wonderful 2BDR | Dubai JBR | Beach | Netflix
                        <span>Dubai <em>4 guests</em></span>
                    </Figure.Caption>
                </Figure>
            </div>
            <div>
                <Figure>
                    <Figure.Image alt="slider" src={SlideThree} />
                    <Badge>from <b>AED 2,549</b> / night</Badge>
                    <Figure.Caption>
                    Radiant 1BDR | Dubai JBR | Beach | Netflix
                        <span>Dubai <em>4 guests</em></span>
                    </Figure.Caption>
                </Figure>
            </div>
            <div>
                <Figure>
                    <Figure.Image alt="slider" src={SlideOne} />
                    <Badge>from <b>AED 2,549</b> / night</Badge>
                    <Figure.Caption>
                        Spectacular 4 BDR Palm Villa | Beach | Private Pool
                        <span>Dubai <em>4 guests</em></span>
                    </Figure.Caption>
                </Figure>
            </div>
            <div>
                <Figure>
                    <Figure.Image alt="slider" src={SlideTwo} />
                    <Badge>from <b>AED 2,549</b> / night</Badge>
                    <Figure.Caption>
                    Wonderful 2BDR | Dubai JBR | Beach | Netflix
                        <span>Dubai <em>4 guests</em></span>
                    </Figure.Caption>
                </Figure>
            </div>
            <div>
                <Figure>
                    <Figure.Image alt="slider" src={SlideThree} />
                    <Badge>from <b>AED 2,549</b> / night</Badge>
                    <Figure.Caption>
                    Radiant 1BDR | Dubai JBR | Beach | Netflix
                        <span>Dubai <em>4 guests</em></span>
                    </Figure.Caption>
                </Figure>
            </div>
        </Slider>
      </Sections>
  )
};

export default SectioTwo;