import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../Components/Header';
import TrendingComponent from '../Components/TrendingComponent';
import MovieRows from '../Components/MovieRows';

const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <Header />
      <TrendingComponent />
      <MovieRows />
    </ScrollView>
  );
};
export default HomeScreen;
