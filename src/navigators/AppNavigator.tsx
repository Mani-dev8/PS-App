import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import {AppStackParamList} from '../../types';
import Details from '../screens/Details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
type Props = {};
const Stack = createSharedElementStackNavigator<AppStackParamList>();

const AppNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}  options={{animationEnabled:true,animationTypeForReplace:'pop'}}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
