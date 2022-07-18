import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import Resume from "./resume";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/resume">
                <Resume />
            </Route>
        </BrowserRouter>
    );
}
