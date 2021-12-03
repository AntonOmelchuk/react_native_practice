import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout/Layout';
import ITheme from '../../themes/interfaces';

const Settings = () => {
  const { colors: { mainText } } = useTheme() as ITheme;
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    title: {
      color: mainText,
      fontSize: 30,
      fontWeight: '700',
      textTransform: 'capitalize',
    },
  });

  return (
    <Layout>
      <Text style={styles.title}>{t('settings')}</Text>
    </Layout>
  );
};

export default Settings;
