import React from 'react';
import {
  View, Image, Text, StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import SmallButton from '../../../components/SmallButton/SmallButton';
import { CARDS_IMAGES } from '../../../constants/defines';
import ITheme from '../../../themes/interfaces';

const SwipeCards = () => {
  const { t } = useTranslation();
  const { colors: { background } } = useTheme() as ITheme;

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background,
      paddingTop: 30,
      paddingBottom: 45,
    },
    image: {
      width: 180,
      height: 180,
      resizeMode: 'cover',
      position: 'absolute',
    },
    buttonsWrapper: {
      width: '100%',
      marginTop: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.screen}>
      <View>
        <View>
          {CARDS_IMAGES.map(({ id, src }) => {
            return <Image key={id} source={src} style={styles.image} />;
          })}
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <SmallButton onPress={() => {}} title={t('no')} />
        <SmallButton onPress={() => {}} title={t('yes')} />
      </View>
    </View>
  );
};

export default SwipeCards;
