import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import plans from '../Data/plans';
// import NetFlixLogo from '../Assets/images/NetflixLogo.svg';

const PlanScreen = () => {
  const checkIcon = require('../Assets/images/icons8-check-30.png');
  const netFlixLogo = require('../Assets/images/icons8-netflix-30.png');
  const data = plans;
  return (
    <ScrollView style={{marginTop: 20}}>
      <View style={{padding: 10}}>
        <Text style={{fontWeight: '600', fontSize: 18}}>
          Choose the plan that is right for you
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            source={checkIcon}
            style={{height: 20, width: 20, tintColor: '#E50914'}}
          />
          <Text style={{marginLeft: 8, fontSize: 16, fontWeight: '600'}}>
            Watch all you want ad free
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            source={checkIcon}
            style={{height: 20, width: 20, tintColor: '#E50914'}}
          />
          <Text style={{marginLeft: 8, fontSize: 16, fontWeight: '600'}}>
            Recommendation just for you
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            source={checkIcon}
            style={{height: 20, width: 20, tintColor: '#E50914'}}
          />
          <Text style={{marginLeft: 8, fontSize: 16, fontWeight: '600'}}>
            Cancel your plan any time
          </Text>
        </View>
        <View style={{marginTop: 20}} />
        {data?.map((item, index) => {
          return (
            <Pressable
              style={{
                height: 160,
                borderWidth: 0.5,
                borderColor: '#E50914',
                padding: 10,
                margin: 10,
                borderRadius: 9,
              }}
              key={index}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    backgroundColor: '#E50914',
                    width: 100,
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      fontWeight: '600',
                      color: 'white',
                    }}>
                    {item?.name}
                  </Text>
                </View>
                <View style={{padding: 10}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      alignItems: 'center',
                    }}>
                    Price: ₹{item?.price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
                    Video Quality: {item?.videoQuality}
                  </Text>
                  <Text style={{fontSize: 16, fontWeight: '500', marginTop: 3}}>
                    Resolution: {item?.resolution}
                  </Text>
                </View>
                <View>
                  <Image source={netFlixLogo} style={{height: 40, width: 40}} />
                </View>
              </View>
              {/* <View style={{marginTop: 4}}>
                <Text style={{fontSize: 16}}>Devices you can watch On: </Text>
                <View>
                  {data.map((items, index) => {
                    // console.log("Items:", items?.devices);
                    items.devices.map((devices, i) => {
                      console.log('devices?.id', devices?.id);
                      return <Text>{devices?.id}</Text>;
                    });
                  })}
                </View>
              </View> */}
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
};
export default PlanScreen;
