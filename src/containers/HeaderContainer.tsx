import { useCallback } from "react";
import Header from "../components/Header/Header";
import { authStore } from "../stores/AuthStore/stores";
import { observer } from "mobx-react-lite";
import { AuthMode } from "../enums/enums";
import { useNavigate } from "react-router-dom";

const HeaderContainer = observer(() => {
  const navigate = useNavigate();
  const { session } = authStore;

  const handleLoginClick = useCallback(() => {
    authStore.setAuthMode(AuthMode.Login);
  }, []);

  const handleRegisterClick = useCallback(() => {
    authStore.setAuthMode(AuthMode.Register);
  }, []);

  const handleLogoutClick = useCallback(() => {
    authStore.logout();
  }, []);

  const handleExercisesClick = useCallback(() => {
    navigate("/exercises");
  },[navigate]);

  return (
    <>
      <Header
        session={session}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onLogoutClick={handleLogoutClick}
        onExercisesClick={handleExercisesClick}
      />
    </>
  );
});

export default HeaderContainer;
