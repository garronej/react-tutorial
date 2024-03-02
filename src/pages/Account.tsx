
import Typography from "@mui/material/Typography";
import { useStyles } from "tss-react";

type Props = {
    className?: string;
};

export function Account(
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
                }),
                className
            )}
        >
            <div>
                <Typography variant="body1">
                    Your account
                </Typography>
            </div>
        </div>
    );

}