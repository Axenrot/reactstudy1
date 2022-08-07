import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul className={classes.lista}>
        <li>
          <Link to="/" exact className={classes.lk}>
            All Meetups
          </Link>
        </li>
        <li>
          <Link to="/new-meetup" className={classes.lk}>
            New Meetup
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={classes.lk}>
            Favorites
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
