import React from 'react';
import { HeaderContainer } from './styles';
import { MenuItem } from './MenuItems';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const HorizontalScrollMenu = ({ menuFilters }) => {
  return (
    <HeaderContainer>
      <ScrollMenu dragging={true} data={!!menuFilters && menuFilters.map((filter, index) => <MenuItem key={index} text={filter} />)} />
    </HeaderContainer>
  );
};

export default HorizontalScrollMenu;
