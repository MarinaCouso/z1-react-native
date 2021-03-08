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
    backgroundColor: 'purple',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hp(2),
  },
})``;
