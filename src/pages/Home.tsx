
import Typography from "@mui/material/Typography";
import { useStyles } from "tss-react/mui";
import logoWepUrl from "assets/logo.webp";
import { declareComponentKeys, useTranslation } from "i18n";

type Props = {
    className?: string;
};

export function Home(
    props: Props
) {

    const { className } = props;

    const { css, cx, theme } = useStyles();

    const { t } = useTranslation({ Home });
    const { t: tc } = useTranslation("App");

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
                    {t("title")} {tc("ok")}
                </Typography>
                <Typography variant="h5">
                    {t("welcome", { "date": new Date() })}
                </Typography>
                <img
                    className={css({
                        "marginTop": theme.spacing(4),
                        "width": 200,
                        "height": 200,
                    })}
                    src={logoWepUrl}
                />
            </div>
        </div>
    );

}

export const { i18n } = declareComponentKeys<
    | "title"
    | {
        K: "welcome";
        P: { date: Date; };
        R: JSX.Element;
    }
>()({ Home });