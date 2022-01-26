import React from 'react';
import {Carousel} from 'react-bootstrap'
import SliderOne from '../assets/images/img-slider-1.png'

const Mainframe = () => (
    <section className='main-frame'>
        <Carousel indicators={false} controls={false} interval={5000} pause={false}>
            <Carousel.Item >
                <img
                className="d-block"
                src={SliderOne}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className='carousel-text'>
                        <h3> Escape the ordinary</h3>
                        <p>A new way to stay in your favorite neighbourhoods around the world.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src={SliderOne}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <div className='carousel-text'>
                        <h3> Escape the ordinary</h3>
                        <p>A new way to stay in your favorite neighbourhoods around the world.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>
)
export default Mainframe;