// RN
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

// 3rd
import styled from 'styled-components/native';

// sherlock
import {RootStackNav} from './src/app/navigators/RootStackNav';
import {store} from './src/app/store/reduxStore';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNav />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
