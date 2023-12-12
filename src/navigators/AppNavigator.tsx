import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import {AppStackParamList} from '../../types';
import Details from '../screens/Details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Shared1 from '../screens/Shared1';
import Shared2 from '../screens/Shared2';
import {StackNavigationOptions} from '@react-navigation/stack';
type Props = {};
const Stack = createSharedElementStackNavigator<AppStackParamList>();
const options: StackNavigationOptions = {
  gestureEnabled: true,
  transitionSpec: {
    open: {animation: 'timing', config: {duration: 300}},
    close: {animation: 'timing', config: {duration: 300}},
  },
};

const AppNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="Details" component={Details} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
