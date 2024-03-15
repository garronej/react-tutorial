
import Typography from "@mui/material/Typography";
import { useStyles } from "tss-react";
import logoWepUrl from "assets/logo.webp";

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
                <img
                    className={css({
                        width: 200,
                        height: 200,
                    })}
                    src={logoWepUrl}
                />
            </div>
        </div>
    );

}