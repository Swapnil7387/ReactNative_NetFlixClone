import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import movieUrl from '../Data/movieUrl';
import MovieRowComponent from './MovieRow';
const MovieRows = () => {
  const data = movieUrl;
  return (
    <View>
      <MovieRowComponent />
    </View>
  );
};

export default MovieRows;

const styles = StyleSheet.create({});
