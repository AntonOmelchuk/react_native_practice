import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Text, StyleSheet } from 'react-native';
import Layout from '../../layout/Layout';
import ITheme from '../../themes/interfaces';

const Main = () => {
  const { colors: { background, mainText } } = useTheme() as ITheme;

  const { t } = useTranslation();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 16,
      backgroundColor: background,
    },
    title: {
      color: mainText,
    },
  });

  return (
    <Layout style={styles.screen}>
      <Text style={styles.title}>{t('hello')}</Text>
    </Layout>
  );
};

export default Main;
