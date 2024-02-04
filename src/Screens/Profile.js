import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import BackIcon from '../Assets/images/BackArrow.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {MovieItems} from '../../Context';

const ProfileScreen = () => {
  const appLogo = require('../Assets/images/appLogo.png');
  const navigation = useNavigation();
  const {profile, setProfile} = useContext(MovieItems);
//   console.log('Profile:', profile);
  const profiles = [
    {
      id: '0',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU',
      name: 'Pranav',
    },
    {
      id: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU',
      name: 'Sujan',
    },
    {
      id: '2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU',
      name: 'Kiran',
    },
    {
      id: '3',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU',
      name: 'Samarth',
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={BackIcon} style={{width: 34, height: 34}} />
        <Text
          style={{
            marginLeft: 4,
            color: 'white',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Profile Screen
        </Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{height: 50, width: 120, marginTop: 20}}
          source={appLogo}
        />
      </View>
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Text style={{color: 'gray', fontSize: 16, fontWeight: '600'}}>
          Who's Watching?
        </Text>
        <FlatList
          keyExtractor={item => item.id}
          numColumns={2}
          data={profiles}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{marginHorizontal: 10, padding: 20, marginTop: 10}}
              onPress={() => {
                setProfile(item);
                navigation.navigate('Loading');
              }}>
              <Image
                style={{height: 110, width: 110}}
                source={{uri: item.image}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: 'gray',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 12,
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
