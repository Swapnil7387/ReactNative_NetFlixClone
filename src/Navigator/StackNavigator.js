import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import PlanScreen from '../Screens/PlanScreen';
import ProfileScreen from '../Screens/Profile';
import {ProfileContext} from '../../Context';
import LoadingScreen from '../Screens/LoadingScreen';
import HomeScreen from '../Screens/HomeScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <ProfileContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PlanScreen"
            component={PlanScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileContext>
  );
};
export default StackNavigator;
