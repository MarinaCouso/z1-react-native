import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const MenuItemButton = styled.TouchableOpacity`
  padding: ${hp(1)}px ${wp(1)}px;
  border: 1px solid white;
  border-radius: ${wp(1.5)}px;
  margin-right: ${wp(1)}px;
`;
