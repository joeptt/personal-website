import { useEffect, useState, useRef, useCallback } from "react";
import Name from "./name";
import Hamburgermenu from "./hamburgemenu";
import Facebook from "./facebook";
import Blitzdraw from "./blitzdraw";
import Hisham from "./hisham";
import Player from "./player";
import BIRDS from "vanta/dist/vanta.birds.min";
import { client } from "./client";

export default function Home() {
    const bubble1 = "https://i.ibb.co/CthMHXd/first-speech.png";
    const bubble2 = "https://i.ibb.co/BTLt769/second-speech.png";
    const bubble3 = "https://i.ibb.co/LCjqyQc/third-speech.png";
    const bubble4 = "https://i.ibb.co/C1MyyVG/fourth-speech.png";
    const [bubbleSrc, setBubbleSrc] = useState();
    const [vantaEffect, setVantaEffect] = useState(0);
    const [displaySpeechbubble, setDisplaySpeechbubble] = useState("none");
    let [positionX, setPositionX] = useState(10);
    let [backgroundPositionX, setBackgroundPositionX] = useState(0);
    const refUser = useRef(null);
    const refPage1 = useRef(null);
    const refPage2 = useRef(null);
    const refPage3 = useRef(null);
    const refPage4 = useRef(null);
    const [playerStance, setPlayerStance] = useState(null);
    const [playerStanding, setPlayerStanding] = useState();
    const [playerSitting, setPlayerSitting] = useState();
    const [playerWalkingRight1, setPlayerWalkingRight1] = useState();
    const [playerWalkingRight2, setPlayerWalkingRight2] = useState();
    const [playerWalkingLeft1, setPlayerWalkingLeft1] = useState();
    const [playerWalkingLeft2, setPlayerWalkingLeft2] = useState();
    const speed = 3;
    const backGroundSpeed = 60;
    const timerRef = useRef(-1);

    useEffect(() => {
        document.body.classList.add("overflow-body");

        setInterval(checkForBuilding, 100);
        window.addEventListener("keydown", (event) => {
            clearTimeout(timerRef.current);
            moveUser(event);
        });

        window.addEventListener("keyup", () => {
            timerRef.current = setTimeout(() => {
                setPlayerStance(playerStanding);
            }, 500);
        });
        return () => {
            window.removeEventListener("keydown", () => {});
            window.removeEventListener("keyup", () => {});
        };
    }, []);

    useEffect(() => {
        setPlayerStance(playerStanding);
    }, [playerStanding]);

    useEffect(() => {
        getStanceImages();
    }, [getStanceImages]);

    const cleanUpData = useCallback((rawData) => {
        for (let i = 0; i < rawData.length; i++) {
            if (rawData[i].fields.title === "playerStanding") {
                setPlayerStanding(rawData[i].fields.file.url);
            } else if (rawData[i].fields.title === "playerSitting") {
                setPlayerSitting(rawData[i].fields.file.url);
            } else if (rawData[i].fields.title === "playerWalkingRight1") {
                setPlayerWalkingRight1(rawData[i].fields.file.url);
            } else if (rawData[i].fields.title === "playerWalkingRight2") {
                setPlayerWalkingRight2(rawData[i].fields.file.url);
            } else if (rawData[i].fields.title === "playerWalkingLeft1") {
                setPlayerWalkingLeft1(rawData[i].fields.file.url);
            } else if (rawData[i].fields.title === "playerWalkingLeft2") {
                setPlayerWalkingLeft2(rawData[i].fields.file.url);
            }
        }
    }, []);

    const getStanceImages = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "stanceImages",
            });
            const responseData = response.items[0].fields.stanceImages;

            if (responseData) {
                cleanUpData(responseData);
            } else {
                return;
            }
        } catch (error) {
            console.log(error);
        }
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
        const page1X = refPage1.current.getBoundingClientRect();
        const page2X = refPage2.current.getBoundingClientRect();
        const page3X = refPage3.current.getBoundingClientRect();
        const page4X = refPage4.current.getBoundingClientRect();
        // Hide Bubble when away from page start
        if (userX.x > 100) {
            setDisplaySpeechbubble("none");
        }
        if (userX.x - page1X.x > -200 && userX.x - page1X.x < 100) {
            setBubbleSrc(bubble1);
            setDisplaySpeechbubble("flex");
            return;
        } else if (userX.x - page2X.x > -200 && userX.x - page2X.x < 300) {
            setBubbleSrc(bubble2);
            setDisplaySpeechbubble("flex");
            return;
        } else if (userX.x - page3X.x > -200 && userX.x - page3X.x < 300) {
            setBubbleSrc(bubble3);
            setDisplaySpeechbubble("flex");
            return;
        } else if (userX.x - page4X.x > -200 && userX.x - page4X.x < 300) {
            setBubbleSrc(bubble4);
            setDisplaySpeechbubble("flex");
            return;
        } else {
            setDisplaySpeechbubble("none");
        }
    };

    const switchImageForward = () => {
        setPlayerStance((currentStance) => {
            console.log("Test", currentStance, playerStanding);
            if (
                currentStance === playerStanding ||
                currentStance === playerWalkingLeft1 ||
                currentStance === playerWalkingLeft2 ||
                currentStance === playerSitting
            ) {
                return playerWalkingRight1;
            } else if (currentStance === playerWalkingRight1) {
                return playerWalkingRight2;
            } else if (currentStance === playerWalkingRight2) {
                return playerWalkingRight1;
            }
        });
    };

    const switchImageBackwards = () => {
        setPlayerStance((currentStance) => {
            if (
                currentStance === playerStanding ||
                currentStance === playerWalkingRight1 ||
                currentStance === playerWalkingRight2 ||
                currentStance === playerSitting
            ) {
                return playerWalkingLeft1;
            } else if (currentStance === playerWalkingLeft1) {
                return playerWalkingLeft2;
            } else if (currentStance === playerWalkingLeft2) {
                return playerWalkingLeft1;
            }
        });
    };

    const moveUser = (event) => {
        if (event.keyCode === 39) {
            switchImageForward();
            if (positionX >= 50) {
                setBackgroundPositionX(
                    (backgroundPositionX =
                        backgroundPositionX - backGroundSpeed)
                );
                return;
            }
            setPositionX((positionX = positionX + speed));
        } else if (event.keyCode === 37) {
            switchImageBackwards();
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

    // Video Playing functions
    const onClickPlay = () => {
        setPlayerStance(playerSitting);
    };

    const onClickPause = () => {
        setPlayerStance(playerStanding);
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
                <div className="page2" ref={refPage2}>
                    <Blitzdraw
                        onClickPlay={onClickPlay}
                        onClickPause={onClickPause}
                    />
                </div>
                <div className="page3" ref={refPage3}>
                    <Facebook
                        onClickPlay={onClickPlay}
                        onClickPause={onClickPause}
                    />
                </div>
                <div className="page4" ref={refPage4}>
                    <Hisham
                        onClickPlay={onClickPlay}
                        onClickPause={onClickPause}
                    />
                </div>
            </div>
            <Player
                refUser={refUser}
                positionX={positionX}
                displaySpeechbubble={displaySpeechbubble}
                bubbleSrc={bubbleSrc}
                playerStance={playerStance}
            />
        </>
    );
}
