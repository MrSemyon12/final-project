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
})({"YjXz":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var GRID_SIZE = 20;
var BG_COLOUR = '#231f20';
var SNAKE_COLOUR = '#c2c2c2';
var FOOD_COLOUR = '#e66916';
var FRAME_RATE = 10;
var canvas, ctx;
var gameActive = '';
var localData = {
  last_score: [],
  best_score: 3
};
ls = JSON.parse(localStorage.getItem('localData'));
if (ls != null) localData = ls;
console.log(localData);
var player = {
  pos: {
    x: 3,
    y: 10
  },
  vel: {
    x: 1,
    y: 0
  },
  snake: [{
    x: 1,
    y: 10
  }, {
    x: 2,
    y: 10
  }, {
    x: 3,
    y: 10
  }]
};
var food = {};

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = canvas.height = 600;
  ctx.fillStyle = BG_COLOUR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  randomFood();
  document.addEventListener('keydown', keydown);
}

function keydown(e) {
  var keyCode = e.keyCode;

  switch (keyCode) {
    case 37:
      {
        // left
        if (player.vel.x !== 1) player.vel = {
          x: -1,
          y: 0
        };
        break;
      }

    case 65:
      {
        // left
        if (player.vel.x !== 1) player.vel = {
          x: -1,
          y: 0
        };
        break;
      }

    case 38:
      {
        // up
        if (player.vel.y !== 1) player.vel = {
          x: 0,
          y: -1
        };
        break;
      }

    case 87:
      {
        // up
        if (player.vel.y !== 1) player.vel = {
          x: 0,
          y: -1
        };
        break;
      }

    case 39:
      {
        // right
        if (player.vel.x !== -1) player.vel = {
          x: 1,
          y: 0
        };
        break;
      }

    case 68:
      {
        // right
        if (player.vel.x !== -1) player.vel = {
          x: 1,
          y: 0
        };
        break;
      }

    case 40:
      {
        // down
        if (player.vel.y !== -1) player.vel = {
          x: 0,
          y: 1
        };
        break;
      }

    case 83:
      {
        // down
        if (player.vel.y !== -1) player.vel = {
          x: 0,
          y: 1
        };
        break;
      }
  }
}

function paintGame() {
  ctx.fillStyle = BG_COLOUR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var size = canvas.width / GRID_SIZE;
  ctx.fillStyle = FOOD_COLOUR;
  ctx.fillRect(food.x * size, food.y * size, size, size);
  paintPlayer(size);
}

function paintPlayer(size) {
  ctx.fillStyle = SNAKE_COLOUR;

  var _iterator = _createForOfIteratorHelper(player.snake),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cell = _step.value;
      ctx.fillRect(cell.x * size, cell.y * size, size, size);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function randomFood() {
  food = {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE)
  };

  var _iterator2 = _createForOfIteratorHelper(player.snake),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var cell = _step2.value;

      if (cell.x === food.x && cell.y === food.y) {
        return randomFood();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function checkWall() {
  if (player.pos.x < 0) {
    player.pos.x = GRID_SIZE - 1;
    return;
  }

  if (player.pos.x === GRID_SIZE) {
    player.pos.x = 0;
    return;
  }

  if (player.pos.y < 0) {
    player.pos.y = GRID_SIZE - 1;
    return;
  }

  if (player.pos.y === GRID_SIZE) {
    player.pos.y = 0;
  }
}

function gameLoop() {
  player.pos.x += player.vel.x;
  player.pos.y += player.vel.y;
  checkWall();
  player.snake.push(_objectSpread({}, player.pos));

  if (food.x === player.pos.x && food.y === player.pos.y) {
    if (player.snake.length === 400) {
      gameActive = 'WIN';
      return;
    }

    randomFood();
  } else {
    player.snake.shift();
  }

  var cnt = 0;

  var _iterator3 = _createForOfIteratorHelper(player.snake),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var cell = _step3.value;

      if (cell.x === player.pos.x && cell.y === player.pos.y) {
        cnt++;

        if (cnt > 1) {
          gameActive = 'LOSE';
          return;
        }
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function endGame() {
  if (localData.best_score < player.snake.length) localData.best_score = player.snake.length;
  localData.last_score.push(player.snake.length);
  if (localData.last_score.length > 10) localData.last_score.shift();
  localStorage.setItem('localData', JSON.stringify(localData));
  alert("YOU ".concat(gameActive, "!\n\n    Score: ").concat(player.snake.length, "\n\n    Best: ").concat(localData.best_score, "\n\n    Last: ").concat(localData.last_score));
}

function startGameInterval() {
  var interval = setInterval(function () {
    gameLoop();

    if (gameActive) {
      clearInterval(interval);
      endGame();
    } else {
      paintGame();
    }
  }, 1000 / FRAME_RATE);
}

init();
startGameInterval();
},{}]},{},["YjXz"], null)
//# sourceMappingURL=/snakegame.c9757714.js.map