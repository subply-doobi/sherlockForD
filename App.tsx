// RN
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

// 3rd
import styled from 'styled-components/native';

// sherlock
import {RootStackNav} from './src/app/navigators/RootStackNav';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
}

export default App;
