import React from 'react';
import { Layout, Mainframe } from '../component';
import { SectionOne, SectioTwo, SectionThree, SectionFour } from '../modules';

const Home = () => (
  <Layout className="index-home">
    <Mainframe />
    <SectionOne />
    <SectioTwo />
    <SectionThree />
    <SectionFour />
  </Layout>
);

export default Home;
