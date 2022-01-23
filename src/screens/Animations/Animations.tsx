import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import ITheme from '../../themes/interfaces';

const Animations = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { colors: { mainText } } = useTheme() as ITheme;

  const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: mainText,
      textTransform: 'capitalize',
      padding: 12,
    },
  });

  return (
    <View>
      <Text style={styles.text} onPress={() => navigate('CornerMovement')}>{t('cornerAnimations')}</Text>
      <Text style={styles.text} onPress={() => navigate('StaggeredDrag')}>{t('staggeredDrag')}</Text>
    </View>
  );
};

export default Animations;
