// chaining adds
var kick = new Sidekick()
  .addStyles([
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
  ])
  .addScripts([
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"
  ]);

// custom event functions
function addItem(text) {
  kick.event(".nav:addItem", { text: text });
}

function changeBgColor(color) {
  kick.event("body:changeBgColor", { color: color });
}

function changeHeadingText(text) {
  kick.event("h1:changeHeadingText", { text: text });
}

// custom event listeners, detail property holds the passed object data on the event (e)
// can also access data changes instead using kick.saveData and kick.getData
kick.listen(".nav:addItem", function(e) {
  e.target.innerHTML += e.detail.text;
});

kick.listen("body:changeBgColor", function(e) {
  // if changeBgColor("orange") was set then we could use e.detail.color instead
  // since it was defined in the changeBgColor function above

  // e.target.style.background = e.detail.color;
  e.target.style.background = kick.getData("color");
});

kick.listen("h1:changeHeadingText", function(e) {
  e.target.innerText = kick.getData("color");
});

// native event listener
kick.on("button:click", function(e) {
  var colors = ["orange", "lightblue", "silver", "lightgreen", "darkcyan"];
  var randColor = Math.floor(Math.random() * colors.length);

  kick.saveData({ color: colors[randColor] });
  // changeBgColor(randColor);
  changeBgColor();
  changeHeadingText(randColor);
});
