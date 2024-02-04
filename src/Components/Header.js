import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import SearchIcon from '../Assets/images/searchIcon.png';
import PlusIcon from '../Assets/images/plus.png';
import PlayIcon from '../Assets/images/play.png';
import InfoIcon from '../Assets/images/info.png';
import {MovieItems} from '../../Context';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const [movies, setMovies] = useState([]);
  const [firstMovie, setFirstMovie] = useState(null);
  const [movieCount, setMovieCount] = useState(0);
  const appLogo = require('../Assets/images/appLogo.png');
  const {profile, setProfile} = useContext(MovieItems);
  const API_KEY = '5ba8c4f68dc45b5451777a1b30dcc60b';
  const navigation = useNavigation();
  useEffect(() => {
    const movieData = async () => {
      console.log('ddssssdff', movieCount);
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
      )
        .then(response => {
          response.json().then(data => {
            setMovies(data.results);
            setFirstMovie(data.results[0].poster_path);
          });
        })
        .catch(error => {
          console.log('Error::>>>>>>>>>>>>>>', error);
        });
    };
    movieData();
  }, []);
  return (
    <View style={{marginBottom: 10}}>
      <ImageBackground
        style={{width: '100%', height: 480, position: 'relative'}}
        source={{
          uri: `https://image.tmdb.org/t/p/original${firstMovie}`,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <View>
            <Image
              style={{height: 50, width: 120, marginTop: 20}}
              source={appLogo}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Image style={{marginRight: 8}} source={SearchIcon} />
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{height: 30, width: 30, borderRadius: 5}}
                source={{uri: profile.image}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            margin: 20,
            paddingLeft: 10,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            TV Shows
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'white',
              marginHorizontal: 20,
            }}>
            Movies
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Categories
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <View>
          <Image style={{height: 30, width: 30}} source={PlusIcon} />
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 3,
            }}>
            Plus
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            width: 120,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image style={{height: 30, width: 30}} source={PlayIcon} />
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              padding: 6,
            }}>
            Play
          </Text>
        </View>
        <View>
          <Image style={{height: 30, width: 30}} source={InfoIcon} />
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 3,
            }}>
            Info
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
