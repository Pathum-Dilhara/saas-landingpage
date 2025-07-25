import {
  require_react
} from "./chunk-Q4AAEF7W.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-DZZM6G22.js";

// node_modules/countup.js/dist/countUp.min.js
var countUp_min_exports = {};
__export(countUp_min_exports, {
  CountUp: () => i
});
var t, i;
var init_countUp_min = __esm({
  "node_modules/countup.js/dist/countUp.min.js"() {
    t = function() {
      return t = Object.assign || function(t2) {
        for (var i2, n = 1, s = arguments.length; n < s; n++) for (var a in i2 = arguments[n]) Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
        return t2;
      }, t.apply(this, arguments);
    };
    i = function() {
      function i2(i3, n, s) {
        var a = this;
        this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
          a.startTime || (a.startTime = t2);
          var i4 = t2 - a.startTime;
          a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
          var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
          a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
        }, this.formatNumber = function(t2) {
          var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
          i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
          var r = (i4 += "").split(".");
          if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
            e = "";
            for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
            n2 = e;
          }
          return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
            return a.options.numerals[+t3];
          }), s2 = s2.replace(/[0-9]/g, function(t3) {
            return a.options.numerals[+t3];
          })), o + a.options.prefix + n2 + s2 + a.options.suffix;
        }, this.easeOutExpo = function(t2, i4, n2, s2) {
          return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
        }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
          return a.handleScroll(a);
        }), window.onscroll = function() {
          window.onScrollFns.forEach(function(t2) {
            return t2();
          });
        }, this.handleScroll(this)));
      }
      return i2.prototype.handleScroll = function(t2) {
        if (t2 && window && !t2.once) {
          var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
          a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
            return t2.start();
          }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
        }
      }, i2.prototype.determineDirectionAndSmartEasing = function() {
        var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t2;
        var i3 = t2 - this.startVal;
        if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
          this.finalEndVal = t2;
          var n = this.countDown ? 1 : -1;
          this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
        } else this.endVal = t2, this.finalEndVal = null;
        null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
      }, i2.prototype.start = function(t2) {
        this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
      }, i2.prototype.pauseResume = function() {
        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
      }, i2.prototype.reset = function() {
        cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
      }, i2.prototype.update = function(t2) {
        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
      }, i2.prototype.printValue = function(t2) {
        var i3;
        if (this.el) {
          var n = this.formattingFn(t2);
          if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render) this.options.plugin.render(this.el, n);
          else if ("INPUT" === this.el.tagName) this.el.value = n;
          else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
        }
      }, i2.prototype.ensureNumber = function(t2) {
        return "number" == typeof t2 && !isNaN(t2);
      }, i2.prototype.validateValue = function(t2) {
        var i3 = Number(t2);
        return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
      }, i2.prototype.resetDuration = function() {
        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
      }, i2;
    }();
  }
});

