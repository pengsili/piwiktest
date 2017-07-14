/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof JSON_PIWIK !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) {
    JSON_PIWIK = window.JSON
} else {
    (function() {
        var a = {};
        /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var c = typeof define === "function" && define.amd;
            var e = {
                "function": true,
                object: true
            };
            var h = e[typeof a] && a && !a.nodeType && a;
            var i = e[typeof window] && window || this,
                b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
            if (b && (b.global === b || b.window === b || b.self === b)) {
                i = b
            }

            function j(ab, V) {
                ab || (ab = i.Object());
                V || (V = i.Object());
                var K = ab.Number || i.Number,
                    R = ab.String || i.String,
                    x = ab.Object || i.Object,
                    S = ab.Date || i.Date,
                    T = ab.SyntaxError || i.SyntaxError,
                    aa = ab.TypeError || i.TypeError,
                    J = ab.Math || i.Math,
                    Y = ab.JSON || i.JSON;
                if (typeof Y == "object" && Y) {
                    V.stringify = Y.stringify;
                    V.parse = Y.parse
                }
                var n = x.prototype,
                    u = n.toString,
                    r, m, L;
                var B = new S(-3509827334573292);
                try {
                    B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708
                } catch (v) {}

                function o(ac) {
                    if (o[ac] !== L) {
                        return o[ac]
                    }
                    var ad;
                    if (ac == "bug-string-char-index") {
                        ad = "a" [0] != "a"
                    } else {
                        if (ac == "json") {
                            ad = o("json-stringify") && o("json-parse")
                        } else {
                            var ak, ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if (ac == "json-stringify") {
                                var ai = V.stringify,
                                    aj = typeof ai == "function" && B;
                                if (aj) {
                                    (ak = function() {
                                        return 1
                                    }).toJSON = ak;
                                    try {
                                        aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({
                                            a: [ak, true, false, null, "\x00\b\n\f\r\t"]
                                        }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    } catch (ae) {
                                        aj = false
                                    }
                                }
                                ad = aj
                            }
                            if (ac == "json-parse") {
                                var ag = V.parse;
                                if (typeof ag == "function") {
                                    try {
                                        if (ag("0") === 0 && !ag(false)) {
                                            ak = ag(ah);
                                            var af = ak.a.length == 5 && ak.a[0] === 1;
                                            if (af) {
                                                try {
                                                    af = !ag('"\t"')
                                                } catch (ae) {}
                                                if (af) {
                                                    try {
                                                        af = ag("01") !== 1
                                                    } catch (ae) {}
                                                }
                                                if (af) {
                                                    try {
                                                        af = ag("1.") !== 1
                                                    } catch (ae) {}
                                                }
                                            }
                                        }
                                    } catch (ae) {
                                        af = false
                                    }
                                }
                                ad = af
                            }
                        }
                    }
                    return o[ac] = !!ad
                }
                if (!o("json")) {
                    var U = "[object Function]",
                        Q = "[object Date]",
                        N = "[object Number]",
                        O = "[object String]",
                        E = "[object Array]",
                        A = "[object Boolean]";
                    var F = o("bug-string-char-index");
                    if (!B) {
                        var s = J.floor;
                        var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        var D = function(ac, ad) {
                            return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400)
                        }
                    }
                    if (!(r = n.hasOwnProperty)) {
                        r = function(ae) {
                            var ac = {},
                                ad;
                            if ((ac.__proto__ = null, ac.__proto__ = {
                                    toString: 1
                                }, ac).toString != u) {
                                r = function(ah) {
                                    var ag = this.__proto__,
                                        af = ah in (this.__proto__ = null, this);
                                    this.__proto__ = ag;
                                    return af
                                }
                            } else {
                                ad = ac.constructor;
                                r = function(ag) {
                                    var af = (this.constructor || ad).prototype;
                                    return ag in this && !(ag in af && this[ag] === af[ag])
                                }
                            }
                            ac = null;
                            return r.call(this, ae)
                        }
                    }
                    m = function(ae, ah) {
                        var af = 0,
                            ac, ad, ag;
                        (ac = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        ad = new ac();
                        for (ag in ad) {
                            if (r.call(ad, ag)) {
                                af++
                            }
                        }
                        ac = ad = null;
                        if (!af) {
                            ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            m = function(aj, an) {
                                var am = u.call(aj) == U,
                                    al, ak;
                                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r;
                                for (al in aj) {
                                    if (!(am && al == "prototype") && ai.call(aj, al)) {
                                        an(al)
                                    }
                                }
                                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {}
                            }
                        } else {
                            if (af == 2) {
                                m = function(aj, am) {
                                    var ai = {},
                                        al = u.call(aj) == U,
                                        ak;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) {
                                            am(ak)
                                        }
                                    }
                                }
                            } else {
                                m = function(aj, am) {
                                    var al = u.call(aj) == U,
                                        ak, ai;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                                            am(ak)
                                        }
                                    }
                                    if (ai || r.call(aj, (ak = "constructor"))) {
                                        am(ak)
                                    }
                                }
                            }
                        }
                        return m(ae, ah)
                    };
                    if (!o("json-stringify")) {
                        var q = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };
                        var I = "000000";
                        var t = function(ac, ad) {
                            return (I + (ad || 0)).slice(-ac)
                        };
                        var z = "\\u00";
                        var C = function(ai) {
                            var ad = '"',
                                ag = 0,
                                ah = ai.length,
                                ac = !F || ah > 10;
                            var af = ac && (F ? ai.split("") : ai);
                            for (; ag < ah; ag++) {
                                var ae = ai.charCodeAt(ag);
                                switch (ae) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        ad += q[ae];
                                        break;
                                    default:
                                        if (ae < 32) {
                                            ad += z + t(2, ae.toString(16));
                                            break
                                        }
                                        ad += ac ? af[ag] : ai.charAt(ag)
                                }
                            }
                            return ad + '"'
                        };
                        var p = function(ai, aA, ag, al, ax, ac, aj) {
                            var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                            try {
                                at = aA[ai]
                            } catch (am) {}
                            if (typeof at == "object" && at) {
                                ae = u.call(at);
                                if (ae == Q && !r.call(at, "toJSON")) {
                                    if (at > -1 / 0 && at < 1 / 0) {
                                        if (D) {
                                            ay = s(at / 86400000);
                                            for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                                            for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                                            ay = 1 + ay - D(ap, az);
                                            ak = (at % 86400000 + 86400000) % 86400000;
                                            aw = s(ak / 3600000) % 24;
                                            au = s(ak / 60000) % 60;
                                            aq = s(ak / 1000) % 60;
                                            an = ak % 1000
                                        } else {
                                            ap = at.getUTCFullYear();
                                            az = at.getUTCMonth();
                                            ay = at.getUTCDate();
                                            aw = at.getUTCHours();
                                            au = at.getUTCMinutes();
                                            aq = at.getUTCSeconds();
                                            an = at.getUTCMilliseconds()
                                        }
                                        at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                                    } else {
                                        at = null
                                    }
                                } else {
                                    if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))) {
                                        at = at.toJSON(ai)
                                    }
                                }
                            }
                            if (ag) {
                                at = ag.call(aA, ai, at)
                            }
                            if (at === null) {
                                return "null"
                            }
                            ae = u.call(at);
                            if (ae == A) {
                                return "" + at
                            } else {
                                if (ae == N) {
                                    return at > -1 / 0 && at < 1 / 0 ? "" + at : "null"
                                } else {
                                    if (ae == O) {
                                        return C("" + at)
                                    }
                                }
                            }
                            if (typeof at == "object") {
                                for (af = aj.length; af--;) {
                                    if (aj[af] === at) {
                                        throw aa()
                                    }
                                }
                                aj.push(at);
                                ar = [];
                                av = ac;
                                ac += ax;
                                if (ae == E) {
                                    for (ah = 0, af = at.length; ah < af; ah++) {
                                        ad = p(ah, at, ag, al, ax, ac, aj);
                                        ar.push(ad === L ? "null" : ad)
                                    }
                                    ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" + ar.join(",") + "]")) : "[]"
                                } else {
                                    m(al || at, function(aC) {
                                        var aB = p(aC, at, ag, al, ax, ac, aj);
                                        if (aB !== L) {
                                            ar.push(C(aC) + ":" + (ax ? " " : "") + aB)
                                        }
                                    });
                                    ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" + ar.join(",") + "}")) : "{}"
                                }
                                aj.pop();
                                return ao
                            }
                        };
                        V.stringify = function(ac, ae, af) {
                            var ad, al, aj, ai;
                            if (e[typeof ae] && ae) {
                                if ((ai = u.call(ae)) == U) {
                                    al = ae
                                } else {
                                    if (ai == E) {
                                        aj = {};
                                        for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)) {}
                                    }
                                }
                            }
                            if (af) {
                                if ((ai = u.call(af)) == N) {
                                    if ((af -= af % 1) > 0) {
                                        for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") {}
                                    }
                                } else {
                                    if (ai == O) {
                                        ad = af.length <= 10 ? af : af.slice(0, 10)
                                    }
                                }
                            }
                            return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
                        }
                    }
                    if (!o("json-parse")) {
                        var M = R.fromCharCode;
                        var l = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };
                        var G, X;
                        var H = function() {
                            G = X = null;
                            throw T()
                        };
                        var y = function() {
                            var ah = X,
                                af = ah.length,
                                ag, ae, ac, ai, ad;
                            while (G < af) {
                                ad = ah.charCodeAt(G);
                                switch (ad) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        G++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        ag = F ? ah.charAt(G) : ah[G];
                                        G++;
                                        return ag;
                                    case 34:
                                        for (ag = "@", G++; G < af;) {
                                            ad = ah.charCodeAt(G);
                                            if (ad < 32) {
                                                H()
                                            } else {
                                                if (ad == 92) {
                                                    ad = ah.charCodeAt(++G);
                                                    switch (ad) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            ag += l[ad];
                                                            G++;
                                                            break;
                                                        case 117:
                                                            ae = ++G;
                                                            for (ac = G + 4; G < ac; G++) {
                                                                ad = ah.charCodeAt(G);
                                                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) {
                                                                    H()
                                                                }
                                                            }
                                                            ag += M("0x" + ah.slice(ae, G));
                                                            break;
                                                        default:
                                                            H()
                                                    }
                                                } else {
                                                    if (ad == 34) {
                                                        break
                                                    }
                                                    ad = ah.charCodeAt(G);
                                                    ae = G;
                                                    while (ad >= 32 && ad != 92 && ad != 34) {
                                                        ad = ah.charCodeAt(++G)
                                                    }
                                                    ag += ah.slice(ae, G)
                                                }
                                            }
                                        }
                                        if (ah.charCodeAt(G) == 34) {
                                            G++;
                                            return ag
                                        }
                                        H();
                                    default:
                                        ae = G;
                                        if (ad == 45) {
                                            ai = true;
                                            ad = ah.charCodeAt(++G)
                                        }
                                        if (ad >= 48 && ad <= 57) {
                                            if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                                                H()
                                            }
                                            ai = false;
                                            for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {}
                                            if (ah.charCodeAt(G) == 46) {
                                                ac = ++G;
                                                for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            ad = ah.charCodeAt(G);
                                            if (ad == 101 || ad == 69) {
                                                ad = ah.charCodeAt(++G);
                                                if (ad == 43 || ad == 45) {
                                                    G++
                                                }
                                                for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            return +ah.slice(ae, G)
                                        }
                                        if (ai) {
                                            H()
                                        }
                                        if (ah.slice(G, G + 4) == "true") {
                                            G += 4;
                                            return true
                                        } else {
                                            if (ah.slice(G, G + 5) == "false") {
                                                G += 5;
                                                return false
                                            } else {
                                                if (ah.slice(G, G + 4) == "null") {
                                                    G += 4;
                                                    return null
                                                }
                                            }
                                        }
                                        H()
                                }
                            }
                            return "$"
                        };
                        var W = function(ad) {
                            var ac, ae;
                            if (ad == "$") {
                                H()
                            }
                            if (typeof ad == "string") {
                                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                                    return ad.slice(1)
                                }
                                if (ad == "[") {
                                    ac = [];
                                    for (;; ae || (ae = true)) {
                                        ad = y();
                                        if (ad == "]") {
                                            break
                                        }
                                        if (ae) {
                                            if (ad == ",") {
                                                ad = y();
                                                if (ad == "]") {
                                                    H()
                                                }
                                            } else {
                                                H()
                                            }
                                        }
                                        if (ad == ",") {
                                            H()
                                        }
                                        ac.push(W(ad))
                                    }
                                    return ac
                                } else {
                                    if (ad == "{") {
                                        ac = {};
                                        for (;; ae || (ae = true)) {
                                            ad = y();
                                            if (ad == "}") {
                                                break
                                            }
                                            if (ae) {
                                                if (ad == ",") {
                                                    ad = y();
                                                    if (ad == "}") {
                                                        H()
                                                    }
                                                } else {
                                                    H()
                                                }
                                            }
                                            if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") {
                                                H()
                                            }
                                            ac[ad.slice(1)] = W(y())
                                        }
                                        return ac
                                    }
                                }
                                H()
                            }
                            return ad
                        };
                        var P = function(ae, ad, af) {
                            var ac = w(ae, ad, af);
                            if (ac === L) {
                                delete ae[ad]
                            } else {
                                ae[ad] = ac
                            }
                        };
                        var w = function(af, ae, ag) {
                            var ad = af[ae],
                                ac;
                            if (typeof ad == "object" && ad) {
                                if (u.call(ad) == E) {
                                    for (ac = ad.length; ac--;) {
                                        P(ad, ac, ag)
                                    }
                                } else {
                                    m(ad, function(ah) {
                                        P(ad, ah, ag)
                                    })
                                }
                            }
                            return ag.call(af, ae, ad)
                        };
                        V.parse = function(ae, af) {
                            var ac, ad;
                            G = 0;
                            X = "" + ae;
                            ac = W(y());
                            if (y() != "$") {
                                H()
                            }
                            G = X = null;
                            return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac
                        }
                    }
                }
                V.runInContext = j;
                return V
            }
            if (h && !c) {
                j(i, h)
            } else {
                var f = i.JSON,
                    k = i.JSON3,
                    d = false;
                var g = j(i, (i.JSON3 = {
                    noConflict: function() {
                        if (!d) {
                            d = true;
                            i.JSON = f;
                            i.JSON3 = k;
                            f = k = null
                        }
                        return g
                    }
                }));
                i.JSON = {
                    parse: g.parse,
                    stringify: g.stringify
                }
            }
            if (c) {
                define(function() {
                    return g
                })
            }
        }).call(this);
        JSON_PIWIK = a
    })()
}
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Piwik !== "object") {
    window.Piwik = (function() {
        var p, a = {},
            v = {},
            D = document,
            g = navigator,
            T = screen,
            Q = window,
            h = Q.performance || Q.mozPerformance || Q.msPerformance || Q.webkitPerformance,
            r = Q.encodeURIComponent,
            P = Q.decodeURIComponent,
            k = unescape,
            F = [],
            B, d, aa = [];

        function n(ah) {
            try {
                return P(ah)
            } catch (ai) {
                return unescape(ah)
            }
        }

        function G(ai) {
            var ah = typeof ai;
            return ah !== "undefined"
        }

        function x(ah) {
            return typeof ah === "function"
        }

        function S(ah) {
            return typeof ah === "object"
        }

        function u(ah) {
            return typeof ah === "string" || ah instanceof String
        }

        function y(ai) {
            if (!ai) {
                return true
            }
            var ah;
            var aj = true;
            for (ah in ai) {
                if (Object.prototype.hasOwnProperty.call(ai, ah)) {
                    aj = false
                }
            }
            return aj
        }

        function ad(ah) {
            if (console !== undefined && console && console.error) {
                console.error(ah)
            }
        }

        function Z() {
            var am, al, ao, ai, ah;
            for (am = 0; am < arguments.length; am += 1) {
                ah = null;
                if (arguments[am] && arguments[am].slice) {
                    ah = arguments[am].slice()
                }
                ai = arguments[am];
                ao = ai.shift();
                var an, aj;
                var ak = u(ao) && ao.indexOf("::") > 0;
                if (ak) {
                    an = ao.split("::");
                    aj = an[0];
                    ao = an[1];
                    if ("object" === typeof d[aj] && "function" === typeof d[aj][ao]) {
                        d[aj][ao].apply(d[aj], ai)
                    } else {
                        if (ah) {
                            aa.push(ah)
                        }
                    }
                } else {
                    for (al = 0; al < F.length; al++) {
                        if (u(ao)) {
                            aj = F[al];
                            var ap = ao.indexOf(".") > 0;
                            if (ap) {
                                an = ao.split(".");
                                if (aj && "object" === typeof aj[an[0]]) {
                                    aj = aj[an[0]];
                                    ao = an[1]
                                } else {
                                    if (ah) {
                                        aa.push(ah);
                                        break
                                    }
                                }
                            }
                            if (aj[ao]) {
                                aj[ao].apply(aj, ai)
                            } else {
                                var aq = "The method '" + ao + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript';
                                ad(aq);
                                if (!ap) {
                                    throw new TypeError(aq)
                                }
                            }
                            if (ao === "addTracker") {
                                break
                            }
                            if (ao === "setTrackerUrl" || ao === "setSiteId") {
                                break
                            }
                        } else {
                            ao.apply(F[al], ai)
                        }
                    }
                }
            }
        }

        function ag(ak, aj, ai, ah) {
            if (ak.addEventListener) {
                ak.addEventListener(aj, ai, ah);
                return true
            }
            if (ak.attachEvent) {
                return ak.attachEvent("on" + aj, ai)
            }
            ak["on" + aj] = ai
        }

        function l(ah) {
            if (D.readyState === "complete") {
                ah()
            } else {
                if (Q.addEventListener) {
                    Q.addEventListener("load", ah)
                } else {
                    if (Q.attachEvent) {
                        Q.attachEvent("onload", ah)
                    }
                }
            }
        }

        function o(ak) {
            var ah = false;
            if (D.attachEvent) {
                ah = D.readyState === "complete"
            } else {
                ah = D.readyState !== "loading"
            }
            if (ah) {
                ak();
                return
            }
            var aj;
            if (D.addEventListener) {
                ag(D, "DOMContentLoaded", function ai() {
                    D.removeEventListener("DOMContentLoaded", ai, false);
                    if (!ah) {
                        ah = true;
                        ak()
                    }
                })
            } else {
                if (D.attachEvent) {
                    D.attachEvent("onreadystatechange", function ai() {
                        if (D.readyState === "complete") {
                            D.detachEvent("onreadystatechange", ai);
                            if (!ah) {
                                ah = true;
                                ak()
                            }
                        }
                    });
                    if (D.documentElement.doScroll && Q === Q.top) {
                        (function ai() {
                            if (!ah) {
                                try {
                                    D.documentElement.doScroll("left")
                                } catch (al) {
                                    setTimeout(ai, 0);
                                    return
                                }
                                ah = true;
                                ak()
                            }
                        }())
                    }
                }
            }
            ag(Q, "load", function() {
                if (!ah) {
                    ah = true;
                    ak()
                }
            }, false)
        }

        function W(ai, an, ao) {
            if (!ai) {
                return ""
            }
            var ah = "",
                ak, aj, al, am;
            for (ak in a) {
                if (Object.prototype.hasOwnProperty.call(a, ak)) {
                    am = a[ak] && "function" === typeof a[ak][ai];
                    if (am) {
                        aj = a[ak][ai];
                        al = aj(an || {}, ao);
                        if (al) {
                            ah += al
                        }
                    }
                }
            }
            return ah
        }

        function ab() {
            var ah;
            W("unload");
            if (p) {
                do {
                    ah = new Date()
                } while (ah.getTimeAlias() < p)
            }
        }

        function m(aj, ai) {
            var ah = D.createElement("script");
            ah.type = "text/javascript";
            ah.src = aj;
            if (ah.readyState) {
                ah.onreadystatechange = function() {
                    var ak = this.readyState;
                    if (ak === "loaded" || ak === "complete") {
                        ah.onreadystatechange = null;
                        ai()
                    }
                }
            } else {
                ah.onload = ai
            }
            D.getElementsByTagName("head")[0].appendChild(ah)
        }

        function H() {
            var ah = "";
            try {
                ah = Q.top.document.referrer
            } catch (aj) {
                if (Q.parent) {
                    try {
                        ah = Q.parent.document.referrer
                    } catch (ai) {
                        ah = ""
                    }
                }
            }
            if (ah === "") {
                ah = D.referrer
            }
            return ah
        }

        function q(ah) {
            var aj = new RegExp("^([a-z]+):"),
                ai = aj.exec(ah);
            return ai ? ai[1] : null
        }

        function c(ah) {
            var aj = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                ai = aj.exec(ah);
            return ai ? ai[1] : ah
        }

        function ac(ai, ah) {
            ai = String(ai);
            return ai.lastIndexOf(ah, 0) === 0
        }

        function O(ai, ah) {
            ai = String(ai);
            return ai.indexOf(ah, ai.length - ah.length) !== -1
        }

        function w(ai, ah) {
            ai = String(ai);
            return ai.indexOf(ah) !== -1
        }

        function f(ai, ah) {
            ai = String(ai);
            return ai.substr(0, ai.length - ah)
        }

        function C(ak, aj, am) {
            ak = String(ak);
            if (!am) {
                am = ""
            }
            var ah = ak.indexOf("#");
            var an = ak.length;
            if (ah === -1) {
                ah = an
            }
            var al = ak.substr(0, ah);
            var ai = ak.substr(ah, an - ah);
            if (al.indexOf("?") === -1) {
                al += "?"
            } else {
                if (!O(al, "?")) {
                    al += "&"
                }
            }
            return al + r(aj) + "=" + r(am) + ai
        }

        function j(ai, aj) {
            ai = String(ai);
            if (ai.indexOf("?" + aj + "=") === -1 && ai.indexOf("&" + aj + "=") === -1) {
                return ai
            }
            var ak = ai.indexOf("?");
            if (ak === -1) {
                return ai
            }
            var ah = ai.substr(ak + 1);
            var ao = ai.substr(0, ak);
            if (ah) {
                var ap = "";
                var ar = ah.indexOf("#");
                if (ar !== -1) {
                    ap = ah.substr(ar + 1);
                    ah = ah.substr(0, ar)
                }
                var al;
                var an = ah.split("&");
                var am = an.length - 1;
                for (am; am >= 0; am--) {
                    al = an[am].split("=")[0];
                    if (al === aj) {
                        an.splice(am, 1)
                    }
                }
                var aq = an.join("&");
                if (aq) {
                    ao = ao + "?" + aq
                }
                if (ap) {
                    ao += "#" + ap
                }
            }
            return ao
        }

        function e(aj, ai) {
            var ah = "[\\?&#]" + ai + "=([^&#]*)";
            var al = new RegExp(ah);
            var ak = al.exec(aj);
            return ak ? P(ak[1]) : ""
        }

        function A(ah) {
            return unescape(r(ah))
        }

        function af(ax) {
            var aj = function(aD, aC) {
                    return (aD << aC) | (aD >>> (32 - aC))
                },
                ay = function(aF) {
                    var aD = "",
                        aE, aC;
                    for (aE = 7; aE >= 0; aE--) {
                        aC = (aF >>> (aE * 4)) & 15;
                        aD += aC.toString(16)
                    }
                    return aD
                },
                am, aA, az, ai = [],
                aq = 1732584193,
                ao = 4023233417,
                an = 2562383102,
                al = 271733878,
                ak = 3285377520,
                aw, av, au, at, ar, aB, ah, ap = [];
            ax = A(ax);
            ah = ax.length;
            for (aA = 0; aA < ah - 3; aA += 4) {
                az = ax.charCodeAt(aA) << 24 | ax.charCodeAt(aA + 1) << 16 | ax.charCodeAt(aA + 2) << 8 | ax.charCodeAt(aA + 3);
                ap.push(az)
            }
            switch (ah & 3) {
                case 0:
                    aA = 2147483648;
                    break;
                case 1:
                    aA = ax.charCodeAt(ah - 1) << 24 | 8388608;
                    break;
                case 2:
                    aA = ax.charCodeAt(ah - 2) << 24 | ax.charCodeAt(ah - 1) << 16 | 32768;
                    break;
                case 3:
                    aA = ax.charCodeAt(ah - 3) << 24 | ax.charCodeAt(ah - 2) << 16 | ax.charCodeAt(ah - 1) << 8 | 128;
                    break
            }
            ap.push(aA);
            while ((ap.length & 15) !== 14) {
                ap.push(0)
            }
            ap.push(ah >>> 29);
            ap.push((ah << 3) & 4294967295);
            for (am = 0; am < ap.length; am += 16) {
                for (aA = 0; aA < 16; aA++) {
                    ai[aA] = ap[am + aA]
                }
                for (aA = 16; aA <= 79; aA++) {
                    ai[aA] = aj(ai[aA - 3] ^ ai[aA - 8] ^ ai[aA - 14] ^ ai[aA - 16], 1)
                }
                aw = aq;
                av = ao;
                au = an;
                at = al;
                ar = ak;
                for (aA = 0; aA <= 19; aA++) {
                    aB = (aj(aw, 5) + ((av & au) | (~av & at)) + ar + ai[aA] + 1518500249) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                for (aA = 20; aA <= 39; aA++) {
                    aB = (aj(aw, 5) + (av ^ au ^ at) + ar + ai[aA] + 1859775393) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                for (aA = 40; aA <= 59; aA++) {
                    aB = (aj(aw, 5) + ((av & au) | (av & at) | (au & at)) + ar + ai[aA] + 2400959708) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                for (aA = 60; aA <= 79; aA++) {
                    aB = (aj(aw, 5) + (av ^ au ^ at) + ar + ai[aA] + 3395469782) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                aq = (aq + aw) & 4294967295;
                ao = (ao + av) & 4294967295;
                an = (an + au) & 4294967295;
                al = (al + at) & 4294967295;
                ak = (ak + ar) & 4294967295
            }
            aB = ay(aq) + ay(ao) + ay(an) + ay(al) + ay(ak);
            return aB.toLowerCase()
        }

        function V(aj, ah, ai) {
            if (!aj) {
                aj = ""
            }
            if (!ah) {
                ah = ""
            }
            if (aj === "translate.googleusercontent.com") {
                if (ai === "") {
                    ai = ah
                }
                ah = e(ah, "u");
                aj = c(ah)
            } else {
                if (aj === "cc.bingj.com" || aj === "webcache.googleusercontent.com" || aj.slice(0, 5) === "74.6.") {
                    ah = D.links[0].href;
                    aj = c(ah)
                }
            }
            return [aj, ah, ai]
        }

        function I(ai) {
            var ah = ai.length;
            if (ai.charAt(--ah) === ".") {
                ai = ai.slice(0, ah)
            }
            if (ai.slice(0, 2) === "*.") {
                ai = ai.slice(1)
            }
            if (ai.indexOf("/") !== -1) {
                ai = ai.substr(0, ai.indexOf("/"))
            }
            return ai
        }

        function ae(ai) {
            ai = ai && ai.text ? ai.text : ai;
            if (!u(ai)) {
                var ah = D.getElementsByTagName("title");
                if (ah && G(ah[0])) {
                    ai = ah[0].text
                }
            }
            return ai
        }

        function M(ah) {
            if (!ah) {
                return []
            }
            if (!G(ah.children) && G(ah.childNodes)) {
                return ah.children
            }
            if (G(ah.children)) {
                return ah.children
            }
            return []
        }

        function R(ai, ah) {
            if (!ai || !ah) {
                return false
            }
            if (ai.contains) {
                return ai.contains(ah)
            }
            if (ai === ah) {
                return true
            }
            if (ai.compareDocumentPosition) {
                return !!(ai.compareDocumentPosition(ah) & 16)
            }
            return false
        }

        function J(aj, ak) {
            if (aj && aj.indexOf) {
                return aj.indexOf(ak)
            }
            if (!G(aj) || aj === null) {
                return -1
            }
            if (!aj.length) {
                return -1
            }
            var ah = aj.length;
            if (ah === 0) {
                return -1
            }
            var ai = 0;
            while (ai < ah) {
                if (aj[ai] === ak) {
                    return ai
                }
                ai++
            }
            return -1
        }

        function i(aj) {
            if (!aj) {
                return false
            }

            function ah(al, am) {
                if (Q.getComputedStyle) {
                    return D.defaultView.getComputedStyle(al, null)[am]
                }
                if (al.currentStyle) {
                    return al.currentStyle[am]
                }
            }

            function ak(al) {
                al = al.parentNode;
                while (al) {
                    if (al === D) {
                        return true
                    }
                    al = al.parentNode
                }
                return false
            }

            function ai(an, au, al, aq, ao, ar, ap) {
                var am = an.parentNode,
                    at = 1;
                if (!ak(an)) {
                    return false
                }
                if (9 === am.nodeType) {
                    return true
                }
                if ("0" === ah(an, "opacity") || "none" === ah(an, "display") || "hidden" === ah(an, "visibility")) {
                    return false
                }
                if (!G(au) || !G(al) || !G(aq) || !G(ao) || !G(ar) || !G(ap)) {
                    au = an.offsetTop;
                    ao = an.offsetLeft;
                    aq = au + an.offsetHeight;
                    al = ao + an.offsetWidth;
                    ar = an.offsetWidth;
                    ap = an.offsetHeight
                }
                if (aj === an && (0 === ap || 0 === ar) && "hidden" === ah(an, "overflow")) {
                    return false
                }
                if (am) {
                    if (("hidden" === ah(am, "overflow") || "scroll" === ah(am, "overflow"))) {
                        if (ao + at > am.offsetWidth + am.scrollLeft || ao + ar - at < am.scrollLeft || au + at > am.offsetHeight + am.scrollTop || au + ap - at < am.scrollTop) {
                            return false
                        }
                    }
                    if (an.offsetParent === am) {
                        ao += am.offsetLeft;
                        au += am.offsetTop
                    }
                    return ai(am, au, al, aq, ao, ar, ap)
                }
                return true
            }
            return ai(aj)
        }
        var Y = {
            htmlCollectionToArray: function(aj) {
                var ah = [],
                    ai;
                if (!aj || !aj.length) {
                    return ah
                }
                for (ai = 0; ai < aj.length; ai++) {
                    ah.push(aj[ai])
                }
                return ah
            },
            find: function(ah) {
                if (!document.querySelectorAll || !ah) {
                    return []
                }
                var ai = document.querySelectorAll(ah);
                return this.htmlCollectionToArray(ai)
            },
            findMultiple: function(aj) {
                if (!aj || !aj.length) {
                    return []
                }
                var ai, ak;
                var ah = [];
                for (ai = 0; ai < aj.length; ai++) {
                    ak = this.find(aj[ai]);
                    ah = ah.concat(ak)
                }
                ah = this.makeNodesUnique(ah);
                return ah
            },
            findNodesByTagName: function(ai, ah) {
                if (!ai || !ah || !ai.getElementsByTagName) {
                    return []
                }
                var aj = ai.getElementsByTagName(ah);
                return this.htmlCollectionToArray(aj)
            },
            makeNodesUnique: function(ah) {
                var am = [].concat(ah);
                ah.sort(function(ao, an) {
                    if (ao === an) {
                        return 0
                    }
                    var aq = J(am, ao);
                    var ap = J(am, an);
                    if (aq === ap) {
                        return 0
                    }
                    return aq > ap ? -1 : 1
                });
                if (ah.length <= 1) {
                    return ah
                }
                var ai = 0;
                var ak = 0;
                var al = [];
                var aj;
                aj = ah[ai++];
                while (aj) {
                    if (aj === ah[ai]) {
                        ak = al.push(ai)
                    }
                    aj = ah[ai++] || null
                }
                while (ak--) {
                    ah.splice(al[ak], 1)
                }
                return ah
            },
            getAttributeValueFromNode: function(al, aj) {
                if (!this.hasNodeAttribute(al, aj)) {
                    return
                }
                if (al && al.getAttribute) {
                    return al.getAttribute(aj)
                }
                if (!al || !al.attributes) {
                    return
                }
                var ak = (typeof al.attributes[aj]);
                if ("undefined" === ak) {
                    return
                }
                if (al.attributes[aj].value) {
                    return al.attributes[aj].value
                }
                if (al.attributes[aj].nodeValue) {
                    return al.attributes[aj].nodeValue
                }
                var ai;
                var ah = al.attributes;
                if (!ah) {
                    return
                }
                for (ai = 0; ai < ah.length; ai++) {
                    if (ah[ai].nodeName === aj) {
                        return ah[ai].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(ai, ah) {
                var aj = this.getAttributeValueFromNode(ai, ah);
                return !!aj
            },
            hasNodeAttribute: function(aj, ah) {
                if (aj && aj.hasAttribute) {
                    return aj.hasAttribute(ah)
                }
                if (aj && aj.attributes) {
                    var ai = (typeof aj.attributes[ah]);
                    return "undefined" !== ai
                }
                return false
            },
            hasNodeCssClass: function(aj, ah) {
                if (aj && ah && aj.className) {
                    var ai = typeof aj.className === "string" ? aj.className.split(" ") : [];
                    if (-1 !== J(ai, ah)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(al, aj, ah) {
                if (!ah) {
                    ah = []
                }
                if (!al || !aj) {
                    return ah
                }
                var ak = M(al);
                if (!ak || !ak.length) {
                    return ah
                }
                var ai, am;
                for (ai = 0; ai < ak.length; ai++) {
                    am = ak[ai];
                    if (this.hasNodeAttribute(am, aj)) {
                        ah.push(am)
                    }
                    ah = this.findNodesHavingAttribute(am, aj, ah)
                }
                return ah
            },
            findFirstNodeHavingAttribute: function(aj, ai) {
                if (!aj || !ai) {
                    return
                }
                if (this.hasNodeAttribute(aj, ai)) {
                    return aj
                }
                var ah = this.findNodesHavingAttribute(aj, ai);
                if (ah && ah.length) {
                    return ah[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(ak, aj) {
                if (!ak || !aj) {
                    return
                }
                if (this.hasNodeAttributeWithValue(ak, aj)) {
                    return ak
                }
                var ah = this.findNodesHavingAttribute(ak, aj);
                if (!ah || !ah.length) {
                    return
                }
                var ai;
                for (ai = 0; ai < ah.length; ai++) {
                    if (this.getAttributeValueFromNode(ah[ai], aj)) {
                        return ah[ai]
                    }
                }
            },
            findNodesHavingCssClass: function(al, ak, ah) {
                if (!ah) {
                    ah = []
                }
                if (!al || !ak) {
                    return ah
                }
                if (al.getElementsByClassName) {
                    var am = al.getElementsByClassName(ak);
                    return this.htmlCollectionToArray(am)
                }
                var aj = M(al);
                if (!aj || !aj.length) {
                    return []
                }
                var ai, an;
                for (ai = 0; ai < aj.length; ai++) {
                    an = aj[ai];
                    if (this.hasNodeCssClass(an, ak)) {
                        ah.push(an)
                    }
                    ah = this.findNodesHavingCssClass(an, ak, ah)
                }
                return ah
            },
            findFirstNodeHavingClass: function(aj, ai) {
                if (!aj || !ai) {
                    return
                }
                if (this.hasNodeCssClass(aj, ai)) {
                    return aj
                }
                var ah = this.findNodesHavingCssClass(aj, ai);
                if (ah && ah.length) {
                    return ah[0]
                }
            },
            isLinkElement: function(ai) {
                if (!ai) {
                    return false
                }
                var ah = String(ai.nodeName).toLowerCase();
                var ak = ["a", "area"];
                var aj = J(ak, ah);
                return aj !== -1
            },
            setAnyAttribute: function(ai, ah, aj) {
                if (!ai || !ah) {
                    return
                }
                if (ai.setAttribute) {
                    ai.setAttribute(ah, aj)
                } else {
                    ai[ah] = aj
                }
            }
        };
        var t = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var ai = "." + this.CONTENT_CLASS;
                var ah = "[" + this.CONTENT_ATTR + "]";
                var aj = Y.findMultiple([ai, ah]);
                return aj
            },
            findContentNodesWithinNode: function(ak) {
                if (!ak) {
                    return []
                }
                var ai = Y.findNodesHavingCssClass(ak, this.CONTENT_CLASS);
                var ah = Y.findNodesHavingAttribute(ak, this.CONTENT_ATTR);
                if (ah && ah.length) {
                    var aj;
                    for (aj = 0; aj < ah.length; aj++) {
                        ai.push(ah[aj])
                    }
                }
                if (Y.hasNodeAttribute(ak, this.CONTENT_ATTR)) {
                    ai.push(ak)
                } else {
                    if (Y.hasNodeCssClass(ak, this.CONTENT_CLASS)) {
                        ai.push(ak)
                    }
                }
                ai = Y.makeNodesUnique(ai);
                return ai
            },
            findParentContentNode: function(ai) {
                if (!ai) {
                    return
                }
                var aj = ai;
                var ah = 0;
                while (aj && aj !== D && aj.parentNode) {
                    if (Y.hasNodeAttribute(aj, this.CONTENT_ATTR)) {
                        return aj
                    }
                    if (Y.hasNodeCssClass(aj, this.CONTENT_CLASS)) {
                        return aj
                    }
                    aj = aj.parentNode;
                    if (ah > 1000) {
                        break
                    }
                    ah++
                }
            },
            findPieceNode: function(ai) {
                var ah;
                ah = Y.findFirstNodeHavingAttribute(ai, this.CONTENT_PIECE_ATTR);
                if (!ah) {
                    ah = Y.findFirstNodeHavingClass(ai, this.CONTENT_PIECE_CLASS)
                }
                if (ah) {
                    return ah
                }
                return ai
            },
            findTargetNodeNoDefault: function(ah) {
                if (!ah) {
                    return
                }
                var ai = Y.findFirstNodeHavingAttributeWithValue(ah, this.CONTENT_TARGET_ATTR);
                if (ai) {
                    return ai
                }
                ai = Y.findFirstNodeHavingAttribute(ah, this.CONTENT_TARGET_ATTR);
                if (ai) {
                    return ai
                }
                ai = Y.findFirstNodeHavingClass(ah, this.CONTENT_TARGET_CLASS);
                if (ai) {
                    return ai
                }
            },
            findTargetNode: function(ah) {
                var ai = this.findTargetNodeNoDefault(ah);
                if (ai) {
                    return ai
                }
                return ah
            },
            findContentName: function(ai) {
                if (!ai) {
                    return
                }
                var al = Y.findFirstNodeHavingAttributeWithValue(ai, this.CONTENT_NAME_ATTR);
                if (al) {
                    return Y.getAttributeValueFromNode(al, this.CONTENT_NAME_ATTR)
                }
                var ah = this.findContentPiece(ai);
                if (ah) {
                    return this.removeDomainIfIsInLink(ah)
                }
                if (Y.hasNodeAttributeWithValue(ai, "title")) {
                    return Y.getAttributeValueFromNode(ai, "title")
                }
                var aj = this.findPieceNode(ai);
                if (Y.hasNodeAttributeWithValue(aj, "title")) {
                    return Y.getAttributeValueFromNode(aj, "title")
                }
                var ak = this.findTargetNode(ai);
                if (Y.hasNodeAttributeWithValue(ak, "title")) {
                    return Y.getAttributeValueFromNode(ak, "title")
                }
            },
            findContentPiece: function(ai) {
                if (!ai) {
                    return
                }
                var ak = Y.findFirstNodeHavingAttributeWithValue(ai, this.CONTENT_PIECE_ATTR);
                if (ak) {
                    return Y.getAttributeValueFromNode(ak, this.CONTENT_PIECE_ATTR)
                }
                var ah = this.findPieceNode(ai);
                var aj = this.findMediaUrlInNode(ah);
                if (aj) {
                    return this.toAbsoluteUrl(aj)
                }
            },
            findContentTarget: function(aj) {
                if (!aj) {
                    return
                }
                var ak = this.findTargetNode(aj);
                if (Y.hasNodeAttributeWithValue(ak, this.CONTENT_TARGET_ATTR)) {
                    return Y.getAttributeValueFromNode(ak, this.CONTENT_TARGET_ATTR)
                }
                var ai;
                if (Y.hasNodeAttributeWithValue(ak, "href")) {
                    ai = Y.getAttributeValueFromNode(ak, "href");
                    return this.toAbsoluteUrl(ai)
                }
                var ah = this.findPieceNode(aj);
                if (Y.hasNodeAttributeWithValue(ah, "href")) {
                    ai = Y.getAttributeValueFromNode(ah, "href");
                    return this.toAbsoluteUrl(ai)
                }
            },
            isSameDomain: function(ah) {
                if (!ah || !ah.indexOf) {
                    return false
                }
                if (0 === ah.indexOf(this.getLocation().origin)) {
                    return true
                }
                var ai = ah.indexOf(this.getLocation().host);
                if (8 >= ai && 0 <= ai) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(aj) {
                var ai = "^https?://[^/]+";
                var ah = "^.*//[^/]+";
                if (aj && aj.search && -1 !== aj.search(new RegExp(ai)) && this.isSameDomain(aj)) {
                    aj = aj.replace(new RegExp(ah), "");
                    if (!aj) {
                        aj = "/"
                    }
                }
                return aj
            },
            findMediaUrlInNode: function(al) {
                if (!al) {
                    return
                }
                var aj = ["img", "embed", "video", "audio"];
                var ah = al.nodeName.toLowerCase();
                if (-1 !== J(aj, ah) && Y.findFirstNodeHavingAttributeWithValue(al, "src")) {
                    var ak = Y.findFirstNodeHavingAttributeWithValue(al, "src");
                    return Y.getAttributeValueFromNode(ak, "src")
                }
                if (ah === "object" && Y.hasNodeAttributeWithValue(al, "data")) {
                    return Y.getAttributeValueFromNode(al, "data")
                }
                if (ah === "object") {
                    var am = Y.findNodesByTagName(al, "param");
                    if (am && am.length) {
                        var ai;
                        for (ai = 0; ai < am.length; ai++) {
                            if ("movie" === Y.getAttributeValueFromNode(am[ai], "name") && Y.hasNodeAttributeWithValue(am[ai], "value")) {
                                return Y.getAttributeValueFromNode(am[ai], "value")
                            }
                        }
                    }
                    var an = Y.findNodesByTagName(al, "embed");
                    if (an && an.length) {
                        return this.findMediaUrlInNode(an[0])
                    }
                }
            },
            trim: function(ah) {
                if (ah && String(ah) === ah) {
                    return ah.replace(/^\s+|\s+$/g, "")
                }
                return ah
            },
            isOrWasNodeInViewport: function(am) {
                if (!am || !am.getBoundingClientRect || am.nodeType !== 1) {
                    return true
                }
                var al = am.getBoundingClientRect();
                var ak = D.documentElement || {};
                var aj = al.top < 0;
                if (aj && am.offsetTop) {
                    aj = (am.offsetTop + al.height) > 0
                }
                var ai = ak.clientWidth;
                if (Q.innerWidth && ai > Q.innerWidth) {
                    ai = Q.innerWidth
                }
                var ah = ak.clientHeight;
                if (Q.innerHeight && ah > Q.innerHeight) {
                    ah = Q.innerHeight
                }
                return ((al.bottom > 0 || aj) && al.right > 0 && al.left < ai && ((al.top < ah) || aj))
            },
            isNodeVisible: function(ai) {
                var ah = i(ai);
                var aj = this.isOrWasNodeInViewport(ai);
                return ah && aj
            },
            buildInteractionRequestParams: function(ah, ai, aj, ak) {
                var al = "";
                if (ah) {
                    al += "c_i=" + r(ah)
                }
                if (ai) {
                    if (al) {
                        al += "&"
                    }
                    al += "c_n=" + r(ai)
                }
                if (aj) {
                    if (al) {
                        al += "&"
                    }
                    al += "c_p=" + r(aj)
                }
                if (ak) {
                    if (al) {
                        al += "&"
                    }
                    al += "c_t=" + r(ak)
                }
                return al
            },
            buildImpressionRequestParams: function(ah, ai, aj) {
                var ak = "c_n=" + r(ah) + "&c_p=" + r(ai);
                if (aj) {
                    ak += "&c_t=" + r(aj)
                }
                return ak
            },
            buildContentBlock: function(aj) {
                if (!aj) {
                    return
                }
                var ah = this.findContentName(aj);
                var ai = this.findContentPiece(aj);
                var ak = this.findContentTarget(aj);
                ah = this.trim(ah);
                ai = this.trim(ai);
                ak = this.trim(ak);
                return {
                    name: ah || "Unknown",
                    piece: ai || "Unknown",
                    target: ak || ""
                }
            },
            collectContent: function(ak) {
                if (!ak || !ak.length) {
                    return []
                }
                var aj = [];
                var ah, ai;
                for (ah = 0; ah < ak.length; ah++) {
                    ai = this.buildContentBlock(ak[ah]);
                    if (G(ai)) {
                        aj.push(ai)
                    }
                }
                return aj
            },
            setLocation: function(ah) {
                this.location = ah
            },
            getLocation: function() {
                var ah = this.location || Q.location;
                if (!ah.origin) {
                    ah.origin = ah.protocol + "//" + ah.hostname + (ah.port ? ":" + ah.port : "")
                }
                return ah
            },
            toAbsoluteUrl: function(ai) {
                if ((!ai || String(ai) !== ai) && ai !== "") {
                    return ai
                }
                if ("" === ai) {
                    return this.getLocation().href
                }
                if (ai.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + ai
                }
                if (ai.search(/:\/\//) !== -1) {
                    return ai
                }
                if (0 === ai.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + ai
                }
                if (0 === ai.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + ai
                }
                if (0 === ai.search("^[a-zA-Z]{2,11}:")) {
                    return ai
                }
                if (ai.search(/^\//) !== -1) {
                    return this.getLocation().origin + ai
                }
                var ah = "(.*/)";
                var aj = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ah))[0];
                return aj + ai
            },
            isUrlToCurrentDomain: function(ai) {
                var aj = this.toAbsoluteUrl(ai);
                if (!aj) {
                    return false
                }
                var ah = this.getLocation().origin;
                if (ah === aj) {
                    return true
                }
                if (0 === String(aj).indexOf(ah)) {
                    if (":" === String(aj).substr(ah.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(ai, ah) {
                if (!ai || !ah) {
                    return
                }
                Y.setAnyAttribute(ai, "href", ah)
            },
            shouldIgnoreInteraction: function(aj) {
                var ai = Y.hasNodeAttribute(aj, this.CONTENT_IGNOREINTERACTION_ATTR);
                var ah = Y.hasNodeCssClass(aj, this.CONTENT_IGNOREINTERACTION_CLASS);
                return ai || ah
            }
        };

        function L(ai, al) {
            if (al) {
                return al
            }
            if (w(ai, "?")) {
                var ak = ai.indexOf("?");
                ai = ai.slice(0, ak)
            }
            if (O(ai, "piwik.php")) {
                ai = f(ai, "piwik.php".length)
            } else {
                if (O(ai, ".php")) {
                    var ah = ai.lastIndexOf("/");
                    var aj = 1;
                    ai = ai.slice(0, ah + aj)
                }
            }
            if (O(ai, "/js/")) {
                ai = f(ai, "js/".length)
            }
            return ai
        }

        function K(an) {
            var ap = "Piwik_Overlay";
            var ai = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var aj = ai.exec(D.referrer);
            if (aj) {
                var al = aj[1];
                if (al !== String(an)) {
                    return false
                }
                var am = aj[2],
                    ah = aj[3],
                    ak = aj[4];
                if (!ak) {
                    ak = ""
                } else {
                    if (ak.indexOf("&segment=") === 0) {
                        ak = ak.substr("&segment=".length)
                    }
                }
                Q.name = ap + "###" + am + "###" + ah + "###" + ak
            }
            var ao = Q.name.split("###");
            return ao.length === 4 && ao[0] === ap
        }

        function U(ai, ao, ak) {
            var an = Q.name.split("###"),
                am = an[1],
                ah = an[2],
                al = an[3],
                aj = L(ai, ao);
            m(aj + "plugins/Overlay/client/client.js?v=1", function() {
                Piwik_Overlay_Client.initialize(aj, ak, am, ah, al)
            })
        }

        function s() {
            var aj;
            try {
                aj = Q.frameElement
            } catch (ai) {
                return true
            }
            if (G(aj)) {
                return (aj && String(aj.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return Q.self !== Q.top
            } catch (ah) {
                return true
            }
        }

        function N(bV, bP) {
            var bq = this,
                bL = V(D.domain, Q.location.href, H()),
                cw = I(bL[0]),
                bv = n(bL[1]),
                a9 = n(bL[2]),
                cu = false,
                bZ = "GET",
                cJ = bZ,
                az = "application/x-www-form-urlencoded; charset=UTF-8",
                cd = az,
                av = bV || "",
                bp = "",
                cA = "",
                bN = bP || "",
                bi = "",
                bw = "",
                aT, a5 = "",
                cG = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                ao = [cw],
                bj = [],
                bt = [],
                aW = [],
                br = 500,
                cm, aU, bz, bx, ah, b8 = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bo = ["pk_kwd", "piwik_kwd", "utm_term"],
                a6 = "_pk_",
                an = "pk_vid",
                cy, bb, a7 = false,
                cs, a1, bf, cn = 33955200000,
                b6 = 1800000,
                cF = 15768000000,
                aR = true,
                b4 = 0,
                by = false,
                aG = false,
                bS, bD = {},
                b3 = {},
                a8 = {},
                be = 200,
                cB = {},
                cH = {},
                bR = [],
                bW = false,
                cg = false,
                ai = false,
                cI = false,
                cp = false,
                aE = false,
                a0 = s(),
                cz = null,
                bT, aH, bk, bO = af,
                ba, aB;
            try {
                a5 = D.title
            } catch (ce) {
                a5 = ""
            }

            function cM(cX, cU, cT, cW, cS, cV) {
                if (a7) {
                    return
                }
                var cR;
                if (cT) {
                    cR = new Date();
                    cR.setTime(cR.getTime() + cT)
                }
                D.cookie = cX + "=" + r(cU) + (cT ? ";expires=" + cR.toGMTString() : "") + ";path=" + (cW || "/") + (cS ? ";domain=" + cS : "") + (cV ? ";secure" : "")
            }

            function au(cT) {
                if (a7) {
                    return 0
                }
                var cR = new RegExp("(^|;)[ ]*" + cT + "=([^;]*)"),
                    cS = cR.exec(D.cookie);
                return cS ? P(cS[2]) : 0
            }

            function bJ(cR) {
                var cS;
                cR = j(cR, an);
                if (bx) {
                    cS = new RegExp("#.*");
                    return cR.replace(cS, "")
                }
                return cR
            }

            function bC(cT, cR) {
                var cU = q(cR),
                    cS;
                if (cU) {
                    return cR
                }
                if (cR.slice(0, 1) === "/") {
                    return q(cT) + "://" + c(cT) + cR
                }
                cT = bJ(cT);
                cS = cT.indexOf("?");
                if (cS >= 0) {
                    cT = cT.slice(0, cS)
                }
                cS = cT.lastIndexOf("/");
                if (cS !== cT.length - 1) {
                    cT = cT.slice(0, cS + 1)
                }
                return cT + cR
            }

            function cl(cT, cR) {
                var cS;
                cT = String(cT).toLowerCase();
                cR = String(cR).toLowerCase();
                if (cT === cR) {
                    return true
                }
                if (cR.slice(0, 1) === ".") {
                    if (cT === cR.slice(1)) {
                        return true
                    }
                    cS = cT.length - cR.length;
                    if ((cS > 0) && (cT.slice(cS) === cR)) {
                        return true
                    }
                }
                return false
            }

            function b2(cR) {
                var cS = document.createElement("a");
                if (cR.indexOf("//") !== 0 && cR.indexOf("http") !== 0) {
                    if (cR.indexOf("*") === 0) {
                        cR = cR.substr(1)
                    }
                    if (cR.indexOf(".") === 0) {
                        cR = cR.substr(1)
                    }
                    cR = "http://" + cR
                }
                cS.href = t.toAbsoluteUrl(cR);
                if (cS.pathname) {
                    return cS.pathname
                }
                return ""
            }

            function aS(cS, cR) {
                if (!ac(cR, "/")) {
                    cR = "/" + cR
                }
                if (!ac(cS, "/")) {
                    cS = "/" + cS
                }
                var cT = (cR === "/" || cR === "/*");
                if (cT) {
                    return true
                }
                if (cS === cR) {
                    return true
                }
                cR = String(cR).toLowerCase();
                cS = String(cS).toLowerCase();
                if (O(cR, "*")) {
                    cR = cR.slice(0, -1);
                    cT = (!cR || cR === "/");
                    if (cT) {
                        return true
                    }
                    if (cS === cR) {
                        return true
                    }
                    return cS.indexOf(cR) === 0
                }
                if (!O(cS, "/")) {
                    cS += "/"
                }
                if (!O(cR, "/")) {
                    cR += "/"
                }
                return cS.indexOf(cR) === 0
            }

            function ak(cV, cX) {
                var cS, cR, cT, cU, cW;
                for (cS = 0; cS < ao.length; cS++) {
                    cU = I(ao[cS]);
                    cW = b2(ao[cS]);
                    if (cl(cV, cU) && aS(cX, cW)) {
                        return true
                    }
                }
                return false
            }

            function aL(cU) {
                var cS, cR, cT;
                for (cS = 0; cS < ao.length; cS++) {
                    cR = I(ao[cS].toLowerCase());
                    if (cU === cR) {
                        return true
                    }
                    if (cR.slice(0, 1) === ".") {
                        if (cU === cR.slice(1)) {
                            return true
                        }
                        cT = cU.length - cR.length;
                        if ((cT > 0) && (cU.slice(cT) === cR)) {
                            return true
                        }
                    }
                }
                return false
            }

            function b7(cR, cT) {
                var cS = new Image(1, 1);
                cS.onload = function() {
                    B = 0;
                    if (typeof cT === "function") {
                        cT()
                    }
                };
                cR = cR.replace("send_image=0", "send_image=1");
                cS.src = av + (av.indexOf("?") < 0 ? "?" : "&") + cR
            }

            function cE(cS, cV, cR) {
                if (!G(cR) || null === cR) {
                    cR = true
                }
                try {
                    var cU = Q.XMLHttpRequest ? new Q.XMLHttpRequest() : Q.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    cU.open("POST", av, true);
                    cU.onreadystatechange = function() {
                        if (this.readyState === 4 && !(this.status >= 200 && this.status < 300) && cR) {
                            b7(cS, cV)
                        } else {
                            if (this.readyState === 4 && (typeof cV === "function")) {
                                cV()
                            }
                        }
                    };
                    cU.setRequestHeader("Content-Type", cd);
                    cU.send(cS)
                } catch (cT) {
                    if (cR) {
                        b7(cS, cV)
                    }
                }
            }

            function bX(cS) {
                var cR = new Date();
                var cT = cR.getTime() + cS;
                if (!p || cT > p) {
                    p = cT
                }
            }

            function b5(cR) {
                if (bT || !aU) {
                    return
                }
                bT = setTimeout(function cS() {
                    bT = null;
                    if (!a0) {
                        a0 = (!D.hasFocus || D.hasFocus())
                    }
                    if (!a0) {
                        b5(aU);
                        return
                    }
                    if (bz()) {
                        return
                    }
                    var cT = new Date(),
                        cU = aU - (cT.getTime() - cz);
                    cU = Math.min(aU, cU);
                    b5(cU)
                }, cR || aU)
            }

            function bs() {
                if (!bT) {
                    return
                }
                clearTimeout(bT);
                bT = null
            }

            function aY() {
                a0 = true;
                if (bz()) {
                    return
                }
                b5()
            }

            function ap() {
                bs()
            }

            function cO() {
                if (aE || !aU) {
                    return
                }
                aE = true;
                ag(Q, "focus", aY);
                ag(Q, "blur", ap);
                b5()
            }

            function ch(cV) {
                var cS = new Date();
                var cR = cS.getTime();
                cz = cR;
                if (cg && cR < cg) {
                    var cT = cg - cR;
                    setTimeout(cV, cT);
                    bX(cT + 50);
                    cg += 50;
                    return
                }
                if (cg === false) {
                    var cU = 800;
                    cg = cR + cU
                }
                cV()
            }

            function bn(cS, cR, cT) {
                if (!cs && cS) {
                    ch(function() {
                        if (cJ === "POST" || String(cS).length > 2000) {
                            cE(cS, cT)
                        } else {
                            b7(cS, cT)
                        }
                        bX(cR)
                    })
                }
                if (!aE) {
                    cO()
                } else {
                    b5()
                }
            }

            function b1(cR) {
                if (cs) {
                    return false
                }
                return (cR && cR.length)
            }

            function cN(cT, cR) {
                if (!b1(cT)) {
                    return
                }
                var cS = '{"requests":["?' + cT.join('","?') + '"]}';
                ch(function() {
                    cE(cS, null, false);
                    bX(cR)
                })
            }

            function aJ(cR) {
                return a6 + cR + "." + bN + "." + ba
            }

            function bM() {
                if (a7) {
                    return "0"
                }
                if (!G(g.cookieEnabled)) {
                    var cR = aJ("testcookie");
                    cM(cR, "1");
                    return au(cR) === "1" ? "1" : "0"
                }
                return g.cookieEnabled ? "1" : "0"
            }

            function a4() {
                ba = bO((cy || cw) + (bb || "/")).slice(0, 4)
            }

            function bE() {
                var cS = aJ("cvar"),
                    cR = au(cS);
                if (cR.length) {
                    cR = JSON_PIWIK.parse(cR);
                    if (S(cR)) {
                        return cR
                    }
                }
                return {}
            }

            function ci() {
                if (aG === false) {
                    aG = bE()
                }
            }

            function ct() {
                return bO((g.userAgent || "") + (g.platform || "") + JSON_PIWIK.stringify(cH) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function aq() {
                return bO((g.userAgent || "") + (g.platform || "") + JSON_PIWIK.stringify(cH)).slice(0, 6)
            }

            function a2() {
                return Math.floor((new Date()).getTime() / 1000)
            }

            function aA() {
                var cS = a2();
                var cT = aq();
                var cR = String(cS) + cT;
                return cR
            }

            function cD(cU) {
                cU = String(cU);
                var cX = aq();
                var cV = cX.length;
                var cW = cU.substr(-1 * cV, cV);
                var cT = parseInt(cU.substr(0, cU.length - cV), 10);
                if (cT && cW && cW === cX) {
                    var cR = a2();
                    var cS = 45;
                    if (cR >= cT && cR <= (cT + cS)) {
                        return true
                    }
                }
                return false
            }

            function cP(cR) {
                if (!cp) {
                    return ""
                }
                var cV = e(cR, an);
                if (!cV) {
                    return ""
                }
                cV = String(cV);
                var cT = new RegExp("^[a-zA-Z0-9]+$");
                if (cV.length === 32 && cT.test(cV)) {
                    var cS = cV.substr(16, 32);
                    if (cD(cS)) {
                        var cU = cV.substr(0, 16);
                        return cU
                    }
                }
                return ""
            }

            function cq() {
                if (!bw) {
                    bw = cP(bv)
                }
                var cT = new Date(),
                    cR = Math.round(cT.getTime() / 1000),
                    cS = aJ("id"),
                    cW = au(cS),
                    cV, cU;
                if (cW) {
                    cV = cW.split(".");
                    cV.unshift("0");
                    if (bw.length) {
                        cV[1] = bw
                    }
                    return cV
                }
                if (bw.length) {
                    cU = bw
                } else {
                    if ("0" === bM()) {
                        cU = ""
                    } else {
                        cU = ct()
                    }
                }
                cV = ["1", cU, cR, 0, cR, "", ""];
                return cV
            }

            function aN() {
                var cY = cq(),
                    cU = cY[0],
                    cV = cY[1],
                    cS = cY[2],
                    cR = cY[3],
                    cW = cY[4],
                    cT = cY[5];
                if (!G(cY[6])) {
                    cY[6] = ""
                }
                var cX = cY[6];
                return {
                    newVisitor: cU,
                    uuid: cV,
                    createTs: cS,
                    visitCount: cR,
                    currentVisitTs: cW,
                    lastVisitTs: cT,
                    lastEcommerceOrderTs: cX
                }
            }

            function ay() {
                var cU = new Date(),
                    cS = cU.getTime(),
                    cV = aN().createTs;
                var cR = parseInt(cV, 10);
                var cT = (cR * 1000) + cn - cS;
                return cT
            }

            function aC(cR) {
                if (!bN) {
                    return
                }
                var cT = new Date(),
                    cS = Math.round(cT.getTime() / 1000);
                if (!G(cR)) {
                    cR = aN()
                }
                var cU = cR.uuid + "." + cR.createTs + "." + cR.visitCount + "." + cS + "." + cR.lastVisitTs + "." + cR.lastEcommerceOrderTs;
                cM(aJ("id"), cU, ay(), bb, cy)
            }

            function bu() {
                var cR = au(aJ("ref"));
                if (cR.length) {
                    try {
                        cR = JSON_PIWIK.parse(cR);
                        if (S(cR)) {
                            return cR
                        }
                    } catch (cS) {}
                }
                return ["", "", 0, ""]
            }

            function bF(cT, cS, cR) {
                cM(cT, "", -86400, cS, cR)
            }

            function bg(cS) {
                var cR = "testvalue";
                cM("test", cR, 10000, null, cS);
                if (au("test") === cR) {
                    bF("test", null, cS);
                    return true
                }
                return false
            }

            function aw() {
                var cT = a7;
                a7 = false;
                var cR = ["id", "ses", "cvar", "ref"];
                var cS, cU;
                for (cS = 0; cS < cR.length; cS++) {
                    cU = aJ(cR[cS]);
                    if (0 !== au(cU)) {
                        bF(cU, bb, cy)
                    }
                }
                a7 = cT
            }

            function bK(cR) {
                bN = cR;
                aC()
            }

            function cQ(cV) {
                if (!cV || !S(cV)) {
                    return
                }
                var cU = [];
                var cT;
                for (cT in cV) {
                    if (Object.prototype.hasOwnProperty.call(cV, cT)) {
                        cU.push(cT)
                    }
                }
                var cW = {};
                cU.sort();
                var cR = cU.length;
                var cS;
                for (cS = 0; cS < cR; cS++) {
                    cW[cU[cS]] = cV[cU[cS]]
                }
                return cW
            }

            function bU() {
                cM(aJ("ses"), "*", b6, bb, cy)
            }

            function a3() {
                var cU = "";
                var cS = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var cT = cS.length;
                var cR;
                for (cR = 0; cR < 6; cR++) {
                    cU += cS.charAt(Math.floor(Math.random() * cT))
                }
                return cU
            }

            function b9(cT, de, df, cU) {
                var dd, cS = new Date(),
                    c1 = Math.round(cS.getTime() / 1000),
                    cY, dc, cV = 1024,
                    dk, c2, da = aG,
                    cW = aJ("ses"),
                    c8 = aJ("ref"),
                    c5 = aJ("cvar"),
                    c6 = au(cW),
                    db = bu(),
                    dh = aT || bv,
                    cZ, cR;
                if (a7) {
                    aw()
                }
                if (cs) {
                    return ""
                }
                var c7 = aN();
                if (!G(cU)) {
                    cU = ""
                }
                var c4 = D.characterSet || D.charset;
                if (!c4 || c4.toLowerCase() === "utf-8") {
                    c4 = null
                }
                cZ = db[0];
                cR = db[1];
                cY = db[2];
                dc = db[3];
                if (!c6) {
                    var dg = b6 / 1000;
                    if (!c7.lastVisitTs || (c1 - c7.lastVisitTs) > dg) {
                        c7.visitCount++;
                        c7.lastVisitTs = c7.currentVisitTs
                    }
                    if (!bf || !cZ.length) {
                        for (dd in b8) {
                            if (Object.prototype.hasOwnProperty.call(b8, dd)) {
                                cZ = e(dh, b8[dd]);
                                if (cZ.length) {
                                    break
                                }
                            }
                        }
                        for (dd in bo) {
                            if (Object.prototype.hasOwnProperty.call(bo, dd)) {
                                cR = e(dh, bo[dd]);
                                if (cR.length) {
                                    break
                                }
                            }
                        }
                    }
                    dk = c(a9);
                    c2 = dc.length ? c(dc) : "";
                    if (dk.length && !aL(dk) && (!bf || !c2.length || aL(c2))) {
                        dc = a9
                    }
                    if (dc.length || cZ.length) {
                        cY = c1;
                        db = [cZ, cR, cY, bJ(dc.slice(0, cV))];
                        cM(c8, JSON_PIWIK.stringify(db), cF, bb, cy)
                    }
                }
                cT += "&idsite=" + bN + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + cS.getHours() + "&m=" + cS.getMinutes() + "&s=" + cS.getSeconds() + "&url=" + r(bJ(dh)) + (a9.length ? "&urlref=" + r(bJ(a9)) : "") + ((bi && bi.length) ? "&uid=" + r(bi) : "") + "&_id=" + c7.uuid + "&_idts=" + c7.createTs + "&_idvc=" + c7.visitCount + "&_idn=" + c7.newVisitor + (cZ.length ? "&_rcn=" + r(cZ) : "") + (cR.length ? "&_rck=" + r(cR) : "") + "&_refts=" + cY + "&_viewts=" + c7.lastVisitTs + (String(c7.lastEcommerceOrderTs).length ? "&_ects=" + c7.lastEcommerceOrderTs : "") + (String(dc).length ? "&_ref=" + r(bJ(dc.slice(0, cV))) : "") + (c4 ? "&cs=" + r(c4) : "") + "&send_image=0";
                for (dd in cH) {
                    if (Object.prototype.hasOwnProperty.call(cH, dd)) {
                        cT += "&" + dd + "=" + cH[dd]
                    }
                }
                var dj = [];
                if (de) {
                    for (dd in de) {
                        if (Object.prototype.hasOwnProperty.call(de, dd) && /^dimension\d+$/.test(dd)) {
                            var cX = dd.replace("dimension", "");
                            dj.push(parseInt(cX, 10));
                            dj.push(String(cX));
                            cT += "&" + dd + "=" + de[dd];
                            delete de[dd]
                        }
                    }
                }
                if (de && y(de)) {
                    de = null
                }
                for (dd in a8) {
                    if (Object.prototype.hasOwnProperty.call(a8, dd)) {
                        var c3 = (-1 === J(dj, dd));
                        if (c3) {
                            cT += "&dimension" + dd + "=" + a8[dd]
                        }
                    }
                }
                if (de) {
                    cT += "&data=" + r(JSON_PIWIK.stringify(de))
                } else {
                    if (ah) {
                        cT += "&data=" + r(JSON_PIWIK.stringify(ah))
                    }
                }

                function c0(dl, dm) {
                    var dn = JSON_PIWIK.stringify(dl);
                    if (dn.length > 2) {
                        return "&" + dm + "=" + r(dn)
                    }
                    return ""
                }
                var di = cQ(bD);
                var c9 = cQ(b3);
                cT += c0(di, "cvar");
                cT += c0(c9, "e_cvar");
                if (aG) {
                    cT += c0(aG, "_cvar");
                    for (dd in da) {
                        if (Object.prototype.hasOwnProperty.call(da, dd)) {
                            if (aG[dd][0] === "" || aG[dd][1] === "") {
                                delete aG[dd]
                            }
                        }
                    }
                    if (by) {
                        cM(c5, JSON_PIWIK.stringify(aG), b6, bb, cy)
                    }
                }
                if (aR) {
                    if (b4) {
                        cT += "&gt_ms=" + b4
                    } else {
                        if (h && h.timing && h.timing.requestStart && h.timing.responseEnd) {
                            cT += "&gt_ms=" + (h.timing.responseEnd - h.timing.requestStart)
                        }
                    }
                }
                if (aB) {
                    cT += "&pv_id=" + aB
                }
                c7.lastEcommerceOrderTs = G(cU) && String(cU).length ? cU : c7.lastEcommerceOrderTs;
                aC(c7);
                bU();
                cT += W(df, {
                    tracker: bq,
                    request: cT
                });
                if (cA.length) {
                    cT += "&" + cA
                }
                if (x(bS)) {
                    cT = bS(cT)
                }
                return cT
            }
            bz = function aV() {
                var cR = new Date();
                if (cz + aU <= cR.getTime()) {
                    var cS = b9("ping=1", null, "ping");
                    bn(cS, br);
                    return true
                }
                return false
            };

            function bc(cU, cT, cZ, cV, cR, c2) {
                var cX = "idgoal=0",
                    cY, cS = new Date(),
                    c0 = [],
                    c1, cW = String(cU).length;
                if (cW) {
                    cX += "&ec_id=" + r(cU);
                    cY = Math.round(cS.getTime() / 1000)
                }
                cX += "&revenue=" + cT;
                if (String(cZ).length) {
                    cX += "&ec_st=" + cZ
                }
                if (String(cV).length) {
                    cX += "&ec_tx=" + cV
                }
                if (String(cR).length) {
                    cX += "&ec_sh=" + cR
                }
                if (String(c2).length) {
                    cX += "&ec_dt=" + c2
                }
                if (cB) {
                    for (c1 in cB) {
                        if (Object.prototype.hasOwnProperty.call(cB, c1)) {
                            if (!G(cB[c1][1])) {
                                cB[c1][1] = ""
                            }
                            if (!G(cB[c1][2])) {
                                cB[c1][2] = ""
                            }
                            if (!G(cB[c1][3]) || String(cB[c1][3]).length === 0) {
                                cB[c1][3] = 0
                            }
                            if (!G(cB[c1][4]) || String(cB[c1][4]).length === 0) {
                                cB[c1][4] = 1
                            }
                            c0.push(cB[c1])
                        }
                    }
                    cX += "&ec_items=" + r(JSON_PIWIK.stringify(c0))
                }
                cX = b9(cX, ah, "ecommerce", cY);
                bn(cX, br);
                if (cW) {
                    cB = {}
                }
            }

            function bG(cR, cV, cU, cT, cS, cW) {
                if (String(cR).length && G(cV)) {
                    bc(cR, cV, cU, cT, cS, cW)
                }
            }

            function bd(cR) {
                if (G(cR)) {
                    bc("", cR, "", "", "", "")
                }
            }

            function bH(cS, cU, cT) {
                aB = a3();
                var cR = b9("action_name=" + r(ae(cS || a5)), cU, "log");
                bn(cR, br, cT)
            }

            function aP(cT, cS) {
                var cU, cR = "(^| )(piwik[_-]" + cS;
                if (cT) {
                    for (cU = 0; cU < cT.length; cU++) {
                        cR += "|" + cT[cU]
                    }
                }
                cR += ")( |$)";
                return new RegExp(cR)
            }

            function aK(cR) {
                return (av && cR && 0 === String(cR).indexOf(av))
            }

            function ca(cV, cR, cW, cS) {
                if (aK(cR)) {
                    return 0
                }
                var cU = aP(bt, "download"),
                    cT = aP(aW, "link"),
                    cX = new RegExp("\\.(" + cG.join("|") + ")([?&#]|$)", "i");
                if (cT.test(cV)) {
                    return "link"
                }
                if (cS || cU.test(cV) || cX.test(cR)) {
                    return "download"
                }
                if (cW) {
                    return 0
                }
                return "link"
            }

            function al(cS) {
                var cR;
                cR = cS.parentNode;
                while (cR !== null && G(cR)) {
                    if (Y.isLinkElement(cS)) {
                        break
                    }
                    cS = cR;
                    cR = cS.parentNode
                }
                return cS
            }

            function cK(cW) {
                cW = al(cW);
                if (!Y.hasNodeAttribute(cW, "href")) {
                    return
                }
                if (!G(cW.href)) {
                    return
                }
                var cV = Y.getAttributeValueFromNode(cW, "href");
                if (aK(cV)) {
                    return
                }
                var cS = cW.pathname || b2(cW.href);
                var cX = cW.hostname || c(cW.href);
                var cY = cX.toLowerCase();
                var cT = cW.href.replace(cX, cY);
                var cU = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!cU.test(cT)) {
                    var cR = ca(cW.className, cT, ak(cY, cS), Y.hasNodeAttribute(cW, "download"));
                    if (cR) {
                        return {
                            type: cR,
                            href: cT
                        }
                    }
                }
            }

            function aF(cR, cS, cT, cU) {
                var cV = t.buildInteractionRequestParams(cR, cS, cT, cU);
                if (!cV) {
                    return
                }
                return b9(cV, null, "contentInteraction")
            }

            function co(cT, cU, cY, cR, cS) {
                if (!G(cT)) {
                    return
                }
                if (aK(cT)) {
                    return cT
                }
                var cW = t.toAbsoluteUrl(cT);
                var cV = "redirecturl=" + r(cW) + "&";
                cV += aF(cU, cY, cR, (cS || cT));
                var cX = "&";
                if (av.indexOf("?") < 0) {
                    cX = "?"
                }
                return av + cX + cV
            }

            function aZ(cR, cS) {
                if (!cR || !cS) {
                    return false
                }
                var cT = t.findTargetNode(cR);
                if (t.shouldIgnoreInteraction(cT)) {
                    return false
                }
                cT = t.findTargetNodeNoDefault(cR);
                if (cT && !R(cT, cS)) {
                    return false
                }
                return true
            }

            function cb(cT, cS, cV) {
                if (!cT) {
                    return
                }
                var cR = t.findParentContentNode(cT);
                if (!cR) {
                    return
                }
                if (!aZ(cR, cT)) {
                    return
                }
                var cU = t.buildContentBlock(cR);
                if (!cU) {
                    return
                }
                if (!cU.target && cV) {
                    cU.target = cV
                }
                return t.buildInteractionRequestParams(cS, cU.name, cU.piece, cU.target)
            }

            function aM(cS) {
                if (!bR || !bR.length) {
                    return false
                }
                var cR, cT;
                for (cR = 0; cR < bR.length; cR++) {
                    cT = bR[cR];
                    if (cT && cT.name === cS.name && cT.piece === cS.piece && cT.target === cS.target) {
                        return true
                    }
                }
                return false
            }

            function bm(cU) {
                if (!cU) {
                    return false
                }
                var cX = t.findTargetNode(cU);
                if (!cX || t.shouldIgnoreInteraction(cX)) {
                    return false
                }
                var cY = cK(cX);
                if (cI && cY && cY.type) {
                    return false
                }
                if (Y.isLinkElement(cX) && Y.hasNodeAttributeWithValue(cX, "href")) {
                    var cR = String(Y.getAttributeValueFromNode(cX, "href"));
                    if (0 === cR.indexOf("#")) {
                        return false
                    }
                    if (aK(cR)) {
                        return true
                    }
                    if (!t.isUrlToCurrentDomain(cR)) {
                        return false
                    }
                    var cV = t.buildContentBlock(cU);
                    if (!cV) {
                        return
                    }
                    var cT = cV.name;
                    var cZ = cV.piece;
                    var cW = cV.target;
                    if (!Y.hasNodeAttributeWithValue(cX, t.CONTENT_TARGET_ATTR) || cX.wasContentTargetAttrReplaced) {
                        cX.wasContentTargetAttrReplaced = true;
                        cW = t.toAbsoluteUrl(cR);
                        Y.setAnyAttribute(cX, t.CONTENT_TARGET_ATTR, cW)
                    }
                    var cS = co(cR, "click", cT, cZ, cW);
                    t.setHrefAttribute(cX, cS);
                    return true
                }
                return false
            }

            function aD(cS) {
                if (!cS || !cS.length) {
                    return
                }
                var cR;
                for (cR = 0; cR < cS.length; cR++) {
                    bm(cS[cR])
                }
            }

            function aO(cR) {
                return function(cS) {
                    if (!cR) {
                        return
                    }
                    var cV = t.findParentContentNode(cR);
                    var cW;
                    if (cS) {
                        cW = cS.target || cS.srcElement
                    }
                    if (!cW) {
                        cW = cR
                    }
                    if (!aZ(cV, cW)) {
                        return
                    }
                    bX(br);
                    if (Y.isLinkElement(cR) && Y.hasNodeAttributeWithValue(cR, "href") && Y.hasNodeAttributeWithValue(cR, t.CONTENT_TARGET_ATTR)) {
                        var cT = Y.getAttributeValueFromNode(cR, "href");
                        if (!aK(cT) && cR.wasContentTargetAttrReplaced) {
                            Y.setAnyAttribute(cR, t.CONTENT_TARGET_ATTR, "")
                        }
                    }
                    var c0 = cK(cR);
                    if (ai && c0 && c0.type) {
                        return c0.type
                    }
                    if (bm(cV)) {
                        return "href"
                    }
                    var cX = t.buildContentBlock(cV);
                    if (!cX) {
                        return
                    }
                    var cU = cX.name;
                    var c1 = cX.piece;
                    var cZ = cX.target;
                    var cY = aF("click", cU, c1, cZ);
                    bn(cY, br);
                    return cY
                }
            }

            function bI(cT) {
                if (!cT || !cT.length) {
                    return
                }
                var cR, cS;
                for (cR = 0; cR < cT.length; cR++) {
                    cS = t.findTargetNode(cT[cR]);
                    if (cS && !cS.contentInteractionTrackingSetupDone) {
                        cS.contentInteractionTrackingSetupDone = true;
                        ag(cS, "click", aO(cS))
                    }
                }
            }

            function bh(cT, cU) {
                if (!cT || !cT.length) {
                    return []
                }
                var cR, cS;
                for (cR = 0; cR < cT.length; cR++) {
                    if (aM(cT[cR])) {
                        cT.splice(cR, 1);
                        cR--
                    } else {
                        bR.push(cT[cR])
                    }
                }
                if (!cT || !cT.length) {
                    return []
                }
                aD(cU);
                bI(cU);
                var cV = [];
                for (cR = 0; cR < cT.length; cR++) {
                    cS = b9(t.buildImpressionRequestParams(cT[cR].name, cT[cR].piece, cT[cR].target), undefined, "contentImpressions");
                    if (cS) {
                        cV.push(cS)
                    }
                }
                return cV
            }

            function cf(cS) {
                var cR = t.collectContent(cS);
                return bh(cR, cS)
            }

            function aX(cS) {
                if (!cS || !cS.length) {
                    return []
                }
                var cR;
                for (cR = 0; cR < cS.length; cR++) {
                    if (!t.isNodeVisible(cS[cR])) {
                        cS.splice(cR, 1);
                        cR--
                    }
                }
                if (!cS || !cS.length) {
                    return []
                }
                return cf(cS)
            }

            function ax(cT, cR, cS) {
                var cU = t.buildImpressionRequestParams(cT, cR, cS);
                return b9(cU, null, "contentImpression")
            }

            function cL(cU, cS) {
                if (!cU) {
                    return
                }
                var cR = t.findParentContentNode(cU);
                var cT = t.buildContentBlock(cR);
                if (!cT) {
                    return
                }
                if (!cS) {
                    cS = "Unknown"
                }
                return aF(cS, cT.name, cT.piece, cT.target)
            }

            function cr(cS, cU, cR, cT) {
                return "e_c=" + r(cS) + "&e_a=" + r(cU) + (G(cR) ? "&e_n=" + r(cR) : "") + (G(cT) ? "&e_v=" + r(cT) : "")
            }

            function am(cT, cV, cR, cU, cX, cW) {
                if (String(cT).length === 0 || String(cV).length === 0) {
                    return false
                }
                var cS = b9(cr(cT, cV, cR, cU), cX, "event");
                bn(cS, br, cW)
            }

            function bQ(cR, cU, cS, cV) {
                var cT = b9("search=" + r(cR) + (cU ? "&search_cat=" + r(cU) : "") + (G(cS) ? "&search_count=" + cS : ""), cV, "sitesearch");
                bn(cT, br)
            }

            function cv(cR, cU, cT) {
                var cS = b9("idgoal=" + cR + (cU ? "&revenue=" + cU : ""), cT, "goal");
                bn(cS, br)
            }

            function cC(cU, cR, cY, cX, cT) {
                var cW = cR + "=" + r(bJ(cU));
                var cS = cb(cT, "click", cU);
                if (cS) {
                    cW += "&" + cS
                }
                var cV = b9(cW, cY, "link");
                bn(cV, br, cX)
            }

            function bB(cS, cR) {
                if (cS !== "") {
                    return cS + cR.charAt(0).toUpperCase() + cR.slice(1)
                }
                return cR
            }

            function bY(cW) {
                var cV, cR, cU = ["", "webkit", "ms", "moz"],
                    cT;
                if (!a1) {
                    for (cR = 0; cR < cU.length; cR++) {
                        cT = cU[cR];
                        if (Object.prototype.hasOwnProperty.call(D, bB(cT, "hidden"))) {
                            if (D[bB(cT, "visibilityState")] === "prerender") {
                                cV = true
                            }
                            break
                        }
                    }
                }
                if (cV) {
                    ag(D, cT + "visibilitychange", function cS() {
                        D.removeEventListener(cT + "visibilitychange", cS, false);
                        cW()
                    });
                    return
                }
                cW()
            }

            function b0(cR) {
                if (!cR) {
                    return
                }
                if (!Y.hasNodeAttribute(cR, "href")) {
                    return
                }
                var cS = Y.getAttributeValueFromNode(cR, "href");
                if (!cS || aK(cS)) {
                    return
                }
                cS = j(cS, an);
                if (cS.indexOf("?") > 0) {
                    cS += "&"
                } else {
                    cS += "?"
                }
                var cU = aN().uuid;
                var cT = aA();
                cS = C(cS, an, cU + cT);
                Y.setAnyAttribute(cR, "href", cS)
            }

            function ar(cU) {
                var cV = Y.getAttributeValueFromNode(cU, "href");
                if (!cV) {
                    return false
                }
                cV = String(cV);
                var cS = cV.indexOf("//") === 0 || cV.indexOf("http://") === 0 || cV.indexOf("https://") === 0;
                if (!cS) {
                    return false
                }
                var cR = cU.pathname || b2(cU.href);
                var cT = (cU.hostname || c(cU.href)).toLowerCase();
                if (ak(cT, cR)) {
                    if (!cl(cw, I(cT))) {
                        return true
                    }
                    return false
                }
                return false
            }

            function ck(cR) {
                var cS = cK(cR);
                if (cS && cS.type) {
                    cS.href = n(cS.href);
                    cC(cS.href, cS.type, undefined, null, cR);
                    return
                }
                if (cp) {
                    cR = al(cR);
                    if (ar(cR)) {
                        b0(cR)
                    }
                }
            }

            function cc() {
                return D.all && !D.addEventListener
            }

            function cx(cR) {
                var cT = cR.which;
                var cS = (typeof cR.button);
                if (!cT && cS !== "undefined") {
                    if (cc()) {
                        if (cR.button & 1) {
                            cT = 1
                        } else {
                            if (cR.button & 2) {
                                cT = 3
                            } else {
                                if (cR.button & 4) {
                                    cT = 2
                                }
                            }
                        }
                    } else {
                        if (cR.button === 0 || cR.button === "0") {
                            cT = 1
                        } else {
                            if (cR.button & 1) {
                                cT = 2
                            } else {
                                if (cR.button & 2) {
                                    cT = 3
                                }
                            }
                        }
                    }
                }
                return cT
            }

            function bA(cR) {
                switch (cx(cR)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function aQ(cR) {
                return cR.target || cR.srcElement
            }

            function at(cR) {
                return function(cU) {
                    cU = cU || Q.event;
                    var cT = bA(cU);
                    var cV = aQ(cU);
                    if (cU.type === "click") {
                        var cS = false;
                        if (cR && cT === "middle") {
                            cS = true
                        }
                        if (cV && !cS) {
                            ck(cV)
                        }
                    } else {
                        if (cU.type === "mousedown") {
                            if (cT === "middle" && cV) {
                                aH = cT;
                                bk = cV
                            } else {
                                aH = bk = null
                            }
                        } else {
                            if (cU.type === "mouseup") {
                                if (cT === aH && cV === bk) {
                                    ck(cV)
                                }
                                aH = bk = null
                            } else {
                                if (cU.type === "contextmenu") {
                                    ck(cV)
                                }
                            }
                        }
                    }
                }
            }

            function aj(cT, cS) {
                var cR = typeof cS;
                if (cR === "undefined") {
                    cS = true
                }
                ag(cT, "click", at(cS), false);
                if (cS) {
                    ag(cT, "mouseup", at(cS), false);
                    ag(cT, "mousedown", at(cS), false);
                    ag(cT, "contextmenu", at(cS), false)
                }
            }

            function bl(cT, cV) {
                ai = true;
                var cU, cS = aP(bj, "ignore"),
                    cW = D.links,
                    cR = null,
                    cX = null;
                if (cW) {
                    for (cU = 0; cU < cW.length; cU++) {
                        cR = cW[cU];
                        if (!cS.test(cR.className)) {
                            cX = typeof cR.piwikTrackers;
                            if ("undefined" === cX) {
                                cR.piwikTrackers = []
                            }
                            if (-1 === J(cR.piwikTrackers, cV)) {
                                cR.piwikTrackers.push(cV);
                                aj(cR, cT)
                            }
                        }
                    }
                }
            }

            function aI(cT, cV, cW) {
                if (bW) {
                    return true
                }
                bW = true;
                var cX = false;
                var cU, cS;

                function cR() {
                    cX = true
                }
                l(function() {
                    function cY(c0) {
                        setTimeout(function() {
                            if (!bW) {
                                return
                            }
                            cX = false;
                            cW.trackVisibleContentImpressions();
                            cY(c0)
                        }, c0)
                    }

                    function cZ(c0) {
                        setTimeout(function() {
                            if (!bW) {
                                return
                            }
                            if (cX) {
                                cX = false;
                                cW.trackVisibleContentImpressions()
                            }
                            cZ(c0)
                        }, c0)
                    }
                    if (cT) {
                        cU = ["scroll", "resize"];
                        for (cS = 0; cS < cU.length; cS++) {
                            if (D.addEventListener) {
                                D.addEventListener(cU[cS], cR)
                            } else {
                                Q.attachEvent("on" + cU[cS], cR)
                            }
                        }
                        cZ(100)
                    }
                    if (cV && cV > 0) {
                        cV = parseInt(cV, 10);
                        cY(cV)
                    }
                })
            }

            function cj() {
                var cS, cU, cV = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(g.userAgent))) {
                    if (g.mimeTypes && g.mimeTypes.length) {
                        for (cS in cV) {
                            if (Object.prototype.hasOwnProperty.call(cV, cS)) {
                                cU = g.mimeTypes[cV[cS]];
                                cH[cS] = (cU && cU.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (typeof navigator.javaEnabled !== "unknown" && G(g.javaEnabled) && g.javaEnabled()) {
                        cH.java = "1"
                    }
                    if (x(Q.GearsFactory)) {
                        cH.gears = "1"
                    }
                    cH.cookie = bM()
                }
                var cT = parseInt(T.width, 10);
                var cR = parseInt(T.height, 10);
                cH.res = parseInt(cT, 10) + "x" + parseInt(cR, 10)
            }
            cj();
            a4();
            aC();
            this.getVisitorId = function() {
                return aN().uuid
            };
            this.getVisitorInfo = function() {
                return cq()
            };
            this.getAttributionInfo = function() {
                return bu()
            };
            this.getAttributionCampaignName = function() {
                return bu()[0]
            };
            this.getAttributionCampaignKeyword = function() {
                return bu()[1]
            };
            this.getAttributionReferrerTimestamp = function() {
                return bu()[2]
            };
            this.getAttributionReferrerUrl = function() {
                return bu()[3]
            };
            this.setTrackerUrl = function(cR) {
                av = cR
            };
            this.getTrackerUrl = function() {
                return av
            };
            this.addTracker = function(cR, cT) {
                if (!cT) {
                    throw new Error("A siteId must be given to add a new tracker")
                }
                if (!G(cR) || null === cR) {
                    cR = this.getTrackerUrl()
                }
                var cS = new N(cR, cT);
                F.push(cS);
                return cS
            };
            this.getSiteId = function() {
                return bN
            };
            this.setSiteId = function(cR) {
                bK(cR)
            };
            this.setUserId = function(cR) {
                if (!G(cR) || !cR.length) {
                    return
                }
                bi = cR;
                bw = bO(bi).substr(0, 16)
            };
            this.getUserId = function() {
                return bi
            };
            this.setCustomData = function(cR, cS) {
                if (S(cR)) {
                    ah = cR
                } else {
                    if (!ah) {
                        ah = {}
                    }
                    ah[cR] = cS
                }
            };
            this.getCustomData = function() {
                return ah
            };
            this.setCustomRequestProcessing = function(cR) {
                bS = cR
            };
            this.appendToTrackingUrl = function(cR) {
                cA = cR
            };
            this.getRequest = function(cR) {
                return b9(cR)
            };
            this.addPlugin = function(cR, cS) {
                a[cR] = cS
            };
            this.setCustomDimension = function(cR, cS) {
                cR = parseInt(cR, 10);
                if (cR > 0) {
                    if (!G(cS)) {
                        cS = ""
                    }
                    if (!u(cS)) {
                        cS = String(cS)
                    }
                    a8[cR] = cS
                }
            };
            this.getCustomDimension = function(cR) {
                cR = parseInt(cR, 10);
                if (cR > 0 && Object.prototype.hasOwnProperty.call(a8, cR)) {
                    return a8[cR]
                }
            };
            this.deleteCustomDimension = function(cR) {
                cR = parseInt(cR, 10);
                if (cR > 0) {
                    delete a8[cR]
                }
            };
            this.setCustomVariable = function(cS, cR, cV, cT) {
                var cU;
                if (!G(cT)) {
                    cT = "visit"
                }
                if (!G(cR)) {
                    return
                }
                if (!G(cV)) {
                    cV = ""
                }
                if (cS > 0) {
                    cR = !u(cR) ? String(cR) : cR;
                    cV = !u(cV) ? String(cV) : cV;
                    cU = [cR.slice(0, be), cV.slice(0, be)];
                    if (cT === "visit" || cT === 2) {
                        ci();
                        aG[cS] = cU
                    } else {
                        if (cT === "page" || cT === 3) {
                            bD[cS] = cU
                        } else {
                            if (cT === "event") {
                                b3[cS] = cU
                            }
                        }
                    }
                }
            };
            this.getCustomVariable = function(cS, cT) {
                var cR;
                if (!G(cT)) {
                    cT = "visit"
                }
                if (cT === "page" || cT === 3) {
                    cR = bD[cS]
                } else {
                    if (cT === "event") {
                        cR = b3[cS]
                    } else {
                        if (cT === "visit" || cT === 2) {
                            ci();
                            cR = aG[cS]
                        }
                    }
                }
                if (!G(cR) || (cR && cR[0] === "")) {
                    return false
                }
                return cR
            };
            this.deleteCustomVariable = function(cR, cS) {
                if (this.getCustomVariable(cR, cS)) {
                    this.setCustomVariable(cR, "", "", cS)
                }
            };
            this.deleteCustomVariables = function(cR) {
                if (cR === "page" || cR === 3) {
                    bD = {}
                } else {
                    if (cR === "event") {
                        b3 = {}
                    } else {
                        if (cR === "visit" || cR === 2) {
                            aG = {}
                        }
                    }
                }
            };
            this.storeCustomVariablesInCookie = function() {
                by = true
            };
            this.setLinkTrackingTimer = function(cR) {
                br = cR
            };
            this.getLinkTrackingTimer = function() {
                return br
            };
            this.setDownloadExtensions = function(cR) {
                if (u(cR)) {
                    cR = cR.split("|")
                }
                cG = cR
            };
            this.addDownloadExtensions = function(cS) {
                var cR;
                if (u(cS)) {
                    cS = cS.split("|")
                }
                for (cR = 0; cR < cS.length; cR++) {
                    cG.push(cS[cR])
                }
            };
            this.removeDownloadExtensions = function(cT) {
                var cS, cR = [];
                if (u(cT)) {
                    cT = cT.split("|")
                }
                for (cS = 0; cS < cG.length; cS++) {
                    if (J(cT, cG[cS]) === -1) {
                        cR.push(cG[cS])
                    }
                }
                cG = cR
            };
            this.setDomains = function(cR) {
                ao = u(cR) ? [cR] : cR;
                var cV = false,
                    cT = 0,
                    cS;
                for (cT; cT < ao.length; cT++) {
                    cS = String(ao[cT]);
                    if (cl(cw, I(cS))) {
                        cV = true;
                        break
                    }
                    var cU = b2(cS);
                    if (cU && cU !== "/" && cU !== "/*") {
                        cV = true;
                        break
                    }
                }
                if (!cV) {
                    ao.push(cw)
                }
            };
            this.enableCrossDomainLinking = function() {
                cp = true
            };
            this.disableCrossDomainLinking = function() {
                cp = false
            };
            this.isCrossDomainLinkingEnabled = function() {
                return cp
            };
            this.setIgnoreClasses = function(cR) {
                bj = u(cR) ? [cR] : cR
            };
            this.setRequestMethod = function(cR) {
                cJ = cR || bZ
            };
            this.setRequestContentType = function(cR) {
                cd = cR || az
            };
            this.setReferrerUrl = function(cR) {
                a9 = cR
            };
            this.setCustomUrl = function(cR) {
                aT = bC(bv, cR)
            };
            this.setDocumentTitle = function(cR) {
                a5 = cR
            };
            this.setAPIUrl = function(cR) {
                bp = cR
            };
            this.setDownloadClasses = function(cR) {
                bt = u(cR) ? [cR] : cR
            };
            this.setLinkClasses = function(cR) {
                aW = u(cR) ? [cR] : cR
            };
            this.setCampaignNameKey = function(cR) {
                b8 = u(cR) ? [cR] : cR
            };
            this.setCampaignKeywordKey = function(cR) {
                bo = u(cR) ? [cR] : cR
            };
            this.discardHashTag = function(cR) {
                bx = cR
            };
            this.setCookieNamePrefix = function(cR) {
                a6 = cR;
                aG = bE()
            };
            this.setCookieDomain = function(cR) {
                var cS = I(cR);
                if (bg(cS)) {
                    cy = cS;
                    a4()
                }
            };
            this.setCookiePath = function(cR) {
                bb = cR;
                a4()
            };
            this.setVisitorCookieTimeout = function(cR) {
                cn = cR * 1000
            };
            this.setSessionCookieTimeout = function(cR) {
                b6 = cR * 1000
            };
            this.setReferralCookieTimeout = function(cR) {
                cF = cR * 1000
            };
            this.setConversionAttributionFirstReferrer = function(cR) {
                bf = cR
            };
            this.disableCookies = function() {
                a7 = true;
                cH.cookie = "0";
                if (bN) {
                    aw()
                }
            };
            this.deleteCookies = function() {
                aw()
            };
            this.setDoNotTrack = function(cS) {
                var cR = g.doNotTrack || g.msDoNotTrack;
                cs = cS && (cR === "yes" || cR === "1");
                if (cs) {
                    this.disableCookies()
                }
            };
            this.addListener = function(cS, cR) {
                aj(cS, cR)
            };
            this.enableLinkTracking = function(cS) {
                cI = true;
                var cR = this;
                bY(function() {
                    o(function() {
                        bl(cS, cR)
                    })
                })
            };
            this.enableJSErrorTracking = function() {
                if (cu) {
                    return
                }
                cu = true;
                var cR = Q.onerror;
                Q.onerror = function(cW, cU, cT, cV, cS) {
                    bY(function() {
                        var cX = "JavaScript Errors";
                        var cY = cU + ":" + cT;
                        if (cV) {
                            cY += ":" + cV
                        }
                        am(cX, cY, cW)
                    });
                    if (cR) {
                        return cR(cW, cU, cT, cV, cS)
                    }
                    return false
                }
            };
            this.disablePerformanceTracking = function() {
                aR = false
            };
            this.setGenerationTimeMs = function(cR) {
                b4 = parseInt(cR, 10)
            };
            this.enableHeartBeatTimer = function(cR) {
                cR = Math.max(cR, 1);
                aU = (cR || 15) * 1000;
                if (cz !== null) {
                    cO()
                }
            };
            this.disableHeartBeatTimer = function() {
                bs();
                if (aU || aE) {
                    if (Q.removeEventListener) {
                        Q.removeEventListener("focus", aY, true);
                        Q.removeEventListener("blur", ap, true)
                    } else {
                        if (Q.detachEvent) {
                            Q.detachEvent("onfocus", aY);
                            Q.detachEvent("onblur", ap)
                        }
                    }
                }
                aU = null;
                aE = false
            };
            this.killFrame = function() {
                if (Q.location !== Q.top.location) {
                    Q.top.location = Q.location
                }
            };
            this.redirectFile = function(cR) {
                if (Q.location.protocol === "file:") {
                    Q.location = cR
                }
            };
            this.setCountPreRendered = function(cR) {
                a1 = cR
            };
            this.trackGoal = function(cR, cT, cS) {
                bY(function() {
                    cv(cR, cT, cS)
                })
            };
            this.trackLink = function(cS, cR, cU, cT) {
                bY(function() {
                    cC(cS, cR, cU, cT)
                })
            };
            this.trackPageView = function(cR, cT, cS) {
                bR = [];
                if (K(bN)) {
                    bY(function() {
                        U(av, bp, bN)
                    })
                } else {
                    bY(function() {
                        bH(cR, cT, cS)
                    })
                }
            };
            this.trackAllContentImpressions = function() {
                if (K(bN)) {
                    return
                }
                bY(function() {
                    o(function() {
                        var cR = t.findContentNodes();
                        var cS = cf(cR);
                        cN(cS, br)
                    })
                })
            };
            this.trackVisibleContentImpressions = function(cR, cS) {
                if (K(bN)) {
                    return
                }
                if (!G(cR)) {
                    cR = true
                }
                if (!G(cS)) {
                    cS = 750
                }
                aI(cR, cS, this);
                bY(function() {
                    l(function() {
                        var cT = t.findContentNodes();
                        var cU = aX(cT);
                        cN(cU, br)
                    })
                })
            };
            this.trackContentImpression = function(cT, cR, cS) {
                if (K(bN)) {
                    return
                }
                if (!cT) {
                    return
                }
                cR = cR || "Unknown";
                bY(function() {
                    var cU = ax(cT, cR, cS);
                    bn(cU, br)
                })
            };
            this.trackContentImpressionsWithinNode = function(cR) {
                if (K(bN) || !cR) {
                    return
                }
                bY(function() {
                    if (bW) {
                        l(function() {
                            var cS = t.findContentNodesWithinNode(cR);
                            var cT = aX(cS);
                            cN(cT, br)
                        })
                    } else {
                        o(function() {
                            var cS = t.findContentNodesWithinNode(cR);
                            var cT = cf(cS);
                            cN(cT, br)
                        })
                    }
                })
            };
            this.trackContentInteraction = function(cT, cU, cR, cS) {
                if (K(bN)) {
                    return
                }
                if (!cT || !cU) {
                    return
                }
                cR = cR || "Unknown";
                bY(function() {
                    var cV = aF(cT, cU, cR, cS);
                    bn(cV, br)
                })
            };
            this.trackContentInteractionNode = function(cS, cR) {
                if (K(bN) || !cS) {
                    return
                }
                bY(function() {
                    var cT = cL(cS, cR);
                    bn(cT, br)
                })
            };
            this.logAllContentBlocksOnPage = function() {
                var cS = t.findContentNodes();
                var cR = t.collectContent(cS);
                if (console !== undefined && console && console.log) {
                    console.log(cR)
                }
            };
            this.trackEvent = function(cS, cU, cR, cT, cW, cV) {
                bY(function() {
                    am(cS, cU, cR, cT, cW, cV)
                })
            };
            this.trackSiteSearch = function(cR, cT, cS, cU) {
                bY(function() {
                    bQ(cR, cT, cS, cU)
                })
            };
            this.setEcommerceView = function(cU, cR, cT, cS) {
                if (!G(cT) || !cT.length) {
                    cT = ""
                } else {
                    if (cT instanceof Array) {
                        cT = JSON_PIWIK.stringify(cT)
                    }
                }
                bD[5] = ["_pkc", cT];
                if (G(cS) && String(cS).length) {
                    bD[2] = ["_pkp", cS]
                }
                if ((!G(cU) || !cU.length) && (!G(cR) || !cR.length)) {
                    return
                }
                if (G(cU) && cU.length) {
                    bD[3] = ["_pks", cU]
                }
                if (!G(cR) || !cR.length) {
                    cR = ""
                }
                bD[4] = ["_pkn", cR]
            };
            this.addEcommerceItem = function(cV, cR, cT, cS, cU) {
                if (cV.length) {
                    cB[cV] = [cV, cR, cT, cS, cU]
                }
            };
            this.trackEcommerceOrder = function(cR, cV, cU, cT, cS, cW) {
                bG(cR, cV, cU, cT, cS, cW)
            };
            this.trackEcommerceCartUpdate = function(cR) {
                bd(cR)
            };
            this.trackRequest = function(cS, cU, cT, cR) {
                bY(function() {
                    var cV = b9(cS, cU, cR);
                    bn(cV, br, cT)
                })
            };
            d.trigger("TrackerSetup", [this])
        }

        function E() {
            return {
                push: Z
            }
        }

        function b(am, al) {
            var an = {};
            var aj, ak;
            for (aj = 0; aj < al.length; aj++) {
                var ah = al[aj];
                an[ah] = 1;
                for (ak = 0; ak < am.length; ak++) {
                    if (am[ak] && am[ak][0]) {
                        var ai = am[ak][0];
                        if (ah === ai) {
                            Z(am[ak]);
                            delete am[ak];
                            if (an[ai] > 1) {
                                ad("The method " + ai + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            an[ai]++
                        }
                    }
                }
            }
            return am
        }
        var z = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "enableLinkTracking"];

        function X(ah, aj) {
            var ai = new N(ah, aj);
            F.push(ai);
            _paq = b(_paq, z);
            for (B = 0; B < _paq.length; B++) {
                if (_paq[B]) {
                    Z(_paq[B])
                }
            }
            _paq = new E();
            return ai
        }
        ag(Q, "beforeunload", ab, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        d = {
            initialized: false,
            JSON: JSON_PIWIK,
            DOM: {
                addEventListener: function(ak, aj, ai, ah) {
                    var al = typeof ah;
                    if (al === "undefined") {
                        ah = false
                    }
                    ag(ak, aj, ai, ah)
                },
                onLoad: l,
                onReady: o,
                isNodeVisible: i,
                isOrWasNodeVisible: t.isNodeVisible
            },
            on: function(ai, ah) {
                if (!v[ai]) {
                    v[ai] = []
                }
                v[ai].push(ah)
            },
            off: function(aj, ai) {
                if (!v[aj]) {
                    return
                }
                var ah = 0;
                for (ah; ah < v[aj].length; ah++) {
                    if (v[aj][ah] === ai) {
                        v[aj].splice(ah, 1)
                    }
                }
            },
            trigger: function(aj, ak, ai) {
                if (!v[aj]) {
                    return
                }
                var ah = 0;
                for (ah; ah < v[aj].length; ah++) {
                    v[aj][ah].apply(ai || Q, ak)
                }
            },
            addPlugin: function(ah, ai) {
                a[ah] = ai
            },
            getTracker: function(ah, ai) {
                if (!G(ai)) {
                    ai = this.getAsyncTracker().getSiteId()
                }
                if (!G(ah)) {
                    ah = this.getAsyncTracker().getTrackerUrl()
                }
                return new N(ah, ai)
            },
            getAsyncTrackers: function() {
                return F
            },
            addTracker: function(ah, ai) {
                if (!F.length) {
                    X(ah, ai)
                } else {
                    F[0].addTracker(ah, ai)
                }
            },
            getAsyncTracker: function(ai, al) {
                var ak;
                if (F && F.length && F[0]) {
                    ak = F[0]
                } else {
                    return X(ai, al)
                }
                if (!al && !ai) {
                    return ak
                }
                if ((!G(al) || null === al) && ak) {
                    al = ak.getSiteId()
                }
                if ((!G(ai) || null === ai) && ak) {
                    ai = ak.getTrackerUrl()
                }
                var aj, ah = 0;
                for (ah; ah < F.length; ah++) {
                    aj = F[ah];
                    if (aj && String(aj.getSiteId()) === String(al) && aj.getTrackerUrl() === ai) {
                        return aj
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var ai = aa;
                aa = [];
                var ah = 0;
                for (ah; ah < ai.length; ah++) {
                    Z(ai[ah])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return d
            })
        }
        return d
    }());
    /*!!! pluginTrackerHook */

    /* GENERATED: tracker.min.js */
    /*!!
     * Copyright (C) InnoCraft Ltd - All rights reserved.
     *
     * All information contained herein is, and remains the property of InnoCraft Ltd.
     *
     * @link https://www.innocraft.com/
     * @license For license details see https://www.innocraft.com/license
     */
    (function() {
        var s = new Date().getTime();
        var k = false;
        var p = 5;
        var x = true;
        var r = null;

        function j() {
            if (typeof Piwik === "object" && typeof Piwik.JSON === "object") {
                return Piwik.JSON
            } else {
                if (window.JSON && window.JSON.parse && window.JSON.stringify) {
                    return window.JSON
                } else {
                    if (typeof JSON2 === "object" && JSON2.parse && window.JSON2.stringify) {
                        return JSON2
                    } else {
                        return {
                            parse: function() {
                                return {}
                            },
                            stringify: function() {
                                return ""
                            }
                        }
                    }
                }
            }
        }
        var i = true;

        function e() {
            if (k && "undefined" !== typeof console && console && console.debug) {
                console.debug.apply(console, arguments)
            }
        }

        function o(z) {
            return typeof z === "object" && typeof z.length === "number"
        }

        function n() {
            return "function" === typeof jwplayer
        }
        var b = {
            AUDIO: "Audio",
            VIDEO: "Video"
        };
        var t = {
            getLocation: function() {
                var z = this.location || window.location;
                if (!z.origin) {
                    z.origin = z.protocol + "//" + z.hostname + (z.port ? ":" + z.port : "")
                }
                return z
            },
            setLocation: function(z) {
                this.location = z
            },
            makeUrlAbsolute: function(A) {
                if ((!A || String(A) !== A) && A !== "") {
                    return A
                }
                if (A.indexOf("//") === 0) {
                    return this.getLocation().protocol + A
                }
                if (A.indexOf("://") !== -1) {
                    return A
                }
                if (A.indexOf("/") === 0) {
                    return this.getLocation().origin + A
                }
                if (A.indexOf("#") === 0 || A.indexOf("?") === 0) {
                    return this.getLocation().origin + this.getLocation().pathname + A
                }
                if ("" === A) {
                    return this.getLocation().href
                }
                var z = "(.*/)";
                var B = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(z))[0];
                return B + A
            }
        };
        var v = {
            getCurrentTime: function() {
                return new Date().getTime()
            },
            roundTimeToSeconds: function(z) {
                return Math.round(z / 1000)
            },
            isNumber: function(z) {
                return !isNaN(z)
            },
            getTimeScriptLoaded: function(z) {
                return s
            },
            generateUniqueId: function() {
                var C = "";
                var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                var B = A.length;
                for (var z = 0; z < 16; z++) {
                    C += A.charAt(Math.floor(Math.random() * B))
                }
                return C
            },
            getQueryParameter: function(z, D) {
                var C = new RegExp("[?&]" + D + "(=([^&#]*)|&|#|$)");
                var B = C.exec(z);
                if (!B) {
                    return null
                }
                if (!B[2]) {
                    return ""
                }
                var A = B[2].replace(/\+/g, " ");
                return decodeURIComponent(A)
            }
        };
        var c = {
            getAttribute: function(A, z) {
                if (A && A.getAttribute && z) {
                    return A.getAttribute(z)
                }
                return null
            },
            setAttribute: function(B, z, A) {
                if (B && B.setAttribute) {
                    B.setAttribute(z, A)
                }
            },
            isMediaIgnored: function(z) {
                var A = c.getAttribute(z, "data-piwik-ignore");
                return !!A || A === ""
            },
            getMediaResource: function(z, A) {
                var B = c.getAttribute(z, "data-piwik-resource");
                if (B) {
                    return B
                }
                B = c.getAttribute(z, "src");
                if (B) {
                    return B
                }
                return A
            },
            getMediaTitle: function(z) {
                var A = c.getAttribute(z, "data-piwik-title");
                if (!A) {
                    A = c.getAttribute(z, "title")
                }
                if (!A) {
                    A = c.getAttribute(z, "alt")
                }
                return A
            },
            hasCssClass: function(B, C) {
                if (B && B.className) {
                    var A = ("" + B.className).split(" ");
                    for (var z = 0; z < A.length; z++) {
                        if (A[z] === C) {
                            return true
                        }
                    }
                }
                return false
            },
            getFirstParentWithClass: function(B, C, z) {
                if (z <= 0 || !B || !B.parentNode) {
                    return null
                }
                var A = B.parentNode;
                if (this.hasCssClass(A, C)) {
                    return A
                } else {
                    return this.getFirstParentWithClass(A, C, --z)
                }
            },
            isFullscreen: function(z) {
                if (z && document.fullScreenElement === z || document.mozFullScreenElement === z || document.webkitFullscreenElement === z || document.msFullscreenElement === z) {
                    return true
                }
                return false
            }
        };

        function h() {
            if (null === r) {
                if ("object" === typeof Piwik && Piwik.getAsyncTrackers) {
                    return Piwik.getAsyncTrackers()
                }
            }
            if (o(r)) {
                return r
            }
            return []
        }

        function y(A, z, B) {
            this.playerName = A;
            this.type = z;
            this.resource = B;
            this.reset()
        }
        y.piwikTrackers = [];
        y.prototype.reset = function() {
            this.id = v.generateUniqueId();
            this.mediaTitle = null;
            this.timeToInitialPlay = null;
            this.width = null;
            this.height = null;
            this.fullscreen = false;
            this.timeout = null;
            this.watchedTime = 0;
            this.lastTimeCheck = null;
            this.isPlaying = false;
            this.isPaused = false;
            this.mediaProgressInSeconds = 0;
            this.mediaLengthInSeconds = 0
        };
        y.prototype.setResource = function(z) {
            this.resource = z
        };
        y.prototype.trackEvent = function(F) {
            var z = h();
            var A = "Media" + this.type;
            var D = this.mediaTitle || this.resource;
            var B = [A, F, D];
            if (z && z.length) {
                var C = 0,
                    E;
                for (C; C < z.length; C++) {
                    E = z[C];
                    if (E && E.MediaAnalytics && E.MediaAnalytics.isTrackEventsEnabled()) {
                        E.trackEvent.apply(E, B)
                    }
                }
            } else {
                if (typeof _paq === "undefined") {
                    _paq = []
                }
                B.unshift("trackEvent");
                _paq.push(B);
                e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
            }
            e("trackEvent", A, D, F)
        };
        y.prototype.trackProgress = function(D, G, F, A, B, I, Q, J, N, K, H, z) {
            var P = {
                ma_id: D,
                ma_ti: G !== null ? G : "",
                ma_pn: F,
                ma_mt: A,
                ma_re: B,
                ma_st: parseInt(I, 10),
                ma_ps: parseInt(Q, 10),
                ma_le: J,
                ma_ttp: N !== null ? N : "",
                ma_w: K ? K : "",
                ma_h: H ? H : "",
                ma_fs: z ? "1" : "0"
            };
            var L = "";
            for (var E in P) {
                if (Object.prototype.hasOwnProperty.call(P, E)) {
                    L += E + "=" + encodeURIComponent(P[E]) + "&"
                }
            }
            var O = h();
            if (O && O.length) {
                var M = 0,
                    C;
                for (M; M < O.length; M++) {
                    C = O[M];
                    if (C && C.MediaAnalytics && C.MediaAnalytics.isTrackProgressEnabled()) {
                        C.trackRequest(L)
                    }
                }
            } else {
                if (typeof _paq === "undefined") {
                    _paq = []
                }
                _paq.push(["trackRequest", L]);
                e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
            }
            if (k) {
                e("trackProgress", j().stringify(P))
            }
        };
        y.prototype.setFullscreen = function(z) {
            if (!this.fullscreen) {
                this.fullscreen = !!z
            }
        };
        y.prototype.setWidth = function(z) {
            if (v.isNumber(z)) {
                this.width = parseInt(z, 10)
            }
        };
        y.prototype.setHeight = function(z) {
            if (v.isNumber(z)) {
                this.height = parseInt(z, 10)
            }
        };
        y.prototype.setMediaTitle = function(z) {
            this.mediaTitle = z
        };
        y.prototype.getMediaTitle = function() {
            return this.mediaTitle
        };
        y.prototype.setMediaProgressInSeconds = function(z) {
            this.mediaProgressInSeconds = z
        };
        y.prototype.getMediaProgressInSeconds = function() {
            return this.mediaProgressInSeconds
        };
        y.prototype.setMediaTotalLengthInSeconds = function(z) {
            this.mediaLengthInSeconds = z
        };
        y.prototype.getMediaTotalLengthInSeconds = function() {
            return this.mediaLengthInSeconds
        };
        y.prototype.play = function() {
            this.startWatchedTime();
            if (i && this.timeToInitialPlay === null) {
                this.timeToInitialPlay = v.roundTimeToSeconds(v.getCurrentTime() - v.getTimeScriptLoaded())
            }
            i = false;
            if (this.isPaused) {
                this.isPaused = false;
                this.trackEvent("resume")
            } else {
                this.trackEvent("play")
            }
            this.trackUpdate()
        };
        y.prototype.startWatchedTime = function() {
            this.isPlaying = true;
            this.lastTimeCheck = v.getCurrentTime()
        };
        y.prototype.stopWatchedTime = function() {
            this.isPlaying = false;
            if (this.lastTimeCheck) {
                this.watchedTime += v.getCurrentTime() - this.lastTimeCheck;
                this.lastTimeCheck = null
            }
        };
        y.prototype.seekStart = function() {
            this.stopWatchedTime()
        };
        y.prototype.seekFinish = function() {
            this.startWatchedTime()
        };
        y.prototype.pause = function() {
            if (this.isPlaying) {
                this.isPaused = true;
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = null
                }
                this.stopWatchedTime();
                this.trackUpdate();
                this.trackEvent("pause")
            }
        };
        y.prototype.finish = function() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null
            }
            this.stopWatchedTime();
            this.trackUpdate();
            this.trackEvent("finish");
            this.reset()
        };
        y.prototype.trackUpdate = function() {
            var z = v.getCurrentTime();
            if (this.lastTimeCheck) {
                this.watchedTime += (z - this.lastTimeCheck);
                this.lastTimeCheck = z
            }
            var C = this.mediaLengthInSeconds;
            if (!C || !v.isNumber(C)) {
                C = ""
            } else {
                C = parseInt(this.mediaLengthInSeconds, 10)
            }
            var A = v.roundTimeToSeconds(this.watchedTime);
            var B = this.mediaProgressInSeconds;
            if (B > C && C) {
                B = C
            }
            this.trackProgress(this.id, this.mediaTitle, this.playerName, this.type, this.resource, A, B, C, this.timeToInitialPlay, this.width, this.height, this.fullscreen)
        };
        y.prototype.update = function() {
            if (this.timeout) {
                return
            }
            var z = this;
            this.timeout = setTimeout(function() {
                z.trackUpdate();
                z.timeout = null
            }, p * 1000)
        };
        var d = {
            players: {},
            registerPlayer: function(z, A) {
                if (!A || !A.scanForMedia || "function" !== typeof A.scanForMedia) {
                    throw new Error("A registered player does not implement the scanForMedia function")
                }
                z = z.toLowerCase();
                this.players[z] = A
            },
            removePlayer: function(z) {
                z = z.toLowerCase();
                delete this.players[z]
            },
            getPlayer: function(z) {
                z = z.toLowerCase();
                if (z in this.players) {
                    return this.players[z]
                }
                return null
            },
            getPlayers: function() {
                return this.players
            },
            scanForMedia: function(A) {
                if (!x) {
                    return
                }
                if ("undefined" === typeof A || !A) {
                    A = document
                }
                var z;
                for (z in this.players) {
                    if (Object.prototype.hasOwnProperty.call(this.players, z)) {
                        this.players[z].scanForMedia(A)
                    }
                }
            }
        };
        var f = function(B, H) {
            if (!B) {
                return
            }
            if (!window.addEventListener) {
                return
            }
            if (B.hasPlayerInstance) {
                return
            }
            B.hasPlayerInstance = true;
            var z = b.VIDEO === H;
            var A = t.makeUrlAbsolute(B.currentSrc);
            var D = c.getMediaResource(B, A);
            var J = new y("html5" + H.toLowerCase(), H, D);
            if (z) {
                J.setWidth(B.videoWidth);
                J.setHeight(B.videoHeight);
                J.setFullscreen(c.isFullscreen(B))
            }
            var I = c.getMediaTitle(B);
            if (I) {
                J.setMediaTitle(I)
            } else {
                E(B, J)
            }
            if (B.duration) {
                J.setMediaTotalLengthInSeconds(B.duration)
            }
            var F = false;
            var G = null;
            if (B.currentSrc) {
                G = B.currentSrc
            }

            function E(N, M) {
                if (n() && !M.getMediaTitle()) {
                    var O = c.getFirstParentWithClass(N, "jwplayer", 2);
                    if (O) {
                        var K = jwplayer(O);
                        if (K && K.getPlaylistItem) {
                            var L = K.getPlaylistItem();
                            if (L && L.title) {
                                M.setMediaTitle(L.title)
                            }
                        }
                    }
                }
            }

            function C() {
                if (!G && B.currentSrc) {
                    G = B.currentSrc
                } else {
                    if (G && B.currentSrc && G != B.currentSrc) {
                        G = B.currentSrc;
                        var L = t.makeUrlAbsolute(G);
                        var K = J.getMediaTitle();
                        J.reset();
                        J.setResource(L);
                        J.setMediaTitle("");
                        var M = c.getMediaTitle(B);
                        if (M && M !== K) {
                            J.setMediaTitle(M)
                        } else {
                            E(B, J)
                        }
                    }
                }
            }
            B.addEventListener("playing", function() {
                C();
                F = true;
                J.play()
            }, true);
            B.addEventListener("loadeddata", function() {
                C()
            }, true);
            B.addEventListener("pause", function() {
                if (B.currentTime && B.duration && B.currentTime === B.duration) {
                    return
                }
                J.pause()
            }, true);
            B.addEventListener("ended", function() {
                J.finish()
            }, true);
            B.addEventListener("timeupdate", function() {
                J.setMediaProgressInSeconds(B.currentTime);
                J.setMediaTotalLengthInSeconds(B.duration);
                if (z && !J.width) {
                    J.setWidth(B.videoWidth);
                    J.setHeight(B.videoHeight)
                }
                if (!F) {
                    F = true;
                    J.play()
                } else {
                    J.update()
                }
            }, true);
            B.addEventListener("seeking", function() {
                J.seekStart()
            }, true);
            B.addEventListener("seeked", function() {
                J.setMediaProgressInSeconds(B.currentTime);
                J.setMediaTotalLengthInSeconds(B.duration);
                J.seekFinish()
            }, true);
            if (z) {
                B.addEventListener("resize", function() {
                    J.setWidth(B.videoWidth);
                    J.setHeight(B.videoHeight);
                    J.setFullscreen(c.isFullscreen(B))
                }, true);
                window.addEventListener("resize", function() {
                    J.setWidth(B.clientWidth);
                    J.setHeight(B.clientHeight);
                    J.setFullscreen(c.isFullscreen(B))
                }, false)
            }
            J.trackUpdate()
        };
        f.scanForMedia = function(z) {
            if (!window.addEventListener) {
                return
            }
            var D = z.getElementsByTagName("video");
            for (var B = 0; B < D.length; B++) {
                if (!c.isMediaIgnored(D[B])) {
                    new f(D[B], b.VIDEO)
                }
            }
            D = null;
            var A = z.getElementsByTagName("audio");
            for (var B = 0; B < A.length; B++) {
                if (!c.isMediaIgnored(A[B])) {
                    new f(A[B], b.AUDIO)
                }
            }
            A = null;
            if ("undefined" !== typeof soundManager && soundManager && "undefined" !== typeof soundManager.sounds) {
                for (var B in soundManager.sounds) {
                    if (Object.prototype.hasOwnProperty.call(soundManager.sounds, B)) {
                        var C = soundManager.sounds[B];
                        if (C && C.isHTML5 && C._a) {
                            if (!c.isMediaIgnored(C._a)) {
                                new f(C._a, b.AUDIO)
                            }
                        }
                    }
                }
            }
        };
        var w = function(B, H) {
            if (!B || !window.addEventListener) {
                return
            }
            if (B.hasPlayerInstance || !n()) {
                return
            }
            var I = c.getFirstParentWithClass(B, "jwplayer", 2);
            if (!I) {
                return
            }
            var L = jwplayer(I);
            if (!L || !L.getItem || "undefined" === (typeof L.getItem())) {
                return
            }
            B.hasPlayerInstance = true;

            function M(N) {
                var O = N.getPlaylistItem();
                if (O && O.file) {
                    return O.file
                }
                return ""
            }

            function A(N) {
                var O = N.getPlaylistItem();
                if (O && O.title) {
                    return O.title
                }
                return null
            }

            function G(N, O, Q) {
                var P = M(N);
                if (Q && P && Q != P) {
                    Q = P;
                    O.reset();
                    O.setResource(t.makeUrlAbsolute(Q));
                    O.setMediaTitle(A(N));
                    O.setWidth(N.getWidth());
                    O.setHeight(N.getHeight());
                    O.setFullscreen(N.getFullscreen());
                    return true
                }
                return false
            }
            var K = M(L);
            var z = t.makeUrlAbsolute(K);
            var C = c.getMediaResource(B, z);
            var J = new y("jwplayer", H, C);
            J.setMediaTitle(A(L));
            J.setWidth(L.getWidth());
            J.setHeight(L.getHeight());
            J.setFullscreen(L.getFullscreen());
            var D = L.getDuration();
            if (D) {
                J.setMediaTotalLengthInSeconds(D)
            }
            var E = false,
                F = K;
            L.on("play", function() {
                G(L, J, F);
                E = true;
                J.play()
            }, true);
            L.on("playlistItem", function() {
                G(L, J, F);
                if (L.getState() !== "playing") {
                    E = false
                }
            }, true);
            L.on("pause", function() {
                if (L.getPosition() && L.getDuration() && L.getPosition() === L.getDuration()) {
                    return
                }
                J.pause()
            }, true);
            L.on("complete", function() {
                J.finish()
            }, true);
            L.on("time", function() {
                var N = L.getPosition();
                if (N) {
                    J.setMediaProgressInSeconds(N)
                }
                var O = L.getDuration();
                if (O) {
                    J.setMediaTotalLengthInSeconds(O)
                }
                if (E) {
                    J.update()
                } else {
                    E = true;
                    J.play()
                }
            }, true);
            L.on("seek", function() {
                J.seekStart()
            }, true);
            L.on("seeked", function() {
                var N = L.getPosition();
                if (N) {
                    J.setMediaProgressInSeconds(N)
                }
                var O = L.getDuration();
                if (O) {
                    J.setMediaTotalLengthInSeconds(O)
                }
                J.seekFinish()
            }, true);
            L.on("resize", function() {
                J.setWidth(L.getWidth());
                J.setHeight(L.getHeight());
                J.setFullscreen(L.getFullscreen())
            }, true);
            L.on("fullscreen", function() {
                J.setWidth(L.getWidth());
                J.setHeight(L.getHeight());
                J.setFullscreen(L.getFullscreen())
            }, false);
            J.trackUpdate()
        };
        w.scanForMedia = function(z) {
            if (!window.addEventListener || !n()) {
                return
            }
            var B = z.getElementsByTagName("object");
            for (var A = 0; A < B.length; A++) {
                if (!c.isMediaIgnored(B[A]) && c.hasCssClass(B[A], "jw-swf")) {
                    new w(B[A], b.VIDEO)
                }
            }
            B = null
        };
        var a = function(C, D) {
            if (!C) {
                return
            }
            if (!window.addEventListener) {
                return
            }
            if (C.playerInstance) {
                return
            }
            C.playerInstance = true;
            var z = c.getAttribute(C, "src");
            var B = c.getMediaResource(C, null);
            var H = new y("vimeo", D, B);
            H.setWidth(C.clientWidth);
            H.setHeight(C.clientHeight);
            H.setFullscreen(c.isFullscreen(C));
            window.addEventListener("resize", function() {
                H.setWidth(C.clientWidth);
                H.setHeight(C.clientHeight);
                H.setFullscreen(c.isFullscreen(C))
            }, false);
            var G = c.getMediaTitle(C);
            if (G) {
                H.setMediaTitle(G)
            }
            var A = function(J) {
                if (!(/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/).test(J.origin)) {
                    return false
                }
                if (!J || !J.data) {
                    return
                }
                if (C.contentWindow && J.source && C.contentWindow !== J.source) {
                    return
                }
                var K = J.data;
                if ("string" === typeof K) {
                    K = j().parse(J.data)
                }
                if (("event" in K && K.event === "ready") || ("method" in K && K.method === "ping")) {
                    if (E === "*") {
                        E = J.origin
                    }
                    if (!C.isVimeoReady) {
                        C.isVimeoReady = true;
                        F("addEventListener", "play");
                        F("addEventListener", "pause");
                        F("addEventListener", "finish");
                        F("addEventListener", "seek");
                        F("addEventListener", "playProgress");
                        F("getVideoTitle")
                    }
                    return
                }
                if ("method" in K) {
                    e("vimeoMethod", K.method);
                    switch (K.method) {
                        case "getVideoTitle":
                            if (K.value) {
                                H.setMediaTitle(K.value)
                            }
                            H.trackUpdate();
                            break
                    }
                    return
                }
                if ("event" in K) {
                    var I = K.event;
                    e("vimeoEvent", I);
                    if (K && K.data) {
                        K = K.data
                    }
                    if (H && K && K.seconds) {
                        if (H.getMediaProgressInSeconds() === K.seconds && (I === "playProgress" || I === "timeupdate")) {
                            return
                        }
                        H.setMediaProgressInSeconds(K.seconds)
                    }
                    if (H && K && K.duration) {
                        H.setMediaTotalLengthInSeconds(K.duration)
                    }
                    switch (I) {
                        case "play":
                            H.play();
                            break;
                        case "timeupdate":
                        case "playProgress":
                            if (H._isSeeking) {
                                H._isSeeking = false;
                                H.seekFinish()
                            }
                            H.update();
                            break;
                        case "seek":
                            H.seekStart();
                            H._isSeeking = true;
                            break;
                        case "pause":
                            if (K && K.seconds && K && K.duration && K.seconds === K.duration) {
                                e("ignoring pause event because video is finished");
                                break
                            }
                            H.pause();
                            break;
                        case "finish":
                            H.finish();
                            break
                    }
                }
            };
            window.addEventListener("message", A, true);
            var E = "*";
            H._isSeeking = false;

            function F(L, J) {
                var I = {
                    method: L
                };
                if (J !== undefined) {
                    I.value = J
                }
                if (C && C.contentWindow) {
                    if (navigator && navigator.userAgent) {
                        var K = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                        if (K >= 8 && K < 10) {
                            I = j().stringify(I)
                        }
                    }
                    C.contentWindow.postMessage(I, E)
                }
            }
            F("ping")
        };
        a.scanForMedia = function(z) {
            if (!window.addEventListener) {
                return
            }
            var B = z.getElementsByTagName("iframe");
            for (var A = 0; A < B.length; A++) {
                if (c.isMediaIgnored(B[A])) {
                    continue
                }
                var C = c.getAttribute(B[A], "src");
                if (C && C.indexOf("player.vimeo.com") > 0) {
                    new a(B[A], b.VIDEO)
                }
            }
            B = null
        };
        var q = function(D, G) {
            if (!D) {
                return
            }
            if (!window.addEventListener) {
                return
            }
            if (D.playerInstance) {
                return
            }
            var A = c.getMediaResource(D, null);
            var K = new y("youtube", G, A);
            K.setWidth(D.clientWidth);
            K.setHeight(D.clientHeight);
            K.setFullscreen(c.isFullscreen(D));
            window.addEventListener("resize", function() {
                K.setWidth(D.clientWidth);
                K.setHeight(D.clientHeight);
                K.setFullscreen(c.isFullscreen(D))
            }, false);
            var I = c.getMediaTitle(D);
            if (I) {
                K.setMediaTitle(I)
            }
            var B = false;
            var C = null;
            var J = 0;
            var F = !c.getAttribute(D, "data-piwik-title");
            var z = false;
            var E = false;
            var H = null;
            D.playerInstance = new YT.Player(D, {
                events: {
                    onReady: function(L) {
                        if (!L || !L.target) {
                            return
                        }
                        if (F && L.target && L.target.getVideoData) {
                            var M = L.target.getVideoData();
                            K.setMediaTitle(M.title)
                        }
                        K.trackUpdate()
                    },
                    onStateChange: function(L) {
                        if (!L || !L.target) {
                            return
                        }
                        var O = L.target;
                        if (!O.getPlayerState) {
                            e("youtubeMissingPlayerState");
                            return
                        }
                        var N = O.getPlayerState();
                        e("youtubeStateChange", N);
                        switch (N) {
                            case YT.PlayerState.ENDED:
                                J = 0;
                                if (O.getCurrentTime) {
                                    K.setMediaProgressInSeconds(O.getCurrentTime())
                                }
                                if (O.getDuration) {
                                    K.setMediaTotalLengthInSeconds(O.getDuration())
                                }
                                K.finish();
                                if (C) {
                                    clearInterval(C);
                                    C = null
                                }
                                break;
                            case YT.PlayerState.PLAYING:
                                var M = null;
                                if (O.getVideoData) {
                                    M = O.getVideoData()
                                }
                                if (!H && M && M.video_id) {
                                    H = M.video_id
                                } else {
                                    if (H && M && M.video_id && H != M.video_id) {
                                        H = M.video_id;
                                        K.reset();
                                        if (O.getVideoUrl) {
                                            K.setResource(O.getVideoUrl())
                                        }
                                        F = true;
                                        z = false;
                                        B = false;
                                        e("currentVideoId has changed to " + H)
                                    }
                                }
                                if (O.getCurrentTime) {
                                    J = v.getCurrentTime();
                                    K.setMediaProgressInSeconds(O.getCurrentTime())
                                }
                                if (O.getDuration) {
                                    K.setMediaTotalLengthInSeconds(O.getDuration())
                                }
                                if (F) {
                                    if (M && M.title) {
                                        K.setMediaTitle(M.title)
                                    }
                                    F = false
                                }
                                if (!z || E) {
                                    z = true;
                                    E = false;
                                    B = false;
                                    K.play()
                                } else {
                                    if (B) {
                                        B = false;
                                        K.seekFinish()
                                    }
                                }
                                K.update();
                                if (!C) {
                                    C = setInterval(function() {
                                        if (J) {
                                            var Q = K.getMediaProgressInSeconds();
                                            var P = v.getCurrentTime();
                                            if (J) {
                                                Q += v.roundTimeToSeconds(P - J);
                                                J = P
                                            }
                                            K.setMediaProgressInSeconds(Q)
                                        }
                                        K.update()
                                    }, 1 * 1000)
                                }
                                break;
                            case -1:
                            case YT.PlayerState.PAUSED:
                                J = 0;
                                K.pause();
                                E = true;
                                if (C) {
                                    clearInterval(C);
                                    C = null
                                }
                                break;
                            case YT.PlayerState.BUFFERING:
                                J = 0;
                                K.seekStart();
                                B = true;
                                if (C) {
                                    clearInterval(C);
                                    C = null
                                }
                                break
                        }
                    }
                }
            })
        };
        q.scanForMedia = function(A) {
            if (!window.addEventListener) {
                return
            }
            var B = [];
            var C = A.getElementsByTagName("iframe");
            for (var D = 0; D < C.length; D++) {
                if (c.isMediaIgnored(C[D])) {
                    continue
                }
                var F = c.getAttribute(C[D], "src");
                if (F && F.indexOf("youtube.com") > 0) {
                    c.setAttribute(C[D], "enablejsapi", "true");
                    B.push(C[D])
                }
            }
            C = null;
            if (B.length && !window.onYouTubeIframeAPIReady) {
                window.onYouTubeIframeAPIReady = function() {
                    var G = A.getElementsByTagName("iframe");
                    for (var H = 0; H < G.length; H++) {
                        if (c.isMediaIgnored(G[H])) {
                            continue
                        }
                        var I = c.getAttribute(G[H], "src");
                        if (I && I.indexOf("youtube.com") > 0) {
                            if (G[H].setAttribute) {
                                G[H].setAttribute("enablejsapi", "1")
                            }
                            new q(G[H], b.VIDEO)
                        }
                    }
                };
                var z = A.createElement("script");
                z.src = "https://www.youtube.com/iframe_api";
                var E = A.getElementsByTagName("script")[0];
                E.parentNode.insertBefore(z, E)
            } else {
                if (B.length && "undefined" !== typeof YT) {
                    for (var D = 0; D < B.length; D++) {
                        new q(B[D], b.VIDEO)
                    }
                }
            }
            B = null
        };
        d.registerPlayer("html5", f);
        d.registerPlayer("vimeo", a);
        d.registerPlayer("youtube", q);
        d.registerPlayer("jwplayer", w);

        function m(z) {
            if ("undefined" !== typeof z.MediaAnalytics) {
                return
            }
            z.MediaAnalytics = {
                enableEvents: true,
                enableProgress: true,
                disableTrackEvents: function() {
                    this.enableEvents = false
                },
                enableTrackEvents: function() {
                    this.enableEvents = true
                },
                isTrackEventsEnabled: function() {
                    return x && this.enableEvents
                },
                disableTrackProgress: function() {
                    this.enableProgress = false
                },
                enableTrackProgress: function() {
                    this.enableProgress = true
                },
                isTrackProgressEnabled: function() {
                    return x && this.enableProgress
                }
            };
            Piwik.trigger("MediaAnalytics.TrackerInitialized", [z])
        }

        function g() {
            if (typeof window === "object" && "function" === typeof window.piwikMediaAnalyticsAsyncInit) {
                window.piwikMediaAnalyticsAsyncInit()
            }
        }

        function l() {
            var z = h();
            if (!z || !o(z) || !z.length) {
                return
            }
            Piwik.DOM.onReady(function() {
                d.scanForMedia(document)
            });
            Piwik.DOM.onLoad(function() {
                d.scanForMedia(document)
            })
        }

        function u() {
            if ("object" === typeof window && "object" === typeof window.Piwik && "object" === typeof window.Piwik.MediaAnalytics) {
                return
            }
            if ("object" === typeof window && !window.Piwik) {
                return
            }
            Piwik.MediaAnalytics = {
                utils: v,
                url: t,
                element: c,
                players: d,
                MediaTracker: y,
                mediaType: b,
                scanForMedia: function(B) {
                    d.scanForMedia(B || document)
                },
                setPingInterval: function(B) {
                    if (1 > B) {
                        throw new Error("Ping interval needs to be at least one second")
                    }
                    p = parseInt(B, 10)
                },
                removePlayer: function(B) {
                    d.removePlayer(B)
                },
                addPlayer: function(C, B) {
                    d.registerPlayer(C, B)
                },
                disableMediaAnalytics: function() {
                    x = false
                },
                enableMediaAnalytics: function() {
                    x = true
                },
                setPiwikTrackers: function(B) {
                    if (B === null) {
                        r = null;
                        return
                    }
                    if (!o(B)) {
                        B = [B]
                    }
                    r = B
                },
                getPiwikTrackers: function() {
                    return h()
                },
                isMediaAnalyticsEnabled: function() {
                    return x
                },
                enableDebugMode: function() {
                    k = true
                }
            };
            if (window.Piwik.initialized) {
                var z = Piwik.getAsyncTrackers();
                var A = 0;
                for (A; A < z.length; A++) {
                    m(z[A])
                }
                Piwik.on("TrackerSetup", m);
                Piwik.retryMissedPluginCalls();
                g();
                l()
            } else {
                Piwik.on("TrackerSetup", m);
                Piwik.on("PiwikInitialized", function() {
                    g();
                    l()
                })
            }
        }
        if ("object" === typeof window.Piwik) {
            u()
        } else {
            if ("object" !== typeof window.piwikPluginAsyncInit) {
                window.piwikPluginAsyncInit = []
            }
            window.piwikPluginAsyncInit.push(u)
        }
    })();
    /* END GENERATED: tracker.min.js */


    /* GENERATED: tracker.min.js */
    /*!!
     * Copyright (C) InnoCraft Ltd - All rights reserved.
     *
     * All information contained herein is, and remains the property of InnoCraft Ltd.
     *
     * @link https://www.innocraft.com/
     * @license For license details see https://www.innocraft.com/license
     */
    (function() {
        var k = false;
        var p = true;
        var o = null;
        var j = "FIELD_CHECKABLE";
        var w = "FIELD_SELECTABLE";
        var h = "FIELD_TEXT";
        var m = ["password", "text", "url", "tel", "email", "search", "", null];
        var a = ["color", "date", "datetime", "datetime-local", "month", "number", "range", "time", "week"];
        var b = ["radio", "checkbox"];
        var n = ["button", "submit", "hidden", "reset"];
        var s = 1750;
        var x = [];

        function e() {
            if (k && "undefined" !== typeof console && console && console.debug) {
                console.debug.apply(console, arguments)
            }
        }
        var c = {
            getAttribute: function(z, y) {
                if (z && z.getAttribute && y) {
                    return z.getAttribute(y)
                }
                return null
            },
            hasNodeAttribute: function(z, y) {
                if (z && z.hasAttribute) {
                    return z.hasAttribute(y)
                }
                if (z && z.attributes) {
                    var A = (typeof z.attributes[y]);
                    return A !== "undefined"
                }
                return false
            },
            isIgnored: function(y) {
                return this.hasNodeAttribute(y, "data-piwik-ignore")
            },
            getTagName: function(y) {
                if (y && y.tagName) {
                    return ("" + y.tagName).toLowerCase()
                }
                return null
            },
            findAllFormElements: function(y) {
                if (y && y.querySelectorAll) {
                    return y.querySelectorAll("form, [data-piwik-form]")
                }
                return []
            },
            findAllFieldElements: function(y) {
                if (y && y.querySelectorAll) {
                    return y.querySelectorAll("input,select,textarea,button,textarea")
                }
                return []
            },
            findFormTrackerInstance: function(z, y) {
                if ("undefined" === typeof y) {
                    y = 100
                }
                if (y <= 0 || !z) {
                    return null
                }
                if (z.formTrackerInstance) {
                    return z.formTrackerInstance
                }
                if (z.parentNode) {
                    return this.findFormTrackerInstance(z.parentNode, --y)
                }
            }
        };
        var t = {
            isArray: function(y) {
                return typeof y === "object" && y !== null && typeof y.length === "number"
            },
            indexOfArray: function(A, z) {
                if (!A) {
                    return -1
                }
                if (A.indexOf) {
                    return A.indexOf(z)
                }
                if (!this.isArray(A)) {
                    return -1
                }
                for (var y = 0; y < A.length; y++) {
                    if (A[y] === z) {
                        return y
                    }
                }
                return -1
            },
            getCurrentTime: function() {
                return new Date().getTime()
            },
            isNumber: function(y) {
                return !isNaN(y)
            },
            generateUniqueId: function() {
                var B = "";
                var z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                var A = z.length;
                for (var y = 0; y < 6; y++) {
                    B += z.charAt(Math.floor(Math.random() * A))
                }
                return B
            },
            paramsToQueryString: function(A) {
                if (!A) {
                    A = {}
                }
                var z = "";
                for (var y in A) {
                    if (Object.prototype.hasOwnProperty.call(A, y)) {
                        if (A[y] === null) {
                            continue
                        }
                        z += y + "=" + encodeURIComponent(A[y]) + "&"
                    }
                }
                return z
            }
        };
        var g = {
            getPiwikTrackers: function() {
                if (null === o) {
                    if ("object" === typeof Piwik && Piwik.getAsyncTrackers) {
                        return Piwik.getAsyncTrackers()
                    }
                }
                if (t.isArray(o)) {
                    return o
                }
                return []
            },
            trackParams: function(D, C) {
                if (!p) {
                    return
                }
                var A = t.paramsToQueryString(D);
                if (!A || A === "") {
                    return
                }
                var y = this.getPiwikTrackers();
                if (y && y.length) {
                    var z = 0,
                        B;
                    for (z; z < y.length; z++) {
                        B = y[z];
                        if (C && 500 === B.getLinkTrackingTimer() && B.setLinkTrackingTimer) {
                            B.setLinkTrackingTimer(650)
                        }
                        if (B && (!B.FormAnalytics || B.FormAnalytics.isEnabled())) {
                            B.trackRequest(A, null, null, "FormAnalytics")
                        }
                    }
                }
                if (k) {
                    e("trackProgress: " + Piwik.JSON.stringify(D))
                }
            }
        };

        function f() {
            if (typeof window === "object" && "function" === typeof window.piwikFormAnalyticsAsyncInit) {
                window.piwikFormAnalyticsAsyncInit()
            }
        }

        function r(y) {
            this.reset();
            this.fields = [];
            this.firstFieldEngagementDate = null;
            this.lastFieldEngagementDate = null;
            this.hesitationTimeTracked = false;
            this.formStartTracked = false;
            this.node = y;
            this.formId = c.getAttribute(y, "id");
            this.formName = c.getAttribute(y, "data-piwik-name");
            if (!this.formName) {
                this.formName = c.getAttribute(y, "name")
            }
            this.entryFieldName = "";
            this.exitFieldName = "";
            this.lastFocusedFieldName = "";
            this.fieldsWithUpdates = [];
            this.fieldNodes = [];
            this.initialFormViewLoggedWithTrackers = [];
            this.trackingTimeout = null;
            this.timeLastTrackingRequest = 0;
            this.timeOffWindowBeforeEngagement = 0;
            this.timeOffWindowSinceEngagement = 0;
            Piwik.DOM.addEventListener(window, "focus", (function(z) {
                return function() {
                    if (!z.timeWindowBlur) {
                        return
                    }
                    var A = t.getCurrentTime() - z.timeWindowBlur;
                    z.timeWindowBlur = null;
                    if (A < 0) {
                        A = 0
                    }
                    if (z.timeLastTrackingRequest) {
                        z.timeLastTrackingRequest = z.timeLastTrackingRequest + A
                    }
                    if (z.firstFieldEngagementDate) {
                        z.timeOffWindowSinceEngagement += A;
                        e("time off engaged " + z.timeOffWindowSinceEngagement)
                    } else {
                        z.timeOffWindowBeforeEngagement += A;
                        e("time off not engaged " + z.timeOffWindowBeforeEngagement)
                    }
                }
            })(this));
            Piwik.DOM.addEventListener(window, "blur", (function(z) {
                return function() {
                    z.timeWindowBlur = t.getCurrentTime();
                    e("window blur")
                }
            })(this));
            Piwik.DOM.addEventListener(y, "submit", (function(z) {
                return function() {
                    e("form submit");
                    z.trackFormSubmit()
                }
            })(this))
        }
        r.prototype.reset = function() {
            this.detectionDate = t.getCurrentTime();
            this.formViewId = t.generateUniqueId();
            this.fieldsWithUpdates = [];
            this.firstFieldEngagementDate = null;
            this.lastFieldEngagementDate = null;
            this.timeOffWindowSinceEngagement = 0;
            this.timeOffWindowBeforeEngagement = 0;
            if (this.fields && this.fields.length) {
                for (var y = 0; y < this.fields.length; y++) {
                    this.fields[y].resetOnFormSubmit()
                }
            }
        };
        r.prototype.trackFormSubmit = function() {
            this.setEngagedWithForm();
            var y = this.lastFieldEngagementDate - this.firstFieldEngagementDate - this.timeOffWindowSinceEngagement;
            if (y < 0) {
                y = 0
            }
            var z = {
                fa_su: 1,
                fa_tts: y,
            };
            this.sendUpdate(this.fields, z, true);
            this.reset()
        };
        r.prototype.trackFormConversion = function() {
            this.sendUpdate([], {
                fa_co: 1
            })
        };
        r.prototype.shouldBeTracked = function() {
            return !!this.fields && !!this.fields.length
        };
        r.prototype.trackInitialFormView = function() {
            if (!this.initialFormViewLoggedWithTrackers || !this.initialFormViewLoggedWithTrackers.length) {
                this.initialFormViewLoggedWithTrackers = g.getPiwikTrackers();
                this.sendUpdate([], {
                    fa_fv: "1"
                })
            }
        };
        r.prototype.setEngagedWithForm = function(y) {
            this.lastFieldEngagementDate = t.getCurrentTime();
            if (!this.firstFieldEngagementDate) {
                this.firstFieldEngagementDate = this.lastFieldEngagementDate;
            }
        };
        r.prototype.trackFieldUpdate = function(y) {
            if (t.indexOfArray(this.fieldsWithUpdates, y) === -1) {
                this.fieldsWithUpdates.push(y)
            }
            this.scheduleSendUpdate()
        };
        r.prototype.scheduleSendUpdate = function() {
            if (this.trackingTimeout) {
                clearTimeout(this.trackingTimeout);
                this.trackingTimeout = null
            }
            var y = this;
            this.trackingTimeout = setTimeout(function() {
                var z = y.fieldsWithUpdates;
                y.fieldsWithUpdates = [];
                y.sendUpdate(z)
            }, s)
        };
        r.prototype.sendUpdate = function(A, D, C) {
            if (!this.shouldBeTracked()) {
                return
            }
            if (this.trackingTimeout) {
                clearTimeout(this.trackingTimeout);
                this.trackingTimeout = null
            }
            if (!A) {
                A = []
            }
            var y = [];
            for (var z = 0; z < A.length; z++) {
                y.push(A[z].getTrackingParams())
            }
            var B = {
                fa_vid: this.formViewId,
                fa_id: this.formId,
                fa_name: this.formName
            };
            if (this.entryFieldName) {
                B.fa_ef = this.entryFieldName
            }
            if (this.exitFieldName) {
                B.fa_lf = this.exitFieldName
            }
            if (y.length) {
                B.fa_fields = Piwik.JSON.stringify(y)
            }
            if (this.firstFieldEngagementDate) {
                if (!this.formStartTracked) {
                    B.fa_st = "1";
                    this.formStartTracked = true
                }
                if (!this.hesitationTimeTracked) {
                    B.fa_ht = this.firstFieldEngagementDate - this.detectionDate - this.timeOffWindowBeforeEngagement;
                    this.hesitationTimeTracked = true
                }
                if (this.lastFieldEngagementDate && this.timeLastTrackingRequest) {
                    B.fa_ts = this.lastFieldEngagementDate - this.timeLastTrackingRequest;
                    if (B.fa_ts < 0) {
                        B.fa_ts = 0
                    }
                } else {
                    if (this.lastFieldEngagementDate && !this.timeLastTrackingRequest) {
                        B.fa_ts = this.lastFieldEngagementDate - this.firstFieldEngagementDate - this.timeOffWindowSinceEngagement;
                        if (B.fa_ts < 0) {
                            B.fa_ts = 0
                        }
                    }
                }
                this.timeLastTrackingRequest = t.getCurrentTime()
            }
            if (D) {
                for (var z in D) {
                    if (Object.prototype.hasOwnProperty.call(D, z)) {
                        B[z] = D[z]
                    }
                }
            }
            if ("undefined" === typeof C) {
                C = false
            }
            g.trackParams(B, C)
        };
        r.prototype.scanForFields = function() {
            var B, A = 0,
                E, D, z;
            D = c.findAllFieldElements(this.node);
            for (B = 0; B < D.length; B++) {
                if (!D[B]) {
                    continue
                }
                z = D[B];
                if (c.isIgnored(z) || t.indexOfArray(this.fieldNodes, z) > -1) {
                    continue
                }
                var y = c.getTagName(z);
                var C = c.getAttribute(z, "type");
                if (t.indexOfArray(n, C) !== -1) {
                    continue
                } else {
                    if ("button" === y) {
                        continue
                    }
                }
                if (y === "input" && !C) {
                    C = "text"
                }
                var F = c.getAttribute(z, "data-piwik-name");
                if (!F) {
                    F = c.getAttribute(z, "name");
                    if (!F) {
                        F = c.getAttribute(z, "id");
                        if (!F) {
                            continue
                        }
                    }
                }
                this.fieldNodes.push(z);
                var G = false;
                for (A = 0; A < this.fields.length; A++) {
                    if (this.fields[A] && this.fields[A].fieldName === F) {
                        G = true;
                        this.fields[A].addNode(z);
                        break
                    }
                }
                if (!G) {
                    E = new u(this, D[B], y, C, F);
                    this.addFormField(E)
                }
            }
        };
        r.prototype.addFormField = function(y) {
            this.fields.push(y)
        };

        function u(C, B, A, z, D) {
            this.discoveredDate = t.getCurrentTime();
            this.tracker = C;
            this.timespent = 0;
            this.hesitationtime = 0;
            this.nodes = [];
            this.tagName = A;
            this.fieldName = D;
            this.fieldType = z;
            this.startFocus = null;
            this.timeLastChange = null;
            this.numChanges = 0;
            this.numFocus = 0;
            this.numDeletes = 0;
            this.numCursor = 0;
            this.canCountChange = true;
            this.isFocusedCausedAuto = c.hasNodeAttribute(B, "autofocus");
            if (this.tagName === "select") {
                this.category = w
            } else {
                if (this.tagName === "textarea") {
                    this.category = h
                } else {
                    if (t.indexOfArray(b, this.fieldType) !== -1) {
                        this.category = j
                    } else {
                        if (t.indexOfArray(a, this.fieldType) !== -1) {
                            this.category = w
                        } else {
                            this.category = h
                        }
                    }
                }
            }
            this.addNode(B);
            var y = (B === document.activeElement);
            if (y) {
                this.onFocus()
            }
        }
        u.prototype.addNode = function(y) {
            this.nodes.push(y);
            Piwik.DOM.addEventListener(y, "focus", (function(z) {
                return function(A) {
                    if (z.isAutoFocus()) {
                        e("field autofocus " + z.fieldName)
                    } else {
                        e("field focus " + z.fieldName)
                    }
                    z.onFocus()
                }
            })(this));
            Piwik.DOM.addEventListener(y, "blur", (function(z) {
                return function() {
                    e("field blur " + z.fieldName);
                    z.onBlur()
                }
            })(this));
            if (this.category === h) {
                Piwik.DOM.addEventListener(y, "keyup", (function(z) {
                    return function(C) {
                        var B = C.which || C.keyCode;
                        var A = [9, 16, 17, 18, 20, 27, 91];
                        if ((B && t.indexOfArray(A, B) !== -1) || C.isCtrlKey) {
                            return
                        }
                        if (B >= 37 && B <= 40) {
                            if (!z.isBlank()) {
                                z.numCursor++;
                                z.tracker.trackFieldUpdate(z)
                            }
                            return
                        }
                        if (B == 8 || B == 46) {
                            if (!z.isBlank()) {
                                z.numDeletes++;
                                z.tracker.trackFieldUpdate(z)
                            }
                            return
                        }
                        e("field text keyup " + z.fieldName);
                        z.onChange()
                    }
                })(this));
                Piwik.DOM.addEventListener(y, "paste", (function(z) {
                    return function() {
                        e("field text paste " + z.fieldName);
                        z.onChange()
                    }
                })(this))
            } else {
                Piwik.DOM.addEventListener(y, "change", (function(z) {
                    return function() {
                        e("field change " + z.fieldName);
                        z.onChange()
                    }
                })(this))
            }
        };
        u.prototype.resetOnFormSubmit = function() {
            this.hesitationtime = 0;
            this.timespent = 0;
            this.numFocus = 0;
            this.numDeletes = 0;
            this.numCursor = 0;
            this.numChanges = 0;
            this.startFocus = null;
            this.timeLastChange = null;
            this.canCountChange = true;
            this.hasChangedValueSinceFocus = false;
            this.isFocusedCausedAuto = false
        };
        u.prototype.isAutoFocus = function() {
            if (!this.isFocusedCausedAuto) {
                return false
            }
            if (this.tracker.entryFieldName && this.tracker.entryFieldName !== this.fieldName) {
                this.isFocusedCausedAuto = false
            }
            if (this.tracker.exitFieldName && this.tracker.exitFieldName !== this.fieldName) {
                this.isFocusedCausedAuto = false
            }
            return this.isFocusedCausedAuto
        };
        u.prototype.getTrackingParams = function() {
            return {
                fa_fts: this.getTimeSpent(),
                fa_fht: this.getHesitationTime(),
                fa_fb: this.isBlank(),
                fa_fn: this.fieldName,
                fa_fch: this.numChanges,
                fa_ff: this.numFocus,
                fa_fd: this.numDeletes,
                fa_fcu: this.numCursor,
                fa_ft: this.fieldType || this.tagName,
                fa_fs: this.getFieldSize()
            }
        };
        u.prototype.isBlank = function() {
            if (this.category === j) {
                for (var y = 0; y < this.nodes.length; y++) {
                    if (this.nodes[y] && this.nodes[y].checked) {
                        return true
                    }
                }
                return false
            }
            if (!this.nodes[0]) {
                return false
            }
            var z = this.nodes[0];
            if ("undefined" === typeof z.value) {
                return true
            }
            var A = z.value;
            if (null === A || false === A || "" === A) {
                return true
            }
            return String(A).length === 0
        };
        u.prototype.getFieldSize = function() {
            if (this.category === h) {
                if (this.nodes[0] && this.nodes[0].value) {
                    return String(this.nodes[0].value).length
                } else {
                    return 0
                }
            } else {
                return -1
            }
        };
        u.prototype.getTimeSpent = function() {
            if (this.numChanges && !this.timeSpent) {
                this.timeSpent = 1
            }
            if (!this.startFocus || this.isAutoFocus()) {
                return this.timespent
            }
            if (this.timeLastChange) {
                var y = this.timeLastChange - this.startFocus;
                if (y < 0) {
                    y = 0
                }
                return this.timespent + y
            }
            return this.timespent + t.getCurrentTime() - this.startFocus
        };
        u.prototype.getHesitationTime = function() {
            if (this.numChanges || !this.startFocus || this.isAutoFocus()) {
                return this.hesitationtime
            }
            var y = t.getCurrentTime();
            return this.hesitationtime + (y - this.startFocus)
        };
        u.prototype.onFocus = function() {
            this.startFocus = t.getCurrentTime();
            var y = this.fieldName !== this.tracker.lastFocusedFieldName;
            if (y && this.tracker.lastFocusedFieldName) {
                this.isFocusedCausedAuto = false;
            }
            this.timeLastChange = null;
            this.hasChangedValueSinceFocus = false;
            this.tracker.lastFocusedFieldName = this.fieldName;
            if (y) {
                this.canCountChange = true
            }
            if (y && !this.isAutoFocus()) {
                this.numFocus++;
                this.tracker.setEngagedWithForm();
                this.tracker.trackFieldUpdate(this);
                this.tracker.exitFieldName = this.fieldName;
                this.tracker.scheduleSendUpdate()
            }
        };
        u.prototype.onBlur = function() {
            if (!this.startFocus) {
                return
            }
            if (this.hasChangedValueSinceFocus) {
                if (this.timeLastChange && this.startFocus) {
                    this.timespent += (this.timeLastChange - this.startFocus)
                }
                this.timeLastChange = null;
                this.startFocus = null;
                return
            }
            if (!this.isAutoFocus()) {
                var y = t.getCurrentTime();
                this.timespent += y - this.startFocus;
                if (!this.numChanges) {
                    this.hesitationtime += y - this.startFocus
                }
                this.tracker.setEngagedWithForm();
                this.tracker.trackFieldUpdate(this)
            }
            this.startFocus = null
        };
        u.prototype.onChange = function() {
            this.timeLastChange = t.getCurrentTime();
            if (this.isAutoFocus()) {
                this.startFocus = this.timeLastChange
            } else {
                if (!this.startFocus) {
                    return
                }
            }
            this.isFocusedCausedAuto = false;
            this.hasChangedValueSinceFocus = true;
            if (!this.numChanges) {
                this.hesitationtime += this.timeLastChange - this.startFocus
            }
            if (this.canCountChange) {
                this.numChanges++;
                this.canCountChange = false
            }
            if (!this.tracker.entryFieldName) {
                this.tracker.entryFieldName = this.fieldName
            }
            this.tracker.setEngagedWithForm();
            this.tracker.trackFieldUpdate(this)
        };

        function v(A, y) {
            if (!p) {
                return
            }
            if (!document.querySelectorAll) {
                return
            }
            var z;
            if (A && A.formTrackerInstance) {
                z = A.formTrackerInstance;
                z.scanForFields()
            } else {
                if (!c.isIgnored(A)) {
                    z = new r(A);
                    z.scanForFields();
                    x.push(z);
                    A.formTrackerInstance = z
                }
            }
            if (y && z && z.shouldBeTracked()) {
                z.trackInitialFormView()
            }
            return z
        }

        function d(A) {
            if ("undefined" === typeof A) {
                A = document
            }
            var y = c.findAllFormElements(A);
            for (var z = 0; z < y.length; z++) {
                v(y[z], true)
            }
        }

        function i() {
            var y = g.getPiwikTrackers();
            if (!y || !t.isArray(y) || !y.length) {
                return
            }
            Piwik.DOM.onReady(function() {
                d(document)
            });
            Piwik.DOM.onLoad(function() {
                d(document)
            })
        }

        function l(y) {
            if ("undefined" !== typeof y.FormAnalytics) {
                return
            }
            y.FormAnalytics = {
                enabled: true,
                enable: function() {
                    this.enabled = true
                },
                disable: function() {
                    this.enabled = false
                },
                isEnabled: function() {
                    return p && this.enabled
                }
            }
        }

        function q() {
            if ("object" === typeof window && "object" === typeof window.Piwik && "object" === typeof window.Piwik.FormAnalytics) {
                return
            }
            if ("object" === typeof window && !window.Piwik) {
                return
            }
            Piwik.FormAnalytics = {
                element: c,
                utils: t,
                tracking: g,
                FormField: u,
                FormTracker: r,
                disableFormAnalytics: function() {
                    p = false
                },
                enableFormAnalytics: function() {
                    p = true
                },
                isFormAnalyticsEnabled: function() {
                    return p
                },
                setPiwikTrackers: function(y) {
                    if (y === null) {
                        o = null;
                        return
                    }
                    if (!t.isArray(y)) {
                        y = [y]
                    }
                    o = y
                },
                setTrackingTimer: function(y) {
                    if (y < 0) {
                        throw new Error("Delay needs to be at least zero")
                    }
                    s = parseInt(y, 10)
                },
                enableDebugMode: function() {
                    k = true
                },
                scanForForms: d,
                trackFormSubmit: function(z) {
                    var y = c.findFormTrackerInstance(z);
                    if (y) {
                        y.trackFormSubmit()
                    }
                },
                trackFormConversion: function(y, A) {
                    if ("string" === typeof y || "string" === typeof A) {
                        g.trackParams({
                            fa_vid: t.generateUniqueId(),
                            fa_id: A,
                            fa_name: y,
                            fa_co: 1
                        });
                        return
                    }
                    var z = c.findFormTrackerInstance(y);
                    if (z) {
                        z.trackFormConversion()
                    }
                },
                trackForm: function(y) {
                    return v(y, true)
                }
            };
            Piwik.addPlugin("FormAnalytics", {
                log: function(E) {
                    if (!p || !E || !E.tracker) {
                        return ""
                    }
                    var A = E.tracker;
                    if (A.FormAnalytics && !A.FormAnalytics.isEnabled()) {
                        return ""
                    }
                    var y = c.findAllFormElements(document);
                    for (var z = 0; z < y.length; z++) {
                        var C = v(y[z], false);
                        if (C && C.shouldBeTracked() && t.indexOfArray(C.initialFormViewLoggedWithTrackers, A) === -1) {
                            C.initialFormViewLoggedWithTrackers.push(A);
                            var D = {
                                fa_vid: C.formViewId,
                                fa_id: C.formId,
                                fa_name: C.formName,
                                fa_fv: "1"
                            };
                            var B = t.paramsToQueryString(D);
                            e("sending request with pageview" + B);
                            return "&fa_pv=1&" + B
                        }
                    }
                    return ""
                },
                unload: function() {
                    var z;
                    for (var y = 0; y < x.length; y++) {
                        z = x[y];
                        if (z && z.trackingTimeout) {
                            e("before unload");
                            clearTimeout(z.trackingTimeout);
                            z.sendUpdate(z.fieldsWithUpdates, {}, true)
                        }
                    }
                }
            });
            if (window.Piwik.initialized) {
                Piwik.on("TrackerSetup", l);
                Piwik.retryMissedPluginCalls();
                f();
                i()
            } else {
                Piwik.on("TrackerSetup", l);
                Piwik.on("PiwikInitialized", function() {
                    f();
                    i()
                })
            }
        }
        if ("object" === typeof window.Piwik) {
            q()
        } else {
            if ("object" !== typeof window.piwikPluginAsyncInit) {
                window.piwikPluginAsyncInit = []
            }
            window.piwikPluginAsyncInit.push(q)
        }
    })();
    /* END GENERATED: tracker.min.js */


    /* GENERATED: tracker.min.js */
    /*!!
     * Copyright (C) InnoCraft Ltd - All rights reserved.
     *
     * All information contained herein is, and remains the property of InnoCraft Ltd.
     *
     * @link https://www.innocraft.com/
     * @license For license details see https://www.innocraft.com/license
     */
    (function() {
        var a = "original";
        var l = false;
        var g = "PiwikAbTesting";

        function k() {
            if (l && "undefined" !== typeof console && console && console.debug) {
                console.debug.apply(console, arguments)
            }
        }

        function b(m) {
            k(m);
            if (typeof i !== "undefined" && i && i.THROW_ERRORS) {
                throw new Error(m)
            }
        }
        var h = {
            getRandomNumber: function(n, m) {
                return parseInt(Math.round(Math.random() * (m - n) + n, 10))
            },
            hasLocalStorage: function() {
                if (typeof localStorage === "undefined") {
                    return false
                }
                var n = new Date();
                var m;
                try {
                    localStorage.setItem(n, n);
                    m = localStorage.getItem(n) == n;
                    localStorage.removeItem(n);
                    return m && localStorage && typeof JSON === "object" && typeof JSON.parse === "function"
                } catch (o) {
                    return false
                }
            },
            decodeSafe: function(n) {
                try {
                    return window.decodeURIComponent(n)
                } catch (m) {
                    return window.unescape(n)
                }
            },
            getQueryParameter: function(m, q) {
                m = ("" + m).toLowerCase();
                q = ("" + q).toLowerCase();
                var p = new RegExp("[?&]" + q + "(=([^&#]*)|&|#|$)", "i");
                var o = p.exec(m);
                if (!o) {
                    return null
                }
                if (!o[2]) {
                    return ""
                }
                var n = o[2].replace(/\+/g, " ");
                return decodeURIComponent(n)
            },
            removeQueryAndHashFromUrl: function(n) {
                var m = n.indexOf("#");
                if (m !== -1) {
                    n = n.substr(0, m)
                }
                var o = n.indexOf("?");
                if (o !== -1) {
                    n = n.substr(0, o)
                }
                return n
            },
            removeProtocol: function(n) {
                var m = ("" + n).indexOf("://");
                if (m !== -1 && m < 9) {
                    return n.substr(m)
                }
                return n
            },
            removeWwwSubdomain: function(m) {
                return ("" + m).replace("://www.", "://")
            },
            getVariationTest: function(m) {
                if (m && m.search) {
                    var n = h.getQueryParameter(m.search, "pk_ab_test");
                    if (n) {
                        k("requested variation test " + n);
                        return n
                    }
                }
                return null
            }
        };
        var c = {
            local: function() {
                var n = localStorage.getItem(g) || "{}";
                var m = JSON.parse(n) || {};
                this.set = function(q, o, p) {
                    o = q + ":" + o;
                    m[o] = p;
                    localStorage.setItem(g, JSON.stringify(m))
                };
                this.get = function(p, o) {
                    o = p + ":" + o;
                    if (m && o in m) {
                        return m[o]
                    }
                };
                this.clearAll = function() {
                    m = {};
                    localStorage.setItem(g, JSON.stringify({}))
                }
            },
            cookies: function() {
                this.set = function(q, o, p) {
                    o = g + ":" + q + ":" + o;
                    var r = 365;
                    var n = new Date();
                    n.setTime(n.getTime() + (r * 24 * 60 * 60 * 1000));
                    var m = "; expires=" + n.toGMTString();
                    document.cookie = o + "=" + encodeURIComponent(p) + "; expires=" + m + "; path=/"
                };
                this.get = function(o, n) {
                    n = g + ":" + o + ":" + n;
                    var p = n + "=";
                    var r = document.cookie.split(";");
                    for (var m = 0; m < r.length; m++) {
                        var q = r[m];
                        q = ("" + q).replace(/^\s+/, "");
                        if (q.indexOf(p) == 0) {
                            return decodeURIComponent(q.substring(p.length, q.length))
                        }
                    }
                };
                this.clearAll = function() {}
            }
        };
        var d = {
            location: window.location,
            matchesTarget: function(m) {
                if (!m || !m.type || !m.attribute) {
                    return true
                }
                var n = d._getValueForAttribute(m);
                return d._matchesAttribute(m, n)
            },
            matchesTargets: function(q, o) {
                if (o && o.length) {
                    var m;
                    for (var n = 0; n < o.length; n++) {
                        m = o[n];
                        if (this.matchesTarget(m)) {
                            return false
                        }
                    }
                }
                if (q && q.length) {
                    var p;
                    for (var n = 0; n < q.length; n++) {
                        p = q[n];
                        if (this.matchesTarget(p)) {
                            return true
                        }
                    }
                    return false
                }
                return true
            },
            matchesDate: function(o, n, p) {
                var q = o.getTime() + (o.getTimezoneOffset() * 60000);
                try {
                    var s = new Date(n)
                } catch (r) {
                    if (n) {
                        b("Invalid startDateTime given")
                    }
                }
                try {
                    var m = new Date(p)
                } catch (r) {
                    if (p) {
                        b("Invalid startDateTime given")
                    }
                }
                if (n && isNaN && isNaN(s.getTime())) {
                    b("Invalid startDateTime given")
                }
                if (p && isNaN && isNaN(m.getTime())) {
                    b("Invalid endDateTime given")
                }
                if (n && q < (s.getTime() + (s.getTimezoneOffset() * 60000))) {
                    return false
                }
                if (p && q > (m.getTime() + (m.getTimezoneOffset() * 60000))) {
                    return false
                }
                return true
            },
            _getValueForAttribute: function(n) {
                var m = ("" + n.attribute).toLowerCase();
                switch (m) {
                    case i.TARGET_ATTRIBUTE_URL:
                        return h.decodeSafe(this.location.href);
                    case i.TARGET_ATTRIBUTE_PATH:
                        return h.decodeSafe(this.location.pathname);
                    case i.TARGET_ATTRIBUTE_URLPARAM:
                        return h.getQueryParameter(this.location.search, n.value)
                }
            },
            _matchesAttribute: function(o, m) {
                var n = ("" + o.attribute).toLowerCase();
                switch (n) {
                    case i.TARGET_ATTRIBUTE_URL:
                    case i.TARGET_ATTRIBUTE_PATH:
                        return this._matchesTargetValue(m, o.type, o.inverted, o.value);
                    case i.TARGET_ATTRIBUTE_URLPARAM:
                        return this._matchesTargetValue(m, o.type, o.inverted, o.value2);
                    default:
                        b("Invalid target attribute")
                }
                return false
            },
            _matchesTargetValue: function(o, n, q, m) {
                var p = false;
                var q = !!q && q !== "0";
                if ("string" === typeof o) {
                    o = o.toLowerCase()
                }
                if ("string" === typeof m && n !== "regexp") {
                    m = m.toLowerCase()
                }
                switch (n) {
                    case i.TARGET_TYPE_ANY:
                        p = true;
                        break;
                    case i.TARGET_TYPE_EXISTS:
                        if (typeof o !== "undefined" && o !== null) {
                            p = true
                        }
                        break;
                    case i.TARGET_TYPE_EQUALS_SIMPLE:
                        if (o && o === String(m)) {
                            p = true
                        }
                        o = h.removeQueryAndHashFromUrl(o);
                        o = h.removeProtocol(o);
                        m = h.removeProtocol(m);
                        o = h.removeWwwSubdomain(o);
                        m = h.removeWwwSubdomain(m);
                        if (o && (o === String(m) || o + "/" === String(m) || o === "/" + m || o === m + "/" || o === "/" + m + "/")) {
                            p = true
                        }
                        break;
                    case i.TARGET_TYPE_EQUALS_EXACTLY:
                        if (o && o === String(m)) {
                            p = true
                        }
                        break;
                    case i.TARGET_TYPE_CONTAINS:
                        if (o && o.indexOf(String(m)) !== -1) {
                            p = true
                        }
                        break;
                    case i.TARGET_TYPE_STARTS_WITH:
                        if (o && o.indexOf(String(m)) === 0) {
                            p = true
                        }
                        break;
                    case i.TARGET_TYPE_REGEXP:
                        if (new RegExp(m).test(o)) {
                            p = true
                        }
                        break;
                    default:
                        b("Invalid target type given")
                }
                if (q) {
                    return !p
                }
                return p
            }
        };
        var i = function(n) {
            this.options = n ? n : {};
            k("creating experiment with options", n);
            if (!this.options.name) {
                b('Missing experiment name in options. Use eg: new PiwikAbTesting.Experiment({name: "MyName"})')
            }
            if (!this.options.variations) {
                b('Missing "variations" option. Use eg: new PiwikAbTesting.Experiment({variations: [{...}, {...}]})')
            }
            if (typeof this.options.variations !== "object" || !this.options.variations.length) {
                b('"variations" has to be an array')
            }
            var o;
            for (o = 0; o < this.options.variations.length; o++) {
                if (typeof this.options.variations[o] !== "object") {
                    b("Each variation has to be an object")
                }
                if (!this.options.variations[o].name) {
                    b("Missing variation name")
                }
                if (typeof this.options.variations[o].activate !== "function") {
                    b('A variation does not implement the "activate" method' + JSON.stringify(n))
                }
            }
            if (this.options.trigger && typeof this.options.trigger !== "function") {
                b('The "trigger" option is not a function')
            }
            if (this.options.piwikTracker) {
                if (typeof this.options.piwikTracker !== "object") {
                    b("The Piwik tracker must be an instance of Piwik")
                }
                if (!this.options.piwikTracker.trackEvent) {
                    b("The Piwik instance does not implement the trackEvent method. Maybe a wrong Piwik instance is based as option?")
                }
                if (!this.options.piwikTracker.trackGoal) {
                    b("The Piwik instance does not implement the trackGoal method. Maybe a wrong Piwik instance is based as option?")
                }
            }
            if (this.options.percentage && this.options.percentage < 0 || this.options.percentage > 100) {
                b("percentage has to be between 0 and 100")
            }
            this.name = null;
            this.variations = null;
            this.includedTargets = null;
            this.excludedTargets = null;
            this.startDateTime = null;
            this.endDateTime = null;
            this.percentage = 100;
            this.piwikTracker = null;
            this.trigger = function() {
                return true
            };
            this._cacheForcedVariationName = null;
            if (h.hasLocalStorage()) {
                k("using local storage");
                this.storage = new c.local()
            } else {
                k("using cookies storage");
                this.storage = new c.cookies()
            }
            var m;
            for (m in this.options) {
                if (Object.prototype.hasOwnProperty.call(this.options, m)) {
                    this[m] = this.options[m]
                }
            }
            this._track = function(s, r) {
                if (this.piwikTracker) {
                    this.piwikTracker[s].apply(this.piwikTracker, r)
                } else {
                    if (typeof _paq === "undefined") {
                        _paq = []
                    }
                    r.unshift(s);
                    _paq.push(r)
                }
                k("sent tracking request", s, r)
            };
            this.trackUsedVariation = function(r) {
                this._track("trackEvent", ["abtesting", this.name, r])
            };
            this.trackGoal = function(r) {
                if (r) {
                    this._track("trackGoal", [r])
                }
            };
            this._getVariationByName = function(s) {
                for (var r = 0; r < this.variations.length; r++) {
                    if (this.variations[r].name === s) {
                        return this.variations[r]
                    }
                }
            };
            this._makeEvent = function(s) {
                var r = this;
                var t = function(u) {
                    u()
                };
                if ("undefined" !== typeof Piwik && "undefined" !== typeof Piwik.DOM && Piwik.DOM.onReady) {
                    t = Piwik.DOM.onReady
                }
                return {
                    type: "activate",
                    experiment: this,
                    onReady: t,
                    redirect: function(v) {
                        var u = "pk_abe=" + encodeURIComponent(r.name) + "&pk_abv=" + encodeURIComponent(s.name);
                        if (v && (v.indexOf("?") !== -1)) {
                            v += "&" + u
                        } else {
                            v += "?" + u
                        }
                        var x = Piwik.getAsyncTrackers();
                        for (var w = 0; w < x.length; w++) {
                            x[w].trackPageView = function() {};
                            x[w].trackEvent = function() {};
                            x[w].trackGoal = function() {}
                        }
                        window.location.replace(v)
                    }
                }
            };
            this.forceVariation = function(u) {
                this._cacheForcedVariationName = u;
                k(this.name, "forcing variation", u);
                var s = this._getVariationByName(u);
                var r = this.storage.set("variation", this.name, u);
                if (s && s.activate) {
                    var t = this._makeEvent(s);
                    s.activate.apply(s, [t])
                }
                this.trackUsedVariation(u);
                return r
            };
            this.getActivatedVariationName = function() {
                var r;
                if (this._cacheForcedVariationName) {
                    r = this._cacheForcedVariationName
                } else {
                    r = this.storage.get("variation", this.name)
                }
                if (this._getVariationByName(r)) {
                    return r
                }
            };
            this._doVariationsIncludeOriginal = function() {
                for (var s = 0; s < this.variations.length; s++) {
                    var r = this.variations[s];
                    if (r && r.name && r.name === a) {
                        return true
                    }
                }
                return false
            };
            this._getVariationDefaultPercentage = function() {
                var s = 100;
                var v = this.variations.length;
                for (var u = 0; u < this.variations.length; u++) {
                    var t = this.variations[u];
                    if (t && (t.percentage || t.percentage === 0 || t.percentage === "0")) {
                        s = s - parseInt(t.percentage, 10);
                        v--
                    }
                }
                var r = Math.round(s / v);
                if (r > 100) {
                    r = 100
                }
                if (r < 0) {
                    r = 0
                }
                return r
            };
            this.getRandomVariationName = function() {
                var x = this._getVariationDefaultPercentage();
                var u = [];
                for (var v = 0; v < this.variations.length; v++) {
                    var r = x;
                    if (this.variations[v].percentage || this.variations[v].percentage === 0 || this.variations[v].percentage === "0") {
                        r = this.variations[v].percentage
                    }
                    for (var t = 0; t < r; t++) {
                        u.push(v)
                    }
                }
                var s = h.getRandomNumber(0, u.length - 1);
                var w = u[s];
                return this.variations[w].name
            };
            this._isInTestGroup = function() {
                var r = this.storage.get("isInTestGroup", this.name);
                if (typeof r !== "undefined" && r !== null) {
                    return r === "1" ? true : false
                }
                r = h.getRandomNumber(1, 100) <= this.percentage;
                this.storage.set("isInTestGroup", this.name, r ? "1" : "0");
                return r
            };
            this.selectRandomVariation = function() {
                k(this.name, "select random variation");
                var r = this.getRandomVariationName();
                this.forceVariation(r);
                return r
            };
            this.shouldTrigger = function() {
                if (!d.matchesDate(new Date(), this.startDateTime, this.endDateTime)) {
                    k(this.name, "wont run, scheduled date does not match");
                    return false
                }
                if (!d.matchesTargets(this.includedTargets, this.excludedTargets)) {
                    k(this.name, "wont run, targets do not match");
                    return false
                }
                if (!this.trigger()) {
                    k(this.name, "wont run, disabled by trigger method");
                    return false
                }
                if (!this._isInTestGroup()) {
                    k(this.name, "wont run, not in test group");
                    return false
                }
                return true
            };
            if (!this._doVariationsIncludeOriginal()) {
                this.variations.push({
                    name: a,
                    activate: function() {}
                })
            }
            var p = h.getVariationTest(window.location || null);
            if (p && this._getVariationByName(p)) {
                k("going to test variation and disable tracking " + p);
                this.trackUsedVariation = function() {};
                this.forceVariation(p);
                return
            }
            if (!this.shouldTrigger()) {
                k(this.name, "experiment should not trigger");
                return
            }
            k(this.name, "should trigger");
            var q = this.getActivatedVariationName();
            if (q) {
                this.forceVariation(q)
            } else {
                k(this.name, "no existing variation found");
                this.selectRandomVariation()
            }
        };
        i.NAME_ORIGINAL_VARIATION = a;
        i.TARGET_ATTRIBUTE_URL = "url";
        i.TARGET_ATTRIBUTE_PATH = "path";
        i.TARGET_ATTRIBUTE_URLPARAM = "urlparam";
        i.TARGET_TYPE_ANY = "any";
        i.TARGET_TYPE_EXISTS = "exists";
        i.TARGET_TYPE_EQUALS_SIMPLE = "equals_simple";
        i.TARGET_TYPE_EQUALS_EXACTLY = "equals_exactly";
        i.TARGET_TYPE_CONTAINS = "contains";
        i.TARGET_TYPE_STARTS_WITH = "starts_with";
        i.TARGET_TYPE_REGEXP = "regexp";
        i.THROW_ERRORS = true;

        function e() {
            if (typeof window === "object" && "function" === typeof window.piwikAbTestingAsyncInit) {
                window.piwikAbTestingAsyncInit()
            }
        }

        function f() {
            if (window.location && h.getQueryParameter(window.location.search, "pk_abe")) {
                var n = h.getQueryParameter(window.location.search, "pk_abe");
                var m = h.getQueryParameter(window.location.search, "pk_abv");
                Piwik.AbTesting.enter({
                    experiment: n,
                    variation: m
                });
                k("entered experiment from url parameters")
            }
        }

        function j() {
            if ("object" === typeof window && "object" === typeof window.Piwik && "object" === typeof window.Piwik.AbTesting) {
                k("wont initialize, AbTesting already loaded");
                return
            }
            if ("object" === typeof window && "object" !== typeof window.Piwik) {
                k("wont initialize, Piwik is not yet loaded");
                return
            }
            Piwik.AbTesting = {
                utils: h,
                target: d,
                storage: c,
                Experiment: i,
                enter: function(m) {
                    if (m && m.experiment) {
                        _paq = _paq || [];
                        _paq.push(["trackEvent", "abtesting", m.experiment, m.variation || a]);
                        k("entering user into an experiment", m)
                    } else {
                        k("not entering user into an experiment, missing parameter experiment")
                    }
                },
                create: function(m) {
                    return new i(m)
                },
                enableDebugMode: function() {
                    l = true
                }
            };
            if (window.Piwik.initialized) {
                Piwik.retryMissedPluginCalls();
                e();
                f()
            } else {
                Piwik.on("PiwikInitialized", function() {
                    e();
                    f()
                })
            }
        }
        if (typeof piwikExposeAbTestingTarget !== "undefined" && piwikExposeAbTestingTarget) {
            window.piwikAbTestingTarget = d
        }
        if ("object" === typeof window.Piwik) {
            k("piwik was already loaded, initializing abTesting now");
            j()
        } else {
            if ("object" !== typeof window.piwikPluginAsyncInit) {
                window.piwikPluginAsyncInit = []
            }
            window.piwikPluginAsyncInit.push(j);
            k("piwik not loaded yet, waiting for it to be loaded")
        }
    })();
    /* END GENERATED: tracker.min.js */

}(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.piwikPluginAsyncInit.length; a++) {
            if (typeof window.piwikPluginAsyncInit[a] === "function") {
                window.piwikPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (!window.Piwik.getAsyncTrackers().length) {
        if (b()) {
            window.Piwik.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    if (console !== undefined && console && console.error) {
                        console.error("_paq.push() was used but Piwik tracker was not initialized before the piwik.js file was loaded. Make sure to configure the tracker via _paq.push before loading piwik.js. Alternatively, you can create a tracker via Piwik.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Piwik.trigger("PiwikInitialized", []);
    window.Piwik.initialized = true
}());
(function() {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = window.Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var c, e = window.Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function(i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    };
    /*!! @license-end */
};