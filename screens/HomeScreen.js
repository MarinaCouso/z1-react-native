import React from 'react';
import { ScreenTitle } from '../components/TextComponents';
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
import Card from '../components/Card';
import { ScreenContainer, ContentContainer, HeaderContainer } from '../components/styles';

const HomeScreen = () => {
  const menuFilters = ['All', 'Favorites', 'HarmReduction', 'Integration', 'Mindfullness'];

  return (
    <ScreenContainer>
      <HeaderContainer>
        <ScreenTitle text='📖 Learn' />
        <HorizontalScrollMenu text='Hello' menuFilters={menuFilters} />
      </HeaderContainer>
      <ContentContainer>
        <Card />
      </ContentContainer>
    </ScreenContainer>
  );
};

export default HomeScreen;
