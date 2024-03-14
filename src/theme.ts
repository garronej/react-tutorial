
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
})