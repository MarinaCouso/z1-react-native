import React from 'react';
import { CardContainer, CardTitle, CardImage, CardContentContainer } from './styles';

const Card = () => {
  return (
    <CardContainer>
      <CardImage source={{ uri: 'https://picsum.photos/750/400' }} resizeMode='contain' />
      <CardContentContainer>
        <CardTitle>Holi</CardTitle>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
