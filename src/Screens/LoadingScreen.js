import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="red" animating={true} />
    </View>
  );
};
export default LoadingScreen;
