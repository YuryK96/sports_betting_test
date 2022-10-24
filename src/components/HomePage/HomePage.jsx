import { NavLink } from "react-router-dom";
import HomePageCss from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={HomePageCss.Page}>
      <h1>Текущие события</h1>
      <ul>
        <li>
          <NavLink state={props.games.currentGames.a} to="/Details">
            {props.games.currentGames.a[0]}
          </NavLink>
        </li>
        <li>
          <NavLink state={props.games.currentGames.b} to="/Details">
            {props.games.currentGames.b[0]}
          </NavLink>
        </li>
        <li>
          <NavLink state={props.games.currentGames.c} to="/Details">
            {props.games.currentGames.c[0]}
          </NavLink>
        </li>
      </ul>
      <h1>Ближайшие события</h1>
      <ul>
        <li>
          {" "}
          <NavLink state={props.games.upcommingGames.a} to="/Details">
            {props.games.upcommingGames.a[0]}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink state={props.games.upcommingGames.b} to="/Details">
            {props.games.upcommingGames.b[0]}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink state={props.games.upcommingGames.c} to="/Details">
            {props.games.upcommingGames.c[0]}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
