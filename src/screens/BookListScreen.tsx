// src/screens/BookListScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useQuery} from 'react-query';
import {getBooks} from '../services/MovieService';
import BookList from '../components/BookList';
import {useTranslation} from 'react-i18next';

const BookListScreen: React.FC = () => {
  const {data: books, isLoading, isError} = useQuery('books', getBooks);

  const {t, i18n} = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  if (true) {
    return (
      <View>
        <Text>Loading...</Text>
        <Button
          title="Switch to English"
          onPress={() => changeLanguage('en')}
        />
        <Button title="Switch to Arabic" onPress={() => changeLanguage('ar')} />
        <Text>{t('welcome')}</Text>
        <Text>{t('greeting', {name: 'John de'})}</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error loading books</Text>
      </View>
    );
  }

  return <BookList books={books} />;
};

export default BookListScreen;
