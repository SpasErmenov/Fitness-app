import { Outlet } from "react-router-dom";
import AuthContainer from "../../containers/AuthContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import Footer from "../Landing/Footer/Footer";

const Root = () => {
  return (
    <>
      <HeaderContainer />
      <AuthContainer />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Root;
