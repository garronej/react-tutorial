import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from "react";
import { useStyles } from "./styles";
import "./styles.css";

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
        <div className={cx(classes.root, className, "my_header")}>
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

