import '@/styles/globals.css'
import { newServer } from './api/hello'

newServer()
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
