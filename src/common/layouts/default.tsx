import { NextPage } from "next";
import { Header, Footer } from "@components/index";
const Layout: NextPage = ({ children }) => {
  return (
    <div className="font-inter">
      <Header />
      {children}
      <Footer/>
    </div>
  );
};
export default Layout;
