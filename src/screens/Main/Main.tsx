import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import ITheme from '../../themes/interfaces/theme.interface';

const Main = () => {
  const { colors: { background, mainText } } = useTheme() as ITheme;

  const { t } = useTranslation();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: background,
    },
    title: {
      color: mainText,
    },
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{t('hello')}</Text>
    </View>
  );
};

export default Main;
