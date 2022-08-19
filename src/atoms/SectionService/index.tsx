import React, { FC } from 'react';

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

const data = [
  'Problemas digestivos',
  'Saúde Hormonal',
  'Bem-estar mental',
  'Cuidados Pediátricos',
  'Autoimune e Inflamação',
  'Saúde do Coração',
];

const SectionService: FC<Props> = () => {
  return (
    <Wrapper>
      <Info>SERVIÇOS</Info>

      <Title>
        Como podemos ajudá-lo
        <br />a se sentir melhor?
      </Title>

      <WrapperCards>
        {data.map(item => (
          <Card>
            <Icon />
            <Text>{item}</Text>
            <Description>
              Amet minim mollit non deserunt
              <br />
              ullamco est sit aliqua dolor do amet sint.
              <br />
              Velit officia consequat duis enim.
            </Description>
          </Card>
        ))}
      </WrapperCards>
    </Wrapper>
  );
};

export default SectionService;
