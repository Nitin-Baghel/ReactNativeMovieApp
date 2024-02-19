// src/components/Book.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface BookProps {
  title: string;
  author: string;
}

const Book: React.FC<BookProps> = ({title, author}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    color: '#666',
  },
});

export default Book;
