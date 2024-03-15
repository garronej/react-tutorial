
import Typography from "@mui/material/Typography";
import { useStyles } from "tss-react";
import { declareComponentKeys, useTranslation } from "i18n";

type Props = {
    className?: string;
};

export function Blog(
    props: Props
) {

    const { className } = props;

    const { css, cx } = useStyles();

    const { t } = useTranslation({ Blog });

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
                    {t("blog")}
                </Typography>
            </div>
        </div>
    );

}

export const { i18n } = declareComponentKeys<
    "blog"
>()({ Blog });