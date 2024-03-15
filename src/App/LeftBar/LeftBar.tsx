
import { tss } from "tss-react/mui";
import { CustomButton } from "./CustomButton";
import { declareComponentKeys, useTranslation } from "i18n";

type Props = {
    className?: string;
    page: "home" | "blog" | "account";
    onPageChange: (page: "home" | "blog" | "account") => void;
}

export function LeftBar(props: Props) {

    const { className, page, onPageChange } = props;

    const { classes, cx } = useStyles();

    const { t } = useTranslation({ LeftBar });

    return (
        <div className={cx(classes.root, className)} >
            {
                (["home", "blog", "account"] as const).map((page_i, i) => (
                    <CustomButton
                        key={i}
                        className={classes.button}
                        selected={page === page_i}
                        onClick={() => onPageChange(page_i)}
                        onMouseEnter={()=> {
                            console.log(`Mouse enter sur ${page_i}`);
                        }}
                    >
                        {t(page_i)}
                    </CustomButton>
                ))
            }
        </div>
    );

}

export const { i18n } = declareComponentKeys<
    "home" | "blog" | "account"
>()({ LeftBar });


const useStyles = tss.create(({ theme }) => ({
    "root": {
        "backgroundColor": theme.palette.background.paper,
        "borderRadius": theme.spacing(2),
        "padding": theme.spacing(3),
        "display": "flex",
        "flexDirection": "column",
    },
    "button": {
        "marginBottom": theme.spacing(4)
    }
}));
