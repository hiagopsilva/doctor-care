import styled from 'styled-components';

import { Logo } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

// Colors
const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');
const primaryLight = getTheme('primary.light');

export const Wrapper = styled.div`
  background-color: ${primaryContrast};

  position: absolute;

  width: 100%;
  height: ${pxToRem(72)};

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(124)};
`;

export const LogoStyled = styled(Logo)`
  width: ${pxToRem(150)};
  height: ${pxToRem(40)};
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

export const Text = styled.div`
  color: ${primaryMain};

  &:hover {
    font-weight: bold;
    color: ${primaryMain};
  }
`;

export const Button = styled.div`
  width: ${pxToRem(190)};
  height: ${pxToRem(38)};

  border: 1px solid ${primaryMain};
  border-radius: ${pxToRem(40)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${pxToRem(14)};
  font-weight: bold;
  color: ${primaryMain};

  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: ${primaryLight};
    background-color: ${primaryMain};
  }
`;
