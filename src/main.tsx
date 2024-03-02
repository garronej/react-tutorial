import ReactDOM from 'react-dom/client'
import { App } from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider
    theme={createTheme({
      "palette": {
        "primary": {
          "main": "#ff5722",
        },
        "secondary": {
          "main": "#ff9100",
        },
        "background": {
          "default": "#ffccbc",
          // a different shade of orange for paper
          "paper": "#ffab91",
        },
      },
      "typography": {
        "fontFamily": "Roboto",
      },
    })}
  >
    <App />
  </ThemeProvider>
)
