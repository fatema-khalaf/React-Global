import { useRef, useState } from "react";
import "./GrowingDiv.scss";

const GrowingDiv = (props) => {
  //********************************************* */

  let root1 = false;
  console.log(root1);
  var $fsmActual = document.querySelector("#bg-root1");
  console.log($fsmActual.style.width === "100vh");
  var $fsmActual2 = document.querySelector("#bg-root2");
  $fsmActual.style.position = "absolute";

  var size = {};
  var position = {};
  const itemref = useRef();
  //modal action stuffs
  var openFSM = (event) => {
    const $this = itemref.current;

    console.log(itemref.current);
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

    // $fsmActual2.style.top = position.top + "px";
    // $fsmActual2.style.left = position.left + "px";
    // $fsmActual2.style.height = size.height;
    // $fsmActual2.style.width = size.width;
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
      console.log("root1=", root1);
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

      var dis = document.querySelector("#id0");

      dis.style.opacity = "0";
      dis.style.width = "0";
      dis.style.marginRight = "0";
      dis.style["z-index"] = "-51";

      console.log("Done");
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
  };
  setTimeout(() => {
    openFSM();
  }, 1);
  // openFSM();

  // **************************************************************************
  //Setup
  // var fsmActual = document.createElement("div");
  // fsmActual.setAttribute("id", "fsm_actual");
  // document.body.appendChild(fsmActual);
  // var $fsm = document.querySelectorAll(".fsm");
  // var $fsmActual = document.querySelector("#fsm_actual");
  // $fsmActual.style.position = "absolute";

  // var position = {};
  // var size = {};

  // //modal action stuffs
  // var openFSM = function (event) {
  //   var $this = event.currentTarget;
  //   position = $this.getBoundingClientRect();
  //   size = {
  //     width: window.getComputedStyle($this).width,
  //     height: window.getComputedStyle($this).height,
  //   };

  //   $fsmActual.style.position = "absolute";
  //   $fsmActual.style.top = position.top + "px";
  //   $fsmActual.style.left = position.left + "px";
  //   $fsmActual.style.height = size.height;
  //   $fsmActual.style.width = size.width;
  //   $fsmActual.style.margin = $this.style.margin;

  //   setTimeout(function () {
  //     $fsmActual.innerHTML = $this.innerHTML;
  //     var classes = $this.classList.value.split(" ");
  //     for (var i = 0; i < classes.length; i++) {
  //       $fsmActual.classList.add(classes[i]);
  //     }
  //     $fsmActual.classList.add("growing");
  //     $fsmActual.style.height = "100vh";
  //     $fsmActual.style.width = "100vw";
  //     $fsmActual.style.top = "0";
  //     $fsmActual.style.left = "0";
  //     $fsmActual.style.margin = "0";
  //   }, 1);

  //   setTimeout(function () {
  //     $fsmActual.classList.remove("growing");
  //     $fsmActual.classList.add("full-screen");
  //   }, 1000);
  // };

  // var closeFSM = function (event) {
  //   var $this = event.currentTarget;

  //   $this.style.height = size.height;
  //   $this.style.width = size.width;
  //   $this.style.top = position.top + "px";
  //   $this.style.left = position.left + "px";
  //   $this.style.margin = "0";
  //   $this.classList.remove("full-screen");
  //   $this.classList.add("shrinking");

  //   setTimeout(function () {
  //     while ($this.firstChild) $this.removeChild($this.firstChild);
  //     var classList = $this.classList;
  //     while (classList.length > 0) {
  //       classList.remove(classList.item(0));
  //     }
  //     $this.style = "";
  //   }, 1000);
  // };

  // for (var i = 0; i < $fsm.length; i++) {
  //   $fsm[i].addEventListener("click", openFSM);
  // }
  // $fsmActual.addEventListener("click", closeFSM);
  return (
    <>
      <div id="fsm_container" class="fsm-container">
        <div class="fsm apple" ref={itemref} onClick={openFSM}>
          {props.children}
        </div>
      </div>
    </>
  );
};
export default GrowingDiv;
