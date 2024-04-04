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

//aws amplify configure
import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

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
