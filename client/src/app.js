import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Home from "./home";
import Projects from "./projects";
import Resume from "./resume";
import Spinner from "./spinner";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const intervalRef = useRef(-1);

    useEffect(() => {
        const imgs = [
            "https://i.ibb.co/CthMHXd/first-speech.png",
            "https://i.ibb.co/BTLt769/second-speech.png",
            "https://i.ibb.co/LCjqyQc/third-speech.png",
            "https://i.ibb.co/C1MyyVG/fourth-speech.png",
            "https://i.ibb.co/c28xNqL/standing-Joe.png",
            "https://i.ibb.co/3snYN5k/sitting-Joe.png",
            "https://i.ibb.co/cgQmFFR/walking-Joe-Right-Leg.png",
            "https://i.ibb.co/0yvwJ7L/walking-Joe-Left-Leg.png",
            "https://i.ibb.co/NLbFy2Z/walking-Joe-Right-Leg-Backwards.png",
            "https://i.ibb.co/PQN800v/walking-Joe-Left-Leg-Backwards.png",
        ];

        cacheImages(imgs);
    }, []);

    const cacheImages = async (srcArray) => {
        const promises = await srcArray.map((src) => {
            return new Promise(function (resolve, reject) {
                const img = new Image();

                img.src = src;
                img.onload = resolve();
                img.onerror = reject;
            });
        });
        await Promise.all(promises);
        setIsLoading(false);
    };

    return (
        <BrowserRouter>
            <Route exact path="/">
                {isLoading ? <Spinner /> : <Home intervalRef={intervalRef} />}
            </Route>
            <Route exact path="/projects">
                <Projects intervalRef={intervalRef} />
            </Route>
            <Route exact path="/resume">
                <Resume intervalRef={intervalRef} />
            </Route>
        </BrowserRouter>
    );
}
