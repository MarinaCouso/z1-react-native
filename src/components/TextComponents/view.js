import React from 'react';
import { MenuItemTitle, AppTitle, CardTitleText } from './styles';

const ScreenTitle = ({ text }) => {
  return <AppTitle>{text}</AppTitle>;
};

const MenuTitle = ({ text }) => {
  return <MenuItemTitle>{text}</MenuItemTitle>;
};

const CardTitle = ({ text }) => {
  return <CardTitleText>{text}</CardTitleText>;
};

export { ScreenTitle, MenuTitle, CardTitle };
