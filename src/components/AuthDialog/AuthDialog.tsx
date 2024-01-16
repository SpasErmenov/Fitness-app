import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "../Forms/LoginForm/LoginForm";
import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import { IAlert } from "../../interfaces/interfaces";
import { AuthMode } from "../../enums/enums";
import style from "./AuthDialog.module.css";

interface IAuthDialogProps {
  authMode: Maybe<AuthMode>;
  open: boolean;
  onAuthModeChange: () => void;
  onClose: () => void;
  onFormSubmit: (username: string, password: string) => Promise<Maybe<IAlert>>;
}

const AuthDialog = (props: IAuthDialogProps) => {
  const { authMode, open, onAuthModeChange, onClose, onFormSubmit } = props;

  const [alertObj, setAlertObj] = useState<Maybe<IAlert>>(null);

  const handleClick = useCallback(() => {
    onAuthModeChange();
  }, [onAuthModeChange]);

  const handleClickForSubmit = useCallback(
    async (username: string, password: string) => {
      const alertError = await onFormSubmit(username, password);
      setAlertObj(alertError);
    },
    [setAlertObj, onFormSubmit],
  );

  const handleCloseAlert = useCallback(() => {
    setAlertObj(null);
  }, [setAlertObj]);

  const formTitles = useMemo(() => {
    switch (authMode) {
      case AuthMode.Login:
        return {
          title: AuthMode.Login,
          buttonName: AuthMode.Register,
        };
      default:
        return {
          title: AuthMode.Register,
          buttonName: AuthMode.Login,
        };
    }
  }, [authMode]);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={style.DialogHeader}>
        <DialogTitle>{formTitles.title}</DialogTitle>

        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </div>
      <hr className={style.Separator} />
      <div className={style.DialogSubHeader}>
        <Button variant="text" size="small" onClick={handleClick}>
          {formTitles.buttonName}
        </Button>
      </div>
      <hr className={style.Separator} />
      <DialogContent sx={{ padding: "0 24px", width: "400px" }}>
        {authMode === AuthMode.Login && (
          <LoginForm
            onSubmit={(username, password) =>
              handleClickForSubmit(username, password)
            }
          />
        )}
        {authMode === AuthMode.Register && (
          <RegisterForm
            onSubmit={(username, password) =>
              handleClickForSubmit(username, password)
            }
          />
        )}
      </DialogContent>
      <Snackbar
        open={!!alertObj}
        onClose={handleCloseAlert}
        autoHideDuration={1700}
      >
        <Alert severity={alertObj?.severity} sx={{ width: "100%" }}>
          {alertObj?.message}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default AuthDialog;
