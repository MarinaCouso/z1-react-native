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

export const HorizontalScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex - start',
    padding: hp(1),
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
