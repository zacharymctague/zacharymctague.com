import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {
  styleTags: any
}

// _document is only rendered on the server side
export default class extends Document<Props> {
  static async getInitialProps({ renderPage }: any) {
    const styleSheet = new ServerStyleSheet()
    const styledPage = renderPage((App: any) => (props: any) => styleSheet.collectStyles(<App {...props} />))
    const styleTags = styleSheet.getStyleElement()

    return { ...styledPage, styleTags }
  }

  render() {
    const { styleTags } = this.props

    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
