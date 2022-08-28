import { NextPage } from "next";
import { Header, Footer, Announcement } from "@components/index";
import { Footer2 } from "@components/Footer/Footer";
const Layout: NextPage = ({ children }) => {
  return (
    <div className="flex flex-col font-inter min-h-screen overflow-y-auto dark:bg-black ">
      <Header />
    

      
      {children}
      <Footer2 />
    </div>
  );
};
export default Layout;
