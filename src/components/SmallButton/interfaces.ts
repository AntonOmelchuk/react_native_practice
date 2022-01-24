import { TextStyle, ViewStyle } from 'react-native';

export default interface ISmallButton {
  onPress: () => void
  title: string
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
}
