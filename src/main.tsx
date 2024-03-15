import ReactDOM from 'react-dom/client'
import { App } from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
//import { I18nFetchingSuspense } from './i18n';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
)
