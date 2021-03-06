import React from 'react';
import { CardContainer, CardImage, CardContentContainer } from './styles';
import { CardTitle } from './TextComponents';

const Card = () => {
  return (
    <CardContainer>
      <CardImage source={{ uri: 'https://picsum.photos/750/400' }} resizeMode='contain' />
      <CardContentContainer>
        <CardTitle text='Example' />
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
