import React from 'react';

import {
  SectionAbout,
  SectionContact,
  SectionHero,
  SectionService,
} from '~/atoms';
import { Footer, Header } from '~/components';

import { Container } from './styles';

type Props = {};

const Home: React.FC<Props> = () => (
  <Container>
    <Header />

    <SectionHero />
    <SectionService />
    <SectionAbout />
    <SectionContact />

    <Footer />
  </Container>
);

export default Home;
