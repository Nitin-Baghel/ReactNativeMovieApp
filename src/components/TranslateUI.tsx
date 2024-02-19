import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getTranslation} from '../utils/translate';

const TranslateUI = () => {
  const {t, i18n} = useTranslation();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Fetch translation dynamically and update state
    getTranslation('Hello', i18n.language).then(translatedGreeting => {
      setGreeting(translatedGreeting);
    });
  }, [i18n.language]);

  const changeLanguage = async newLang => {
    await i18n.changeLanguage(newLang);
    const translatedGreeting = await getTranslation('Hello', i18n.language);
    setGreeting(translatedGreeting);
  };

  return (
    <View>
      <Text>
        {t('common:hello')} {greeting}
      </Text>
      <Button title="Switch to Arabic" onPress={() => changeLanguage('ar')} />
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
    </View>
  );
};

export default TranslateUI;
