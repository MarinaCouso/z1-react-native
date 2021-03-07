import React from 'react';
import { ScreenTitle } from '../components/TextComponents';
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
import Card from '../components/Card';
import { ScreenContainer, ContentContainer, HeaderContainer } from '../components/styles';
import { useQuery, gql } from '@apollo/client';

const ITEMS_QUERY = gql`
  query GetItems {
    items {
      id
      title
      image
      content
      author
      category {
        id
        title
      }
    }
  }
`;

const HomeScreen = () => {
  const menuFilters = ['All', 'Favorites', 'HarmReduction', 'Integration', 'Mindfullness'];
  const { loading, error, data } = useQuery(ITEMS_QUERY);
  console.log({ data });
  loading && console.log('Loading...');
  error && console.log(`Error! ${error.message}`);

  return (
    <ScreenContainer>
      <HeaderContainer>
        <ScreenTitle text='📖 Learn' />
        <HorizontalScrollMenu text='Hello' menuFilters={menuFilters} />
      </HeaderContainer>
      <ContentContainer>
        {!!data &&
          data.items.map((lesson, index) => {
            return <Card key={index} text={lesson.title} />;
          })}
      </ContentContainer>
    </ScreenContainer>
  );
};

export default HomeScreen;
