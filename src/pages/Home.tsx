
import Typography from "@mui/material/Typography";
import { useStyles } from "tss-react";

type Props = {
    className?: string;
};

export function Home(
    props: Props
) {

    const { className } = props;

    const { css, cx } = useStyles();

    return (
        <div
            className={cx(
                css({
                    "display": "flex",
                    "flex": 1,
                    "justifyContent": "center",
                    "alignItems": "center",
                    "height": "100%",
                    "textAlign": "center",
                }),
                className
            )}
        >
            <div>
                <Typography variant="h1">
                    Facebook
                </Typography>
                <Typography variant="h5">
                    Welcome to this Facebook clone
                </Typography>
            </div>
        </div>
    );

}