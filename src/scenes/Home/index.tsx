import React from 'react';

import { SectionAbout, SectionHero, SectionService } from '~/atoms';
import { Header } from '~/components';

import { Container } from './styles';

type Props = {};

const Home: React.FC<Props> = () => (
  <Container>
    <Header />
    <SectionHero />
    <SectionService />
    <SectionAbout />
  </Container>
);

export default Home;
