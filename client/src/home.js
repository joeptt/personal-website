import { useEffect, useState } from "react";

export default function Home() {
    let [positionX, setPositionX] = useState(100);
    const speed = 100;

    useEffect(() => {
        console.log("mounted");
        window.addEventListener("keydown", (event) => {
            moveUser(event);
        });
    }, []);

    const moveUser = (event) => {
        if (event.keyCode === 39) {
            console.log("tip Top klappt");
            setPositionX((positionX = positionX + speed));
        }
    };

    return (
        <div className="home-wrapper">
            <div style={{ left: `${positionX}px` }} className="player-wrapper">
                PLAYER
            </div>
        </div>
    );
}
