import { NextPage } from "next";
import { Header, Footer, Announcement } from "@components/index";
import { useState } from "react";

const Layout: NextPage = ({ children }) => {
  const [open, setOpen] = useState(true)
  return (
    <div className="font-inter">
       {open && <Announcement setOpen={setOpen} />}
      <Header />
      {children}
      <Footer/>
    </div>
  );
};
export default Layout;
