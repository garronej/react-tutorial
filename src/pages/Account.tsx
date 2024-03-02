
import Typography from "@mui/material/Typography";

type Props = {
    style?: React.CSSProperties;
};

export function Account(
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
                ...style
            }}
        >
            <div>
            <Typography variant="body1">
                Your account
            </Typography>
            </div>
        </div>
    );

}