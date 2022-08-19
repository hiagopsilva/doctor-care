import React, { FC } from 'react';

import { Wrapper, LogoStyled, Options, Option, Text, Button } from './styles';

type Props = {};

const Header: FC<Props> = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <LogoStyled />

      <Options>
        <Option>
          <Text>Início</Text>
        </Option>
        <Option>
          <Text>Sobre</Text>
        </Option>
        <Option>
          <Text>Serviços</Text>
        </Option>
        <Option>
          <Text>Depoimentos</Text>
        </Option>
      </Options>

      <Button>AGENDAR CONSULTA</Button>
    </Wrapper>
  );
};

export default Header;
