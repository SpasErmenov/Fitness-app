import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, Toolbar } from "@mui/material";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import { GREY_2 } from "@/constants/style.constants";

interface IHeaderProps {
  session: Maybe<string>;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onLogoutClick: () => void;
  onExercisesClick: () => void;
}

const Header = (props: IHeaderProps) => {
  const { session } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ bgcolor: GREY_2 }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            maxWidth="700px"
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fitness App
            </Typography>
            {!session && (
              <>
                <Button color="inherit" onClick={props.onRegisterClick}>
                  Register
                </Button>
                <Button color="inherit" onClick={props.onLoginClick}>
                  Login
                </Button>
              </>
            )}
            {session && (
              <>
                <Button color="inherit" onClick={props.onExercisesClick}>
                  Exercises
                </Button>
                <AvatarMenu onLogoutClick={props.onLogoutClick} />
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
