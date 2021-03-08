import React from 'react';
import { CardContainer, CardImage, CardContentContainer } from './styles';
import { CardTitle } from '../TextComponents/view';

const Card = ({ lesson }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: lesson.image }} resizeMode='contain' />
      <CardContentContainer>
        <CardTitle text={lesson.title} />
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
