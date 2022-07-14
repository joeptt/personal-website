import { useEffect, useState, useRef } from "react";

export default function Home() {
    let [positionX, setPositionX] = useState(10);
    let [backgroundPositionX, setBackgroundPositionX] = useState(0);
    let [test, setTest] = useState("hidden");
    const refUser = useRef(null);
    const refHouse = useRef(null);
    const speed = 5;
    const backGroundSpeed = 20;

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            moveUser(event.keyCode);
        });
    }, []);

    useEffect(() => {
        checkForBuilding();
    }, [positionX, backgroundPositionX]);

    const checkForBuilding = () => {
        const userX = refUser.current.getBoundingClientRect();
        const houseX = refHouse.current.getBoundingClientRect();
        if (userX.x - houseX.x > -200 && userX.x - houseX.x < 500) {
            console.log("Enter Projects House");
            setTest("visible");
            return;
        }
        setTest("hidden");
    };

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
                if (backgroundPositionX < 0) {
                    setBackgroundPositionX(
                        (backgroundPositionX =
                            backgroundPositionX + backGroundSpeed)
                    );
                }
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
                <div
                    className="pages"
                    style={{
                        backgroundColor: "green",
                    }}
                ></div>
                <div className="pages" style={{ backgroundColor: "yellow" }}>
                    <div ref={refHouse} className="house">
                        <div
                            className="test"
                            style={{ visibility: test }}
                        ></div>
                    </div>
                </div>
                <div
                    className="pages"
                    style={{ backgroundColor: "blue" }}
                ></div>
            </div>
            <div
                ref={refUser}
                style={{ left: `${positionX}%` }}
                className="player-wrapper"
            >
                PLAYER
            </div>
        </>
    );
}
