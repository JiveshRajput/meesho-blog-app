import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
