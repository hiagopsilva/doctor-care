import React from 'react';

import { SectionHero } from '~/atoms';
import { Header } from '~/components';

import { Container } from './styles';

type Props = {};

const Home: React.FC<Props> = () => (
  <Container>
    <Header />
    <SectionHero />
  </Container>
);

export default Home;
