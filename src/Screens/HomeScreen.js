import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Header from '../Components/Header';
import TrendingComponent from '../Components/TrendingComponent';
import MovieRows from '../Components/MovieRows';

const HomeScreen = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  });
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      {!showLoader && (
        <>
          <Header />
          <TrendingComponent />
          <MovieRows />
        </>
      )}
      <ActivityIndicator
        size="large"
        color="red"
        animating={showLoader}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100%',
        }}
      />
    </ScrollView>
  );
};
export default HomeScreen;
