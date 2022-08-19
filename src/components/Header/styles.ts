import styled from 'styled-components';

import { Logo, LogoSecondary } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

type PropsWrapper = {
  active: boolean;
};

// Colors
const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');
const primaryLight = getTheme('primary.light');

export const Wrapper = styled.div<PropsWrapper>`
  background-color: ${props =>
    props.active ? primaryMain(props) : primaryContrast(props)};

  position: fixed;
  z-index: 1000;

  width: 100%;
  height: ${pxToRem(72)};

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(124)};

  span {
    color: ${props =>
      props.active ? primaryContrast(props) : primaryMain(props)};
  }

  span:hover {
    font-weight: bold;
    color: ${primaryMain};
  }

  svg.logo-primary {
    display: ${props => (props.active ? 'none' : 'block')};
  }

  svg.logo-secondary {
    display: ${props => (props.active ? 'block' : 'none')};
  }
`;

export const LogoPrimaryStyled = styled(Logo)`
  width: ${pxToRem(150)};
  height: ${pxToRem(40)};

  display: block;
`;

export const LogoSecondaryStyled = styled(LogoSecondary)`
  width: ${pxToRem(150)};
  height: ${pxToRem(40)};

  display: none;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: ${pxToRem(350)};
  height: ${pxToRem(72)};
`;

export const Option = styled.div`
  height: ${pxToRem(72)};

  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 2px solid ${primaryMain};
  }
`;

export const Text = styled.span``;

export const Button = styled.div<PropsWrapper>`
  width: ${pxToRem(190)};
  height: ${pxToRem(38)};

  border: 1px solid
    ${props => (props.active ? primaryLight(props) : primaryMain(props))};
  border-radius: ${pxToRem(40)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${pxToRem(14)};
  font-weight: bold;
  color: ${props => (props.active ? primaryLight(props) : primaryMain(props))};

  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: ${props =>
      props.active ? primaryMain(props) : primaryLight(props)};
    background-color: ${props =>
      props.active ? primaryLight(props) : primaryMain(props)};
  }
`;
