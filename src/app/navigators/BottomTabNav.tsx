import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mypage from '../../pages/mypage/Mypage';
import ContractSummary from '../../pages/contractSummary/ContractSummary';
import HeaderLeft from '../../widgets/header/HeaderLeft';
import styled from 'styled-components/native';
import {icons} from '../../shared/iconSource';
import {Col, Icon, TextMain} from '../../shared/ui/styledComponents';
import {ImageSourcePropType} from 'react-native';
import {colors} from '../../shared/colors';

const scrNmToTabBarItem: {
  [key: string]: {
    label: string;
    icon: ImageSourcePropType;
    iconActive: ImageSourcePropType;
  };
} = {
  ContractSummary: {
    label: '홈',
    icon: icons.home_24,
    iconActive: icons.home_activate_24,
  },
  Mypage: {
    label: '마이셜록',
    icon: icons.user_24,
    iconActive: icons.user_activate_24,
  },
};

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {height: 70},
        tabBarStyle: {
          height: 58,
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 16, fontWeight: 'bold', lineHeight: 22},
      }}>
      <Tab.Screen
        name="ContractSummary"
        component={ContractSummary}
        options={{
          headerTitle: '홈',
          tabBarIcon: ({focused}) => {
            const {icon, iconActive} = scrNmToTabBarItem['ContractSummary'];
            return <Icon source={focused ? iconActive : icon} />;
          },
          tabBarLabel: ({focused}) => (
            <Label style={{color: focused ? colors.main : colors.textGrey}}>
              홈
            </Label>
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          headerTitle: '마이셜록',
          tabBarIcon: ({focused}) => {
            const {icon, iconActive} = scrNmToTabBarItem['Mypage'];
            return <Icon source={focused ? iconActive : icon} />;
          },
          tabBarLabel: ({focused}) => (
            <Label style={{color: focused ? colors.main : colors.textGrey}}>
              마이셜록
            </Label>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const Label = styled(TextMain)`
  font-size: 12px;
  margin: -12px 0px 8px 0px;
`;
