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

export const Wrapper = styled.div`
  width: 100%;
  height: ${pxToRem(1082)};

  background-color: ${secondaryContrast};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${pxToRem(124)};
`;

export const Info = styled.div`
  font-size: ${pxToRem(14)};
  font-weight: bold;

  color: ${primaryMain};

  margin-top: ${pxToRem(240)};
`;

export const Title = styled.div`
  font-size: ${pxToRem(40)};
  font-weight: bold;

  color: ${primaryDark};
  text-align: center;
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

  width: 30%;
  height: ${pxToRem(207)};

  padding: ${pxToRem(24)};

  border: 1px solid ${primaryContrast};
  border-radius: ${pxToRem(6)};
  margin-bottom: ${pxToRem(40)};

  cursor: pointer;
`;

export const Icon = styled(Check)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const Text = styled.div`
  font-size: ${pxToRem(24)};
  font-weight: bold;

  color: ${primaryDark};

  margin-top: ${pxToRem(16)};
`;

export const Description = styled.div`
  color: ${secondaryDark};

  font-size: ${pxToRem(16)};
  font-weight: 400;

  margin-top: ${pxToRem(16)};
`;