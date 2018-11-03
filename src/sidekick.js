function Sidekick() {
  this.version = "0.0.1";
  this.styles = {};
  this.scripts = {};
  this.events = {};
  this.data = {};
}

Sidekick.prototype = {
  addEvent: function(selector, type, fn) {
    var element = document.querySelector(selector);
    element.addEventListener(type, function(e) {
      return fn(e);
    });
    return this;
  },
  addEvents: function(events) {
    var self = this;
    events.forEach(function(event) {
      self.events[event.name] = event.callback;
      self.addEvent(event.selector, event.type, event.callback);
    });
    return self;
  },
  addScript: function(src) {
    var body = document.getElementsByTagName("body")[0];
    var script = document.createElement("script");
    script.src = src;
    body.appendChild(script);
    return this;
  },
  addScripts: function(scripts) {
    var self = this;
    scripts.forEach(function(script) {
      var scriptName = script
        .split("/")
        .pop()
        .replace(".min.js", "")
        .replace(".js", "");
      self.scripts[scriptName] = script;
      self.addScript(script);
    });
    return self;
  },
  addStyle: function(src) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = src;
    head.appendChild(link);
    return this;
  },
  addStyles: function(styles) {
    var self = this;
    styles.forEach(function(style) {
      var styleName = style
        .split("/")
        .pop()
        .replace(".min.css", "")
        .replace(".css", "");
      self.styles[styleName] = style;
      self.addStyle(style);
    });
    return self;
  },
  capitalize: function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },
  el: function(selector) {
    return document.querySelector(selector);
  },
  getData: function(key) {
    if (!this.data[key]) {
      for (var prop in this.data) {
        if (this.data.hasOwnProperty(prop)) {
          if (!this.data[prop][key]) {
            this.getData(this.data[prop]);
          }

          return this.data[prop][key];
        }
      }
    }
    return this.data[key];
  },
  getScripts: function() {
    return this.scripts;
  },
  getStyles: function() {
    return this.styles;
  },
  getEvents: function() {
    return this.events;
  },
  saveData: function(data) {
    this.data = Object.assign({}, this.data, data);
    return this.data;
  },
  titlize: function(words) {
    var title = "";
    var self = this;
    words.split(" ").forEach(function(word) {
      title += self.capitalize(word) + " ";
    });
    return title;
  },
  trigger: function(eventName, data) {
    if (data) {
      return this.getEvents()[eventName](data);
    }
    return this.getEvents()[eventName]();
  }
};
