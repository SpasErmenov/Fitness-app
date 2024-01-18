import { Outlet } from "react-router-dom";
import { AuthContainer } from "@/containers/AuthContainer";
import { HeaderContainer } from "@/containers/HeaderContainer";
import { Footer } from "../../components/Footer/Footer";

export const RootPage = () => {
  return (
    <>
      <HeaderContainer />
      <AuthContainer />
      <Outlet />
      <Footer />
    </>
  );
};
