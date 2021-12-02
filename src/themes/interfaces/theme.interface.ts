interface IColors {
  background: string
  mainText: string
  tabBarBackground: string
  tabBarLabelColor: string
  tabBarActiveLabel: string
  primary: string
  card: string
  text: string
  border: string
  notification: string
}

export default interface ITheme {
  dark: boolean
  colors: IColors
}
