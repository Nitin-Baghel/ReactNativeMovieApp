// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import BookListScreen from './src/screens/BookListScreen';

import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import LoginScreen from './src/screens/LoginScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import { Provider } from 'react-redux';

import store from './src/store';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuratio
import TranslateUI from './src/components/TranslateUI';

// Your app initialization code

// Rest of your application initialization

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false
                }}>
                <Stack.Screen

                  name="Login"
                  component={LoginScreen}
                  options={{ title: 'Login' }}
                />
                <Stack.Screen
                  name="Movies"
                  component={MoviesScreen}
                  options={{ title: 'Movie List' }}
                />
                <Stack.Screen
                  name="BookList"
                  component={BookListScreen}
                  options={{ title: 'Book List' }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </QueryClientProvider>
        </PaperProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
