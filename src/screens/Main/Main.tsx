import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ITheme from '../../themes/interfaces/theme.interface';

const Main = () => {
  const { colors: { background, mainText } } = useTheme() as ITheme;

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
      <Text style={styles.title}>Main Screen</Text>
    </View>
  );
};

export default Main;
