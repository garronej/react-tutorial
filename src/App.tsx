
import { useState } from "react";
import { Header } from "./Header";
import { useTheme } from "@mui/material/styles";
import { LeftBar } from "./LeftBar";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { useStyles } from "tss-react";

export function App() {

    const theme = useTheme();

    const [page, setPage] = useState<"home" | "account">("home");

    const { css } = useStyles();
    
    return (
        <div
            className={css({
                "display": "flex",
                "flexDirection": "column",
                "height": "100vh",
                "backgroundColor": theme.palette.background.default,
            })}
        >
            <Header title="Facebook" />
            <main
                className={css({
                    "flex": 1,
                    "display": "flex",
                })}
            >
                <LeftBar 
                    page={page}
                    onPageChange={page => {
                        setPage(page);
                    }}
                    className={css({
                        "marginTop": theme.spacing(3),
                        "marginBottom": theme.spacing(3),
                        "marginLeft": theme.spacing(2),
                        "width": "200px",
                        [theme.breakpoints.down("md")]: {
                            "display": "none"
                        }
                    })}
                />
                <section
                    className={css({ "flex": 1 })}
                >
                    {(()=>{
                        switch(page){
                            case "home":
                                return <Home />;
                            case "account":
                                return <Account />;
                        }
                    })()}
                </section>
            </main>
        </div>
    )

}