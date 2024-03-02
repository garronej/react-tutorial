
import { useTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';

type Props = {
    style?: React.CSSProperties;
    page: "home" | "account";
    onPageChange: (page: "home" | "account") => void;
}

export function LeftBar(props: Props){

    const { style, page, onPageChange } = props;

    const theme = useTheme();

    return (
        <div style={{
            "backgroundColor": theme.palette.background.paper,
            "borderRadius": theme.spacing(2),
            "padding": theme.spacing(3),
            "display": "flex",
            "flexDirection": "column",
            "width": "200px",
            ...style
        }}>
            <CustomButton
                selected={page === "home"}
                onClick={() => onPageChange("home")}    
                style={{
                    "marginBottom": theme.spacing(2)
                }}
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
    style?: React.CSSProperties;
    selected: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

function CustomButton(props: CustomButtonProps) {

    const { children, selected, onClick, style } = props;

    return (
        <Button
            variant={selected ? "outlined" : "text"} 
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );

}