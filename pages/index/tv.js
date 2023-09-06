(()=>{
    "use strict";
    var t = {
        151: (t,e)=>{
            function i(t, e) {
                if (void 0 === t)
                    throw new Error("".concat(null != e ? e : "Value", " is undefined"));
                return t
            }
            function r(t, e) {
                if (null === t)
                    throw new Error("".concat(null != e ? e : "Value", " is null"));
                return t
            }
            e.ensureNotNull = void 0,
            e.ensureNotNull = r
        }
    }
      , e = {};
    function i(r) {
        var n = e[r];
        if (void 0 !== n)
            return n.exports;
        var s = e[r] = {
            exports: {}
        };
        return t[r](s, s.exports, i),
        s.exports
    }
    (()=>{
        var t = i(151);
        function e(t=location.host) {
            return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(t) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(t) || t.match(/^[a-z]{2}\.tradingview\.com/) || t.match(/prod-[^.]+.tradingview.com/) ? "battle" : t.includes("tradingview.com") || t.includes("staging") ? "staging" : t.match(/webcharts/) ? "staging_local" : (t.match(/^localhost(:\d+)?$/),
            "local")
        }
        const r = {
            "color-gull-gray": "#9db2bd",
            "color-brand": "#2962FF",
            "color-brand-hover": "#1E53E5",
            "color-brand-active": "#1848CC"
        };
        const n = JSON.parse('{"crypto-mkt-screener":{"width":1000,"height":490,"defaultColumn":"overview","market":"crypto","screener_type":"crypto_mkt","displayCurrency":"USD","isTransparent":false},"events":{"width":510,"height":600,"isTransparent":false,"hideImportanceIndicator":false,"autosize":false},"forex-cross-rates":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD"],"frameElementId":null,"autosize":false},"forex-heat-map":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],"frameElementId":null,"autosize":false},"hotlists":{"width":400,"height":600,"isTransparent":false,"dateRange":"12M","showSymbolLogo":false},"market-overview":{"width":400,"height":650,"isTransparent":false,"dateRange":"12M","showSymbolLogo":true},"market-quotes":{"width":770,"height":450,"isTransparent":false,"showSymbolLogo":false},"mini-symbol-overview":{"width":350,"height":220,"symbol":"FX:EURUSD","dateRange":"12M","isTransparent":false,"autosize":false,"largeChartUrl":""},"symbol-overview":{"width":1000,"height":500,"symbols":[["Apple","AAPL|1D"],["Google","GOOGL|1D"],["Microsoft","MSFT|1D"]],"autosize":false,"chartOnly":false,"hideDateRanges":false,"hideMarketStatus":false,"hideSymbolLogo":false,"scalePosition":"right","scaleMode":"Normal","fontFamily":"-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif","fontSize":"10","noTimeScale":false,"chartType":"area","valuesTracking":"0","changeMode":"price-and-percent"},"screener":{"width":1100,"height":523,"defaultColumn":"overview","defaultScreen":"general","market":"forex","showToolbar":true,"isTransparent":false},"single-quote":{"width":350,"symbol":"FX:EURUSD","isTransparent":false},"symbol-profile":{"width":480,"height":650,"symbol":"NASDAQ:AAPL","isTransparent":false},"symbol-info":{"width":1000,"symbol":"NASDAQ:AAPL","isTransparent":false},"technical-analysis":{"interval":"1m","width":425,"isTransparent":false,"height":450,"symbol":"NASDAQ:AAPL","showIntervalTabs":true},"ticker-tape":{"isTransparent":false,"displayMode":"adaptive","showSymbolLogo":false},"tickers":{"isTransparent":false,"showSymbolLogo":false},"financials":{"width":480,"height":830,"autosize":false,"symbol":"NASDAQ:AAPL","isTransparent":false,"displayMode":"regular","largeChartUrl":""},"timeline":{"width":480,"height":830,"autosize":false,"isTransparent":false,"displayMode":"regular","feedMode":"all_symbols"},"stock-heatmap":{"width":500,"height":500,"autosize":true,"dataSource":"SPX500","exchanges":[],"grouping":"sector","blockSize":"market_cap_basic","blockColor":"change","hasTopBar":false,"isDataSetEnabled":false,"isZoomEnabled":true,"hasSymbolTooltip":true,"symbolUrl":""},"crypto-coins-heatmap":{"width":500,"height":500,"autosize":true,"dataSource":"Crypto","blockSize":"market_cap_calc","blockColor":"change","hasTopBar":false,"isDataSetEnabled":false,"isZoomEnabled":true,"hasSymbolTooltip":true,"symbolUrl":""}}');
        var s, o;
        !function(t) {
            let e;
            !function(t) {
                t.SetSymbol = "set-symbol",
                t.SetInterval = "set-interval"
            }(e = t.Names || (t.Names = {}))
        }(s || (s = {})),
        function(t) {
            let e;
            !function(t) {
                t.SymbolClick = "tv-widget-symbol-click",
                t.WidgetLoad = "tv-widget-load",
                t.WidgetReady = "tv-widget-ready",
                t.ResizeIframe = "tv-widget-resize-iframe",
                t.NoData = "tv-widget-no-data"
            }(e = t.Names || (t.Names = {}))
        }(o || (o = {}));
        const a = "__FAIL__"
          , l = "__NHTTP__"
          , c = new RegExp("^http(s)?:(//)?");
        function h(t=location.href) {
            const e = function(t) {
                try {
                    const e = new URL(t);
                    return c.test(e.protocol) ? null : l
                } catch (t) {
                    return a
                }
            }(t);
            return e || t.replace(c, "")
        }
        const d = ["locale", "symbol", "market"];
        const g = 767;
        var u, m, p;
        !function(t) {
            t.Adaptive = "adaptive",
            t.Regular = "regular",
            t.Compact = "compact"
        }(u || (u = {})),
        function(t) {
            t.AllSymbols = "all_symbols",
            t.Market = "market",
            t.Symbol = "symbol"
        }(m || (m = {})),
        function(t) {
            t.Cryptocurrencies = "crypto",
            t.Currencies = "forex",
            t.Stocks = "stock",
            t.Indices = "index",
            t.Futures = "futures",
            t.Bonds = "cfd"
        }(p || (p = {}));
        const f = g;
        new class extends class {
            constructor(t) {
                this._copyrightContainer = null;
                const e = null != t ? t : this._getScriptInfo();
                e && this._replaceScript(e)
            }
            hasCopyright() {
                return !!this._copyrightContainer
            }
            get widgetId() {
                throw new Error("Method must be overridden")
            }
            widgetUtmName() {
                return this.widgetId
            }
            get defaultSettings() {
                return n[this.widgetId]
            }
            get propertiesToWorkWith() {
                return []
            }
            get useSeparateWidgetHost() {
                return !1
            }
            get useParamsForConnectSocket() {
                return !1
            }
            filterRawSettings(t) {
                const e = {}
                  , i = Object.keys(t)
                  , r = new Set(this.propertiesToWorkWith);
                return i.forEach((i=>{
                    r.has(i) && (e[i] = t[i])
                }
                )),
                e
            }
            get shouldListenToIframeResize() {
                return !0
            }
            get propertiesToSkipInHash() {
                return ["customer", "locale"]
            }
            get propertiesToAddToGetParams() {
                return ["locale"]
            }
            _defaultWidth() {}
            _defaultHeight() {}
            _getScriptInfo() {
                const t = document.currentScript;
                if (!t || !t.src)
                    return console.error("Could not self-replace the script, widget embedding has been aborted"),
                    null;
                const i = function(t) {
                    const e = new URL(t,document.baseURI);
                    return {
                        host: e.host,
                        pathname: e.pathname,
                        href: e.href,
                        protocol: e.protocol
                    }
                }(t.src);
                return {
                    scriptURL: i,
                    scriptEnv: e(i.host),
                    scriptElement: t,
                    id: t.id,
                    rawSettings: this._scriptContentToJSON(t)
                }
            }
            _replaceScript(e) {
                const {scriptEnv: i, scriptURL: n, scriptElement: s, rawSettings: a, id: l} = e
                  , c = s.parentNode
                  , h = s.nonce || s.getAttribute("nonce")
                  , d = function(t) {
                    if (null === t)
                        return null;
                    const e = t.querySelector("#tradingview-copyright")
                      , i = t.querySelector("#tradingview-quotes")
                      , r = e || i;
                    return r && t.removeChild(r),
                    r
                }(c)
                  , g = c.querySelector(".tradingview-widget-copyright");
                this._copyrightContainer = d || g;
                const u = c.classList.contains("tradingview-widget-container");
                this.iframeContainer = c && u ? c : document.createElement("div"),
                a && (this.settings = this.filterRawSettings(a)),
                a && this._validateSettings() || (console.error("Invalid settings provided, fall back to defaults"),
                this.settings = this.filterRawSettings(this.defaultSettings));
                const m = "32px"
                  , {width: p, height: f} = this.settings
                  , w = void 0 === f ? void 0 : `${f}${Number.isInteger(f) ? "px" : ""}`
                  , y = void 0 === p ? void 0 : `${p}${Number.isInteger(p) ? "px" : ""}`;
                void 0 !== y && (this.iframeContainer.style.width = y),
                void 0 !== w && (this.iframeContainer.style.height = w);
                const v = function() {
                    const t = document.createElement("style");
                    return t.innerHTML = `\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: ${r["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: ${r["color-brand"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: ${r["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: ${r["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: ${r["color-brand-hover"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: ${r["color-brand-active"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: ${r["color-brand"]} !important;\n\t}\n\t`,
                    t
                }();
                h && v.setAttribute("nonce", h),
                this.iframeContainer.appendChild(v);
                const b = this.hasCopyright() && w ? `calc(${w} - 32px)` : w
                  , S = location.hostname
                  , C = g ? "widget_new" : "widget"
                  , T = this.widgetUtmName();
                this.settings.utm_source = S,
                this.settings.utm_medium = C,
                this.settings.utm_campaign = T,
                this._updateCopyrightHrefParams(S, C, T);
                const _ = this.settings.iframeTitle || `${this.widgetId.replace("-", " ")} TradingView widget`
                  , k = this.settings.iframeLang || "en";
                this.iframe = this._createIframe(b, y, n, i, l, _, k),
                h && this.iframe.setAttribute("nonce", h);
                const A = this.iframeContainer.querySelector(".tradingview-widget-container__widget");
                if (A ? ((0,
                t.ensureNotNull)(A.parentElement).replaceChild(this.iframe, A),
                null == s || s.remove()) : u ? (this.iframeContainer.appendChild(this.iframe),
                null == s || s.remove()) : (this.iframeContainer.appendChild(this.iframe),
                c.replaceChild(this.iframeContainer, (0,
                t.ensureNotNull)(s))),
                this.shouldListenToIframeResize && function(t, e, i) {
                    const r = e.contentWindow;
                    if (!r)
                        return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"),
                        ()=>{}
                        ;
                    function n(e) {
                        e.source && e.source === r && e.data && e.data.name && e.data.name === t && i(e.data.data)
                    }
                    window.addEventListener("message", n, !1)
                }(o.Names.ResizeIframe, this.iframe, (t=>{
                    t.width && (this.iframe.style.width = t.width + "px",
                    this.iframeContainer.style.width = t.width + "px"),
                    this.iframe.style.height = t.height + "px",
                    this.iframeContainer.style.height = t.height + (this.hasCopyright() ? 32 : 0) + "px"
                }
                )),
                d) {
                    const t = document.createElement("div");
                    t.style.height = m,
                    t.style.lineHeight = m,
                    void 0 !== y && (t.style.width = y),
                    t.style.textAlign = "center",
                    t.style.verticalAlign = "middle",
                    t.innerHTML = d.innerHTML,
                    this.iframeContainer.appendChild(t)
                }
            }
            _iframeSrcBase(t, e) {
                let i = `${this._iframeSrcHost(t, e)}/embed-widget/${this.widgetId}/`;
                return this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (i += `${this.settings.customer}/`),
                i
            }
            _iframeSrcHost(t, e) {
                const i = ["staging", "local"].includes(e) ? "https://www.xstaging-widget.tv" : "https://www.tradingview-widget.com";
                if (this.settings.useWidgetHost)
                    return i;
                return t.host.includes("beta.tradingview.com") || t.host.includes("betacdn.tradingview.com") ? this.useSeparateWidgetHost ? i : "https://betacdn.tradingview.com" : ["staging", "local"].includes(e) ? `${t.protocol}//${t.host}` : this.useSeparateWidgetHost ? i : "https://s.tradingview.com"
            }
            _validateSettings() {
                const t = (t,e)=>{
                    if (void 0 === t)
                        return e;
                    const i = String(t);
                    return /^\d+$/.test(i) ? parseInt(i) : /^(\d+%|auto)$/.test(i) ? i : null
                }
                  , e = t(this.settings.width, this._defaultWidth())
                  , i = t(this.settings.height, this._defaultHeight());
                return null !== e && null !== i && (this.settings.width = e,
                this.settings.height = i,
                !0)
            }
            _setSettingsQueryString(t) {
                const e = this.propertiesToAddToGetParams.filter((t=>-1 !== d.indexOf(t)))
                  , i = function(t, e) {
                    const i = Object.create(Object.getPrototypeOf(t));
                    for (const r of e)
                        Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                    return i
                }(this.settings, e);
                for (const [e,r] of Object.entries(i))
                    t.searchParams.append(e, r)
            }
            _setHashString(t, e) {
                const i = {};
                e && (i.frameElementId = e),
                Object.keys(this.settings).forEach((t=>{
                    -1 === this.propertiesToSkipInHash.indexOf(t) && (i[t] = this.settings[t])
                }
                )),
                this.useParamsForConnectSocket && (i["page-uri"] = h());
                Object.keys(i).length > 0 && (t.hash = encodeURIComponent(JSON.stringify(i)))
            }
            _scriptContentToJSON(t) {
                const e = t.innerHTML.trim();
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return console.error(`Widget settings parse error: ${t}`),
                    null
                }
            }
            _createIframe(t, e, i, r, n, s, o) {
                const a = document.createElement("iframe");
                n && (a.id = n),
                this.settings.enableScrolling || a.setAttribute("scrolling", "no"),
                a.setAttribute("allowtransparency", "true"),
                a.setAttribute("frameborder", "0"),
                a.style.userSelect = "none",
                a.style.boxSizing = "border-box",
                a.style.display = "block",
                void 0 !== t && (a.style.height = t),
                void 0 !== e && (a.style.width = e);
                const l = new URL(this._iframeSrcBase(i, r));
                return this._setSettingsQueryString(l),
                this._setHashString(l, n),
                a.setAttribute("src", l.toString()),
                a.title = s,
                a.lang = o,
                a
            }
            _updateCopyrightHrefParams(t, e, i) {
                if (this._copyrightContainer) {
                    const r = this._copyrightContainer.querySelector("a");
                    if (r) {
                        const n = r.getAttribute("href");
                        if (n)
                            try {
                                const s = new URL(n);
                                s.searchParams.set("utm_source", t),
                                s.searchParams.set("utm_medium", e),
                                s.searchParams.set("utm_campaign", i),
                                r.setAttribute("href", s.toString())
                            } catch (t) {
                                console.log(`Cannot update link UTM params, href="${n}"`)
                            }
                    }
                }
            }
        }
        {
            get widgetId() {
                return "ticker-tape"
            }
            get useParamsForConnectSocket() {
                return !0
            }
            filterRawSettings(t) {
                void 0 !== t.theme && (t.colorTheme = t.theme);
                const e = super.filterRawSettings(t);
                let i;
                e.width = "100%";
                try {
                    i = this.iframeContainer.getBoundingClientRect().width
                } finally {
                    e.height = function(t, e, i, r) {
                        let n = (s = t === u.Adaptive && r ? r <= f : t === u.Compact,
                        s ? 72 : 44);
                        var s;
                        return e || (n += 2),
                        i && (n += 32),
                        n
                    }(t.displayMode, t.isTransparent, this.hasCopyright(), i)
                }
                return e
            }
            get propertiesToWorkWith() {
                return ["symbols", "locale", "showSymbolLogo", "colorTheme", "isTransparent", "largeChartUrl", "displayMode", "customer", "useWidgetHost"]
            }
        }
    }
    )()
}
)();
