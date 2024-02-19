import React, { useState, useRef } from 'react';
import { BlurView } from '@react-native-community/blur';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Snackbar, HelperText } from 'react-native-paper';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { PaperSelect } from 'react-native-paper-select';

const LoginScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation(); // Use the useTranslation hook
  const singleSelectRef = useRef<any>();

  const [email, setEmail] = useState('nitin.baghel@gmail.com');
  const [password, setPassword] = useState('Nagarro@12345');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const [language, setLanguage] = useState<any>({
    value: i18n.language,
    list: [
      { _id: '1', value: 'en' },
      { _id: '2', value: 'ar' },
    ],
    selectedList: [],
    error: '',
  });

  const isEmailValid = () => /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = () =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password,
    );

  const isSubmitDisabled = () => !isEmailValid() || !isPasswordValid();

  const handleSnackbarDismiss = () => setSnackbarVisible(false);

  const handleSubmit = () => {
    setSnackbarVisible(true);
    // Navigate to the next screen (replace 'NextScreen' with your actual screen name)
    navigation.replace('Movies');
  };

  // const handleLanguageChange = language => {
  //   i18n.changeLanguage(language);
  //   setSelectedLanguage(language);
  // };

  return (
    <ImageBackground
      source={{ uri: "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg" }}
      style={styles.imgContainer}
    >
      <BlurView
        // style={styles.absolute}
        blurType="light"
        blurAmount={1}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.container}>

        {/* Add a language-switching button */}
        <View style={styles.languageSelectContainer}>

          <PaperSelect
            inputRef={singleSelectRef}
            label="Language"
            value={language.value}
            onSelection={(value: any) => {
              i18n.changeLanguage(value.text);
              setLanguage({
                ...language,
                value: value.text,
                selectedList: value.selectedList,
                error: '',
              });
            }}
            arrayList={[...language.list]}
            selectedArrayList={[...language.selectedList]}
            errorText={language.error}
            multiEnable={false}
            dialogTitleStyle={{ color: 'black' }}
            textInputMode="flat"
            textInputStyle={{ fontWeight: '700', color: 'yellow' }}
            hideSearchBox={true}
            theme={{
              colors: {
                text: 'blue', // Change this to the desired text color
                placeholder: 'gray', // Change this to the desired placeholder color
              },
            }}
            textInputProps={{
              outlineColor: 'black',
            }}
            checkboxProps={{
              checkboxColor: 'blue',
              checkboxLabelStyle: { color: 'black', fontWeight: '700' },
            }}
            textInputOutlineStyle={{ borderColor: 'red', borderBottomWidth: 10 }}
          />
        </View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <HelperText type="error" visible={!isEmailValid()}>
          Enter a valid email address
        </HelperText>

        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <HelperText type="error" visible={!isPasswordValid()}>
          Password must be 8-15 characters with at least one uppercase letter and
          one special character.
        </HelperText>



        <Button
          mode="contained"
          onPress={handleSubmit}
          disabled={isSubmitDisabled()}
          style={styles.button}>
          Submit
        </Button>

        <Snackbar
          visible={snackbarVisible}
          onDismiss={handleSnackbarDismiss}
          action={{
            label: 'Dismiss',
            onPress: handleSnackbarDismiss,
          }}>
          Login Successful!
        </Snackbar>
      </View>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  languageSelectContainer: { 
    position: 'absolute',
    // top:0,
    bottom: 400, 
    right: 20, 
    zIndex: 1, 
    borderRadius:50
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
