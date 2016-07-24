/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(41);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(77);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _angle;
	// import MojsPlayer     from 'mojs-player'


	var _classlistPolyfill = __webpack_require__(85);

	var _classlistPolyfill2 = _interopRequireDefault(_classlistPolyfill);

	var _module = __webpack_require__(86);

	var _module2 = _interopRequireDefault(_module);

	var _ball = __webpack_require__(87);

	var _ball2 = _interopRequireDefault(_ball);

	var _ball3 = __webpack_require__(93);

	var _ball4 = _interopRequireDefault(_ball3);

	var _ball5 = __webpack_require__(95);

	var _ball6 = _interopRequireDefault(_ball5);

	var _ball7 = __webpack_require__(96);

	var _ball8 = _interopRequireDefault(_ball7);

	var _ball9 = __webpack_require__(97);

	var _ball10 = _interopRequireDefault(_ball9);

	var _colors = __webpack_require__(88);

	var _colors2 = _interopRequireDefault(_colors);

	var _constants = __webpack_require__(94);

	var _constants2 = _interopRequireDefault(_constants);

	var _dust = __webpack_require__(98);

	var _dust2 = _interopRequireDefault(_dust);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(99);
	var CLASSES = __webpack_require__(101);

	__webpack_require__(102);
	var LINE_CLASSES = __webpack_require__(104);

	__webpack_require__(105);
	var SCENE_CLASSES = __webpack_require__(107);

	var LINE2_SHIFT = 8;
	var LINE3_SHIFT = 12;
	var LINE1_SHIFT = 45;

	var LINE2_BOUNCE_DURATION = 2 * _constants2.default.LINE1_DURATION;
	var LINE3_BOUNCE_DURATION = 2 * _constants2.default.LINE1_DURATION;

	var COLLIDE_DURATION = .25 * _constants2.default.LINE1_DURATION;
	var BOUNCE_DURATION = _constants2.default.LINE1_DURATION - COLLIDE_DURATION;

	var CIRCLE_RADIUS = 48;
	var LINE_HEIGHT = 176 / 2;

	var opts = {
	  shape: 'line',
	  stroke: _colors2.default.YELLOW,
	  strokeWidth: 3,
	  radius: LINE_HEIGHT,
	  left: '50%', top: '50%',
	  origin: '0 50%',
	  angle: (_angle = {}, _angle[90 - LINE1_SHIFT] = 90, _angle),
	  easing: 'cubic.in',
	  isShowStart: true,
	  y: -2 * LINE_HEIGHT,
	  isForce3d: true
	};

	var Demo = function (_Module) {
	  (0, _inherits3.default)(Demo, _Module);

	  function Demo() {
	    (0, _classCallCheck3.default)(this, Demo);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Demo.prototype._render = function _render() {
	    var _this2 = this,
	        _x;

	    this.el = document.querySelector('#js-scene');
	    opts.parent = this.el;

	    this.el.style['opacity'] = 1;
	    mojs.h.force3d(this.el);

	    var noise = mojs.easing.path('M0,100 C0,100 2.08241272,101.287388 3.78271484,102.328264 C5.35552883,99.9999999 7.00048828,95.208496 7.00048828,95.208496 L10.1762695,103.816964 L12.7734375,95.9547991 L19.3125,102.328264 L22.2539062,95.208496 L27.0786839,106.645089 L29.2555809,93.3549108 L32.0340385,103.816964 L35.3459816,94.6015626 L38.3783493,103.092634 L41.0513382,95.9547991 L43.7739944,106.645089 L45.6729927,96.8973214 L50,105.083147 L53.3504448,93.3549108 L57.7360497,103.816964 L60.8616066,95.9547991 L65.0345993,103.092634 L68.6997757,97.5106029 L71.6646194,102.03125 L75.5066986,96.5672433 L78.2949219,102.652344 L81.0313873,96.8973214 L84.0174408,102.328264 L86.0842667,97.7332592 L88.7289352,101.606306 L91.1429977,98.3533763 L94.3822556,101.287388 L97.0809174,98.7254467 L100,100');
	    var collisionNoize = new mojs.Tween({
	      duration: _constants2.default.LINE1_DURATION,
	      delay: _constants2.default.LINE1_DURATION,
	      repeat: 1,
	      onUpdate: function onUpdate(ep, p) {
	        var proc = noise(p);
	        var transform = 'translateX(' + 25 * proc + 'px) translateY(' + -25 * proc + 'px)';
	        _this2.el.style[mojs.h.prefix.css + 'transform'] = transform;
	        _this2.el.style['transform'] = transform;
	      }
	    });

	    var BASE_SHIFT = 2.6 * LINE_HEIGHT;

	    var line = new mojs.Shape((0, _extends3.default)({}, opts, {
	      x: BASE_SHIFT,
	      duration: _constants2.default.LINE1_DURATION
	    })).then({
	      angle: 90 - LINE1_SHIFT,
	      delay: 2 * _constants2.default.LINE1_DURATION,
	      easing: 'cubic.out'
	    });

	    var ball1 = new _ball4.default({ parent: line.el });

	    var bounceReturn = {
	      angle: 90,
	      duration: BOUNCE_DURATION,
	      easing: 'bounce.out'
	    };

	    var line2 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      easing: 'cubic.out',
	      x: BASE_SHIFT - 2 * CIRCLE_RADIUS,
	      angle: { 90: 90 + LINE2_SHIFT },
	      delay: _constants2.default.LINE1_DURATION,
	      duration: COLLIDE_DURATION
	    })).then((0, _extends3.default)({}, bounceReturn)).then({
	      angle: 90 - LINE3_SHIFT,
	      duration: COLLIDE_DURATION,
	      delay: _constants2.default.LINE1_DURATION,
	      easing: 'cubic.out'
	    }).then(bounceReturn);

	    var ball2 = new _ball6.default({ parent: line2.el });

	    var line3 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      easing: 'cubic.out',
	      x: BASE_SHIFT - 4 * CIRCLE_RADIUS,
	      angle: { 90: 90 + LINE3_SHIFT },
	      delay: _constants2.default.LINE1_DURATION,
	      duration: COLLIDE_DURATION
	    })).then(bounceReturn).then({
	      angle: 90 - LINE2_SHIFT,
	      duration: COLLIDE_DURATION,
	      delay: _constants2.default.LINE1_DURATION,
	      easing: 'cubic.out'
	    }).then(bounceReturn);
	    var ball3 = new _ball8.default({ parent: line3.el });

	    var line4 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      x: BASE_SHIFT - 6 * CIRCLE_RADIUS,
	      angle: { 90: 90 + LINE1_SHIFT },
	      easing: 'cubic.out',
	      duration: _constants2.default.LINE1_DURATION,
	      delay: _constants2.default.LINE1_DURATION
	    })).then({ angle: 90, easing: 'cubic.in', duration: _constants2.default.LINE1_DURATION });
	    var ball4 = new _ball10.default({ parent: line4.el });

	    var shadowOpts = {
	      fill: _colors2.default.BLACK,
	      opacity: .15,
	      radiusX: 47,
	      radiusY: 7,
	      parent: this.el,
	      isShowStart: true,
	      easing: 'cubic.out',
	      x: { 0: -4 * LINE3_SHIFT },
	      delay: _constants2.default.LINE1_DURATION,
	      duration: COLLIDE_DURATION,
	      isForce3d: true
	    };

	    var shadowBounce = (0, _extends3.default)({}, bounceReturn, {
	      angle: 0,
	      x: 0
	    });

	    var shadow2 = new mojs.Shape((0, _extends3.default)({}, shadowOpts, {
	      left: '61%',
	      top: '90%'
	    })).then(shadowBounce).then((0, _extends3.default)({}, shadowOpts, {
	      x: { 0: 4 * LINE3_SHIFT }
	    })).then(shadowBounce);

	    var shadow3 = new mojs.Shape((0, _extends3.default)({}, shadowOpts, {
	      top: '90%',
	      left: '37%'
	    })).then(shadowBounce).then((0, _extends3.default)({}, shadowOpts, {
	      x: { 0: 4 * LINE3_SHIFT }
	    })).then(shadowBounce);

	    var shadow1 = new mojs.Shape((0, _extends3.default)({}, shadowOpts, {
	      top: '90%',
	      left: '85%',
	      x: (_x = {}, _x[3.75 * LINE1_SHIFT] = 0, _x),
	      duration: _constants2.default.LINE1_DURATION,
	      easing: 'cubic.in',
	      opacity: { .03: .15 },
	      delay: 0

	    })).then({
	      delay: 2 * _constants2.default.LINE1_DURATION,
	      x: 3.75 * LINE1_SHIFT,
	      opacity: .03,
	      easing: 'cubic.out'
	    });

	    var shadow4 = new mojs.Shape((0, _extends3.default)({}, shadowOpts, {
	      top: '90%',
	      left: '13%',
	      duration: _constants2.default.LINE1_DURATION,
	      delay: _constants2.default.LINE1_DURATION,
	      x: { 0: -3.75 * LINE1_SHIFT },
	      easing: 'cubic.out',
	      opacity: { .15: .03 }
	    })).then({
	      delay: 0,
	      x: 0,
	      opacity: .15,
	      easing: 'cubic.in'
	    });

	    var mainTimeline = new mojs.Timeline();

	    mainTimeline.add(line, line2, line3, line4, ball1, ball2, ball3, ball4, shadow1, shadow2, shadow3, shadow4, collisionNoize, new _dust2.default({ delay: .5 * _constants2.default.LINE1_DURATION, right: '-120px' }), new _dust2.default({ delay: 1.1 * _constants2.default.LINE1_DURATION, right: '70%' }));

	    this.timeline = mainTimeline;
	    ;new MojsPlayer({ add: mainTimeline, precision: 0.02, isPlaying: true, isRepeat: true }).el.style['z-index'] = 10;
	  };

	  return Demo;
	}(_module2.default);

	window.mojs.pool = window.mojs.pool || {};
	window.mojs.pool.ballsDemo = new Demo();

	// if ( (typeof define === "function") && define.amd ) {
	//   define(function () { return MojsPlayer; });
	// }
	// if ( (typeof module === "object") && (typeof module.exports === "object") ) {
	//   module.exports = MojsPlayer;
	// }

	// let _global = ( typeof global !== 'undefined' ) ? global : window;
	// _global.MojsPlayer = MojsPlayer;

	exports.default = Demo;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(21)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(9)
	  , hide      = __webpack_require__(11)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(16) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(19)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function(){
	  return Object.defineProperty(__webpack_require__(18)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(22)
	  , gOPS     = __webpack_require__(37)
	  , pIE      = __webpack_require__(38)
	  , toObject = __webpack_require__(39)
	  , IObject  = __webpack_require__(26)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(17)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(23)
	  , enumBugKeys = __webpack_require__(36);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(24)
	  , toIObject    = __webpack_require__(25)
	  , arrayIndexOf = __webpack_require__(29)(false)
	  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(28);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(27);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(30)
	  , toIndex   = __webpack_require__(32);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(31)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(34)('keys')
	  , uid    = __webpack_require__(35);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 37 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 38 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(42);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(43);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	__webpack_require__(58);
	module.exports = __webpack_require__(62).f('iterator');

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(46)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(47)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , defined   = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(48)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(49)
	  , hide           = __webpack_require__(11)
	  , has            = __webpack_require__(24)
	  , Iterators      = __webpack_require__(50)
	  , $iterCreate    = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(55)
	  , getPrototypeOf = __webpack_require__(57)
	  , ITERATOR       = __webpack_require__(56)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(52)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(55)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(56)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(53)
	  , enumBugKeys = __webpack_require__(36)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(18)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(54).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(22);

	module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(24)
	  , TAG = __webpack_require__(56)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(34)('wks')
	  , uid        = __webpack_require__(35)
	  , Symbol     = __webpack_require__(7).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(24)
	  , toObject    = __webpack_require__(39)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var global        = __webpack_require__(7)
	  , hide          = __webpack_require__(11)
	  , Iterators     = __webpack_require__(50)
	  , TO_STRING_TAG = __webpack_require__(56)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(60)
	  , step             = __webpack_require__(61)
	  , Iterators        = __webpack_require__(50)
	  , toIObject        = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(47)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(56);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(7)
	  , has            = __webpack_require__(24)
	  , DESCRIPTORS    = __webpack_require__(16)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(49)
	  , META           = __webpack_require__(66).KEY
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(55)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(56)
	  , wksExt         = __webpack_require__(62)
	  , wksDefine      = __webpack_require__(67)
	  , keyOf          = __webpack_require__(68)
	  , enumKeys       = __webpack_require__(69)
	  , isArray        = __webpack_require__(70)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , createDesc     = __webpack_require__(20)
	  , _create        = __webpack_require__(52)
	  , gOPNExt        = __webpack_require__(71)
	  , $GOPD          = __webpack_require__(73)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(22)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(72).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(38).f  = $propertyIsEnumerable;
	  __webpack_require__(37).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(48)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(35)('meta')
	  , isObject = __webpack_require__(14)
	  , has      = __webpack_require__(24)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(17)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(7)
	  , core           = __webpack_require__(8)
	  , LIBRARY        = __webpack_require__(48)
	  , wksExt         = __webpack_require__(62)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(22)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(22)
	  , gOPS    = __webpack_require__(37)
	  , pIE     = __webpack_require__(38);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(27);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , gOPN      = __webpack_require__(72).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(23)
	  , hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(38)
	  , createDesc     = __webpack_require__(20)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , has            = __webpack_require__(24)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)('asyncIterator');

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)('observable');

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(78);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(82);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(42);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(81).set});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(73).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(52)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_"))
	    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(42);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Base class for all modules.
	  Extends _defaults to _props
	*/

	var Module = function () {
	  /*
	    constructor method calls scaffolding methods.
	  */

	  function Module() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    (0, _classCallCheck3.default)(this, Module);

	    this._o = o;
	    this._index = this._o.index || 0;
	    this._declareDefaults();
	    this._extendDefaults();
	    this._vars();
	    return this._render();
	  }
	  /*
	    Method to declare defaults.
	    @private
	  */


	  Module.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      className: '',
	      parent: document.body,
	      delay: 0
	    };
	  };
	  /*
	    Method to add pointer down even listener to el.
	    @param {Object}   HTMLElement to add event listener on.
	    @param {Function} Event listener callback.
	  */


	  Module.prototype._addPointerDownEvent = function _addPointerDownEvent(el, fn) {
	    if (window.navigator.msPointerEnabled) {
	      el.addEventListener('MSPointerDown', fn);
	    } else if (window.ontouchstart !== undefined) {
	      el.addEventListener('touchstart', fn);
	      el.addEventListener('mousedown', fn);
	    } else {
	      el.addEventListener('mousedown', fn);
	    }
	  };
	  /*
	    Method to add pointer up even listener to el.
	    @param {Object}   HTMLElement to add event listener on.
	    @param {Function} Event listener callback.
	  */


	  Module.prototype._addPointerUpEvent = function _addPointerUpEvent(el, fn) {
	    if (window.navigator.msPointerEnabled) {
	      el.addEventListener('MSPointerUp', fn);
	    } else if (window.ontouchstart !== undefined) {
	      el.addEventListener('touchend', fn);
	      el.addEventListener('mouseup', fn);
	    } else {
	      el.addEventListener('mouseup', fn);
	    }
	  };
	  /*
	    Method to check if variable holds link to a function.
	    @param {Function?} A variable to check.
	    @returns {Boolean} If passed variable is a function.
	  */


	  Module.prototype._isFunction = function _isFunction(fn) {
	    return typeof fn === 'function';
	  };
	  /*
	    Method to a function or silently fail.
	    @param {Function?} A variable to check.
	    @param {Array like} Arguments.
	  */


	  Module.prototype._callIfFunction = function _callIfFunction(fn) {
	    Array.prototype.shift.call(arguments);
	    this._isFunction(fn) && fn.apply(this, arguments);
	  };
	  /*
	    Method to declare module's variables.
	    @private
	  */


	  Module.prototype._vars = function _vars() {};
	  /*
	    Method to render on initialization.
	    @private
	  */


	  Module.prototype._render = function _render() {
	    this._addMainElement();
	  };
	  /*
	    Method to add `this.el` on the module.
	    @private
	    @param {String} Tag name of the element.
	  */


	  Module.prototype._addMainElement = function _addMainElement() {
	    var tagName = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];

	    var p = this._props;

	    this.el = this._createElement(tagName);
	    this._addMainClasses();

	    var method = p.isPrepend ? 'prepend' : 'append';
	    this['_' + method + 'Child'](p.parent, this.el);
	  };
	  /*
	    Method to classes on `this.el`.
	    @private
	  */


	  Module.prototype._addMainClasses = function _addMainClasses() {
	    var p = this._props;
	    if (p.className instanceof Array) {
	      for (var i = 0; i < p.className.length; i++) {
	        this._addClass(this.el, p.className[i]);
	      }
	    } else {
	      this._addClass(this.el, p.className);
	    }
	  };
	  /*
	    Method to add a class on el.
	    @private
	    @param {Object} HTML element to add the class on.
	    @param {String} Class name to add.
	  */


	  Module.prototype._addClass = function _addClass(el, className) {
	    className && el.classList.add(className);
	  };
	  /*
	    Method to set property on the module.
	    @private
	    @param {String, Object} Name of the property to set
	                            or object with properties to set.
	    @param {Any} Value for the property to set. Could be
	                  undefined if the first param is object.
	  */


	  Module.prototype._setProp = function _setProp(attr, value) {
	    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) === 'object') {
	      for (var key in attr) {
	        this._assignProp(key, attr[key]);
	      }
	    } else {
	      this._assignProp(attr, value);
	    }
	  };
	  /*
	    Method to assign single property's value.
	    @private
	    @param {String} Property name.
	    @param {Any}    Property value.
	  */


	  Module.prototype._assignProp = function _assignProp(key, value) {
	    this._props[key] = value;
	  };
	  /*
	    Method to copy `_o` options to `_props` object
	    with fallback to `_defaults`.
	    @private
	  */


	  Module.prototype._extendDefaults = function _extendDefaults() {
	    this._props = {};
	    // this._deltas = {};
	    for (var key in this._defaults) {
	      var value = this._o[key];
	      // copy the properties to the _o object
	      this._assignProp(key, value != null ? value : this._defaults[key]);
	    }
	  };
	  /*
	    Method to create HTMLElement from tag name.
	    @private
	    @param {String} Name of the tag to create `HTML` element.
	    @returns {Object} HtmlElement.
	  */


	  Module.prototype._createElement = function _createElement(tagName) {
	    return document.createElement(tagName);
	  };
	  /*
	    Method to create HTMLElement and append it to the `el` with a className.
	    @private
	    @param {String} The tagname for the HTMLElement.
	    @param {String} Optional class name to add to the new child.
	    @returns {Object} The newely created HTMLElement.
	  */


	  Module.prototype._createChild = function _createChild(tagName, className) {
	    var child = this._createElement('div');

	    if (className) {
	      var classes = className.split(' ');
	      for (var i = 0; i < classes.length; i++) {
	        child.classList.add(classes[i]);
	      }
	    }

	    this.el.appendChild(child);
	    return child;
	  };
	  /*
	    Method to prepend child to the el.
	    @private
	    @param {Object} Parent HTMLElement.
	    @param {Object} Child HTMLElement.
	  */


	  Module.prototype._appendChild = function _appendChild(el, childEl) {
	    el.appendChild(childEl);
	  };
	  /*
	    Method to prepend child to the el.
	    @private
	    @param {Object} Parent HTMLElement.
	    @param {Object} Child HTMLElement.
	  */


	  Module.prototype._prependChild = function _prependChild(el, childEl) {
	    el.insertBefore(childEl, el.firstChild);
	  };
	  /*
	    Method to toggle opacity based on passed boolean.
	    @private
	    @param {Object} HTML element.
	    @param {Boolean} Show/hide element.
	  */


	  Module.prototype._toggleOpacity = function _toggleOpacity(el, isShow) {
	    el.style.opacity = isShow ? 1 : 0;
	  };
	  /*
	    Method to find an element on the page by selector.
	    @private
	    @param {String} Selector.
	    @returns {Object, Null} `Html` element or `null`.
	  */


	  Module.prototype._findEl = function _findEl(selector) {
	    return document.querySelector(selector);
	  };
	  /*
	    Method to get window width.
	    @private
	    @returns Window width.
	  */


	  Module.prototype._getWindowWidth = function _getWindowWidth() {
	    var w = window,
	        width = w.innerWidth || e.clientWidth || g.clientWidth;

	    return width;
	  };
	  /*
	    Method to get window width.
	    @private
	    @returns Window width.
	  */


	  Module.prototype._getWindowHeight = function _getWindowHeight() {
	    var w = window,
	        height = w.innerHeight || e.clientHeight || g.clientHeight;

	    return height;
	  };
	  /*
	   Method to get max window size.
	   @private
	   @returns Max window size.
	  */


	  Module.prototype._getWindowSize = function _getWindowSize() {
	    return Math.max(this._getWindowWidth(), this._getWindowHeight());
	  };

	  return Module;
	}();

	exports.default = Module;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(41);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(77);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(86);

	var _module2 = _interopRequireDefault(_module);

	var _colors = __webpack_require__(88);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(89);
	// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

	var Ball = function (_Module) {
	  (0, _inherits3.default)(Ball, _Module);

	  function Ball() {
	    (0, _classCallCheck3.default)(this, Ball);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Ball.prototype._render = function _render() {
	    _Module.prototype._render.call(this);
	    this.el.classList.add('ball');
	    this.face = this._createChild('div', 'ball__inner');
	    this.face2 = this._createChild('div', 'ball__inner2');
	    this.face3 = this._createChild('div', 'ball__inner3');
	  };

	  return Ball;
	}(_module2.default);

	exports.default = Ball;

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var COLORS = {
	  MAIN_RED: '#EA485C',
	  YELLOW: '#FFCEA5',
	  BLACK: '#29363B',
	  WHITE: 'white'
	};

	exports.default = COLORS;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(92)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./ball.postcss.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./ball.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(91)();
	// imports


	// module
	exports.push([module.id, ".ball {\n  width:            96px;\n  width:            6rem;\n  height:            96px;\n  height:           6rem;\n  border:            4px solid #FFCEA5;\n  border:           0.25rem solid #FFCEA5;\n  border-radius:    50%;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iOTZweCIgaGVpZ2h0PSI5NnB4IiB2aWV3Qm94PSIwIDAgOTYgOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+U2xpY2UgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz4gICAgICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iNTAlIiBjeT0iMCUiIGZ4PSI1MCUiIGZ5PSIwJSIgcj0iMTAwJSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkYxRTEiIG9mZnNldD0iMCUiPjwvc3RvcD4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZCMTcwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+ICAgIDwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTEiIGZpbGw9InVybCgjcmFkaWFsR3JhZGllbnQtMSkiIHg9IjAiIHk9IjAiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiI+PC9yZWN0PiAgICA8L2c+PC9zdmc+);\n  -webkit-transform:        rotate(-90deg);\n          transform:        rotate(-90deg);\n  position:         absolute;\n  left:             100%;\n  bottom:           50%;\n  margin-bottom:            -48px;\n  margin-bottom:    -3rem;\n  box-sizing:       border-box\n  /*&--3 &__inner2 {\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iODlweCIgaGVpZ2h0PSI4OXB4IiB2aWV3Qm94PSIwIDAgODkgODkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+U2xpY2UgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9Ikdyb3VwLTYiPiAgICAgICAgICAgIDxwYXRoIGQ9Ik00NC41LDg5IEM2OS4wNzY2NzE0LDg5IDg5LDY5LjA3NjY3MTQgODksNDQuNSBDODksMTkuOTIzMzI4NiA2OS4wNzY2NzE0LDAgNDQuNSwwIEMxOS45MjMzMjg2LDAgMCwxOS45MjMzMjg2IDAsNDQuNSBDMCw2OS4wNzY2NzE0IDE5LjkyMzMyODYsODkgNDQuNSw4OSBaIiBpZD0iT3ZhbC02MiI+PC9wYXRoPiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4wMDAwMDAsIDIzLjAwMDAwMCkiIHN0cm9rZT0iIzI5MzYzQiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC45MTQxMTIxOCw3Ljc0MzcyMjEgQzAuOTE0MTEyMTgsNy43NDM3MjIxIDQuODcxODcxMTgsNy43NDM3MjIxIDguODI5NjMwMTgsMC41Mzg0ODcwMjYiIGlkPSJQYXRoLTExIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00My4yNDY0NTQzLDcuNzU2NzU2MjYgQzQzLjI0NjQ1NDMsNy43NTY3NTYyNiA0OC4zNDE1MDIyLDcuNzU2NzU2MjYgNTEuMTYxOTcyMywwLjU1MTUyMTE5MSIgaWQ9IlBhdGgtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3LjIwNDIxMywgNC4xNTQxMzkpIHJvdGF0ZSg5My4wMDAwMDApIHRyYW5zbGF0ZSgtNDcuMjA0MjEzLCAtNC4xNTQxMzkpICI+PC9wYXRoPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);\n  }*/\n\n}\n.ball:before, .ball:after {\n  content:            '';\n  position:            absolute\n\n}\n.ball:before {\n  width:            11px;\n  width:            0.6875rem;\n  height:            11px;\n  height:            0.6875rem;\n  border-radius:            0.25rem;\n  background:            #29363B;\n  left:            50%;\n  top:            -2px;\n  top:            -0.125rem;\n  margin-left:            -5.5px;\n  margin-left:            -0.34375rem;\n  margin-top:            -11px;\n  margin-top:            -0.6875rem\n\n}\n.ball:after {\n  width:            39px;\n  width:            2.4375rem;\n  height:            17px;\n  height:            1.0625rem;\n  opacity:            0.75;\n  -webkit-transform:            rotate(323deg);\n          transform:            rotate(323deg);\n  background:            #FFFFFF;\n  border-radius:            50%;\n  top:            6px;\n  top:            0.375rem;\n  left:            2px;\n  left:            0.125rem;\n  z-index:            -1\n\n}\n.ball__eye {\n  width:            20px;\n  width:            1.25rem;\n  height:            20px;\n  height:            1.25rem;\n  position:            absolute;\n  top:            34%;\n  background:            #FFF;\n  border-radius:            50%;\n  z-index:            -1;\n  overflow:            hidden\n\n}\n.ball__eye--1 {\n  left:            16%\n\n}\n.ball__eye--2 {\n  left:            66%\n\n}\n.ball--1 .ball__eye {\n  top:            37%\n\n}\n.ball__inner, .ball__inner2, .ball__inner3 {\n  position:            absolute;\n  left:            0;\n  top:            0;\n  width:            100%;\n  height:            100%;\n  border-radius:            50%\n  /*z-index:        1;*/\n\n}\n.ball--3 .ball__eye {\n  top:            41.5%\n\n}\n.ball--1 .ball__inner {\n  /*background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iOTBweCIgaGVpZ2h0PSI5MHB4IiB2aWV3Qm94PSIwIDAgOTAgOTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+U2xpY2UgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9Ikdyb3VwLTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS45MTYzNDksIDM1LjA3MzI3Mykgcm90YXRlKC0yLjAwMDAwMCkgdHJhbnNsYXRlKC00NS45MTYzNDksIC0zNS4wNzMyNzMpIHRyYW5zbGF0ZSgxMy45MTYzNDksIDE3LjU3MzI3MykiPiAgICAgICAgICAgIDxnIGlkPSJHcm91cC05IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NC45MjA2NzQsIDE1LjA2OTg1NikiIGZpbGw9IiNGRkZGRkYiPiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0yMSIgY3g9IjkuNDMzMzQxNTQiIGN5PSI5LjQzMzM0MTU0IiByeD0iOS40MzMzNDE1NCIgcnk9IjkuNDMzMzQxNTQiPjwvZWxsaXBzZT4gICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNzcwMTAwLCAxNC40ODAxOTIpIiBmaWxsPSIjRkZGRkZGIj4gICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtMjEiIGN4PSI5LjQzMzM0MTU0IiBjeT0iOS40MzMzNDE1NCIgcng9IjkuNDMzMzQxNTQiIHJ5PSI5LjQzMzM0MTU0Ij48L2VsbGlwc2U+ICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjkwMDMwNjE4LDguNDE3NzU1NDMgQzUuOTAwMzA2MTgsOC40MTc3NTU0MyAxMS41NzQ4MzE0LDkuNTc5NDI5OTYgMTcuMjQ5MzU2NSw0LjA0NTQ0NzI1IiBpZD0iUGF0aC0xMSIgc3Ryb2tlPSIjMjkzNjNCIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuNTc0ODMxLCA2LjI4MjM4Nikgcm90YXRlKDQ2LjAwMDAwMCkgdHJhbnNsYXRlKC0xMS41NzQ4MzEsIC02LjI4MjM4NikgIj48L3BhdGg+ICAgICAgICAgICAgPHBhdGggZD0iTTQ2LjA1ODc4MTEsOS42NzQ1OTkyOSBDNDYuMDU4NzgxMSw5LjY3NDU5OTI5IDUxLjczMzMwNjMsMTAuNzk5MTc3MiA1Ny40MDc4MzE1LDUuMzAyMjkxMTEiIGlkPSJQYXRoLTExIiBzdHJva2U9IiMyOTM2M0IiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MS43MzMzMDYsIDcuNTM1ODUyKSBzY2FsZSgtMSwgMSkgcm90YXRlKDQzLjAwMDAwMCkgdHJhbnNsYXRlKC01MS43MzMzMDYsIC03LjUzNTg1MikgIj48L3BhdGg+ICAgICAgICA8L2c+ICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTYyIiBjeD0iNDQuODEyMzE4NyIgY3k9IjQ0LjYwMjI5MzciIHI9IjQ0LjUiPjwvY2lyY2xlPiAgICA8L2c+PC9zdmc+);*/\n\n}\n.ball--2 .ball__inner {\n  background-image:            url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iODlweCIgaGVpZ2h0PSI4OXB4IiB2aWV3Qm94PSIwIDAgODkgODkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+U2xpY2UgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC02MiIgY3g9IjQ0LjUiIGN5PSI0NC41IiByPSI0NC41Ij48L2NpcmNsZT4gICAgICAgIDxnIGlkPSJHcm91cC0xMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCAyNy4wMDAwMDApIj4gICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0yMSIgZmlsbD0iIzI5MzYzQiIgY3g9IjguODkzOTYzNjgiIGN5PSIxNy41NzE0Mjg2IiByeD0iOC44OTM5NjM2OCIgcnk9IjkiPjwvZWxsaXBzZT4gICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0yMSIgZmlsbD0iIzI5MzYzQiIgY3g9IjUxLjI0NjE3MTciIGN5PSIxNy41NzE0Mjg2IiByeD0iOC44OTM5NjM2OCIgcnk9IjkiPjwvZWxsaXBzZT4gICAgICAgICAgICA8cGF0aCBkPSJNNC44NjkyNjMxMyw0Ljk4NDIzNTQ5IEM0Ljg2OTI2MzEzLDQuOTg0MjM1NDkgOC43MDgyNTkxNyw3Ljc3MDM2ODMgMTUuNTY5Mzk5NiwwLjgxMjc3OTAxOCIgaWQ9IlBhdGgtMTEiIHN0cm9rZT0iIzI5MzYzQiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNNDQuODkzMzQwNSw0LjE3MTQ1NjQ3IEM0NC44OTMzNDA1LDQuMTcxNDU2NDcgNDkuMjMyNzg3NCw4LjMyNTc1MzM1IDU1LjU5MzQ3NjksMCIgaWQ9IlBhdGgtMTEiIHN0cm9rZT0iIzI5MzYzQiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjI0MzQwOSwgMi42MDM5NDUpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTUwLjI0MzQwOSwgLTIuNjAzOTQ1KSAiPjwvcGF0aD4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNyIgb3BhY2l0eT0iMC43IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1My42ODI4NzAsIDIyLjUwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0yMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi43MTkzNDEsIDYuMTgxMzE5KSByb3RhdGUoNDguMDAwMDAwKSB0cmFuc2xhdGUoLTYuNzE5MzQxLCAtNi4xODEzMTkpICIgY3g9IjYuNzE5MzQwNjkiIGN5PSI2LjE4MTMxODY4IiByeD0iMS44MzI1NDc0NiIgcnk9IjYuMTgxMzE4NjgiPjwvZWxsaXBzZT4gICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjEzMjM1MCwgMTAuNTY5MTk1KSByb3RhdGUoNDguMDAwMDAwKSB0cmFuc2xhdGUoLTEwLjEzMjM1MCwgLTEwLjU2OTE5NSkgIiBjeD0iMTAuMTMyMzQ5NiIgY3k9IjEwLjU2OTE5NTMiIHJ4PSIxLjgzMjU0NzQ2IiByeT0iMy4wOTA2NTkzNCI+PC9lbGxpcHNlPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==)\n\n}\n.ball--3 .ball__inner {\n  background-image:            url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iODlweCIgaGVpZ2h0PSI4OXB4IiB2aWV3Qm94PSIwIDAgODkgODkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+U2xpY2UgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9Ikdyb3VwLTYiPiAgICAgICAgICAgIDxwYXRoIGQ9Ik00NC41LDg5IEM2OS4wNzY2NzE0LDg5IDg5LDY5LjA3NjY3MTQgODksNDQuNSBDODksMTkuOTIzMzI4NiA2OS4wNzY2NzE0LDAgNDQuNSwwIEMxOS45MjMzMjg2LDAgMCwxOS45MjMzMjg2IDAsNDQuNSBDMCw2OS4wNzY2NzE0IDE5LjkyMzMyODYsODkgNDQuNSw4OSBaIiBpZD0iT3ZhbC02MiI+PC9wYXRoPiAgICAgICAgICAgIDxnIGlkPSJnbGFyZSIgb3BhY2l0eT0iMC43IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjkwNTYxMiwgNTIuNzE2ODM3KSIgZmlsbD0iI0ZGRkZGRiI+ICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMyOTg2OSwgNi42ODU4NjgpIHJvdGF0ZSg0OC4wMDAwMDApIHRyYW5zbGF0ZSgtNi4zMjk4NjksIC02LjY4NTg2OCkgIiBjeD0iNi4zMjk4Njg2OSIgY3k9IjYuNjg1ODY4MzQiIHJ4PSIxLjk5OTA1NTEiIHJ5PSI2LjY4NTg2ODM0Ij48L2VsbGlwc2U+ICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjA1Mjk4OCwgMTAuNDMxOTA1KSByb3RhdGUoNDguMDAwMDAwKSB0cmFuc2xhdGUoLTkuMDUyOTg4LCAtMTAuNDMxOTA1KSAiIGN4PSI5LjA1Mjk4Nzk4IiBjeT0iMTAuNDMxOTA1MSIgcng9IjEuOTk5MDU1MSIgcnk9IjMuMzQyOTM0MTciPjwvZWxsaXBzZT4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=)\n\n}\n.ball--4 .ball__inner {\n  background-image:            url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iODlweCIgaGVpZ2h0PSI4OXB4IiB2aWV3Qm94PSIwIDAgODkgODkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+U2xpY2UgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC02MiIgY3g9IjQ0LjUiIGN5PSI0NC41IiByPSI0NC41Ij48L2NpcmNsZT4gICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy4wMDAwMDAsIDI5LjAwMDAwMCkiPiAgICAgICAgICAgIDxnIGlkPSJsZWZ0LWV5ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zODgzMjIsIDAuMTMyNTI1KSI+ICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTEiIGZpbGw9IiNGRkZGRkYiIGN4PSI5LjQwMDYzODYyIiBjeT0iMTUuNDgxMDM5IiByeD0iOS40MDA2Mzg2MiIgcnk9IjkuMzkyNzI3MjciPjwvZWxsaXBzZT4gICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtMiIgZmlsbD0iIzI5MzYzQiIgY3g9IjEzLjAxMDk1NjEiIGN5PSIxNi4wNTk0ODgzIiByeD0iNi4xNzMzMjM2NiIgcnk9IjcuNDg5ODcwMTMiPjwvZWxsaXBzZT4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LjY0NzQ1NDMsMTEuMDk3MjM5NCBMMy4xMTYxMzc5NiwwLjU5ODQ5NTIyIiBpZD0iUGF0aC0xIiBzdHJva2U9IiMyOTM2M0IiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+ICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDxnIGlkPSJyaWdodC1leWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzLjAwMDAwMCwgMTMuNjMyNTI1KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC01My4wMDAwMDAsIC0xMy42MzI1MjUpIHRyYW5zbGF0ZSg0My4wMDAwMDAsIDEuMTMyNTI1KSI+ICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTEiIGZpbGw9IiNGRkZGRkYiIGN4PSI5LjQwMDYzODYyIiBjeT0iMTUuNDMzNDE5OSIgcng9IjkuNDAwNjM4NjIiIHJ5PSI5LjM5MjcyNzI3Ij48L2VsbGlwc2U+ICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTIiIGZpbGw9IiMyOTM2M0IiIGN4PSIxMy4wMTA5NTYxIiBjeT0iMTYuMDExODY5MiIgcng9IjYuMDU5MjI4MDgiIHJ5PSI3LjM1MTQ0MjA5Ij48L2VsbGlwc2U+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yODIxMzA4LDExLjMzOTA5NzQgTDIuNSwxLjM2NzQ3NDc2IiBpZD0iUGF0aC0xIiBzdHJva2U9IiMyOTM2M0IiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+)\n\n}", ""]);

	// exports


/***/ },
/* 91 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(41);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(77);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _ball = __webpack_require__(87);

	var _ball2 = _interopRequireDefault(_ball);

	var _colors = __webpack_require__(88);

	var _colors2 = _interopRequireDefault(_colors);

	var _constants = __webpack_require__(94);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Trail       from './trail';
	// import RightTrail  from './right-trail';


	__webpack_require__(89);
	// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

	var Ball1 = function (_Ball) {
	  (0, _inherits3.default)(Ball1, _Ball);

	  function Ball1() {
	    (0, _classCallCheck3.default)(this, Ball1);
	    return (0, _possibleConstructorReturn3.default)(this, _Ball.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Ball1.prototype._render = function _render() {
	    _Ball.prototype._render.call(this);
	    this.el.classList.add('ball--1');

	    this.eye1 = this._createChild('div', 'ball__eye ball__eye--1');
	    this.eye2 = this._createChild('div', 'ball__eye ball__eye--2');

	    this.timeline = new mojs.Timeline();

	    this.timeline.add(this._addEyes(), this._addMouth());
	  };

	  Ball1.prototype._addEyes = function _addEyes() {
	    var _x, _y, _x2, _x3;

	    var eyeX = -5;
	    var opts = {
	      parent: this.eye1,
	      fill: _colors2.default.BLACK,
	      radius: 6.5,
	      scale: { .5: 1 },
	      isShowStart: true,
	      top: '50%',
	      left: '50%',
	      x: (_x = {}, _x[eyeX] = .5, _x),
	      y: .5,
	      easing: 'expo.in',
	      duration: _constants2.default.LINE1_DURATION,
	      isForce3d: true
	    };

	    var eyeReturn = {
	      delay: 2 * _constants2.default.LINE1_DURATION,
	      x: eyeX,
	      scale: .5
	    };

	    var eye1 = new mojs.Shape((0, _extends3.default)({}, opts)).then(eyeReturn);

	    var eye2 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      parent: this.eye2
	    })).then(eyeReturn);

	    var lidTimeline = new mojs.Timeline({ delay: _constants2.default.LINE1_DURATION });

	    var lidUp = { y: -2 };

	    var lidOpts = {
	      parent: this.eye1,
	      shape: 'rect',
	      fill: _colors2.default.BLACK,
	      top: '135%',
	      left: '50%',
	      radius: 10,
	      // delay:        C.LINE1_DURATION,
	      y: { 0: lidUp.y },
	      duration: 40,
	      timeline: { repeat: 5 },
	      isForce3d: true,
	      isRefreshState: false
	    };

	    var lidReturn = { y: lidUp.y - 5 };

	    var lid1 = new mojs.Shape(lidOpts).then(lidReturn).then(lidUp);

	    var lid2 = new mojs.Shape((0, _extends3.default)({}, lidOpts, {
	      parent: this.eye2
	    })).then(lidReturn).then(lidUp);

	    lidTimeline.add(lid1, lid2);

	    var yShift = 5;
	    var xShift = -3;
	    var angle = 35;
	    var browOpts = {
	      parent: this.face,
	      shape: 'line',
	      stroke: _colors2.default.BLACK,
	      radius: 8,
	      angle: { 0: angle },
	      left: '32%',
	      top: '30%',
	      y: (_y = {}, _y[yShift] = 0, _y),
	      x: (_x2 = {}, _x2[xShift] = 0, _x2),
	      strokeWidth: 3,
	      strokeLinecap: 'round',
	      isShowStart: true,
	      duration: 50,
	      delay: _constants2.default.LINE1_DURATION,
	      isForce3d: true
	    };

	    var brow1 = new mojs.Shape((0, _extends3.default)({}, browOpts, {
	      angle: { 0: -angle },
	      left: '72%',
	      x: (_x3 = {}, _x3[-xShift] = 0, _x3)
	    })).then({
	      angle: 0,
	      y: yShift,
	      x: -xShift,
	      delay: 2 * _constants2.default.LINE1_DURATION
	    });

	    var brow2 = new mojs.Shape(browOpts).then({
	      angle: 0,
	      y: yShift,
	      x: xShift,
	      delay: 2 * _constants2.default.LINE1_DURATION
	    });

	    return [eye1, eye2, lidTimeline, brow1, brow2];
	  };

	  Ball1.prototype._addMouth = function _addMouth() {
	    var _this2 = this;

	    var mouthDuration = 50;

	    var speechOpts = {
	      fill: _colors2.default.BLACK,
	      radiusX: 2,
	      radiusY: 1.5,
	      scaleX: { 1: 2.5 },
	      scaleY: { 1: 3.5 },
	      // isShowStart:  true,
	      parent: this.el,
	      left: '53%',
	      top: '77%',
	      duration: mouthDuration,
	      delay: 3 * _constants2.default.LINE1_DURATION,
	      x: { 0: -10 },
	      isForce3d: true
	    };

	    var speechReturn = {
	      scaleX: 1,
	      scaleY: 1
	    };

	    var speechMouth1 = new mojs.Shape(speechOpts).then((0, _extends3.default)({}, speechReturn, {
	      x: -8
	    })).then({
	      scaleX: 4,
	      scaleY: 2,
	      x: -6
	    }).then(speechReturn).then({
	      scaleX: 3,
	      scaleY: 4.5
	    }).then((0, _extends3.default)({}, speechReturn, {
	      isShowEnd: false
	    }));

	    var noise = mojs.easing.path('M0,100 L24.2114672,99.7029845 L27.0786839,106.645089 L29.2555809,93.3549108 L32.0340385,103.816964 L35.3459816,94.6015626 L38.3783493,103.092634 L41.0513382,95.9547991 L43.7739944,106.645089 L45.6729927,96.8973214 L50,105.083147 L53.3504448,93.3549108 L57.7360497,103.816964 L60.8616066,95.9547991 L65.0345993,103.092634 L68.6997757,97.5106029 L71.6646194,102.03125 L75.5066986,96.5672433 L78.2949219,102.652344 L81.0313873,96.8973214 L84.0174408,102.328264 L86.0842667,97.7332592 L88.7289352,101.606306 L91.1429977,98.3533763 L94.3822556,101.287388 L97.0809174,98.7254467 L100,100');

	    mojs.h.force3d(this.face);
	    mojs.h.force3d(this.face2);

	    var mouthNoize = new mojs.Tween({
	      duration: 3 * _constants2.default.LINE1_DURATION,
	      onUpdate: function onUpdate(ep, p) {
	        var proc = noise(p);
	        var transform1 = 'translateX(' + 25 * proc + 'px) translateY(' + -25 * proc + 'px)';
	        var transform2 = 'translateX(' + -15 * proc + 'px) translateY(' + 15 * proc + 'px)';
	        _this2.face2.style[mojs.h.prefix.css + 'transform'] = transform1;
	        _this2.face2.style['transform'] = transform1;
	        _this2.face.style[mojs.h.prefix.css + 'transform'] = transform2;
	        _this2.face.style['transform'] = transform2;
	      }
	    });

	    var angerMouthBackground = new mojs.Shape({
	      fill: 'white',
	      shape: 'rect',
	      top: '74%',
	      left: '50%',
	      parent: this.face2,
	      radiusY: 9.5,
	      easing: 'expo.out',
	      radiusX: 18,
	      rx: 12,
	      ry: 12,
	      duration: 2 * _constants2.default.LINE1_DURATION,
	      delay: _constants2.default.LINE1_DURATION,
	      isShowEnd: false,
	      isTimelineLess: true,
	      isForce3d: true
	    });

	    var angerMouth = new mojs.Shape({
	      fill: 'none',
	      shape: 'zigzag',
	      top: '76%',
	      left: '50%',
	      stroke: _colors2.default.BLACK,
	      strokeWidth: 2,
	      parent: this.face2,
	      radius: 5,
	      radiusX: 14,
	      y: 1,
	      points: 9,
	      duration: 2 * _constants2.default.LINE1_DURATION,
	      delay: _constants2.default.LINE1_DURATION,
	      isShowEnd: false,
	      isTimelineLess: true,
	      isForce3d: true
	    });

	    var disappointMouth = new mojs.Shape({
	      stroke: _colors2.default.BLACK,
	      strokeWidth: 3,
	      strokeLinecap: 'round',
	      fill: 'none',
	      radius: 6,
	      radiusX: 10,
	      isShowStart: true,
	      isShowEnd: false,
	      parent: this.el,
	      left: '50%',
	      top: '76%',
	      strokeDasharray: '35% 100%',
	      strokeDashoffset: '77%',
	      duration: _constants2.default.LINE1_DURATION,
	      isTimelineLess: true,
	      isForce3d: true
	    });

	    return [disappointMouth, speechMouth1, angerMouth, angerMouthBackground, mouthNoize];
	  };

	  return Ball1;
	}(_ball2.default);

	// new Trail({ parent: this.el, delay: 3.175*C.LINE1_DURATION }),
	// new RightTrail({ parent: this.el, delay: .65*C.LINE1_DURATION, isIt: true })
	exports.default = Ball1;

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = {
	  LINE1_DURATION: 400
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(41);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(77);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _ball = __webpack_require__(87);

	var _ball2 = _interopRequireDefault(_ball);

	var _colors = __webpack_require__(88);

	var _colors2 = _interopRequireDefault(_colors);

	var _constants = __webpack_require__(94);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Collision  from './collision';


	__webpack_require__(89);
	// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

	var Ball2 = function (_Ball) {
	  (0, _inherits3.default)(Ball2, _Ball);

	  function Ball2() {
	    (0, _classCallCheck3.default)(this, Ball2);
	    return (0, _possibleConstructorReturn3.default)(this, _Ball.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Ball2.prototype._render = function _render() {
	    _Ball.prototype._render.call(this);
	    this.el.classList.add('ball--2');
	    this._addEyes();
	  };
	  /*
	    Method to describe eyes motion.
	    @private
	  */


	  Ball2.prototype._addEyes = function _addEyes() {
	    var _angle;

	    var EYE_DURATION = 100;
	    var repeat = 2 * _constants2.default.LINE1_DURATION / EYE_DURATION - 1;
	    this.eyesTimeline = new mojs.Timeline({ repeat: repeat });
	    this.timeline = new mojs.Timeline();

	    var baseAngle = 160;
	    var opts = {
	      parent: this.face,
	      radius: 8,
	      fill: 'none',
	      stroke: _colors2.default.WHITE,
	      strokeWidth: 4,
	      // delay:         C.LINE1_DURATION,
	      duration: EYE_DURATION,
	      easing: 'expo.out',
	      isShowStart: true,
	      top: '49%',
	      strokeDasharray: { '50%': '70%' },
	      angle: (_angle = {}, _angle[baseAngle] = 145, _angle)
	    };

	    var returnOpts = {
	      strokeDasharray: '60%',
	      angle: baseAngle
	    };

	    var eye1 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      left: '28%'
	    })).then(returnOpts);

	    var eye2 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      left: '76.25%'
	    })).then(returnOpts);

	    var mouth = new mojs.Shape({
	      shape: 'zigzag',
	      parent: this.face,
	      fill: 'none',
	      stroke: _colors2.default.BLACK,
	      strokeWidth: 3,
	      points: 5,
	      radiusY: 4,
	      radius: 10,
	      // angle:       -45,
	      isShowStart: true,
	      top: '70%',
	      left: '52%',
	      duration: EYE_DURATION,
	      scale: { 1: 1.1 },
	      isForce3d: true
	    }).then({ scale: 1 });

	    var glareOpts = {
	      parent: this.face,
	      fill: _colors2.default.WHITE,
	      radius: 2.5,
	      opacity: .85,
	      left: '25%',
	      top: '47%',
	      duration: EYE_DURATION / 2,
	      isShowStart: true,
	      scale: { 1: 1.5 },
	      x: { 0: -2 },
	      y: { 0: -1 },
	      isForce3d: true
	    };

	    var glareReturnOpts = { scale: 1, x: 0, y: 0 };

	    var glare1 = new mojs.Shape(glareOpts).then(glareReturnOpts);
	    var glare2 = new mojs.Shape((0, _extends3.default)({}, glareOpts, {
	      radius: 2,
	      left: '72%',
	      top: '48%'
	    })).then(glareReturnOpts);

	    this.eyesTimeline.add(eye1, eye2, mouth, glare1, glare2);
	    this.timeline.add(this.eyesTimeline);
	  };

	  return Ball2;
	}(_ball2.default);

	// new Collision({ parent: this.el, delay: C.LINE1_DURATION, direction: -1 })
	exports.default = Ball2;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(41);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(77);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _ball = __webpack_require__(87);

	var _ball2 = _interopRequireDefault(_ball);

	var _colors = __webpack_require__(88);

	var _colors2 = _interopRequireDefault(_colors);

	var _constants = __webpack_require__(94);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(89);
	// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

	var Ball3 = function (_Ball) {
	  (0, _inherits3.default)(Ball3, _Ball);

	  function Ball3() {
	    (0, _classCallCheck3.default)(this, Ball3);
	    return (0, _possibleConstructorReturn3.default)(this, _Ball.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Ball3.prototype._render = function _render() {
	    _Ball.prototype._render.call(this);
	    this.el.classList.add('ball--3');

	    this.eye1 = this._createChild('div', 'ball__eye ball__eye--1');
	    this.eye2 = this._createChild('div', 'ball__eye ball__eye--2');

	    this.timeline = new mojs.Timeline();

	    var mouth = new mojs.Shape({
	      stroke: _colors2.default.BLACK,
	      strokeWidth: 3,
	      strokeLinecap: 'round',
	      fill: 'none',
	      radius: 6,
	      radiusX: 11,
	      isShowStart: true,
	      isShowEnd: true,
	      parent: this.el,
	      left: '52%',
	      top: '80%',
	      strokeDasharray: '35% 100%',
	      // strokeDashoffset: {'85%' : '75%' },
	      strokeDashoffset: '85%',
	      angle: { 0: 20 },
	      x: { 0: 5 },
	      scaleX: { 1: .85 },
	      duration: _constants2.default.LINE1_DURATION / 4,
	      delay: _constants2.default.LINE1_DURATION,
	      isForce3d: true
	    }).then({
	      angle: 0,
	      x: 0,
	      scaleX: 1,
	      delay: 1.75 * _constants2.default.LINE1_DURATION
	    });

	    this.timeline.add(this._addEyes(), this._addEyeBrows(), this._addEyeLids(), mouth);
	  };
	  /*
	    Method to describe eyes motion.
	    @private
	  */


	  Ball3.prototype._addEyes = function _addEyes() {
	    var _x;

	    var EYE_DURATION = 50;
	    var radiusX = 5;
	    var opts = {
	      parent: this.eye1,
	      radius: radiusX,
	      radiusY: radiusX + 1,
	      fill: _colors2.default.BLACK,
	      x: (_x = {}, _x[-radiusX] = radiusX, _x),
	      y: 1,
	      delay: _constants2.default.LINE1_DURATION,
	      duration: EYE_DURATION,
	      easing: 'expo.out',
	      isShowStart: true,
	      top: '53%',
	      left: '50%',
	      isForce3d: true
	    };

	    var returnOpts = {
	      delay: 2 * _constants2.default.LINE1_DURATION - EYE_DURATION,
	      x: -radiusX
	    };

	    var eye1 = new mojs.Shape((0, _extends3.default)({}, opts)).
	    // left:     '23.5%'
	    then(returnOpts);

	    var eye2 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      parent: this.eye2
	    })). // left:     '69.5%'
	    then(returnOpts);

	    return [eye1, eye2];
	  };
	  /*
	    Method to describe eyebrows motion.
	    @private
	  */


	  Ball3.prototype._addEyeBrows = function _addEyeBrows() {
	    var xShift = 8;
	    var duration = 50;

	    var browOpts = {
	      shape: 'curve',
	      stroke: _colors2.default.BLACK,
	      strokeWidth: 3,
	      strokeLinecap: 'round',
	      fill: 'none',
	      radiusY: 2,
	      radiusX: 6,
	      angle: 135,
	      isShowStart: true,
	      isShowEnd: true,
	      parent: this.el,
	      left: '25%',
	      top: '28%',
	      x: { 0: xShift },
	      y: { 0: xShift / 2 },
	      duration: duration,
	      delay: _constants2.default.LINE1_DURATION,
	      isForce3d: true,
	      isRefreshState: false
	    };
	    var brow1 = new mojs.Shape(browOpts).then({
	      x: -xShift / 4,
	      y: 0,
	      delay: 2 * _constants2.default.LINE1_DURATION - duration
	    });

	    var brow2 = new mojs.Shape((0, _extends3.default)({}, browOpts, {
	      angle: -browOpts.angle,
	      left: '79%',
	      top: '28%',
	      x: { 0: xShift / 4 },
	      y: 0
	    })).then({
	      x: -xShift,
	      delay: 2 * _constants2.default.LINE1_DURATION - duration
	    });

	    return [brow1, brow2];
	  };
	  /*
	    Method to describe eyelids motion.
	    @private
	  */


	  Ball3.prototype._addEyeLids = function _addEyeLids() {
	    var _y;

	    var yShift = 5;
	    var duration = 50;

	    var lidOpts = {
	      shape: 'rect',
	      fill: _colors2.default.BLACK,
	      radius: 10,
	      parent: this.eye1,
	      left: '50%',
	      top: '-32%',
	      y: (_y = {}, _y[yShift] = 1, _y),
	      duration: duration,
	      delay: _constants2.default.LINE1_DURATION,
	      isShowStart: true,
	      isShowEnd: true
	    };
	    var lid1 = new mojs.Shape(lidOpts);

	    var lid2 = new mojs.Shape((0, _extends3.default)({}, lidOpts, {
	      parent: this.eye2
	    }));

	    return [];
	  };

	  return Ball3;
	}(_ball2.default);

	exports.default = Ball3;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(41);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(77);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _ball = __webpack_require__(87);

	var _ball2 = _interopRequireDefault(_ball);

	var _colors = __webpack_require__(88);

	var _colors2 = _interopRequireDefault(_colors);

	var _constants = __webpack_require__(94);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Trail       from './trail';
	// import RightTrail  from './right-trail';
	// import Collision   from './collision';


	__webpack_require__(89);

	var Ball4 = function (_Ball) {
	  (0, _inherits3.default)(Ball4, _Ball);

	  function Ball4() {
	    (0, _classCallCheck3.default)(this, Ball4);
	    return (0, _possibleConstructorReturn3.default)(this, _Ball.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Ball4.prototype._render = function _render() {
	    var _strokeDasharray,
	        _angle,
	        _this2 = this;

	    _Ball.prototype._render.call(this);
	    this.el.classList.add('ball--4');

	    var timeline = new mojs.Timeline(),
	        startAngle = 0,
	        endAngle = 25,
	        dashStart = '30% 100%',
	        easing = mojs.easing.path('M0,100 L15,100 C47.3046875,-362.261716 100,5.68434189e-14 100,5.68434189e-14'),
	        scaleSize = .35;

	    this.face.style['backface-visibility'] = 'hidden';
	    this.face.style[mojs.h.prefix.css + 'backface-visibility'] = 'hidden';

	    var mouth = new mojs.Shape({
	      fill: 'none',
	      stroke: _colors2.default.BLACK,
	      strokeWidth: 3,
	      isShowStart: true,
	      parent: this.el,
	      radius: 13,
	      radiusX: 14,
	      left: '50%',
	      top: 75,
	      duration: _constants2.default.LINE1_DURATION / 2,
	      delay: _constants2.default.LINE1_DURATION,
	      strokeDasharray: (_strokeDasharray = {}, _strokeDasharray[dashStart] = '10% 100%', _strokeDasharray),
	      strokeDashoffset: '-60%',
	      angle: (_angle = {}, _angle[startAngle] = endAngle, _angle),
	      strokeLinecap: 'round',
	      onUpdate: function onUpdate(pe, p) {
	        _this2.face.style['transform'] = '\n          translateX(' + -10 * pe + 'px)\n          scaleY( ' + (1 - scaleSize * pe) + '  )\n          ';
	      }
	    }).then({
	      angle: startAngle,
	      delay: _constants2.default.LINE1_DURATION,
	      strokeDasharray: dashStart,
	      onUpdate: function onUpdate(pe, p) {
	        var proc = easing(p);
	        _this2.face.style['transform'] = '\n          translateX(' + -10 * (1 - p) + 'px)\n          scaleY( ' + (1 - scaleSize + scaleSize * proc) + '  )\n          ';
	      }
	    });

	    return timeline.add(mouth);
	  };

	  return Ball4;
	}(_ball2.default);

	// (new Trail({ parent: this.el, delay: 2.7*C.LINE1_DURATION })),
	// (new RightTrail({ parent: this.el, delay: 1.1*C.LINE1_DURATION })),
	// new Collision({ parent: this.el, delay: 3*C.LINE1_DURATION })
	exports.default = Ball4;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(40);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(41);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(77);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(86);

	var _module2 = _interopRequireDefault(_module);

	var _constants = __webpack_require__(94);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dust = function (_Module) {
	  (0, _inherits3.default)(Dust, _Module);

	  function Dust() {
	    (0, _classCallCheck3.default)(this, Dust);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  Dust.prototype._declareDefaults = function _declareDefaults() {
	    _Module.prototype._declareDefaults.call(this);
	    this._defaults.right = 0;
	    this._defaults.direction = 1;
	  };

	  Dust.prototype._render = function _render() {
	    var _dustOpts,
	        _this2 = this;

	    _Module.prototype._render.call(this);
	    var p = this._props;

	    this._setStyles();

	    var scene = document.querySelector('#js-scene');
	    scene.appendChild(this.el);

	    var dustOpts = (_dustOpts = {
	      parent: this.el,
	      // isShowStart: true,
	      radius: 20,
	      top: '100%',
	      left: '50%',
	      fill: 'white'
	    }, _dustOpts['radius'] = 'rand(3, 15)', _dustOpts.scale = { 1: 0 }, _dustOpts.isForce3d = true, _dustOpts.isTimelineLess = true, _dustOpts.x = { 0: 70 * p.direction }, _dustOpts.y = { 0: -20 }, _dustOpts.direction = this._props.direction, _dustOpts.swirlFrequency = 1, _dustOpts.swirlSize = 50, _dustOpts);

	    var dust = new mojs.Timeline();

	    for (var i = 0; i < 7; i++) {
	      dust.add(new mojs.ShapeSwirl((0, _extends3.default)({}, dustOpts, {
	        delay: p.delay + i * 45
	      })));
	    }

	    var dustTrail = new mojs.Timeline();

	    for (var i = 0; i < 2; i++) {

	      var dirCoef = i % 2 === 0 ? 1 : -1;
	      var direction = dirCoef * this._props.direction;
	      var pathScale = i % 2 === 0 ? 1 : .75;

	      dustTrail.add(new mojs.ShapeSwirl((0, _extends3.default)({}, dustOpts, {
	        delay: p.delay + 200 + i * 45,
	        direction: direction,
	        pathScale: pathScale,
	        swirlSize: 10,
	        swirlFrequency: 3
	      })));
	    }

	    var dustTween = new mojs.Tween({
	      onUpdate: function onUpdate(p) {
	        _this2.el.style['transform'] = 'translateX(' + -120 * p * _this2._props.direction + 'px)';
	      },
	      delay: p.delay,
	      duration: _constants2.default.LINE1_DURATION / 2
	    });

	    this.timeline = new mojs.Timeline();
	    this.timeline.add(dust, dustTrail, dustTween);
	  };
	  /*
	    Method to set `el` styles.
	    @private
	  */


	  Dust.prototype._setStyles = function _setStyles() {
	    this.el.style['overflow'] = 'hidden';
	    this.el.style['position'] = 'absolute';
	    // this.el.style[ 'border' ] = '1px solid white';
	    this.el.style['width'] = '140px';
	    this.el.style['height'] = '40px';
	    this.el.style['backface-visibility'] = 'hidden';
	    this.el.style[mojs.h.prefix.css + 'backface-visibility'] = 'hidden';
	    this.el.style['bottom'] = '38px';
	    this.el.style['right'] = this._props.right;
	  };

	  return Dust;
	}(_module2.default);

	exports.default = Dust;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(92)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./main.postcss.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./main.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(91)();
	// imports


	// module
	exports.push([module.id, "body, html {\n  font-size: 16px;\n}\n\n\n", ""]);

	// exports


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(92)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./line.postcss.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./line.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(91)();
	// imports


	// module
	exports.push([module.id, ".line {\n}\n.line:before, .line:after {\n    content: '';\n    position: absolute\n}\n.line:before {\n    width: 16px;\n    width: 1rem;\n    height: 10px;\n    height: 0.625rem;\n    border-radius: 1rem;\n    background: #29363B;\n    top: 50%;\n    left: 1px;\n    left: 0.0625rem;\n    margin-top: -5px;\n    margin-top: -0.3125rem;\n    margin-left: -16px;\n    margin-left: -1rem\n}", ""]);

	// exports


/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {
		"line": "_line_13xym_3"
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(92)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./scene.postcss.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./scene.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(91)();
	// imports


	// module
	exports.push([module.id, ".scene {\n  /*outline:      1px solid white;*/\n  width:        400px;\n  width:        25rem;\n  height:        370px;\n  height:       23.125rem;\n  position:     absolute;\n  left:         50%;\n  top:          50%;\n  margin-left:        -200px;\n  margin-left:  -12.5rem;\n  margin-top:        -185px;\n  margin-top:   -11.5625rem\n}\n.scene__bar {\n  background:        #29363B;\n  height:        4px;\n  height:        0.25rem;\n  border-radius:        0.9375rem\n}\n.scene__dust {\n  width:        240px;\n  width:        15rem;\n  height:        200px;\n  height:        12.5rem;\n  /*border: 1px solid white;*/\n  position:        absolute;\n  bottom:        37.5px;\n  bottom:        2.34375rem;\n  right:        -180px;\n  right:        -11.25rem;\n  overflow:        hidden;\n  z-index:        1\n}\n.scene__bar-handle {\n  position:        absolute;\n  width:        10px;\n  width:        0.625rem;\n  height:        16px;\n  height:        1rem;\n  border-radius:        0.625rem;\n  background:        #29363B;\n  top:        -5px;\n  top:        -0.3125rem;\n  z-index:        1\n}\n.scene__bar-handle:nth-of-type(1) {\n  margin-left:        47px;\n  margin-left:        2.9375rem\n}\n.scene__bar-handle:nth-of-type(2) {\n  margin-left:        143px;\n  margin-left:        8.9375rem\n}\n.scene__bar-handle:nth-of-type(3) {\n  margin-left:        239px;\n  margin-left:        14.9375rem\n}\n.scene__bar-handle:nth-of-type(4) {\n  margin-left:        335px;\n  margin-left:        20.9375rem\n}", ""]);

	// exports


/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = {
		"scene": "_scene_y2oup_5"
	};

/***/ }
/******/ ]);