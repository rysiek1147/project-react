import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.defaultTitle} image={settings.info.defaultImage}/>
    <p>{settings.info.defaultText}</p>
  </Container>
);

export default Info;