import {createStackNavigator} from '@react-navigation/stack';
import ContractSummary from '../../pages/contractSummary/ContractSummary';
import Mypage from '../../pages/mypage/Mypage';
import styled from 'styled-components/native';

const Stack = createStackNavigator();

export const RootStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="ContractSummary" component={ContractSummary} />
    <Stack.Screen name="Mypage" component={Mypage} />
  </Stack.Navigator>
);
