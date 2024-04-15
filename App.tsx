import {View, Text} from 'react-native';
import React from 'react';
import Signup from './src/UI/Signup/Signup';
import Signin from './src/UI/Signin/Signin';
import Forgetpassword from './src/UI/ForgetPassword/Forgetpassword';
import Todo from './src/UI/Todo/Todo';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Signup /> */}
      {/* <Signin /> */}
      {/* <Forgetpassword /> */}
      {/* <Todo /> */}
      <Navigation />
    </View>
  );
};

export default App;
