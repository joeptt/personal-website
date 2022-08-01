import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hamburgermenu() {
    const [displayMenu, setDisplayMenu] = useState("hidden");
    const linkStyle = {
        textDecoration: "none",
    };

    const onClickHamburger = () => {
        if (displayMenu === "hidden") setDisplayMenu("visible");
        else setDisplayMenu("hidden");
    };
    return (
        <>
            <div className="hamburger-icon">
                <input type="checkbox" id="menu_checkbox" />
                <label htmlFor="menu_checkbox" onClick={onClickHamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
            </div>
            <div
                style={{ visibility: displayMenu }}
                className="hamburger-wrapper"
            >
                <div className="hamburger">
                    <Link to="/projects" style={linkStyle}>
                        <p>Projects</p>
                    </Link>
                    <Link to="/resume" style={linkStyle}>
                        <p>Resume</p>
                    </Link>

                    <div>
                        <a
                            href="https://www.linkedin.com/in/joe-petereit-047158236"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="ig-linkedIn-icons"
                                src="https://i.ibb.co/NVNB5JQ/linked-In-Final.png"
                            ></img>
                        </a>
                        <a
                            href="https://github.com/joeptt"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="ig-linkedIn-icons github-icon"
                                src="https://i.ibb.co/BTG0xV6/git-Hub-Final.png"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
