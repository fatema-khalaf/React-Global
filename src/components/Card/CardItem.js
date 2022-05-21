import Card from "../UI/Card/Card";
import { Fragment } from "react";
import styles from "../../styles/main.module.scss";
import classes from "./CardItem.module.scss";
import AnimatedCard from "../UI/Card/AnimmatedCard";
import GrowingDiv from "../UI/Card/GrowingDiv";
const CardItem = (props) => {
  const type = props.first;
  return (
    <Fragment>
      {/* {type && ( */}
      <Card
        onClick={props.onClick}
        image={props.image}
        style={props.style}
        className={props.className}
        id={props.id}
        id2={props.id2}
        first={props.first}
      >
        <span className={styles.tiny}>{props.flag}</span>
        <h4 className={styles["main-heading-sm"]}>{props.subHeader}</h4>
        <h1 className={styles["main-heading-lg"]}>{props.mainHeader}</h1>
      </Card>
      {/* )} */}
      {/* {!type && ( */}
      {/* <Card img={props.image} className={props.className}>
        // <img src={image} />
        // <span className={styles.tiny}>{props.flag}</span>
        // <h4 className={styles["main-heading-sm"]}>{props.subHeader}</h4>
        // <h1 className={styles["main-heading-lg"]}>{props.mainHeader}</h1>
        //{" "}
      </Card> */}
      {/* )} */}
      {/* <Card img={props.image} className={props.className}>
    <img src={image} className={classes.test} />
    <span className={styles.tiny}>{props.flag}</span>
    <h4 className={styles["main-heading-sm"]}>{props.subHeader}</h4>
    <h1 className={styles["main-heading-lg"]}>{props.mainHeader}</h1>
  </Card> */}
    </Fragment>
  );
};
export default CardItem;
