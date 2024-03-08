import "../common/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layouts/default";
import { Analytics } from "@vercel/analytics/react";
import PlausibleProvider from "next-plausible";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="shotsandbox.com">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Analytics /> */}
    </PlausibleProvider>
  );
}

export default MyApp;
