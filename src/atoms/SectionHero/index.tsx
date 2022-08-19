import React, { FC } from 'react';

import {
  Button,
  Container,
  Content,
  ContentInfo,
  Description,
  ImageWomen,
  Info,
  SubTitle,
  Text,
  Title,
  Wrapper,
  WrapperInfo,
} from './styles';

type Props = {};

const SectionHero: FC<Props> = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>BOAS-VINDAS A DOCTORCARE 👋</Title>
          <SubTitle>
            Assistência médica
            <br />
            simplificada para todos
          </SubTitle>
          <Description>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </Description>

          <Button>AGENDE SUA CONSULTA</Button>
        </Content>
        <ImageWomen />
      </Wrapper>
      <WrapperInfo>
        <ContentInfo>
          <Info>+3.500</Info>
          <Text>Pacientes atendidos</Text>
        </ContentInfo>
        <ContentInfo>
          <Info>+15</Info>
          <Text>Especialistas disponíveis</Text>
        </ContentInfo>
        <ContentInfo>
          <Info>+10</Info>
          <Text>Anos no mercado</Text>
        </ContentInfo>
      </WrapperInfo>
    </Container>
  );
};

export default SectionHero;
