import { Button, DialogActions, TextField } from "@mui/material";
import {
  useCallback,
  KeyboardEvent,
  useState,
  useMemo,
  ChangeEvent,
} from "react";
import {
  passwordValidationError,
  passwordValidationHelper,
  usernameValidationError,
  usernameValidationHelper,
} from "@/validations/validation.utils";

interface ILoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm = (props: ILoginFormProps) => {
  const { onSubmit } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormInvalid = useMemo(() => {
    const isUsernameInvalid =
      usernameValidationError(username) || !username.length;
    const isPasswordInvalid =
      passwordValidationError(password) || !password.length;

    return isUsernameInvalid || isPasswordInvalid;
  }, [username, password]);

  const handleSubmit = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        onSubmit(username, password);
      }
    },

    [onSubmit, username, password],
  );

  const handleUsernameChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    [setUsername],
  );

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  const handleFormSubmit = useCallback(() => {
    onSubmit(username, password);
  }, [onSubmit, username, password]);

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
