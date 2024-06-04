/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/airplane.ts":
/*!*************************!*\
  !*** ./src/airplane.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Airplane = void 0;\nvar Airplane = /** @class */ (function () {\n    function Airplane(imageSrc, x, y, width, height, speed) {\n        this.image = new Image();\n        this.image.src = imageSrc;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.speed = speed;\n        this.flipped = false;\n    }\n    Airplane.prototype.draw = function (ctx) {\n        ctx.save();\n        if (this.flipped) {\n            ctx.scale(-1, 1);\n            ctx.drawImage(this.image, -this.x - this.width, this.y, this.width, this.height);\n        }\n        else {\n            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n        }\n        ctx.restore();\n    };\n    Airplane.prototype.update = function (canvasWidth, deltaTime) {\n        this.x += this.speed * deltaTime;\n        // Reverse direction if airplane reaches canvas boundaries\n        if (this.x < 0 || this.x + this.width > canvasWidth) {\n            this.speed *= -1;\n            this.flipped = !this.flipped;\n        }\n    };\n    // Getter methods for position and dimensions\n    Airplane.prototype.getX = function () {\n        return this.x;\n    };\n    Airplane.prototype.getY = function () {\n        return this.y;\n    };\n    Airplane.prototype.getWidth = function () {\n        return this.width;\n    };\n    Airplane.prototype.getHeight = function () {\n        return this.height;\n    };\n    // Load method for image loading\n    Airplane.prototype.load = function () {\n        var _this = this;\n        return new Promise(function (resolve) {\n            _this.image.onload = function () { return resolve(); };\n        });\n    };\n    return Airplane;\n}());\nexports.Airplane = Airplane;\n\n\n//# sourceURL=webpack://matific/./src/airplane.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\nvar movement_1 = __webpack_require__(/*! ./movement */ \"./src/movement.ts\");\nvar airplane_1 = __webpack_require__(/*! ./airplane */ \"./src/airplane.ts\");\nvar sea_1 = __webpack_require__(/*! ./sea */ \"./src/sea.ts\");\nvar parachutist_1 = __webpack_require__(/*! ./parachutist */ \"./src/parachutist.ts\");\nvar intersectable_1 = __webpack_require__(/*! ./intersectable */ \"./src/intersectable.ts\");\nvar scoreboard_1 = __webpack_require__(/*! ./scoreboard */ \"./src/scoreboard.ts\");\nvar gameState_1 = __webpack_require__(/*! ./gameState */ \"./src/gameState.ts\");\nvar Game = /** @class */ (function () {\n    function Game(canvasId) {\n        var _this = this;\n        this.canvas = document.getElementById(canvasId);\n        this.ctx = this.canvas.getContext('2d');\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n        this.gameState = gameState_1.GameState.Playing;\n        this.lastTime = performance.now();\n        this.deltaTime = 0;\n        this.backgroundImage = new Image();\n        this.backgroundImage.src = './assets/background.png';\n        this.sea = new sea_1.Sea('./assets/sea.png', 0, this.canvas.height - 200, this.canvas.width, 300);\n        var movement = new movement_1.KeyboardMovement(500);\n        this.player = new player_1.Player('./assets/boat.png', 50, this.canvas.height - 270, 100, 100, movement);\n        this.airplane = new airplane_1.Airplane('./assets/plane.png', 0, 50, 100, 50, 200);\n        this.parachutists = [];\n        this.parachutistDropTimer = 0;\n        this.parachutistDropInterval = 3; // in seconds\n        this.scoreboard = new scoreboard_1.Scoreboard(3, 10, 20);\n        this.loadImages().then(function () {\n            _this.play();\n        }).catch(function (error) {\n            console.error('Error loading images:', error);\n        });\n    }\n    Game.prototype.loadImages = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                return [2 /*return*/, Promise.all([\n                        new Promise(function (resolve) {\n                            _this.backgroundImage.onload = function () { return resolve(); };\n                        }),\n                        this.sea.load(),\n                        this.player.load(),\n                        this.airplane.load()\n                    ])];\n            });\n        });\n    };\n    Game.prototype.play = function () {\n        var _this = this;\n        var draw = function (currentTime) {\n            // Calculate deltaTime\n            _this.deltaTime = (currentTime - _this.lastTime) / 1000;\n            _this.lastTime = currentTime;\n            _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);\n            _this.ctx.drawImage(_this.backgroundImage, 0, 0, _this.canvas.width, _this.canvas.height);\n            _this.sea.draw(_this.ctx);\n            if (_this.gameState === gameState_1.GameState.Playing) {\n                _this.airplane.update(_this.canvas.width, _this.deltaTime);\n                _this.airplane.draw(_this.ctx);\n                _this.player.update(_this.deltaTime);\n                _this.player.draw(_this.ctx);\n                _this.parachutistDropTimer += _this.deltaTime;\n                if (_this.parachutistDropTimer > _this.parachutistDropInterval) {\n                    _this.parachutistDropTimer = 0;\n                    var parachutist = new parachutist_1.Parachutist('./assets/parachutist.png', _this.airplane.getX(), _this.airplane.getY(), 50, 50, 100);\n                    _this.parachutists.push(parachutist);\n                }\n                for (var i = 0; i < _this.parachutists.length; i++) {\n                    var parachutist = _this.parachutists[i];\n                    parachutist.update(_this.deltaTime);\n                    parachutist.draw(_this.ctx);\n                    if ((0, intersectable_1.checkIntersection)(_this.player, parachutist)) {\n                        console.log('Intersection detected with player!');\n                        _this.scoreboard.increaseScore(10);\n                        _this.parachutists.splice(i, 1);\n                        i--;\n                    }\n                    if ((0, intersectable_1.checkIntersection)(_this.sea, parachutist)) {\n                        console.log('Intersection detected with sea!');\n                        _this.scoreboard.decreaseLife();\n                        _this.parachutists.splice(i, 1);\n                        i--;\n                    }\n                    if (parachutist.getY() > _this.canvas.height) {\n                        _this.parachutists.splice(i, 1);\n                        i--;\n                    }\n                }\n                _this.scoreboard.draw(_this.ctx);\n                if (_this.scoreboard.isGameOver()) {\n                    _this.gameState = gameState_1.GameState.GameOver;\n                    console.log('Game Over');\n                    _this.ctx.font = '50px Arial';\n                    _this.ctx.fillStyle = 'red';\n                    _this.ctx.fillText('Game Over', _this.canvas.width / 2 - 100, _this.canvas.height / 2);\n                }\n            }\n            else if (_this.gameState === gameState_1.GameState.GameOver) {\n            }\n            if (_this.gameState === gameState_1.GameState.Playing) {\n                requestAnimationFrame(draw);\n            }\n        };\n        draw(performance.now());\n    };\n    return Game;\n}());\nexports.Game = Game;\n\n\n//# sourceURL=webpack://matific/./src/game.ts?");

/***/ }),

/***/ "./src/gameState.ts":
/*!**************************!*\
  !*** ./src/gameState.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameState = void 0;\nvar GameState;\n(function (GameState) {\n    GameState[GameState[\"Playing\"] = 0] = \"Playing\";\n    GameState[GameState[\"GameOver\"] = 1] = \"GameOver\";\n})(GameState || (exports.GameState = GameState = {}));\n\n\n//# sourceURL=webpack://matific/./src/gameState.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar game_1 = __webpack_require__(/*! ./game */ \"./src/game.ts\");\nwindow.onload = function () {\n    new game_1.Game('gameCanvas');\n};\n\n\n//# sourceURL=webpack://matific/./src/index.ts?");

