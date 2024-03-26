import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {icons} from '../../shared/iconSource';
import {Icon} from '../../shared/ui/styledComponents';

const HeaderLeft = () => {
  const {goBack} = useNavigation();
  return (
    <Box>
      <IconBtn onPress={() => goBack()}>
        <Icon source={icons.chevron_left_24} />
      </IconBtn>
    </Box>
  );
};

export default HeaderLeft;

const Box = styled.View``;

const IconBtn = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;

  margin-left: 16px;
`;
