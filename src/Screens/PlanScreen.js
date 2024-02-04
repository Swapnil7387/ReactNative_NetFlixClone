import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  Alert
} from 'react-native';
import plans from '../Data/plans';
// import NetFlixLogo from '../Assets/images/NetflixLogo.svg';

const PlanScreen = () => {
  const checkIcon = require('../Assets/images/icons8-check-30.png');
  const netFlixLogo = require('../Assets/images/icons8-netflix-30.png');
  const data = plans;
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState();
  console.log(selected);
  const payAmmount = () => {
    Alert.alert(
      'Alert',
      'Stripe will coming soon...',
      [{text: 'OK'}],
    );
  }
  return (
    <>
      <ScrollView style={{ marginTop: 20 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: '600', fontSize: 18 }}>
            Choose the plan that is right for you
          </Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Image
              source={checkIcon}
              style={{ height: 20, width: 20, tintColor: '#E50914' }}
            />
            <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '600' }}>
              Watch all you want ad free
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Image
              source={checkIcon}
              style={{ height: 20, width: 20, tintColor: '#E50914' }}
            />
            <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '600' }}>
              Recommendation just for you
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Image
              source={checkIcon}
              style={{ height: 20, width: 20, tintColor: '#E50914' }}
            />
            <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '600' }}>
              Cancel your plan any time
            </Text>
          </View>
          <View style={{ marginTop: 20 }} />
          {data?.map((item, index) => {
            return (
              <Pressable
                style={
                  selected.includes(item?.name)
                    ? {
                      height: 160,
                      borderWidth: 3,
                      borderColor: '#E50914',
                      padding: 10,
                      margin: 10,
                      borderRadius: 9,
                    }
                    : {
                      height: 160,
                      borderWidth: 0.5,
                      borderColor: '#E50914',
                      padding: 10,
                      margin: 10,
                      borderRadius: 9,
                    }
                }
                onPress={() => {
                  setSelected(item.name);
                  setPrice(item.price);
                }}
                key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
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
                  <View style={{ padding: 10 }}>
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
                      style={{ fontSize: 16, fontWeight: '500', color: 'gray' }}>
                      Video Quality: {item?.videoQuality}
                    </Text>
                    <Text
                      style={{ fontSize: 16, fontWeight: '500', marginTop: 3 }}>
                      Resolution: {item?.resolution}
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={netFlixLogo}
                      style={{ height: 40, width: 40 }}
                    />
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
      {selected.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: '#E50914',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginBottom: 10,
            alignItems: 'center',
            height: 55,
          }}>
          <View>
            <Text style={{ color: 'white' }}>Your Selected Plan: {selected}</Text>
          </View>
          <Pressable
          onPress={()=> payAmmount()}
          >
            <Text style={{ color: 'white' }}>Pay:{' '} ₹{price}</Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};
export default PlanScreen;
