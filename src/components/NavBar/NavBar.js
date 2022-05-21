import classes from "./NavBar.module.scss";
import Icon from "../UI/Icons/Icon";

const NavBar = () => {
  return (
    <div className={classes.bar}>
      <div className={classes.bar_logo}>
        <Icon icon="icon-global" />
        <h2>Globe Express</h2>
      </div>
      <ul className={classes.bar_nav}>
        <li>
          <a className={classes["bar_nav-item"]}>Home</a>
        </li>
        <li>
          <a className={classes["bar_nav-item"]}>About</a>
        </li>
        <li>
          <a className={classes["bar_nav-item"]}>Trpis</a>
        </li>
        <li>
          <a className={classes["bar_nav-item"]}>Contact</a>
        </li>
        <div className={classes.icons}>
          <Icon icon="icon-search" />
          <Icon icon="icon-user" />
        </div>

        {/* <li>
          <a>
            <Icon icon="icon-search" />
          </a>
        </li>
        <li>
          <a>
          </a>
        </li> */}
      </ul>
    </div>
  );
};
export default NavBar;
