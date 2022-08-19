import React from 'react';

import { SectionHero, SectionService } from '~/atoms';
import { Header } from '~/components';

import { Container } from './styles';

type Props = {};

const Home: React.FC<Props> = () => (
  <Container>
    <Header />
    <SectionHero />
    <SectionService />
  </Container>
);

export default Home;
