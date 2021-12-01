interface IColors {
  background: string
  mainText: string
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
