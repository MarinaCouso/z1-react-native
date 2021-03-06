import React from 'react';
import { MenuItemTitle, AppTitle } from './styles';

const ScreenTitle = ({ text }) => {
  return <AppTitle>{text}</AppTitle>;
};

const MenuTitle = ({ text }) => {
  return <MenuItemTitle>{text}</MenuItemTitle>;
};

export { ScreenTitle, MenuTitle };
