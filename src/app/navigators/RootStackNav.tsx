// RN

// 3rd
import {createStackNavigator} from '@react-navigation/stack';

// sherlock
import Login from '../../pages/login/Login';
import SignUp from '../../pages/signUp/SignUp';
import ContractDetail from '../../pages/contractDetail/ContractDetail';
import ContractEdit from '../../pages/contractEdit/ContractEdit';
import ContractList from '../../pages/contractList/ContractList';
import ProfilePreview from '../../pages/profilePreview/ProfilePreview';
import Certification from '../../pages/certificationRequest/Certification';
import HeaderLeft from '../../widgets/header/HeaderLeft';
import BottomTabNav from './BottomTabNav';
import DetectiveDetail from '../../pages/detectiveDetail/DetectiveDetail';

const Stack = createStackNavigator();

export const RootStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {height: 70},
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 16, fontWeight: 'bold', lineHeight: 22},
        headerLeft: () => <HeaderLeft />,
      }}>
      <Stack.Screen
        name="DetectiveDetail"
        component={DetectiveDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ContractEdit"
        component={ContractEdit}
        options={{headerTitle: '계약서 작성'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerTitle: '셜록 회원가입'}}
      />
      <Stack.Screen name="ContractList" component={ContractList} />
      <Stack.Screen name="ContractDetail" component={ContractDetail} />
      <Stack.Screen name="ProfilePreview" component={ProfilePreview} />
      <Stack.Screen name="Certification" component={Certification} />
    </Stack.Navigator>
  );
};
