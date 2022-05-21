import classes from "./SubContainer.module.scss";
const SubContainerRight = (props) => {
  return <div className={classes["grid_right"]}>{props.children}</div>;
};
export default SubContainerRight;
