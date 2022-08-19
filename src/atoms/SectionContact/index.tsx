import React, { FC } from 'react';

import { Men, Whatsapp } from '~/assets';

import {
  Button,
  Container,
  Content,
  IconMail,
  IconMap,
  ImageMen,
  Line,
  Text,
  Title,
  Wrapper,
} from './styles';

type Props = {};

const SectionContact: FC<Props> = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>
            Entre em contato
            <br />
            com a gente!
          </Title>

          <Line>
            <IconMap />
            <Text>R. Amauri Souza, 346</Text>
          </Line>
          <Line>
            <IconMail />
            <Text>contato@beautysalon.com</Text>
          </Line>

          <Button>
            <Whatsapp className="whatsapp" />
            <Whatsapp className="whatsappHover" color="#00856f" />
            AGENDE SUA CONSULTA
          </Button>
        </Content>

        <ImageMen src={Men} />
      </Wrapper>
    </Container>
  );
};

export default SectionContact;
