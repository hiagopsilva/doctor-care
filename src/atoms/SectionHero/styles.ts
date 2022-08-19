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
const secondaryContrast = getTheme('secondary.contrast');
const primaryContrast = getTheme('primary.contrast');

const inMobile = getTheme('inMobile');

export const Container = styled.div`
  background: ${secondaryContrast};
  position: relative;
  margin-top: ${pxToRem(72)};

  @media ${inMobile} {
    height: ${pxToRem(1340)};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: ${pxToRem(678)};

  background: ${secondaryLight};
  padding: ${pxToRem(72)} ${pxToRem(124)} 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${inMobile} {
    height: auto;
    padding: 0 ${pxToRem(29)};

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  margin-top: ${pxToRem(77)};

  @media ${inMobile} {
    margin-top: ${pxToRem(40)};

    width: 100%;
  }
`;

export const Title = styled.h4`
  color: ${primaryMain};

  font-size: ${pxToRem(14)};
  font-weight: bold;
  letter-spacing: ${pxToRem(4)};

  @media ${inMobile} {
    text-align: center;
  }
`;

export const SubTitle = styled.h4`
  color: ${primaryDark};

  font-size: ${pxToRem(52)};
  font-weight: 500;
  width: ${pxToRem(580)};

  margin-top: ${pxToRem(15)};

  @media ${inMobile} {
    text-align: center;
    font-size: ${pxToRem(34)};
    font-weight: 500;

    width: 100%;
  }
`;

export const Description = styled.h4`
  margin-top: ${pxToRem(24)};
  width: ${pxToRem(520)};

  font-size: ${pxToRem(18)};
  font-weight: normal;
  color: ${secondaryDark};

  @media ${inMobile} {
    text-align: center;
    font-size: ${pxToRem(18)};

    width: 100%;
  }
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

  background-color: ${primaryMain};

  cursor: pointer;

  svg.whatsapp {
    display: block;
  }

  svg.whatsappHover {
    display: none;
  }

  span {
    margin-left: ${pxToRem(8)};

    font-size: ${pxToRem(16)};
    font-weight: bold;
    color: ${primaryLight};
  }

  &:hover {
    font-weight: bold;
    color: ${primaryMain};
    background-color: transparent;

    svg.whatsapp {
      display: none;
    }

    span {
      color: ${primaryMain};
    }

    svg.whatsappHover {
      display: block;
    }
  }

  @media ${inMobile} {
    margin: 0 auto;
    margin-top: ${pxToRem(20)};
  }
`;

export const ImageWomen = styled(Women)`
  @media ${inMobile} {
    width: 100%;

    margin-top: -${pxToRem(50)};
    margin-bottom: ${pxToRem(150)};
  }
`;

export const WrapperInfo = styled.div`
  background-color: ${secondaryMain};

  width: auto;
  height: ${pxToRem(210)};

  z-index: 100;
  position: sticky;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: ${pxToRem(6)};
  border: 1px solid ${primaryContrast};

  margin: 0 ${pxToRem(124)};
  margin-top: -${pxToRem(90)};

  @media ${inMobile} {
    flex-direction: column;
    height: auto;
    width: auto;

    position: relative;
    bottom: ${pxToRem(30)};
    margin: ${pxToRem(60)} ${pxToRem(29)} 0;

    top: -${pxToRem(340)};

    padding: ${pxToRem(60)} 0;
  }
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

  @media ${inMobile} {
    border: none;

    width: 80%;
    margin-bottom: ${pxToRem(67)};

    &:nth-last-child(3n + 1) {
      margin-bottom: 0;
    }
  }
`;

export const Info = styled.h4`
  color: ${primaryDark};

  font-size: ${pxToRem(48)};
  font-weight: bold;

  @media ${inMobile} {
    border: none;
  }
`;

export const Text = styled.h4`
  color: ${primaryMain};

  font-size: ${pxToRem(16)};
  font-weight: 300;

  margin-top: ${pxToRem(4)};

  @media ${inMobile} {
    border: none;
  }
`;
