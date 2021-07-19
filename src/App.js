import "./App.css";
import BoardGame from "./components/BoardGame";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Instruction from "./components/Instruction";
import { useContext } from "react";
import { Ctx } from "./components/context/Context";
// import { StyledUserContainer } from "./components/styles/user.styles";
// import Users from "./components/Users";

function App() {
  const { initGame } = useContext(Ctx);
  return (
    <div className="App">
      <Router>
        {!initGame.start ? <h1>Find it!!!</h1> : ""}
        <Switch>
          <Route exact path="/" component={BoardGame} />
          <Route path="/ins" component={Instruction} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
