import styled from 'styled-components';

import { Mail, Maps, Whatsapp } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

// Colors
const primaryDark = getTheme('primary.dark');
const primaryMain = getTheme('primary.main');
const primaryLight = getTheme('primary.light');
const secondaryDark = getTheme('secondary.dark');
const secondaryMain = getTheme('secondary.main');

export const Container = styled.div`
  height: ${pxToRem(699)};
  width: 100%;

  padding: 0 ${pxToRem(124)};
`;

export const Wrapper = styled.div`
  margin-top: ${pxToRem(159)};

  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-top: ${pxToRem(36)};
`;

export const Title = styled.div`
  color: ${primaryDark};

  font-size: ${pxToRem(40)};
  font-weight: bold;

  margin-bottom: ${pxToRem(39)};
`;

export const Line = styled.div`
  display: flex;

  &:nth-last-child(2n + 1) {
    margin-bottom: ${pxToRem(15)};
  }
`;

export const IconMap = styled(Maps)``;

export const Text = styled.div`
  margin-left: ${pxToRem(10)};

  color: ${secondaryDark};
`;

export const IconMail = styled(Mail)``;

export const Image = styled.img`
  margin-right: ${pxToRem(17)};
  width: 200px;
  height: 200px;
`;

export const Button = styled.button`
  margin-top: ${pxToRem(30)};

  width: ${pxToRem(290)};
  height: ${pxToRem(56)};

  border: 1px solid ${primaryMain};
  border-radius: ${pxToRem(40)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${pxToRem(16)};
  font-weight: bold;
  color: ${primaryLight};

  cursor: pointer;

  svg {
    margin-right: ${pxToRem(17)};
  }

  svg.whatsapp {
    display: block;
  }

  svg.whatsappHover {
    display: none;
  }

  &:hover {
    font-weight: bold;
    color: ${primaryMain};
    background-color: transparent;

    svg.whatsapp {
      display: none;
    }

    svg.whatsappHover {
      display: block;
    }
  }
`;

export const ImageMen = styled.img`
  width: ${pxToRem(575)};
  height: ${pxToRem(379)};
`;
