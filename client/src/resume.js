import { client } from "./client";
import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Resume({ intervalRef }) {
    const [resume, setResume] = useState();

    useEffect(() => {
        clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        getResume();
    }, [getResume]);

    const cleanUpData = useCallback((rawData) => {
        const cleanHero = {
            url: rawData.fields.file.url,
        };

        setResume(cleanHero);
    }, []);

    const getResume = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "resume",
            });
            const responseData = response.items[0].fields.resume;

            if (responseData) {
                cleanUpData(responseData);
            } else {
                setResume({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <Link to="/">
                <div className="back-button-projects">←</div>
            </Link>
            <div className="resume-page">
                {resume && (
                    <>
                        <img
                            className="imgCV"
                            src="https://i.ibb.co/tD3sZh1/Bildschirmfoto-2022-08-18-um-11-43-22.png"
                        ></img>
                    </>
                )}
            </div>
        </>
    );
}
