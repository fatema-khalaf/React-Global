import classes from "./SubContainer.module.scss";
import Button from "../Buttons/Button";
import Icon from "../Icons/Icon";
import styles from "../../../styles/main.module.scss";
const SubContainerLeft = (props) => {
  return (
    <div className={classes["grid_left"]}>
      <hr className={classes.hr} />
      <h4 className={styles["main-heading-sm"]}>{props.subHeader}</h4>
      <h2 className={styles["main-heading"]}>{props.mainHeader}</h2>
      <p className={styles["main-heading-sm"]}>
        {props.description}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque?
      </p>
      <div className={classes["grid_left_buttons"]}>
        <Button shape="roundedSmall">
          <Icon icon="icon-bookmark" />
        </Button>
        <Button>More Information</Button>
      </div>
    </div>
  );
};
export default SubContainerLeft;
