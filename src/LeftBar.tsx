
import { useTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';
import { useStyles } from "tss-react";

type Props = {
    className?: string;
    page: "home" | "account";
    onPageChange: (page: "home" | "account") => void;
}

export function LeftBar(props: Props) {

    const { className, page, onPageChange } = props;

    const theme = useTheme();

    const { css, cx } = useStyles();

    return (
        <div
            className={cx(
                css({
                    "backgroundColor": theme.palette.background.paper,
                    "borderRadius": theme.spacing(2),
                    "padding": theme.spacing(3),
                    "display": "flex",
                    "flexDirection": "column",
                    "&& > *": {
                        "marginBottom": `${theme.spacing(4)}`
                    },
                }),
                className
            )}
        >
            <CustomButton
                selected={page === "home"}
                onClick={() => onPageChange("home")}
            >
                Home
            </CustomButton>
            <CustomButton
                selected={page === "account"}
                onClick={() => onPageChange("account")}
            >
                Account
            </CustomButton>
        </div>
    );

}

type CustomButtonProps = {
    className?: string;
    selected: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

function CustomButton(props: CustomButtonProps) {

    const { className, children, selected, onClick } = props;

    const { css, cx } = useStyles();

    const theme = useTheme();

    return (
        <Button
            className={cx(css({
                "&:hover": {
                    "backgroundColor": theme.palette.primary.light
                }
            }),className)}
            variant={selected ? "outlined" : "text"}
            onClick={onClick}
        >
            {children}
        </Button>
    );

}