/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const appLogo = require('../Assets/images/appLogo.png');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
      }}>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          {/* <Image
            style={{height: 50, width: 120, marginTop: 20}}
            source={{
              uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png',
            }}
          /> */}
          <Image
            style={{ height: 50, width: 120, marginTop: 20 }}
            source={appLogo}
          />
        </View>
        <View style={{ width: 330, marginTop: 45, marginBottom: 32 }}>
          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderTextColor={'white'}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: 'white',
              backgroundColor: 'gray',
              marginBottom: 20,
            }}
          />
          <TextInput
            keyboardType="default"
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'white'}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: 'white',
              backgroundColor: 'gray',
            }}
          />
        </View>
        <Pressable
          style={
            password.length > 4
              ? {
                width: 320,
                backgroundColor: 'red',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderColor: 'white',
                alignItems: 'center',
                padding: 14,
              } : {
                width: 320,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderColor: 'white',
                alignItems: 'center',
                borderWidth: 2,
                padding: 14,
              }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
            }}>
            Sign In
          </Text>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate('Register')}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 19,
              fontWeight: '600',
              marginTop: 14,
            }}>
            New to Netflix? Sign Up now
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
};
export default LoginScreen;
