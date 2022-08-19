import styled from 'styled-components';

import { Facebook, Instagram, Youtube } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');

export const Wrapper = styled.div`
  width: 100%;
  height: ${pxToRem(268)};

  background: ${primaryMain};
`;

export const Content = styled.div``;

export const Logo = styled.div``;

export const Text = styled.div``;

export const WrapperSocial = styled.div``;

export const IconInstagram = styled(Instagram)``;

export const IconFacebook = styled(Facebook)``;

export const IconYoutube = styled(Youtube)``;
