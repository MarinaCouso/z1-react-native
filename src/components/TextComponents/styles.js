import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const AppTitle = styled.Text`
  color: yellow;
  font-family: sans;
  font-size: ${hp(4)}px;
  align-self: center;
  margin: ${hp(2)}px 0 ${hp(2)}px 0;
`;

export const MenuItemTitle = styled.Text`
  color: yellow;
  font-family: sans;
  font-size: ${hp(2)}px;
`;

export const CardTitleText = styled.Text`
  color: purple;
  font-family: sans;
  font-size: ${hp(2)}px;
  font-weight: bold;
`;
