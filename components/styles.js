import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: purple;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: ${hp(4)}px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    backgroundColor: 'purple',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex - start',
    padding: hp(4),
  },
})``;

export const AppTitle = styled.Text`
  color: yellow;
  font-family: sans;
  font-size: ${hp(4)}px;
  align-self: center;
  margin: ${hp(2)}px 0 ${hp(2)}px 0;
`;

export const MenuItemTitle = styled.TouchableOpacity`
  color: yellow;
  font-family: sans;
  font-size: ${hp(2)}px;
  padding: ${hp(1)}px ${wp(1)}px;
  border: 1px solid white;
  border-radius: ${wp(1.5)}px;
  margin-right: ${wp(1)}px;
`;

export const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  border: 1px solid white;
  border-radius: ${wp(2)}px;
  height: ${hp(40)}px;
  width: ${wp(40)}px;
`;

export const CardImage = styled.Image`
  border-top-right-radius: ${wp(2)}px;
  border-top-left-radius: ${wp(2)}px;
  height: ${hp(10)}px;
  width: ${wp(39.5)}px;
`;

export const CardTitle = styled.Text`
  color: purple;
  font-family: sans;
  font-size: ${hp(2)}px;
  font-weight: bold;
`;

export const CardContentContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom-right-radius: ${wp(2)}px;
  border-bottom-left-radius: ${wp(2)}px;
  background-color: pink;
  height: ${hp(30)}px;
  padding: ${hp(2)}px ${wp(2)}px;
`;
