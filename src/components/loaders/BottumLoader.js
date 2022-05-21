import classes from "./BottumLoader.module.scss";
import Button from "../UI/Buttons/Button";
import styles from "../../styles/main.module.scss";

const BottumLoader = (props) => {
  return (
    <div className={classes.bottumLoader}>
      <Button shape="rounded" id="prev" onClick={props.onClick}>
        {" "}
        &lt;{" "}
      </Button>
      <Button shape="rounded" onClick={props.onClick}>
        {" "}
        &gt;{" "}
      </Button>
      <div className={classes.fill}>
        <div
          className={classes["fill-inner"]}
          style={{ ["--i"]: `${props.index}`, ["--j"]: `${props.listLength}` }}
        ></div>
      </div>
      <h2 className={styles["main-heading"]} style={{ width: "unset" }}>
        0{props.index}
      </h2>
    </div>
  );
};
export default BottumLoader;
