import React from 'react';

import {
  SectionAbout,
  SectionContact,
  SectionHero,
  SectionService,
} from '~/atoms';
import { Header } from '~/components';

import { Container } from './styles';

type Props = {};

const Home: React.FC<Props> = () => (
  <Container>
    <Header />
    <SectionHero />
    <SectionService />
    <SectionAbout />
    <SectionContact />
  </Container>
);

export default Home;
