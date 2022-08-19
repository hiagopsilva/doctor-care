import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

// Colors
const tertiaryLight = getTheme('tertiary.light');
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');
const secondaryDark = getTheme('secondary.dark');

export const Container = styled.div`
  height: ${pxToRem(734)};
  width: 100%;

  background-color: ${tertiaryLight};
  padding: 0 ${pxToRem(124)};
`;

export const Wrapper = styled.div`
  margin-top: ${pxToRem(159)};

  display: flex;
`;

export const Image = styled.img`
  width: ${pxToRem(480)};
  height: ${pxToRem(414)};
`;

export const Content = styled.div`
  margin-left: ${pxToRem(67)};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: ${pxToRem(14)};
  font-weight: bold;

  color: ${primaryMain};
`;

export const Title = styled.div`
  font-size: ${pxToRem(40)};
  font-weight: bold;

  color: ${primaryDark};
`;

export const Description = styled.div`
  margin-top: ${pxToRem(26)};

  font-size: ${pxToRem(16)};
  font-weight: 400;

  color: ${secondaryDark};

  line-height: ${pxToRem(26)};
`;
