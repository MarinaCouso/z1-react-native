import React from 'react';
import { HeaderContainer } from './styles';
import MenuItem from './MenuItem';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const HorizontalScrollMenu = ({ menuCategories }) => {
  console.log(menuCategories);
  return (
    <HeaderContainer>
      <ScrollMenu dragging={true} data={!!menuCategories && menuCategories.map((category) => <MenuItem key={category.id} text={category.title} />)} />
    </HeaderContainer>
  );
};

export default HorizontalScrollMenu;
