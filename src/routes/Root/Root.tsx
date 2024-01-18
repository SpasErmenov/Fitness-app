import { Outlet } from "react-router-dom";
import { AuthContainer } from "@/containers/AuthContainer";
import { HeaderContainer } from "@/containers/HeaderContainer";
import { Footer } from "../Landing/Footer/Footer";

export const Root = () => {
  return (
    <>
      <HeaderContainer />
      <AuthContainer />
      <Outlet />
      <Footer />
    </>
  );
};
