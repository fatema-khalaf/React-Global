import { useState } from "react";
import classes from "./AnimatedCard.module.scss";
const AnimatedCard = (props) => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => {
    setToggled(true);
    // console.log(style);
  };
  return (
    <div
      onClick={toggle}
      className={toggled ? `${classes.card} ${classes.add}` : classes.card}
    >
      {props.children}
    </div>
  );
};
export default AnimatedCard;
