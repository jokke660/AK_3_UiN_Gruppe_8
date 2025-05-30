import {
  stegaClean
} from "./chunk-VVVK5NS7.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __publicField
} from "./chunk-45IN2YCG.js";

// node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js
var e = !(typeof navigator > "u") && "ReactNative" === navigator.product;
var t = { timeout: e ? 6e4 : 12e4 };
var r = function(r2) {
  const a4 = { ...t, ..."string" == typeof r2 ? { url: r2 } : r2 };
  if (a4.timeout = n(a4.timeout), a4.query) {
    const { url: t2, searchParams: r3 } = function(t3) {
      const r4 = t3.indexOf("?");
      if (-1 === r4) return { url: t3, searchParams: new URLSearchParams() };
      const n4 = t3.slice(0, r4), a5 = t3.slice(r4 + 1);
      if (!e) return { url: n4, searchParams: new URLSearchParams(a5) };
      if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
      const s3 = new URLSearchParams();
      for (const e2 of a5.split("&")) {
        const [t4, r5] = e2.split("=");
        t4 && s3.append(o(t4), o(r5 || ""));
      }
      return { url: n4, searchParams: s3 };
    }(a4.url);
    for (const [e2, o3] of Object.entries(a4.query)) {
      if (void 0 !== o3) if (Array.isArray(o3)) for (const t3 of o3) r3.append(e2, t3);
      else r3.append(e2, o3);
      const n4 = r3.toString();
      n4 && (a4.url = `${t2}?${n4}`);
    }
  }
  return a4.method = a4.body && !a4.method ? "POST" : (a4.method || "GET").toUpperCase(), a4;
};
function o(e2) {
  return decodeURIComponent(e2.replace(/\+/g, " "));
}
function n(e2) {
  if (false === e2 || 0 === e2) return false;
  if (e2.connect || e2.socket) return e2;
  const r2 = Number(e2);
  return isNaN(r2) ? n(t.timeout) : { connect: r2, socket: r2 };
}
var a = /^https?:\/\//i;
var s = function(e2) {
  if (!a.test(e2.url)) throw new Error(`"${e2.url}" is not a valid URL`);
};
function c(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}

