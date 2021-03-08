import React, { useState } from 'react';
import { ScreenTitle } from '../../components/TextComponents/view';
import HorizontalScrollMenu from '../../components/HorizontalScrollMenuComponent/view';
import Card from '../../components/CardComponent/view';
import { ScreenContainer, ContentContainer, HeaderContainer } from './styles';
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
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const { loading, error, data } = useQuery(ITEMS_QUERY);

  let items = data?.items || [];

  loading && console.log('Loading...');
  error && console.log(`Error! ${error.message}`);

  const allCategories = items.map((lesson) => lesson.category);
  const menuCategories = Array.from(new Set(allCategories));
  let filteredData = items.filter((item) => (selectedCategoryId === '' ? true : item.category.id === selectedCategoryId));

  return (
    <ScreenContainer>
      <HeaderContainer>
        <ScreenTitle text='📖 Learn' />
        <HorizontalScrollMenu text='Hello' menuCategories={menuCategories} setSelectedCategoryId={setSelectedCategoryId} />
      </HeaderContainer>
      <ContentContainer showsVerticalScrollIndicator={false}>
        {!!filteredData &&
          filteredData.map((lesson, index) => {
            return <Card key={index} lesson={lesson} />;
          })}
      </ContentContainer>
    </ScreenContainer>
  );
};

export default HomeScreen;
