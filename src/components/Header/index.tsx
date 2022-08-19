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
  IconCloseSecondary,
} from './styles';

type Props = {};

const Header: FC<Props> = ({ ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const [menu, setMenu] = useState(OptionMenu[0]);

  const [activeOptionMenu, setActiveOptionMenu] = useState(false);

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

      <IconHamburger
        className="icon-hamburger-primary"
        onClick={() => {
          setActiveOptionMenu(prevState => !prevState);
        }}
        active={activeOptionMenu}
      />
      <IconHamburgerSecondary
        className="icon-hamburger-secondary"
        onClick={() => {
          setActiveOptionMenu(prevState => !prevState);
        }}
        active={activeOptionMenu}
      />

      <IconCloseSecondary active={activeOptionMenu} />
    </Wrapper>
  );
};

export default Header;
