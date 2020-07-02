module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "6rmH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setUpDb */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return database; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ykE2");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"](process.env.MONGODB_URI, {
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
  req.db = client.db(process.env.DB_NAME);
  await setUpDb(req.db);
  return next();
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("V034");


/***/ }),

/***/ "7+yl":
/***/ (function(module, exports) {

// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'

module.exports = { urlAlphabet }


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

/***/ "R+uO":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ "V034":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Zb5a");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R+uO");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tRXC");
/* harmony import */ var validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yFn1");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k4gg");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("L2qT");
/* harmony import */ var _lib_api_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnZh");







const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middlewares_middleware__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
handler.post(async (req, res) => {
  const {
    name,
    password
  } = req.body;
  const email = validator_lib_normalizeEmail__WEBPACK_IMPORTED_MODULE_2___default()(req.body.email);

  if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default()(email)) {
    res.status(400).send('The email you entered is invalid.');
    return;
  }

  if (!password || !name) {
    res.status(400).send('Missing field(s)');
    return;
  }

  if ((await req.db.collection('users').countDocuments({
    email
  })) > 0) {
    res.status(403).send('The email has already been used.');
    return;
  }

  const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default.a.hash(password, 10);
  const user = await req.db.collection('users').insertOne({
    _id: Object(nanoid__WEBPACK_IMPORTED_MODULE_4__["nanoid"])(12),
    email,
    password: hashedPassword,
    name,
    emailVerified: false,
    bio: '',
    profilePicture: null
  }).then(({
    ops
  }) => ops[0]);
  req.logIn(user, err => {
    if (err) throw err;
    res.status(201).json({
      user: Object(_lib_api_helpers__WEBPACK_IMPORTED_MODULE_6__[/* extractUser */ "a"])(req)
    });
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "Zb5a":
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "k4gg":
/***/ (function(module, exports, __webpack_require__) {

let crypto = __webpack_require__("PJMN")

let { urlAlphabet } = __webpack_require__("7+yl")

// We reuse buffers with the same size to avoid memory fragmentations
// for better performance.
let buffers = {}
let random = bytes => {
  let buffer = buffers[bytes]
  if (!buffer) {
    // `Buffer.allocUnsafe()` is faster because it doesn’t flush the memory.
    // Memory flushing is unnecessary since the buffer allocation itself resets
    // the memory with the new bytes.
    buffer = Buffer.allocUnsafe(bytes)
    if (bytes <= 255) buffers[bytes] = buffer
  }
  return crypto.randomFillSync(buffer)
}

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).
  let step = Math.ceil((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let i = step
      while (i--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[i] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let bytes = random(size)
  let id = ''
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    id += urlAlphabet[bytes[size] & 63]
  }
  return id
}

module.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }


/***/ }),

/***/ "pnZh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractUser; });
// take only needed user fields to avoid sensitive ones (such as password)
function extractUser(req) {
  if (!req.user) return null;
  const {
    _id,
    name,
    email,
    bio,
    profilePicture,
    emailVerified
  } = req.user;
  return {
    _id,
    name,
    email,
    bio,
    profilePicture,
    emailVerified
  };
}

/***/ }),

/***/ "tRXC":
/***/ (function(module, exports) {

module.exports = require("validator/lib/normalizeEmail");

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