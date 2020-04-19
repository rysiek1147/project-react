import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.defaultTitle} image={settings.faq.defaultImage}/>
    <p>{settings.faq.defaultText}</p>
  </Container>
);

export default Faq;