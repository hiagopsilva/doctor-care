import React, { FC, useEffect, useState } from 'react';

import { OptionMenu } from '~/utils';

import {
  Wrapper,
  Options,
  Option,
  Button,
  LogoPrimaryStyled,
  LogoSecondaryStyled,
  IconHamburger,
  IconHamburgerSecondary,
} from './styles';

type Props = {};

const Header: FC<Props> = ({ ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const [menu, setMenu] = useState(OptionMenu[0]);

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
        {OptionMenu.map(item => (
          <Option
            active={isActive}
            className={item === menu ? 'activeScroll' : ''}
            onClick={() => setMenu(item)}
          >
            <span>{item}</span>
          </Option>
        ))}
      </Options>

      <Button active={isActive}>AGENDAR CONSULTA</Button>

      <IconHamburger className="icon-hamburger-primary" />
      <IconHamburgerSecondary className="icon-hamburger-secondary" />
    </Wrapper>
  );
};

export default Header;
