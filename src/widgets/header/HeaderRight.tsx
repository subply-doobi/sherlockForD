import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {icons} from '../../shared/iconSource';
import {useNavigation} from '@react-navigation/native';

const HeaderRight = () => {
  const {navigate} = useNavigation();
  return (
    <Box>
      <IconBtn onPress={() => navigate('ContractSummary')}>
        <Icon source={icons.home_24} />
      </IconBtn>
      <IconBtn onPress={() => navigate('Mypage')}>
        <Icon source={icons.user_24} />
      </IconBtn>
    </Box>
  );
};

export default HeaderRight;

const Box = styled.View`
  flex-direction: row;
  margin-right: 16px;
`;

const IconBtn = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
