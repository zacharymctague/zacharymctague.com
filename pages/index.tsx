import Head from 'next/head'
import getConfig from 'next/config'
import { Header, Footer } from '../components'

const {
  publicRuntimeConfig: {}
} = getConfig()

export default () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />
      <main role="main">{/* Components go here... */}</main>
      <Footer />
    </div>
  )
}
