import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import {Card, Title} from 'react-native-paper';
// import {useQuery} from 'react-query';
import {getMovies} from '../store/movies/moviesAPI';
import {useDispatch, useSelector} from 'react-redux';
import {clearData} from '../store/movies/moviesSlice';
import {useTranslation} from 'react-i18next';
import {getTranslation} from '../utils/translate';
import i18n from 'i18next';

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export interface MovieStateProps {
  results: MovieProps[];
  loading: boolean;
}

const MoviesScreen = () => {
  const {t} = useTranslation();

  const {results, loading} = useSelector(
    (state: {movies: MovieStateProps}) => state.movies,
  );

  const [movieList, setMovieList] = useState([]);
  const [translated, setTranslated] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    // translate('The family Plan');
    return () => {
      clearData();
    };
  }, []);

  useEffect(() => {
    setMovieList(results);
  }, [results]);

  const translate = word => {
    console.log('i18n.language;;;;;;;;>', i18n.language);

    getTranslation(word, i18n.language).then(transLated => {
      setTranslated(transLated);
      console.log('here::::::::::::::::::::::::::', transLated);
    });

    return t;
  };

  const windowWidth = Dimensions.get('window').width;

  const renderMovieItem = ({item}) => (
    <Card style={[styles.card, {width: windowWidth / 2 - 24}]}>
      <View style={styles.cardContent}>
        <Card.Cover
          style={styles.cardImage}
          source={{uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`}}
        />
        <Card.Content>
          <Title>{item?.title}</Title>
        </Card.Content>
      </View>
    </Card>
  );

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text>{translated}</Text> */}
      <FlatList
        data={movieList}
        keyExtractor={item => item?.id?.toString()}
        renderItem={renderMovieItem}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

  },
  card: {
    margin: 8,


  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8, // Optional: Add border-radius for a nicer look
  },
});

export default MoviesScreen;
