import CardItem from "./CardItem";
import { useState } from "react";
import React from "react";
import image from "../../assets/img/monkey55.jpg";
import image2 from "../../assets/img/marrakech.jpg";
import image3 from "../../assets/img/beach.jpg";
import image4 from "../../assets/img/vally.jpg";
import image5 from "../../assets/img/death.jpg";
import image6 from "../../assets/img/saint2.jpg";
import classes from "./CardList.module.scss";

export const DUMMY_DATA = [
  {
    id: "1",
    mainHeader: "marrakech marzouka",
    subHeader: "Sub header",
    flag: "flag",
    image: image2,
  },
  {
    id: "2",
    mainHeader: "Yosemite natinal park",
    subHeader: "Sub header",
    flag: "flag",
    image: image5,
  },
  {
    id: "3",
    mainHeader: "los lances beach",
    subHeader: "Sub header",
    flag: "flag",
    image: image3,
  },
  {
    id: "4",
    mainHeader: "saint antonin",
    subHeader: "Sub header",
    flag: "flag",
    image: image6,
  },
  {
    id: "5",
    mainHeader: "nagano prefecture",
    subHeader: "Sub header",
    flag: "flag",
    image: image,
  },
  {
    id: "6",
    mainHeader: "goreme valley",
    subHeader: "Sub header",
    flag: "flag",
    image: image4,
  },
];

const CardList = (props) => {
  const delay = 5000;
  const [data, setData] = useState(DUMMY_DATA);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const cardsMovs = () => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setData((prevState) => {
        const test = prevState[0];
        const newdata = [...prevState];
        newdata.shift();
        props.onListChange([...newdata, test]);
        return [...newdata, test];
      });
    }, delay);
  };
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setData((prevState) => {
        const test = prevState[0];
        const newdata = [...prevState];
        newdata.shift();
        props.onListChange([...newdata, test]);
        return [...newdata, test];
      });
    }, delay);
    cardsMovs();
    return () => {
      resetTimeout();
    };
  }, [data]);

  let first = false;

  const cards = data.map((item, i) => {
    if (i === 0) {
      first = true;
    } else {
      first = false;
    }
    return (
      <CardItem
        className={first ? classes.firstChild : classes.show}
        first={first}
        id={`id${i}`}
        // style={{ ["--i"]: 1 }}
        key={item.id}
        id2={item.id}
        mainHeader={item.mainHeader}
        subHeader={item.subHeader}
        flag="flag"
        image={item.image}
      />
    );
  });
  return (
    <div className={classes.content}>
      <div className={classes.list} id="cardList">
        {cards}
      </div>
      {/* <div className={classes.list} id="cardList2"></div> */}
    </div>
  );
};
export default CardList;