/***/ }),

/***/ "./src/intersectable.ts":
/*!******************************!*\
  !*** ./src/intersectable.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkIntersection = void 0;\nfunction checkIntersection(obj1, obj2) {\n    return (obj1.getX() < obj2.getX() + obj2.getWidth() &&\n        obj1.getX() + obj1.getWidth() > obj2.getX() &&\n        obj1.getY() < obj2.getY() + obj2.getHeight() &&\n        obj1.getY() + obj1.getHeight() > obj2.getY());\n}\nexports.checkIntersection = checkIntersection;\n\n\n//# sourceURL=webpack://matific/./src/intersectable.ts?");

/***/ }),

/***/ "./src/movement.ts":
/*!*************************!*\
  !*** ./src/movement.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.KeyboardMovement = void 0;\nvar KeyboardMovement = /** @class */ (function () {\n    function KeyboardMovement(speed) {\n        var _this = this;\n        this.keys = {};\n        this.speed = speed;\n        window.addEventListener('keydown', function (e) { return (_this.keys[e.key] = true); });\n        window.addEventListener('keyup', function (e) { return (_this.keys[e.key] = false); });\n    }\n    KeyboardMovement.prototype.calculateMovement = function (x, y, deltaTime) {\n        var dx = 0;\n        if (this.keys['ArrowLeft'])\n            dx -= this.speed * deltaTime;\n        if (this.keys['ArrowRight'])\n            dx += this.speed * deltaTime;\n        return { x: x + dx, y: y };\n    };\n    return KeyboardMovement;\n}());\nexports.KeyboardMovement = KeyboardMovement;\n\n\n//# sourceURL=webpack://matific/./src/movement.ts?");

