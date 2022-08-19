import React, { FC } from 'react';

import {
  Content,
  IconFacebook,
  IconInstagram,
  IconYoutube,
  Logo,
  Text,
  Wrapper,
  WrapperSocial,
} from './styles';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <Wrapper>
      <Content>
        <Logo />
        <Text>©2022 - DoctorCare.</Text>
        <Text>Todos os direitos reservados.</Text>
      </Content>

      <WrapperSocial>
        <IconInstagram />
        <IconFacebook />
        <IconYoutube />
      </WrapperSocial>
    </Wrapper>
  );
};

export default Footer;
