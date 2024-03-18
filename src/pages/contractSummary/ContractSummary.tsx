import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const ContractSummary = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Text>ContractSummary</Text>
      <TestBtn onPress={() => navigate('Mypage')} />
    </View>
  );
};

export default ContractSummary;

const TestBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: red;
`;
