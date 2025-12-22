import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
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

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}
