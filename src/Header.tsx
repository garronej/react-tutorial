import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from "@mui/material/styles";



type Props = {
    title: string;
    style?: React.CSSProperties;
};

export function Header(props: Props) {

    const { title } = props;

    const theme = useTheme();
    
    return (
        <div
            style={{
                "backgroundColor": theme.palette.background.paper,
                "paddingLeft": "1em",
                "paddingRight": "1em",
                "paddingTop": "0.5em",
                "paddingBottom": "0.5em",
                "display": "flex",
                "alignItems": "center",
                ...props.style,
            }}
        >
            <Typography variant="h4" >
                {title}
            </Typography>
            <div style={{ "flex": 1 }} />
            <Button 
                variant="contained" 
                endIcon={<LoginIcon />}
                style={{
                    //"backgroundColor": "purple"
                }}
            >
                Login
            </Button>
        </div>
    );


}