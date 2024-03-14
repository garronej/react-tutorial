import { tss } from "tss-react/mui";

export const useStyles = tss
    .withParams<{ hoverCount: number; }>()
    .create(({ theme, hoverCount }) => ({
        "root": {
            "backgroundColor": theme.palette.background.paper,
            "paddingLeft": "1em",
            "paddingRight": "1em",
            "paddingTop": "0.5em",
            "paddingBottom": "0.5em",
            "display": "flex",
            "alignItems": "center",
        },
        "title": {
            "color": (() => {
                switch (hoverCount % 3) {
                    case 0: return "red";
                    case 1: return "green";
                    case 2: return "blue";
                }
            })()
        },
        "divider": {
            "flex": 1
        }
    }));