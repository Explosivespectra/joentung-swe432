
import './App.css';
import CssBaseline from "@material-ui/core/Cssbaseline"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme"
import OrderString from "./OrderString"

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <OrderString />
  </ThemeProvider>
);

export default App;
