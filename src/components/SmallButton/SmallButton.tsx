import React, { FC } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ITheme from '../../themes/interfaces';
import ISmallButton from './interfaces';

const SmallButton: FC<ISmallButton> = ({
  onPress, title, containerStyle, titleStyle,
}) => {
  const { colors: { blackWhite, mainText } } = useTheme() as ITheme;

  const styles = StyleSheet.create({
    container: {
      width: 72,
      height: 36,
      borderRadius: 9,
      backgroundColor: blackWhite,
      ...containerStyle,
    },
    title: {
      fontSize: 25,
      fontWeight: '600',
      color: mainText,
      textAlign: 'center',
      textTransform: 'capitalize',
      ...titleStyle,
    },
  });

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default SmallButton;
