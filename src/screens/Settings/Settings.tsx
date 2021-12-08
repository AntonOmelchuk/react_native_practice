import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';
import Layout from '../../layout/Layout';
import CustomSwitch from '../../components/Switch/Switch';
import ITheme from '../../themes/interfaces';

const Settings = () => {
  const { dark, colors: { mainText } } = useTheme() as ITheme;
  const [isDarkMode, setIsDarkMode] = useState(dark);

  const { t } = useTranslation();
  console.log('dark: ', dark);
  const styles = StyleSheet.create({
    title: {
      color: mainText,
      fontSize: 30,
      fontWeight: '700',
      textTransform: 'capitalize',
    },
    content: {
      width: '100%',
      marginTop: 30,
    },
    text: {
      color: mainText,
      fontSize: 21,
      textTransform: 'capitalize',
    },
    settingsItemWrapper: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  const toggleDarkMode = () => {
    AsyncStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
      .then(() => setIsDarkMode(!isDarkMode));
  };

  return (
    <Layout>
      <Text style={styles.title}>{t('settings')}</Text>
      <View style={styles.content}>
        <View style={styles.settingsItemWrapper}>
          <Text style={styles.text}>{t('darkMode')}</Text>
          <CustomSwitch handler={toggleDarkMode} enabled={isDarkMode} />
        </View>
      </View>
    </Layout>
  );
};

export default Settings;
