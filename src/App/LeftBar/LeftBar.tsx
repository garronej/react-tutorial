
import { tss } from "tss-react/mui";
import { CustomButton } from "./CustomButton";

type Props = {
    className?: string;
    page: "home" | "blog" | "account";
    onPageChange: (page: "home" | "blog" | "account") => void;
}

export function LeftBar(props: Props) {

    const { className, page, onPageChange } = props;

    const { classes, cx } = useStyles();

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
                        {page_i}
                    </CustomButton>
                ))
            }
        </div>
    );

}

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
