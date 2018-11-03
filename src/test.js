// chaining adds
var kick = new Sidekick()
  .addStyles([
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
  ])
  .addScripts([
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"
  ])
  .addEvents([
    {
      name: "changeBgColor",
      selector: "body",
      type: null, // set null if triggered elsewhere
      callback: changeBgColor
    },
    {
      name: "buttonClick",
      selector: ".change-background",
      type: "click",
      callback: buttonClick
    },
    {
      name: "appendNavItem",
      selector: ".nav",
      type: null,
      callback: appendNavItem
    }
  ]);

// functions attached to event callbacks
function appendNavItem(item) {
  kick.el(".nav").innerHTML += item;
}

function buttonClick() {
  // trigger other events
  kick.trigger("changeBgColor", "blue");
  kick.trigger("appendNavItem", "item 3.5");
}

function changeBgColor(color) {
  document.body.style.background = color;
}

// utility function examples
var titlize = kick.titlize("hello world");
console.log(titlize);

kick.saveData({ user: { name: "Foo Bar", age: 100 } });

console.log(kick.getData("user"));
