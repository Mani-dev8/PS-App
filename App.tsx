import {View, Text} from 'react-native';
import React from 'react';
import AppBar from './src/components/layouts/AppBar';
import AppNavigator from './src/navigators/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {};

const App = (props: Props) => {
  return <AppNavigator />;
};

export default App;
