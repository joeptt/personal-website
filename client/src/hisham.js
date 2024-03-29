import { client } from "./client";
import { useCallback, useState, useEffect } from "react";

export default function Blitzdraw({ onClickPlay, onClickPause }) {
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
                content_type: "hishamVideo",
            });
            const responseData = response.items[0].fields.hishamVideo;

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
                    As first small project after the bootcamp I created a
                    website for a hairdresser in Berlin Friedrichshain. I used
                    Contentful so the owner can add, remove and edit the Images,
                    Prices, and Informations displayed on the page. The owner
                    didn’t want an appointment booking tool on his page, since
                    he wants his customers to engage with him via WhatsApp, so I
                    build in a feature that lets the user select a date and time
                    which then opens WhatsApp on your device with a pre-written
                    message including the entered date.{" "}
                </p>
                <p>
                    You can find the code on{" "}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/joeptt/barbershop-hicham"
                    >
                        Github
                    </a>
                </p>
                <ul>
                    <li>created with react</li>
                    <li>deployed on Netlify</li>
                    <li>using Contentful as CMS</li>
                </ul>
            </div>
        </div>
    );
}
