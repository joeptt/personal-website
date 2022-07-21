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
                content_type: "facebookClone",
            });
            const responseData = response.items[0].fields.facebookClone;

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
                    This browser doesnt support video tag.
                </video>
            )}
            <div className="page3-description">
                <p>
                    I created a Facebook clone including features like
                    friendships, private chats, feed posts, profile and cover
                    picture for your personal profile, and much more!
                </p>
                <p>
                    You can find the code on{" "}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href=" https://github.com/joeptt/facebook-clone"
                    >
                        Github
                    </a>
                </p>

                <ul>
                    <li>created with React</li>
                    <li>used Express serverside</li>
                    <li>used sockets.io for private and group chat</li>
                    <li>used SQL for Database</li>
                    <li>used multer to store Images on AWS` S3</li>
                </ul>
            </div>
        </div>
    );
}
