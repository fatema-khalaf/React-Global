import classes from "./Card.module.scss";
import GrowingDiv from "./GrowingDiv";
import GrowingDiv2 from "./GrowingDiv2";

const Card = (props) => {
  const first = props.first;

  const photo = first ? (
    <GrowingDiv>
      <img src={props.image} />
    </GrowingDiv>
  ) : (
      <img src={props.image} />
    // <img src={props.image} />
  );
  console.log(props.id.split());
  return (
    <div
      id={props.id}
      className={`${props.className} ${classes.card}`}
      // style={props.style}
      style={{ ["--i"]: props.id2 }}
    >
      {photo}
      {props.children}
    </div>
  );
};
export default Card;
