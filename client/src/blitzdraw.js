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
            console.log(responseData);
            if (responseData) {
                cleanUpData(responseData);
            } else {
                setVideo({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="blitzdraw-wrapper">
            {video && (
                <video width="640" height="360" controls>
                    <source src={video.url}></source>
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
                    more points you receive!{" "}
                </p>
                <ul>
                    <li>Created with react</li>
                    <li>created with sockets.io</li>
                    <li>Canvas</li>
                    <li>Multiplayer</li>
                </ul>
            </div>
        </div>
    );
}
