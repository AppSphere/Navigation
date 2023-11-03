import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Navigation/app-stack';

const App = () => {
  return <NavigationContainer>
    <AppStack/>
  </NavigationContainer>;
};

export default App;
