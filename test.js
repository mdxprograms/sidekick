var kick = new Sidekick();

var appendNavItem = function(item) {
  console.log(item);
};

var buttonClick = function() {
  // trigger other events
  kick.trigger("changeBgColor", "blue");
  kick.trigger("appendNavItem", "item 8");
};

var changeBgColor = function(color) {
  document.body.style.background = color;
};

// chaining adds
kick
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
