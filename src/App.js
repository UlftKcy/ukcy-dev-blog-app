import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { Container } from "@material-ui/core";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: red[500],
    },
  },
});

const useStylesWrapper = makeStyles({
  wrapper: {
    width: "100vw",
    height: "auto",
  },
});

function App() {
  const classes = useStylesWrapper();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.wrapper}>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
