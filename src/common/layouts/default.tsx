import { NextPage } from "next";
import { Header, Footer, Announcement } from "@components/index";
import { useState } from "react";
import { Footer2 } from "@components/Footer/Footer";
const Layout: NextPage = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="font-inter h-screen overflow-y-auto dark:bg-black">
      {/* {open && <Announcement setOpen={setOpen} />} */}
    
        <Header />
  
      {children}
      <Footer2 />
    </div>
  );
};
export default Layout;
