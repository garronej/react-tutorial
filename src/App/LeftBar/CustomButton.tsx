import Button from '@mui/material/Button';
import { tss } from "tss-react/mui";

type CustomButtonProps = {
    className?: string;
    selected: boolean;
    children: React.ReactNode;
    onClick: () => void;
    onMouseEnter?: () => void;
}

export function CustomButton(props: CustomButtonProps) {

    const { className, children, selected, onClick, onMouseEnter } = props;

    const { classes, cx } = useStyles();

    return (
        <Button
            className={cx(classes.root, className)}
            variant={selected ? "outlined" : "text"}
            onClick={() => onClick()}
            onMouseEnter={onMouseEnter}
        >
            {children}
        </Button>
    );

}

const useStyles = tss.create(({ theme }) => ({
    "root": {
        "&:hover": {
            "backgroundColor": theme.palette.primary.light
        },
        //"marginBottom": `${theme.spacing(10)}`
    }
}));
