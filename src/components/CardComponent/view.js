import React from 'react';
import { CardContainer, CardImage, CardContentContainer } from './styles';
import { CardTitle, CardCategory, CardContent } from '../TextComponents/view';

const Card = ({ lesson }) => {
  console.log({ lesson });
  return (
    <CardContainer>
      <CardImage source={{ uri: lesson.image }} resizeMode='cover' />
      <CardContentContainer>
        <CardCategory text={lesson.category.title} />
        <CardTitle text={lesson.title} />
        <CardContent text={lesson.content} />
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
