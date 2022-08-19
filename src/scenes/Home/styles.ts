import styled from 'styled-components';

import { getTheme } from '~/utils';

// Breakpoint
const inMobile = getTheme('inMobile');
const inTablet = getTheme('inTablet');

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;

  background: #fff;
`;

export const SectionHero = styled.div`
  display: flex;

  /* @media ${inMobile} {
    display: none;
  }

  @media ${inTablet} {
    display: none;
  } */
`;
