import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Mypage = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>Mypage</Text>
    </View>
  );
};

export default Mypage;
