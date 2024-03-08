import "../common/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layouts/default";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Analytics /> */}
      <Script
        defer
        data-domain="shotsandbox.com"
        src="http://analytics.endeavorwebsolutions.com/js/script.js"
      />
    </>
  );
}

export default MyApp;
