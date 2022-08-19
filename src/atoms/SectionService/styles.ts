import styled from 'styled-components';

import { Check } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');
const primaryLight = getTheme('primary.light');
const secondaryContrast = getTheme('secondary.contrast');
const secondaryDark = getTheme('secondary.dark');
const primaryContrast = getTheme('primary.contrast');

const inMobile = getTheme('inMobile');

export const Wrapper = styled.div`
  width: 100%;
  height: ${pxToRem(1082)};

  background-color: ${secondaryContrast};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${pxToRem(124)};

  @media ${inMobile} {
    padding: 0 ${pxToRem(29)} ${pxToRem(100)};

    height: auto;
  }
`;

export const Info = styled.div`
  font-size: ${pxToRem(14)};
  font-weight: bold;

  color: ${primaryMain};

  margin-top: ${pxToRem(240)};

  @media ${inMobile} {
    margin-top: ${pxToRem(100)};
    margin-bottom: ${pxToRem(24)};
  }
`;

export const Title = styled.div`
  font-size: ${pxToRem(40)};
  font-weight: bold;

  color: ${primaryDark};
  text-align: center;

  @media ${inMobile} {
    font-size: ${pxToRem(30)};
    width: 90%;
    margin: 0 auto;
  }
`;

export const WrapperCards = styled.div`
  margin-top: ${pxToRem(63)};

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  background-color: ${primaryLight};

  width: 31%;

  padding: ${pxToRem(20)};

  border: 1px solid ${primaryContrast};
  border-radius: ${pxToRem(6)};
  margin-bottom: ${pxToRem(40)};

  cursor: pointer;

  @media ${inMobile} {
    font-size: ${pxToRem(30)};
    width: 100%;
    margin-bottom: ${pxToRem(40)};
  }
`;

export const Icon = styled(Check)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const Text = styled.div`
  font-size: ${pxToRem(22)};
  font-weight: bold;

  color: ${primaryDark};

  margin-top: ${pxToRem(16)};

  @media ${inMobile} {
    font-size: ${pxToRem(24)};

    margin-top: ${pxToRem(6)};
  }
`;

export const Description = styled.div`
  color: ${secondaryDark};

  font-size: ${pxToRem(14)};
  font-weight: 400;

  margin-top: ${pxToRem(14)};

  @media ${inMobile} {
    font-size: ${pxToRem(16)};
  }
`;
