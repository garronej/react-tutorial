
import Typography from "@mui/material/Typography";

type Props = {
    style?: React.CSSProperties;
};

export function Home(
    props: Props
){

    const { style } = props;

    return (
        <div
            style={{
                "display": "flex",
                "flex": 1,
                "justifyContent": "center",
                "alignItems": "center",
                "height": "100%",   
                "textAlign": "center",
                ...style
            }}
        >
            <div>
            <Typography variant="h1">
                Facebook
            </Typography>
            <Typography variant="h5">
                Welcome to this Facebook clone
            </Typography>
            </div>
        </div>
    );

}