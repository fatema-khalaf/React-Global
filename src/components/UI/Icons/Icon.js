import classes from "./Icon.module.scss";
import { Fragment } from "react";
import icons from "../../../assets/img/sprite.svg";
const Icon = (props) => {
  return (
    <Fragment>
      <svg className={classes.icon}>
        <use xlinkHref={`${icons}#${props.icon}`}></use>
      </svg>
    </Fragment>
  );
};
export default Icon;
