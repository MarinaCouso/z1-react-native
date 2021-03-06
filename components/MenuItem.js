import React from 'react';
import { MenuTitle } from './TextComponents';
import { MenuItemButton } from './styles';

const MenuItem = ({ text }) => {
  console.log(text);
  return (
    <MenuItemButton>
      <MenuTitle text={text} />
    </MenuItemButton>
  );
};

export default MenuItem;
