import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import logoPng from "./assets/iJustPaid Logo 11 1.png";

export default function App() {
    useEffect(() => {
        const href = logoPng;
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }
        link.type = "image/png";
        link.href = href;
    }, []);

    return <LandingPage />;
}
