import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Forgetpassword = ({navigation}: any) => {
  const [Email, setemail] = useState(''); // sates delaclaration
  const [Password, setpassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [erremail, seterremail] = useState(false);
  const [errpassword, seterrpassword] = useState(false);
  const [errconfirmPassword, seterrconfirmPassword] = useState(false);
  const reset = () => {
    if (!Email || !Password || !ConfirmPassword) {
      if (!Email) seterremail(true);
      if (!Password) seterrpassword(true);
      if (!ConfirmPassword) seterrconfirmPassword(true);
      return;
    }
    if (Password !== ConfirmPassword) {
      seterrpassword(true);
      seterrconfirmPassword(true);
      return; // Exit function if passwords don't match
    }
    navigation.navigate('Tasks');
    setemail('');
    setpassword('');
    setConfirmPassword('');
  };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Images/locked.png')}
          style={styles.lockedImage}
        />
        <Text style={styles.forgetText}>Forget Password</Text>
      </View>
      <View>
        <TextInput
          placeholder="Email "
          style={styles.TextInput}
          onChangeText={text => setemail(text)}
        />
        {erremail ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            Email is required*
          </Text>
        ) : null}
        <TextInput
          placeholder="Password"
          style={styles.TextInput}
          onChangeText={text => setpassword(text)}
        />
        {errpassword ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            Password is required*
          </Text>
        ) : null}

        <TextInput
          placeholder="Confirm Password"
          style={styles.TextInput}
          onChangeText={text => setConfirmPassword(text)}
        />
        {errconfirmPassword ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            ConfirmPassword is required*
          </Text>
        ) : null}
        <TouchableOpacity style={styles.signupbutton} onPress={reset}>
          <Text style={styles.textbutton}> Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgetpassword;

const styles = StyleSheet.create({
  lockedImage: {
    height: 160,
    width: 150,
    marginTop: 80,
  },
  forgetText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 24,
    color: 'purple',
  },
  TextInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 12,
    fontSize: 18,
  },
  signupbutton: {
    backgroundColor: 'blue',
    height: 48,
    marginHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10.5,
    marginTop: 25,
  },
  textbutton: {
    color: 'white',
    fontSize: 20,
  },
});
