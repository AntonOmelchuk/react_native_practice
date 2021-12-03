import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { LOADER_SIZE } from '../../constants/general';
import ITheme from '../../themes/interfaces';
import ILoader from './interfaces/loader.interface';

const Loader: FC<ILoader> = ({ color }) => {
  const { colors: { loaderColor } } = useTheme() as ITheme;

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size={LOADER_SIZE} color={color || loaderColor} />
    </View>
  );
};

export default Loader;
