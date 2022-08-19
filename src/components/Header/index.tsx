import React, { FC, useEffect, useState } from 'react';

import {
  Wrapper,
  Options,
  Option,
  Button,
  LogoPrimaryStyled,
  LogoSecondaryStyled,
} from './styles';

type Props = {};

const Header: FC<Props> = ({ ...rest }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function onScroll() {
      window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Wrapper active={isActive} {...rest}>
      <LogoPrimaryStyled className="logo-primary" />
      <LogoSecondaryStyled className="logo-secondary" />

      <Options>
        <Option>
          <span>Início</span>
        </Option>
        <Option>
          <span>Sobre</span>
        </Option>
        <Option>
          <span>Serviços</span>
        </Option>
        <Option>
          <span>Depoimentos</span>
        </Option>
      </Options>

      <Button active={isActive}>AGENDAR CONSULTA</Button>
    </Wrapper>
  );
};

export default Header;
