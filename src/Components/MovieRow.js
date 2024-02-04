import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import movieUrl from '../Data/movieUrl';

const MovieRowComponent = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '5ba8c4f68dc45b5451777a1b30dcc60b';

  useEffect(() => {
    const arrayOfMovies = [
      {
        adult: false,
        backdrop_path: '/ba9TgAO4I8RyA2LljzR3MspHaM9.jpg',
        genre_ids: [28, 878, 53],
        id: 1,
        original_language: 'hi',
        original_title: 'Attack',
        overview:
          'With the Parliament under siege, India’s first super soldier Arjun Shergill is tasked to get hold of the terrorists in the nick of time, save the Prime Minister from their clutches and stop a dirty bomb from exploding and destroying Delhi. Will Arjun succeed in his mission?',
        popularity: 773.348,
        poster_path:
          'https://image.tmdb.org/t/p/original/5jGKbYuZtdxSNOocI6ZziQeiY4n.jpg',
        release_date: '2022-04-01',
        title: 'Attack',
        video: false,
        vote_average: 7.4,
        vote_count: 88,
      },
      {
        adult: false,
        backdrop_path: '/uBz7ji0Zw3vX99WH31rHFG5X0Az.jpg',
        genre_ids: [28, 18],
        id: 2,
        original_language: 'hi',
        original_title: 'State of Siege: Temple Attack',
        overview:
          "Based on the true incident of the 2002 terrorist attack in Gujarat's Akshardham temple, the story revolves around the bravery of NSG commandos, who stood up for their country and their people in the worst of times.",
        popularity: 190.1,
        poster_path:
          'https://image.tmdb.org/t/p/original/ckghAN8FuYY2icUyJjVkKXiBrek.jpg',
        release_date: '2021-07-09',
        title: 'State of Siege: Temple Attack',
        video: false,
        vote_average: 6.19,
        vote_count: 29,
      },
      {
        adult: false,
        backdrop_path: '/S3EIcOUQYxgd3QzjOo2rZJ2MN8.jpg',
        genre_ids: [28, 18, 10752],
        id: 3,
        original_language: 'hi',
        original_title: 'Uri: The Surgical Strike',
        overview:
          'Following the roguish terrorist attacks at Uri Army Base camp in Kashmir, India takes the fight to the enemy, in its most successful covert operation till date with one and only one objective of avenging their fallen heroes.',
        popularity: 128.211,
        poster_path:
          'https://image.tmdb.org/t/p/original/yNySAgpAnWmPpYinim9E0tUzJWG.jpg',
        release_date: '2019-01-11',
        title: 'Uri: The Surgical Strike',
        video: false,
        vote_average: 7.144,
        vote_count: 350,
      },
      {
        adult: false,
        backdrop_path: '/13QFKJa7ZPY3VN0L6sxKuNoLHFf.jpg',
        genre_ids: [28, 80, 18],
        id: 4,
        original_language: 'hi',
        original_title: 'Animal',
        overview:
          "The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.",
        popularity: 88.698,
        poster_path:
          'https://image.tmdb.org/t/p/original/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg',
        release_date: '2023-12-01',
        title: 'Animal',
        video: false,
        vote_average: 6.848,
        vote_count: 69,
      },
      {
        adult: false,
        backdrop_path: '/5LtSjMNw6j3LkG29Oa4O0iY5U8.jpg',
        genre_ids: [28, 12, 53],
        id: 5,
        original_language: 'hi',
        original_title: 'जवान',
        overview:
          'An emotional journey of a prison warden, driven by a personal vendetta while keeping up to a promise made years ago, recruits inmates to commit outrageous crimes that shed light on corruption and injustice, in an attempt to get even with his past,  and that leads him to an unexpected reunion.',
        popularity: 99.576,
        poster_path:
          'https://image.tmdb.org/t/p/original/hHKTXxJ3lN8ruHAg5YvpXIQtjc7.jpg',
        release_date: '2023-09-07',
        title: 'Jawan',
        video: false,
        vote_average: 7.2,
        vote_count: 187,
      },
      {
        adult: false,
        backdrop_path: '/a7u1CU5wb05PSd1IWuP57rSx8zt.jpg',
        genre_ids: [18],
        id: 6,
        original_language: 'hi',
        original_title: '12th Fail',
        overview:
          "Based on the true story of IPS officer Manoj Kumar Sharma, 12th Fail sheds limelight on fearlessly embracing the idea of restarting the academic journey despite the setbacks and challenges and reclaiming one's destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.",
        popularity: 33.687,
        poster_path:
          'https://image.tmdb.org/t/p/original/eebUPRI4Z5e1Z7Hev4JZAwMIFkX.jpg',
        release_date: '2023-10-27',
        title: '12th Fail',
        video: false,
        vote_average: 8.298,
        vote_count: 57,
      },
      {
        adult: false,
        backdrop_path: '/hObu7eQdEzqh8sxv6QUmI7ZZepU.jpg',
        genre_ids: [28, 12, 53],
        id: 7,
        original_language: 'hi',
        original_title: 'फाइटर',
        overview:
          'Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.',
        popularity: 33.221,
        poster_path:
          'https://image.tmdb.org/t/p/original/zDZowwb9GZGEctAu2PCpjiPQAMM.jpg',
        release_date: '2024-01-24',
        title: 'Fighter',
        video: false,
        vote_average: 5.9,
        vote_count: 9,
      },
      {
        adult: false,
        backdrop_path: '/5qjbu7po6eqLNd4kUPAyIpFRwQK.jpg',
        genre_ids: [18, 10751, 35, 28],
        id: 8,
        original_language: 'hi',
        original_title: 'दंगल',
        overview:
          'Dangal is an extraordinary true story based on the life of Mahavir Singh and his two daughters, Geeta and Babita Phogat. The film traces the inspirational journey of a father who trains his daughters to become world class wrestlers.',
        popularity: 35.29,
        poster_path:
          'https://image.tmdb.org/t/p/original/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg',
        release_date: '2016-12-21',
        title: 'Dangal',
        video: false,
        vote_average: 7.93,
        vote_count: 892,
      },
      {
        adult: false,
        backdrop_path: '/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg',
        genre_ids: [35, 18, 10749],
        id: 9,
        original_language: 'hi',
        original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
        overview:
          'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
        popularity: 32.638,
        poster_path:
          'https://image.tmdb.org/t/p/original/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg',
        release_date: '1995-10-20',
        title: 'Dilwale Dulhania Le Jayenge',
        video: false,
        vote_average: 8.541,
        vote_count: 4328,
      },
      {
        adult: false,
        backdrop_path: '/u7kuUaySqXBVAtqEl9vkTkAzHV9.jpg',
        genre_ids: [18, 35],
        id: 10,
        original_language: 'hi',
        original_title: '3 Idiots',
        overview:
          'Rascal. Joker. Dreamer. Genius... You\'ve never met a college student quite like "Rancho." From the moment he arrives at India\'s most prestigious university, Rancho\'s outlandish schemes turn the campus upside down—along with the lives of his two newfound best friends. Together, they make life miserable for "Virus," the school’s uptight and heartless dean. But when Rancho catches the eye of the dean\'s daughter, Virus sets his sights on flunking out the "3 idiots" once and for all.',
        popularity: 25.891,
        poster_path:
          'https://image.tmdb.org/t/p/original/66A9MqXOyVFCssoloscw79z8Tew.jpg',
        release_date: '2009-12-23',
        title: '3 Idiots',
        video: false,
        vote_average: 7.99,
        vote_count: 2226,
      },
      {
        adult: false,
        backdrop_path: '/5VKTBTheoNKGlMWcJVdYZLPJW9q.jpg',
        genre_ids: [28, 53, 10749, 12],
        id: 11,
        original_language: 'hi',
        original_title: 'बाघी',
        overview:
          'Ronny is a rebellious man, who falls in love with Sia but circumstances separate them. Years later, Ronny learns that Sia is abducted by a martial arts champion, Raghav.',
        popularity: 15.251,
        poster_path:
          'https://image.tmdb.org/t/p/original/o5VJiWgGp1O2OtjESZVd37gepYQ.jpg',
        release_date: '2016-04-29',
        title: 'Baaghi',
        video: false,
        vote_average: 6.366,
        vote_count: 112,
      },
      {
        adult: false,
        backdrop_path: '/gcZbciueHH7WmD03GcVZX7LYqmR.jpg',
        genre_ids: [18, 10402],
        id: 12,
        original_language: 'hi',
        original_title: 'गल्ली बॉय',
        overview:
          'A coming-of-age story based on the lives of street rappers in Mumbai.',
        popularity: 14.06,
        poster_path:
          'https://image.tmdb.org/t/p/original/4RE7TD5TqEXbPKyUHcn7CSeMlrJ.jpg',
        release_date: '2019-02-14',
        title: 'Gully Boy',
        video: false,
        vote_average: 7.4,
        vote_count: 168,
      },
      {
        adult: false,
        backdrop_path: '/x7aTYQgqce4GUcCbgxxZoE3Z2BQ.jpg',
        genre_ids: [18],
        id: 13,
        original_language: 'hi',
        original_title: 'Pinky Aur Papa',
        overview:
          'A conversation between a father and daughter who have no one but them for each other, they now have to handle a situation where Pinky have done something which is very hard for Rajendra to even believe. Rajendra unfolds himself in many shades, Pinky on the other hand is going through a constant fear where she needs his support the most. She tries to convince Rajendra and as story goes further, we see the changes happening in Rajendra.',
        popularity: 14.602,
        poster_path:
          'https://image.tmdb.org/t/p/original/3bGSfMayWGr1ELWmph19ouKHBbk.jpg',
        release_date: '2024-02-02',
        title: 'Pinky and Papa',
        video: false,
        vote_average: 0.0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: '/kqSxCsGIT4rqrZTTMpYP8RIzojv.jpg',
        genre_ids: [28, 12, 53],
        id: 14,
        original_language: 'hi',
        original_title: 'Tiger 3',
        overview:
          "Following the events of Tiger Zinda Hai, War, and Pathaan, Avinash Singh Rathore returns as Tiger but this time the battle is within. He has to choose between his country or family as an old enemy is after his life, who claims that his family was killed by Tiger. He holds Tiger captive in Pakistan as the Indian agent's loyalty towards his country faces its biggest test.",
        popularity: 18.733,
        poster_path:
          'https://image.tmdb.org/t/p/original/7wgED7Yx9VLcNWSO91VgwicHmMD.jpg',
        release_date: '2023-11-12',
        title: 'Tiger 3',
        video: false,
        vote_average: 6.2,
        vote_count: 25,
      },
      {
        adult: false,
        backdrop_path: '/42vFebJ0VRnwdemaUOIr7c6Tjo1.jpg',
        genre_ids: [35, 18],
        id: 15,
        original_language: 'hi',
        original_title: 'कभी ख़ुशी कभी ग़म',
        overview:
          'Years after his father disowns his adopted brother for marrying a woman of lower social standing, a young man goes on a mission to reunite his family.',
        popularity: 17.454,
        poster_path:
          'https://image.tmdb.org/t/p/original/lRl7wrJmkOzMTDVYFSIpUcsIjPQ.jpg',
        release_date: '2001-12-14',
        title: 'Kabhi Khushi Kabhie Gham',
        video: false,
        vote_average: 7.7,
        vote_count: 506,
      },
      {
        adult: false,
        backdrop_path: '/7mZwzE4EWRXBPTQcd2W32vF4eZC.jpg',
        genre_ids: [18, 35],
        id: 16,
        original_language: 'hi',
        original_title: 'खो गए हम कहाँ',
        overview:
          'Three best friends juggle life as 20-somethings in Mumbai, where romance, ambition and heartbreak collide with the addictive draw of social media.',
        popularity: 19.319,
        poster_path:
          'https://image.tmdb.org/t/p/original/6t6nQ7EHUEoZ2WQWm2zwtJRQ6pS.jpg',
        release_date: '2023-12-26',
        title: 'Kho Gaye Hum Kahan',
        video: false,
        vote_average: 6.343,
        vote_count: 35,
      },
      {
        adult: false,
        backdrop_path: '/pOEwPqwK4rfKaM1UJKU3eyWUtVF.jpg',
        genre_ids: [28, 35, 80],
        id: 17,
        original_language: 'hi',
        original_title: 'लूप लपेटा',
        overview:
          "When her boyfriend loses a mobster's cash, Savi races against the clock to save the day — if only she can break out of a curious cycle of dead ends.",
        popularity: 16.844,
        poster_path:
          'https://image.tmdb.org/t/p/original/onGdT8sYi89drvSJyEJnft97rOq.jpg',
        release_date: '2022-02-04',
        title: 'Looop Lapeta',
        video: false,
        vote_average: 6.083,
        vote_count: 60,
      },
      {
        adult: false,
        backdrop_path: '/s7oObbrQrfTvcIwvmcGTUdnMCiw.jpg',
        genre_ids: [18, 10749],
        id: 18,
        original_language: 'hi',
        original_title: 'My Name Is Khan',
        overview:
          "Rizwan Khan, a Muslim from the Borivali section of Mumbai, has Asperger's syndrome. He marries a Hindu single mother, Mandira, in San Francisco. After 9/11, Rizwan is detained by authorities at LAX who treat him as a terrorist because of his condition and his race.",
        popularity: 22.962,
        poster_path:
          'https://image.tmdb.org/t/p/original/5Y36lCiNyyV71mjq6LavgiggbhT.jpg',
        release_date: '2010-02-10',
        title: 'My Name Is Khan',
        video: false,
        vote_average: 8.042,
        vote_count: 1235,
      },
      {
        adult: false,
        backdrop_path: '/5dF4FNwM2qZIuF0WCUs5zvDGU2H.jpg',
        genre_ids: [18],
        id: 19,
        original_language: 'hi',
        original_title: 'तारे ज़मीन पर',
        overview:
          "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate. Colours, fish, dogs, and kites don't seem important to the adults, who are much more interested in things like homework, marks, and neatness. Ishaan cannot seem to get anything right in class; he is then sent to boarding school, where his life changes forever.",
        popularity: 22.355,
        poster_path:
          'https://image.tmdb.org/t/p/original/fwXhw9bERqKrJfJK6WGakPIh3FS.jpg',
        release_date: '2007-12-21',
        title: 'Like Stars on Earth',
        video: false,
        vote_average: 7.992,
        vote_count: 1080,
      },
      {
        adult: false,
        backdrop_path: '/8aYAfAPolsRFrHbP1rafeSgg2Ew.jpg',
        genre_ids: [28],
        id: 20,
        original_language: 'hi',
        original_title: 'शोले',
        overview:
          'After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.',
        popularity: 18.166,
        poster_path:
          'https://image.tmdb.org/t/p/original/ya9bwgqA4eNl5bQ9QqS0jcmRoBS.jpg',
        release_date: '1975-08-15',
        title: 'Sholay',
        video: false,
        vote_average: 6.978,
        vote_count: 251,
      },
    ];
    setMovies(arrayOfMovies);
  }, []);
  const renderMovie = ({item}) => (
    <View style={styles.movieContainer}>
      <Image
        style={styles.moviePoster}
        source={{
          uri: item.poster_path,
        }}
      />
    </View>
  );

  return (
    <View>
      {/* {movies.map(data => {
        return (
          <View key={data.id}>
            <Image
              style={{height: 150, width: 110}}
              source={{
                uri: data.poster_path,
              }}
            />
          </View>
        );
      })} */}
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        numColumns={3}
      />
    </View>
  );
};

export default MovieRowComponent;

const styles = StyleSheet.create({
  movieContainer: {
    margin: 10,
  },
  moviePoster: {
    height: 150,
    width: 110,
  },
});
