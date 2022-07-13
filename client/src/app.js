import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Home />
            </Route>
        </BrowserRouter>
    );
}
