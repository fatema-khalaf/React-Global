import { useRef, useState, useEffect } from "react";
import "./GrowingDiv.scss";

const GrowingDiv2 = (props) => {
  //********************************************* */

  // $fsmActual.addEventListener("click", closeFSM);

  // setTimeout(() => {
  //   openFSM();
  // }, 1);

  return (
    <>
      <div id="fsm_container" class="fsm-container">
        {/* <button onClick={openFSM}>kkkkkkkkk</button> */}
        {/* <div class="fsm apple" ref={itemref} onClick={openFSM}> */}
        <div class="fsm apple" onClick={props.onClick}>
          {props.children}
        </div>
      </div>
    </>
  );
};
export default GrowingDiv2;
