import "./App.css";
import BoardGame from "./components/BoardGame";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Instruction from "./components/Instruction";
import { useContext, useEffect } from "react";
import { Ctx } from "./components/context/Context";
import { getRankClient } from "./redux/actions/rank.actions";
import RanksBoard from "./components/RanksBoard";
import SettingGame from "./components/SettingGame";
import Loading from "./components/Loading";

function App() {
  const ranks = useSelector((state) => state.ranks);
  console.log(ranks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankClient());
  }, [dispatch]);
  const { initGame } = useContext(Ctx);
  return (
    <div className="App">
      {ranks.isLoading ? <Loading /> : ""}
      <Router>
        <Link className="quit-g" to="/">
          Exit
        </Link>
        {!initGame.start ? <h1>Find it!!!</h1> : ""}
        <Switch>
          <Route exact path="/" component={BoardGame} />
          <Route exact path="/ins" component={Instruction} />
          <Route exact path="/rank" component={RanksBoard} />
          <Route exact path="/new-game" component={SettingGame} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
