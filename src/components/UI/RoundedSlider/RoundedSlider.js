import classes from "./RoundedSlider.module.css";
import $ from "jquery";
const RoundedSlider = () => {
  $(function () {
    var gallery = $("#gallery ul"),
      items = gallery.find("li"),
      len = items.length,
      current = 1 /* the current item we're looking */,
      first = items.filter(":first-child"),
      second = items.filter((index) => index == 1),
      last = items.filter(":last-child"),
      secondlast = items.filter((index) => index == items.length - 2),
      triggers = $("button");

    /* 1. Cloning first and last items */
    first.before(secondlast.clone(true));
    first.before(last.clone(true));
    last.after(second.clone(true));
    last.after(first.clone(true));

    /* 2. Set button handlers */
    triggers.on("click", function () {
      if (gallery.is(":not(:animated)")) {
        var cycle = false,
          delta = this.id === "prev" ? -1 : 1;
        /* in the example buttons have id "prev" or "next" */

        gallery.animate({ left: "+=" + -100 * delta }, function () {
          current += delta;

          /**
           * we're cycling the slider when the the value of "current"
           * variable (after increment/decrement) is 0 or when it exceeds
           * the initial gallery length
           */
          cycle = !!(current === 0 || current > len);

          if (cycle) {
            /* we switched from image 1 to 4-cloned or 
                         from image 4 to 1-cloned */
            current = current === 0 ? len : 1;
            console.log("current " + current);
            // gallery.style.left = `${-100 * (current + 1)}`;
            gallery.css({ left: -100 * (current + 1) });
          }
        });
      }
    });
  });
  console.log("rendered");

  return (
    <div>
      <div id="gallery" className={classes.gallery}>
        <ul>
          <li>
            <img
              src="http://dummyimage.com/96x96/f0f0f0/626262.png"
              alt="first"
            />
          </li>
          <li>
            <img
              src="http://dummyimage.com/96x96/251365/636363.png"
              alt="second"
            />
          </li>
          <li>
            <img
              src="http://dummyimage.com/96x96/528864/626262.png"
              alt="third"
            />
          </li>
          <li>
            <img
              src="http://dummyimage.com/96x96/102102/626262.png"
              alt="fourth"
            />
          </li>
        </ul>
      </div>

      <button type="button" id="prev">
        &laquo;
      </button>
      <button type="button" id="next">
        &raquo;
      </button>
    </div>
  );
};
export default RoundedSlider;
