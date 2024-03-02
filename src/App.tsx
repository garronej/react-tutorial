
import { useState } from "react";
import { Header } from "./Header";
import { useTheme } from "@mui/material/styles";
import { LeftBar } from "./LeftBar";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";

export function App() {

    const theme = useTheme();

    const [page, setPage] = useState<"home" | "account">("home");
    
    return (
        <div
            style={{
                "display": "flex",
                "flexDirection": "column",
                "height": "100vh",
                "backgroundColor": theme.palette.background.default,
            }}
        >
            <Header title="Facebook" />
            <main
                style={{
                    "flex": 1,
                    "display": "flex",
                }}
            >
                <LeftBar 
                    page={page}
                    onPageChange={page => {
                        setPage(page);
                    }}
                    style={{
                        "marginTop": theme.spacing(3),
                        "marginBottom": theme.spacing(3),
                        "marginLeft": theme.spacing(2)
                    }}
                />
                <section
                    style={{
                        "flex": 1,
                    }}
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