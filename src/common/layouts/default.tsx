import { NextPage } from "next";
import Head from "next/head";
import { CTA, Header } from "@components/index";
import { Footer } from "@components/index";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col font-inter min-h-screen bg-white">
      <Head>
        <title>screenshotify</title>
      </Head>
      <Header />
      {children}
      <CTA />
      <Footer />
    </div>
  );
};
export default Layout;
