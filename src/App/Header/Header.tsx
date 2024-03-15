import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { useStyles } from "tss-react/mui";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
    className?: string;
};

export function Header(props: Props) {

    const { className } = props;

    const [hoverCount, setHoverCount] = useState(0);

    const { css, cx, theme } = useStyles();

    return (
        <div
            className={cx(css({
                "backgroundColor": theme.palette.background.paper,
                "paddingLeft": "1em",
                "paddingRight": "1em",
                "paddingTop": "0.5em",
                "paddingBottom": "0.5em",
                "display": "flex",
                "alignItems": "center",
            }), className)}
        >
            <Typography
                variant="h4"
                onMouseEnter={() => setHoverCount(hoverCount + 1)}
                className={css({
                    "color": (() => {
                        switch (hoverCount % 3) {
                            case 0: return "red";
                            case 1: return "green";
                            case 2: return "blue";
                        }
                    })()
                })}
            >
                Facebook {hoverCount}
            </Typography>
            <div className={css({ "flex": 1 })} />
            <LanguageSwitcher
                className={css({
                    "marginRight": theme.spacing(2)
                })}
            />
            <Button
                variant="contained"
                endIcon={<LoginIcon />}
                style={{
                    //"backgroundColor": "purple"
                }}
            >
                Login
            </Button>
        </div>
    );

}
