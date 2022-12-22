import { FirebaseProvider } from "./firebasecontext";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseProvider>
  );
}
