import { observer } from "mobx-react-lite";
import AuthDialog from "../components/AuthDialog/AuthDialog";
import { authStore } from "../stores/AuthStore/stores";
import { useCallback } from "react";
import { IAlert } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { AuthMode } from "../enums/enums";

const AuthContainer = observer(() => {
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    authStore.setAuthMode(null);
  }, []);

  const handleAuthModeChange = useCallback(() => {
    authStore.setAuthMode(
      authStore.authMode === AuthMode.Register
        ? AuthMode.Login
        : AuthMode.Register
    );
  }, []);

  const handleSubmitAuthForm = useCallback(
    async (username: string, password: string): Promise<IAlert | null> => {
      let result;

      switch (authStore.authMode) {
        case AuthMode.Login:
          result = await authStore.login(username, password);
          if (result) {
            const alert: IAlert = {
              severity: result.severity,
              message: result.message,
            };
            if (alert.severity === "success") {
              navigate("/home");
              handleClose();
            }
            return alert;
          }
          return null;

        case AuthMode.Register:
          result = await authStore.register(username, password);
          return result;

        default:
          return null;
      }
    },
    [handleClose, navigate]
  );

  return (
    <AuthDialog
      authMode={authStore.authMode}
      open={!!authStore.authMode}
      onAuthModeChange={handleAuthModeChange}
      onClose={handleClose}
      onFormSubmit={handleSubmitAuthForm}
    />
  );
});

export default AuthContainer;
