import { Dimensions, Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const WIDTH = Dimensions.get('window').width;
