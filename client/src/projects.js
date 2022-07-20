import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    Move,
} from "react-scroll-motion";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { client } from "./client";

const FadeUp = batch(Fade(), Move());

export default function Projects() {
    const [fbVideo, setFbVideo] = useState();
    const [drawVideo, setDrawVideo] = useState();
    const [hishamVideo, setHishamVideo] = useState();

    useEffect(() => {
        getDrawVideo();
    }, [getDrawVideo]);

    const cleanUpData = useCallback((rawData) => {
        const cleanHero = {
            url: rawData.fields.file.url,
        };

        setDrawVideo(cleanHero);
    }, []);

    const getDrawVideo = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "videos",
            });
            const responseData = response.items[0].fields.videos[0];
            console.log(responseData);
            if (responseData) {
                cleanUpData(responseData);
            } else {
                setDrawVideo({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getVideo();
    }, [getVideo]);

    const cleanUpDataFB = useCallback((rawData) => {
        const cleanHero = {
            url: rawData.fields.file.url,
        };

        setFbVideo(cleanHero);
    }, []);

    const getVideo = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "facebookClone",
            });
            const responseData = response.items[0].fields.facebookClone;
            console.log(responseData);
            if (responseData) {
                cleanUpDataFB(responseData);
            } else {
                setFbVideo({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getHishamVideo();
    }, [getHishamVideo]);

    const cleanUpDataHisham = useCallback((rawData) => {
        const cleanHero = {
            url: rawData.fields.file.url,
        };

        setHishamVideo(cleanHero);
    }, []);

    const getHishamVideo = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "hishamVideo",
            });
            const responseData = response.items[0].fields.hishamVideo;
            console.log(responseData);
            if (responseData) {
                cleanUpDataHisham(responseData);
            } else {
                setHishamVideo({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        document.body.classList.remove("overflow-body");
    }, []);

    return (
        <div className="projects-page-wrapper">
            <Link to="/">
                <div className="back-button-projects">←</div>
            </Link>
            <ScrollContainer>
                <div className="page-projects-wrapper">
                    <ScrollPage>
                        <div className="projects-wrapper">
                            {drawVideo && (
                                <video width="640" height="360" controls>
                                    <source src={drawVideo.url}></source>
                                </video>
                            )}
                            <div className="project-info">
                                <Animator animation={FadeUp}>
                                    <h1>BLITZ DRAW</h1>
                                    <p>
                                        As final project of the 2022 Spiced
                                        Academy coding bootcamp, I chose to
                                        create a multiplayer drawing game. It
                                        allows players to join the page where
                                        they then are asked to enter their name.
                                        Once all players joined the game one
                                        player gets randomly selected to be the
                                        drawer. The drawer sees a word which
                                        he/she then has to draw while the others
                                        are trying to guess the correct word.
                                        The faster you guess the word, the more
                                        points you receive!
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
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
                <div className="page-projects-wrapper">
                    <ScrollPage>
                        <div className="projects-wrapper">
                            {fbVideo && (
                                <video width="640" height="360" controls>
                                    <source src={fbVideo.url}></source>
                                </video>
                            )}
                            <div className="project-info">
                                <Animator animation={FadeUp}>
                                    <h1>Facebook Clone</h1>
                                    <p>
                                        I created a Facebook clone including
                                        features like friendships, private
                                        chats, feed posts, profile and cover
                                        picture for your personal profile, and
                                        much more!
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
                                        <li>
                                            used sockets.io for private and
                                            group chat
                                        </li>
                                        <li>used SQL for Database</li>
                                        <li>
                                            used multer to store Images on AWS`
                                            S3
                                        </li>
                                    </ul>
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
                <div className="page-projects-wrapper">
                    <ScrollPage>
                        <div className="projects-wrapper">
                            {hishamVideo && (
                                <video width="640" height="360" controls>
                                    <source src={hishamVideo.url}></source>
                                </video>
                            )}{" "}
                            <div className="project-info">
                                <Animator animation={FadeUp}>
                                    <h1>Hairdresser Hisham Website</h1>
                                    <p>
                                        As first small project after the
                                        bootcamp I created a website for a
                                        hairdresser in Berlin Friedrichshain. I
                                        used Contentful so the owner can add,
                                        remove and edit the Images, Prices, and
                                        Informations displayed on the page. The
                                        owner didn’t want an appointment booking
                                        tool on his page, since he wants his
                                        customers to engage with him via
                                        WhatsApp, so I build in a feature that
                                        lets the user select a date and time
                                        which then opens WhatsApp on your device
                                        with a pre-written message including the
                                        entered date.{" "}
                                    </p>
                                    <ul>
                                        <li>created with react</li>
                                        <li>using Contentful as CMS</li>
                                        <li>deployed on Netlify</li>
                                    </ul>
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
            </ScrollContainer>
        </div>
    );
}
