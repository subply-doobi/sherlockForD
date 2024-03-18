import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Mypage = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>Mypage</Text>
      <TestBtn onPress={() => navigate('ContractSummary')} />
    </View>
  );
};

export default Mypage;

const TestBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: red;
`;
