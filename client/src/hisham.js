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
                <p>Multiplayer drawing game</p>
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
