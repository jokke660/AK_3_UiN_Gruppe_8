// node_modules/@sanity/client/dist/_chunks-es/stegaClean.js
var s = { 0: 8203, 1: 8204, 2: 8205, 3: 8290, 4: 8291, 5: 8288, 6: 65279, 7: 8289, 8: 119155, 9: 119156, a: 119157, b: 119158, c: 119159, d: 119160, e: 119161, f: 119162 };
var c = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 };
var u = new Array(4).fill(String.fromCodePoint(c[0])).join("");
function E(t) {
  let e = JSON.stringify(t);
  return `${u}${Array.from(e).map((r) => {
    let n = r.charCodeAt(0);
    if (n > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${r} (${n})`);
    return Array.from(n.toString(4).padStart(4, "0")).map((o) => String.fromCodePoint(c[o])).join("");
  }).join("")}`;
}
function I(t) {
  return !Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t) ? false : !!Date.parse(t);
}
function T(t) {
  try {
    new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return false;
  }
  return true;
}
function C(t, e, r = "auto") {
  return r === true || r === "auto" && (I(t) || T(t)) ? t : `${t}${E(e)}`;
}
Object.fromEntries(Object.entries(c).map((t) => t.reverse()));
Object.fromEntries(Object.entries(s).map((t) => t.reverse()));
var S = `${Object.values(s).map((t) => `\\u{${t.toString(16)}}`).join("")}`;
var f = new RegExp(`[${S}]{4,}`, "gu");
function _(t) {
  var e;
  return { cleaned: t.replace(f, ""), encoded: ((e = t.match(f)) == null ? void 0 : e[0]) || "" };
}
function O(t) {
  return t && JSON.parse(_(JSON.stringify(t)).cleaned);
}
function stegaClean(result) {
  return O(result);
}

export {
  C,
  stegaClean
};
//# sourceMappingURL=chunk-VVVK5NS7.js.map
