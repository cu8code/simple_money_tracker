import { initializeApp } from "firebase/app";
import type { AppProps } from "next/app";
import Layout from "../components/layout/";
import firebaseConfig from '../firebase.config'

import "../styles/globals.css";

(function() {
  initializeApp(firebaseConfig)
})()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
