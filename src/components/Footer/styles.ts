import styled from 'styled-components';

import { Facebook, Instagram, LogoSecondary, Youtube } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');
const secondaryMain = getTheme('secondary.main');

export const Wrapper = styled.div`
  width: 100%;
  height: ${pxToRem(268)};

  background: ${primaryMain};
  padding: 0 ${pxToRem(124)};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div``;

export const Logo = styled(LogoSecondary)``;

export const Text = styled.h4`
  font-size: ${pxToRem(14)};
  font-weight: 300;
  color: ${secondaryMain};

  margin-top: ${pxToRem(26)};
`;

export const WrapperSocial = styled.div``;

export const IconInstagram = styled(Instagram)`
  margin-right: ${pxToRem(36)};
  cursor: pointer;
`;

export const IconFacebook = styled(Facebook)`
  margin-right: ${pxToRem(36)};
  cursor: pointer;
`;

export const IconYoutube = styled(Youtube)`
  cursor: pointer;
`;
