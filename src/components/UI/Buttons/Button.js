import classes from "./Button.module.scss";
const Button = (props) => {
  const flat = `${classes["btn-flat"]} ${classes.btn}`;
  const rounded = `${classes["btn-rounded"]} ${classes.btn}`;
  const roundedSmall = `${classes["btn-rounded-sm"]} ${classes.btn}`;
  return (
    <button
      id={props.id}
      className={
        props.shape === "rounded"
          ? rounded
          : props.shape === "roundedSmall"
          ? roundedSmall
          : flat
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
