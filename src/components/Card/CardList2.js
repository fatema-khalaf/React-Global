import CardItem from "./CardItem";
import { useRef, useState, useEffect } from "react";
import React from "react";
import image from "../../assets/img/monkey55.jpg";
import image2 from "../../assets/img/marrakech.jpg";
import image3 from "../../assets/img/beach.jpg";
import image4 from "../../assets/img/vally.jpg";
import image5 from "../../assets/img/death.jpg";
import image6 from "../../assets/img/saint2.jpg";
import classes from "./CardList.module.scss";
import BottumLoader from "../loaders/BottumLoader";
import $ from "jquery";

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

const CardList2 = (props) => {
  const [isLoadede, setIsLoaded] = useState(false);
  let root1 = false;
  var $fsmActual = document.querySelector("#bg-root1");
  var $fsmActual2 = document.querySelector("#bg-root2");
  $fsmActual.style.position = "absolute";
  var size = {};
  var position = {};
  //modal action stuffs
  let holder;
  let left = -84;
  let current = 1; /* the current item we're looking */
  let $fsm = [];
  let len;
  useEffect(() => {
    holder = document.querySelector("#cardList");
    const list = document.querySelectorAll('[id*="id"]');
    len = list.length;
    const first = list[0];
    const second = list[1];
    const third = list[2];
    const last = list[len - 1];
    const secondlast = list[len - 2];
    const thirdlast = list[len - 3];
    /* 1. Cloning first and last items */
    first.before(thirdlast.cloneNode(true));
    first.before(secondlast.cloneNode(true));
    first.before(last.cloneNode(true));
    last.after(third.cloneNode(true));
    last.after(second.cloneNode(true));
    last.after(first.cloneNode(true));
    // setIsLoaded(true);
  });
  var j = 3;
  function myLoop() {
    setTimeout(function () {
      openFSM($fsm[j]);
      j++;
      if (j < 12) {
        myLoop();
        console.log('j',j)
      }
      if(j==12){
        j=1;
      myLoop();
      }
    }, 5000);
  }
setTimeout(() => {
  
  $fsm = document.querySelectorAll(".fsm");
  console.log($fsm);
  myLoop();
}, 1000);
  
  var openFSM = (event) => {
    // const $this = itemref.current;
    // const $this = event.currentTarget;
    const $this = event;
    console.log($this);
    position = $this.getBoundingClientRect();
    size = {
      width: window.getComputedStyle($this).width,
      height: window.getComputedStyle($this).height,
    };

    $fsmActual.style.top = position.top + "px";
    $fsmActual.style.left = position.left + "px";
    $fsmActual.style.height = size.height;
    $fsmActual.style.width = size.width;
    $fsmActual.style.margin = $this.style.margin;
    $fsmActual2.style.position = "absolute";
    $fsmActual2.style.margin = $this.style.margin;

    setTimeout(function () {
      $fsmActual.innerHTML = $this.innerHTML;
      var classes = $this.classList.value.split(" ");
      for (var i = 0; i < classes.length; i++) {
        $fsmActual.classList.add(classes[i]);
      }
      $fsmActual.style.height = "100vh";
      $fsmActual.style.width = "100vw";
      $fsmActual.style.top = "0";
      $fsmActual.style.left = "0";
      $fsmActual.style.margin = "0";
      $fsmActual.style["z-index"] = "1";
      root1 = false;
      setTimeout(function () {
        $fsmActual2.innerHTML = $this.innerHTML;
        var classes = $this.classList.value.split(" ");
        for (var i = 0; i < classes.length; i++) {
          $fsmActual2.classList.add(classes[i]);
        }
        $fsmActual2.style.height = "100vh";
        $fsmActual2.style.width = "100vw";
        $fsmActual2.style.top = "0";
        $fsmActual2.style.left = "0";
        $fsmActual2.style.margin = "0";
      }, 2000);
    }, 1);
    setTimeout(function () {
      $fsmActual.style["z-index"] = "-10";
    }, 2000);
    setTimeout(function () {
      $fsmActual.style.top = position.top + "px";
      $fsmActual.style.left = position.left + "px";
      $fsmActual.style.height = size.height;
      $fsmActual.style.width = size.width;
    }, 3000);
    setTimeout(function () {
      $fsmActual.style["z-index"] = "1";
      $fsmActual.classList.add("full-screen");
      $fsmActual2.classList.add("full-screen");
    }, 4000);
    var dis = document.querySelector("#id0");
    dis.style.opacity = "1";
    dis.style.width = "25rem";
    dis.style.marginRight = "3rem";
    left -= 28;
    holder.style.left = `${left}rem`;
    current++;
    console.log(current, left);
    if (current > 8) {
      current = 1;
      left = -112;
      holder.style.transition = "all 0s";
      holder.style.left = `${-112}rem`;
      setTimeout(() => {
        holder.style.transition = "all 2s";
        
      }, 1000);
      console.log('done',current, left);
    }
    setTimeout(() => {
      holder.style.transition = "all 2s";
    }, 1000);
  };
  // for (var i = 0; i < $fsm.length; i++) {
  //   console.log($fsm[i]);

  //   $fsm[i].addEventListener("click", openFSM);
  // }
  const trigerHandler = (e) => {
    var cycle = false,
      delta = e.currentTarget.id === "prev" ? -1 : 1;
    holder.animate({ left: "+=" + -100 * delta }, function () {
      current += delta;
      cycle = !!(current === 0 || current > len);

      if (cycle) {
        current = current === 0 ? len : 1;
        console.log("current " + current);
        holder.css({ left: -100 * (current + 1) });
      }
    });
  };
  /******************************************************************* */
  let first = false;
  // for (var i = 0; i < $fsm.length; i++) {
  //   console.log($fsm[i]);
  //   setTimeout(() => {
  //     openFSM($fsm[i]);
  //   }, 2000);
  // }
  const cards = DUMMY_DATA.map((item, i) => {
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
        key={item.id}
        id2={item.id}
        mainHeader={item.id}
        // subHeader={item.subHeader}
        flag="flag"
        image={item.image}
        onClick={openFSM}
      />
    );
  });
  return (
    <div>
      <div className={classes.content}>
        <div className={classes.list} id="cardList">
          {cards}
        </div>
        <div className={classes.list} id="cardList2"></div>
      </div>
    </div>
  );
};
export default CardList2;
