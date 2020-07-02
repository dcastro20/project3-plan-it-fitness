module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+8zO":
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3Qq1");


/***/ }),

/***/ "3Qq1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PJMN");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+8zO");
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zb5a");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("L2qT");




_sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default.a.setApiKey("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");
const handler = next_connect__WEBPACK_IMPORTED_MODULE_2___default()();
handler.use(_middlewares_middleware__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
handler.post(async (req, res) => {
  if (!req.user) {
    res.json(401).send('you need to be authenticated');
    return;
  }

  const token = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.randomBytes(32).toString('hex');
  await req.db.collection('tokens').insertOne({
    token,
    userId: req.user._id,
    type: 'emailVerify',
    expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24)
  });
  const msg = {
    to: req.user.email,
    from: "averyniceguy@nextjs-mongodb.now.sh",
    html: `
      <div>
        <p>Hello, ${req.user.name}</p>
        <p>Please follow <a href="${"https://nextjs-mongodb.now.sh"}/verify-email/${token}">this link</a> to confirm your email.</p>
      </div>
      `
  };
  await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_1___default.a.send(msg);
  res.end('ok');
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "6rmH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setUpDb */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return database; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ykE2");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"]("mongodb+srv://testuser:dontreusethis@cluster0-gc0a7.mongodb.net/nextjsmongodbapp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
async function setUpDb(db) {
  db.collection('tokens').createIndex({
    expireAt: -1
  }, {
    expireAfterSeconds: 0
  });
  db.collection('posts').createIndex({
    createdAt: -1
  });
  db.collection('users').createIndex({
    email: 1
  }, {
    unique: true
  });
}
async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("nextjsmongodbapp");
  await setUpDb(req.db);
  return next();
}

/***/ }),

/***/ "CPU0":
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "ELJM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CPU0");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yFn1");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wFKw");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);



passport__WEBPACK_IMPORTED_MODULE_0___default.a.serializeUser((user, done) => {
  done(null, user._id);
}); // passport#160

passport__WEBPACK_IMPORTED_MODULE_0___default.a.deserializeUser((req, id, done) => {
  req.db.collection('users').findOne({
    _id: id
  }).then(user => done(null, user));
});
passport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_local__WEBPACK_IMPORTED_MODULE_2__["Strategy"]({
  usernameField: 'email',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await req.db.collection('users').findOne({
    email
  });
  if (user && (await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password))) done(null, user);else done(null, false, {
    message: 'Email or password is incorrect'
  });
}));
/* harmony default export */ __webpack_exports__["a"] = (passport__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "H5g9":
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "Knog":
/***/ (function(module, exports) {

module.exports = require("next-session");

/***/ }),

/***/ "L2qT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-connect"
var external_next_connect_ = __webpack_require__("Zb5a");
var external_next_connect_default = /*#__PURE__*/__webpack_require__.n(external_next_connect_);

// EXTERNAL MODULE: ./middlewares/database.js
var database = __webpack_require__("6rmH");

// EXTERNAL MODULE: external "next-session"
var external_next_session_ = __webpack_require__("Knog");

// EXTERNAL MODULE: external "connect-mongo"
var external_connect_mongo_ = __webpack_require__("H5g9");
var external_connect_mongo_default = /*#__PURE__*/__webpack_require__.n(external_connect_mongo_);

// CONCATENATED MODULE: ./middlewares/session.js


const MongoStore = external_connect_mongo_default()(external_next_session_["expressSession"]);
/* harmony default export */ var session = (function (req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false
  });
  return Object(external_next_session_["session"])({
    store: Object(external_next_session_["promisifyStore"])(mongoStore)
  })(req, res, next);
});
// EXTERNAL MODULE: ./lib/passport.js
var passport = __webpack_require__("ELJM");

// CONCATENATED MODULE: ./middlewares/middleware.js




const middleware = external_next_connect_default()();
middleware.use(database["a" /* default */]).use(session).use(passport["a" /* default */].initialize()).use(passport["a" /* default */].session());
/* harmony default export */ var middlewares_middleware = __webpack_exports__["a"] = (middleware);

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "Zb5a":
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "wFKw":
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "yFn1":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });