import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ContextWrapper } from "./context/state";

import Game from "./pages/Game";
import Home from './pages/Home'
function App() {
    return (
        <BrowserRouter>
            <ContextWrapper>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/game" component={Game}/>
            </Switch>
            </ContextWrapper>
        </BrowserRouter>
    );
}

export default App;
