import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    Move,
} from "react-scroll-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FadeUp = batch(Fade(), Move());

export default function Projects() {
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
                            <img src="https://e6.365dm.de/22/05/1600x900/skysport_de-fc-bayern-mnchen_5765283.jpg?20220508190438"></img>
                            <div className="project-info">
                                <Animator animation={FadeUp}>
                                    <h1>BLITZ DRAW</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                        At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd
                                        gubergren, no sea takimata sanctus est
                                        Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing
                                        elitr, sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At
                                        vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren,
                                        no sea takimata sanctus est Lorem ipsum
                                        dolor sit amet.
                                    </p>
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
                <div className="page-projects-wrapper">
                    <ScrollPage>
                        <div className="projects-wrapper">
                            <img src="https://e6.365dm.de/22/05/1600x900/skysport_de-fc-bayern-mnchen_5765283.jpg?20220508190438"></img>

                            <div className="project-info">
                                <h1>BLITZ DRAW</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit
                                    amet. Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit
                                    amet.
                                </p>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
                <div className="page-projects-wrapper">
                    <ScrollPage>
                        <div className="projects-wrapper">
                            <img src="https://e6.365dm.de/22/05/1600x900/skysport_de-fc-bayern-mnchen_5765283.jpg?20220508190438"></img>
                            <div className="project-info">
                                <h1>BLITZ DRAW</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit
                                    amet. Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit
                                    amet.
                                </p>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
            </ScrollContainer>
        </div>
    );
}
