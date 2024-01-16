import { Button, DialogActions, TextField } from "@mui/material";
import { KeyboardEvent, useCallback, useMemo, useState, ChangeEvent } from "react";
import {
  passwordRepeatValidationError,
  passwordRepeatValidationHelper,
  passwordValidationError,
  passwordValidationHelper,
  usernameValidationError,
  usernameValidationHelper,
} from "../../../validations/validation.utils";

interface IRegisterFormProps {
  onSubmit: (
    username: string,
    password: string,
    passwordRepeat: string
  ) => void;
}

const RegisterForm = (props: IRegisterFormProps) => {
  const { onSubmit } = props;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  const isFormInvalid = useMemo(() => {
    const isUsernameInvalid =
      usernameValidationError(username) || !username.length;
    const isPasswordInvalid =
      passwordValidationError(password) || !password.length;
    const isRepeatPasswordInvalid =
      passwordRepeatValidationError(password, passwordRepeat) ||
      passwordRepeat.length === 0;

    return isUsernameInvalid || isPasswordInvalid || isRepeatPasswordInvalid;
  }, [username, password, passwordRepeat]);

  const handleSubmit = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        if (password === passwordRepeat) {
          onSubmit(username, password, passwordRepeat);
        }
      }
    },
    [onSubmit, username, password, passwordRepeat]
  );
  
  const handleUsernameChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUsername(e.target.value);
  },[setUsername]);

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPassword(e.target.value);
  },[setPassword]);

  const handlePasswordRepeatChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPasswordRepeat(e.target.value);
  },[setPasswordRepeat]);
  
  const handleFormSubmit = useCallback(() => {
    onSubmit(username, password, passwordRepeat);
  }, [onSubmit, username, password, passwordRepeat]);

  return (
    <>
      <TextField
        margin="dense"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        onKeyDown={handleSubmit}
        label="Username"
        type="text"
        fullWidth
        variant="standard"
        error={usernameValidationError(username)}
        helperText={usernameValidationHelper(username)}
      />
      <TextField
        margin="dense"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        onKeyDown={handleSubmit}
        label="Password"
        type="password"
        fullWidth
        variant="standard"
        error={passwordValidationError(password)}
        helperText={passwordValidationHelper(password)}
      />
      <TextField
        margin="dense"
        id="passwordRepeat"
        value={passwordRepeat}
        onChange={handlePasswordRepeatChange}
        onKeyDown={handleSubmit}
        label="Repeat password"
        type="password"
        fullWidth
        variant="standard"
        error={passwordRepeatValidationError(password, passwordRepeat)}
        helperText={passwordRepeatValidationHelper(password, passwordRepeat)}
      />
      <DialogActions>
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          disabled={isFormInvalid}
        >
          Submit
        </Button>
      </DialogActions>
    </>
  );
};

export default RegisterForm;
