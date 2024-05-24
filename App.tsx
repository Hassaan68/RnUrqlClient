/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Home} from 'Home';
import {NavigationContainer} from '@react-navigation/native';
import {UrqlFetch} from 'UrqlFetch';
import {AppStack} from 'stacks';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="UrqlFetch" component={UrqlFetch} />
        </AppStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
