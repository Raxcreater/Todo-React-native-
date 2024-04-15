import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../src/UI/Signup/Signup';
import Todo from '../src/UI/Todo/Todo';
import Signin from '../src/UI/Signin/Signin';
import Forgetpassword from '../src/UI/ForgetPassword/Forgetpassword';

const Navigation = () => {
  let Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tasks"
          component={Todo}
          //   options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          //   options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forget Password"
          component={Forgetpassword}
          //   options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