// node_modules/react-countup/build/index.js
var require_build = __commonJS({
  "node_modules/react-countup/build/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    var countup_js = (init_countUp_min(), __toCommonJS(countUp_min_exports));
    function _iterableToArrayLimit(r, l) {
      var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t2) {
        var e, n, i2, u, a = [], f = true, o = false;
        try {
          if (i2 = (t2 = t2.call(r)).next, 0 === l) {
            if (Object(t2) !== t2) return;
            f = false;
          } else for (; !(f = (e = i2.call(t2)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t2.return && (u = t2.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function ownKeys(e, r) {
      var t2 = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t2.push.apply(t2, o);
      }
      return t2;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t2 = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
          _defineProperty(e, r2, t2[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
        });
      }
      return e;
    }
    function _toPrimitive(t2, r) {
      if ("object" != typeof t2 || !t2) return t2;
      var e = t2[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i2 = e.call(t2, r || "default");
        if ("object" != typeof i2) return i2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t2);
    }
    function _toPropertyKey(t2) {
      var i2 = _toPrimitive(t2, "string");
      return "symbol" == typeof i2 ? i2 : String(i2);
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i2;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
          key = sourceSymbolKeys[i2];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _slicedToArray(arr, i2) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? React.useLayoutEffect : React.useEffect;
    function useEventCallback(fn) {
      var ref = React.useRef(fn);
      useIsomorphicLayoutEffect(function() {
        ref.current = fn;
      });
      return React.useCallback(function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
      }, []);
    }
    var createCountUpInstance = function createCountUpInstance2(el, props) {
      var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce, plugin = props.plugin;
      return new countup_js.CountUp(el, end, {
        startVal: start,
        duration,
        decimal,
        decimalPlaces: decimals,
        easingFn,
        formattingFn,
        numerals,
        separator,
        prefix,
        suffix,
        plugin,
        useEasing,
        useIndianSeparators,
        useGrouping,
        enableScrollSpy,
        scrollSpyDelay,
        scrollSpyOnce
      });
    };
    var _excluded$1 = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"];
    var DEFAULTS = {
      decimal: ".",
      separator: ",",
      delay: null,
      prefix: "",
      suffix: "",
      duration: 2,
      start: 0,
      decimals: 0,
      startOnMount: true,
      enableReinitialize: true,
      useEasing: true,
      useGrouping: true,
      useIndianSeparators: false
    };
    var useCountUp = function useCountUp2(props) {
      var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
        return value !== void 0;
      }));
      var _useMemo = React.useMemo(function() {
        return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
      }, [props]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
      var countUpRef = React.useRef();
      var timerRef = React.useRef();
      var isInitializedRef = React.useRef(false);
      var createInstance = useEventCallback(function() {
        return createCountUpInstance(typeof ref === "string" ? ref : ref.current, instanceProps);
      });
      var getCountUp = useEventCallback(function(recreate) {
        var countUp = countUpRef.current;
        if (countUp && !recreate) {
          return countUp;
        }
        var newCountUp = createInstance();
        countUpRef.current = newCountUp;
        return newCountUp;
      });
      var start = useEventCallback(function() {
        var run = function run2() {
          return getCountUp(true).start(function() {
            onEnd === null || onEnd === void 0 || onEnd({
              pauseResume,
              reset,
              start: restart,
              update
            });
          });
        };
        if (delay && delay > 0) {
          timerRef.current = setTimeout(run, delay * 1e3);
        } else {
          run();
        }
        onStart === null || onStart === void 0 || onStart({
          pauseResume,
          reset,
          update
        });
      });
      var pauseResume = useEventCallback(function() {
        getCountUp().pauseResume();
        onPauseResume === null || onPauseResume === void 0 || onPauseResume({
          reset,
          start: restart,
          update
        });
      });
      var reset = useEventCallback(function() {
        if (getCountUp().el) {
          timerRef.current && clearTimeout(timerRef.current);
          getCountUp().reset();
          onReset === null || onReset === void 0 || onReset({
            pauseResume,
            start: restart,
            update
          });
        }
      });
      var update = useEventCallback(function(newEnd) {
        getCountUp().update(newEnd);
        onUpdate === null || onUpdate === void 0 || onUpdate({
          pauseResume,
          reset,
          start: restart
        });
      });
      var restart = useEventCallback(function() {
        reset();
        start();
      });
      var maybeInitialize = useEventCallback(function(shouldReset) {
        if (startOnMount) {
          if (shouldReset) {
            reset();
          }
          start();
        }
      });
      React.useEffect(function() {
        if (!isInitializedRef.current) {
          isInitializedRef.current = true;
          maybeInitialize();
        } else if (enableReinitialize) {
          maybeInitialize(true);
        }
      }, [enableReinitialize, isInitializedRef, maybeInitialize, delay, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.formattingFn]);
      React.useEffect(function() {
        return function() {
          reset();
        };
      }, [reset]);
      return {
        start: restart,
        pauseResume,
        reset,
        update,
        getCountUp
      };
    };
    var _excluded = ["className", "redraw", "containerProps", "children", "style"];
    var CountUp = function CountUp2(props) {
      var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
      var containerRef = React.useRef(null);
      var isInitializedRef = React.useRef(false);
      var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
        ref: containerRef,
        startOnMount: typeof children !== "function" || props.delay === 0,
        // component manually restarts
        enableReinitialize: false
      })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
      var restart = useEventCallback(function() {
        start();
      });
      var update = useEventCallback(function(end) {
        if (!props.preserveValue) {
          reset();
        }
        updateCountUp(end);
      });
      var initializeOnMount = useEventCallback(function() {
        if (typeof props.children === "function") {
          if (!(containerRef.current instanceof Element)) {
            console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);
            return;
          }
        }
        getCountUp();
      });
      React.useEffect(function() {
        initializeOnMount();
      }, [initializeOnMount]);
      React.useEffect(function() {
        if (isInitializedRef.current) {
          update(props.end);
        }
      }, [props.end, update]);
      var redrawDependencies = redraw && props;
      React.useEffect(function() {
        if (redraw && isInitializedRef.current) {
          restart();
        }
      }, [restart, redraw, redrawDependencies]);
      React.useEffect(function() {
        if (!redraw && isInitializedRef.current) {
          restart();
        }
      }, [restart, redraw, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.className, props.formattingFn]);
      React.useEffect(function() {
        isInitializedRef.current = true;
      }, []);
      if (typeof children === "function") {
        return children({
          countUpRef: containerRef,
          start,
          reset,
          update: updateCountUp,
          pauseResume,
          getCountUp
        });
      }
      return React.createElement("span", _extends({
        className,
        ref: containerRef,
        style
      }, containerProps), typeof props.start !== "undefined" ? getCountUp().formattingFn(props.start) : "");
    };
    exports.default = CountUp;
    exports.useCountUp = useCountUp;
  }
});
export default require_build();
//# sourceMappingURL=react-countup.js.map
