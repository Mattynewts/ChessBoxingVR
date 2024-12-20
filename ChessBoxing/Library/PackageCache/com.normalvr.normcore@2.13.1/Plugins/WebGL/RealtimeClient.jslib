const NormcoreNative = {
  $UnityClient: {},
  $UnityClient__postset: `(function() { function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function createCommonjsModule(fn) {
  var module = {
    exports: {}
  };
  return fn(module, module.exports), module.exports;
}

createCommonjsModule(function (module) {
  var runtime = function (exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap;

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator;

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        return info;
      }

      context.delegate = null;
      return ContinueSentinel;
    }

    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse();
      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      }

      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };
    return exports;
  }(module.exports);

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var Instance = function () {
  function Instance() {
    _classCallCheck(this, Instance);
  }

  _createClass(Instance, null, [{
    key: "Create",
    value: function Create(instance) {
      var pointer = this.__nextInstancePointer++;

      this.__instances.set(pointer, instance);

      return pointer;
    }
  }, {
    key: "Delete",
    value: function Delete(pointer) {
      var instance = this.Get(pointer);
      instance.dealloc();

      this.__instances["delete"](pointer);
    }
  }, {
    key: "Get",
    value: function Get(pointer) {
      return this.__instances.get(pointer);
    }
  }]);

  return Instance;
}();

Instance.__instances = new Map();
Instance.__nextInstancePointer = 1;

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: "version",
    value: function version() {
      return "".concat(Config.MajorVersion, ".").concat(Config.MinorVersion, ".").concat(Config.PatchVersion);
    }
  }]);

  return Config;
}();

Config.MajorVersion = 2;
Config.MinorVersion = 12;
Config.PatchVersion = 0;

var Debug = function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "log",
    value: function log(message) {
      var _console;

      for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        optionalParams[_key - 1] = arguments[_key];
      }

      (_console = console).log.apply(_console, ['Normcore [Log]:', message].concat(optionalParams));
    }
  }, {
    key: "error",
    value: function error(message) {
      var _console2;

      for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        optionalParams[_key2 - 1] = arguments[_key2];
      }

      (_console2 = console).error.apply(_console2, ['Normcore [Error]:', message].concat(optionalParams));
    }
  }]);

  return Debug;
}();

var getRandomValues;
var rnds8 = new Uint8Array(16);

function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var Validate = function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: "property",
    value: function property(requestData, propertyName, typeName) {
      var propertyValue = requestData[propertyName];
      if (_typeof(propertyValue) != typeName) throw new Error("Missing or invalid ".concat(propertyName, " property. (").concat(propertyValue, " of type (").concat(_typeof(propertyValue), ") (requestData: ").concat(requestData, ")"));
    }
  }]);

  return Validate;
}();

var BidirectionalInternal = function () {
  function BidirectionalInternal() {
    _classCallCheck(this, BidirectionalInternal);
  }

  _createClass(BidirectionalInternal, null, [{
    key: "validateMessage",
    value: function validateMessage(message) {
      if (message == null) throw new Error('Message is null');
      Validate.property(message, 'messageType', 'string');
      if (message.messageType == '') throw new Error('Message type is empty');
    }
  }, {
    key: "validateRequestMessage",
    value: function validateRequestMessage(message) {
      if (message == null) throw new Error('Request message is null');
      if (message.requestGUID == null) throw new Error('Request guid property is null');
      if (message.requestType == null) throw new Error('Request type property is null');
      if (message.requestData == null) throw new Error('Request data property is null');
      Validate.property(message, 'requestGUID', 'string');
      Validate.property(message, 'requestType', 'string');
      if (message.requestGUID == '') throw new Error('Request guid is empty');
      if (message.requestType == '') throw new Error('Request type is empty');
    }
  }, {
    key: "validateRequestResponseMessage",
    value: function validateRequestResponseMessage(message) {
      if (message == null) throw new Error('Request response message is null');
      if (message.requestGUID == null) throw new Error('Request response guid property is null');
      if (message.status == null) throw new Error('Request response status property is null');
      Validate.property(message, 'requestGUID', 'string');
      Validate.property(message, 'status', 'string');
      if (message.requestGUID == '') throw new Error('Request response guid is empty');
      if (message.status != 'success' && message.status != 'error') throw new Error('Request response status is invalid');
      if (message.status == 'success' && message.responseData == null) throw new Error('Request response is successful but has no responseData');
    }
  }]);

  return BidirectionalInternal;
}();

(function (BidirectionalInternal) {
  var RequestState;

  (function (RequestState) {
    RequestState[RequestState["RequestCreated"] = 0] = "RequestCreated";
    RequestState[RequestState["RequestSent"] = 1] = "RequestSent";
    RequestState[RequestState["RequestReceivedSuccess"] = 2] = "RequestReceivedSuccess";
    RequestState[RequestState["RequestReceivedError"] = 3] = "RequestReceivedError";
    RequestState[RequestState["RequestFailed"] = 4] = "RequestFailed";
  })(RequestState = BidirectionalInternal.RequestState || (BidirectionalInternal.RequestState = {}));

  var Request = function () {
    function Request(requestType, requestData, timeout) {
      var _this = this;

      _classCallCheck(this, Request);

      this.timeoutTimer = null;
      this._promise = new Promise(function (resolve, reject) {
        _this._promiseResolve = resolve;
        _this._promiseReject = reject;
      });
      this._guid = v4();
      this._type = requestType;
      this._data = requestData;
      this._timeout = timeout;
      this._state = RequestState.RequestCreated;
    }

    _createClass(Request, [{
      key: "getRequestMessageAndMarkSent",
      value: function getRequestMessageAndMarkSent() {
        if (this.hasSentRequest) {
          Debug.error("BidirectionalInternal: Request has already been sent. This is a bug!");
          return;
        }

        var requestMessage = {
          messageType: 'Request',
          requestGUID: this._guid,
          requestType: this._type,
          requestData: this._data
        };
        this._state = RequestState.RequestSent;
        return requestMessage;
      }
    }, {
      key: "resolveSuccess",
      value: function resolveSuccess(responseData) {
        if (this.stateFinalized) {
          Debug.error("BidirectionalInternal: Request succeeded while already in a success, error, or failed state (".concat(this._state, "). Ignoring. This is a bug!"));
          return;
        }

        this._responseData = responseData;
        this._state = RequestState.RequestReceivedSuccess;
        if (this._promiseResolve != undefined) this._promiseResolve(responseData);
      }
    }, {
      key: "rejectError",
      value: function rejectError(errorMessage) {
        if (this.stateFinalized) {
          Debug.error("BidirectionalInternal: Request errored while already in a success, error, or failed state (".concat(this._state, "). Ignoring. This is a bug!"));
          return;
        }

        this._errorMessage = errorMessage;
        this._state = RequestState.RequestReceivedError;
        if (this._promiseReject != undefined) this._promiseReject(errorMessage);
      }
    }, {
      key: "rejectFail",
      value: function rejectFail(failMessage) {
        if (this.stateFinalized) {
          Debug.error("BidirectionalInternal: Request failed while already in a success, error, or failed state (".concat(this._state, "). Ignoring. This is a bug!"));
          return;
        }

        this._failMessage = failMessage;
        this._state = RequestState.RequestFailed;
        if (this._promiseReject != undefined) this._promiseReject(failMessage);
      }
    }, {
      key: "promise",
      get: function get() {
        return this._promise;
      }
    }, {
      key: "guid",
      get: function get() {
        return this._guid;
      }
    }, {
      key: "type",
      get: function get() {
        return this._type;
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      }
    }, {
      key: "timeout",
      get: function get() {
        return this._timeout;
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      }
    }, {
      key: "hasSentRequest",
      get: function get() {
        return this._state != RequestState.RequestCreated;
      }
    }, {
      key: "stateFinalized",
      get: function get() {
        return this._state == RequestState.RequestReceivedSuccess || this._state == RequestState.RequestReceivedError || this._state == RequestState.RequestFailed;
      }
    }, {
      key: "responseData",
      get: function get() {
        return this._responseData;
      }
    }, {
      key: "errorMessage",
      get: function get() {
        return this._errorMessage;
      }
    }, {
      key: "failMessage",
      get: function get() {
        return this._failMessage;
      }
    }]);

    return Request;
  }();

  BidirectionalInternal.Request = Request;
})(BidirectionalInternal || (BidirectionalInternal = {}));

var BidirectionalInternal$1 = BidirectionalInternal;

var BidirectionalClient = function () {
  function BidirectionalClient(delegate, options) {
    var _this2 = this;

    _classCallCheck(this, BidirectionalClient);

    this._receivedPong = true;
    this._pendingRequests = new Map();
    this._delegate = delegate;
    var url = options.url;
    var websocket = this._websocket = new WebSocket(url);

    websocket.onmessage = function (event) {
      var messageJSON = event.data;
      var message;

      try {
        if (typeof messageJSON != "string") {
          throw {
            error: "WebSocket received message of non string buffer type",
            context: messageJSON
          };
        }

        message = JSON.parse(messageJSON);
      } catch (error) {
        Debug.error('BidirectionalClient: Unable to parse incoming message from client. Disconnecting.');
        Debug.error(error);
        websocket.close(4001, "Invalid message.");
      }

      try {
        BidirectionalInternal$1.validateMessage(message);
      } catch (exception) {
        Debug.error('BidirectionalClient: Received invalid message! Ignoring.', message);
        return;
      }

      switch (message.messageType) {
        case "Request":
          _this2.processRequestMessage(message);

          break;

        case "RequestResponse":
          _this2.processRequestResponseMessage(message);

          break;

        default:
          Debug.error('BidirectionalClient: Invalid message type received.', message.messageType);
          break;
      }
    };

    websocket.onopen = function (event) {
      try {
        var pendingRequests = Array.from(_this2._pendingRequests);

        for (var _i = 0, _pendingRequests = pendingRequests; _i < _pendingRequests.length; _i++) {
          var _pendingRequests$_i = _slicedToArray(_pendingRequests[_i], 2),
              request = _pendingRequests$_i[1];

          _this2.sendRequestIfNeeded(request);
        }
      } catch (exception) {
        console.error('BidirecitonalClient: Exception!! I am unsure why this happens, but I added a try/catch for right now. I think it is a transpiling related bug', exception);
      }

      _this2._delegate.onClientConnect(_this2);
    };

    websocket.onclose = function (event) {
      var closeEvent = event.code;
      var pendingRequests = Array.from(_this2._pendingRequests);

      for (var _i2 = 0, _pendingRequests2 = pendingRequests; _i2 < _pendingRequests2.length; _i2++) {
        var _pendingRequests2$_i = _slicedToArray(_pendingRequests2[_i2], 2),
            request = _pendingRequests2$_i[1];

        request.rejectFail("Connection closed (".concat(closeEvent, ")."));
      }

      _this2._pendingRequests.clear();

      _this2._delegate.onClientDisconnect(_this2, closeEvent);
    };

    websocket.onerror = function (event) {
      var pendingRequests = Array.from(_this2._pendingRequests);

      for (var _i3 = 0, _pendingRequests3 = pendingRequests; _i3 < _pendingRequests3.length; _i3++) {
        var _pendingRequests3$_i = _slicedToArray(_pendingRequests3[_i3], 2),
            request = _pendingRequests3$_i[1];

        request.rejectFail("Web socket threw an error.");
      }

      _this2._pendingRequests.clear();

      _this2._delegate.onClientError(_this2, Error('Web Socket threw an error.'));
    };
  }

  _createClass(BidirectionalClient, [{
    key: "close",
    value: function close() {
      this._websocket.close();
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(message) {
      var messageJSON = JSON.stringify(message);

      if (this._websocket.readyState === WebSocket.OPEN) {
        this._websocket.send(messageJSON);
      } else {
        throw {
          error: 'BidirectionalClient: Attempting to send message to a disconnected client. This is a bug!'
        };
      }
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(requestType, requestData, timeout) {
      var request = new BidirectionalClient.OutgoingRequest(requestType, requestData, timeout);

      this._pendingRequests.set(request.guid, request);

      if (this.connected) this.sendRequestIfNeeded(request);
      return request;
    }
  }, {
    key: "sendRequestIfNeeded",
    value: function sendRequestIfNeeded(request) {
      var _this3 = this;

      if (request.hasSentRequest) return;
      var message = request.getRequestMessageAndMarkSent();

      if (message == null) {
        Debug.error("BidirectionalClient: Request returned empty message. Has it already been sent? This is a bug.");
        return;
      }

      request.timeoutTimer = setTimeout(function () {
        _this3.rejectRequestFail(request, "Request timed out after ".concat(request.timeout, " seconds!"));
      }, request.timeout * 1000);
      this.sendMessage(message);
    }
  }, {
    key: "processRequestResponseMessage",
    value: function processRequestResponseMessage(message) {
      try {
        BidirectionalInternal$1.validateRequestResponseMessage(message);
      } catch (exception) {
        Debug.error('BidirectionalClient: Received invalid request response message! Ignoring.', exception);
        Debug.error('Message:', message);
        return;
      }

      var request = this._pendingRequests.get(message.requestGUID);

      if (!request) {
        Debug.error('BidirectionalClient: Received RequestResponse message without a valid corresponding request object. This is a bug!', message);
        return;
      }

      var status = message.status;

      if (!status) {
        Debug.error('BidirectionalClient: Received RequestResponse message with invalid response status. Ignoring message.');
        return;
      }

      if (status == 'success') {
        this.resolveRequestSuccess(request, message.responseData);
      } else if (status == 'error' && message.errorMessage) {
        this.rejectRequestError(request, message.errorMessage);
      } else {
        this.rejectRequestFail(request, 'Received request response with invalid status.');
      }
    }
  }, {
    key: "resolveRequestSuccess",
    value: function resolveRequestSuccess(request, responseData) {
      this.clearRequest(request);
      request.resolveSuccess(responseData);
    }
  }, {
    key: "rejectRequestError",
    value: function rejectRequestError(request, errorMessage) {
      this.clearRequest(request);
      request.rejectError(errorMessage);
    }
  }, {
    key: "rejectRequestFail",
    value: function rejectRequestFail(request, failMessage) {
      this.clearRequest(request);
      request.rejectFail(failMessage);
    }
  }, {
    key: "clearRequest",
    value: function clearRequest(request) {
      if (request.timeoutTimer != null) {
        clearTimeout(request.timeoutTimer);
        request.timeoutTimer = null;
      }

      this._pendingRequests["delete"](request.guid);
    }
  }, {
    key: "processRequestMessage",
    value: function processRequestMessage(message) {
      var _this4 = this;

      try {
        BidirectionalInternal$1.validateRequestMessage(message);
      } catch (exception) {
        Debug.error('BidirectionalClient: Received invalid request message! Ignoring.', message);
        return;
      }

      var requestGUID = message.requestGUID;
      var request = {
        guid: message.requestGUID,
        type: message.requestType,
        data: message.requestData
      };

      var onClientRequestPromise = this._delegate.onClientRequest(this, request);

      onClientRequestPromise.then(function (responseData) {
        var message = {
          messageType: 'RequestResponse',
          requestGUID: requestGUID,
          status: 'success',
          responseData: responseData
        };

        try {
          _this4.sendMessage(message);
        } catch (error) {
          console.error('Failed to send request response message.', error);
        }
      })["catch"](function (error) {
        Debug.error('BidirectionalClient: onClientRequest threw error', error);
        var errorMessage = error.error;

        if (!errorMessage) {
          errorMessage = "Fail to handle request";
          Debug.error('BidirectionalClient: onClientRequest error was a system exception!');
        }

        var message = {
          messageType: 'RequestResponse',
          requestGUID: requestGUID,
          status: 'error',
          errorMessage: errorMessage,
          errorContext: ''
        };

        try {
          if (error.context != null) message.errorContext = JSON.stringify(error.context);
        } catch (_unused) {
          Debug.error('BidirectionalClient: Unable to convert error context to string to send back to client.');
        }

        try {
          _this4.sendMessage(message);
        } catch (error) {
          console.error('Failed to send request response error message.', error);
        }
      });
    }
  }, {
    key: "connected",
    get: function get() {
      return this._websocket.readyState === WebSocket.OPEN;
    }
  }]);

  return BidirectionalClient;
}();

(function (BidirectionalClient) {
  var OutgoingRequest = function (_BidirectionalInterna) {
    _inherits(OutgoingRequest, _BidirectionalInterna);

    var _super = _createSuper(OutgoingRequest);

    function OutgoingRequest() {
      _classCallCheck(this, OutgoingRequest);

      return _super.apply(this, arguments);
    }

    return OutgoingRequest;
  }(BidirectionalInternal$1.Request);

  BidirectionalClient.OutgoingRequest = OutgoingRequest;
})(BidirectionalClient || (BidirectionalClient = {}));

var BidirectionalClient$1 = BidirectionalClient;

var Matcher = function () {
  function Matcher(matcherURL) {
    _classCallCheck(this, Matcher);

    this._client = new BidirectionalClient$1(this, {
      url: matcherURL
    });
    this._requests = new Map();
  }

  _createClass(Matcher, [{
    key: "dealloc",
    value: function dealloc() {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "tick",
    value: function tick() {}
  }, {
    key: "getRequestState",
    value: function getRequestState(requestGUID) {
      var request = this._requests.get(requestGUID);

      if (request == null) return -1;
      return request.state;
    }
  }, {
    key: "getRequestErrorMessage",
    value: function getRequestErrorMessage(requestGUID) {
      var _request$errorMessage;

      var request = this._requests.get(requestGUID);

      if (request == null) return "";
      return (_request$errorMessage = request.errorMessage) !== null && _request$errorMessage !== void 0 ? _request$errorMessage : "";
    }
  }, {
    key: "getRequestFailMessage",
    value: function getRequestFailMessage(requestGUID) {
      var _request$failMessage;

      var request = this._requests.get(requestGUID);

      if (request == null) return "";
      return (_request$failMessage = request.failMessage) !== null && _request$failMessage !== void 0 ? _request$failMessage : "";
    }
  }, {
    key: "clearRequest",
    value: function clearRequest(requestGUID) {
      if (!this._requests["delete"](requestGUID)) Debug.error("Matcher: ClearRequest called, but request GUID does not exist or was aleady removed. (".concat(requestGUID, ")"));
    }
  }, {
    key: "connectToRoom",
    value: function connectToRoom(requestType, appKey, appMetadataJSONString, roomName, roomServerOptionsJSONString, clientOffer, webhookContext) {
      var requestData = {
        "appKey": appKey,
        "normcoreVersion": Config.version(),
        "appMetadata": JSON.parse(appMetadataJSONString),
        "roomName": roomName,
        "clientOffer": clientOffer,
        "clusterPingResults": [{
          "address": "35.241.138.201",
          "name": "gke_normcore_europe-west1_europe-west1",
          "ping": -1
        }, {
          "address": "35.221.28.57",
          "name": "gke_normcore_us-east4_us-east4",
          "ping": -1
        }, {
          "address": "35.237.27.129",
          "name": "gke_normcore_us-east1_us-east1",
          "ping": -1
        }, {
          "address": "35.203.155.114",
          "name": "gke_normcore_us-west1_us-west1",
          "ping": -1
        }]
      };
      if (webhookContext != null) requestData['webhookContext'] = webhookContext;
      if (roomServerOptionsJSONString != null) requestData["roomServerOptions"] = JSON.parse(roomServerOptionsJSONString);

      var request = this._client.sendRequest(requestType, requestData, 120.0);

      var requestGUID = request.guid;

      this._requests.set(requestGUID, request);

      return requestGUID;
    }
  }, {
    key: "connectToMediaRoom",
    value: function connectToMediaRoom(appKey, roomName) {
      var requestData = {
        "appKey": appKey,
        "normcoreVersion": Config.version(),
        "roomName": roomName,
        "clusterPingResults": [{
          "address": "35.241.138.201",
          "name": "gke_normcore_europe-west1_europe-west1",
          "ping": -1
        }, {
          "address": "35.221.28.57",
          "name": "gke_normcore_us-east4_us-east4",
          "ping": -1
        }, {
          "address": "35.237.27.129",
          "name": "gke_normcore_us-east1_us-east1",
          "ping": -1
        }, {
          "address": "35.203.155.114",
          "name": "gke_normcore_us-west1_us-west1",
          "ping": -1
        }]
      };

      var request = this._client.sendRequest("ConnectToMediaRoom", requestData, 120.0);

      var requestGUID = request.guid;

      this._requests.set(requestGUID, request);

      return requestGUID;
    }
  }, {
    key: "getConnectToRoomRequestResponseType",
    value: function getConnectToRoomRequestResponseType(requestGUID) {
      var responseData = this.getRequestResponseData(requestGUID);
      if (responseData == null) return "";
      var responseType = responseData.response;

      if (typeof responseType != 'string') {
        Debug.error("Matcher: Received response from matcher, but it doesn't contain a valid response field.", responseData);
        return "";
      }

      return responseType;
    }
  }, {
    key: "getConnectToRoomRequestClustersToPingCount",
    value: function getConnectToRoomRequestClustersToPingCount(requestGUID) {
      return 0;
    }
  }, {
    key: "getConnectToRoomRequestClustersToPingNameAtIndex",
    value: function getConnectToRoomRequestClustersToPingNameAtIndex(requestGUID, index) {
      return "";
    }
  }, {
    key: "getConnectToRoomRequestClustersToPingAddressAtIndex",
    value: function getConnectToRoomRequestClustersToPingAddressAtIndex(requestGUID, index) {
      return "";
    }
  }, {
    key: "getConnectToRoomRequestFoundRoomResponse",
    value: function getConnectToRoomRequestFoundRoomResponse(requestGUID) {
      var responseData = this.getRequestResponseDataValidateResponseType(requestGUID, "FoundRoom");
      if (responseData == null) return "";
      return JSON.stringify(responseData);
    }
  }, {
    key: "getRequestResponseData",
    value: function getRequestResponseData(requestGUID) {
      var request = this._requests.get(requestGUID);

      if (request == null) return undefined;
      var responseData = request.responseData;

      if (_typeof(responseData) != 'object') {
        Debug.error("Matcher: Received response from matcher with invalid responseData object.", responseData);
        return null;
      }

      return responseData;
    }
  }, {
    key: "getRequestResponseDataValidateResponseType",
    value: function getRequestResponseDataValidateResponseType(requestGUID, expectedResponseType) {
      var responseData = this.getRequestResponseData(requestGUID);
      if (responseData == null) return responseData;
      var responseType = responseData.response;

      if (typeof responseType != 'string') {
        Debug.error("Matcher: Received response from matcher, but it doesn't contain a valid response field.", responseData);
        return null;
      }

      if (responseType != expectedResponseType) {
        Debug.error("Matcher: Attempting to get request response data, but response type doesn't match '".concat(expectedResponseType, "' (").concat(responseType, ")."));
        return null;
      }

      return responseData;
    }
  }, {
    key: "onClientConnect",
    value: function onClientConnect(client) {}
  }, {
    key: "onClientDisconnect",
    value: function onClientDisconnect(client, closeEvent) {}
  }, {
    key: "onClientError",
    value: function onClientError(client, error) {
      console.error("onClientError", error);
    }
  }, {
    key: "onClientRequest",
    value: function () {
      var _onClientRequest = _asyncToGenerator(regeneratorRuntime.mark(function _callee(client, request) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                throw Error("Received unknown request type (".concat(request.type, ")"));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onClientRequest(_x, _x2) {
        return _onClientRequest.apply(this, arguments);
      }

      return onClientRequest;
    }()
  }]);

  return Matcher;
}();

var DatastoreClient = function () {
  function DatastoreClient() {
    var _this5 = this;

    _classCallCheck(this, DatastoreClient);

    this._peer = new RTCPeerConnection();
    this._coreDataChannels = [];
    this._coreDataChannels[0] = this._serverReliableChannel = this._peer.createDataChannel("Server Reliable Channel", DatastoreClient.ConvertDataChannelSettings(true, true, 1));
    this._coreDataChannels[1] = this._serverUnreliableChannel = this._peer.createDataChannel("Server Unreliable Channel", DatastoreClient.ConvertDataChannelSettings(false, false, 3));

    this._serverReliableChannel.onmessage = function (event) {
      _this5.DidReceiveServerChannelMessage(true, event.data);
    };

    this._serverUnreliableChannel.onmessage = function (event) {
      _this5.DidReceiveServerChannelMessage(false, event.data);
    };

    this._serverReliableChannel.onerror = function (event) {
      console.error('_serverReliableChannel data channel error', event);
    };

    this._serverUnreliableChannel.onerror = function (event) {
      console.error('_serverUnreliableChannel data channel error', event);
    };

    this._coreDataChannels[2] = this._audioReliableChannel = this._peer.createDataChannel("Audio Reliable Channel", DatastoreClient.ConvertDataChannelSettings(true, true, 5));
    this._coreDataChannels[3] = this._audioUnreliableChannel = this._peer.createDataChannel("Audio Unreliable Channel", DatastoreClient.ConvertDataChannelSettings(false, false, 7));

    this._audioReliableChannel.onmessage = function (event) {
      _this5.DidReceiveAudioChannelMessage(true, event.data);
    };

    this._audioUnreliableChannel.onmessage = function (event) {
      _this5.DidReceiveAudioChannelMessage(false, event.data);
    };

    this._coreDataChannels[4] = this._datastoreReliableChannel = this._peer.createDataChannel("Datastore Reliable Channel", DatastoreClient.ConvertDataChannelSettings(true, true, 9));
    this._coreDataChannels[5] = this._datastoreUnreliableChannel = this._peer.createDataChannel("Datastore Unreliable Channel", DatastoreClient.ConvertDataChannelSettings(false, true, 11));

    this._datastoreReliableChannel.onmessage = function (event) {
      _this5.DidReceiveDatastoreChannelMessage(true, event.data);
    };

    this._datastoreUnreliableChannel.onmessage = function (event) {
      _this5.DidReceiveDatastoreChannelMessage(false, event.data);
    };

    this._datastoreReliableChannel.onerror = function (event) {
      console.error('_datastoreReliableChannel data channel error', event);
    };

    this._datastoreUnreliableChannel.onerror = function (event) {
      console.error('_datastoreUnreliableChannel data channel error', event);
    };

    this._coreDataChannels[6] = this._rpcReliableChannel = this._peer.createDataChannel("RPC Reliable Channel", DatastoreClient.ConvertDataChannelSettings(true, true, 13));
    this._coreDataChannels[7] = this._rpcUnreliableChannel = this._peer.createDataChannel("RPC Unreliable Channel", DatastoreClient.ConvertDataChannelSettings(false, true, 15));

    this._rpcReliableChannel.onmessage = function (event) {
      _this5.DidReceiveRPCChannelMessage(true, event.data);
    };

    this._rpcUnreliableChannel.onmessage = function (event) {
      _this5.DidReceiveRPCChannelMessage(false, event.data);
    };

    var coreDataChannels = Array.from(this._coreDataChannels);

    for (var _i4 = 0; _i4 < coreDataChannels.length; _i4++) {
      coreDataChannels[_i4].binaryType = 'arraybuffer';
    }

    this._clientID = -1;
    this._clockSyncSendTime = -1;
    this._roomClockOffset = -1;
    this._datastoreMessages = [];
    this._datastoreMessageFragments = [];
  }

  _createClass(DatastoreClient, [{
    key: "dealloc",
    value: function dealloc() {}
  }, {
    key: "startConnection",
    value: function () {
      var _startConnection = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var initialOffer, localDescription, encodedOffer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._peer.createOffer();

              case 2:
                initialOffer = _context2.sent;
                _context2.next = 5;
                return this._peer.setLocalDescription(initialOffer);

              case 5:
                localDescription = this._peer.localDescription;

                if (!(localDescription == null)) {
                  _context2.next = 8;
                  break;
                }

                throw Error("Local peer doesn't have a local description");

              case 8:
                encodedOffer = btoa(localDescription.sdp);
                return _context2.abrupt("return", encodedOffer);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function startConnection() {
        return _startConnection.apply(this, arguments);
      }

      return startConnection;
    }()
  }, {
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(serverAnswer) {
        var decodedAnswer;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                decodedAnswer = atob(serverAnswer);
                _context3.next = 3;
                return this._peer.setRemoteDescription({
                  type: "answer",
                  sdp: decodedAnswer
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function connect(_x3) {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._peer.close();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function disconnect() {
        return _disconnect.apply(this, arguments);
      }

      return disconnect;
    }()
  }, {
    key: "sendDatastoreMessage",
    value: function sendDatastoreMessage(datastoreMessage, reliable) {
      if (reliable) this._datastoreReliableChannel.send(datastoreMessage);else this._datastoreUnreliableChannel.send(datastoreMessage);
    }
  }, {
    key: "receiveIncomingDatastoreMessage",
    value: function receiveIncomingDatastoreMessage() {
      if (this._datastoreMessages.length <= 0) return null;
      return this._datastoreMessages[0];
    }
  }, {
    key: "receiveIncomingDatastoreMessageData",
    value: function receiveIncomingDatastoreMessageData() {
      if (this._datastoreMessages.length <= 0) return null;
      return this._datastoreMessages.shift();
    }
  }, {
    key: "DidReceiveServerChannelMessage",
    value: function DidReceiveServerChannelMessage(reliable, messageBuffer) {
      var messageBufferView = new DataView(messageBuffer);
      var messageType = messageBufferView.getUint8(0);

      switch (messageType) {
        case 0:
          {
            this._clientID = messageBufferView.getUint16(1, true);
            this._clockSyncSendTime = performance.now();
            var m = new ArrayBuffer(10);
            var mv = new DataView(m);
            mv.setUint8(0, 1);
            mv.setUint8(1, 0);
            mv.setFloat64(2, 0.0, true);

            this._serverReliableChannel.send(m);

            break;
          }

        case 1:
          {
            var pingMilliseconds = performance.now() - this._clockSyncSendTime;

            var roomTimeMilliseconds = messageBufferView.getFloat64(2, true) * 1000.0;
            var roomTimeMillisecondsPingAdjusted = roomTimeMilliseconds + pingMilliseconds / 2.0;
            this._roomClockOffset = roomTimeMillisecondsPingAdjusted - performance.now();

            var _m = new ArrayBuffer(1);

            var _mv = new DataView(_m);

            _mv.setUint8(0, 2);

            this._serverReliableChannel.send(_m);

            break;
          }

        default:
          Debug.error('Unknown message type on server channel', messageType);
          break;
      }
    }
  }, {
    key: "DidReceiveAudioChannelMessage",
    value: function DidReceiveAudioChannelMessage(reliable, messageBuffer) {}
  }, {
    key: "DidReceiveDatastoreChannelMessage",
    value: function DidReceiveDatastoreChannelMessage(reliable, messageBuffer) {
      var messageBufferView = new DataView(messageBuffer);
      var messageType = messageBufferView.getUint8(0);

      switch (messageType) {
        case 0:
          {
            var clientID = messageBufferView.getUint16(1, true) - 1;

            this._datastoreMessages.push({
              reliable: reliable,
              clientID: clientID,
              messageBuffer: new Uint8Array(messageBuffer, 3)
            });

            break;
          }

        case 1:
          {
            var finalFragment = messageBufferView.getUint8(1) != 0 ? true : false;

            var _clientID = messageBufferView.getUint16(2, true) - 1;

            this.DidReceiveDatastoreMessageFragment(reliable, finalFragment, _clientID, new Uint8Array(messageBuffer, 4));
            break;
          }

        default:
          Debug.error('Unknown message type on datastore channel', messageType);
          break;
      }
    }
  }, {
    key: "DidReceiveDatastoreMessageFragment",
    value: function DidReceiveDatastoreMessageFragment(reliable, finalFragment, clientID, messageBuffer) {
      var messageData = messageBuffer;
      var messageLength = messageBuffer.byteLength;

      if (finalFragment) {
        var lengthOfAllFragments = messageLength;

        var _iterator = _createForOfIteratorHelper(this._datastoreMessageFragments),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var fragment = _step.value;
            var _messageLength = fragment.messageBuffer.byteLength;
            lengthOfAllFragments += _messageLength;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var datastoreMessageBuffer = new Uint8Array(lengthOfAllFragments);
        var datastoreMessageBufferWriteOffset = 0;

        var _iterator2 = _createForOfIteratorHelper(this._datastoreMessageFragments),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _fragment = _step2.value;
            var _messageData = _fragment.messageBuffer;
            var _messageLength2 = _fragment.messageBuffer.byteLength;
            datastoreMessageBuffer.set(_messageData, datastoreMessageBufferWriteOffset);
            datastoreMessageBufferWriteOffset += _messageLength2;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        datastoreMessageBuffer.set(messageData, datastoreMessageBufferWriteOffset);
        datastoreMessageBufferWriteOffset += messageLength;

        this._datastoreMessages.push({
          reliable: reliable,
          clientID: clientID,
          messageBuffer: datastoreMessageBuffer
        });

        this._datastoreMessageFragments = [];
      } else {
        this._datastoreMessageFragments.push({
          reliable: reliable,
          clientID: clientID,
          messageBuffer: messageBuffer
        });
      }
    }
  }, {
    key: "DidReceiveRPCChannelMessage",
    value: function DidReceiveRPCChannelMessage(reliable, messageBuffer) {
      console.log("DidReceiveRPCChannelMessage (".concat(reliable ? 'reliable' : 'unreliable', ")"), messageBuffer);
    }
  }, {
    key: "state",
    get: function get() {
      return DatastoreClient.mapPeerConnectionStateToDatastoreClientState(this._peer.connectionState);
    }
  }, {
    key: "clientID",
    get: function get() {
      return this._clientID;
    }
  }, {
    key: "roomTime",
    get: function get() {
      return (performance.now() + this._roomClockOffset) / 1000.0;
    }
  }], [{
    key: "ConvertDataChannelSettings",
    value: function ConvertDataChannelSettings(reliable, ordered) {
      var channelID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var dataChannelSettings = {};
      if (!reliable) dataChannelSettings.maxRetransmits = 0;
      dataChannelSettings.ordered = ordered;

      if (channelID != -1) {
        dataChannelSettings.negotiated = true;
        dataChannelSettings.id = channelID;
      }

      return dataChannelSettings;
    }
  }, {
    key: "mapPeerConnectionStateToDatastoreClientState",
    value: function mapPeerConnectionStateToDatastoreClientState(state) {
      switch (state) {
        case 'new':
          return DatastoreClient.State.New;

        case 'connecting':
          return DatastoreClient.State.Connecting;

        case 'connected':
          return DatastoreClient.State.Connected;

        case 'disconnected':
          return DatastoreClient.State.Disconnected;

        case 'failed':
          return DatastoreClient.State.Failed;

        case 'closed':
          return DatastoreClient.State.Closed;

        default:
          throw Error('Unknown RTCPeerConnectionState!');
      }
    }
  }]);

  return DatastoreClient;
}();

DatastoreClient.NumberOfCoreDataChannels = 8;

(function (DatastoreClient) {
  (function (State) {
    State[State["New"] = 0] = "New";
    State[State["Connecting"] = 1] = "Connecting";
    State[State["Connected"] = 2] = "Connected";
    State[State["Disconnected"] = 4] = "Disconnected";
    State[State["Failed"] = 5] = "Failed";
    State[State["Closed"] = 6] = "Closed";
  })(DatastoreClient.State || (DatastoreClient.State = {}));
})(DatastoreClient || (DatastoreClient = {}));

var DatastoreClient$1 = DatastoreClient;

function CheckPluginVersion(major, minor, patch) {
  return major == Config.MajorVersion && minor == Config.MinorVersion && patch == Config.PatchVersion ? 1 : 0;
}

function SetLogFunction(logFunction) {}

function MatcherCreate(matcherURLPointer) {
  var matcherURL = UTF8ToString(matcherURLPointer);
  return Instance.Create(new Matcher(matcherURL));
}

function MatcherDelete(matcherPointer) {
  Instance.Delete(matcherPointer);
}

function MatcherConnect(matcherPointer) {
  Instance.Get(matcherPointer).connect();
}

function MatcherDisconnect(matcherPointer) {
  Instance.Get(matcherPointer).disconnect();
}

function MatcherTick(matcherPointer) {
  Instance.Get(matcherPointer).tick();
}

function MatcherGetRequestState(matcherPointer, requestGUIDPointer) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  return Instance.Get(matcherPointer).getRequestState(requestGUID);
}

function MatcherGetRequestErrorMessage(matcherPointer, requestGUIDPointer) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  var errorMessage = Instance.Get(matcherPointer).getRequestErrorMessage(requestGUID);
  return allocateUTF8(errorMessage);
}

function MatcherGetRequestFailMessage(matcherPointer, requestGUIDPointer) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  var errorMessage = Instance.Get(matcherPointer).getRequestFailMessage(requestGUID);
  return allocateUTF8(errorMessage);
}

function MatcherClearRequest(matcherPointer, requestGUIDPointer) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  Instance.Get(matcherPointer).clearRequest(requestGUID);
}

function MatcherConnectToRoom(matcherPointer, requestTypePointer, appKeyPointer, appMetadataJSONStringPointer, roomNamePointer, roomServerOptionsJSONStringPointer, clientOfferPointer, webhookContextPointer, clusterPingResultsPointer, clusterPingResultsLength, preferredRegionsPointer, preferredRegionsLength) {
  var matcher = Instance.Get(matcherPointer);
  var requestType = UTF8ToString(requestTypePointer);
  var appKey = UTF8ToString(appKeyPointer);
  var appMetadataJSONString = UTF8ToString(appMetadataJSONStringPointer);
  var roomName = UTF8ToString(roomNamePointer);
  var roomServerOptionsJSONString = roomServerOptionsJSONStringPointer ? UTF8ToString(roomServerOptionsJSONStringPointer) : undefined;
  var clientOffer = UTF8ToString(clientOfferPointer);
  var webhookContext = webhookContextPointer ? UTF8ToString(webhookContextPointer) : undefined;
  var requestGUID = matcher.connectToRoom(requestType, appKey, appMetadataJSONString, roomName, roomServerOptionsJSONString, clientOffer, webhookContext);
  return allocateUTF8(requestGUID);
}

function MatcherGetConnectToRoomRequestResponseType(matcherPointer, requestGUIDPointer) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  var responseType = Instance.Get(matcherPointer).getConnectToRoomRequestResponseType(requestGUID);
  return allocateUTF8(responseType);
}

function MatcherGetConnectToRoomRequestClustersToPingCount(matcherPointer, requestGUIDPointer) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  return Instance.Get(matcherPointer).getConnectToRoomRequestClustersToPingCount(requestGUID);
}

function MatcherGetConnectToRoomRequestClustersToPingNameAtIndex(matcherPointer, requestGUIDPointer, index) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  var clusterName = Instance.Get(matcherPointer).getConnectToRoomRequestClustersToPingNameAtIndex(requestGUID, index);
  return allocateUTF8(clusterName);
}

function MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex(matcherPointer, requestGUIDPointer, index) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  var clusterAddress = Instance.Get(matcherPointer).getConnectToRoomRequestClustersToPingAddressAtIndex(requestGUID, index);
  return allocateUTF8(clusterAddress);
}

function MatcherGetConnectToRoomRequestFoundRoomResponse(matcherPointer, requestGUIDPointer) {
  var requestGUID = UTF8ToString(requestGUIDPointer);
  var serverAnswer = Instance.Get(matcherPointer).getConnectToRoomRequestFoundRoomResponse(requestGUID);
  return allocateUTF8(serverAnswer);
}

function ClientSetUpNetworkStack() {
  return 1;
}

function ClientTearDownNetworkStack() {
  return 1;
}

function ClientCreate() {
  return Instance.Create(new DatastoreClient$1());
}

function ClientDelete(clientPointer) {
  Instance.Delete(clientPointer);
}

var __pendingOffers = new Map();

function ClientStartConnection(clientPointer) {
  var clientOffer = __pendingOffers.get(clientPointer);

  if (clientOffer == null) {
    clientOffer = '';

    __pendingOffers.set(clientPointer, clientOffer);

    Instance.Get(clientPointer).startConnection().then(function (co) {
      if (__pendingOffers.get(clientPointer) != '') return;

      __pendingOffers.set(clientPointer, co);
    });
  }

  if (clientOffer != '') {
    __pendingOffers["delete"](clientPointer);
  }

  return allocateUTF8(clientOffer);
}

function ClientConnect(clientPointer, serverAnswerPointer) {
  var serverAnswer = UTF8ToString(serverAnswerPointer);
  Instance.Get(clientPointer).connect(serverAnswer);
}

function ClientDisconnect(clientPointer) {
  Instance.Get(clientPointer).disconnect();
}

function ClientBumpAutoDisconnectTime(clientPointer) {}

function ClientGetState(clientPointer) {
  return Instance.Get(clientPointer).state;
}

function ClientGetClientID(clientPointer) {
  return Instance.Get(clientPointer).clientID;
}

function ClientGetRoomTime(clientPointer) {
  return Instance.Get(clientPointer).roomTime;
}

function ClientGetPing(clientPointer) {
  return -1;
}

function ClientSendPersistenceMessage(clientPointer, dataPointer, dataLength, reliable) {
  var dataBuffer = HEAPU8.subarray(dataPointer, dataPointer + dataLength);
  var clientID = Instance.Get(clientPointer).clientID;
  var m = new ArrayBuffer(dataLength + 3);
  var mv = new DataView(m);
  mv.setUint8(0, 1);
  mv.setUint16(1, clientID + 1, true);
  var mv2 = new Uint8Array(m, 3, dataLength);
  mv2.set(dataBuffer);
  Instance.Get(clientPointer).sendDatastoreMessage(m, reliable);
  return 1;
}

function ClientReceiveIncomingPersistenceMessage(clientPointer, datastoreMessageEventPointer) {
  var datastoreMessage = Instance.Get(clientPointer).receiveIncomingDatastoreMessage();
  if (datastoreMessage == null) return 0;
  setValue(datastoreMessageEventPointer, datastoreMessage.clientID, 'i32');
  setValue(datastoreMessageEventPointer + 4, datastoreMessage.messageBuffer.byteLength, 'i32');
  setValue(datastoreMessageEventPointer + 8, datastoreMessage.reliable ? 1 : 0, 'i8');
  return 1;
}

function ClientReceiveIncomingPersistenceMessageData(clientPointer, dataPointer, dataLength) {
  var datastoreMessage = Instance.Get(clientPointer).receiveIncomingDatastoreMessageData();
  if (datastoreMessage == null) return 0;

  if (datastoreMessage.messageBuffer.byteLength > dataLength) {
    console.error("Client: Attempting to process datastore message data, but the provided buffer is not large enough to read the message. This is a bug! (".concat(datastoreMessage.messageBuffer.byteLength, ", ").concat(dataLength, ")"));
    return 0;
  }

  HEAPU8.set(datastoreMessage.messageBuffer, dataPointer);
  return 1;
}

function ClientSendRPCMessage(clientPointer, dataPointer, dataLength, reliable) {
  return 1;
}

function ClientReceiveIncomingRPCMessage(clientPointer, datastoreMessageEventPointer) {
  return 0;
}

function ClientReceiveIncomingRPCMessageData(clientPointer, dataPointer, dataLength) {
  return 0;
}

function ClientCreateAudioInputStream(clientPointer, voice, sampleRate, channels) {
  return 10000;
}

function ClientDeleteAudioInputStream(audioInputStreamPointer) {}

function ClientDeleteAudioOutputStream(audioOutputStreamPointer) {}

function ClientReceiveIncomingAudioStreamEvent(clientPointer, audioStreamEventPointer) {
  return 0;
}

function ClientSetProfilingEnabled(clientPointer, enabled) {
  return 0;
}

function ClientTryGetProfilingSample(clientPointer, profilingSampleStructPointer) {
  return 0;
}

function AudioInputStreamGetClientID(audioInputStreamPointer) {
  return -1;
}

function AudioInputStreamGetStreamID(audioInputStreamPointer) {
  return -1;
}

function AudioInputStreamClose(audioInputStreamPointer) {}

function AudioInputStreamSendRawAudioData(audioInputStreamPointer, audioDataPointer, audioDataLength) {
  return 1;
}

function AudioInputStreamSendQueuedMessages(audioInputStreamPointer) {}

function AudioOutputStreamGetClientID(audioOutputStreamPointer) {
  return -1;
}

function AudioOutputStreamGetStreamID(audioOutputStreamPointer) {
  return -1;
}

function AudioOutputStreamGetSampleRate(audioOutputStreamPointer) {
  return 0;
}

function AudioOutputStreamSetSampleRate(audioOutputStreamPointer, sampleRate) {}

function AudioOutputStreamGetChannels(audioOutputStreamPointer) {
  return 0;
}

function AudioOutputStreamGetIsOpen(audioOutputStreamPointer) {
  return 0;
}

function AudioOutputStreamGetAudioData(audioOutputStreamPointer, audioDataPointer, audioDataLength) {
  return 0;
}

function AudioPreprocessorCreate(recordSampleRate, recordFrameSize, automaticGainControl, noiseSuppression, reverbSuppression, echoCancellation, playbackSampleRate, playbackChannels, tail) {}

function AudioPreprocessorDelete(audioPreprocessorPointer) {}

function AudioPreprocessorProcessRecordFrame(audioPreprocessorPointer) {
  return 0;
}

function AudioPreprocessorProcessPlaybackFrame(audioPreprocessorPointer) {
  return 0;
}

function MicrophonePlatformSupported() {
  return 0;
}

function MicrophoneCreate() {
  return 0;
}

function MicrophoneDelete(microphonePointer) {}

function MicrophoneStart(microphonePointer) {}

function MicrophoneStop(microphonePointer) {}

function MicrophoneGetSampleRate(microphonePointer) {
  return 48000;
}

function MicrophoneGetChannels(microphonePointer) {
  return 1;
}

function MicrophoneGetAudioData(microphonePointer) {
  return 0;
}

_AudioInputStreamClose = AudioInputStreamClose;
_AudioInputStreamGetClientID = AudioInputStreamGetClientID;
_AudioInputStreamGetStreamID = AudioInputStreamGetStreamID;
_AudioInputStreamSendQueuedMessages = AudioInputStreamSendQueuedMessages;
_AudioInputStreamSendRawAudioData = AudioInputStreamSendRawAudioData;
_AudioOutputStreamGetAudioData = AudioOutputStreamGetAudioData;
_AudioOutputStreamGetChannels = AudioOutputStreamGetChannels;
_AudioOutputStreamGetClientID = AudioOutputStreamGetClientID;
_AudioOutputStreamGetIsOpen = AudioOutputStreamGetIsOpen;
_AudioOutputStreamGetSampleRate = AudioOutputStreamGetSampleRate;
_AudioOutputStreamGetStreamID = AudioOutputStreamGetStreamID;
_AudioOutputStreamSetSampleRate = AudioOutputStreamSetSampleRate;
_AudioPreprocessorCreate = AudioPreprocessorCreate;
_AudioPreprocessorDelete = AudioPreprocessorDelete;
_AudioPreprocessorProcessPlaybackFrame = AudioPreprocessorProcessPlaybackFrame;
_AudioPreprocessorProcessRecordFrame = AudioPreprocessorProcessRecordFrame;
_CheckPluginVersion = CheckPluginVersion;
_ClientBumpAutoDisconnectTime = ClientBumpAutoDisconnectTime;
_ClientConnect = ClientConnect;
_ClientCreate = ClientCreate;
_ClientCreateAudioInputStream = ClientCreateAudioInputStream;
_ClientDelete = ClientDelete;
_ClientDeleteAudioInputStream = ClientDeleteAudioInputStream;
_ClientDeleteAudioOutputStream = ClientDeleteAudioOutputStream;
_ClientDisconnect = ClientDisconnect;
_ClientGetClientID = ClientGetClientID;
_ClientGetPing = ClientGetPing;
_ClientGetRoomTime = ClientGetRoomTime;
_ClientGetState = ClientGetState;
_ClientReceiveIncomingAudioStreamEvent = ClientReceiveIncomingAudioStreamEvent;
_ClientReceiveIncomingPersistenceMessage = ClientReceiveIncomingPersistenceMessage;
_ClientReceiveIncomingPersistenceMessageData = ClientReceiveIncomingPersistenceMessageData;
_ClientReceiveIncomingRPCMessage = ClientReceiveIncomingRPCMessage;
_ClientReceiveIncomingRPCMessageData = ClientReceiveIncomingRPCMessageData;
_ClientSendPersistenceMessage = ClientSendPersistenceMessage;
_ClientSendRPCMessage = ClientSendRPCMessage;
_ClientSetProfilingEnabled = ClientSetProfilingEnabled;
_ClientSetUpNetworkStack = ClientSetUpNetworkStack;
_ClientStartConnection = ClientStartConnection;
_ClientTearDownNetworkStack = ClientTearDownNetworkStack;
_ClientTryGetProfilingSample = ClientTryGetProfilingSample;
_MatcherClearRequest = MatcherClearRequest;
_MatcherConnect = MatcherConnect;
_MatcherConnectToRoom = MatcherConnectToRoom;
_MatcherCreate = MatcherCreate;
_MatcherDelete = MatcherDelete;
_MatcherDisconnect = MatcherDisconnect;
_MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex = MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex;
_MatcherGetConnectToRoomRequestClustersToPingCount = MatcherGetConnectToRoomRequestClustersToPingCount;
_MatcherGetConnectToRoomRequestClustersToPingNameAtIndex = MatcherGetConnectToRoomRequestClustersToPingNameAtIndex;
_MatcherGetConnectToRoomRequestFoundRoomResponse = MatcherGetConnectToRoomRequestFoundRoomResponse;
_MatcherGetConnectToRoomRequestResponseType = MatcherGetConnectToRoomRequestResponseType;
_MatcherGetRequestErrorMessage = MatcherGetRequestErrorMessage;
_MatcherGetRequestFailMessage = MatcherGetRequestFailMessage;
_MatcherGetRequestState = MatcherGetRequestState;
_MatcherTick = MatcherTick;
_MicrophoneCreate = MicrophoneCreate;
_MicrophoneDelete = MicrophoneDelete;
_MicrophoneGetAudioData = MicrophoneGetAudioData;
_MicrophoneGetChannels = MicrophoneGetChannels;
_MicrophoneGetSampleRate = MicrophoneGetSampleRate;
_MicrophonePlatformSupported = MicrophonePlatformSupported;
_MicrophoneStart = MicrophoneStart;
_MicrophoneStop = MicrophoneStop;
_SetLogFunction = SetLogFunction; }())`,
  AudioInputStreamClose: function () {},
  AudioInputStreamGetClientID: function () {},
  AudioInputStreamGetStreamID: function () {},
  AudioInputStreamSendQueuedMessages: function () {},
  AudioInputStreamSendRawAudioData: function () {},
  AudioOutputStreamGetAudioData: function () {},
  AudioOutputStreamGetChannels: function () {},
  AudioOutputStreamGetClientID: function () {},
  AudioOutputStreamGetIsOpen: function () {},
  AudioOutputStreamGetSampleRate: function () {},
  AudioOutputStreamGetStreamID: function () {},
  AudioOutputStreamSetSampleRate: function () {},
  AudioPreprocessorCreate: function () {},
  AudioPreprocessorDelete: function () {},
  AudioPreprocessorProcessPlaybackFrame: function () {},
  AudioPreprocessorProcessRecordFrame: function () {},
  CheckPluginVersion: function () {},
  ClientBumpAutoDisconnectTime: function () {},
  ClientConnect: function () {},
  ClientCreate: function () {},
  ClientCreateAudioInputStream: function () {},
  ClientDelete: function () {},
  ClientDeleteAudioInputStream: function () {},
  ClientDeleteAudioOutputStream: function () {},
  ClientDisconnect: function () {},
  ClientGetClientID: function () {},
  ClientGetPing: function () {},
  ClientGetRoomTime: function () {},
  ClientGetState: function () {},
  ClientReceiveIncomingAudioStreamEvent: function () {},
  ClientReceiveIncomingPersistenceMessage: function () {},
  ClientReceiveIncomingPersistenceMessageData: function () {},
  ClientReceiveIncomingRPCMessage: function () {},
  ClientReceiveIncomingRPCMessageData: function () {},
  ClientSendPersistenceMessage: function () {},
  ClientSendRPCMessage: function () {},
  ClientSetProfilingEnabled: function () {},
  ClientSetUpNetworkStack: function () {},
  ClientStartConnection: function () {},
  ClientTearDownNetworkStack: function () {},
  ClientTryGetProfilingSample: function () {},
  MatcherClearRequest: function () {},
  MatcherConnect: function () {},
  MatcherConnectToRoom: function () {},
  MatcherCreate: function () {},
  MatcherDelete: function () {},
  MatcherDisconnect: function () {},
  MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex: function () {},
  MatcherGetConnectToRoomRequestClustersToPingCount: function () {},
  MatcherGetConnectToRoomRequestClustersToPingNameAtIndex: function () {},
  MatcherGetConnectToRoomRequestFoundRoomResponse: function () {},
  MatcherGetConnectToRoomRequestResponseType: function () {},
  MatcherGetRequestErrorMessage: function () {},
  MatcherGetRequestFailMessage: function () {},
  MatcherGetRequestState: function () {},
  MatcherTick: function () {},
  MicrophoneCreate: function () {},
  MicrophoneDelete: function () {},
  MicrophoneGetAudioData: function () {},
  MicrophoneGetChannels: function () {},
  MicrophoneGetSampleRate: function () {},
  MicrophonePlatformSupported: function () {},
  MicrophoneStart: function () {},
  MicrophoneStop: function () {},
  SetLogFunction: function () {}
};
autoAddDeps(NormcoreNative, '$UnityClient');
mergeInto(LibraryManager.library, NormcoreNative);
