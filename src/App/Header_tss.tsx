import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { tss } from "tss-react/mui";
import { useState } from "react";

type Props = {
    className?: string;
};

export function Header(props: Props) {

    const { className } = props;

    const [hoverCount, setHoverCount] = useState(0);

    const { cx, classes } = useStyles({ 
        hoverCount, 
    });

    return (
        <div
            className={cx(classes.root, className)}
        >
            <Typography
                variant="h4"
                onMouseEnter={() => setHoverCount(hoverCount + 1)}
                className={classes.title}
            >
                Facebook {hoverCount}
            </Typography>
            <div className={classes.divider} />
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

const useStyles = tss
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
            "color": (()=>{
                switch( hoverCount % 3 ){
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
