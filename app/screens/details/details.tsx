import React from 'react';
import { Text } from 'react-native';

import { Container, Content } from 'native-base';

const Details: React.SFC<any> = props => {
  return (
    <Container>
      <Content padder>
        <Text>Details</Text>
      </Content>
    </Container>
  );
};

export default Details;
