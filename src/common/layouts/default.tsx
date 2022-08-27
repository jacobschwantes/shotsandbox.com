import { NextPage } from "next";
import { Header, Footer, Announcement } from "@components/index";
import { useState } from "react";
import { Footer2 } from "@components/Footer/Footer";
import Head from "next/head";
const Layout: NextPage = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="font-inter h-screen overflow-y-auto dark:bg-black">
      <Head>
        <title>
          Screenshotify &ndash; Powerful marketing tool
        </title>
      </Head>
      {/* {open && <Announcement setOpen={setOpen} />} */}
    
        <Header />
  
      {children}
      <Footer2 />
    </div>
  );
};
export default Layout;
