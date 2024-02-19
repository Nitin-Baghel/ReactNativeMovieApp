// src/components/BookList.tsx
// import React from 'react';
// import {View, FlatList} from 'react-native';
// // import Book from './Book';
// import {List, MD3Colors, View, Text} from 'react-native-paper';
import * as React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {List, MD3Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BookListProps {
  books: {title: string; author: string}[];
}

const BookList: React.FC<BookListProps> = ({books}) => {
  return (
    <>
      <List.AccordionGroup>
        {books.map(item => (
          <List.Accordion
            key={item.title}
            title={item.title}
            id={item.title}
            right={() => (
              <Icon
                size={20}
                color={MD3Colors.primary30}
                name="chevron-down"></Icon>
            )}>
            <List.Item title={`Author: ${item.author}`} />
          </List.Accordion>
        ))}
      </List.AccordionGroup>
    </>
    // <View>
    //   <FlatList
    //     data={books}
    //     keyExtractor={item => item.title}
    //     renderItem={({item}) => (
    //       <Book title={item.title} author={item.author} />
    //     )}
    //   />
    // </View>
  );
};

export default BookList;
