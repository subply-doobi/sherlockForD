// RN

// 3rd
import {createStackNavigator} from '@react-navigation/stack';
import {getHeaderTitle} from '@react-navigation/elements';

// sherlock
import ContractSummary from '../../pages/contractSummary/ContractSummary';
import Mypage from '../../pages/mypage/Mypage';
import Login from '../../pages/login/Login';
import SignUp from '../../pages/signUp/SignUp';
import ContractDetail from '../../pages/contractDetail/ContractDetail';
import ContractEdit from '../../pages/contractEdit/ContractEdit';
import ContractList from '../../pages/contractList/ContractList';
import ProfilePreview from '../../pages/profilePreview/ProfilePreview';
import Certification from '../../pages/certificationRequest/Certification';
import Header from '../../widgets/header/Header';
import HeaderRight from '../../widgets/header/HeaderRight';
import HeaderLeft from '../../widgets/header/HeaderLeft';

const Stack = createStackNavigator();

export const RootStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerMode: 'screen',
      headerStyle: {height: 70},
      header: ({navigation, route, options, back}) => {
        const title = getHeaderTitle(options, route.name);
        return (
          <Header
            title={title}
            headerRight={<HeaderRight />}
            headerLeft={<HeaderLeft />}
          />
        );
      },
    }}>
    <Stack.Screen
      name="ContractSummary"
      component={ContractSummary}
      options={{headerTitle: '홈'}}
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
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />

    <Stack.Screen name="Mypage" component={Mypage} />
    <Stack.Screen name="ContractList" component={ContractList} />
    <Stack.Screen name="ContractDetail" component={ContractDetail} />
    <Stack.Screen name="ProfilePreview" component={ProfilePreview} />
    <Stack.Screen name="Certification" component={Certification} />
  </Stack.Navigator>
);
