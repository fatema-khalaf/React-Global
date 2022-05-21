import { Fragment } from "react";
import classes from "./SubContainer.module.scss";
import SubContainerLeft from "./SubContainerLeft";
import SubContainerRight from "./SubContainerRight";
const SubContainer = (props) => {
  return (
    <Fragment>
      <div className={classes.grid}>{props.children}</div>
    </Fragment>
  );
};
export default SubContainer;
