var log = function(...log) {return console.log(...log)};
var dir = function(...log) {return console.dir(...log)};
var info = function(info) {return console.info("%c ℹ " + info, " color: #2d8cf0; font-weight: bold")};
var succ = function(succ) {return console.info("%c ✅ " + succ, " color: #19be6b; font-weight: bold")};
var warn = function(warn) {return console.info("%c ⚠ " + warn, " color: #ff9900; font-weight: bold")};
var err = function(err) {return console.info("%c ❌ " + err, " color: #ed3f14; font-weight: bold")};
var table = function(arr) {return console.table(arr)};

_ = (function(document, window, _) {
  var node = Node.prototype,
    nodeList = NodeList.prototype,
    forEach = "forEach",
    trigger = "trigger",
    each = [][forEach],
    dummy = document.createElement("i");

  nodeList[forEach] = each;

  window.on = node.on = function(event, fn) {
    this.addEventListener(event, fn, false);
    return this;
  };
  window.css = node.css = function(prop, val) {
    this.style[prop] = val;
    return this;
  };
  window.add = node.add = function(cl) {
    this.classList.add(cl);
    return this;
  };
  window.del = node.del = function(cl) {
    this.classList.remove(cl);
    return this;
  };
  window.tog = node.tog = function(cl) {
    this.classList.toggle(cl);
    return this;
  };
  window.has = node.has = function(cl) {
    this.classList.contains(cl);
    return this;
  };
  window.turn = node.turn = function(oldCl, newCl) {
    this.classList.replace(oldCl, newCl);
    return this;
  };

  nodeList.on = function(event, fn) {
    this[forEach](function(el) {
      el.on(event, fn);
    });
    return this;
  };
  nodeList.css = function(prop, val) {
    this[forEach](function(el) {
      el.css(prop, val);
    });
    return this;
  };
  nodeList.add = function(cl) {
    this[forEach](function(el) {
      el.add(cl);
    });
    return this;
  };
  nodeList.del = function(cl) {
    this[forEach](function(el) {
      el.del(cl);
    });
    return this;
  };
  nodeList.tog = function(cl) {
    this[forEach](function(el) {
      el.tog(cl);
    });
    return this;
  };
  nodeList.has = function(cl) {
    this[forEach](function(el) {
      el.has(cl);
    });
    return this;
  };
  nodeList.turn = function(oldCl, newCl) {
    this[forEach](function(el) {
      el.turn(oldCl, newCl);
    });
    return this;
  };

  window[trigger] = node[trigger] = function(type, data) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(type, true, true);
    event.data = data || {};
    event.eventName = type;
    event.target = this;
    this.dispatchEvent(event);
    return this;
  };

  nodeList[trigger] = function(event) {
    this[forEach](function(el) {
      el[trigger](event);
    });
    return this;
  };

  _ = function(s) {
    var r = document.querySelectorAll(s || "❤"),
      length = r.length;
    return length == 1 ? r[0] : r;
  };

  _.on = node.on.bind(dummy);
  _[trigger] = node[trigger].bind(dummy);

  return _;
})(document, this);
