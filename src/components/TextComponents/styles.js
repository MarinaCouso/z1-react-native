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
  text-overflow: clip;
  width: 100%;
`;

export const CardCategoryText = styled.Text`
  text-transform: uppercase;
  font-size: ${hp(1.5)}px;
  color: yellow;
  font-family: sans;
  margin-bottom: ${hp(1)}px;
`;

export const CardContentText = styled(CardTitleText)`
  align-self: left;
  text-overflow: fade;
  overflow: hidden;
  font-weight: regular;
  font-size: ${hp(1.5)}px;
  width: 100%;
  padding-top: ${hp(1)}px;
`;
