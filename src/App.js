import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import { ToastContainer } from "react-toastify";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
