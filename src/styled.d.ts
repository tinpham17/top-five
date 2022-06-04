// https://styled-components.com/docs/api#create-a-declarations-file
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      neutral: string
      dark: string
      bright: string
    };
    spaces: {
      1: string
      2: string
      3: string
      4: string
      5: string
    }
  }
}
