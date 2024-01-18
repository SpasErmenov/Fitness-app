import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { authStore } from "@/stores/stores";
import { AuthMode } from "@/enums/enums";
import Header from "@/components/Header/Header";

const HeaderContainer = observer(() => {
  const { session } = authStore;
  const navigate = useNavigate();

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
  }, [navigate]);

  return (
    <Header
      session={session}
      onLoginClick={handleLoginClick}
      onRegisterClick={handleRegisterClick}
      onLogoutClick={handleLogoutClick}
      onExercisesClick={handleExercisesClick}
    />
  );
});

export default HeaderContainer;