// node_modules/get-it/dist/index.browser.js
var o2 = ["request", "response", "progress", "error", "abort"];
var s2 = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function n2(r2, a4) {
  const i2 = [], u3 = s2.reduce((e2, t2) => (e2[t2] = e2[t2] || [], e2), { processOptions: [r], validateOptions: [s] });
  function l3(e2) {
    const t2 = o2.reduce((e3, t3) => (e3[t3] = /* @__PURE__ */ function() {
      const e4 = /* @__PURE__ */ Object.create(null);
      let t4 = 0;
      return { publish: function(t5) {
        for (const r4 in e4) e4[r4](t5);
      }, subscribe: function(r4) {
        const o3 = t4++;
        return e4[o3] = r4, function() {
          delete e4[o3];
        };
      } };
    }(), e3), {}), r3 = /* @__PURE__ */ ((e3) => function(t3, r4, ...o3) {
      const s4 = "onError" === t3;
      let n5 = r4;
      for (let r5 = 0; r5 < e3[t3].length && (n5 = (0, e3[t3][r5])(n5, ...o3), !s4 || n5); r5++) ;
      return n5;
    })(u3), s3 = r3("processOptions", e2);
    r3("validateOptions", s3);
    const n4 = { options: s3, channels: t2, applyMiddleware: r3 };
    let i3;
    const l4 = t2.request.subscribe((e3) => {
      i3 = a4(e3, (o3, s4) => ((e4, o4, s5) => {
        let n5 = e4, a5 = o4;
        if (!n5) try {
          a5 = r3("onResponse", o4, s5);
        } catch (e5) {
          a5 = null, n5 = e5;
        }
        n5 = n5 && r3("onError", n5, s5), n5 ? t2.error.publish(n5) : a5 && t2.response.publish(a5);
      })(o3, s4, e3));
    });
    t2.abort.subscribe(() => {
      l4(), i3 && i3.abort();
    });
    const c4 = r3("onReturn", t2, n4);
    return c4 === t2 && t2.request.publish(n4), c4;
  }
  return l3.use = function(e2) {
    if (!e2) throw new Error("Tried to add middleware that resolved to falsey value");
    if ("function" == typeof e2) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (e2.onReturn && u3.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return s2.forEach((t2) => {
      e2[t2] && u3[t2].push(e2[t2]);
    }), i2.push(e2), l3;
  }, l3.clone = () => n2(i2, a4), r2.forEach(l3.use), l3;
}
var a2;
var i;
var u = c(function() {
  if (i) return a2;
  i = 1;
  var e2 = function(e3) {
    return e3.replace(/^\s+|\s+$/g, "");
  };
  return a2 = function(t2) {
    if (!t2) return {};
    for (var r2 = {}, o3 = e2(t2).split("\n"), s3 = 0; s3 < o3.length; s3++) {
      var n4 = o3[s3], a4 = n4.indexOf(":"), i2 = e2(n4.slice(0, a4)).toLowerCase(), u3 = e2(n4.slice(a4 + 1));
      typeof r2[i2] > "u" ? r2[i2] = u3 : (l3 = r2[i2], "[object Array]" === Object.prototype.toString.call(l3) ? r2[i2].push(u3) : r2[i2] = [r2[i2], u3]);
    }
    var l3;
    return r2;
  };
}());
var _e, _t, _r, _o, _s, _n, _a;
var l = class {
  constructor() {
    __publicField(this, "onabort");
    __publicField(this, "onerror");
    __publicField(this, "onreadystatechange");
    __publicField(this, "ontimeout");
    __publicField(this, "readyState", 0);
    __publicField(this, "response");
    __publicField(this, "responseText", "");
    __publicField(this, "responseType", "");
    __publicField(this, "status");
    __publicField(this, "statusText");
    __publicField(this, "withCredentials");
    __privateAdd(this, _e);
    __privateAdd(this, _t);
    __privateAdd(this, _r);
    __privateAdd(this, _o, {});
    __privateAdd(this, _s);
    __privateAdd(this, _n, {});
    __privateAdd(this, _a);
  }
  open(e2, t2, r2) {
    var _a2;
    __privateSet(this, _e, e2), __privateSet(this, _t, t2), __privateSet(this, _r, ""), this.readyState = 1, (_a2 = this.onreadystatechange) == null ? void 0 : _a2.call(this), __privateSet(this, _s, void 0);
  }
  abort() {
    __privateGet(this, _s) && __privateGet(this, _s).abort();
  }
  getAllResponseHeaders() {
    return __privateGet(this, _r);
  }
  setRequestHeader(e2, t2) {
    __privateGet(this, _o)[e2] = t2;
  }
  setInit(e2, t2 = true) {
    __privateSet(this, _n, e2), __privateSet(this, _a, t2);
  }
  send(e2) {
    const t2 = "arraybuffer" !== this.responseType, r2 = { ...__privateGet(this, _n), method: __privateGet(this, _e), headers: __privateGet(this, _o), body: e2 };
    "function" == typeof AbortController && __privateGet(this, _a) && (__privateSet(this, _s, new AbortController()), typeof EventTarget < "u" && __privateGet(this, _s).signal instanceof EventTarget && (r2.signal = __privateGet(this, _s).signal)), typeof document < "u" && (r2.credentials = this.withCredentials ? "include" : "omit"), fetch(__privateGet(this, _t), r2).then((e3) => {
      var _a2;
      return e3.headers.forEach((e4, t3) => {
        __privateSet(this, _r, __privateGet(this, _r) + `${t3}: ${e4}\r
`);
      }), this.status = e3.status, this.statusText = e3.statusText, this.readyState = 3, (_a2 = this.onreadystatechange) == null ? void 0 : _a2.call(this), t2 ? e3.text() : e3.arrayBuffer();
    }).then((e3) => {
      var _a2;
      "string" == typeof e3 ? this.responseText = e3 : this.response = e3, this.readyState = 4, (_a2 = this.onreadystatechange) == null ? void 0 : _a2.call(this);
    }).catch((e3) => {
      var _a2, _b;
      "AbortError" !== e3.name ? (_a2 = this.onerror) == null ? void 0 : _a2.call(this, e3) : (_b = this.onabort) == null ? void 0 : _b.call(this);
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
_r = new WeakMap();
_o = new WeakMap();
_s = new WeakMap();
_n = new WeakMap();
_a = new WeakMap();
var c2 = "function" == typeof XMLHttpRequest ? "xhr" : "fetch";
var h = "xhr" === c2 ? XMLHttpRequest : l;
var d = (e2, t2) => {
  const r2 = e2.options, o3 = e2.applyMiddleware("finalizeOptions", r2), s3 = {}, n4 = e2.applyMiddleware("interceptRequest", void 0, { adapter: c2, context: e2 });
  if (n4) {
    const e3 = setTimeout(t2, 0, null, n4);
    return { abort: () => clearTimeout(e3) };
  }
  let a4 = new h();
  a4 instanceof l && "object" == typeof o3.fetch && a4.setInit(o3.fetch, o3.useAbortSignal ?? true);
  const i2 = o3.headers, d3 = o3.timeout;
  let p3 = false, f3 = false, b = false;
  if (a4.onerror = (e3) => {
    m(a4 instanceof l ? e3 instanceof Error ? e3 : new Error(`Request error while attempting to reach is ${o3.url}`, { cause: e3 }) : new Error(`Request error while attempting to reach is ${o3.url}${e3.lengthComputable ? `(${e3.loaded} of ${e3.total} bytes transferred)` : ""}`));
  }, a4.ontimeout = (e3) => {
    m(new Error(`Request timeout while attempting to reach ${o3.url}${e3.lengthComputable ? `(${e3.loaded} of ${e3.total} bytes transferred)` : ""}`));
  }, a4.onabort = () => {
    w(true), p3 = true;
  }, a4.onreadystatechange = () => {
    d3 && (w(), s3.socket = setTimeout(() => y("ESOCKETTIMEDOUT"), d3.socket)), !p3 && 4 === a4.readyState && 0 !== a4.status && function() {
      if (!(p3 || f3 || b)) {
        if (0 === a4.status) return void m(new Error("Unknown XHR error"));
        w(), f3 = true, t2(null, { body: a4.response || ("" === a4.responseType || "text" === a4.responseType ? a4.responseText : ""), url: o3.url, method: o3.method, headers: u(a4.getAllResponseHeaders()), statusCode: a4.status, statusMessage: a4.statusText });
      }
    }();
  }, a4.open(o3.method, o3.url, true), a4.withCredentials = !!o3.withCredentials, i2 && a4.setRequestHeader) for (const e3 in i2) i2.hasOwnProperty(e3) && a4.setRequestHeader(e3, i2[e3]);
  return o3.rawBody && (a4.responseType = "arraybuffer"), e2.applyMiddleware("onRequest", { options: o3, adapter: c2, request: a4, context: e2 }), a4.send(o3.body || null), d3 && (s3.connect = setTimeout(() => y("ETIMEDOUT"), d3.connect)), { abort: function() {
    p3 = true, a4 && a4.abort();
  } };
  function y(t3) {
    b = true, a4.abort();
    const r3 = new Error("ESOCKETTIMEDOUT" === t3 ? `Socket timed out on request to ${o3.url}` : `Connection timed out on request to ${o3.url}`);
    r3.code = t3, e2.channels.error.publish(r3);
  }
  function w(e3) {
    (e3 || p3 || a4.readyState >= 2 && s3.connect) && clearTimeout(s3.connect), s3.socket && clearTimeout(s3.socket);
  }
  function m(e3) {
    if (f3) return;
    w(true), f3 = true, a4 = null;
    const r3 = e3 || new Error(`Network error while attempting to reach ${o3.url}`);
    r3.isNetworkError = true, r3.request = o3, t2(r3);
  }
};
var p = (e2 = [], t2 = d) => n2(e2, t2);
var f = "browser";

// node_modules/get-it/dist/middleware.browser.js
function n3(e2) {
  return {};
}
var a3;
var c3;
var u2;
var l2;
var p2;
var d2 = { exports: {} };
var f2 = c((p2 || (p2 = 1, function(e2, t2) {
  t2.formatArgs = function(t3) {
    if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e2.exports.humanize(this.diff), !this.useColors) return;
    const s4 = "color: " + this.color;
    t3.splice(1, 0, s4, "color: inherit");
    let n4 = 0, r2 = 0;
    t3[0].replace(/%[a-zA-Z%]/g, (e3) => {
      "%%" !== e3 && (n4++, "%c" === e3 && (r2 = n4));
    }), t3.splice(r2, 0, s4);
  }, t2.save = function(e3) {
    try {
      e3 ? t2.storage.setItem("debug", e3) : t2.storage.removeItem("debug");
    } catch {
    }
  }, t2.load = function() {
    let e3;
    try {
      e3 = t2.storage.getItem("debug");
    } catch {
    }
    return !e3 && typeof process < "u" && "env" in process && (e3 = process.env.DEBUG), e3;
  }, t2.useColors = function() {
    if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let e3;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e3 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e3[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, t2.storage = function() {
    try {
      return localStorage;
    } catch {
    }
  }(), t2.destroy = /* @__PURE__ */ (() => {
    let e3 = false;
    return () => {
      e3 || (e3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
  }), e2.exports = (l2 ? u2 : (l2 = 1, u2 = function(e3) {
    function t3(e4) {
      let n5, r2, o3, i2 = null;
      function a4(...e5) {
        if (!a4.enabled) return;
        const s5 = a4, r3 = Number(/* @__PURE__ */ new Date()), o4 = r3 - (n5 || r3);
        s5.diff = o4, s5.prev = n5, s5.curr = r3, n5 = r3, e5[0] = t3.coerce(e5[0]), "string" != typeof e5[0] && e5.unshift("%O");
        let i3 = 0;
        e5[0] = e5[0].replace(/%([a-zA-Z%])/g, (n6, r4) => {
          if ("%%" === n6) return "%";
          i3++;
          const o5 = t3.formatters[r4];
          if ("function" == typeof o5) {
            const t4 = e5[i3];
            n6 = o5.call(s5, t4), e5.splice(i3, 1), i3--;
          }
          return n6;
        }), t3.formatArgs.call(s5, e5), (s5.log || t3.log).apply(s5, e5);
      }
      return a4.namespace = e4, a4.useColors = t3.useColors(), a4.color = t3.selectColor(e4), a4.extend = s4, a4.destroy = t3.destroy, Object.defineProperty(a4, "enabled", { enumerable: true, configurable: false, get: () => null !== i2 ? i2 : (r2 !== t3.namespaces && (r2 = t3.namespaces, o3 = t3.enabled(e4)), o3), set: (e5) => {
        i2 = e5;
      } }), "function" == typeof t3.init && t3.init(a4), a4;
    }
    function s4(e4, s5) {
      const n5 = t3(this.namespace + (typeof s5 > "u" ? ":" : s5) + e4);
      return n5.log = this.log, n5;
    }
    function n4(e4, t4) {
      let s5 = 0, n5 = 0, r2 = -1, o3 = 0;
      for (; s5 < e4.length; ) if (n5 < t4.length && (t4[n5] === e4[s5] || "*" === t4[n5])) "*" === t4[n5] ? (r2 = n5, o3 = s5, n5++) : (s5++, n5++);
      else {
        if (-1 === r2) return false;
        n5 = r2 + 1, o3++, s5 = o3;
      }
      for (; n5 < t4.length && "*" === t4[n5]; ) n5++;
      return n5 === t4.length;
    }
    return t3.debug = t3, t3.default = t3, t3.coerce = function(e4) {
      return e4 instanceof Error ? e4.stack || e4.message : e4;
    }, t3.disable = function() {
      const e4 = [...t3.names, ...t3.skips.map((e5) => "-" + e5)].join(",");
      return t3.enable(""), e4;
    }, t3.enable = function(e4) {
      t3.save(e4), t3.namespaces = e4, t3.names = [], t3.skips = [];
      const s5 = ("string" == typeof e4 ? e4 : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const e5 of s5) "-" === e5[0] ? t3.skips.push(e5.slice(1)) : t3.names.push(e5);
    }, t3.enabled = function(e4) {
      for (const s5 of t3.skips) if (n4(e4, s5)) return false;
      for (const s5 of t3.names) if (n4(e4, s5)) return true;
      return false;
    }, t3.humanize = function() {
      if (c3) return a3;
      c3 = 1;
      var e4 = 1e3, t4 = 60 * e4, s5 = 60 * t4, n5 = 24 * s5, r2 = 7 * n5;
      function o3(e5, t5, s6, n6) {
        var r3 = t5 >= 1.5 * s6;
        return Math.round(e5 / s6) + " " + n6 + (r3 ? "s" : "");
      }
      return a3 = function(i2, a4) {
        a4 = a4 || {};
        var c4, u3, l3 = typeof i2;
        if ("string" === l3 && i2.length > 0) return function(o4) {
          if (!((o4 = String(o4)).length > 100)) {
            var i3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o4);
            if (i3) {
              var a5 = parseFloat(i3[1]);
              switch ((i3[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * a5;
                case "weeks":
                case "week":
                case "w":
                  return a5 * r2;
                case "days":
                case "day":
                case "d":
                  return a5 * n5;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return a5 * s5;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return a5 * t4;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return a5 * e4;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return a5;
                default:
                  return;
              }
            }
          }
        }(i2);
        if ("number" === l3 && isFinite(i2)) return a4.long ? (c4 = i2, (u3 = Math.abs(c4)) >= n5 ? o3(c4, u3, n5, "day") : u3 >= s5 ? o3(c4, u3, s5, "hour") : u3 >= t4 ? o3(c4, u3, t4, "minute") : u3 >= e4 ? o3(c4, u3, e4, "second") : c4 + " ms") : function(r3) {
          var o4 = Math.abs(r3);
          return o4 >= n5 ? Math.round(r3 / n5) + "d" : o4 >= s5 ? Math.round(r3 / s5) + "h" : o4 >= t4 ? Math.round(r3 / t4) + "m" : o4 >= e4 ? Math.round(r3 / e4) + "s" : r3 + "ms";
        }(i2);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(i2));
      };
    }(), t3.destroy = function() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }, Object.keys(e3).forEach((s5) => {
      t3[s5] = e3[s5];
    }), t3.names = [], t3.skips = [], t3.formatters = {}, t3.selectColor = function(e4) {
      let s5 = 0;
      for (let t4 = 0; t4 < e4.length; t4++) s5 = (s5 << 5) - s5 + e4.charCodeAt(t4), s5 |= 0;
      return t3.colors[Math.abs(s5) % t3.colors.length];
    }, t3.enable(t3.load()), t3;
  }))(t2);
  const { formatters: s3 } = e2.exports;
  s3.j = function(e3) {
    try {
      return JSON.stringify(e3);
    } catch (e4) {
      return "[UnexpectedJSONParseError]: " + e4.message;
    }
  };
}(d2, d2.exports)), d2.exports));
var F = typeof Buffer > "u" ? () => false : (e2) => Buffer.isBuffer(e2);
function O(e2) {
  return "[object Object]" === Object.prototype.toString.call(e2);
}
function j(e2) {
  if (false === O(e2)) return false;
  const t2 = e2.constructor;
  if (void 0 === t2) return true;
  const s3 = t2.prototype;
  return !(false === O(s3) || false === s3.hasOwnProperty("isPrototypeOf"));
}
var v = ["boolean", "string", "number"];
function x() {
  return { processOptions: (e2) => {
    const t2 = e2.body;
    return !t2 || "function" == typeof t2.pipe || F(t2) || -1 === v.indexOf(typeof t2) && !Array.isArray(t2) && !j(t2) ? e2 : Object.assign({}, e2, { body: JSON.stringify(e2.body), headers: Object.assign({}, e2.headers, { "Content-Type": "application/json" }) });
  } };
}
function E(e2) {
  return { onResponse: (s3) => {
    const n4 = s3.headers["content-type"] || "", r2 = e2 && e2.force || -1 !== n4.indexOf("application/json");
    return s3.body && n4 && r2 ? Object.assign({}, s3, { body: t2(s3.body) }) : s3;
  }, processOptions: (e3) => Object.assign({}, e3, { headers: Object.assign({ Accept: "application/json" }, e3.headers) }) };
  function t2(e3) {
    try {
      return JSON.parse(e3);
    } catch (e4) {
      throw e4.message = `Failed to parsed response body as JSON: ${e4.message}`, e4;
    }
  }
}
var R = {};
typeof globalThis < "u" ? R = globalThis : typeof window < "u" ? R = window : typeof global < "u" ? R = global : typeof self < "u" && (R = self);
var q = R;
function A(e2 = {}) {
  const t2 = e2.implementation || q.Observable;
  if (!t2) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return { onReturn: (e3, s3) => new t2((t3) => (e3.error.subscribe((e4) => t3.error(e4)), e3.progress.subscribe((e4) => t3.next(Object.assign({ type: "progress" }, e4))), e3.response.subscribe((e4) => {
    t3.next(Object.assign({ type: "response" }, e4)), t3.complete();
  }), e3.request.publish(s3), () => e3.abort.publish())) };
}
function S() {
  return { onRequest: (e2) => {
    if ("xhr" !== e2.adapter) return;
    const t2 = e2.request, s3 = e2.context;
    function n4(e3) {
      return (t3) => {
        const n5 = t3.lengthComputable ? t3.loaded / t3.total * 100 : -1;
        s3.channels.progress.publish({ stage: e3, percent: n5, total: t3.total, loaded: t3.loaded, lengthComputable: t3.lengthComputable });
      };
    }
    "upload" in t2 && "onprogress" in t2.upload && (t2.upload.onprogress = n4("upload")), "onprogress" in t2 && (t2.onprogress = n4("download"));
  } };
}
var N = (e2 = {}) => {
  const t2 = e2.implementation || Promise;
  if (!t2) throw new Error("`Promise` is not available in global scope, and no implementation was passed");
  return { onReturn: (s3, n4) => new t2((t3, r2) => {
    const o3 = n4.options.cancelToken;
    o3 && o3.promise.then((e3) => {
      s3.abort.publish(e3), r2(e3);
    }), s3.error.subscribe(r2), s3.response.subscribe((s4) => {
      t3(e2.onlyBody ? s4.body : s4);
    }), setTimeout(() => {
      try {
        s3.request.publish(n4);
      } catch (e3) {
        r2(e3);
      }
    }, 0);
  }) };
};
var T = class {
  constructor(e2) {
    __publicField(this, "__CANCEL__", true);
    __publicField(this, "message");
    this.message = e2;
  }
  toString() {
    return "Cancel" + (this.message ? `: ${this.message}` : "");
  }
};
var _I = class _I {
  constructor(e2) {
    __publicField(this, "promise");
    __publicField(this, "reason");
    if ("function" != typeof e2) throw new TypeError("executor must be a function.");
    let t2 = null;
    this.promise = new Promise((e3) => {
      t2 = e3;
    }), e2((e3) => {
      this.reason || (this.reason = new T(e3), t2(this.reason));
    });
  }
};
__publicField(_I, "source", () => {
  let e2;
  return { token: new _I((t2) => {
    e2 = t2;
  }), cancel: e2 };
});
var I = _I;
N.Cancel = T, N.CancelToken = I, N.isCancel = (e2) => !(!e2 || !(e2 == null ? void 0 : e2.__CANCEL__));
var $ = (e2, t2, s3) => ("GET" === s3.method || "HEAD" === s3.method) && (e2.isNetworkError || false);
function _(e2) {
  return 100 * Math.pow(2, e2) + 100 * Math.random();
}
var P = (e2 = {}) => ((e3) => {
  const t2 = e3.maxRetries || 5, s3 = e3.retryDelay || _, n4 = e3.shouldRetry;
  return { onError: (e4, r2) => {
    const o3 = r2.options, i2 = o3.maxRetries || t2, a4 = o3.retryDelay || s3, c4 = o3.shouldRetry || n4, u3 = o3.attemptNumber || 0;
    if (null !== (l3 = o3.body) && "object" == typeof l3 && "function" == typeof l3.pipe || !c4(e4, u3, o3) || u3 >= i2) return e4;
    var l3;
    const p3 = Object.assign({}, r2, { options: Object.assign({}, o3, { attemptNumber: u3 + 1 }) });
    return setTimeout(() => r2.channels.request.publish(p3), a4(u3)), null;
  } };
})({ shouldRetry: $, ...e2 });
P.shouldRetry = $;
var z = class extends Error {
  constructor(e2, t2) {
    super(e2.message);
    __publicField(this, "request");
    __publicField(this, "code");
    this.request = t2, this.code = e2.code;
  }
};
var B = (H = n3, function(e2 = {}) {
  const { maxRetries: t2 = 3, ms: s3 = 1e3, maxFree: n4 = 256 } = e2, { finalizeOptions: r2 } = H({ keepAlive: true, keepAliveMsecs: s3, maxFreeSockets: n4 });
  return { finalizeOptions: r2, onError: (e3, s4) => {
    if (("GET" === s4.options.method || "POST" === s4.options.method) && e3 instanceof z && "ECONNRESET" === e3.code && e3.request.reusedSocket) {
      const e4 = s4.options.attemptNumber || 0;
      if (e4 < t2) {
        const t3 = Object.assign({}, s4, { options: Object.assign({}, s4.options, { attemptNumber: e4 + 1 }) });
        return setImmediate(() => s4.channels.request.publish(t3)), null;
      }
    }
    return e3;
  } };
});
var H;

// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d3, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b2) {
    d4.__proto__ = b2;
  } || function(d4, b2) {
    for (var p3 in b2) if (Object.prototype.hasOwnProperty.call(b2, p3)) d4[p3] = b2[p3];
  };
  return extendStatics(d3, b);
};
function __extends(d3, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d3, b);
  function __() {
    this.constructor = d3;
  }
  d3.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f3, y, t2, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n4) {
    return function(v2) {
      return step([n4, v2]);
    };
  }
  function step(op) {
    if (f3) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_2 = 0)), _2) try {
      if (f3 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
      if (y = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t2[1]) {
            _2.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _2.label < t2[2]) {
            _2.label = t2[2];
            _2.ops.push(op);
            break;
          }
          if (t2[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e2) {
      op = [6, e2];
      y = 0;
    } finally {
      f3 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o3) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m = s3 && o3[s3], i2 = 0;
  if (m) return m.call(o3);
  if (o3 && typeof o3.length === "number") return {
    next: function() {
      if (o3 && i2 >= o3.length) o3 = void 0;
      return { value: o3 && o3[i2++], done: !o3 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o3, n4) {
  var m = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m) return o3;
  var i2 = m.call(o3), r2, ar = [], e2;
  try {
    while ((n4 === void 0 || n4-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"])) m.call(i2);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l3 = from2.length, ar; i2 < l3; i2++) {
    if (ar || !(i2 in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i2);
      ar[i2] = from2[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i2, q2 = [];
  return i2 = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function awaitReturn(f3) {
    return function(v2) {
      return Promise.resolve(v2).then(f3, reject);
    };
  }
  function verb(n4, f3) {
    if (g[n4]) {
      i2[n4] = function(v2) {
        return new Promise(function(a4, b) {
          q2.push([n4, v2, a4, b]) > 1 || resume(n4, v2);
        });
      };
      if (f3) i2[n4] = f3(i2[n4]);
    }
  }
  function resume(n4, v2) {
    try {
      step(g[n4](v2));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f3, v2) {
    if (f3(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncValues(o3) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o3[Symbol.asyncIterator], i2;
  return m ? m.call(o3) : (o3 = typeof __values === "function" ? __values(o3) : o3[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n4) {
    i2[n4] = o3[n4] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o3[n4](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d3, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d3 });
    }, reject);
  }
}

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i2) {
      return i2 + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a2, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a2 = _parentage_1.return)) _a2.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e2) {
          errors = e2 instanceof UnsubscriptionError ? e2.errors : [e2];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a2;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a2 = this._finalizers) !== null && _a2 !== void 0 ? _a2 : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty2 = new Subscription2();
    empty2.closed = true;
    return empty2;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a2 = context, errorThrown = _a2.errorThrown, error = _a2.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x2) {
  return x2;
}

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a2 = _this, operator = _a2.operator, source = _a2.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a2;
    return (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x2) {
        return value = x2;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a2;
  return (_a2 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a2 !== void 0 ? _a2 : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a2;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a2 = this.onFinalize) === null || _a2 === void 0 ? void 0 : _a2.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// node_modules/rxjs/dist/esm5/internal/operators/refCount.js
function refCount() {
  return operate(function(source, subscriber) {
    var connection = null;
    source._refCount++;
    var refCounter = createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
      if (!source || source._refCount <= 0 || 0 < --source._refCount) {
        connection = null;
        return;
      }
      var sharedConnection = source._connection;
      var conn = connection;
      connection = null;
      if (sharedConnection && (!conn || sharedConnection === conn)) {
        sharedConnection.unsubscribe();
      }
      subscriber.unsubscribe();
    });
    source.subscribe(refCounter);
    if (!refCounter.closed) {
      connection = source.connect();
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable = function(_super) {
  __extends(ConnectableObservable2, _super);
  function ConnectableObservable2(source, subjectFactory) {
    var _this = _super.call(this) || this;
    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._subject = null;
    _this._refCount = 0;
    _this._connection = null;
    if (hasLift(source)) {
      _this.lift = source.lift;
    }
    return _this;
  }
  ConnectableObservable2.prototype._subscribe = function(subscriber) {
    return this.getSubject().subscribe(subscriber);
  };
  ConnectableObservable2.prototype.getSubject = function() {
    var subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  };
  ConnectableObservable2.prototype._teardown = function() {
    this._refCount = 0;
    var _connection = this._connection;
    this._subject = this._connection = null;
    _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
  };
  ConnectableObservable2.prototype.connect = function() {
    var _this = this;
    var connection = this._connection;
    if (!connection) {
      connection = this._connection = new Subscription();
      var subject_1 = this.getSubject();
      connection.add(this.source.subscribe(createOperatorSubscriber(subject_1, void 0, function() {
        _this._teardown();
        subject_1.complete();
      }, function(err) {
        _this._teardown();
        subject_1.error(err);
      }, function() {
        return _this._teardown();
      })));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription.EMPTY;
      }
    }
    return connection;
  };
  ConnectableObservable2.prototype.refCount = function() {
    return refCount()(this);
  };
  return ConnectableObservable2;
}(Observable);

// node_modules/rxjs/dist/esm5/internal/scheduler/performanceTimestampProvider.js
var performanceTimestampProvider = {
  now: function() {
    return (performanceTimestampProvider.delegate || performance).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
  schedule: function(callback) {
    var request = requestAnimationFrame;
    var cancel = cancelAnimationFrame;
    var delegate = animationFrameProvider.delegate;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    var handle = request(function(timestamp2) {
      cancel = void 0;
      callback(timestamp2);
    });
    return new Subscription(function() {
      return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
    });
  },
  requestAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  cancelAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js
function animationFramesFactory(timestampProvider) {
  return new Observable(function(subscriber) {
    var provider = timestampProvider || performanceTimestampProvider;
    var start = provider.now();
    var id = 0;
    var run = function() {
      if (!subscriber.closed) {
        id = animationFrameProvider.requestAnimationFrame(function(timestamp2) {
          id = 0;
          var now = provider.now();
          subscriber.next({
            timestamp: timestampProvider ? now : timestamp2,
            elapsed: now - start
          });
          run();
        });
      }
    };
    run();
    return function() {
      if (id) {
        animationFrameProvider.cancelAnimationFrame(id);
      }
    };
  });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

// node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a2;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a2;
      return ((_a2 = this.observers) === null || _a2 === void 0 ? void 0 : _a2.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a2 = this, hasError = _a2.hasError, isStopped = _a2.isStopped, observers = _a2.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, isStopped = _a2.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a2, _b;
    (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.next) === null || _b === void 0 ? void 0 : _b.call(_a2, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a2, _b;
    (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.error) === null || _b === void 0 ? void 0 : _b.call(_a2, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a2, _b;
    (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.complete) === null || _b === void 0 ? void 0 : _b.call(_a2);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a2, _b;
    return (_b = (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = function(_super) {
  __extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, _value = _a2._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = function(_super) {
  __extends(ReplaySubject2, _super);
  function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }
    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  ReplaySubject2.prototype.next = function(value) {
    var _a2 = this, isStopped = _a2.isStopped, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow, _timestampProvider = _a2._timestampProvider, _windowTime = _a2._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a2 = this, _infiniteTimeWindow = _a2._infiniteTimeWindow, _buffer = _a2._buffer;
    var copy = _buffer.slice();
    for (var i2 = 0; i2 < copy.length && !subscriber.closed; i2 += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i2]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject2.prototype._trimBuffer = function() {
    var _a2 = this, _bufferSize = _a2._bufferSize, _timestampProvider = _a2._timestampProvider, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last3 = 0;
      for (var i2 = 1; i2 < _buffer.length && _buffer[i2] <= now; i2 += 2) {
        last3 = i2;
      }
      last3 && _buffer.splice(0, last3 + 1);
    }
  };
  return ReplaySubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/AsyncSubject.js
var AsyncSubject = function(_super) {
  __extends(AsyncSubject2, _super);
  function AsyncSubject2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._value = null;
    _this._hasValue = false;
    _this._isComplete = false;
    return _this;
  }
  AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a2 = this, hasError = _a2.hasError, _hasValue = _a2._hasValue, _value = _a2._value, thrownError = _a2.thrownError, isStopped = _a2.isStopped, _isComplete = _a2._isComplete;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  };
  AsyncSubject2.prototype.next = function(value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  };
  AsyncSubject2.prototype.complete = function() {
    var _a2 = this, _hasValue = _a2._hasValue, _value = _a2._value, _isComplete = _a2._isComplete;
    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && _super.prototype.next.call(this, _value);
      _super.prototype.complete.call(this);
    }
  };
  return AsyncSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);

// node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
  setInterval: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay2) {
    var _a2;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = (_a2 = this.id) !== null && _a2 !== void 0 ? _a2 : this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay2);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e2) {
      errored = true;
      errorValue = e2 ? e2 : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a2 = this, id = _a2.id, scheduler = _a2.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);

// node_modules/rxjs/dist/esm5/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
var Immediate = {
  setImmediate: function(cb) {
    var handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(function() {
      return findAndClearHandle(handle) && cb();
    });
    return handle;
  },
  clearImmediate: function(handle) {
    findAndClearHandle(handle);
  }
};

// node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
var setImmediate2 = Immediate.setImmediate;
var clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
  setImmediate: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate2).apply(void 0, __spreadArray([], __read(args)));
  },
  clearImmediate: function(handle) {
    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
var AsapAction = function(_super) {
  __extends(AsapAction2, _super);
  function AsapAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
  };
  AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    var _a2;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    var actions = scheduler.actions;
    if (id != null && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
      immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = void 0;
      }
    }
    return void 0;
  };
  return AsapAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay2, state) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay2);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js
var AsapScheduler = function(_super) {
  __extends(AsapScheduler2, _super);
  function AsapScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AsapScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = void 0;
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsapScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/asap.js
var asapScheduler = new AsapScheduler(AsapAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

// node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js
var QueueAction = function(_super) {
  __extends(QueueAction2, _super);
  function QueueAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  QueueAction2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 > 0) {
      return _super.prototype.schedule.call(this, state, delay2);
    }
    this.delay = delay2;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };
  QueueAction2.prototype.execute = function(state, delay2) {
    return delay2 > 0 || this.closed ? _super.prototype.execute.call(this, state, delay2) : this._execute(state, delay2);
  };
  QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && delay2 > 0 || delay2 == null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.flush(this);
    return 0;
  };
  return QueueAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js
var QueueScheduler = function(_super) {
  __extends(QueueScheduler2, _super);
  function QueueScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return QueueScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/queue.js
var queueScheduler = new QueueScheduler(QueueAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = function(_super) {
  __extends(AnimationFrameAction2, _super);
  function AnimationFrameAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function() {
      return scheduler.flush(void 0);
    }));
  };
  AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    var _a2;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    var actions = scheduler.actions;
    if (id != null && id === scheduler._scheduled && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
      animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = void 0;
    }
    return void 0;
  };
  return AnimationFrameAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler = function(_super) {
  __extends(AnimationFrameScheduler2, _super);
  function AnimationFrameScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AnimationFrameScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId;
    if (action) {
      flushId = action.id;
    } else {
      flushId = this._scheduled;
      this._scheduled = void 0;
    }
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AnimationFrameScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js
var VirtualTimeScheduler = function(_super) {
  __extends(VirtualTimeScheduler2, _super);
  function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
    if (schedulerActionCtor === void 0) {
      schedulerActionCtor = VirtualAction;
    }
    if (maxFrames === void 0) {
      maxFrames = Infinity;
    }
    var _this = _super.call(this, schedulerActionCtor, function() {
      return _this.frame;
    }) || this;
    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }
  VirtualTimeScheduler2.prototype.flush = function() {
    var _a2 = this, actions = _a2.actions, maxFrames = _a2.maxFrames;
    var error;
    var action;
    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  VirtualTimeScheduler2.frameTimeFactor = 10;
  return VirtualTimeScheduler2;
}(AsyncScheduler);
var VirtualAction = function(_super) {
  __extends(VirtualAction2, _super);
  function VirtualAction2(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }
  VirtualAction2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (Number.isFinite(delay2)) {
      if (!this.id) {
        return _super.prototype.schedule.call(this, state, delay2);
      }
      this.active = false;
      var action = new VirtualAction2(this.scheduler, this.work);
      this.add(action);
      return action.schedule(state, delay2);
    } else {
      return Subscription.EMPTY;
    }
  };
  VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    this.delay = scheduler.frame + delay2;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction2.sortActions);
    return 1;
  };
  VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return void 0;
  };
  VirtualAction2.prototype._execute = function(state, delay2) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay2);
    }
  };
  VirtualAction2.sortActions = function(a4, b) {
    if (a4.delay === b.delay) {
      if (a4.index === b.index) {
        return 0;
      } else if (a4.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a4.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };
  return VirtualAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === "number" ? args.pop() : defaultValue;
}

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x2) {
  return x2 && typeof x2.length === "number" && typeof x2 !== "function";
};

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a2, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false) return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a2 = _b.sent(), value = _a2.value, done = _a2.done;
          if (!done) return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i2 = 0; i2 < array.length && !subscriber.closed; i2++) {
      subscriber.next(array[i2]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a2;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a2 = iterable_1.return)) _a2.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process2(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process2(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a2;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a2 = asyncIterable_1.return))) return [3, 8];
          return [4, _a2.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay2, repeat2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  if (repeat2 === void 0) {
    repeat2 = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat2) {
      parentSubscription.add(this.schedule(null, delay2));
    } else {
      this.unsubscribe();
    }
  }, delay2);
  parentSubscription.add(scheduleSubscription);
  if (!repeat2) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay2);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay2);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay2);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay2));
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i2 = 0;
    return scheduler.schedule(function() {
      if (i2 === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i2++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a2;
        var value;
        var done;
        try {
          _a2 = iterator2.next(), value = _a2.value, done = _a2.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
    return errorOrErrorFactory;
  };
  var init = function(subscriber) {
    return subscriber.error(errorFactory());
  };
  return new Observable(scheduler ? function(subscriber) {
    return scheduler.schedule(init, 0, subscriber);
  } : init);
}

// node_modules/rxjs/dist/esm5/internal/Notification.js
var NotificationKind;
(function(NotificationKind2) {
  NotificationKind2["NEXT"] = "N";
  NotificationKind2["ERROR"] = "E";
  NotificationKind2["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = function() {
  function Notification2(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }
  Notification2.prototype.observe = function(observer) {
    return observeNotification(this, observer);
  };
  Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
    var _a2 = this, kind = _a2.kind, value = _a2.value, error = _a2.error;
    return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
  };
  Notification2.prototype.accept = function(nextOrObserver, error, complete) {
    var _a2;
    return isFunction((_a2 = nextOrObserver) === null || _a2 === void 0 ? void 0 : _a2.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
  };
  Notification2.prototype.toObservable = function() {
    var _a2 = this, kind = _a2.kind, value = _a2.value, error = _a2.error;
    var result = kind === "N" ? of(value) : kind === "E" ? throwError(function() {
      return error;
    }) : kind === "C" ? EMPTY : 0;
    if (!result) {
      throw new TypeError("Unexpected notification kind " + kind);
    }
    return result;
  };
  Notification2.createNext = function(value) {
    return new Notification2("N", value);
  };
  Notification2.createError = function(err) {
    return new Notification2("E", void 0, err);
  };
  Notification2.createComplete = function() {
    return Notification2.completeNotification;
  };
  Notification2.completeNotification = new Notification2("C");
  return Notification2;
}();
function observeNotification(notification, observer) {
  var _a2, _b, _c;
  var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
  if (typeof kind !== "string") {
    throw new TypeError('Invalid notification, missing "kind"');
  }
  kind === "N" ? (_a2 = observer.next) === null || _a2 === void 0 ? void 0 : _a2.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}

// node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}

// node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError = createErrorClass(function(_super) {
  return function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
  };
});

// node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
function lastValueFrom(source, config2) {
  var hasConfig = typeof config2 === "object";
  return new Promise(function(resolve, reject) {
    var _hasValue = false;
    var _value;
    source.subscribe({
      next: function(value) {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: function() {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config2.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeError = createErrorClass(function(_super) {
  return function ArgumentOutOfRangeErrorImpl() {
    _super(this);
    this.name = "ArgumentOutOfRangeError";
    this.message = "argument out of range";
  };
});

// node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js
var NotFoundError = createErrorClass(function(_super) {
  return function NotFoundErrorImpl(message) {
    _super(this);
    this.name = "NotFoundError";
    this.message = message;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/SequenceError.js
var SequenceError = createErrorClass(function(_super) {
  return function SequenceErrorImpl(message) {
    _super(this);
    this.name = "SequenceError";
    this.message = message;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// node_modules/rxjs/dist/esm5/internal/operators/timeout.js
var TimeoutError = createErrorClass(function(_super) {
  return function TimeoutErrorImpl(info) {
    if (info === void 0) {
      info = null;
    }
    _super(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    this.info = info;
  };
});

// node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray = Array.isArray;
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}

// node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var isArray2 = Array.isArray;
var objectProto = Object.prototype;

// node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = identity;
  }
  return function(subscriber) {
    maybeSchedule(scheduler, function() {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;
      var _loop_1 = function(i3) {
        maybeSchedule(scheduler, function() {
          var source = from(observables[i3], scheduler);
          var hasFirstValue = false;
          source.subscribe(createOperatorSubscriber(subscriber, function(value) {
            values[i3] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function() {
            if (!--active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };
      for (var i2 = 0; i2 < length; i2++) {
        _loop_1(i2);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand2, innerSubScheduler, additionalFinalizer) {
  var buffer2 = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer2.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer2.push(value);
  };
  var doInnerSub = function(value) {
    expand2 && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand2) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer2.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer2.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a4, i2) {
      return map(function(b, ii) {
        return resultSelector(a4, b, i2, ii);
      })(innerFrom(project(a4, i2)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}

// node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}

// node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}

// node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    innerFrom(observableFactory()).subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n4 = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n4++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var concurrent = popNumber(args, Infinity);
  var sources = args;
  return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}

// node_modules/rxjs/dist/esm5/internal/observable/never.js
var NEVER = new Observable(noop);

// node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
var isArray3 = Array.isArray;
function argsOrArgArray(args) {
  return args.length === 1 && isArray3(args[0]) ? args[0] : args;
}

// node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/catchError.js
function catchError(selector) {
  return operate(function(source, subscriber) {
    var innerSub = null;
    var syncUnsub = false;
    var handledResult;
    innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
      handledResult = innerFrom(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js
function combineLatest2() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var resultSelector = popResultSelector(args);
  return resultSelector ? pipe(combineLatest2.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs(resultSelector)) : operate(function(source, subscriber) {
    combineLatestInit(__spreadArray([source], __read(argsOrArgArray(args))))(subscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js
function combineLatestWith() {
  var otherSources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }
  return combineLatest2.apply(void 0, __spreadArray([], __read(otherSources)));
}

// node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function finalize(callback) {
  return operate(function(source, subscriber) {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/share.js
function share(options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.connector, connector = _a2 === void 0 ? function() {
    return new Subject();
  } : _a2, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
  return function(wrapperSource) {
    var connection;
    var resetConnection;
    var subject;
    var refCount2 = 0;
    var hasCompleted = false;
    var hasErrored = false;
    var cancelReset = function() {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = void 0;
    };
    var reset = function() {
      cancelReset();
      connection = subject = void 0;
      hasCompleted = hasErrored = false;
    };
    var resetAndUnsubscribe = function() {
      var conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return operate(function(source, subscriber) {
      refCount2++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function() {
        refCount2--;
        if (refCount2 === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount2 > 0) {
        connection = new SafeSubscriber({
          next: function(value) {
            return dest.next(value);
          },
          error: function(err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: function() {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        innerFrom(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  var onSubscriber = new SafeSubscriber({
    next: function() {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}

// node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime2, scheduler) {
  var _a2, _b, _c;
  var bufferSize;
  var refCount2 = false;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    _a2 = configOrBufferSize.bufferSize, bufferSize = _a2 === void 0 ? Infinity : _a2, _b = configOrBufferSize.windowTime, windowTime2 = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount2 = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return share({
    connector: function() {
      return new ReplaySubject(bufferSize, windowTime2, scheduler);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount2
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/tap.js
function tap(observerOrNext, error, complete) {
  var tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
  return tapObserver ? operate(function(source, subscriber) {
    var _a2;
    (_a2 = tapObserver.subscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
    var isUnsub = true;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var _a3;
      (_a3 = tapObserver.next) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, value);
      subscriber.next(value);
    }, function() {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.complete) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      subscriber.complete();
    }, function(err) {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.error) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, err);
      subscriber.error(err);
    }, function() {
      var _a3, _b;
      if (isUnsub) {
        (_a3 = tapObserver.unsubscribe) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : identity;
}

// node_modules/@sanity/client/dist/index.browser.js
var ClientError = class extends Error {
  constructor(res) {
    const props = extractErrorProps(res);
    super(props.message);
    __publicField(this, "response");
    __publicField(this, "statusCode", 400);
    __publicField(this, "responseBody");
    __publicField(this, "details");
    Object.assign(this, props);
  }
};
var ServerError = class extends Error {
  constructor(res) {
    const props = extractErrorProps(res);
    super(props.message);
    __publicField(this, "response");
    __publicField(this, "statusCode", 500);
    __publicField(this, "responseBody");
    __publicField(this, "details");
    Object.assign(this, props);
  }
};
function extractErrorProps(res) {
  const body = res.body, props = {
    response: res,
    statusCode: res.statusCode,
    responseBody: stringifyBody(body, res),
    message: "",
    details: void 0
  };
  if (body.error && body.message)
    return props.message = `${body.error} - ${body.message}`, props;
  if (isMutationError(body) || isActionError(body)) {
    const allItems = body.error.items || [], items = allItems.slice(0, 5).map((item) => {
      var _a2;
      return (_a2 = item.error) == null ? void 0 : _a2.description;
    }).filter(Boolean);
    let itemsStr = items.length ? `:
- ${items.join(`
- `)}` : "";
    return allItems.length > 5 && (itemsStr += `
...and ${allItems.length - 5} more`), props.message = `${body.error.description}${itemsStr}`, props.details = body.error, props;
  }
  return body.error && body.error.description ? (props.message = body.error.description, props.details = body.error, props) : (props.message = body.error || body.message || httpErrorMessage(res), props);
}
function isMutationError(body) {
  return isPlainObject(body) && isPlainObject(body.error) && body.error.type === "mutationError" && typeof body.error.description == "string";
}
function isActionError(body) {
  return isPlainObject(body) && isPlainObject(body.error) && body.error.type === "actionError" && typeof body.error.description == "string";
}
function isPlainObject(obj) {
  return typeof obj == "object" && obj !== null && !Array.isArray(obj);
}
function httpErrorMessage(res) {
  const statusMessage = res.statusMessage ? ` ${res.statusMessage}` : "";
  return `${res.method}-request to ${res.url} resulted in HTTP ${res.statusCode}${statusMessage}`;
}
function stringifyBody(body, res) {
  return (res.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(body, null, 2) : body;
}
var CorsOriginError = class extends Error {
  constructor({ projectId: projectId2 }) {
    super("CorsOriginError");
    __publicField(this, "projectId");
    __publicField(this, "addOriginUrl");
    this.name = "CorsOriginError", this.projectId = projectId2;
    const url = new URL(`https://sanity.io/manage/project/${projectId2}/api`);
    if (typeof location < "u") {
      const { origin } = location;
      url.searchParams.set("cors", "add"), url.searchParams.set("origin", origin), this.addOriginUrl = url, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${url}`;
    } else
      this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${url}`;
  }
};
var httpError = {
  onResponse: (res) => {
    if (res.statusCode >= 500)
      throw new ServerError(res);
    if (res.statusCode >= 400)
      throw new ClientError(res);
    return res;
  }
};
function printWarnings() {
  const seen = {};
  return {
    onResponse: (res) => {
      const warn = res.headers["x-sanity-warning"], warnings = Array.isArray(warn) ? warn : [warn];
      for (const msg of warnings)
        !msg || seen[msg] || (seen[msg] = true, console.warn(msg));
      return res;
    }
  };
}
function defineHttpRequest(envMiddleware2) {
  return p([
    P({ shouldRetry }),
    ...envMiddleware2,
    printWarnings(),
    x(),
    E(),
    S(),
    httpError,
    A({ implementation: Observable })
  ]);
}
function shouldRetry(err, attempt, options) {
  if (options.maxRetries === 0) return false;
  const isSafe = options.method === "GET" || options.method === "HEAD", isQuery2 = (options.uri || options.url).startsWith("/data/query"), isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
  return (isSafe || isQuery2) && isRetriableResponse ? true : P.shouldRetry(err, attempt, options);
}
var BASE_URL = "https://www.sanity.io/help/";
function generateHelpUrl(slug) {
  return BASE_URL + slug;
}
var VALID_ASSET_TYPES = ["image", "file"];
var VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
var dataset = (name) => {
  if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name))
    throw new Error(
      "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
    );
};
var projectId = (id) => {
  if (!/^[-a-z0-9]+$/i.test(id))
    throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
};
var validateAssetType = (type) => {
  if (VALID_ASSET_TYPES.indexOf(type) === -1)
    throw new Error(`Invalid asset type: ${type}. Must be one of ${VALID_ASSET_TYPES.join(", ")}`);
};
var validateObject = (op, val) => {
  if (val === null || typeof val != "object" || Array.isArray(val))
    throw new Error(`${op}() takes an object of properties`);
};
var validateDocumentId = (op, id) => {
  if (typeof id != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes(".."))
    throw new Error(`${op}(): "${id}" is not a valid document ID`);
};
var requireDocumentId = (op, doc) => {
  if (!doc._id)
    throw new Error(`${op}() requires that the document contains an ID ("_id" property)`);
  validateDocumentId(op, doc._id);
};
var validateInsert = (at, selector, items) => {
  const signature = "insert(at, selector, items)";
  if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
    const valid = VALID_INSERT_LOCATIONS.map((loc) => `"${loc}"`).join(", ");
    throw new Error(`${signature} takes an "at"-argument which is one of: ${valid}`);
  }
  if (typeof selector != "string")
    throw new Error(`${signature} takes a "selector"-argument which must be a string`);
  if (!Array.isArray(items))
    throw new Error(`${signature} takes an "items"-argument which must be an array`);
};
var hasDataset = (config2) => {
  if (!config2.dataset)
    throw new Error("`dataset` must be provided to perform queries");
  return config2.dataset || "";
};
var requestTag = (tag) => {
  if (typeof tag != "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag))
    throw new Error(
      "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
    );
  return tag;
};
var resourceConfig = (config2) => {
  if (!config2["~experimental_resource"])
    throw new Error("`resource` must be provided to perform resource queries");
  const { type, id } = config2["~experimental_resource"];
  switch (type) {
    case "dataset": {
      if (id.split(".").length !== 2)
        throw new Error('Dataset resource ID must be in the format "project.dataset"');
      return;
    }
    case "dashboard":
    case "media-library":
    case "canvas":
      return;
    default:
      throw new Error(`Unsupported resource type: ${type.toString()}`);
  }
};
var resourceGuard = (service, config2) => {
  if (config2["~experimental_resource"])
    throw new Error(`\`${service}\` does not support resource-based operations`);
};
function once(fn) {
  let didCall = false, returnValue;
  return (...args) => (didCall || (returnValue = fn(...args), didCall = true), returnValue);
}
var createWarningPrinter = (message) => (
  // eslint-disable-next-line no-console
  once((...args) => console.warn(message.join(" "), ...args))
);
var printCdnAndWithCredentialsWarning = createWarningPrinter([
  "Because you set `withCredentials` to true, we will override your `useCdn`",
  "setting to be false since (cookie-based) credentials are never set on the CDN"
]);
var printCdnWarning = createWarningPrinter([
  "Since you haven't set a value for `useCdn`, we will deliver content using our",
  "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
  "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]);
var printCdnPreviewDraftsWarning = createWarningPrinter([
  "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
  "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
]);
var printPreviewDraftsDeprecationWarning = createWarningPrinter([
  "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"
]);
var printBrowserTokenWarning = createWarningPrinter([
  "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
  `See ${generateHelpUrl(
    "js-client-browser-token"
  )} for more information and how to hide this warning.`
]);
var printCredentialedTokenWarning = createWarningPrinter([
  "You have configured Sanity client to use a token, but also provided `withCredentials: true`.",
  "This is no longer supported - only token will be used - remove `withCredentials: true`."
]);
var printNoApiVersionSpecifiedWarning = createWarningPrinter([
  "Using the Sanity client without specifying an API version is deprecated.",
  `See ${generateHelpUrl("js-client-api-version")}`
]);
var printNoDefaultExport = createWarningPrinter([
  "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."
]);
var defaultCdnHost = "apicdn.sanity.io";
var defaultConfig = {
  apiHost: "https://api.sanity.io",
  apiVersion: "1",
  useProjectHostname: true,
  stega: { enabled: false }
};
var LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
var isLocal = (host) => LOCALHOSTS.indexOf(host) !== -1;
function validateApiVersion(apiVersion) {
  if (apiVersion === "1" || apiVersion === "X")
    return;
  const apiDate = new Date(apiVersion);
  if (!(/^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0))
    throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function validateApiPerspective(perspective) {
  if (Array.isArray(perspective) && perspective.length > 1 && perspective.includes("raw"))
    throw new TypeError(
      'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives'
    );
}
var initConfig = (config2, prevConfig) => {
  const specifiedConfig = {
    ...prevConfig,
    ...config2,
    stega: {
      ...typeof prevConfig.stega == "boolean" ? { enabled: prevConfig.stega } : prevConfig.stega || defaultConfig.stega,
      ...typeof config2.stega == "boolean" ? { enabled: config2.stega } : config2.stega || {}
    }
  };
  specifiedConfig.apiVersion || printNoApiVersionSpecifiedWarning();
  const newConfig = {
    ...defaultConfig,
    ...specifiedConfig
  }, projectBased = newConfig.useProjectHostname && !newConfig["~experimental_resource"];
  if (typeof Promise > "u") {
    const helpUrl = generateHelpUrl("js-client-promise-polyfill");
    throw new Error(`No native Promise-implementation found, polyfill needed - see ${helpUrl}`);
  }
  if (projectBased && !newConfig.projectId)
    throw new Error("Configuration must contain `projectId`");
  if (newConfig["~experimental_resource"] && resourceConfig(newConfig), typeof newConfig.perspective < "u" && validateApiPerspective(newConfig.perspective), "encodeSourceMap" in newConfig)
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
    );
  if ("encodeSourceMapAtPath" in newConfig)
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
    );
  if (typeof newConfig.stega.enabled != "boolean")
    throw new Error(`stega.enabled must be a boolean, received ${newConfig.stega.enabled}`);
  if (newConfig.stega.enabled && newConfig.stega.studioUrl === void 0)
    throw new Error("stega.studioUrl must be defined when stega.enabled is true");
  if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl != "string" && typeof newConfig.stega.studioUrl != "function")
    throw new Error(
      `stega.studioUrl must be a string or a function, received ${newConfig.stega.studioUrl}`
    );
  const isBrowser = typeof window < "u" && window.location && window.location.hostname, isLocalhost = isBrowser && isLocal(window.location.hostname), hasToken = !!newConfig.token;
  newConfig.withCredentials && hasToken && (printCredentialedTokenWarning(), newConfig.withCredentials = false), isBrowser && isLocalhost && hasToken && newConfig.ignoreBrowserTokenWarning !== true ? printBrowserTokenWarning() : typeof newConfig.useCdn > "u" && printCdnWarning(), projectBased && projectId(newConfig.projectId), newConfig.dataset && dataset(newConfig.dataset), "requestTagPrefix" in newConfig && (newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0), newConfig.apiVersion = `${newConfig.apiVersion}`.replace(/^v/, ""), newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost, newConfig.useCdn === true && newConfig.withCredentials && printCdnAndWithCredentialsWarning(), newConfig.useCdn = newConfig.useCdn !== false && !newConfig.withCredentials, validateApiVersion(newConfig.apiVersion);
  const hostParts = newConfig.apiHost.split("://", 2), protocol = hostParts[0], host = hostParts[1], cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
  return projectBased ? (newConfig.url = `${protocol}://${newConfig.projectId}.${host}/v${newConfig.apiVersion}`, newConfig.cdnUrl = `${protocol}://${newConfig.projectId}.${cdnHost}/v${newConfig.apiVersion}`) : (newConfig.url = `${newConfig.apiHost}/v${newConfig.apiVersion}`, newConfig.cdnUrl = newConfig.url), newConfig;
};
var ConnectionFailedError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "ConnectionFailedError");
  }
};
var DisconnectError = class extends Error {
  constructor(message, reason, options = {}) {
    super(message, options);
    __publicField(this, "name", "DisconnectError");
    __publicField(this, "reason");
    this.reason = reason;
  }
};
var ChannelError = class extends Error {
  constructor(message, data) {
    super(message);
    __publicField(this, "name", "ChannelError");
    __publicField(this, "data");
    this.data = data;
  }
};
var MessageError = class extends Error {
  constructor(message, data, options = {}) {
    super(message, options);
    __publicField(this, "name", "MessageError");
    __publicField(this, "data");
    this.data = data;
  }
};
var MessageParseError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "MessageParseError");
  }
};
var REQUIRED_EVENTS = ["channelError", "disconnect"];
function connectEventSource(initEventSource, events) {
  return defer(() => {
    const es = initEventSource();
    return isObservable(es) ? es : of(es);
  }).pipe(mergeMap((es) => connectWithESInstance(es, events)));
}
function connectWithESInstance(es, events) {
  return new Observable((observer) => {
    const emitOpen = events.includes("open"), emitReconnect = events.includes("reconnect");
    function onError(evt) {
      if ("data" in evt) {
        const [parseError, event] = parseEvent(evt);
        observer.error(
          parseError ? new MessageParseError("Unable to parse EventSource error message", { cause: event }) : new MessageError((event == null ? void 0 : event.data).message, event)
        );
        return;
      }
      es.readyState === es.CLOSED ? observer.error(new ConnectionFailedError("EventSource connection failed")) : emitReconnect && observer.next({ type: "reconnect" });
    }
    function onOpen() {
      observer.next({ type: "open" });
    }
    function onMessage(message) {
      var _a2;
      const [parseError, event] = parseEvent(message);
      if (parseError) {
        observer.error(
          new MessageParseError("Unable to parse EventSource message", { cause: parseError })
        );
        return;
      }
      if (message.type === "channelError") {
        observer.error(new ChannelError(extractErrorMessage(event == null ? void 0 : event.data), event.data));
        return;
      }
      if (message.type === "disconnect") {
        observer.error(
          new DisconnectError(
            `Server disconnected client: ${((_a2 = event.data) == null ? void 0 : _a2.reason) || "unknown error"}`
          )
        );
        return;
      }
      observer.next({
        type: message.type,
        id: message.lastEventId,
        ...event.data ? { data: event.data } : {}
      });
    }
    es.addEventListener("error", onError), emitOpen && es.addEventListener("open", onOpen);
    const cleanedEvents = [.../* @__PURE__ */ new Set([...REQUIRED_EVENTS, ...events])].filter((type) => type !== "error" && type !== "open" && type !== "reconnect");
    return cleanedEvents.forEach((type) => es.addEventListener(type, onMessage)), () => {
      es.removeEventListener("error", onError), emitOpen && es.removeEventListener("open", onOpen), cleanedEvents.forEach((type) => es.removeEventListener(type, onMessage)), es.close();
    };
  });
}
function parseEvent(message) {
  try {
    const data = typeof message.data == "string" && JSON.parse(message.data);
    return [
      null,
      {
        type: message.type,
        id: message.lastEventId,
        ...isEmptyObject(data) ? {} : { data }
      }
    ];
  } catch (err) {
    return [err, null];
  }
}
function extractErrorMessage(err) {
  return err.error ? err.error.description ? err.error.description : typeof err.error == "string" ? err.error : JSON.stringify(err.error, null, 2) : err.message || "Unknown listener error";
}
function isEmptyObject(data) {
  for (const _2 in data)
    return false;
  return true;
}
function getSelection(sel) {
  if (typeof sel == "string")
    return { id: sel };
  if (Array.isArray(sel))
    return { query: "*[_id in $ids]", params: { ids: sel } };
  if (typeof sel == "object" && sel !== null && "query" in sel && typeof sel.query == "string")
    return "params" in sel && typeof sel.params == "object" && sel.params !== null ? { query: sel.query, params: sel.params } : { query: sel.query };
  const selectionOpts = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`"
  ].join(`
`);
  throw new Error(`Unknown selection - must be one of:

${selectionOpts}`);
}
var BasePatch = class {
  constructor(selection, operations = {}) {
    __publicField(this, "selection");
    __publicField(this, "operations");
    this.selection = selection, this.operations = operations;
  }
  /**
   * Sets the given attributes to the document. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */
  set(attrs) {
    return this._assign("set", attrs);
  }
  /**
   * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */
  setIfMissing(attrs) {
    return this._assign("setIfMissing", attrs);
  }
  /**
   * Performs a "diff-match-patch" operation on the string attributes provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
   */
  diffMatchPatch(attrs) {
    return validateObject("diffMatchPatch", attrs), this._assign("diffMatchPatch", attrs);
  }
  /**
   * Unsets the attribute paths provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attribute paths to unset.
   */
  unset(attrs) {
    if (!Array.isArray(attrs))
      throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
    return this.operations = Object.assign({}, this.operations, { unset: attrs }), this;
  }
  /**
   * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
   */
  inc(attrs) {
    return this._assign("inc", attrs);
  }
  /**
   * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
   */
  dec(attrs) {
    return this._assign("dec", attrs);
  }
  /**
   * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
   *
   * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
   * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
   * @param items - Array of items to insert/replace
   */
  insert(at, selector, items) {
    return validateInsert(at, selector, items), this._assign("insert", { [at]: selector, items });
  }
  /**
   * Append the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
   * @param items - Array of items to append to the array
   */
  append(selector, items) {
    return this.insert("after", `${selector}[-1]`, items);
  }
  /**
   * Prepend the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
   * @param items - Array of items to prepend to the array
   */
  prepend(selector, items) {
    return this.insert("before", `${selector}[0]`, items);
  }
  /**
   * Change the contents of an array by removing existing elements and/or adding new elements.
   *
   * @param selector - Attribute or JSONPath expression for array
   * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
   * @param deleteCount - An integer indicating the number of old array elements to remove.
   * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
   */
  splice(selector, start, deleteCount, items) {
    const delAll = typeof deleteCount > "u" || deleteCount === -1, startIndex = start < 0 ? start - 1 : start, delCount = delAll ? -1 : Math.max(0, start + deleteCount), delRange = startIndex < 0 && delCount >= 0 ? "" : delCount, rangeSelector = `${selector}[${startIndex}:${delRange}]`;
    return this.insert("replace", rangeSelector, items || []);
  }
  /**
   * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
   *
   * @param rev - Revision to lock the patch to
   */
  ifRevisionId(rev) {
    return this.operations.ifRevisionID = rev, this;
  }
  /**
   * Return a plain JSON representation of the patch
   */
  serialize() {
    return { ...getSelection(this.selection), ...this.operations };
  }
  /**
   * Return a plain JSON representation of the patch
   */
  toJSON() {
    return this.serialize();
  }
  /**
   * Clears the patch of all operations
   */
  reset() {
    return this.operations = {}, this;
  }
  _assign(op, props, merge22 = true) {
    return validateObject(op, props), this.operations = Object.assign({}, this.operations, {
      [op]: Object.assign({}, merge22 && this.operations[op] || {}, props)
    }), this;
  }
  _set(op, props) {
    return this._assign(op, props, false);
  }
};
var _client;
var _ObservablePatch = class _ObservablePatch extends BasePatch {
  constructor(selection, operations, client) {
    super(selection, operations);
    __privateAdd(this, _client);
    __privateSet(this, _client, client);
  }
  /**
   * Clones the patch
   */
  clone() {
    return new _ObservablePatch(this.selection, { ...this.operations }, __privateGet(this, _client));
  }
  commit(options) {
    if (!__privateGet(this, _client))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const returnFirst = typeof this.selection == "string", opts = Object.assign({ returnFirst, returnDocuments: true }, options);
    return __privateGet(this, _client).mutate({ patch: this.serialize() }, opts);
  }
};
_client = new WeakMap();
var ObservablePatch = _ObservablePatch;
var _client2;
var _Patch = class _Patch extends BasePatch {
  constructor(selection, operations, client) {
    super(selection, operations);
    __privateAdd(this, _client2);
    __privateSet(this, _client2, client);
  }
  /**
   * Clones the patch
   */
  clone() {
    return new _Patch(this.selection, { ...this.operations }, __privateGet(this, _client2));
  }
  commit(options) {
    if (!__privateGet(this, _client2))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const returnFirst = typeof this.selection == "string", opts = Object.assign({ returnFirst, returnDocuments: true }, options);
    return __privateGet(this, _client2).mutate({ patch: this.serialize() }, opts);
  }
};
_client2 = new WeakMap();
var Patch = _Patch;
var defaultMutateOptions = { returnDocuments: false };
var BaseTransaction = class {
  constructor(operations = [], transactionId) {
    __publicField(this, "operations");
    __publicField(this, "trxId");
    this.operations = operations, this.trxId = transactionId;
  }
  /**
   * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create. Requires a `_type` property.
   */
  create(doc) {
    return validateObject("create", doc), this._add({ create: doc });
  }
  /**
   * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
   */
  createIfNotExists(doc) {
    const op = "createIfNotExists";
    return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
  }
  /**
   * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
   */
  createOrReplace(doc) {
    const op = "createOrReplace";
    return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
  }
  /**
   * Deletes the document with the given document ID
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param documentId - Document ID to delete
   */
  delete(documentId) {
    return validateDocumentId("delete", documentId), this._add({ delete: { id: documentId } });
  }
  transactionId(id) {
    return id ? (this.trxId = id, this) : this.trxId;
  }
  /**
   * Return a plain JSON representation of the transaction
   */
  serialize() {
    return [...this.operations];
  }
  /**
   * Return a plain JSON representation of the transaction
   */
  toJSON() {
    return this.serialize();
  }
  /**
   * Clears the transaction of all operations
   */
  reset() {
    return this.operations = [], this;
  }
  _add(mut) {
    return this.operations.push(mut), this;
  }
};
var _client3;
var _Transaction = class _Transaction extends BaseTransaction {
  constructor(operations, client, transactionId) {
    super(operations, transactionId);
    __privateAdd(this, _client3);
    __privateSet(this, _client3, client);
  }
  /**
   * Clones the transaction
   */
  clone() {
    return new _Transaction([...this.operations], __privateGet(this, _client3), this.trxId);
  }
  commit(options) {
    if (!__privateGet(this, _client3))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return __privateGet(this, _client3).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {})
    );
  }
  patch(patchOrDocumentId, patchOps) {
    const isBuilder = typeof patchOps == "function", isPatch = typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof Patch, isMutationSelection = typeof patchOrDocumentId == "object" && ("query" in patchOrDocumentId || "id" in patchOrDocumentId);
    if (isPatch)
      return this._add({ patch: patchOrDocumentId.serialize() });
    if (isBuilder) {
      const patch = patchOps(new Patch(patchOrDocumentId, {}, __privateGet(this, _client3)));
      if (!(patch instanceof Patch))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: patch.serialize() });
    }
    if (isMutationSelection) {
      const patch = new Patch(patchOrDocumentId, patchOps || {}, __privateGet(this, _client3));
      return this._add({ patch: patch.serialize() });
    }
    return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
  }
};
_client3 = new WeakMap();
var Transaction = _Transaction;
var _client4;
var _ObservableTransaction = class _ObservableTransaction extends BaseTransaction {
  constructor(operations, client, transactionId) {
    super(operations, transactionId);
    __privateAdd(this, _client4);
    __privateSet(this, _client4, client);
  }
  /**
   * Clones the transaction
   */
  clone() {
    return new _ObservableTransaction([...this.operations], __privateGet(this, _client4), this.trxId);
  }
  commit(options) {
    if (!__privateGet(this, _client4))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return __privateGet(this, _client4).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {})
    );
  }
  patch(patchOrDocumentId, patchOps) {
    const isBuilder = typeof patchOps == "function";
    if (typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof ObservablePatch)
      return this._add({ patch: patchOrDocumentId.serialize() });
    if (isBuilder) {
      const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, __privateGet(this, _client4)));
      if (!(patch instanceof ObservablePatch))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: patch.serialize() });
    }
    return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
  }
};
_client4 = new WeakMap();
var ObservableTransaction = _ObservableTransaction;
var projectHeader = "X-Sanity-Project-ID";
function requestOptions(config2, overrides = {}) {
  const headers = {}, token = overrides.token || config2.token;
  token && (headers.Authorization = `Bearer ${token}`), !overrides.useGlobalApi && !config2.useProjectHostname && config2.projectId && (headers[projectHeader] = config2.projectId);
  const withCredentials = !!(typeof overrides.withCredentials > "u" ? config2.withCredentials : overrides.withCredentials), timeout2 = typeof overrides.timeout > "u" ? config2.timeout : overrides.timeout;
  return Object.assign({}, overrides, {
    headers: Object.assign({}, headers, overrides.headers || {}),
    timeout: typeof timeout2 > "u" ? 5 * 60 * 1e3 : timeout2,
    proxy: overrides.proxy || config2.proxy,
    json: true,
    withCredentials,
    fetch: typeof overrides.fetch == "object" && typeof config2.fetch == "object" ? { ...config2.fetch, ...overrides.fetch } : overrides.fetch || config2.fetch
  });
}
var encodeQueryString = ({
  query,
  params = {},
  options = {}
}) => {
  const searchParams = new URLSearchParams(), { tag, includeMutations, returnQuery, ...opts } = options;
  tag && searchParams.append("tag", tag), searchParams.append("query", query);
  for (const [key, value] of Object.entries(params))
    searchParams.append(`$${key}`, JSON.stringify(value));
  for (const [key, value] of Object.entries(opts))
    value && searchParams.append(key, `${value}`);
  return returnQuery === false && searchParams.append("returnQuery", "false"), includeMutations === false && searchParams.append("includeMutations", "false"), `?${searchParams}`;
};
var excludeFalsey = (param, defValue) => param === false ? void 0 : typeof param > "u" ? defValue : param;
var getMutationQuery = (options = {}) => ({
  dryRun: options.dryRun,
  returnIds: true,
  returnDocuments: excludeFalsey(options.returnDocuments, true),
  visibility: options.visibility || "sync",
  autoGenerateArrayKeys: options.autoGenerateArrayKeys,
  skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
});
var isResponse = (event) => event.type === "response";
var getBody = (event) => event.body;
var indexBy = (docs, attr) => docs.reduce((indexed, doc) => (indexed[attr(doc)] = doc, indexed), /* @__PURE__ */ Object.create(null));
var getQuerySizeLimit = 11264;
function _fetch(client, httpRequest, _stega, query, _params = {}, options = {}) {
  const stega = "stega" in options ? {
    ..._stega || {},
    ...typeof options.stega == "boolean" ? { enabled: options.stega } : options.stega || {}
  } : _stega, params = stega.enabled ? stegaClean(_params) : _params, mapResponse = options.filterResponse === false ? (res) => res : (res) => res.result, { cache, next, ...opts } = {
    // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
    // This is necessary in React Server Components to avoid opting out of Request Memoization.
    useAbortSignal: typeof options.signal < "u",
    // Set `resultSourceMap' when stega is enabled, as it's required for encoding.
    resultSourceMap: stega.enabled ? "withKeyArraySelector" : options.resultSourceMap,
    ...options,
    // Default to not returning the query, unless `filterResponse` is `false`,
    // or `returnQuery` is explicitly set. `true` is the default in Content Lake, so skip if truthy
    returnQuery: options.filterResponse === false && options.returnQuery !== false
  }, reqOpts = typeof cache < "u" || typeof next < "u" ? { ...opts, fetch: { cache, next } } : opts, $request = _dataRequest(client, httpRequest, "query", { query, params }, reqOpts);
  return stega.enabled ? $request.pipe(
    combineLatestWith(
      from(
        import("./stegaEncodeSourceMap-4JTWHBJD.js").then(function(n4) {
          return n4.stegaEncodeSourceMap$1;
        }).then(
          ({ stegaEncodeSourceMap }) => stegaEncodeSourceMap
        )
      )
    ),
    map(
      ([res, stegaEncodeSourceMap]) => {
        const result = stegaEncodeSourceMap(res.result, res.resultSourceMap, stega);
        return mapResponse({ ...res, result });
      }
    )
  ) : $request.pipe(map(mapResponse));
}
function _getDocument(client, httpRequest, id, opts = {}) {
  const options = {
    uri: _getDataUrl(client, "doc", id),
    json: true,
    tag: opts.tag,
    signal: opts.signal
  };
  return _requestObservable(client, httpRequest, options).pipe(
    filter(isResponse),
    map((event) => event.body.documents && event.body.documents[0])
  );
}
function _getDocuments(client, httpRequest, ids, opts = {}) {
  const options = {
    uri: _getDataUrl(client, "doc", ids.join(",")),
    json: true,
    tag: opts.tag,
    signal: opts.signal
  };
  return _requestObservable(client, httpRequest, options).pipe(
    filter(isResponse),
    map((event) => {
      const indexed = indexBy(event.body.documents || [], (doc) => doc._id);
      return ids.map((id) => indexed[id] || null);
    })
  );
}
function _createIfNotExists(client, httpRequest, doc, options) {
  return requireDocumentId("createIfNotExists", doc), _create(client, httpRequest, doc, "createIfNotExists", options);
}
function _createOrReplace(client, httpRequest, doc, options) {
  return requireDocumentId("createOrReplace", doc), _create(client, httpRequest, doc, "createOrReplace", options);
}
function _delete(client, httpRequest, selection, options) {
  return _dataRequest(
    client,
    httpRequest,
    "mutate",
    { mutations: [{ delete: getSelection(selection) }] },
    options
  );
}
function _mutate(client, httpRequest, mutations, options) {
  let mut;
  mutations instanceof Patch || mutations instanceof ObservablePatch ? mut = { patch: mutations.serialize() } : mutations instanceof Transaction || mutations instanceof ObservableTransaction ? mut = mutations.serialize() : mut = mutations;
  const muts = Array.isArray(mut) ? mut : [mut], transactionId = options && options.transactionId || void 0;
  return _dataRequest(client, httpRequest, "mutate", { mutations: muts, transactionId }, options);
}
function _action(client, httpRequest, actions, options) {
  const acts = Array.isArray(actions) ? actions : [actions], transactionId = options && options.transactionId || void 0, skipCrossDatasetReferenceValidation = options && options.skipCrossDatasetReferenceValidation || void 0, dryRun = options && options.dryRun || void 0;
  return _dataRequest(
    client,
    httpRequest,
    "actions",
    { actions: acts, transactionId, skipCrossDatasetReferenceValidation, dryRun },
    options
  );
}
function _dataRequest(client, httpRequest, endpoint, body, options = {}) {
  const isMutation = endpoint === "mutate", isAction = endpoint === "actions", isQuery2 = endpoint === "query", strQuery = isMutation || isAction ? "" : encodeQueryString(body), useGet = !isMutation && !isAction && strQuery.length < getQuerySizeLimit, stringQuery = useGet ? strQuery : "", returnFirst = options.returnFirst, { timeout: timeout2, token, tag, headers, returnQuery, lastLiveEventId, cacheMode } = options, uri = _getDataUrl(client, endpoint, stringQuery), reqOptions = {
    method: useGet ? "GET" : "POST",
    uri,
    json: true,
    body: useGet ? void 0 : body,
    query: isMutation && getMutationQuery(options),
    timeout: timeout2,
    headers,
    token,
    tag,
    returnQuery,
    perspective: options.perspective,
    resultSourceMap: options.resultSourceMap,
    lastLiveEventId: Array.isArray(lastLiveEventId) ? lastLiveEventId[0] : lastLiveEventId,
    cacheMode,
    canUseCdn: isQuery2,
    signal: options.signal,
    fetch: options.fetch,
    useAbortSignal: options.useAbortSignal,
    useCdn: options.useCdn
  };
  return _requestObservable(client, httpRequest, reqOptions).pipe(
    filter(isResponse),
    map(getBody),
    map((res) => {
      if (!isMutation)
        return res;
      const results = res.results || [];
      if (options.returnDocuments)
        return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
      const key = returnFirst ? "documentId" : "documentIds", ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
      return {
        transactionId: res.transactionId,
        results,
        [key]: ids
      };
    })
  );
}
function _create(client, httpRequest, doc, op, options = {}) {
  const mutation = { [op]: doc }, opts = Object.assign({ returnFirst: true, returnDocuments: true }, options);
  return _dataRequest(client, httpRequest, "mutate", { mutations: [mutation] }, opts);
}
var hasDataConfig = (client) => client.config().dataset !== void 0 && client.config().projectId !== void 0 || client.config()["~experimental_resource"] !== void 0;
var isQuery = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "query"));
var isMutate = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "mutate"));
var isDoc = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "doc", ""));
var isListener = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "listen"));
var isHistory = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "history", ""));
var isData = (client, uri) => uri.startsWith("/data/") || isQuery(client, uri) || isMutate(client, uri) || isDoc(client, uri) || isListener(client, uri) || isHistory(client, uri);
function _requestObservable(client, httpRequest, options) {
  const uri = options.url || options.uri, config2 = client.config(), canUseCdn = typeof options.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && isData(client, uri) : options.canUseCdn;
  let useCdn = (options.useCdn ?? config2.useCdn) && canUseCdn;
  const tag = options.tag && config2.requestTagPrefix ? [config2.requestTagPrefix, options.tag].join(".") : options.tag || config2.requestTagPrefix;
  if (tag && options.tag !== null && (options.query = { tag: requestTag(tag), ...options.query }), ["GET", "HEAD", "POST"].indexOf(options.method || "GET") >= 0 && isQuery(client, uri)) {
    const resultSourceMap = options.resultSourceMap ?? config2.resultSourceMap;
    resultSourceMap !== void 0 && resultSourceMap !== false && (options.query = { resultSourceMap, ...options.query });
    const perspectiveOption = options.perspective || config2.perspective;
    typeof perspectiveOption < "u" && (perspectiveOption === "previewDrafts" && printPreviewDraftsDeprecationWarning(), validateApiPerspective(perspectiveOption), options.query = {
      perspective: Array.isArray(perspectiveOption) ? perspectiveOption.join(",") : perspectiveOption,
      ...options.query
    }, (Array.isArray(perspectiveOption) && perspectiveOption.length > 0 || // previewDrafts was renamed to drafts, but keep for backwards compat
    perspectiveOption === "previewDrafts" || perspectiveOption === "drafts") && useCdn && (useCdn = false, printCdnPreviewDraftsWarning())), options.lastLiveEventId && (options.query = { ...options.query, lastLiveEventId: options.lastLiveEventId }), options.returnQuery === false && (options.query = { returnQuery: "false", ...options.query }), useCdn && options.cacheMode == "noStale" && (options.query = { cacheMode: "noStale", ...options.query });
  }
  const reqOptions = requestOptions(
    config2,
    Object.assign({}, options, {
      url: _getUrl(client, uri, useCdn)
    })
  ), request = new Observable(
    (subscriber) => httpRequest(reqOptions, config2.requester).subscribe(subscriber)
  );
  return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
}
function _request(client, httpRequest, options) {
  return _requestObservable(client, httpRequest, options).pipe(
    filter((event) => event.type === "response"),
    map((event) => event.body)
  );
}
function _getDataUrl(client, operation, path) {
  const config2 = client.config();
  if (config2["~experimental_resource"]) {
    resourceConfig(config2);
    const resourceBase = resourceDataBase(config2), uri2 = path !== void 0 ? `${operation}/${path}` : operation;
    return `${resourceBase}/${uri2}`.replace(/\/($|\?)/, "$1");
  }
  const catalog = hasDataset(config2), baseUri = `/${operation}/${catalog}`;
  return `/data${path !== void 0 ? `${baseUri}/${path}` : baseUri}`.replace(/\/($|\?)/, "$1");
}
function _getUrl(client, uri, canUseCdn = false) {
  const { url, cdnUrl } = client.config();
  return `${canUseCdn ? cdnUrl : url}/${uri.replace(/^\//, "")}`;
}
function _withAbortSignal(signal) {
  return (input) => new Observable((observer) => {
    const abort = () => observer.error(_createAbortError(signal));
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const subscription = input.subscribe(observer);
    return signal.addEventListener("abort", abort), () => {
      signal.removeEventListener("abort", abort), subscription.unsubscribe();
    };
  });
}
var isDomExceptionSupported = !!globalThis.DOMException;
function _createAbortError(signal) {
  if (isDomExceptionSupported)
    return new DOMException((signal == null ? void 0 : signal.reason) ?? "The operation was aborted.", "AbortError");
  const error = new Error((signal == null ? void 0 : signal.reason) ?? "The operation was aborted.");
  return error.name = "AbortError", error;
}
var resourceDataBase = (config2) => {
  if (!config2["~experimental_resource"])
    throw new Error("`resource` must be provided to perform resource queries");
  const { type, id } = config2["~experimental_resource"];
  switch (type) {
    case "dataset": {
      const segments = id.split(".");
      if (segments.length !== 2)
        throw new Error('Dataset ID must be in the format "project.dataset"');
      return `/projects/${segments[0]}/datasets/${segments[1]}`;
    }
    case "canvas":
      return `/canvases/${id}`;
    case "media-library":
      return `/media-libraries/${id}`;
    case "dashboard":
      return `/dashboards/${id}`;
    default:
      throw new Error(`Unsupported resource type: ${type.toString()}`);
  }
};
var _client5, _httpRequest;
var ObservableAssetsClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client5);
    __privateAdd(this, _httpRequest);
    __privateSet(this, _client5, client), __privateSet(this, _httpRequest, httpRequest);
  }
  upload(assetType, body, options) {
    return _upload(__privateGet(this, _client5), __privateGet(this, _httpRequest), assetType, body, options);
  }
};
_client5 = new WeakMap();
_httpRequest = new WeakMap();
var _client6, _httpRequest2;
var AssetsClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client6);
    __privateAdd(this, _httpRequest2);
    __privateSet(this, _client6, client), __privateSet(this, _httpRequest2, httpRequest);
  }
  upload(assetType, body, options) {
    const observable2 = _upload(__privateGet(this, _client6), __privateGet(this, _httpRequest2), assetType, body, options);
    return lastValueFrom(
      observable2.pipe(
        filter((event) => event.type === "response"),
        map(
          (event) => event.body.document
        )
      )
    );
  }
};
_client6 = new WeakMap();
_httpRequest2 = new WeakMap();
function _upload(client, httpRequest, assetType, body, opts = {}) {
  validateAssetType(assetType);
  let meta = opts.extract || void 0;
  meta && !meta.length && (meta = ["none"]);
  const config2 = client.config(), options = optionsFromFile(opts, body), { tag, label, title, description, creditLine, filename, source } = options, query = {
    label,
    title,
    description,
    filename,
    meta,
    creditLine
  };
  return source && (query.sourceId = source.id, query.sourceName = source.name, query.sourceUrl = source.url), _requestObservable(client, httpRequest, {
    tag,
    method: "POST",
    timeout: options.timeout || 0,
    uri: buildAssetUploadUrl(config2, assetType),
    headers: options.contentType ? { "Content-Type": options.contentType } : {},
    query,
    body
  });
}
function buildAssetUploadUrl(config2, assetType) {
  const assetTypeEndpoint = assetType === "image" ? "images" : "files";
  if (config2["~experimental_resource"]) {
    const { type, id } = config2["~experimental_resource"];
    switch (type) {
      case "dataset":
        throw new Error(
          "Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead."
        );
      case "canvas":
        return `/canvases/${id}/assets/${assetTypeEndpoint}`;
      case "media-library":
        return `/media-libraries/${id}/upload`;
      case "dashboard":
        return `/dashboards/${id}/assets/${assetTypeEndpoint}`;
      default:
        throw new Error(`Unsupported resource type: ${type.toString()}`);
    }
  }
  const dataset2 = hasDataset(config2);
  return `assets/${assetTypeEndpoint}/${dataset2}`;
}
function optionsFromFile(opts, file) {
  return typeof File > "u" || !(file instanceof File) ? opts : Object.assign(
    {
      filename: opts.preserveFilename === false ? void 0 : file.name,
      contentType: file.type
    },
    opts
  );
}
var defaults = (obj, defaults2) => Object.keys(defaults2).concat(Object.keys(obj)).reduce((target, prop) => (target[prop] = typeof obj[prop] > "u" ? defaults2[prop] : obj[prop], target), {});
var pick = (obj, props) => props.reduce((selection, prop) => (typeof obj[prop] > "u" || (selection[prop] = obj[prop]), selection), {});
var eventSourcePolyfill = defer(() => import("./browser-6VX77IJR.js")).pipe(
  map(({ default: EventSource2 }) => EventSource2),
  shareReplay(1)
);
function reconnectOnConnectionFailure() {
  return function(source) {
    return source.pipe(
      catchError((err, caught) => err instanceof ConnectionFailedError ? concat(of({ type: "reconnect" }), timer(1e3).pipe(mergeMap(() => caught))) : throwError(() => err))
    );
  };
}
var MAX_URL_LENGTH = 14800;
var possibleOptions = [
  "includePreviousRevision",
  "includeResult",
  "includeMutations",
  "includeAllVersions",
  "visibility",
  "effectFormat",
  "tag"
];
var defaultOptions = {
  includeResult: true
};
function _listen(query, params, opts = {}) {
  const { url, token, withCredentials, requestTagPrefix } = this.config(), tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag, options = { ...defaults(opts, defaultOptions), tag }, listenOpts = pick(options, possibleOptions), qs = encodeQueryString({ query, params, options: { tag, ...listenOpts } }), uri = `${url}${_getDataUrl(this, "listen", qs)}`;
  if (uri.length > MAX_URL_LENGTH)
    return throwError(() => new Error("Query too large for listener"));
  const listenFor = options.events ? options.events : ["mutation"], esOptions = {};
  return withCredentials && (esOptions.withCredentials = true), token && (esOptions.headers = {
    Authorization: `Bearer ${token}`
  }), connectEventSource(() => (
    // use polyfill if there is no global EventSource or if we need to set headers
    (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(uri, esOptions)))
  ), listenFor).pipe(
    reconnectOnConnectionFailure(),
    filter((event) => listenFor.includes(event.type)),
    map(
      (event) => ({
        type: event.type,
        ..."data" in event ? event.data : {}
      })
    )
  );
}
function shareReplayLatest(configOrPredicate, config2) {
  return _shareReplayLatest(
    typeof configOrPredicate == "function" ? { predicate: configOrPredicate, ...config2 } : configOrPredicate
  );
}
function _shareReplayLatest(config2) {
  return (source) => {
    let latest, emitted = false;
    const { predicate, ...shareConfig } = config2, wrapped = source.pipe(
      tap((value) => {
        config2.predicate(value) && (emitted = true, latest = value);
      }),
      finalize(() => {
        emitted = false, latest = void 0;
      }),
      share(shareConfig)
    ), emitLatest = new Observable((subscriber) => {
      emitted && subscriber.next(
        // this cast is safe because of the emitted check which asserts that we got T from the source
        latest
      ), subscriber.complete();
    });
    return merge(wrapped, emitLatest);
  };
}
var requiredApiVersion = "2021-03-25";
var _client7;
var LiveClient = class {
  constructor(client) {
    __privateAdd(this, _client7);
    __privateSet(this, _client7, client);
  }
  /**
   * Requires `apiVersion` to be `2021-03-25` or later.
   */
  events({
    includeDrafts = false,
    tag: _tag
  } = {}) {
    resourceGuard("live", __privateGet(this, _client7).config());
    const {
      projectId: projectId2,
      apiVersion: _apiVersion,
      token,
      withCredentials,
      requestTagPrefix
    } = __privateGet(this, _client7).config(), apiVersion = _apiVersion.replace(/^v/, "");
    if (apiVersion !== "X" && apiVersion < requiredApiVersion)
      throw new Error(
        `The live events API requires API version ${requiredApiVersion} or later. The current API version is ${apiVersion}. Please update your API version to use this feature.`
      );
    if (includeDrafts && !token && !withCredentials)
      throw new Error(
        "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
      );
    const path = _getDataUrl(__privateGet(this, _client7), "live/events"), url = new URL(__privateGet(this, _client7).getUrl(path, false)), tag = _tag && requestTagPrefix ? [requestTagPrefix, _tag].join(".") : _tag;
    tag && url.searchParams.set("tag", tag), includeDrafts && url.searchParams.set("includeDrafts", "true");
    const esOptions = {};
    includeDrafts && token && (esOptions.headers = {
      Authorization: `Bearer ${token}`
    }), includeDrafts && withCredentials && (esOptions.withCredentials = true);
    const key = `${url.href}::${JSON.stringify(esOptions)}`, existing = eventsCache.get(key);
    if (existing)
      return existing;
    const events = connectEventSource(() => (
      // use polyfill if there is no global EventSource or if we need to set headers
      (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(url.href, esOptions)))
    ), [
      "message",
      "restart",
      "welcome",
      "reconnect",
      "goaway"
    ]).pipe(
      reconnectOnConnectionFailure(),
      map((event) => {
        if (event.type === "message") {
          const { data, ...rest } = event;
          return { ...rest, tags: data.tags };
        }
        return event;
      })
    ), checkCors = fetchObservable(url, {
      method: "OPTIONS",
      mode: "cors",
      credentials: esOptions.withCredentials ? "include" : "omit",
      headers: esOptions.headers
    }).pipe(
      mergeMap(() => EMPTY),
      catchError(() => {
        throw new CorsOriginError({ projectId: projectId2 });
      })
    ), observable2 = concat(checkCors, events).pipe(
      finalize(() => eventsCache.delete(key)),
      shareReplayLatest({
        predicate: (event) => event.type === "welcome"
      })
    );
    return eventsCache.set(key, observable2), observable2;
  }
};
_client7 = new WeakMap();
function fetchObservable(url, init) {
  return new Observable((observer) => {
    const controller = new AbortController(), signal = controller.signal;
    return fetch(url, { ...init, signal: controller.signal }).then(
      (response) => {
        observer.next(response), observer.complete();
      },
      (err) => {
        signal.aborted || observer.error(err);
      }
    ), () => controller.abort();
  });
}
var eventsCache = /* @__PURE__ */ new Map();
var _client8, _httpRequest3;
var ObservableDatasetsClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client8);
    __privateAdd(this, _httpRequest3);
    __privateSet(this, _client8, client), __privateSet(this, _httpRequest3, httpRequest);
  }
  /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */
  create(name, options) {
    return _modify(__privateGet(this, _client8), __privateGet(this, _httpRequest3), "PUT", name, options);
  }
  /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */
  edit(name, options) {
    return _modify(__privateGet(this, _client8), __privateGet(this, _httpRequest3), "PATCH", name, options);
  }
  /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */
  delete(name) {
    return _modify(__privateGet(this, _client8), __privateGet(this, _httpRequest3), "DELETE", name);
  }
  /**
   * Fetch a list of datasets for the configured project
   */
  list() {
    return _request(__privateGet(this, _client8), __privateGet(this, _httpRequest3), {
      uri: "/datasets",
      tag: null
    });
  }
};
_client8 = new WeakMap();
_httpRequest3 = new WeakMap();
var _client9, _httpRequest4;
var DatasetsClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client9);
    __privateAdd(this, _httpRequest4);
    __privateSet(this, _client9, client), __privateSet(this, _httpRequest4, httpRequest);
  }
  /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */
  create(name, options) {
    return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(
      _modify(__privateGet(this, _client9), __privateGet(this, _httpRequest4), "PUT", name, options)
    );
  }
  /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */
  edit(name, options) {
    return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(
      _modify(__privateGet(this, _client9), __privateGet(this, _httpRequest4), "PATCH", name, options)
    );
  }
  /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */
  delete(name) {
    return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(_modify(__privateGet(this, _client9), __privateGet(this, _httpRequest4), "DELETE", name));
  }
  /**
   * Fetch a list of datasets for the configured project
   */
  list() {
    return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(
      _request(__privateGet(this, _client9), __privateGet(this, _httpRequest4), { uri: "/datasets", tag: null })
    );
  }
};
_client9 = new WeakMap();
_httpRequest4 = new WeakMap();
function _modify(client, httpRequest, method, name, options) {
  return resourceGuard("dataset", client.config()), dataset(name), _request(client, httpRequest, {
    method,
    uri: `/datasets/${name}`,
    body: options,
    tag: null
  });
}
var _client10, _httpRequest5;
var ObservableProjectsClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client10);
    __privateAdd(this, _httpRequest5);
    __privateSet(this, _client10, client), __privateSet(this, _httpRequest5, httpRequest);
  }
  list(options) {
    resourceGuard("projects", __privateGet(this, _client10).config());
    const uri = (options == null ? void 0 : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
    return _request(__privateGet(this, _client10), __privateGet(this, _httpRequest5), { uri });
  }
  /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */
  getById(projectId2) {
    return resourceGuard("projects", __privateGet(this, _client10).config()), _request(__privateGet(this, _client10), __privateGet(this, _httpRequest5), { uri: `/projects/${projectId2}` });
  }
};
_client10 = new WeakMap();
_httpRequest5 = new WeakMap();
var _client11, _httpRequest6;
var ProjectsClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client11);
    __privateAdd(this, _httpRequest6);
    __privateSet(this, _client11, client), __privateSet(this, _httpRequest6, httpRequest);
  }
  list(options) {
    resourceGuard("projects", __privateGet(this, _client11).config());
    const uri = (options == null ? void 0 : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
    return lastValueFrom(_request(__privateGet(this, _client11), __privateGet(this, _httpRequest6), { uri }));
  }
  /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */
  getById(projectId2) {
    return resourceGuard("projects", __privateGet(this, _client11).config()), lastValueFrom(
      _request(__privateGet(this, _client11), __privateGet(this, _httpRequest6), { uri: `/projects/${projectId2}` })
    );
  }
};
_client11 = new WeakMap();
_httpRequest6 = new WeakMap();
var _client12, _httpRequest7;
var ObservableUsersClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client12);
    __privateAdd(this, _httpRequest7);
    __privateSet(this, _client12, client), __privateSet(this, _httpRequest7, httpRequest);
  }
  /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */
  getById(id) {
    return _request(
      __privateGet(this, _client12),
      __privateGet(this, _httpRequest7),
      { uri: `/users/${id}` }
    );
  }
};
_client12 = new WeakMap();
_httpRequest7 = new WeakMap();
var _client13, _httpRequest8;
var UsersClient = class {
  constructor(client, httpRequest) {
    __privateAdd(this, _client13);
    __privateAdd(this, _httpRequest8);
    __privateSet(this, _client13, client), __privateSet(this, _httpRequest8, httpRequest);
  }
  /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */
  getById(id) {
    return lastValueFrom(
      _request(__privateGet(this, _client13), __privateGet(this, _httpRequest8), {
        uri: `/users/${id}`
      })
    );
  }
};
_client13 = new WeakMap();
_httpRequest8 = new WeakMap();
var _clientConfig, _httpRequest9;
var _ObservableSanityClient = class _ObservableSanityClient {
  constructor(httpRequest, config2 = defaultConfig) {
    __publicField(this, "assets");
    __publicField(this, "datasets");
    __publicField(this, "live");
    __publicField(this, "projects");
    __publicField(this, "users");
    /**
     * Private properties
     */
    __privateAdd(this, _clientConfig);
    __privateAdd(this, _httpRequest9);
    /**
     * Instance properties
     */
    __publicField(this, "listen", _listen);
    this.config(config2), __privateSet(this, _httpRequest9, httpRequest), this.assets = new ObservableAssetsClient(this, __privateGet(this, _httpRequest9)), this.datasets = new ObservableDatasetsClient(this, __privateGet(this, _httpRequest9)), this.live = new LiveClient(this), this.projects = new ObservableProjectsClient(this, __privateGet(this, _httpRequest9)), this.users = new ObservableUsersClient(this, __privateGet(this, _httpRequest9));
  }
  /**
   * Clone the client - returns a new instance
   */
  clone() {
    return new _ObservableSanityClient(__privateGet(this, _httpRequest9), this.config());
  }
  config(newConfig) {
    if (newConfig === void 0)
      return { ...__privateGet(this, _clientConfig) };
    if (__privateGet(this, _clientConfig) && __privateGet(this, _clientConfig).allowReconfigure === false)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return __privateSet(this, _clientConfig, initConfig(newConfig, __privateGet(this, _clientConfig) || {})), this;
  }
  /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */
  withConfig(newConfig) {
    const thisConfig = this.config();
    return new _ObservableSanityClient(__privateGet(this, _httpRequest9), {
      ...thisConfig,
      ...newConfig,
      stega: {
        ...thisConfig.stega || {},
        ...typeof (newConfig == null ? void 0 : newConfig.stega) == "boolean" ? { enabled: newConfig.stega } : (newConfig == null ? void 0 : newConfig.stega) || {}
      }
    });
  }
  fetch(query, params, options) {
    return _fetch(
      this,
      __privateGet(this, _httpRequest9),
      __privateGet(this, _clientConfig).stega,
      query,
      params,
      options
    );
  }
  /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */
  getDocument(id, options) {
    return _getDocument(this, __privateGet(this, _httpRequest9), id, options);
  }
  /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */
  getDocuments(ids, options) {
    return _getDocuments(this, __privateGet(this, _httpRequest9), ids, options);
  }
  create(document2, options) {
    return _create(this, __privateGet(this, _httpRequest9), document2, "create", options);
  }
  createIfNotExists(document2, options) {
    return _createIfNotExists(this, __privateGet(this, _httpRequest9), document2, options);
  }
  createOrReplace(document2, options) {
    return _createOrReplace(this, __privateGet(this, _httpRequest9), document2, options);
  }
  delete(selection, options) {
    return _delete(this, __privateGet(this, _httpRequest9), selection, options);
  }
  mutate(operations, options) {
    return _mutate(this, __privateGet(this, _httpRequest9), operations, options);
  }
  /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */
  patch(selection, operations) {
    return new ObservablePatch(selection, operations, this);
  }
  /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */
  transaction(operations) {
    return new ObservableTransaction(operations, this);
  }
  /**
   * Perform action operations against the configured dataset
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */
  action(operations, options) {
    return _action(this, __privateGet(this, _httpRequest9), operations, options);
  }
  /**
   * Perform an HTTP request against the Sanity API
   *
   * @param options - Request options
   */
  request(options) {
    return _request(this, __privateGet(this, _httpRequest9), options);
  }
  /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */
  getUrl(uri, canUseCdn) {
    return _getUrl(this, uri, canUseCdn);
  }
  /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */
  getDataUrl(operation, path) {
    return _getDataUrl(this, operation, path);
  }
};
_clientConfig = new WeakMap();
_httpRequest9 = new WeakMap();
var ObservableSanityClient = _ObservableSanityClient;
var _clientConfig2, _httpRequest10;
var _SanityClient = class _SanityClient {
  constructor(httpRequest, config2 = defaultConfig) {
    __publicField(this, "assets");
    __publicField(this, "datasets");
    __publicField(this, "live");
    __publicField(this, "projects");
    __publicField(this, "users");
    /**
     * Observable version of the Sanity client, with the same configuration as the promise-based one
     */
    __publicField(this, "observable");
    /**
     * Private properties
     */
    __privateAdd(this, _clientConfig2);
    __privateAdd(this, _httpRequest10);
    /**
     * Instance properties
     */
    __publicField(this, "listen", _listen);
    this.config(config2), __privateSet(this, _httpRequest10, httpRequest), this.assets = new AssetsClient(this, __privateGet(this, _httpRequest10)), this.datasets = new DatasetsClient(this, __privateGet(this, _httpRequest10)), this.live = new LiveClient(this), this.projects = new ProjectsClient(this, __privateGet(this, _httpRequest10)), this.users = new UsersClient(this, __privateGet(this, _httpRequest10)), this.observable = new ObservableSanityClient(httpRequest, config2);
  }
  /**
   * Clone the client - returns a new instance
   */
  clone() {
    return new _SanityClient(__privateGet(this, _httpRequest10), this.config());
  }
  config(newConfig) {
    if (newConfig === void 0)
      return { ...__privateGet(this, _clientConfig2) };
    if (__privateGet(this, _clientConfig2) && __privateGet(this, _clientConfig2).allowReconfigure === false)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return this.observable && this.observable.config(newConfig), __privateSet(this, _clientConfig2, initConfig(newConfig, __privateGet(this, _clientConfig2) || {})), this;
  }
  /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */
  withConfig(newConfig) {
    const thisConfig = this.config();
    return new _SanityClient(__privateGet(this, _httpRequest10), {
      ...thisConfig,
      ...newConfig,
      stega: {
        ...thisConfig.stega || {},
        ...typeof (newConfig == null ? void 0 : newConfig.stega) == "boolean" ? { enabled: newConfig.stega } : (newConfig == null ? void 0 : newConfig.stega) || {}
      }
    });
  }
  fetch(query, params, options) {
    return lastValueFrom(
      _fetch(
        this,
        __privateGet(this, _httpRequest10),
        __privateGet(this, _clientConfig2).stega,
        query,
        params,
        options
      )
    );
  }
  /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */
  getDocument(id, options) {
    return lastValueFrom(_getDocument(this, __privateGet(this, _httpRequest10), id, options));
  }
  /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */
  getDocuments(ids, options) {
    return lastValueFrom(_getDocuments(this, __privateGet(this, _httpRequest10), ids, options));
  }
  create(document2, options) {
    return lastValueFrom(
      _create(this, __privateGet(this, _httpRequest10), document2, "create", options)
    );
  }
  createIfNotExists(document2, options) {
    return lastValueFrom(
      _createIfNotExists(this, __privateGet(this, _httpRequest10), document2, options)
    );
  }
  createOrReplace(document2, options) {
    return lastValueFrom(
      _createOrReplace(this, __privateGet(this, _httpRequest10), document2, options)
    );
  }
  delete(selection, options) {
    return lastValueFrom(_delete(this, __privateGet(this, _httpRequest10), selection, options));
  }
  mutate(operations, options) {
    return lastValueFrom(_mutate(this, __privateGet(this, _httpRequest10), operations, options));
  }
  /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */
  patch(documentId, operations) {
    return new Patch(documentId, operations, this);
  }
  /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */
  transaction(operations) {
    return new Transaction(operations, this);
  }
  /**
   * Perform action operations against the configured dataset
   * Returns a promise that resolves to the transaction result
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */
  action(operations, options) {
    return lastValueFrom(_action(this, __privateGet(this, _httpRequest10), operations, options));
  }
  /**
   * Perform a request against the Sanity API
   * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
   *
   * @param options - Request options
   * @returns Promise resolving to the response body
   */
  request(options) {
    return lastValueFrom(_request(this, __privateGet(this, _httpRequest10), options));
  }
  /**
   * Perform an HTTP request a `/data` sub-endpoint
   * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
   *
   * @deprecated - Use `request()` or your own HTTP library instead
   * @param endpoint - Endpoint to hit (mutate, query etc)
   * @param body - Request body
   * @param options - Request options
   * @internal
   */
  dataRequest(endpoint, body, options) {
    return lastValueFrom(_dataRequest(this, __privateGet(this, _httpRequest10), endpoint, body, options));
  }
  /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */
  getUrl(uri, canUseCdn) {
    return _getUrl(this, uri, canUseCdn);
  }
  /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */
  getDataUrl(operation, path) {
    return _getDataUrl(this, operation, path);
  }
};
_clientConfig2 = new WeakMap();
_httpRequest10 = new WeakMap();
var SanityClient = _SanityClient;
function defineCreateClientExports(envMiddleware2, ClassConstructor) {
  return { requester: defineHttpRequest(envMiddleware2), createClient: (config2) => {
    const clientRequester = defineHttpRequest(envMiddleware2);
    return new ClassConstructor(
      (options, requester2) => (requester2 || clientRequester)({
        maxRedirects: 0,
        maxRetries: config2.maxRetries,
        retryDelay: config2.retryDelay,
        ...options
      }),
      config2
    );
  } };
}
function defineDeprecatedCreateClient(createClient2) {
  return function(config2) {
    return printNoDefaultExport(), createClient2(config2);
  };
}
var envMiddleware = [];
var exp = defineCreateClientExports(envMiddleware, SanityClient);
var requester = exp.requester;
var createClient = exp.createClient;
var deprecatedCreateClient = defineDeprecatedCreateClient(createClient);
export {
  BasePatch,
  BaseTransaction,
  ChannelError,
  ClientError,
  ConnectionFailedError,
  CorsOriginError,
  DisconnectError,
  MessageError,
  MessageParseError,
  ObservablePatch,
  ObservableSanityClient,
  ObservableTransaction,
  Patch,
  SanityClient,
  ServerError,
  Transaction,
  connectEventSource,
  createClient,
  deprecatedCreateClient as default,
  requester,
  c2 as unstable__adapter,
  f as unstable__environment,
  validateApiPerspective
};
//# sourceMappingURL=@sanity_client.js.map
