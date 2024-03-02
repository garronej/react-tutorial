import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from "@mui/material/styles";
import { useStyles } from "tss-react";

type Props = {
    className?: string;
    title: string;
};

export function Header(props: Props) {

    const { className, title } = props;

    const theme = useTheme();

    const { css, cx } = useStyles();

    return (
        <div
            className={cx(
                css({
                    "backgroundColor": theme.palette.background.paper,
                    "paddingLeft": "1em",
                    "paddingRight": "1em",
                    "paddingTop": "0.5em",
                    "paddingBottom": "0.5em",
                    "display": "flex",
                    "alignItems": "center",
                }),
                className
            )}
        >
            <Typography variant="h4" >
                {title}
            </Typography>
            <div style={{ "flex": 1 }} />
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
