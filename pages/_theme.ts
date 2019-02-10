import { createGlobalStyle } from 'styled-components'

export interface ITheme {
  color: { white: string; black: string }
}

export const theme: ITheme = {
  color: {
    white: '#f1f1f1',
    black: '#454545'
  }
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    color: ${theme.color.black}
    font-size: 10px;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }
`
