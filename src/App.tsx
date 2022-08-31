/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';

import { MyNavigator } from './navigation/MyNavigator';

const App: React.FC = () => {

  return (
    <View style={{flex: 1}}>
      <MyNavigator />
    </View>
  );
};

export default App;
