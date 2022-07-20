import { useEffect, useState, useRef } from "react";
import Name from "./name";
import Hamburgermenu from "./hamburgemenu";
import Facebook from "./facebook";
import Blitzdraw from "./blitzdraw";
import Hisham from "./hisham";
import BIRDS from "vanta/dist/vanta.birds.min";

export default function Home() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const [displaySpeechbubble, setDisplaySpeechbubble] = useState("flex");
    const refPage1 = useRef(null);
    let [positionX, setPositionX] = useState(10);
    let [backgroundPositionX, setBackgroundPositionX] = useState(0);
    const refUser = useRef(null);
    const refHouse = useRef(null);
    const speed = 5;
    const backGroundSpeed = 100;

    useEffect(() => {
        document.body.classList.add("overflow-body");
        setInterval(checkForBuilding, 100);
        window.addEventListener("keydown", (event) => {
            moveUser(event.keyCode);
        });

        return () => {
            window.removeEventListener("keydown", () => {});
        };
    }, []);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: refPage1.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: 0x1d1d1d,
                    colorMode: "lerpGradient",
                    birdSize: 1.2,
                    speedLimit: 4.0,
                    separation: 50.0,
                    alignment: 51.0,
                    cohesion: 26.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    const checkForBuilding = () => {
        const userX = refUser.current.getBoundingClientRect();
        const houseX = refHouse.current.getBoundingClientRect();
        console.log(userX.x);

        // have the first speechbubble always shown at the beginning
        if (userX.x > 100) {
            setDisplaySpeechbubble("none");
        } else if (userX.x < 100) {
            setDisplaySpeechbubble("flex");
        }
        if (userX.x - houseX.x > -200 && userX.x - houseX.x < 500) {
            console.log("Enter Projects House");
            return;
        }
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
                <div ref={refPage1} className="page1">
                    <Hamburgermenu />
                    <Name />
                </div>
                <div className="page2" ref={refHouse}>
                    <Blitzdraw />
                </div>
                <div className="page3">
                    <Facebook />
                </div>
                <div className="page4">
                    <Hisham />
                </div>
            </div>
            <div
                ref={refUser}
                style={{ left: `${positionX}%` }}
                className="player-wrapper"
            >
                <div className="speechbubble-wrapper">
                    <img
                        style={{ display: displaySpeechbubble }}
                        className="speechbubble"
                        src="https://i.ibb.co/CthMHXd/first-speech.png"
                    ></img>
                </div>
            </div>
        </>
    );
}
