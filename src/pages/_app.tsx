import "../common/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layouts/default";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        defer
        src="https://analytics.endeavorwebsolutions.com/script.js"
        data-website-id="fbd17f5b-fb73-453e-ab57-82abcf11b137"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Analytics /> */}
    </>
  );
}

export default MyApp;