/***/ }),

/***/ "./src/parachutist.ts":
/*!****************************!*\
  !*** ./src/parachutist.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Parachutist = void 0;\nvar Parachutist = /** @class */ (function () {\n    function Parachutist(imageSrc, x, y, width, height, speed) {\n        this.image = new Image();\n        this.image.src = imageSrc;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.speed = speed;\n    }\n    Parachutist.prototype.draw = function (ctx) {\n        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    };\n    Parachutist.prototype.update = function (deltaTime) {\n        this.y += this.speed * deltaTime;\n    };\n    Parachutist.prototype.getX = function () {\n        return this.x;\n    };\n    Parachutist.prototype.getY = function () {\n        return this.y;\n    };\n    Parachutist.prototype.getWidth = function () {\n        return this.width;\n    };\n    Parachutist.prototype.getHeight = function () {\n        return this.height;\n    };\n    return Parachutist;\n}());\nexports.Parachutist = Parachutist;\n\n\n//# sourceURL=webpack://matific/./src/parachutist.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nvar Player = /** @class */ (function () {\n    function Player(imageSrc, x, y, width, height, movementStrategy) {\n        this.image = new Image();\n        this.image.src = imageSrc;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.movementStrategy = movementStrategy;\n        this.canvasWidth = window.innerWidth;\n        this.canvasHeight = window.innerHeight;\n    }\n    Player.prototype.draw = function (ctx) {\n        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    };\n    Player.prototype.update = function (deltaTime) {\n        var _a = this.movementStrategy.calculateMovement(this.x, this.y, deltaTime), x = _a.x, y = _a.y;\n        this.x = Math.max(0, Math.min(x, this.canvasWidth - this.width));\n        this.y = Math.max(0, Math.min(y, this.canvasHeight - this.height));\n    };\n    Player.prototype.getX = function () {\n        return this.x;\n    };\n    Player.prototype.getY = function () {\n        return this.y;\n    };\n    Player.prototype.getWidth = function () {\n        return this.width;\n    };\n    Player.prototype.getHeight = function () {\n        return this.height;\n    };\n    Player.prototype.load = function () {\n        var _this = this;\n        return new Promise(function (resolve) {\n            _this.image.onload = function () { return resolve(); };\n        });\n    };\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack://matific/./src/player.ts?");

/***/ }),

/***/ "./src/scoreboard.ts":
/*!***************************!*\
  !*** ./src/scoreboard.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Scoreboard = void 0;\nvar Scoreboard = /** @class */ (function () {\n    function Scoreboard(initialLives, x, y) {\n        this.score = 0;\n        this.lives = initialLives;\n        this.x = x;\n        this.y = y;\n        this.initialLives = initialLives;\n    }\n    Scoreboard.prototype.increaseScore = function (points) {\n        this.score += points;\n    };\n    Scoreboard.prototype.decreaseLife = function () {\n        this.lives -= 1;\n    };\n    Scoreboard.prototype.isGameOver = function () {\n        return this.lives <= 0;\n    };\n    Scoreboard.prototype.draw = function (ctx) {\n        ctx.font = '20px Arial';\n        ctx.fillStyle = 'white';\n        ctx.fillText(\"Score: \".concat(this.score), this.x, this.y);\n        ctx.fillText(\"Lives: \".concat(this.lives), this.x, this.y + 30);\n    };\n    Scoreboard.prototype.reset = function () {\n        this.score = 0;\n        this.lives = this.initialLives;\n    };\n    return Scoreboard;\n}());\nexports.Scoreboard = Scoreboard;\n\n\n//# sourceURL=webpack://matific/./src/scoreboard.ts?");

/***/ }),

/***/ "./src/sea.ts":
/*!********************!*\
  !*** ./src/sea.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sea = void 0;\nvar Sea = /** @class */ (function () {\n    function Sea(imageSrc, x, y, width, height) {\n        this.image = new Image();\n        this.image.src = imageSrc;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n    }\n    Sea.prototype.draw = function (ctx) {\n        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\n    };\n    Sea.prototype.getX = function () {\n        return this.x;\n    };\n    Sea.prototype.getY = function () {\n        return this.y;\n    };\n    Sea.prototype.getWidth = function () {\n        return this.width;\n    };\n    Sea.prototype.getHeight = function () {\n        return this.height;\n    };\n    // Load method for image loading\n    Sea.prototype.load = function () {\n        var _this = this;\n        return new Promise(function (resolve) {\n            _this.image.onload = function () { return resolve(); };\n        });\n    };\n    return Sea;\n}());\nexports.Sea = Sea;\n\n\n//# sourceURL=webpack://matific/./src/sea.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;