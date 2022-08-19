import React, { FC } from 'react';

import { OptionCard } from '~/utils';

import {
  Card,
  Description,
  Icon,
  Info,
  Text,
  Title,
  Wrapper,
  WrapperCards,
} from './styles';

type Props = {};

const SectionService: FC<Props> = () => {
  return (
    <Wrapper>
      <Info>SERVIÇOS</Info>

      <Title>
        Como podemos ajudá-lo
        <br />a se sentir melhor?
      </Title>

      <WrapperCards>
        {OptionCard.map(item => (
          <Card>
            <Icon />
            <Text>{item}</Text>
            <Description>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </Description>
          </Card>
        ))}
      </WrapperCards>
    </Wrapper>
  );
};

export default SectionService;
