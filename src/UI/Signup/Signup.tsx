import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Signup = ({navigation}: any) => {
  // declared states
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setpassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [erremail, seterremail] = useState(false);
  const [errname, seterrname] = useState(false);
  const [errpassword, seterrpassword] = useState(false);
  const [errconfirmPassword, seterrconfirmPassword] = useState(false);
  const postApi = async data => {
    try {
      await axios
        .post('http://127.0.0.1:5000/Signup/', {
          data,
        })
        .then(res => {
          console.log(res, '........');
        })
        .catch(err => {
          console.log(err, '...........');
        });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const listData = () => {
    axios
      .get('http://127.0.0.1:5000/getTask')
      .then(res => {
        console.log(res, '..............gettttt');
      })
      .catch(err => {
        console.log(err, 'errrrrrrrr');
      });
  };

  useEffect(() => {
    listData();
  }, []);

  const signup = () => {
    if (!Email || !Name || !Password || !ConfirmPassword) {
      if (!Email) seterremail(true);
      if (!Name) seterrname(true);
      if (!Password) seterrpassword(true);
      if (!ConfirmPassword) seterrconfirmPassword(true);
      return; // Exit function if any field is empty
    }

    let apiData = {
      email: Email,
      name: Name,
      password: Password,
    };

    console.log(apiData, 'apiDataapiDataapiData');
    postApi(apiData);
    if (Password !== ConfirmPassword) {
      seterrpassword(true);
      seterrconfirmPassword(true);
      return; // Exit function if passwords don't match
    }

    // navigation.navigate('Tasks'); // navigation in screen
    // setEmail(''); // settnig states empty so that on press states get clear
    // setName('');
    // setpassword('');
    // setConfirmPassword('');
  };

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../Assets//Images/sign.jpg')}
          style={styles.signupImage}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={styles.TextInput}
          onChangeText={text => setEmail(text)}
          value={Email}
        />
        {erremail ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            Email is required*
          </Text>
        ) : null}
        <TextInput
          placeholder="Name"
          style={styles.TextInput}
          onChangeText={text => setName(text)}
          value={Name}
        />
        {errname ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            Name is required*
          </Text>
        ) : null}
        <TextInput
          placeholder="Password"
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={text => setpassword(text)}
          value={Password}
        />
        {errpassword ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            Password is required*
          </Text>
        ) : null}
        <TextInput
          placeholder="ConfirmPassword"
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
          value={ConfirmPassword}
        />
        {errconfirmPassword ? (
          <Text style={{color: 'red', fontSize: 16, marginLeft: 35}}>
            ConfirmPassword is required*
          </Text>
        ) : null}
        <TouchableOpacity style={styles.signupbutton} onPress={signup}>
          <Text style={styles.textbutton}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.alradytext}>Already a user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.Signin}>SIGNIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupImage: {
    height: 150,
    width: 150,
    marginTop: 40,
  },

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
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10.5,
    marginTop: 19,
  },
  textbutton: {
    color: 'white',
    fontSize: 20,
  },
  orText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'grey',
    marginTop: 20,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },

  icons: {
    height: 40,
    width: 40,
  },
  alradytext: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',

    fontFamily: 'Poppins-SemiBold',
  },
  Signin: {
    fontSize: 18,
    textAlign: 'center',
    color: 'pink',
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 4,
    paddingTop: 1,
  },
});
