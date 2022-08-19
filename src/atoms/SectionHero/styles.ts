import styled from 'styled-components';

import { Women } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

// Colors
const secondaryLight = getTheme('secondary.light');
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');
const primaryLight = getTheme('primary.light');
const secondaryDark = getTheme('secondary.dark');
const secondaryMain = getTheme('secondary.main');
const primaryContrast = getTheme('primary.contrast');

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(678)};

  padding-top: ${pxToRem(72)};

  background: ${secondaryLight};
  padding: 0 ${pxToRem(124)};
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;

  margin-top: ${pxToRem(72)};

  justify-content: space-between;
`;

export const Content = styled.div`
  margin-top: ${pxToRem(77)};
`;

export const Title = styled.h4`
  color: ${primaryMain};

  font-size: ${pxToRem(14)};
  font-weight: bold;
  letter-spacing: ${pxToRem(4)};
`;

export const SubTitle = styled.h4`
  color: ${primaryDark};

  font-size: ${pxToRem(52)};
  font-weight: 500;

  margin-top: ${pxToRem(15)};
`;

export const Description = styled.h4`
  margin-top: ${pxToRem(24)};

  font-size: ${pxToRem(18)};
  font-weight: normal;
  color: ${secondaryDark};
`;

export const Button = styled.div`
  margin-top: ${pxToRem(30)};

  width: ${pxToRem(280)};
  height: ${pxToRem(52)};

  border: 1px solid ${primaryMain};
  border-radius: ${pxToRem(40)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${pxToRem(16)};
  font-weight: bold;
  color: ${primaryLight};
  background-color: ${primaryMain};

  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: ${primaryMain};
    background-color: transparent;
  }
`;

export const ImageWomen = styled(Women)`
  margin-right: ${pxToRem(62)};
`;

export const WrapperInfo = styled.div`
  background-color: ${secondaryMain};

  width: 100%;
  height: ${pxToRem(210)};

  margin-top: -${pxToRem(70)};
  z-index: 1;
  position: sticky;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: ${pxToRem(6)};
  border: 1px solid ${primaryContrast};
`;

export const ContentInfo = styled.div`
  width: 33%;

  border-right: 1px solid ${primaryMain};

  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-last-child(3n + 1) {
    border-right: none;
  }
`;

export const Info = styled.h4`
  color: ${primaryDark};

  font-size: ${pxToRem(48)};
  font-weight: bold;
`;

export const Text = styled.h4`
  color: ${primaryMain};

  font-size: ${pxToRem(16)};
  font-weight: 300;

  margin-top: ${pxToRem(4)};
`;
