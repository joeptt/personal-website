import { useState } from "react";

export default function Hamburgermenu() {
    const [displayMenu, setDisplayMenu] = useState("hidden");

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
                    <p>Projects</p>
                    <p>Resume</p>
                </div>
            </div>
        </>
    );
}
