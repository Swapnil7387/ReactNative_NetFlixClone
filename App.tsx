/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './src/Navigator/StackNavigator';

const App = () => {
  return (
    <>
      <StackNavigator />
      <StatusBar />
    </>
  );
};

export default App;
