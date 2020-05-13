// JS Goes here - ES6 supported

import "./css/main.css";

var colors = ["pink","#52A158","#FF887D","#FFD6AC","#AEA7FA"];
var colorsIndex = 0;

function getNextColor(startIndex) {
  if(colorsIndex >= colors.length - 1) {
    colorsIndex = 0;
  } else {
    colorsIndex++;
  }
  return colors[colorsIndex];
};

var slider = tns({
  container: '.slider',
  items: 1,
  autoplay: false,
  controlsContainer: ".prevNext"
});

var customizedFunction = function (info, eventName) {
  // direct access to info object
  console.log(info.event.type, info.container.id);
  var color = getNextColor();
  console.log(color);
  document.documentElement.style
    .setProperty('--primary', color);
}

// bind function to event
slider.events.on('transitionStart', customizedFunction);
