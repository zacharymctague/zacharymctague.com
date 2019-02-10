import React from 'react'
import App, { Container, AppComponentContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './_theme'

// _app persists state and injects data into pages
export default class extends App {
  static async getInitialProps({ Component, ctx: context }: AppComponentContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(context)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyle />

        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
