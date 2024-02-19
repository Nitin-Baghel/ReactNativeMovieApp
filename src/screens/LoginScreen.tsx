import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar, HelperText} from 'react-native-paper';
import {useTranslation} from 'react-i18next'; // Import useTranslation hook
import {PaperSelect} from 'react-native-paper-select';

const LoginScreen = ({navigation}) => {
  const {t, i18n} = useTranslation(); // Use the useTranslation hook
  const singleSelectRef = useRef<any>();

  const [email, setEmail] = useState('nitin.baghel@gmail.com');
  const [password, setPassword] = useState('Nagarro@12345');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const [language, setLanguage] = useState<any>({
    value: i18n.language,
    list: [
      {_id: '1', value: 'en'},
      {_id: '2', value: 'ar'},
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
    <View style={styles.container}>
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

      {/* Add a language-switching button */}
      <PaperSelect
        inputRef={singleSelectRef}
        label="Select Language"
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
        dialogTitleStyle={{color: 'black'}}
        textInputMode="flat"
        textInputStyle={{fontWeight: '700', color: 'yellow'}}
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
          checkboxLabelStyle: {color: 'black', fontWeight: '700'},
        }}
        textInputOutlineStyle={{borderColor: 'red', borderBottomWidth: 10}}
      />

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
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
