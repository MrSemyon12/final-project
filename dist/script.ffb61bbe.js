// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"M0jP":[function(require,module,exports) {
var start = document.querySelector('.start');
var buttons = document.querySelectorAll('.cell');
var turnsTable = document.querySelector('.turns');
var turns = 0;
var defPos = ["22", "24", "31", "41"];
start.addEventListener('click', main);
main();

function checkWin() {
  var win = true;
  buttons.forEach(function (button) {
    if (button.style.background === "orange") {
      win = false;
    }
  });

  if (win) {
    buttons.forEach(function (button) {
      button.removeEventListener('click', draw);
    });
    turnsTable.innerText = "You won in " + turns.toString() + " turns!";
  }
}

function draw(evt) {
  turns++;
  turnsTable.innerText = "Turn: " + turns.toString();
  var row = evt.currentTarget.id[0];
  var column = evt.currentTarget.id[1];
  console.log(row.toString() + " " + column.toString());
  buttons.forEach(function (button) {
    if (button.id[0] === row || button.id[1] === column) {
      if (button.style.background === "peru") {
        button.style.background = "orange";
      } else {
        button.style.background = "peru";
      }
    }
  });
  checkWin();
}

function main() {
  buttons.forEach(function (button) {
    button.addEventListener('click', draw);

    if (defPos.includes(button.id)) {
      button.style.background = "orange";
    } else {
      button.style.background = "peru";
    }
  });
  turnsTable.innerText = "Turn: 0";
  start.innerText = "Restart";
  turns = 0;
}
},{}]},{},["M0jP"], null)
//# sourceMappingURL=/script.ffb61bbe.js.map