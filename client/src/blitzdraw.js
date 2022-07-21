import { client } from "./client";
import { useCallback, useState, useEffect } from "react";

export default function Blitzdraw() {
    const [video, setVideo] = useState();

    useEffect(() => {
        getVideo();
    }, [getVideo]);

    const cleanUpData = useCallback((rawData) => {
        const cleanHero = {
            url: rawData.fields.file.url,
        };

        setVideo(cleanHero);
    }, []);

    const getVideo = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "videos",
            });
            const responseData = response.items[0].fields.videos[0];

            if (responseData) {
                cleanUpData(responseData);
            } else {
                setVideo({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const onClickPlay = () => {
        console.log("TEST");
    };

    const onClickPause = () => {
        console.log("JUJU");
    };

    return (
        <div className="blitzdraw-wrapper">
            {video && (
                <video
                    width="640"
                    height="360"
                    onPlay={onClickPlay}
                    onPause={onClickPause}
                    controls
                >
                    <source src={video.url}></source>
                    This browser doesnt support video tag.
                </video>
            )}
            <div className="page2-description">
                <p>
                    As final project of the 2022 Spiced Academy coding bootcamp,
                    I chose to create a multiplayer drawing game. It allows
                    players to join the page where they then are asked to enter
                    their name. Once all players joined the game one player gets
                    randomly selected to be the drawer. The drawer sees a word
                    which he/she then has to draw while the others are trying to
                    guess the correct word. The faster you guess the word, the
                    more points you receive!
                </p>
                <p>
                    You can find the code on{" "}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/joeptt/drawing-game"
                    >
                        Github
                    </a>
                </p>

                <ul>
                    <li>created using React</li>
                    <li>created using Socket.io</li>
                    <li>created using Canvas</li>
                    <li>created using Express</li>
                    <li>optimized for Mobile</li>
                    <li>deployed on Heroku</li>
                </ul>
            </div>
        </div>
    );
}
