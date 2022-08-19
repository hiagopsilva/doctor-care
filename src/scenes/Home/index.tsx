import React from 'react';

import { Header } from '~/components';

import { Container, SectionHero } from './styles';

type Props = {};

const Home: React.FC<Props> = () => (
  <Container>
    <Header />
    <SectionHero />
  </Container>
);

export default Home;
