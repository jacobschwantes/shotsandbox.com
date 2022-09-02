import { NextPage } from "next";
import Head from "next/head";
import { Header } from "@components/index";
import { Footer2 } from "@components/Footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col font-inter min-h-screen overflow-y-auto dark:bg-black ">
      <Head>
        <title>screenshotify</title>
      </Head>
      <Header />
      {children}
      <Footer2 />
    </div>
  );
};
export default Layout;
