import React from 'react';
import { HeaderContainer } from './styles';
import MenuItem from './MenuItem';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const HorizontalScrollMenu = ({ menuCategories, setSelectedCategoryId }) => {
  menuCategories.push({ id: '', title: 'All' });

  return (
    <HeaderContainer>
      <ScrollMenu dragging={true} data={!!menuCategories && menuCategories.map((category) => <MenuItem key={category.id} text={category.title} onPress={() => setSelectedCategoryId(category.id)} />)} />
    </HeaderContainer>
  );
};

export default HorizontalScrollMenu;
