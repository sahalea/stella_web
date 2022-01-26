import React from 'react';
import { Rate } from 'antd';
import {Sections, Icon} from '../component'
import { Image } from 'react-bootstrap';
import IconOne from '../assets/images/ic-person.svg'
import IconTwo from '../assets/images/ic-wifi.svg'
import IconThree from '../assets/images/ic-location.svg'
import IconFour from '../assets/images/ic-calandar.svg'
import IconApple from '../assets/images/ic-apple.svg'
import IconAndroid from '../assets/images/ic-android.svg'
import ImgIphone from '../assets/images/img-iphone.png'

const SectionThree = () => {
  return (
      <Sections className="section-three">
        <div className='content'>
          <h3>Duis aute irure dolor in reprehenderit in voluptate</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className='list'>
            <li><Icon src={IconOne} />Sagittis vitae et leo duis ut diam quam nulla. </li>
            <li><Icon src={IconTwo} />Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. </li>
            <li><Icon src={IconThree} />Viverra adipiscing at in tellus integer feugiat scelerisque varius. </li>
            <li><Icon src={IconFour} />Elementum curabitur vitae nunc.</li>
          </ul>
          <div className='social'>
            <Rate allowHalf defaultValue={2.5}/>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
            <ul className='store'>
              <li><Icon src={IconApple} /></li>
              <li><Icon src={IconAndroid} /></li>
            </ul>
          </div>
        </div>
        <Image src={ImgIphone} className='img-iphone' />
      </Sections>
  )
};

export default SectionThree;

