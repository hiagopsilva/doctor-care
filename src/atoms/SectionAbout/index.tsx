import React, { FC } from 'react';

import { Doctor } from '~/assets';

import {
  Container,
  Content,
  Description,
  Image,
  Text,
  Title,
  Wrapper,
} from './styles';

type Props = {};

const SectionAbout: FC<Props> = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={Doctor} />
        <Content>
          <Text>SOBRE NÓS</Text>
          <Title>
            Entenda quem somos
            <br /> e por que existimos
          </Title>
          <Description>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </Description>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default SectionAbout;
