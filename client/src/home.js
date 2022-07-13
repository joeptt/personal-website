import { useEffect, useState } from "react";

export default function Home() {
    let [positionX, setPositionX] = useState(10);
    let [backgroundPositionX, setBackgroundPositionX] = useState(0);
    const speed = 5;
    const backGroundSpeed = 20;

    useEffect(() => {
        console.log("mounted");
        setBackgroundPositionX(0);
        window.addEventListener("keydown", (event) => {
            moveUser(event.keyCode);
        });
    }, []);

    const moveUser = (key) => {
        if (key === 39) {
            if (positionX >= 50) {
                setBackgroundPositionX(
                    (backgroundPositionX =
                        backgroundPositionX - backGroundSpeed)
                );
                return;
            }
            setPositionX((positionX = positionX + speed));
        } else if (key === 37) {
            if (positionX <= 10) {
                return;
            }
            setPositionX((positionX = positionX - speed));
        }
    };

    return (
        <>
            <div
                style={{ left: `${backgroundPositionX}px` }}
                className="home-wrapper"
            >
                <div style={{ backgroundColor: "green" }}></div>
                <div style={{ backgroundColor: "yellow" }}></div>
                <div style={{ backgroundColor: "blue" }}></div>
            </div>
            <div style={{ left: `${positionX}%` }} className="player-wrapper">
                PLAYER
            </div>
        </>
    );
}
