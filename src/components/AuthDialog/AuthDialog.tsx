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
import style from "./AuthDialog.module.css";
import { RegisterForm } from "../Forms/RegisterForm/RegisterForm";
import { LoginForm } from "../Forms/LoginForm/LoginForm";
import { IAlert } from "@/interfaces/interfaces";
import { AuthMode } from "@/enums/enums";

interface IAuthDialogProps {
  authMode: Maybe<AuthMode>;
  open: boolean;
  onAuthModeChange: () => void;
  onClose: () => void;
  onFormSubmit: (username: string, password: string) => Promise<Maybe<IAlert>>;
}

export const AuthDialog = (props: IAuthDialogProps) => {
  const { authMode, open, onFormSubmit } = props;

  const [alertObj, setAlertObj] = useState<Maybe<IAlert>>(null);

  const handleSubmit = useCallback(
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
    if (authMode === AuthMode.Login) {
      return {
        title: AuthMode.Login,
        buttonName: AuthMode.Register,
      };
    } else {
      return {
        title: AuthMode.Register,
        buttonName: AuthMode.Login,
      };
    }
  }, [authMode]);

  return (
    <Dialog open={open} onClose={props.onClose}>
      <div className={style.DialogHeader}>
        <DialogTitle>{formTitles.title}</DialogTitle>

        <IconButton onClick={props.onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </div>
      <hr className={style.Separator} />
      <div className={style.DialogSubHeader}>
        <Button variant="text" size="small" onClick={props.onAuthModeChange}>
          {formTitles.buttonName}
        </Button>
      </div>
      <hr className={style.Separator} />
      <DialogContent sx={{ padding: "0 24px", width: "400px" }}>
        {authMode === AuthMode.Login && <LoginForm onSubmit={handleSubmit} />}
        {authMode === AuthMode.Register && (
          <RegisterForm onSubmit={handleSubmit} />
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
