import classes from "./Card.module.scss";
import image1 from "../../../assets/img/monkey.jpg";
import image2 from "../../../assets/img/marrakech.jpg";
const Card = (props) => {
  return (
    <div className={classes.cont}>
      <div className={classes.loading}>
        <div style={{ ["--i"]: 1 }}>
          <img src={image1} />
        </div>
        <div style={{ ["--i"]: 2 }}>
          <img src={image2} />
        </div>
        <div style={{ ["--i"]: 3 }}>
          <img src={image1} />
        </div>
        <div style={{ ["--i"]: 4 }}>
          <img src={image2} />
        </div>
      </div>
    </div>
  );
};
export default Card;
