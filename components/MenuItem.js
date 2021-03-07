import React from 'react';
import { MenuTitle } from './TextComponents';
import { MenuItemButton } from './styles';

const MenuItem = ({ text, onPress }) => {
  return (
    <MenuItemButton onPress={onPress}>
      <MenuTitle text={text} />
    </MenuItemButton>
  );
};

export default MenuItem;
