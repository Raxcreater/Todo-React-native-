import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Signin = ({navigation}: any) => {
  const getApi = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/SignIn', {
        email: Email,
        password: Password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const [Email, setEmail] = useState('');
  const [Password, setpassword] = useState('');
  const [errEmail, seterrEmail] = useState(false);
  const [errPassword, seterrpassword] = useState(false);
  const signin = () => {
    if (!Email || !Password) {
      if (!Email) seterrEmail(true);
      if (!Password) seterrpassword(true);
      return;
    }
    // getApi();
    navigation.navigate('Tasks');
    setEmail('');
    setpassword('');
  };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../Assets//Images/heading.png')}
          style={styles.signupImage}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={styles.TextInput}
          onChangeText={text => setEmail(text)}
          // value={Email}
        />
        {errEmail ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            Email is required*
          </Text>
        ) : null}
        <TextInput
          placeholder="Password"
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={text => setpassword(text)}
          // value={Password}
        />
        {errPassword ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            Password is required*
          </Text>
        ) : null}
        <TouchableOpacity style={styles.signupbutton} onPress={signin}>
          <Text style={styles.textbutton}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Forget Password')}>
          <Text style={styles.textforget}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 12,
  },
  signupbutton: {
    backgroundColor: 'lightblue',
    height: 48,
    marginHorizontal: 50,
    borderRadius: 14,
    alignItems: 'center',
    paddingTop: 10.5,
    marginTop: 19,
  },
  textbutton: {
    color: 'white',
    fontSize: 20,
  },
  textforget: {
    textAlign: 'right',
    marginRight: 52,
    marginTop: 10,
    fontSize: 18,
    color: 'green',
  },
  signupImage: {
    height: 150,
    width: 150,
    marginTop: 40,
  },
});
