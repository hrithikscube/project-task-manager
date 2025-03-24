import Layout from "@/components/layout";
import "@/styles/globals.css";


import { Rubik } from 'next/font/google';

const rubikFont = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${rubikFont.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
