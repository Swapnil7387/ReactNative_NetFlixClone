import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
const TrendingComponent = () => {
  const [mydata, setMyData] = useState([]);
  useEffect(() => {
    const arrayOfMovies = [
      {
        id: 1,
        imageUri:
          'https://image.tmdb.org/t/p/original/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg',
      },
      {
        id: 2,
        imageUri:
          'https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
      },
      {
        id: 3,
        imageUri:
          'https://image.tmdb.org/t/p/original/A7EByudX0eOzlkQ2FIbogzyazm2.jpg',
      },
      {
        id: 4,
        imageUri:
          'https://image.tmdb.org/t/p/original/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg',
      },
      {
        id: 5,
        imageUri:
          'https://image.tmdb.org/t/p/original/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
      },
      {
        id: 6,
        imageUri:
          'https://image.tmdb.org/t/p/original/dhVYlfMNc2bfXPB83LLL00I4l9n.jpg',
      },
      {
        id: 7,
        imageUri:
          'https://image.tmdb.org/t/p/original/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
      },
      {
        id: 8,
        imageUri:
          'https://image.tmdb.org/t/p/original/ldfCF9RhR40mppkzmftxapaHeTo.jpg',
      },
      {
        id: 9,
        imageUri:
          'https://image.tmdb.org/t/p/original/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg',
      },
      {
        id: 10,
        imageUri:
          'https://image.tmdb.org/t/p/original/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg',
      },
      {
        id: 11,
        imageUri:
          'https://image.tmdb.org/t/p/original/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg',
      },
      {
        id: 12,
        imageUri:
          'https://image.tmdb.org/t/p/original/2e853FDVSIso600RqAMunPxiZjq.jpg',
      },
      {
        id: 13,
        imageUri:
          'https://image.tmdb.org/t/p/original/upmXGc1QovmPBU0mQJR2re6ruKd.jpg',
      },
      {
        id: 14,
        imageUri:
          'https://image.tmdb.org/t/p/original/rSAmgcoA74371rplbqM27yVsd3y.jpg',
      },
      {
        id: 15,
        imageUri:
          'https://image.tmdb.org/t/p/original/jFuH0md41x5mB4qj5344mSmtHrO.jpg',
      },
    ];
    setMyData(arrayOfMovies);
  }, []);
  return (
    <View style={{marginBottom: 20}}>
      <FlatList
        horizontal
        data={mydata}
        renderItem={item => {
          return (
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 50,
                  fontWeight: 'bold',
                  position: 'absolute',
                  top: 95,
                  left: 10,
                  zIndex: 5,
                }}>
                {item.item.id}
              </Text>
              <Image
                style={{height: 150, width: 110, marginHorizontal: 10}}
                source={{
                  uri: item.item.imageUri,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default TrendingComponent;
