
import Typography from "@mui/material/Typography";
import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { useDomRect } from "powerhooks/useDomRect";

type Props = {
    className?: string;
    onNavigateToHome: () => void;
};

export function Account(
    props: Props
) {

    const { className, onNavigateToHome } = props;


    const { ref: titleRef, domRect: { width: titleWidth, height: titleHeight } } = useDomRect();

    const { classes, cx } = useStyles({
        titleWidth,
        titleHeight
    });


    return (
        <div className={cx(classes.root, className)} >
            <div className={classes.wrapper} >
                <Typography
                    ref={titleRef}
                    className={classes.title}
                    variant="h1"
                >
                    Your account !!!!!!!!!!!!!
                </Typography>
                <div className={classes.dynamicDiv} />

                <Button
                    onClick={() => onNavigateToHome()}
                >
                    Navigate to home
                </Button>
                <div className={classes.bottomDiv} />
            </div>
        </div>
    );

}

const useStyles = tss
    .withParams<{ titleWidth: number; titleHeight: number; }>()
    .withName({ Account })
    .create(({ theme, titleWidth, titleHeight }) => ({
        "root": {
            "display": "flex",
            "flex": 1,
            "justifyContent": "center",
            "alignItems": "center",
            "height": "100%"
        },
        "wrapper": {
            "border": "1px solid blue",
        },
        "title": {
            "border": "1px solid black",
            "display": "inline-block",
        },
        "dynamicDiv": {
            "marginTop": theme.spacing(1),
            "backgroundColor": "red",
            "width": titleWidth,
            "height": titleHeight,
        },
        "bottomDiv": {
            "width": 600,
            "height": 5,
            "backgroundColor": "blue",
        }
    }));