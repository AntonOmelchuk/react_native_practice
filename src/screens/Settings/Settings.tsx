import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ITheme from '../../themes/interfaces/theme.interface';

const Settings = () => {
  const { colors: { mainText } } = useTheme() as ITheme;

  const styles = StyleSheet.create({
    title: {
      color: mainText,
    },
  });

  return (
    <View>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

export default Settings;
