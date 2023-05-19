(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [455], {
        94470: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                l = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r)
                },
                u = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                a = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, s, c, f = arguments[0],
                    p = 1,
                    h = arguments.length,
                    d = !1;
                for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < h; ++p)
                    if (t = arguments[p], null != t)
                        for (n in t) r = a(f, n), f !== (i = a(t, n)) && (d && i && (l(i) || (s = o(i))) ? (s ? (s = !1, c = r && o(r) ? r : []) : c = r && l(r) ? r : {}, u(f, {
                            name: n,
                            newValue: e(d, c, i)
                        })) : void 0 !== i && u(f, {
                            name: n,
                            newValue: i
                        }));
                return f
            }
        },
        8679: function(e, t, n) {
            "use strict";
            var r = n(59864),
                i = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                l = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                u = {};

            function a(e) {
                return r.isMemo(e) ? l : u[e.$$typeof] || i
            }
            u[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, u[r.Memo] = l;
            var s = Object.defineProperty,
                c = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                h = Object.getPrototypeOf,
                d = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (d) {
                        var i = h(n);
                        i && i !== d && e(t, i, r)
                    }
                    var l = c(n);
                    f && (l = l.concat(f(n)));
                    for (var u = a(t), g = a(n), m = 0; m < l.length; ++m) {
                        var y = l[m];
                        if (!o[y] && !(r && r[y]) && !(g && g[y]) && !(u && u[y])) {
                            var x = p(n, y);
                            try {
                                s(t, y, x)
                            } catch (v) {}
                        }
                    }
                }
                return t
            }
        },
        48738: function(e) {
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        9008: function(e, t, n) {
            e.exports = n(83121)
        },
        19231: function(e, t, n) {
            "use strict";
            t.NM = void 0;
            var r = o(n(77095));
            r.default;
            var i = o(n(32659));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.NM = i.default, r.default
        },
        50109: function(e, t) {
            "use strict";
            t.__esModule = !0, t.noop = t.defaultProps = t.defaultOptions = t.defaultConfig = void 0, t.defaultOptions = {}, t.defaultConfig = {
                disconnectOnLeave: !1
            };
            var n = () => {};
            t.noop = n, t.defaultProps = {
                onEnterViewport: n,
                onLeaveViewport: n
            }
        },
        77095: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = n(67294),
                i = s(n(8679)),
                o = s(n(32659)),
                l = n(50109),
                u = n(85893),
                a = ["onEnterViewport", "onLeaveViewport"];

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var f = e => "function" == typeof e && !(e.prototype && e.prototype.render),
                p = e => e.prototype && e.prototype.isReactComponent;
            t.default = function(e, t, n) {
                void 0 === t && (t = l.defaultOptions), void 0 === n && (n = l.defaultConfig);
                var s = (0, r.forwardRef)((t, n) => {
                    var r = c({
                        forwardedRef: n
                    }, p(e) && !f(e) ? {
                        ref: n
                    } : {});
                    return (0, u.jsx)(e, c({}, t, r))
                });

                function h(e) {
                    var {
                        onEnterViewport: i = l.noop,
                        onLeaveViewport: f = l.noop
                    } = e, p = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i
                    }(e, a), h = (0, r.useRef)(), {
                        inViewport: d,
                        enterCount: g,
                        leaveCount: m
                    } = (0, o.default)(h, t, n, {
                        onEnterViewport: i,
                        onLeaveViewport: f
                    });
                    return (0, u.jsx)(s, c({}, p, {
                        inViewport: d,
                        enterCount: g,
                        leaveCount: m
                    }, {
                        ref: h
                    }))
                }
                var d = e.displayName || e.name || "Component";
                return h.displayName = "handleViewport(" + d + ")", (0, i.default)(h, s)
            }
        },
        32659: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = n(67294),
                i = n(73935),
                o = n(50109);
            t.default = function(e, t, n, l) {
                void 0 === t && (t = o.defaultOptions), void 0 === n && (n = o.defaultConfig), void 0 === l && (l = o.defaultProps);
                var {
                    onEnterViewport: u,
                    onLeaveViewport: a
                } = l, [, s] = (0, r.useState)(), c = (0, r.useRef)(), f = (0, r.useRef)(!1), p = (0, r.useRef)(!1), h = (0, r.useRef)(0), d = (0, r.useRef)(0);

                function g(e) {
                    var {
                        isIntersecting: t,
                        intersectionRatio: r
                    } = e[0] || {}, i = void 0 !== t ? t : r > 0;
                    if (!p.current && i) {
                        p.current = !0, null == u || u(), h.current += 1, f.current = i, s(i);
                        return
                    }
                    p.current && !i && (p.current = !1, null == a || a(), n.disconnectOnLeave && c.current && c.current.disconnect(), d.current += 1, f.current = i, s(i))
                }
                return (0, r.useEffect)(() => {
                    var n = c.current;
                    return n = function(e) {
                            var {
                                observerRef: n
                            } = e;
                            return n || (c.current = new IntersectionObserver(g, t), c.current)
                        }({
                            observerRef: n
                        }),
                        function(t) {
                            var {
                                observerRef: n
                            } = t, r = e.current;
                            if (r) {
                                var o = (0, i.findDOMNode)(r);
                                o && (null == n || n.observe(o))
                            }
                        }({
                            observerRef: n
                        }), () => {
                            ! function(t) {
                                var {
                                    observerRef: n
                                } = t, r = e.current;
                                if (r) {
                                    var o = (0, i.findDOMNode)(r);
                                    o && (null == n || n.unobserve(o))
                                }
                                null == n || n.disconnect(), c.current = null
                            }({
                                observerRef: n
                            })
                        }
                }, [e.current, t, n, u, a]), {
                    inViewport: f.current,
                    enterCount: h.current,
                    leaveCount: d.current
                }
            }
        },
        69921: function(e, t) {
            "use strict";
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = "function" == typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                i = n ? Symbol.for("react.portal") : 60106,
                o = n ? Symbol.for("react.fragment") : 60107,
                l = n ? Symbol.for("react.strict_mode") : 60108,
                u = n ? Symbol.for("react.profiler") : 60114,
                a = n ? Symbol.for("react.provider") : 60109,
                s = n ? Symbol.for("react.context") : 60110,
                c = n ? Symbol.for("react.async_mode") : 60111,
                f = n ? Symbol.for("react.concurrent_mode") : 60111,
                p = n ? Symbol.for("react.forward_ref") : 60112,
                h = n ? Symbol.for("react.suspense") : 60113,
                d = n ? Symbol.for("react.suspense_list") : 60120,
                g = n ? Symbol.for("react.memo") : 60115,
                m = n ? Symbol.for("react.lazy") : 60116,
                y = n ? Symbol.for("react.block") : 60121,
                x = n ? Symbol.for("react.fundamental") : 60117,
                v = n ? Symbol.for("react.responder") : 60118,
                b = n ? Symbol.for("react.scope") : 60119;

            function k(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case c:
                                case f:
                                case o:
                                case u:
                                case l:
                                case h:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case s:
                                        case p:
                                        case m:
                                        case g:
                                        case a:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case i:
                            return t
                    }
                }
            }

            function S(e) {
                return k(e) === f
            }
            t.AsyncMode = c, t.ConcurrentMode = f, t.ContextConsumer = s, t.ContextProvider = a, t.Element = r, t.ForwardRef = p, t.Fragment = o, t.Lazy = m, t.Memo = g, t.Portal = i, t.Profiler = u, t.StrictMode = l, t.Suspense = h, t.isAsyncMode = function(e) {
                return S(e) || k(e) === c
            }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
                return k(e) === s
            }, t.isContextProvider = function(e) {
                return k(e) === a
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return k(e) === p
            }, t.isFragment = function(e) {
                return k(e) === o
            }, t.isLazy = function(e) {
                return k(e) === m
            }, t.isMemo = function(e) {
                return k(e) === g
            }, t.isPortal = function(e) {
                return k(e) === i
            }, t.isProfiler = function(e) {
                return k(e) === u
            }, t.isStrictMode = function(e) {
                return k(e) === l
            }, t.isSuspense = function(e) {
                return k(e) === h
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === o || e === f || e === u || e === l || e === h || e === d || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === a || e.$$typeof === s || e.$$typeof === p || e.$$typeof === x || e.$$typeof === v || e.$$typeof === b || e.$$typeof === y)
            }, t.typeOf = k
        },
        59864: function(e, t, n) {
            "use strict";
            e.exports = n(69921)
        },
        79621: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return c
                }
            });
            var r = n(67294);
            let i = e => Math.max(e.offsetWidth, e.scrollWidth),
                o = e => Math.max(e.offsetHeight, e.scrollHeight),
                l = (e, t, n) => {
                    let r = e.childNodes,
                        i = document.createRange();
                    for (let o = 0; o < r.length; o++) {
                        let l = r[o];
                        if (3 !== l.nodeType) continue;
                        i.selectNodeContents(l);
                        let u = i.getBoundingClientRect();
                        if (t >= u.left && n >= u.top && t <= u.right && n <= u.bottom) return l
                    }
                    return !1
                },
                u = () => {
                    let e = window.getSelection ? window.getSelection() : document.selection;
                    e && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty())
                };
            class a {
                constructor(e = {}) {
                    let t = {
                        content: e.viewport.children[0],
                        direction: "all",
                        pointerMode: "all",
                        scrollMode: void 0,
                        bounce: !0,
                        bounceForce: .1,
                        friction: .05,
                        textSelection: !1,
                        inputsFocus: !0,
                        emulateScroll: !1,
                        preventDefaultOnEmulateScroll: !1,
                        preventPointerMoveDefault: !0,
                        lockScrollOnDragDirection: !1,
                        pointerDownPreventDefault: !0,
                        dragDirectionTolerance: 40,
                        onPointerDown() {},
                        onPointerUp() {},
                        onPointerMove() {},
                        onClick() {},
                        onUpdate() {},
                        onWheel() {},
                        shouldScroll: () => !0
                    };
                    if (this.props = { ...t,
                            ...e
                        }, !this.props.viewport || !(this.props.viewport instanceof Element)) {
                        console.error('ScrollBooster init error: "viewport" config property must be present and must be Element');
                        return
                    }
                    if (!this.props.content) {
                        console.error("ScrollBooster init error: Viewport does not have any content");
                        return
                    }
                    this.isDragging = !1, this.isTargetScroll = !1, this.isScrolling = !1, this.isRunning = !1;
                    let n = {
                        x: 0,
                        y: 0
                    };
                    this.position = { ...n
                    }, this.velocity = { ...n
                    }, this.dragStartPosition = { ...n
                    }, this.dragOffset = { ...n
                    }, this.clientOffset = { ...n
                    }, this.dragPosition = { ...n
                    }, this.targetPosition = { ...n
                    }, this.scrollOffset = { ...n
                    }, this.rafID = null, this.events = {}, this.updateMetrics(), this.handleEvents()
                }
                updateOptions(e = {}) {
                    this.props = { ...this.props,
                        ...e
                    }, this.props.onUpdate(this.getState()), this.startAnimationLoop()
                }
                updateMetrics() {
                    this.viewport = {
                        width: this.props.viewport.clientWidth,
                        height: this.props.viewport.clientHeight
                    }, this.content = {
                        width: i(this.props.content),
                        height: o(this.props.content)
                    }, this.edgeX = {
                        from: Math.min(-this.content.width + this.viewport.width, 0),
                        to: 0
                    }, this.edgeY = {
                        from: Math.min(-this.content.height + this.viewport.height, 0),
                        to: 0
                    }, this.props.onUpdate(this.getState()), this.startAnimationLoop()
                }
                startAnimationLoop() {
                    this.isRunning = !0, cancelAnimationFrame(this.rafID), this.rafID = requestAnimationFrame(() => this.animate())
                }
                animate() {
                    if (!this.isRunning) return;
                    this.updateScrollPosition(), this.isMoving() || (this.isRunning = !1, this.isTargetScroll = !1);
                    let e = this.getState();
                    this.setContentPosition(e), this.props.onUpdate(e), this.rafID = requestAnimationFrame(() => this.animate())
                }
                updateScrollPosition() {
                    this.applyEdgeForce(), this.applyDragForce(), this.applyScrollForce(), this.applyTargetForce();
                    let e = 1 - this.props.friction;
                    this.velocity.x *= e, this.velocity.y *= e, "vertical" !== this.props.direction && (this.position.x += this.velocity.x), "horizontal" !== this.props.direction && (this.position.y += this.velocity.y), this.props.bounce && !this.isScrolling || this.isTargetScroll || (this.position.x = Math.max(Math.min(this.position.x, this.edgeX.to), this.edgeX.from), this.position.y = Math.max(Math.min(this.position.y, this.edgeY.to), this.edgeY.from))
                }
                applyForce(e) {
                    this.velocity.x += e.x, this.velocity.y += e.y
                }
                applyEdgeForce() {
                    if (!this.props.bounce || this.isDragging) return;
                    let e = this.position.x < this.edgeX.from,
                        t = this.position.x > this.edgeX.to,
                        n = this.position.y < this.edgeY.from,
                        r = this.position.y > this.edgeY.to,
                        i = e || t,
                        o = n || r;
                    if (!i && !o) return;
                    let l = {
                            x: e ? this.edgeX.from : this.edgeX.to,
                            y: n ? this.edgeY.from : this.edgeY.to
                        },
                        u = {
                            x: l.x - this.position.x,
                            y: l.y - this.position.y
                        },
                        a = {
                            x: u.x * this.props.bounceForce,
                            y: u.y * this.props.bounceForce
                        },
                        s = {
                            x: this.position.x + (this.velocity.x + a.x) / this.props.friction,
                            y: this.position.y + (this.velocity.y + a.y) / this.props.friction
                        };
                    (e && s.x >= this.edgeX.from || t && s.x <= this.edgeX.to) && (a.x = u.x * this.props.bounceForce - this.velocity.x), (n && s.y >= this.edgeY.from || r && s.y <= this.edgeY.to) && (a.y = u.y * this.props.bounceForce - this.velocity.y), this.applyForce({
                        x: i ? a.x : 0,
                        y: o ? a.y : 0
                    })
                }
                applyDragForce() {
                    if (!this.isDragging) return;
                    let e = {
                        x: this.dragPosition.x - this.position.x,
                        y: this.dragPosition.y - this.position.y
                    };
                    this.applyForce({
                        x: e.x - this.velocity.x,
                        y: e.y - this.velocity.y
                    })
                }
                applyScrollForce() {
                    this.isScrolling && (this.applyForce({
                        x: this.scrollOffset.x - this.velocity.x,
                        y: this.scrollOffset.y - this.velocity.y
                    }), this.scrollOffset.x = 0, this.scrollOffset.y = 0)
                }
                applyTargetForce() {
                    this.isTargetScroll && this.applyForce({
                        x: (this.targetPosition.x - this.position.x) * .08 - this.velocity.x,
                        y: (this.targetPosition.y - this.position.y) * .08 - this.velocity.y
                    })
                }
                isMoving() {
                    return this.isDragging || this.isScrolling || Math.abs(this.velocity.x) >= .01 || Math.abs(this.velocity.y) >= .01
                }
                scrollTo(e = {}) {
                    this.isTargetScroll = !0, this.targetPosition.x = -e.x || 0, this.targetPosition.y = -e.y || 0, this.startAnimationLoop()
                }
                setPosition(e = {}) {
                    this.velocity.x = 0, this.velocity.y = 0, this.position.x = -e.x || 0, this.position.y = -e.y || 0, this.startAnimationLoop()
                }
                getState() {
                    return {
                        isMoving: this.isMoving(),
                        isDragging: !!(this.dragOffset.x || this.dragOffset.y),
                        position: {
                            x: -this.position.x,
                            y: -this.position.y
                        },
                        dragOffset: this.dragOffset,
                        dragAngle: this.getDragAngle(this.clientOffset.x, this.clientOffset.y),
                        borderCollision: {
                            left: this.position.x >= this.edgeX.to,
                            right: this.position.x <= this.edgeX.from,
                            top: this.position.y >= this.edgeY.to,
                            bottom: this.position.y <= this.edgeY.from
                        }
                    }
                }
                getDragAngle(e, t) {
                    return Math.round(Math.atan2(e, t) * (180 / Math.PI))
                }
                getDragDirection(e, t) {
                    return Math.abs(90 - Math.abs(e)) <= 90 - t ? "horizontal" : "vertical"
                }
                setContentPosition(e) {
                    "transform" === this.props.scrollMode && (this.props.content.style.transform = `translate(${-e.position.x}px, ${-e.position.y}px)`), "native" === this.props.scrollMode && (this.props.viewport.scrollTop = e.position.y, this.props.viewport.scrollLeft = e.position.x)
                }
                handleEvents() {
                    let e = {
                            x: 0,
                            y: 0
                        },
                        t = {
                            x: 0,
                            y: 0
                        },
                        n = null,
                        r = null,
                        i = !1,
                        o = r => {
                            if (!this.isDragging) return;
                            let o = i ? r.touches[0] : r,
                                {
                                    pageX: l,
                                    pageY: u,
                                    clientX: a,
                                    clientY: s
                                } = o;
                            this.dragOffset.x = l - e.x, this.dragOffset.y = u - e.y, this.clientOffset.x = a - t.x, this.clientOffset.y = s - t.y, (Math.abs(this.clientOffset.x) > 5 && !n || Math.abs(this.clientOffset.y) > 5 && !n) && (n = this.getDragDirection(this.getDragAngle(this.clientOffset.x, this.clientOffset.y), this.props.dragDirectionTolerance)), this.props.lockScrollOnDragDirection && "all" !== this.props.lockScrollOnDragDirection ? n === this.props.lockScrollOnDragDirection && i ? (this.dragPosition.x = this.dragStartPosition.x + this.dragOffset.x, this.dragPosition.y = this.dragStartPosition.y + this.dragOffset.y) : i ? (this.dragPosition.x = this.dragStartPosition.x, this.dragPosition.y = this.dragStartPosition.y) : (this.dragPosition.x = this.dragStartPosition.x + this.dragOffset.x, this.dragPosition.y = this.dragStartPosition.y + this.dragOffset.y) : (this.dragPosition.x = this.dragStartPosition.x + this.dragOffset.x, this.dragPosition.y = this.dragStartPosition.y + this.dragOffset.y)
                        };
                    this.events.pointerdown = n => {
                        i = !!(n.touches && n.touches[0]), this.props.onPointerDown(this.getState(), n, i);
                        let r = i ? n.touches[0] : n,
                            {
                                pageX: a,
                                pageY: s,
                                clientX: c,
                                clientY: f
                            } = r,
                            {
                                viewport: p
                            } = this.props,
                            h = p.getBoundingClientRect();
                        if (!(c - h.left >= p.clientLeft + p.clientWidth) && !(f - h.top >= p.clientTop + p.clientHeight) && this.props.shouldScroll(this.getState(), n) && 2 !== n.button && ("mouse" !== this.props.pointerMode || !i) && ("touch" !== this.props.pointerMode || i) && !(this.props.inputsFocus && ["input", "textarea", "button", "select", "label"].indexOf(n.target.nodeName.toLowerCase()) > -1)) {
                            if (this.props.textSelection) {
                                let d = l(n.target, c, f);
                                if (d) return;
                                u()
                            }
                            this.isDragging = !0, e.x = a, e.y = s, t.x = c, t.y = f, this.dragStartPosition.x = this.position.x, this.dragStartPosition.y = this.position.y, o(n), this.startAnimationLoop(), !i && this.props.pointerDownPreventDefault && n.preventDefault()
                        }
                    }, this.events.pointermove = e => {
                        e.cancelable && ("all" === this.props.lockScrollOnDragDirection || this.props.lockScrollOnDragDirection === n) && e.preventDefault(), o(e), this.props.onPointerMove(this.getState(), e, i)
                    }, this.events.pointerup = e => {
                        this.isDragging = !1, n = null, this.props.onPointerUp(this.getState(), e, i)
                    }, this.events.wheel = e => {
                        let t = this.getState();
                        this.props.emulateScroll && (this.velocity.x = 0, this.velocity.y = 0, this.isScrolling = !0, this.scrollOffset.x = -e.deltaX, this.scrollOffset.y = -e.deltaY, this.props.onWheel(t, e), this.startAnimationLoop(), clearTimeout(r), r = setTimeout(() => this.isScrolling = !1, 80), this.props.preventDefaultOnEmulateScroll && this.getDragDirection(this.getDragAngle(-e.deltaX, -e.deltaY), this.props.dragDirectionTolerance) === this.props.preventDefaultOnEmulateScroll && e.preventDefault())
                    }, this.events.scroll = () => {
                        let {
                            scrollLeft: e,
                            scrollTop: t
                        } = this.props.viewport;
                        Math.abs(this.position.x + e) > 3 && (this.position.x = -e, this.velocity.x = 0), Math.abs(this.position.y + t) > 3 && (this.position.y = -t, this.velocity.y = 0)
                    }, this.events.click = e => {
                        let t = this.getState(),
                            n = "vertical" !== this.props.direction ? t.dragOffset.x : 0,
                            r = "horizontal" !== this.props.direction ? t.dragOffset.y : 0;
                        Math.max(Math.abs(n), Math.abs(r)) > 5 && (e.preventDefault(), e.stopPropagation()), this.props.onClick(t, e, i)
                    }, this.events.contentLoad = () => this.updateMetrics(), this.events.resize = () => this.updateMetrics(), this.props.viewport.addEventListener("mousedown", this.events.pointerdown), this.props.viewport.addEventListener("touchstart", this.events.pointerdown, {
                        passive: !1
                    }), this.props.viewport.addEventListener("click", this.events.click), this.props.viewport.addEventListener("wheel", this.events.wheel, {
                        passive: !1
                    }), this.props.viewport.addEventListener("scroll", this.events.scroll), this.props.content.addEventListener("load", this.events.contentLoad, !0), window.addEventListener("mousemove", this.events.pointermove), window.addEventListener("touchmove", this.events.pointermove, {
                        passive: !1
                    }), window.addEventListener("mouseup", this.events.pointerup), window.addEventListener("touchend", this.events.pointerup), window.addEventListener("resize", this.events.resize)
                }
                destroy() {
                    this.props.viewport.removeEventListener("mousedown", this.events.pointerdown), this.props.viewport.removeEventListener("touchstart", this.events.pointerdown), this.props.viewport.removeEventListener("click", this.events.click), this.props.viewport.removeEventListener("wheel", this.events.wheel), this.props.viewport.removeEventListener("scroll", this.events.scroll), this.props.content.removeEventListener("load", this.events.contentLoad), window.removeEventListener("mousemove", this.events.pointermove), window.removeEventListener("touchmove", this.events.pointermove), window.removeEventListener("mouseup", this.events.pointerup), window.removeEventListener("touchend", this.events.pointerup), window.removeEventListener("resize", this.events.resize)
                }
            }

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = function(e) {
                void 0 === e && (e = {});
                var t = (0, r.useRef)(null),
                    n = (0, r.useState)(t.current),
                    i = n[0],
                    o = n[1],
                    l = (0, r.useRef)(e),
                    u = (0, r.useCallback)(function(e) {
                        var n = l.current,
                            r = n.contentRef,
                            i = s({
                                viewport: e
                            }, function(e, t) {
                                if (null == e) return {};
                                var n, r, i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (i[n] = e[n]);
                                return i
                            }(n, ["contentRef", "viewportRef"]));
                        i.viewport = e, (null == r ? void 0 : r.current) && (i.content = r.current), t.current = new a(i), o(t.current)
                    }, []),
                    c = (0, r.useCallback)(function(t) {
                        if (t) {
                            if (e.viewportRef) {
                                e.viewportRef.current = t;
                                return
                            }
                            u(t)
                        }
                    }, [u, e.viewportRef]);
                return (0, r.useEffect)(function() {
                    var t;
                    (null == (t = e.viewportRef) ? void 0 : t.current) && u(e.viewportRef.current)
                }, [u, e.viewportRef]), (0, r.useEffect)(function() {
                    return function() {
                        var e;
                        return null == (e = t.current) ? void 0 : e.destroy()
                    }
                }, []), [c, i]
            }
        },
        75364: function(e, t, n) {
            "use strict";
            n.d(t, {
                jv: function() {
                    return r
                },
                H$: function() {
                    return l
                },
                n9: function() {
                    return a
                },
                Av: function() {
                    return s
                },
                pY: function() {
                    return i
                },
                AF: function() {
                    return o
                },
                sR: function() {
                    return u
                },
                Ch: function() {
                    return f
                },
                z3: function() {
                    return c
                },
                xz: function() {
                    return p
                },
                Xh: function() {
                    return d
                },
                B8: function() {
                    return h
                }
            });
            let r = g(/[A-Za-z]/),
                i = g(/\d/),
                o = g(/[\dA-Fa-f]/),
                l = g(/[\dA-Za-z]/),
                u = g(/[!-/:-@[-`{-~]/),
                a = g(/[#-'*+\--9=?A-Z^-~]/);

            function s(e) {
                return null !== e && (e < 32 || 127 === e)
            }

            function c(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function f(e) {
                return null !== e && e < -2
            }

            function p(e) {
                return -2 === e || -1 === e || 32 === e
            }
            let h = g(/\s/),
                d = g(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/);

            function g(e) {
                return function(t) {
                    return null !== t && e.test(String.fromCharCode(t))
                }
            }
        },
        84520: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                Z: function() {
                    return e0
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                boolean: function() {
                    return c
                },
                booleanish: function() {
                    return f
                },
                commaOrSpaceSeparated: function() {
                    return m
                },
                commaSeparated: function() {
                    return g
                },
                number: function() {
                    return h
                },
                overloadedBoolean: function() {
                    return p
                },
                spaceSeparated: function() {
                    return d
                }
            });
            class o {
                constructor(e, t, n) {
                    this.property = e, this.normal = t, n && (this.space = n)
                }
            }

            function l(e, t) {
                let n = {},
                    r = {},
                    i = -1;
                for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
                return new o(n, r, t)
            }

            function u(e) {
                return e.toLowerCase()
            }
            o.prototype.property = {}, o.prototype.normal = {}, o.prototype.space = null;
            class a {
                constructor(e, t) {
                    this.property = e, this.attribute = t
                }
            }
            a.prototype.space = null, a.prototype.boolean = !1, a.prototype.booleanish = !1, a.prototype.overloadedBoolean = !1, a.prototype.number = !1, a.prototype.commaSeparated = !1, a.prototype.spaceSeparated = !1, a.prototype.commaOrSpaceSeparated = !1, a.prototype.mustUseProperty = !1, a.prototype.defined = !1;
            let s = 0,
                c = y(),
                f = y(),
                p = y(),
                h = y(),
                d = y(),
                g = y(),
                m = y();

            function y() {
                return 2 ** ++s
            }
            let x = Object.keys(i);
            class v extends a {
                constructor(e, t, n, r) {
                    var o, l, u, a;
                    let s = -1;
                    if (super(e, t), o = this, r && (o.space = r), "number" == typeof n)
                        for (; ++s < x.length;) {
                            let c = x[s];
                            l = this, u = x[s], (a = (n & i[c]) === i[c]) && (l[u] = a)
                        }
                }
            }
            v.prototype.defined = !0;
            let b = {}.hasOwnProperty;

            function k(e) {
                let t;
                let n = {},
                    r = {};
                for (t in e.properties)
                    if (b.call(e.properties, t)) {
                        let i = e.properties[t],
                            l = new v(t, e.transform(e.attributes || {}, t), i, e.space);
                        e.mustUseProperty && e.mustUseProperty.includes(t) && (l.mustUseProperty = !0), n[t] = l, r[u(t)] = t, r[u(l.attribute)] = t
                    }
                return new o(n, r, e.space)
            }
            let S = k({
                    space: "xlink",
                    transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    }
                }),
                C = k({
                    space: "xml",
                    transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null
                    }
                });

            function w(e, t) {
                return t in e ? e[t] : t
            }

            function E(e, t) {
                return w(e, t.toLowerCase())
            }
            let A = k({
                    space: "xmlns",
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    transform: E,
                    properties: {
                        xmlns: null,
                        xmlnsXLink: null
                    }
                }),
                O = k({
                    transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: f,
                        ariaAutoComplete: null,
                        ariaBusy: f,
                        ariaChecked: f,
                        ariaColCount: h,
                        ariaColIndex: h,
                        ariaColSpan: h,
                        ariaControls: d,
                        ariaCurrent: null,
                        ariaDescribedBy: d,
                        ariaDetails: null,
                        ariaDisabled: f,
                        ariaDropEffect: d,
                        ariaErrorMessage: null,
                        ariaExpanded: f,
                        ariaFlowTo: d,
                        ariaGrabbed: f,
                        ariaHasPopup: null,
                        ariaHidden: f,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: d,
                        ariaLevel: h,
                        ariaLive: null,
                        ariaModal: f,
                        ariaMultiLine: f,
                        ariaMultiSelectable: f,
                        ariaOrientation: null,
                        ariaOwns: d,
                        ariaPlaceholder: null,
                        ariaPosInSet: h,
                        ariaPressed: f,
                        ariaReadOnly: f,
                        ariaRelevant: null,
                        ariaRequired: f,
                        ariaRoleDescription: d,
                        ariaRowCount: h,
                        ariaRowIndex: h,
                        ariaRowSpan: h,
                        ariaSelected: f,
                        ariaSetSize: h,
                        ariaSort: null,
                        ariaValueMax: h,
                        ariaValueMin: h,
                        ariaValueNow: h,
                        ariaValueText: null,
                        role: null
                    }
                }),
                F = k({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    transform: E,
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: g,
                        acceptCharset: d,
                        accessKey: d,
                        action: null,
                        allow: null,
                        allowFullScreen: c,
                        allowPaymentRequest: c,
                        allowUserMedia: c,
                        alt: null,
                        as: null,
                        async: c,
                        autoCapitalize: null,
                        autoComplete: d,
                        autoFocus: c,
                        autoPlay: c,
                        capture: c,
                        charSet: null,
                        checked: c,
                        cite: null,
                        className: d,
                        cols: h,
                        colSpan: null,
                        content: null,
                        contentEditable: f,
                        controls: c,
                        controlsList: d,
                        coords: h | g,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: c,
                        defer: c,
                        dir: null,
                        dirName: null,
                        disabled: c,
                        download: p,
                        draggable: f,
                        encType: null,
                        enterKeyHint: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: c,
                        formTarget: null,
                        headers: d,
                        height: h,
                        hidden: c,
                        high: h,
                        href: null,
                        hrefLang: null,
                        htmlFor: d,
                        httpEquiv: d,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: c,
                        itemId: null,
                        itemProp: d,
                        itemRef: d,
                        itemScope: c,
                        itemType: d,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: c,
                        low: h,
                        manifest: null,
                        max: null,
                        maxLength: h,
                        media: null,
                        method: null,
                        min: null,
                        minLength: h,
                        multiple: c,
                        muted: c,
                        name: null,
                        nonce: null,
                        noModule: c,
                        noValidate: c,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: c,
                        optimum: h,
                        pattern: null,
                        ping: d,
                        placeholder: null,
                        playsInline: c,
                        poster: null,
                        preload: null,
                        readOnly: c,
                        referrerPolicy: null,
                        rel: d,
                        required: c,
                        reversed: c,
                        rows: h,
                        rowSpan: h,
                        sandbox: d,
                        scope: null,
                        scoped: c,
                        seamless: c,
                        selected: c,
                        shape: null,
                        size: h,
                        sizes: null,
                        slot: null,
                        span: h,
                        spellCheck: f,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: h,
                        step: null,
                        style: null,
                        tabIndex: h,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: c,
                        useMap: null,
                        value: f,
                        width: h,
                        wrap: null,
                        align: null,
                        aLink: null,
                        archive: d,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: h,
                        borderColor: null,
                        bottomMargin: h,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: c,
                        declare: c,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: h,
                        leftMargin: h,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: h,
                        marginWidth: h,
                        noResize: c,
                        noHref: c,
                        noShade: c,
                        noWrap: c,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: h,
                        rules: null,
                        scheme: null,
                        scrolling: f,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: h,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: h,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: c,
                        disableRemotePlayback: c,
                        prefix: null,
                        property: null,
                        results: h,
                        security: null,
                        unselectable: null
                    }
                }),
                P = k({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    transform: w,
                    properties: {
                        about: m,
                        accentHeight: h,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: h,
                        amplitude: h,
                        arabicForm: null,
                        ascent: h,
                        attributeName: null,
                        attributeType: null,
                        azimuth: h,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: h,
                        by: null,
                        calcMode: null,
                        capHeight: h,
                        className: d,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: h,
                        diffuseConstant: h,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: h,
                        dominantBaseline: null,
                        download: c,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: h,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: h,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: h,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: g,
                        g2: g,
                        glyphName: g,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: h,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: h,
                        horizOriginX: h,
                        horizOriginY: h,
                        id: null,
                        ideographic: h,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: h,
                        k: h,
                        k1: h,
                        k2: h,
                        k3: h,
                        k4: h,
                        kernelMatrix: m,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: h,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: h,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: h,
                        overlineThickness: h,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: h,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: d,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: h,
                        pointsAtY: h,
                        pointsAtZ: h,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: m,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: m,
                        rev: m,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: m,
                        requiredFeatures: m,
                        requiredFonts: m,
                        requiredFormats: m,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: h,
                        specularExponent: h,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: h,
                        strikethroughThickness: h,
                        string: null,
                        stroke: null,
                        strokeDashArray: m,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: h,
                        strokeOpacity: h,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: h,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: m,
                        tabIndex: h,
                        tableValues: null,
                        target: null,
                        targetX: h,
                        targetY: h,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: m,
                        to: null,
                        transform: null,
                        u1: null,
                        u2: null,
                        underlinePosition: h,
                        underlineThickness: h,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: h,
                        values: null,
                        vAlphabetic: h,
                        vMathematical: h,
                        vectorEffect: null,
                        vHanging: h,
                        vIdeographic: h,
                        version: null,
                        vertAdvY: h,
                        vertOriginX: h,
                        vertOriginY: h,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: h,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    }
                }),
                D = l([C, S, A, O, F], "html"),
                L = l([C, S, A, O, P], "svg"),
                T = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"],
                z = function(e, t, n, r, i) {
                    let o = M(t);
                    if (null != n && ("number" != typeof n || n < 0 || n === Number.POSITIVE_INFINITY)) throw Error("Expected positive finite index for child node");
                    if (null != r && (!r.type || !r.children)) throw Error("Expected parent node");
                    if (!e || !e.type || "string" != typeof e.type) return !1;
                    if (null == r != (null == n)) throw Error("Expected both parent and index");
                    return o.call(i, e, n, r)
                },
                M = function(e) {
                    if (null == e) return R;
                    if ("string" == typeof e) return function(t) {
                        return R(t) && t.tagName === e
                    };
                    if ("object" == typeof e) return function(e) {
                        let t = [],
                            n = -1;
                        for (; ++n < e.length;) t[n] = M(e[n]);
                        return I(function(...e) {
                            let n = -1;
                            for (; ++n < t.length;)
                                if (t[n].call(this, ...e)) return !0;
                            return !1
                        })
                    }(e);
                    if ("function" == typeof e) return I(e);
                    throw Error("Expected function, string, or array as test")
                };

            function I(e) {
                return function(t, ...n) {
                    return R(t) && Boolean(e.call(this, t, ...n))
                }
            }

            function R(e) {
                return Boolean(e && "object" == typeof e && "element" === e.type && "string" == typeof e.tagName)
            }
            var j = n(19645);
            let B = (0, j.O)("comment");

            function _(e) {
                var t = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
                return "string" == typeof t && "" === t.replace(/[ \t\n\f\r]/g, "")
            }
            let N = U(1),
                H = U(-1);

            function U(e) {
                return function(t, n, r) {
                    let i = t && t.children,
                        o = n + e,
                        l = i && i[o];
                    if (!r)
                        for (; l && _(l);) o += e, l = i[o];
                    return l
                }
            }
            let q = (0, j.O)("text");

            function $(e) {
                return q(e) && _(e.value.charAt(0))
            }
            let V = {}.hasOwnProperty;

            function Y(e) {
                return function(t, n, r) {
                    return V.call(e, t.tagName) && e[t.tagName](t, n, r)
                }
            }
            let W = Y({
                html: function(e, t, n) {
                    let r = N(n, t);
                    return !r || !B(r)
                },
                head: X,
                body: function(e, t, n) {
                    let r = N(n, t);
                    return !r || !B(r)
                },
                p: function(e, t, n) {
                    let r = N(n, t);
                    return r ? z(r, ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"]) : !n || !z(n, ["a", "audio", "del", "ins", "map", "noscript", "video"])
                },
                li: function(e, t, n) {
                    let r = N(n, t);
                    return !r || z(r, "li")
                },
                dt: function(e, t, n) {
                    let r = N(n, t);
                    return r && z(r, ["dt", "dd"])
                },
                dd: function(e, t, n) {
                    let r = N(n, t);
                    return !r || z(r, ["dt", "dd"])
                },
                rt: Q,
                rp: Q,
                optgroup: function(e, t, n) {
                    let r = N(n, t);
                    return !r || z(r, "optgroup")
                },
                option: function(e, t, n) {
                    let r = N(n, t);
                    return !r || z(r, ["option", "optgroup"])
                },
                menuitem: function(e, t, n) {
                    let r = N(n, t);
                    return !r || z(r, ["menuitem", "hr", "menu"])
                },
                colgroup: X,
                caption: X,
                thead: function(e, t, n) {
                    let r = N(n, t);
                    return r && z(r, ["tbody", "tfoot"])
                },
                tbody: function(e, t, n) {
                    let r = N(n, t);
                    return !r || z(r, ["tbody", "tfoot"])
                },
                tfoot: function(e, t, n) {
                    return !N(n, t)
                },
                tr: function(e, t, n) {
                    let r = N(n, t);
                    return !r || z(r, "tr")
                },
                td: K,
                th: K
            });

            function X(e, t, n) {
                let r = N(n, t, !0);
                return !r || !B(r) && !$(r)
            }

            function Q(e, t, n) {
                let r = N(n, t);
                return !r || z(r, ["rp", "rt"])
            }

            function K(e, t, n) {
                let r = N(n, t);
                return !r || z(r, ["td", "th"])
            }
            let G = Y({
                    html: function(e) {
                        let t = N(e, -1);
                        return !t || !B(t)
                    },
                    head: function(e) {
                        let t;
                        let n = e.children,
                            r = [],
                            i = -1;
                        for (; ++i < n.length;)
                            if (z(t = n[i], ["title", "base"])) {
                                if (r.includes(t.tagName)) return !1;
                                r.push(t.tagName)
                            }
                        return n.length > 0
                    },
                    body: function(e) {
                        let t = N(e, -1, !0);
                        return !t || !B(t) && !$(t) && !z(t, ["meta", "link", "script", "style", "template"])
                    },
                    colgroup: function(e, t, n) {
                        let r = H(n, t),
                            i = N(e, -1, !0);
                        return !(z(r, "colgroup") && W(r, n.children.indexOf(r), n)) && i && z(i, "col")
                    },
                    tbody: function(e, t, n) {
                        let r = H(n, t),
                            i = N(e, -1);
                        return !(z(r, ["thead", "tbody"]) && W(r, n.children.indexOf(r), n)) && i && z(i, "tr")
                    }
                }),
                Z = {
                    opening: G,
                    closing: W
                },
                J = /^data[-\w.:]+$/i,
                ee = /-[a-z]/g,
                et = /[A-Z]/g;

            function en(e) {
                return "-" + e.toLowerCase()
            }

            function er(e) {
                return e.charAt(1).toUpperCase()
            }

            function ei(e) {
                return e.join(" ").trim()
            }

            function eo(e, t) {
                let n = t || {},
                    r = "" === e[e.length - 1] ? [...e, ""] : e;
                return r.join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim()
            }
            let el = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"],
                eu = {
                    nbsp: "\xa0",
                    iexcl: "\xa1",
                    cent: "\xa2",
                    pound: "\xa3",
                    curren: "\xa4",
                    yen: "\xa5",
                    brvbar: "\xa6",
                    sect: "\xa7",
                    uml: "\xa8",
                    copy: "\xa9",
                    ordf: "\xaa",
                    laquo: "\xab",
                    not: "\xac",
                    shy: "\xad",
                    reg: "\xae",
                    macr: "\xaf",
                    deg: "\xb0",
                    plusmn: "\xb1",
                    sup2: "\xb2",
                    sup3: "\xb3",
                    acute: "\xb4",
                    micro: "\xb5",
                    para: "\xb6",
                    middot: "\xb7",
                    cedil: "\xb8",
                    sup1: "\xb9",
                    ordm: "\xba",
                    raquo: "\xbb",
                    frac14: "\xbc",
                    frac12: "\xbd",
                    frac34: "\xbe",
                    iquest: "\xbf",
                    Agrave: "\xc0",
                    Aacute: "\xc1",
                    Acirc: "\xc2",
                    Atilde: "\xc3",
                    Auml: "\xc4",
                    Aring: "\xc5",
                    AElig: "\xc6",
                    Ccedil: "\xc7",
                    Egrave: "\xc8",
                    Eacute: "\xc9",
                    Ecirc: "\xca",
                    Euml: "\xcb",
                    Igrave: "\xcc",
                    Iacute: "\xcd",
                    Icirc: "\xce",
                    Iuml: "\xcf",
                    ETH: "\xd0",
                    Ntilde: "\xd1",
                    Ograve: "\xd2",
                    Oacute: "\xd3",
                    Ocirc: "\xd4",
                    Otilde: "\xd5",
                    Ouml: "\xd6",
                    times: "\xd7",
                    Oslash: "\xd8",
                    Ugrave: "\xd9",
                    Uacute: "\xda",
                    Ucirc: "\xdb",
                    Uuml: "\xdc",
                    Yacute: "\xdd",
                    THORN: "\xde",
                    szlig: "\xdf",
                    agrave: "\xe0",
                    aacute: "\xe1",
                    acirc: "\xe2",
                    atilde: "\xe3",
                    auml: "\xe4",
                    aring: "\xe5",
                    aelig: "\xe6",
                    ccedil: "\xe7",
                    egrave: "\xe8",
                    eacute: "\xe9",
                    ecirc: "\xea",
                    euml: "\xeb",
                    igrave: "\xec",
                    iacute: "\xed",
                    icirc: "\xee",
                    iuml: "\xef",
                    eth: "\xf0",
                    ntilde: "\xf1",
                    ograve: "\xf2",
                    oacute: "\xf3",
                    ocirc: "\xf4",
                    otilde: "\xf5",
                    ouml: "\xf6",
                    divide: "\xf7",
                    oslash: "\xf8",
                    ugrave: "\xf9",
                    uacute: "\xfa",
                    ucirc: "\xfb",
                    uuml: "\xfc",
                    yacute: "\xfd",
                    thorn: "\xfe",
                    yuml: "\xff",
                    fnof: "ƒ",
                    Alpha: "Α",
                    Beta: "Β",
                    Gamma: "Γ",
                    Delta: "Δ",
                    Epsilon: "Ε",
                    Zeta: "Ζ",
                    Eta: "Η",
                    Theta: "Θ",
                    Iota: "Ι",
                    Kappa: "Κ",
                    Lambda: "Λ",
                    Mu: "Μ",
                    Nu: "Ν",
                    Xi: "Ξ",
                    Omicron: "Ο",
                    Pi: "Π",
                    Rho: "Ρ",
                    Sigma: "Σ",
                    Tau: "Τ",
                    Upsilon: "Υ",
                    Phi: "Φ",
                    Chi: "Χ",
                    Psi: "Ψ",
                    Omega: "Ω",
                    alpha: "α",
                    beta: "β",
                    gamma: "γ",
                    delta: "δ",
                    epsilon: "ε",
                    zeta: "ζ",
                    eta: "η",
                    theta: "θ",
                    iota: "ι",
                    kappa: "κ",
                    lambda: "λ",
                    mu: "μ",
                    nu: "ν",
                    xi: "ξ",
                    omicron: "ο",
                    pi: "π",
                    rho: "ρ",
                    sigmaf: "ς",
                    sigma: "σ",
                    tau: "τ",
                    upsilon: "υ",
                    phi: "φ",
                    chi: "χ",
                    psi: "ψ",
                    omega: "ω",
                    thetasym: "ϑ",
                    upsih: "ϒ",
                    piv: "ϖ",
                    bull: "•",
                    hellip: "…",
                    prime: "′",
                    Prime: "″",
                    oline: "‾",
                    frasl: "⁄",
                    weierp: "℘",
                    image: "ℑ",
                    real: "ℜ",
                    trade: "™",
                    alefsym: "ℵ",
                    larr: "←",
                    uarr: "↑",
                    rarr: "→",
                    darr: "↓",
                    harr: "↔",
                    crarr: "↵",
                    lArr: "⇐",
                    uArr: "⇑",
                    rArr: "⇒",
                    dArr: "⇓",
                    hArr: "⇔",
                    forall: "∀",
                    part: "∂",
                    exist: "∃",
                    empty: "∅",
                    nabla: "∇",
                    isin: "∈",
                    notin: "∉",
                    ni: "∋",
                    prod: "∏",
                    sum: "∑",
                    minus: "−",
                    lowast: "∗",
                    radic: "√",
                    prop: "∝",
                    infin: "∞",
                    ang: "∠",
                    and: "∧",
                    or: "∨",
                    cap: "∩",
                    cup: "∪",
                    int: "∫",
                    there4: "∴",
                    sim: "∼",
                    cong: "≅",
                    asymp: "≈",
                    ne: "≠",
                    equiv: "≡",
                    le: "≤",
                    ge: "≥",
                    sub: "⊂",
                    sup: "⊃",
                    nsub: "⊄",
                    sube: "⊆",
                    supe: "⊇",
                    oplus: "⊕",
                    otimes: "⊗",
                    perp: "⊥",
                    sdot: "⋅",
                    lceil: "⌈",
                    rceil: "⌉",
                    lfloor: "⌊",
                    rfloor: "⌋",
                    lang: "〈",
                    rang: "〉",
                    loz: "◊",
                    spades: "♠",
                    clubs: "♣",
                    hearts: "♥",
                    diams: "♦",
                    quot: '"',
                    amp: "&",
                    lt: "<",
                    gt: ">",
                    OElig: "Œ",
                    oelig: "œ",
                    Scaron: "Š",
                    scaron: "š",
                    Yuml: "Ÿ",
                    circ: "ˆ",
                    tilde: "˜",
                    ensp: " ",
                    emsp: " ",
                    thinsp: " ",
                    zwnj: "‌",
                    zwj: "‍",
                    lrm: "‎",
                    rlm: "‏",
                    ndash: "–",
                    mdash: "—",
                    lsquo: "‘",
                    rsquo: "’",
                    sbquo: "‚",
                    ldquo: "“",
                    rdquo: "”",
                    bdquo: "„",
                    dagger: "†",
                    Dagger: "‡",
                    permil: "‰",
                    lsaquo: "‹",
                    rsaquo: "›",
                    euro: "€"
                },
                ea = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
                es = {}.hasOwnProperty,
                ec = {};
            for (r in eu) es.call(eu, r) && (ec[eu[r]] = r);

            function ef(e, t, n) {
                let r, i = function(e, t, n) {
                    let r = "&#x" + e.toString(16).toUpperCase();
                    return n && t && !/[\dA-Fa-f]/.test(String.fromCharCode(t)) ? r : r + ";"
                }(e, t, n.omitOptionalSemicolons);
                if ((n.useNamedReferences || n.useShortestReferences) && (r = function(e, t, n, r) {
                        let i = String.fromCharCode(e);
                        if (es.call(ec, i)) {
                            let o = ec[i],
                                l = "&" + o;
                            return n && el.includes(o) && !ea.includes(o) && (!r || t && 61 !== t && /[^\da-z]/i.test(String.fromCharCode(t))) ? l : l + ";"
                        }
                        return ""
                    }(e, t, n.omitOptionalSemicolons, n.attribute)), (n.useShortestReferences || !r) && n.useShortestReferences) {
                    let o = function(e, t, n) {
                        let r = "&#" + String(e);
                        return n && t && !/\d/.test(String.fromCharCode(t)) ? r : r + ";"
                    }(e, t, n.omitOptionalSemicolons);
                    o.length < i.length && (i = o)
                }
                return r && (!n.useShortestReferences || r.length < i.length) ? r : i
            }

            function ep(e, t) {
                return function(e, t) {
                    if (e = e.replace(t.subset ? function(e) {
                            let t = [],
                                n = -1;
                            for (; ++n < e.length;) t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
                            return RegExp("(?:" + t.join("|") + ")", "g")
                        }(t.subset) : /["&'<>`]/g, n), t.subset || t.escapeOnly) return e;
                    return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(e, n, r) {
                        return t.format((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536, r.charCodeAt(n + 2), t)
                    }).replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, n);

                    function n(e, n, r) {
                        return t.format(e.charCodeAt(0), r.charCodeAt(n + 1), t)
                    }
                }(e, Object.assign({
                    format: ef
                }, t))
            }

            function eh(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let r = 0,
                    i = n.indexOf(t);
                for (; - 1 !== i;) r++, i = n.indexOf(t, i + t.length);
                return r
            }
            let ed = {
                name: [
                    ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
                    ["\0	\n\f\r \"&'/<=>".split(""), "\0	\n\f\r \"&'/<=>`".split("")]
                ],
                unquoted: [
                    ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
                    ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
                ],
                single: [
                    ["&'".split(""), "\"&'`".split("")],
                    ["\0&'".split(""), "\0\"&'`".split("")]
                ],
                double: [
                    ['"&'.split(""), "\"&'`".split("")],
                    ['\0"&'.split(""), "\0\"&'`".split("")]
                ]
            };

            function eg(e, t, n, r) {
                return r && "element" === r.type && ("script" === r.tagName || "style" === r.tagName) ? t.value : ep(t.value, Object.assign({}, e.entities, {
                    subset: ["<", "&"]
                }))
            }
            let em = {
                    comment: function(e, t) {
                        return e.bogusComments ? "<?" + ep(t.value, Object.assign({}, e.entities, {
                            subset: [">"]
                        })) + ">" : "<!--" + t.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, function(t) {
                            return ep(t, Object.assign({}, e.entities, {
                                subset: ["<", ">"]
                            }))
                        }) + "-->"
                    },
                    doctype: function(e) {
                        return "<!" + (e.upperDoctype ? "DOCTYPE" : "doctype") + (e.tightDoctype ? "" : " ") + "html>"
                    },
                    element: function(e, t, n, r) {
                        let i;
                        let o = e.schema,
                            l = "svg" === o.space ? void 0 : e.omit,
                            s = "svg" === o.space ? e.closeEmpty : e.voids.includes(t.tagName.toLowerCase()),
                            c = [];
                        "html" === o.space && "svg" === t.tagName && (e.schema = L);
                        let f = function(e, t) {
                                let n, r, i;
                                let o = [],
                                    l = -1;
                                for (n in t) void 0 !== t[n] && null !== t[n] && (r = function(e, t, n) {
                                    let r;
                                    let i = function(e, t) {
                                            let n = u(t),
                                                r = t,
                                                i = a;
                                            if (n in e.normal) return e.property[e.normal[n]];
                                            if (n.length > 4 && "data" === n.slice(0, 4) && J.test(t)) {
                                                if ("-" === t.charAt(4)) {
                                                    let o = t.slice(5).replace(ee, er);
                                                    r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
                                                } else {
                                                    let l = t.slice(4);
                                                    if (!ee.test(l)) {
                                                        let s = l.replace(et, en);
                                                        "-" !== s.charAt(0) && (s = "-" + s), t = "data" + s
                                                    }
                                                }
                                                i = v
                                            }
                                            return new i(r, t)
                                        }(e.schema, t),
                                        o = e.quote;
                                    if (i.overloadedBoolean && (n === i.attribute || "" === n) ? n = !0 : (i.boolean || i.overloadedBoolean && "string" != typeof n) && (n = Boolean(n)), null == n || !1 === n || "number" == typeof n && Number.isNaN(n)) return "";
                                    let l = ep(i.attribute, Object.assign({}, e.entities, {
                                        subset: ed.name["html" === e.schema.space ? e.valid : 1][e.safe]
                                    }));
                                    return !0 === n ? l : (n = "object" == typeof n && "length" in n ? (i.commaSeparated ? eo : ei)(n, {
                                        padLeft: !e.tightLists
                                    }) : String(n), e.collapseEmpty && !n) ? l : (e.unquoted && (r = ep(n, Object.assign({}, e.entities, {
                                        subset: ed.unquoted[e.valid][e.safe],
                                        attribute: !0
                                    }))), r !== n && (e.smart && eh(n, o) > eh(n, e.alternative) && (o = e.alternative), r = o + ep(n, Object.assign({}, e.entities, {
                                        subset: ("'" === o ? ed.single : ed.double)["html" === e.schema.space ? e.valid : 1][e.safe],
                                        attribute: !0
                                    })) + o), l + (r ? "=" + r : r))
                                }(e, n, t[n])) && o.push(r);
                                for (; ++l < o.length;) i = e.tight ? o[l].charAt(o[l].length - 1) : null, l !== o.length - 1 && '"' !== i && "'" !== i && (o[l] += " ");
                                return o.join("")
                            }(e, t.properties),
                            p = ev(e, "html" === o.space && "template" === t.tagName ? t.content : t);
                        return e.schema = o, p && (s = !1), !f && l && l.opening(t, n, r) || (c.push("<", t.tagName, f ? " " + f : ""), s && ("svg" === o.space || e.close) && (i = f.charAt(f.length - 1), (!e.tightClose || "/" === i || i && '"' !== i && "'" !== i) && c.push(" "), c.push("/")), c.push(">")), c.push(p), s || l && l.closing(t, n, r) || c.push("</" + t.tagName + ">"), c.join("")
                    },
                    raw: function(e, t, n, r) {
                        return e.dangerous ? t.value : eg(e, t, n, r)
                    },
                    root: ev,
                    text: eg
                },
                ey = {}.hasOwnProperty;

            function ex(e, t, n, r) {
                if (!t || !t.type) throw Error("Expected node, not `" + t + "`");
                if (!ey.call(em, t.type)) throw Error("Cannot compile unknown node `" + t.type + "`");
                return em[t.type](e, t, n, r)
            }

            function ev(e, t) {
                let n = [],
                    r = t && t.children || [],
                    i = -1;
                for (; ++i < r.length;) n[i] = ex(e, r[i], i, t);
                return n.join("")
            }
            let eb = {
                strip: ["script"],
                clobberPrefix: "user-content-",
                clobber: ["name", "id"],
                ancestors: {
                    tbody: ["table"],
                    tfoot: ["table"],
                    thead: ["table"],
                    td: ["table"],
                    th: ["table"],
                    tr: ["table"]
                },
                protocols: {
                    href: ["http", "https", "mailto", "xmpp", "irc", "ircs"],
                    cite: ["http", "https"],
                    src: ["http", "https"],
                    longDesc: ["http", "https"]
                },
                tagNames: ["h1", "h2", "h3", "h4", "h5", "h6", "br", "b", "i", "strong", "em", "a", "pre", "code", "img", "tt", "div", "ins", "del", "sup", "sub", "p", "ol", "ul", "table", "thead", "tbody", "tfoot", "blockquote", "dl", "dt", "dd", "kbd", "q", "samp", "var", "hr", "ruby", "rt", "rp", "li", "tr", "td", "th", "s", "strike", "summary", "details", "caption", "figure", "figcaption", "abbr", "bdo", "cite", "dfn", "mark", "small", "span", "time", "wbr", "input"],
                attributes: {
                    a: ["href"],
                    img: ["src", "longDesc"],
                    input: [
                        ["type", "checkbox"],
                        ["disabled", !0]
                    ],
                    li: [
                        ["className", "task-list-item"]
                    ],
                    div: ["itemScope", "itemType"],
                    blockquote: ["cite"],
                    del: ["cite"],
                    ins: ["cite"],
                    q: ["cite"],
                    "*": ["abbr", "accept", "acceptCharset", "accessKey", "action", "align", "alt", "ariaDescribedBy", "ariaHidden", "ariaLabel", "ariaLabelledBy", "axis", "border", "cellPadding", "cellSpacing", "char", "charOff", "charSet", "checked", "clear", "cols", "colSpan", "color", "compact", "coords", "dateTime", "dir", "disabled", "encType", "htmlFor", "frame", "headers", "height", "hrefLang", "hSpace", "isMap", "id", "label", "lang", "maxLength", "media", "method", "multiple", "name", "noHref", "noShade", "noWrap", "open", "prompt", "readOnly", "rel", "rev", "rows", "rowSpan", "rules", "scope", "selected", "shape", "size", "span", "start", "summary", "tabIndex", "target", "title", "type", "useMap", "vAlign", "value", "vSpace", "width", "itemProp"]
                },
                required: {
                    input: {
                        type: "checkbox",
                        disabled: !0
                    }
                }
            };
            var ek = {}.hasOwnProperty,
                eS = [].push,
                eC = {
                    root: {
                        children: eE
                    },
                    doctype: function(e) {
                        return e.allowDoctypes ? {
                            name: eA
                        } : null
                    },
                    comment: function(e) {
                        return e.allowComments ? {
                            value: eF
                        } : null
                    },
                    element: {
                        tagName: eO,
                        properties: function(e, t, n, r) {
                            var i, o, l, u, a = eO(e, n.tagName, n, r),
                                s = e.required || {},
                                c = t || {},
                                f = Object.assign({}, eL(e.attributes["*"]), eL(a && ek.call(e.attributes, a) ? e.attributes[a] : [])),
                                p = {};
                            for (u in c)
                                if (ek.call(c, u)) {
                                    if (ek.call(f, u)) o = f[u];
                                    else {
                                        if (!((i = u).length > 4 && "data" === i.slice(0, 4).toLowerCase() && ek.call(f, "data*"))) continue;
                                        o = f["data*"]
                                    }
                                    null != (l = Array.isArray(l = c[u]) ? function(e, t, n, r) {
                                        for (var i, o = -1, l = []; ++o < t.length;) null != (i = eD(e, t[o], n, r)) && l.push(i);
                                        return l
                                    }(e, l, u, o) : eD(e, l, u, o)) && (p[u] = l)
                                }
                            if (a && ek.call(s, a))
                                for (u in s[a]) ek.call(p, u) || (p[u] = s[a][u]);
                            return p
                        },
                        children: eE
                    },
                    text: {
                        value: function(e, t) {
                            return "string" == typeof t ? t : ""
                        }
                    },
                    "*": {
                        data: eP,
                        position: eP
                    }
                };

            function ew(e, t, n) {
                var r, i, o, l, u, a = t && t.type,
                    s = {
                        type: t.type
                    };
                if (ek.call(eC, a) && ("function" == typeof(i = eC[a]) && (i = i(e, t)), i))
                    for (u in r = !0, o = Object.assign({}, i, eC["*"])) ek.call(o, u) && (!1 === (l = o[u](e, t[u], t, n)) ? (r = null, s[u] = t[u]) : null != l && (s[u] = l));
                return r ? s : "element" !== s.type || e.strip.includes(s.tagName) ? null : s.children
            }

            function eE(e, t, n, r) {
                var i, o = [],
                    l = -1;
                if (Array.isArray(t)) {
                    for ("element" === n.type && r.push(n.tagName); ++l < t.length;)(i = ew(e, t[l], r)) && ("length" in i ? eS.apply(o, i) : o.push(i));
                    "element" === n.type && r.pop()
                }
                return o
            }

            function eA() {
                return "html"
            }

            function eO(e, t, n, r) {
                var i = "string" == typeof t ? t : "",
                    o = -1;
                if (!i || "*" === i || !e.tagNames.includes(i)) return !1;
                if (ek.call(e.ancestors, i)) {
                    for (; ++o < e.ancestors[i].length;)
                        if (r.includes(e.ancestors[i][o])) return i;
                    return !1
                }
                return i
            }

            function eF(e, t) {
                var n = "string" == typeof t ? t : "",
                    r = n.indexOf("-->");
                return r < 0 ? n : n.slice(0, r)
            }

            function eP(e, t) {
                return t
            }

            function eD(e, t, n, r) {
                if (("boolean" == typeof t || "number" == typeof t || "string" == typeof t) && function(e, t, n) {
                        var r = String(t),
                            i = r.indexOf(":"),
                            o = r.indexOf("?"),
                            l = r.indexOf("#"),
                            u = r.indexOf("/"),
                            a = ek.call(e.protocols, n) ? e.protocols[n].concat() : [],
                            s = -1;
                        if (0 === a.length || i < 0 || u > -1 && i > u || o > -1 && i > o || l > -1 && i > l) return !0;
                        for (; ++s < a.length;)
                            if (i === a[s].length && r.slice(0, a[s].length) === a[s]) return !0;
                        return !1
                    }(e, t, n) && (0 === r.length || r.includes(t))) return e.clobber.includes(n) ? e.clobberPrefix + t : t
            }

            function eL(e) {
                for (var t, n = {}, r = -1; ++r < e.length;) Array.isArray(t = e[r]) ? n[t[0]] = t.slice(1) : n[t] = [];
                return n
            }
            var eT = function(e, t, n) {
                    var r = {
                        type: String(e)
                    };
                    return null == n && ("string" == typeof t || Array.isArray(t)) ? n = t : Object.assign(r, t), Array.isArray(n) ? r.children = n : null != n && (r.value = String(n)), r
                },
                ez = n(6393);
            let eM = eR("start"),
                eI = eR("end");

            function eR(e) {
                return function(t) {
                    let n = t && t.position && t.position[e] || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: n.offset > -1 ? n.offset : null
                    }
                }
            }
            let ej = {}.hasOwnProperty;

            function eB(e) {
                return String(e || "").toUpperCase()
            }
            let e_ = {}.hasOwnProperty;

            function eN(e, t) {
                let n = t.data || {};
                return "value" in t && !(e_.call(n, "hName") || e_.call(n, "hProperties") || e_.call(n, "hChildren")) ? e.augment(t, eT("text", t.value)) : e(t, "div", eq(e, t))
            }

            function eH(e, t, n) {
                let r;
                let i = t && t.type;
                if (!i) throw Error("Expected node, got `" + t + "`");
                return ("function" == typeof(r = e_.call(e.handlers, i) ? e.handlers[i] : e.passThrough && e.passThrough.includes(i) ? eU : e.unknownHandler) ? r : eN)(e, t, n)
            }

            function eU(e, t) {
                return "children" in t ? { ...t,
                    children: eq(e, t)
                } : t
            }

            function eq(e, t) {
                let n = [];
                if ("children" in t) {
                    let r = t.children,
                        i = -1;
                    for (; ++i < r.length;) {
                        let o = eH(e, r[i], t);
                        if (o) {
                            if (i && "break" === r[i - 1].type && (Array.isArray(o) || "text" !== o.type || (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && "element" === o.type)) {
                                let l = o.children[0];
                                l && "text" === l.type && (l.value = l.value.replace(/^\s+/, ""))
                            }
                            Array.isArray(o) ? n.push(...o) : n.push(o)
                        }
                    }
                }
                return n
            }
            var e$ = n(75364);

            function eV(e) {
                let t = [],
                    n = -1,
                    r = 0,
                    i = 0;
                for (; ++n < e.length;) {
                    let o = e.charCodeAt(n),
                        l = "";
                    if (37 === o && (0, e$.H$)(e.charCodeAt(n + 1)) && (0, e$.H$)(e.charCodeAt(n + 2))) i = 2;
                    else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
                    else if (o > 55295 && o < 57344) {
                        let u = e.charCodeAt(n + 1);
                        o < 56320 && u > 56319 && u < 57344 ? (l = String.fromCharCode(o, u), i = 1) : l = "�"
                    } else l = String.fromCharCode(o);
                    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0)
                }
                return t.join("") + e.slice(r)
            }

            function eY(e, t) {
                let n = [],
                    r = -1;
                for (t && n.push(eT("text", "\n")); ++r < e.length;) r && n.push(eT("text", "\n")), n.push(e[r]);
                return t && e.length > 0 && n.push(eT("text", "\n")), n
            }

            function eW(e, t) {
                let n;
                let r = String(t.identifier),
                    i = eV(r.toLowerCase()),
                    o = e.footnoteOrder.indexOf(r); - 1 === o ? (e.footnoteOrder.push(r), e.footnoteCounts[r] = 1, n = e.footnoteOrder.length) : (e.footnoteCounts[r]++, n = o + 1);
                let l = e.footnoteCounts[r];
                return e(t, "sup", [e(t.position, "a", {
                    href: "#" + e.clobberPrefix + "fn-" + i,
                    id: e.clobberPrefix + "fnref-" + i + (l > 1 ? "-" + l : ""),
                    dataFootnoteRef: !0,
                    ariaDescribedBy: "footnote-label"
                }, [eT("text", String(n))])])
            }

            function eX(e, t) {
                let n = t.referenceType,
                    r = "]";
                if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return eT("text", "![" + t.alt + r);
                let i = eq(e, t),
                    o = i[0];
                o && "text" === o.type ? o.value = "[" + o.value : i.unshift(eT("text", "["));
                let l = i[i.length - 1];
                return l && "text" === l.type ? l.value += r : i.push(eT("text", r)), i
            }

            function eQ(e) {
                let t = e.spread;
                return null == t ? e.children.length > 1 : t
            }

            function eK(e, t, n) {
                let r = 0,
                    i = e.length;
                if (t) {
                    let o = e.codePointAt(r);
                    for (; 9 === o || 32 === o;) r++, o = e.codePointAt(r)
                }
                if (n) {
                    let l = e.codePointAt(i - 1);
                    for (; 9 === l || 32 === l;) i--, l = e.codePointAt(i - 1)
                }
                return i > r ? e.slice(r, i) : ""
            }
            let eG = {
                blockquote: function(e, t) {
                    return e(t, "blockquote", eY(eq(e, t), !0))
                },
                break: function(e, t) {
                    return [e(t, "br"), eT("text", "\n")]
                },
                code: function(e, t) {
                    let n = t.value ? t.value + "\n" : "",
                        r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                        i = {};
                    r && (i.className = ["language-" + r]);
                    let o = e(t, "code", i, [eT("text", n)]);
                    return t.meta && (o.data = {
                        meta: t.meta
                    }), e(t.position, "pre", [o])
                },
                delete: function(e, t) {
                    return e(t, "del", eq(e, t))
                },
                emphasis: function(e, t) {
                    return e(t, "em", eq(e, t))
                },
                footnoteReference: eW,
                footnote: function(e, t) {
                    let n = e.footnoteById,
                        r = 1;
                    for (;
                        (r in n);) r++;
                    let i = String(r);
                    return n[i] = {
                        type: "footnoteDefinition",
                        identifier: i,
                        children: [{
                            type: "paragraph",
                            children: t.children
                        }],
                        position: t.position
                    }, eW(e, {
                        type: "footnoteReference",
                        identifier: i,
                        position: t.position
                    })
                },
                heading: function(e, t) {
                    return e(t, "h" + t.depth, eq(e, t))
                },
                html: function(e, t) {
                    return e.dangerous ? e.augment(t, eT("raw", t.value)) : null
                },
                imageReference: function(e, t) {
                    let n = e.definition(t.identifier);
                    if (!n) return eX(e, t);
                    let r = {
                        src: eV(n.url || ""),
                        alt: t.alt
                    };
                    return null !== n.title && void 0 !== n.title && (r.title = n.title), e(t, "img", r)
                },
                image: function(e, t) {
                    let n = {
                        src: eV(t.url),
                        alt: t.alt
                    };
                    return null !== t.title && void 0 !== t.title && (n.title = t.title), e(t, "img", n)
                },
                inlineCode: function(e, t) {
                    return e(t, "code", [eT("text", t.value.replace(/\r?\n|\r/g, " "))])
                },
                linkReference: function(e, t) {
                    let n = e.definition(t.identifier);
                    if (!n) return eX(e, t);
                    let r = {
                        href: eV(n.url || "")
                    };
                    return null !== n.title && void 0 !== n.title && (r.title = n.title), e(t, "a", r, eq(e, t))
                },
                link: function(e, t) {
                    let n = {
                        href: eV(t.url)
                    };
                    return null !== t.title && void 0 !== t.title && (n.title = t.title), e(t, "a", n, eq(e, t))
                },
                listItem: function(e, t, n) {
                    let r = eq(e, t),
                        i = n ? function(e) {
                            let t = e.spread,
                                n = e.children,
                                r = -1;
                            for (; !t && ++r < n.length;) t = eQ(n[r]);
                            return Boolean(t)
                        }(n) : eQ(t),
                        o = {},
                        l = [];
                    if ("boolean" == typeof t.checked) {
                        let u;
                        r[0] && "element" === r[0].type && "p" === r[0].tagName ? u = r[0] : (u = e(null, "p", []), r.unshift(u)), u.children.length > 0 && u.children.unshift(eT("text", " ")), u.children.unshift(e(null, "input", {
                            type: "checkbox",
                            checked: t.checked,
                            disabled: !0
                        })), o.className = ["task-list-item"]
                    }
                    let a = -1;
                    for (; ++a < r.length;) {
                        let s = r[a];
                        (i || 0 !== a || "element" !== s.type || "p" !== s.tagName) && l.push(eT("text", "\n")), "element" !== s.type || "p" !== s.tagName || i ? l.push(s) : l.push(...s.children)
                    }
                    let c = r[r.length - 1];
                    return !c || !i && "tagName" in c && "p" === c.tagName || l.push(eT("text", "\n")), e(t, "li", o, l)
                },
                list: function(e, t) {
                    let n = {},
                        r = t.ordered ? "ol" : "ul",
                        i = eq(e, t),
                        o = -1;
                    for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++o < i.length;) {
                        let l = i[o];
                        if ("element" === l.type && "li" === l.tagName && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
                            n.className = ["contains-task-list"];
                            break
                        }
                    }
                    return e(t, r, n, eY(i, !0))
                },
                paragraph: function(e, t) {
                    return e(t, "p", eq(e, t))
                },
                root: function(e, t) {
                    return e.augment(t, eT("root", eY(eq(e, t))))
                },
                strong: function(e, t) {
                    return e(t, "strong", eq(e, t))
                },
                table: function(e, t) {
                    let n = t.children,
                        r = -1,
                        i = t.align || [],
                        o = [];
                    for (; ++r < n.length;) {
                        let l = n[r].children,
                            u = 0 === r ? "th" : "td",
                            a = [],
                            s = -1,
                            c = t.align ? i.length : l.length;
                        for (; ++s < c;) {
                            let f = l[s];
                            a.push(e(f, u, {
                                align: i[s]
                            }, f ? eq(e, f) : []))
                        }
                        o[r] = e(n[r], "tr", eY(a, !0))
                    }
                    return e(t, "table", eY([e(o[0].position, "thead", eY([o[0]], !0))].concat(o[1] ? e({
                        start: eM(o[1]),
                        end: eI(o[o.length - 1])
                    }, "tbody", eY(o.slice(1), !0)) : []), !0))
                },
                text: function(e, t) {
                    return e.augment(t, eT("text", function(e) {
                        let t = String(e),
                            n = /\r?\n|\r/g,
                            r = n.exec(t),
                            i = 0,
                            o = [];
                        for (; r;) o.push(eK(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
                        return o.push(eK(t.slice(i), i > 0, !1)), o.join("")
                    }(String(t.value))))
                },
                thematicBreak: function(e, t) {
                    return e(t, "hr")
                },
                toml: eZ,
                yaml: eZ,
                definition: eZ,
                footnoteDefinition: eZ
            };

            function eZ() {
                return null
            }
            let eJ = {}.hasOwnProperty;

            function e0(e = {}) {
                let t;
                let n = { ...e
                };
                "boolean" == typeof n.sanitize && (t = n.sanitize, n.sanitize = void 0), "boolean" != typeof t && (t = !0), Object.assign(this, {
                    Compiler: function(e, r) {
                        var i, o, l;
                        let u = function(e, t) {
                                let n = function(e, t) {
                                        let n = t || {},
                                            r = n.allowDangerousHtml || !1,
                                            i = {};
                                        return l.dangerous = r, l.clobberPrefix = void 0 === n.clobberPrefix || null === n.clobberPrefix ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteLabelTagName = n.footnoteLabelTagName || "h2", l.footnoteLabelProperties = n.footnoteLabelProperties || {
                                            className: ["sr-only"]
                                        }, l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.definition = function(e) {
                                            let t = Object.create(null);
                                            if (!e || !e.type) throw Error("mdast-util-definitions expected node");
                                            return (0, ez.Vn)(e, "definition", e => {
                                                    let n = eB(e.identifier);
                                                    n && !ej.call(t, n) && (t[n] = e)
                                                }),
                                                function(e) {
                                                    let n = eB(e);
                                                    return n && ej.call(t, n) ? t[n] : null
                                                }
                                        }(e), l.footnoteById = i, l.footnoteOrder = [], l.footnoteCounts = {}, l.augment = o, l.handlers = { ...eG,
                                            ...n.handlers
                                        }, l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, (0, ez.Vn)(e, "footnoteDefinition", e => {
                                            let t = String(e.identifier).toUpperCase();
                                            eJ.call(i, t) || (i[t] = e)
                                        }), l;

                                        function o(e, t) {
                                            if (e && "data" in e && e.data) {
                                                let n = e.data;
                                                n.hName && ("element" !== t.type && (t = {
                                                    type: "element",
                                                    tagName: "",
                                                    properties: {},
                                                    children: []
                                                }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = { ...t.properties,
                                                    ...n.hProperties
                                                }), "children" in t && t.children && n.hChildren && (t.children = n.hChildren)
                                            }
                                            if (e) {
                                                let r = "type" in e ? e : {
                                                    position: e
                                                };
                                                !r || !r.position || !r.position.start || !r.position.start.line || !r.position.start.column || !r.position.end || !r.position.end.line || !r.position.end.column || (t.position = {
                                                    start: eM(r),
                                                    end: eI(r)
                                                })
                                            }
                                            return t
                                        }

                                        function l(e, t, n, r) {
                                            return Array.isArray(n) && (r = n, n = {}), o(e, {
                                                type: "element",
                                                tagName: t,
                                                properties: n || {},
                                                children: r || []
                                            })
                                        }
                                    }(e, t),
                                    r = eH(n, e, null),
                                    i = function(e) {
                                        let t = -1,
                                            n = [];
                                        for (; ++t < e.footnoteOrder.length;) {
                                            let r = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
                                            if (!r) continue;
                                            let i = eq(e, r),
                                                o = String(r.identifier),
                                                l = eV(o.toLowerCase()),
                                                u = 0,
                                                a = [];
                                            for (; ++u <= e.footnoteCounts[o];) {
                                                let s = {
                                                    type: "element",
                                                    tagName: "a",
                                                    properties: {
                                                        href: "#" + e.clobberPrefix + "fnref-" + l + (u > 1 ? "-" + u : ""),
                                                        dataFootnoteBackref: !0,
                                                        className: ["data-footnote-backref"],
                                                        ariaLabel: e.footnoteBackLabel
                                                    },
                                                    children: [{
                                                        type: "text",
                                                        value: "↩"
                                                    }]
                                                };
                                                u > 1 && s.children.push({
                                                    type: "element",
                                                    tagName: "sup",
                                                    children: [{
                                                        type: "text",
                                                        value: String(u)
                                                    }]
                                                }), a.length > 0 && a.push({
                                                    type: "text",
                                                    value: " "
                                                }), a.push(s)
                                            }
                                            let c = i[i.length - 1];
                                            if (c && "element" === c.type && "p" === c.tagName) {
                                                let f = c.children[c.children.length - 1];
                                                f && "text" === f.type ? f.value += " " : c.children.push({
                                                    type: "text",
                                                    value: " "
                                                }), c.children.push(...a)
                                            } else i.push(...a);
                                            let p = {
                                                type: "element",
                                                tagName: "li",
                                                properties: {
                                                    id: e.clobberPrefix + "fn-" + l
                                                },
                                                children: eY(i, !0)
                                            };
                                            r.position && (p.position = r.position), n.push(p)
                                        }
                                        return 0 === n.length ? null : {
                                            type: "element",
                                            tagName: "section",
                                            properties: {
                                                dataFootnotes: !0,
                                                className: ["footnotes"]
                                            },
                                            children: [{
                                                type: "element",
                                                tagName: e.footnoteLabelTagName,
                                                properties: { ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                                                    id: "footnote-label"
                                                },
                                                children: [eT("text", e.footnoteLabel)]
                                            }, {
                                                type: "text",
                                                value: "\n"
                                            }, {
                                                type: "element",
                                                tagName: "ol",
                                                properties: {},
                                                children: eY(n, !0)
                                            }, {
                                                type: "text",
                                                value: "\n"
                                            }]
                                        }
                                    }(n);
                                return i && r.children.push(eT("text", "\n"), i), Array.isArray(r) ? {
                                    type: "root",
                                    children: r
                                } : r
                            }(e, {
                                allowDangerousHtml: !t,
                                handlers: n.handlers
                            }),
                            a = t ? (i = n.sanitize, l = {
                                type: "root",
                                children: []
                            }, u && "object" == typeof u && u.type && (o = ew(Object.assign({}, eb, i || {}), u, [])) && (Array.isArray(o) ? 1 === o.length ? l = o[0] : l.children = o : l = o), l) : u,
                            s = function(e, t = {}) {
                                let n = t.quote || '"';
                                if ('"' !== n && "'" !== n) throw Error("Invalid quote `" + n + "`, expected `'` or `\"`");
                                let r = {
                                    valid: t.allowParseErrors ? 0 : 1,
                                    safe: t.allowDangerousCharacters ? 0 : 1,
                                    schema: "svg" === t.space ? L : D,
                                    omit: t.omitOptionalTags ? Z : void 0,
                                    quote: n,
                                    alternative: '"' === n ? "'" : '"',
                                    smart: t.quoteSmart,
                                    unquoted: t.preferUnquoted,
                                    tight: t.tightAttributes,
                                    upperDoctype: t.upperDoctype,
                                    tightDoctype: t.tightDoctype,
                                    bogusComments: t.bogusComments,
                                    tightLists: t.tightCommaSeparatedLists,
                                    tightClose: t.tightSelfClosing,
                                    collapseEmpty: t.collapseEmptyAttributes,
                                    dangerous: t.allowDangerousHtml,
                                    voids: t.voids || T.concat(),
                                    entities: t.entities || {},
                                    close: t.closeSelfClosing,
                                    closeEmpty: t.closeEmptyElements
                                };
                                return ex(r, Array.isArray(e) ? {
                                    type: "root",
                                    children: e
                                } : e, null, null)
                            }(a, Object.assign({}, n, {
                                allowDangerousHtml: !t
                            }));
                        return r.extname && (r.extname = ".html"), e && e.type && "root" === e.type && s && /[^\r\n]/.test(s.charAt(s.length - 1)) ? s + "\n" : s
                    }
                })
            }
        },
        9719: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return tA
                }
            });
            var r = {};

            function i(e) {
                if (e) throw e
            }
            n.r(r), n.d(r, {
                attentionMarkers: function() {
                    return e_
                },
                contentInitial: function() {
                    return ez
                },
                disable: function() {
                    return eN
                },
                document: function() {
                    return eT
                },
                flow: function() {
                    return eI
                },
                flowInitial: function() {
                    return eM
                },
                insideSpan: function() {
                    return eB
                },
                string: function() {
                    return eR
                },
                text: function() {
                    return ej
                }
            });
            var o = n(48738),
                l = n(94470);

            function u(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = Object.getPrototypeOf(e);
                return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }

            function a(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? c(e.position) : "start" in e || "end" in e ? c(e) : "line" in e || "column" in e ? s(e) : "" : ""
            }

            function s(e) {
                return f(e && e.line) + ":" + f(e && e.column)
            }

            function c(e) {
                return s(e && e.start) + "-" + s(e && e.end)
            }

            function f(e) {
                return e && "number" == typeof e ? e : 1
            }
            class p extends Error {
                constructor(e, t, n) {
                    let r = [null, null],
                        i = {
                            start: {
                                line: null,
                                column: null
                            },
                            end: {
                                line: null,
                                column: null
                            }
                        };
                    if (super(), "string" == typeof t && (n = t, t = void 0), "string" == typeof n) {
                        let o = n.indexOf(":"); - 1 === o ? r[1] = n : (r[0] = n.slice(0, o), r[1] = n.slice(o + 1))
                    }
                    t && ("type" in t || "position" in t ? t.position && (i = t.position) : "start" in t || "end" in t ? i = t : ("line" in t || "column" in t) && (i.start = t)), this.name = a(t) || "1:1", this.message = "object" == typeof e ? e.message : e, this.stack = "", "object" == typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
                }
            }
            p.prototype.file = "", p.prototype.name = "", p.prototype.reason = "", p.prototype.message = "", p.prototype.stack = "", p.prototype.fatal = null, p.prototype.column = null, p.prototype.line = null, p.prototype.source = null, p.prototype.ruleId = null, p.prototype.position = null;
            let h = {
                basename: function(e, t) {
                    let n;
                    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                    d(e);
                    let r = 0,
                        i = -1,
                        o = e.length;
                    if (void 0 === t || 0 === t.length || t.length > e.length) {
                        for (; o--;)
                            if (47 === e.charCodeAt(o)) {
                                if (n) {
                                    r = o + 1;
                                    break
                                }
                            } else i < 0 && (n = !0, i = o + 1);
                        return i < 0 ? "" : e.slice(r, i)
                    }
                    if (t === e) return "";
                    let l = -1,
                        u = t.length - 1;
                    for (; o--;)
                        if (47 === e.charCodeAt(o)) {
                            if (n) {
                                r = o + 1;
                                break
                            }
                        } else l < 0 && (n = !0, l = o + 1), u > -1 && (e.charCodeAt(o) === t.charCodeAt(u--) ? u < 0 && (i = o) : (u = -1, i = l));
                    return r === i ? i = l : i < 0 && (i = e.length), e.slice(r, i)
                },
                dirname: function(e) {
                    let t;
                    if (d(e), 0 === e.length) return ".";
                    let n = -1,
                        r = e.length;
                    for (; --r;)
                        if (47 === e.charCodeAt(r)) {
                            if (t) {
                                n = r;
                                break
                            }
                        } else t || (t = !0);
                    return n < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === n && 47 === e.charCodeAt(0) ? "//" : e.slice(0, n)
                },
                extname: function(e) {
                    let t;
                    d(e);
                    let n = e.length,
                        r = -1,
                        i = 0,
                        o = -1,
                        l = 0;
                    for (; n--;) {
                        let u = e.charCodeAt(n);
                        if (47 === u) {
                            if (t) {
                                i = n + 1;
                                break
                            }
                            continue
                        }
                        r < 0 && (t = !0, r = n + 1), 46 === u ? o < 0 ? o = n : 1 !== l && (l = 1) : o > -1 && (l = -1)
                    }
                    return o < 0 || r < 0 || 0 === l || 1 === l && o === r - 1 && o === i + 1 ? "" : e.slice(o, r)
                },
                join: function(...e) {
                    let t, n = -1;
                    for (; ++n < e.length;) d(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
                    return void 0 === t ? "." : function(e) {
                        d(e);
                        let t = 47 === e.charCodeAt(0),
                            n = function(e, t) {
                                let n, r, i = "",
                                    o = 0,
                                    l = -1,
                                    u = 0,
                                    a = -1;
                                for (; ++a <= e.length;) {
                                    if (a < e.length) n = e.charCodeAt(a);
                                    else if (47 === n) break;
                                    else n = 47;
                                    if (47 === n) {
                                        if (l === a - 1 || 1 === u);
                                        else if (l !== a - 1 && 2 === u) {
                                            if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                                                if (i.length > 2) {
                                                    if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                                        r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), l = a, u = 0;
                                                        continue
                                                    }
                                                } else if (i.length > 0) {
                                                    i = "", o = 0, l = a, u = 0;
                                                    continue
                                                }
                                            }
                                            t && (i = i.length > 0 ? i + "/.." : "..", o = 2)
                                        } else i.length > 0 ? i += "/" + e.slice(l + 1, a) : i = e.slice(l + 1, a), o = a - l - 1;
                                        l = a, u = 0
                                    } else 46 === n && u > -1 ? u++ : u = -1
                                }
                                return i
                            }(e, !t);
                        return 0 !== n.length || t || (n = "."), n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
                    }(t)
                },
                sep: "/"
            };

            function d(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            let g = {
                cwd: function() {
                    return "/"
                }
            };

            function m(e) {
                return null !== e && "object" == typeof e && e.href && e.origin
            }
            let y = ["history", "path", "basename", "stem", "extname", "dirname"];
            class x {
                constructor(e) {
                    let t, n;
                    t = e ? "string" == typeof e || o(e) ? {
                        value: e
                    } : m(e) ? {
                        path: e
                    } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = g.cwd(), this.value, this.stored, this.result, this.map;
                    let r = -1;
                    for (; ++r < y.length;) {
                        let i = y[r];
                        i in t && void 0 !== t[i] && (this[i] = "history" === i ? [...t[i]] : t[i])
                    }
                    for (n in t) y.includes(n) || (this[n] = t[n])
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    m(e) && (e = function(e) {
                        if ("string" == typeof e) e = new URL(e);
                        else if (!m(e)) {
                            let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                            throw t.code = "ERR_INVALID_ARG_TYPE", t
                        }
                        if ("file:" !== e.protocol) {
                            let n = TypeError("The URL must be of scheme file");
                            throw n.code = "ERR_INVALID_URL_SCHEME", n
                        }
                        return function(e) {
                            if ("" !== e.hostname) {
                                let t = TypeError('File URL host must be "localhost" or empty on darwin');
                                throw t.code = "ERR_INVALID_FILE_URL_HOST", t
                            }
                            let n = e.pathname,
                                r = -1;
                            for (; ++r < n.length;)
                                if (37 === n.charCodeAt(r) && 50 === n.charCodeAt(r + 1)) {
                                    let i = n.charCodeAt(r + 2);
                                    if (70 === i || 102 === i) {
                                        let o = TypeError("File URL path must not include encoded / characters");
                                        throw o.code = "ERR_INVALID_FILE_URL_PATH", o
                                    }
                                }
                            return decodeURIComponent(n)
                        }(e)
                    }(e)), b(e, "path"), this.path !== e && this.history.push(e)
                }
                get dirname() {
                    return "string" == typeof this.path ? h.dirname(this.path) : void 0
                }
                set dirname(e) {
                    k(this.basename, "dirname"), this.path = h.join(e || "", this.basename)
                }
                get basename() {
                    return "string" == typeof this.path ? h.basename(this.path) : void 0
                }
                set basename(e) {
                    b(e, "basename"), v(e, "basename"), this.path = h.join(this.dirname || "", e)
                }
                get extname() {
                    return "string" == typeof this.path ? h.extname(this.path) : void 0
                }
                set extname(e) {
                    if (v(e, "extname"), k(this.dirname, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                    }
                    this.path = h.join(this.dirname, this.stem + (e || ""))
                }
                get stem() {
                    return "string" == typeof this.path ? h.basename(this.path, this.extname) : void 0
                }
                set stem(e) {
                    b(e, "stem"), v(e, "stem"), this.path = h.join(this.dirname || "", e + (this.extname || ""))
                }
                toString(e) {
                    return (this.value || "").toString(e)
                }
                message(e, t, n) {
                    let r = new p(e, t, n);
                    return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
                }
                info(e, t, n) {
                    let r = this.message(e, t, n);
                    return r.fatal = null, r
                }
                fail(e, t, n) {
                    let r = this.message(e, t, n);
                    throw r.fatal = !0, r
                }
            }

            function v(e, t) {
                if (e && e.includes(h.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + h.sep + "`")
            }

            function b(e, t) {
                if (!e) throw Error("`" + t + "` cannot be empty")
            }

            function k(e, t) {
                if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
            }
            let S = (function e() {
                    let t;
                    let n = function() {
                            let e = [],
                                t = {
                                    run: function(...t) {
                                        let n = -1,
                                            r = t.pop();
                                        if ("function" != typeof r) throw TypeError("Expected function as last argument, not " + r);
                                        ! function i(o, ...l) {
                                            let u = e[++n],
                                                a = -1;
                                            if (o) {
                                                r(o);
                                                return
                                            }
                                            for (; ++a < t.length;)(null === l[a] || void 0 === l[a]) && (l[a] = t[a]);
                                            t = l, u ? (function(e, t) {
                                                let n;
                                                return function(...t) {
                                                    let o;
                                                    let l = e.length > t.length;
                                                    l && t.push(r);
                                                    try {
                                                        o = e.apply(this, t)
                                                    } catch (u) {
                                                        if (l && n) throw u;
                                                        return r(u)
                                                    }
                                                    l || (o instanceof Promise ? o.then(i, r) : o instanceof Error ? r(o) : i(o))
                                                };

                                                function r(e, ...r) {
                                                    n || (n = !0, t(e, ...r))
                                                }

                                                function i(e) {
                                                    r(null, e)
                                                }
                                            })(u, i)(...l) : r(null, ...l)
                                        }(null, ...t)
                                    },
                                    use: function(n) {
                                        if ("function" != typeof n) throw TypeError("Expected `middelware` to be a function, not " + n);
                                        return e.push(n), t
                                    }
                                };
                            return t
                        }(),
                        r = [],
                        a = {},
                        s = -1;
                    return c.data = function(e, n) {
                        return "string" == typeof e ? 2 == arguments.length ? (O("data", t), a[e] = n, c) : C.call(a, e) && a[e] || null : e ? (O("data", t), a = e, c) : a
                    }, c.Parser = void 0, c.Compiler = void 0, c.freeze = function() {
                        if (t) return c;
                        for (; ++s < r.length;) {
                            let [e, ...i] = r[s];
                            if (!1 === i[0]) continue;
                            !0 === i[0] && (i[0] = void 0);
                            let o = e.call(c, ...i);
                            "function" == typeof o && n.use(o)
                        }
                        return t = !0, s = Number.POSITIVE_INFINITY, c
                    }, c.attachers = r, c.use = function(e, ...n) {
                        let i;
                        if (O("use", t), null == e);
                        else if ("function" == typeof e) f(e, ...n);
                        else if ("object" == typeof e) Array.isArray(e) ? s(e) : o(e);
                        else throw TypeError("Expected usable value, not `" + e + "`");
                        return i && (a.settings = Object.assign(a.settings || {}, i)), c;

                        function o(e) {
                            s(e.plugins), e.settings && (i = Object.assign(i || {}, e.settings))
                        }

                        function s(e) {
                            let t = -1;
                            if (null == e);
                            else if (Array.isArray(e))
                                for (; ++t < e.length;) {
                                    let n = e[t];
                                    ! function(e) {
                                        if ("function" == typeof e) f(e);
                                        else if ("object" == typeof e) {
                                            if (Array.isArray(e)) {
                                                let [t, ...n] = e;
                                                f(t, ...n)
                                            } else o(e)
                                        } else throw TypeError("Expected usable value, not `" + e + "`")
                                    }(n)
                                } else throw TypeError("Expected a list of plugins, not `" + e + "`")
                        }

                        function f(e, t) {
                            let n, i = -1;
                            for (; ++i < r.length;)
                                if (r[i][0] === e) {
                                    n = r[i];
                                    break
                                }
                            n ? (u(n[1]) && u(t) && (t = l(!0, n[1], t)), n[1] = t) : r.push([...arguments])
                        }
                    }, c.parse = function(e) {
                        c.freeze();
                        let t = D(e),
                            n = c.Parser;
                        return (E("parse", n), w(n, "parse")) ? new n(String(t), t).parse() : n(String(t), t)
                    }, c.stringify = function(e, t) {
                        c.freeze();
                        let n = D(t),
                            r = c.Compiler;
                        return (A("stringify", r), F(e), w(r, "compile")) ? new r(e, n).compile() : r(e, n)
                    }, c.run = function(e, t, r) {
                        if (F(e), c.freeze(), r || "function" != typeof t || (r = t, t = void 0), !r) return new Promise(i);

                        function i(i, o) {
                            n.run(e, D(t), function(t, n, l) {
                                n = n || e, t ? o(t) : i ? i(n) : r(null, n, l)
                            })
                        }
                        i(null, r)
                    }, c.runSync = function(e, t) {
                        let n, r;
                        return c.run(e, t, function(e, t) {
                            i(e), n = t, r = !0
                        }), P("runSync", "run", r), n
                    }, c.process = function(e, t) {
                        if (c.freeze(), E("process", c.Parser), A("process", c.Compiler), !t) return new Promise(n);

                        function n(n, r) {
                            let i = D(e);

                            function l(e, i) {
                                e || !i ? r(e) : n ? n(i) : t(null, i)
                            }
                            c.run(c.parse(i), i, (e, t, n) => {
                                if (!e && t && n) {
                                    let r = c.stringify(t, n);
                                    null == r || ("string" == typeof r || o(r) ? n.value = r : n.result = r), l(e, n)
                                } else l(e)
                            })
                        }
                        n(null, t)
                    }, c.processSync = function(e) {
                        let t;
                        c.freeze(), E("processSync", c.Parser), A("processSync", c.Compiler);
                        let n = D(e);
                        return c.process(n, function(e) {
                            t = !0, i(e)
                        }), P("processSync", "process", t), n
                    }, c;

                    function c() {
                        let t = e(),
                            n = -1;
                        for (; ++n < r.length;) t.use(...r[n]);
                        return t.data(l(!0, {}, a)), t
                    }
                })().freeze(),
                C = {}.hasOwnProperty;

            function w(e, t) {
                return "function" == typeof e && e.prototype && (function(e) {
                    let t;
                    for (t in e)
                        if (C.call(e, t)) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function E(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Parser`")
            }

            function A(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Compiler`")
            }

            function O(e, t) {
                if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function F(e) {
                if (!u(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
            }

            function P(e, t, n) {
                if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
            }

            function D(e) {
                return Boolean(e && "object" == typeof e && "message" in e && "messages" in e) ? e : new x(e)
            }

            function L(e, t) {
                var {
                    includeImageAlt: n = !0
                } = t || {};
                return T(e, n)
            }

            function T(e, t) {
                return e && "object" == typeof e && (e.value || (t ? e.alt : "") || "children" in e && z(e.children, t) || Array.isArray(e) && z(e, t)) || ""
            }

            function z(e, t) {
                for (var n = [], r = -1; ++r < e.length;) n[r] = T(e[r], t);
                return n.join("")
            }

            function M(e, t, n, r) {
                let i;
                let o = e.length,
                    l = 0;
                if (t = t < 0 ? -t > o ? 0 : o + t : t > o ? o : t, n = n > 0 ? n : 0, r.length < 1e4)(i = Array.from(r)).unshift(t, n), [].splice.apply(e, i);
                else
                    for (n && [].splice.apply(e, [t, n]); l < r.length;)(i = r.slice(l, l + 1e4)).unshift(t, 0), [].splice.apply(e, i), l += 1e4, t += 1e4
            }

            function I(e, t) {
                return e.length > 0 ? (M(e, e.length, 0, t), e) : t
            }
            let R = {}.hasOwnProperty;
            var j = n(75364);

            function B(e, t, n, r) {
                let i = r ? r - 1 : Number.POSITIVE_INFINITY,
                    o = 0;
                return function(r) {
                    return (0, j.xz)(r) ? (e.enter(n), function r(l) {
                        return (0, j.xz)(l) && o++ < i ? (e.consume(l), r) : (e.exit(n), t(l))
                    }(r)) : t(r)
                }
            }
            let _ = {
                    tokenize: function(e) {
                        let t;
                        let n = e.attempt(this.parser.constructs.contentInitial, function(t) {
                            if (null === t) {
                                e.consume(t);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B(e, n, "linePrefix")
                        }, function(n) {
                            return e.enter("paragraph"),
                                function n(r) {
                                    let i = e.enter("chunkText", {
                                        contentType: "text",
                                        previous: t
                                    });
                                    return t && (t.next = i), t = i,
                                        function t(r) {
                                            if (null === r) {
                                                e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                                                return
                                            }
                                            return (0, j.Ch)(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t)
                                        }(r)
                                }(n)
                        });
                        return n
                    }
                },
                N = {
                    tokenize: function(e) {
                        let t, n, r;
                        let i = this,
                            o = [],
                            l = 0;
                        return u;

                        function u(t) {
                            if (l < o.length) {
                                let n = o[l];
                                return i.containerState = n[1], e.attempt(n[0].continuation, a, s)(t)
                            }
                            return s(t)
                        }

                        function a(e) {
                            if (l++, i.containerState._closeFlow) {
                                let n;
                                i.containerState._closeFlow = void 0, t && y();
                                let r = i.events.length,
                                    o = r;
                                for (; o--;)
                                    if ("exit" === i.events[o][0] && "chunkFlow" === i.events[o][1].type) {
                                        n = i.events[o][1].end;
                                        break
                                    }
                                m(l);
                                let a = r;
                                for (; a < i.events.length;) i.events[a][1].end = Object.assign({}, n), a++;
                                return M(i.events, o + 1, 0, i.events.slice(r)), i.events.length = a, s(e)
                            }
                            return u(e)
                        }

                        function s(n) {
                            if (l === o.length) {
                                if (!t) return p(n);
                                if (t.currentConstruct && t.currentConstruct.concrete) return d(n);
                                i.interrupt = Boolean(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                            }
                            return i.containerState = {}, e.check(H, c, f)(n)
                        }

                        function c(e) {
                            return t && y(), m(l), p(e)
                        }

                        function f(e) {
                            return i.parser.lazy[i.now().line] = l !== o.length, r = i.now().offset, d(e)
                        }

                        function p(t) {
                            return i.containerState = {}, e.attempt(H, h, d)(t)
                        }

                        function h(e) {
                            return l++, o.push([i.currentConstruct, i.containerState]), p(e)
                        }

                        function d(r) {
                            if (null === r) {
                                t && y(), m(0), e.consume(r);
                                return
                            }
                            return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
                                    contentType: "flow",
                                    previous: n,
                                    _tokenizer: t
                                }),
                                function t(n) {
                                    if (null === n) {
                                        g(e.exit("chunkFlow"), !0), m(0), e.consume(n);
                                        return
                                    }
                                    return (0, j.Ch)(n) ? (e.consume(n), g(e.exit("chunkFlow")), l = 0, i.interrupt = void 0, u) : (e.consume(n), t)
                                }(r)
                        }

                        function g(e, o) {
                            let u = i.sliceStream(e);
                            if (o && u.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(u), i.parser.lazy[e.start.line]) {
                                let a, s, c = t.events.length;
                                for (; c--;)
                                    if (t.events[c][1].start.offset < r && (!t.events[c][1].end || t.events[c][1].end.offset > r)) return;
                                let f = i.events.length,
                                    p = f;
                                for (; p--;)
                                    if ("exit" === i.events[p][0] && "chunkFlow" === i.events[p][1].type) {
                                        if (a) {
                                            s = i.events[p][1].end;
                                            break
                                        }
                                        a = !0
                                    }
                                for (m(l), c = f; c < i.events.length;) i.events[c][1].end = Object.assign({}, s), c++;
                                M(i.events, p + 1, 0, i.events.slice(f)), i.events.length = c
                            }
                        }

                        function m(t) {
                            let n = o.length;
                            for (; n-- > t;) {
                                let r = o[n];
                                i.containerState = r[1], r[0].exit.call(i, e)
                            }
                            o.length = t
                        }

                        function y() {
                            t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0
                        }
                    }
                },
                H = {
                    tokenize: function(e, t, n) {
                        return B(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                },
                U = {
                    tokenize: function(e, t, n) {
                        return B(e, function(e) {
                            return null === e || (0, j.Ch)(e) ? t(e) : n(e)
                        }, "linePrefix")
                    },
                    partial: !0
                };

            function q(e) {
                let t, n, r, i, o, l, u;
                let a = {},
                    s = -1;
                for (; ++s < e.length;) {
                    for (;
                        (s in a);) s = a[s];
                    if (t = e[s], s && "chunkFlow" === t[1].type && "listItemPrefix" === e[s - 1][1].type && ((r = 0) < (l = t[1]._tokenizer.events).length && "lineEndingBlank" === l[r][1].type && (r += 2), r < l.length && "content" === l[r][1].type))
                        for (; ++r < l.length && "content" !== l[r][1].type;) "chunkText" === l[r][1].type && (l[r][1]._isInFirstContentOfListItem = !0, r++);
                    if ("enter" === t[0]) t[1].contentType && (Object.assign(a, function(e, t) {
                        let n, r;
                        let i = e[t][1],
                            o = e[t][2],
                            l = t - 1,
                            u = [],
                            a = i._tokenizer || o.parser[i.contentType](i.start),
                            s = a.events,
                            c = [],
                            f = {},
                            p = -1,
                            h = i,
                            d = 0,
                            g = 0,
                            m = [g];
                        for (; h;) {
                            for (; e[++l][1] !== h;);
                            u.push(l), !h._tokenizer && (n = o.sliceStream(h), h.next || n.push(null), r && a.defineSkip(h.start), h._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(n), h._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), r = h, h = h.next
                        }
                        for (h = i; ++p < s.length;) "exit" === s[p][0] && "enter" === s[p - 1][0] && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (g = p + 1, m.push(g), h._tokenizer = void 0, h.previous = void 0, h = h.next);
                        for (a.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : m.pop(), p = m.length; p--;) {
                            let y = s.slice(m[p], m[p + 1]),
                                x = u.pop();
                            c.unshift([x, x + y.length - 1]), M(e, x, 2, y)
                        }
                        for (p = -1; ++p < c.length;) f[d + c[p][0]] = d + c[p][1], d += c[p][1] - c[p][0] - 1;
                        return f
                    }(e, s)), s = a[s], u = !0);
                    else if (t[1]._container) {
                        for (r = s, n = void 0; r--;)
                            if ("lineEnding" === (i = e[r])[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (e[n][1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
                            else break;
                        n && (t[1].end = Object.assign({}, e[n][1].start), (o = e.slice(n, s)).unshift(t), M(e, n, s - n + 1, o))
                    }
                }
                return !u
            }
            let $ = {
                    tokenize: function(e, t) {
                        let n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(t)
                        };

                        function r(t) {
                            return null === t ? i(t) : (0, j.Ch)(t) ? e.check(V, o, i)(t) : (e.consume(t), r)
                        }

                        function i(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function o(t) {
                            return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), n = n.next, r
                        }
                    },
                    resolve: function(e) {
                        return q(e), e
                    }
                },
                V = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B(e, i, "linePrefix")
                        };

                        function i(i) {
                            if (null === i || (0, j.Ch)(i)) return n(i);
                            let o = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
                        }
                    },
                    partial: !0
                },
                Y = {
                    tokenize: function(e) {
                        let t = this,
                            n = e.attempt(U, function(r) {
                                if (null === r) {
                                    e.consume(r);
                                    return
                                }
                                return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                            }, e.attempt(this.parser.constructs.flowInitial, r, B(e, e.attempt(this.parser.constructs.flow, r, e.attempt($, r)), "linePrefix")));
                        return n;

                        function r(r) {
                            if (null === r) {
                                e.consume(r);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n
                        }
                    }
                },
                W = {
                    resolveAll: G()
                },
                X = K("string"),
                Q = K("text");

            function K(e) {
                return {
                    tokenize: function(t) {
                        let n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, l);
                        return o;

                        function o(e) {
                            return a(e) ? i(e) : l(e)
                        }

                        function l(e) {
                            if (null === e) {
                                t.consume(e);
                                return
                            }
                            return t.enter("data"), t.consume(e), u
                        }

                        function u(e) {
                            return a(e) ? (t.exit("data"), i(e)) : (t.consume(e), u)
                        }

                        function a(e) {
                            if (null === e) return !0;
                            let t = r[e],
                                i = -1;
                            if (t)
                                for (; ++i < t.length;) {
                                    let o = t[i];
                                    if (!o.previous || o.previous.call(n, n.previous)) return !0
                                }
                            return !1
                        }
                    },
                    resolveAll: G("text" === e ? Z : void 0)
                }
            }

            function G(e) {
                return function(t, n) {
                    let r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function Z(e, t) {
                let n = 0;
                for (; ++n <= e.length;)
                    if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                        let r;
                        let i = e[n - 1][1],
                            o = t.sliceStream(i),
                            l = o.length,
                            u = -1,
                            a = 0;
                        for (; l--;) {
                            let s = o[l];
                            if ("string" == typeof s) {
                                for (u = s.length; 32 === s.charCodeAt(u - 1);) a++, u--;
                                if (u) break;
                                u = -1
                            } else if (-2 === s) r = !0, a++;
                            else if (-1 === s);
                            else {
                                l++;
                                break
                            }
                        }
                        if (a) {
                            let c = {
                                type: n === e.length || r || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    line: i.end.line,
                                    column: i.end.column - a,
                                    offset: i.end.offset - a,
                                    _index: i.start._index + l,
                                    _bufferIndex: l ? u : i.start._bufferIndex + u
                                },
                                end: Object.assign({}, i.end)
                            };
                            i.end = Object.assign({}, c.start), i.start.offset === i.end.offset ? Object.assign(i, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]), n += 2)
                        }
                        n++
                    }
                return e
            }

            function J(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) {
                    let o = e[i].resolveAll;
                    o && !r.includes(o) && (t = o(t, n), r.push(o))
                }
                return t
            }
            let ee = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        let r = 0;
                        return function(i) {
                            return e.enter("thematicBreak"),
                                function o(l) {
                                    return l === i ? (e.enter("thematicBreakSequence"), function t(n) {
                                        return n === i ? (e.consume(n), r++, t) : (e.exit("thematicBreakSequence"), o(n))
                                    }(l)) : (0, j.xz)(l) ? B(e, o, "whitespace")(l) : r < 3 || null !== l && !(0, j.Ch)(l) ? n(l) : (e.exit("thematicBreak"), t(l))
                                }(i)
                        }
                    }
                },
                et = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events[r.events.length - 1],
                            o = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0,
                            l = 0;
                        return function(t) {
                            let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : (0, j.pY)(t)) {
                                if (r.containerState.type || (r.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(ee, n, u)(t) : u(t);
                                if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                                    function t(i) {
                                        return (0, j.pY)(i) && ++l < 10 ? (e.consume(i), t) : (!r.interrupt || l < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), u(i)) : n(i)
                                    }(t)
                            }
                            return n(t)
                        };

                        function u(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(U, r.interrupt ? n : a, e.attempt(en, c, s))
                        }

                        function a(e) {
                            return r.containerState.initialBlankLine = !0, o++, c(e)
                        }

                        function s(t) {
                            return (0, j.xz)(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), c) : n(t)
                        }

                        function c(n) {
                            return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return r.containerState._closeFlow = void 0, e.check(U, function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, B(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }, function(n) {
                                return r.containerState.furtherBlankLines || !(0, j.xz)(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(er, t, i)(n))
                            });

                            function i(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, B(e, e.attempt(et, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                en = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return B(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return !(0, j.xz)(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
                        }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    },
                    partial: !0
                },
                er = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return B(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
                        }, "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                },
                ei = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            if (62 === t) {
                                let o = r.containerState;
                                return o.open || (e.enter("blockQuote", {
                                    _container: !0
                                }), o.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i
                            }
                            return n(t)
                        };

                        function i(n) {
                            return (0, j.xz)(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            return B(e, e.attempt(ei, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };

            function eo(e, t, n, r, i, o, l, u, a) {
                let s = a || Number.POSITIVE_INFINITY,
                    c = 0;
                return function(t) {
                    return 60 === t ? (e.enter(r), e.enter(i), e.enter(o), e.consume(t), e.exit(o), f) : null === t || 41 === t || (0, j.Av)(t) ? n(t) : (e.enter(r), e.enter(l), e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), d(t))
                };

                function f(n) {
                    return 62 === n ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(u), e.enter("chunkString", {
                        contentType: "string"
                    }), p(n))
                }

                function p(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(u), f(t)) : null === t || 60 === t || (0, j.Ch)(t) ? n(t) : (e.consume(t), 92 === t ? h : p)
                }

                function h(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t)
                }

                function d(i) {
                    return 40 === i ? ++c > s ? n(i) : (e.consume(i), d) : 41 === i ? c-- ? (e.consume(i), d) : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), t(i)) : null === i || (0, j.z3)(i) ? c ? n(i) : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), t(i)) : (0, j.Av)(i) ? n(i) : (e.consume(i), 92 === i ? g : d)
                }

                function g(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), d) : d(t)
                }
            }

            function el(e, t, n, r, i, o) {
                let l;
                let u = this,
                    a = 0;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), s
                };

                function s(f) {
                    return null === f || 91 === f || 93 === f && !l || 94 === f && !a && "_hiddenFootnoteSupport" in u.parser.constructs || a > 999 ? n(f) : 93 === f ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : (0, j.Ch)(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("chunkString", {
                        contentType: "string"
                    }), c(f))
                }

                function c(t) {
                    return null === t || 91 === t || 93 === t || (0, j.Ch)(t) || a++ > 999 ? (e.exit("chunkString"), s(t)) : (e.consume(t), l = l || !(0, j.xz)(t), 92 === t ? f : c)
                }

                function f(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, c) : c(t)
                }
            }

            function eu(e, t, n, r, i, o) {
                let l;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), l = 40 === t ? 41 : t, u
                };

                function u(n) {
                    return n === l ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(o), a(n))
                }

                function a(t) {
                    return t === l ? (e.exit(o), u(l)) : null === t ? n(t) : (0, j.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B(e, a, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), s(t))
                }

                function s(t) {
                    return t === l || null === t || (0, j.Ch)(t) ? (e.exit("chunkString"), a(t)) : (e.consume(t), 92 === t ? c : s)
                }

                function c(t) {
                    return t === l || 92 === t ? (e.consume(t), s) : s(t)
                }
            }

            function ea(e, t) {
                let n;
                return function r(i) {
                    return (0, j.Ch)(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : (0, j.xz)(i) ? B(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
                }
            }

            function es(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
            let ec = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return (0, j.z3)(t) ? ea(e, r)(t) : n(t)
                        };

                        function r(t) {
                            return 34 === t || 39 === t || 40 === t ? eu(e, B(e, i, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function i(e) {
                            return null === e || (0, j.Ch)(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                },
                ef = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("codeIndented"), B(e, i, "linePrefix", 5)(t)
                        };

                        function i(t) {
                            let i = r.events[r.events.length - 1];
                            return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
                                return null === n ? o(n) : (0, j.Ch)(n) ? e.attempt(ep, t, o)(n) : (e.enter("codeFlowValue"), function n(r) {
                                    return null === r || (0, j.Ch)(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                                }(n))
                            }(t) : n(t)
                        }

                        function o(n) {
                            return e.exit("codeIndented"), t(n)
                        }
                    }
                },
                ep = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return i;

                        function i(t) {
                            return r.parser.lazy[r.now().line] ? n(t) : (0, j.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : B(e, o, "linePrefix", 5)(t)
                        }

                        function o(e) {
                            let o = r.events[r.events.length - 1];
                            return o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(e) : (0, j.Ch)(e) ? i(e) : n(e)
                        }
                    },
                    partial: !0
                },
                eh = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        let r;
                        let i = this,
                            o = i.events.length;
                        for (; o--;)
                            if ("lineEnding" !== i.events[o][1].type && "linePrefix" !== i.events[o][1].type && "content" !== i.events[o][1].type) {
                                r = "paragraph" === i.events[o][1].type;
                                break
                            }
                        return function(t) {
                            return !i.parser.lazy[i.now().line] && (i.interrupt || r) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), function n(r) {
                                return r === t ? (e.consume(r), n) : (e.exit("setextHeadingLineSequence"), B(e, l, "lineSuffix")(r))
                            }(t)) : n(t)
                        };

                        function l(r) {
                            return null === r || (0, j.Ch)(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
                        }
                    },
                    resolveTo: function(e, t) {
                        let n, r, i, o = e.length;
                        for (; o--;)
                            if ("enter" === e[o][0]) {
                                if ("content" === e[o][1].type) {
                                    n = o;
                                    break
                                }
                                "paragraph" === e[o][1].type && (r = o)
                            } else "content" === e[o][1].type && e.splice(o, 1), i || "definition" !== e[o][1].type || (i = o);
                        let l = {
                            type: "setextHeading",
                            start: Object.assign({}, e[r][1].start),
                            end: Object.assign({}, e[e.length - 1][1].end)
                        };
                        return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, ["enter", l, t]), e.splice(i + 1, 0, ["exit", e[n][1], t]), e[n][1].end = Object.assign({}, e[i][1].end)) : e[n][1] = l, e.push(["exit", l, t]), e
                    }
                },
                ed = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                eg = ["pre", "script", "style", "textarea"],
                em = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(U, t, n)
                        }
                    },
                    partial: !0
                },
                ey = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        let r;
                        let i = this,
                            o = {
                                tokenize: function(e, t, n) {
                                    let i = 0;
                                    return B(e, function(t) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                                            function t(l) {
                                                return l === r ? (e.consume(l), i++, t) : i < s ? n(l) : (e.exit("codeFencedFenceSequence"), B(e, o, "whitespace")(l))
                                            }(t)
                                    }, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

                                    function o(r) {
                                        return null === r || (0, j.Ch)(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
                                    }
                                },
                                partial: !0
                            },
                            l = {
                                tokenize: function(e, t, n) {
                                    let r = this;
                                    return function(t) {
                                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
                                    };

                                    function i(e) {
                                        return r.parser.lazy[r.now().line] ? n(e) : t(e)
                                    }
                                },
                                partial: !0
                            },
                            u = this.events[this.events.length - 1],
                            a = u && "linePrefix" === u[1].type ? u[2].sliceSerialize(u[1], !0).length : 0,
                            s = 0;
                        return function(t) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), r = t,
                                function t(i) {
                                    return i === r ? (e.consume(i), s++, t) : (e.exit("codeFencedFenceSequence"), s < 3 ? n(i) : B(e, c, "whitespace")(i))
                                }(t)
                        };

                        function c(t) {
                            return null === t || (0, j.Ch)(t) ? p(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || (0, j.z3)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), B(e, f, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(t))
                        }

                        function f(t) {
                            return null === t || (0, j.Ch)(t) ? p(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || (0, j.Ch)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(t))
                        }

                        function p(n) {
                            return e.exit("codeFencedFence"), i.interrupt ? t(n) : function t(n) {
                                return null === n ? h(n) : (0, j.Ch)(n) ? e.attempt(l, e.attempt(o, h, a ? B(e, t, "linePrefix", a + 1) : t), h)(n) : (e.enter("codeFlowValue"), function n(r) {
                                    return null === r || (0, j.Ch)(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                                }(n))
                            }(n)
                        }

                        function h(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                },
                ex = document.createElement("i");

            function ev(e) {
                let t = "&" + e + ";";
                ex.innerHTML = t;
                let n = ex.textContent;
                return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
            }
            let eb = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        let r, i;
                        let o = this,
                            l = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), u
                        };

                        function u(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), a) : (e.enter("characterReferenceValue"), r = 31, i = j.H$, s(t))
                        }

                        function a(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = j.AF, s) : (e.enter("characterReferenceValue"), r = 7, i = j.pY, s(t))
                        }

                        function s(u) {
                            let a;
                            return 59 === u && l ? (a = e.exit("characterReferenceValue"), i !== j.H$ || ev(o.sliceSerialize(a))) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(u) : i(u) && l++ < r ? (e.consume(u), s) : n(u)
                        }
                    }
                },
                ek = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
                        };

                        function r(r) {
                            return (0, j.sR)(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
                        }
                    }
                },
                eS = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), B(e, t, "linePrefix")
                        }
                    }
                },
                eC = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        let r, i;
                        let o = this,
                            l = o.events.length;
                        for (; l--;)
                            if (("labelImage" === o.events[l][1].type || "labelLink" === o.events[l][1].type) && !o.events[l][1]._balanced) {
                                r = o.events[l][1];
                                break
                            }
                        return function(t) {
                            return r ? r._inactive ? a(t) : (i = o.parser.defined.includes(es(o.sliceSerialize({
                                start: r.end,
                                end: o.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(t)
                        };

                        function u(n) {
                            return 40 === n ? e.attempt(ew, t, i ? t : a)(n) : 91 === n ? e.attempt(eE, t, i ? e.attempt(eA, t, a) : a)(n) : i ? t(n) : a(n)
                        }

                        function a(e) {
                            return r._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        let n, r, i, o, l = e.length,
                            u = 0;
                        for (; l--;)
                            if (n = e[l][1], r) {
                                if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
                                "enter" === e[l][0] && "labelLink" === n.type && (n._inactive = !0)
                            } else if (i) {
                            if ("enter" === e[l][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = l, "labelLink" !== n.type)) {
                                u = 2;
                                break
                            }
                        } else "labelEnd" === n.type && (i = l);
                        let a = {
                                type: "labelLink" === e[r][1].type ? "link" : "image",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[e.length - 1][1].end)
                            },
                            s = {
                                type: "label",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[i][1].end)
                            },
                            c = {
                                type: "labelText",
                                start: Object.assign({}, e[r + u + 2][1].end),
                                end: Object.assign({}, e[i - 2][1].start)
                            };
                        return o = I(o = [
                            ["enter", a, t],
                            ["enter", s, t]
                        ], e.slice(r + 1, r + u + 3)), o = I(o, [
                            ["enter", c, t]
                        ]), o = I(o, J(t.parser.constructs.insideSpan.null, e.slice(r + u + 4, i - 3), t)), o = I(o, [
                            ["exit", c, t], e[i - 2], e[i - 1],
                            ["exit", s, t]
                        ]), o = I(o, e.slice(i + 1)), o = I(o, [
                            ["exit", a, t]
                        ]), M(e, r, e.length, o), e
                    },
                    resolveAll: function(e) {
                        let t, n = -1;
                        for (; ++n < e.length;)("labelImage" === (t = e[n][1]).type || "labelLink" === t.type || "labelEnd" === t.type) && (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                        return e
                    }
                },
                ew = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), ea(e, r)
                        };

                        function r(t) {
                            return 41 === t ? l(t) : eo(e, i, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                        }

                        function i(t) {
                            return (0, j.z3)(t) ? ea(e, o)(t) : l(t)
                        }

                        function o(t) {
                            return 34 === t || 39 === t || 40 === t ? eu(e, ea(e, l), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : l(t)
                        }

                        function l(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                eE = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return el.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.includes(es(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                        }
                    }
                },
                eA = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                },
                eO = {
                    name: "labelStartImage",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                        };

                        function i(t) {
                            return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                        }

                        function o(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    },
                    resolveAll: eC.resolveAll
                };

            function eF(e) {
                return null === e || (0, j.z3)(e) || (0, j.B8)(e) ? 1 : (0, j.Xh)(e) ? 2 : void 0
            }
            let eP = {
                name: "attention",
                tokenize: function(e, t) {
                    let n = this.parser.constructs.attentionMarkers.null,
                        r = this.previous,
                        i = eF(r);
                    return function(o) {
                        return e.enter("attentionSequence"),
                            function l(u) {
                                if (u === o) return e.consume(u), l;
                                let a = e.exit("attentionSequence"),
                                    s = eF(u),
                                    c = !s || 2 === s && i || n.includes(u),
                                    f = !i || 2 === i && s || n.includes(r);
                                return a._open = Boolean(42 === o ? c : c && (i || !f)), a._close = Boolean(42 === o ? f : f && (s || !c)), t(u)
                            }(o)
                    }
                },
                resolveAll: function(e, t) {
                    let n, r, i, o, l, u, a, s, c = -1;
                    for (; ++c < e.length;)
                        if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close) {
                            for (n = c; n--;)
                                if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
                                    if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
                                    u = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
                                    let f = Object.assign({}, e[n][1].end),
                                        p = Object.assign({}, e[c][1].start);
                                    eD(f, -u), eD(p, u), o = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: f,
                                        end: Object.assign({}, e[n][1].end)
                                    }, l = {
                                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                                        start: Object.assign({}, e[c][1].start),
                                        end: p
                                    }, i = {
                                        type: u > 1 ? "strongText" : "emphasisText",
                                        start: Object.assign({}, e[n][1].end),
                                        end: Object.assign({}, e[c][1].start)
                                    }, r = {
                                        type: u > 1 ? "strong" : "emphasis",
                                        start: Object.assign({}, o.start),
                                        end: Object.assign({}, l.end)
                                    }, e[n][1].end = Object.assign({}, o.start), e[c][1].start = Object.assign({}, l.end), a = [], e[n][1].end.offset - e[n][1].start.offset && (a = I(a, [
                                        ["enter", e[n][1], t],
                                        ["exit", e[n][1], t]
                                    ])), a = I(a, [
                                        ["enter", r, t],
                                        ["enter", o, t],
                                        ["exit", o, t],
                                        ["enter", i, t]
                                    ]), a = I(a, J(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t)), a = I(a, [
                                        ["exit", i, t],
                                        ["enter", l, t],
                                        ["exit", l, t],
                                        ["exit", r, t]
                                    ]), e[c][1].end.offset - e[c][1].start.offset ? (s = 2, a = I(a, [
                                        ["enter", e[c][1], t],
                                        ["exit", e[c][1], t]
                                    ])) : s = 0, M(e, n - 1, c - n + 3, a), c = n + a.length - s - 2;
                                    break
                                }
                        }
                    for (c = -1; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
                    return e
                }
            };

            function eD(e, t) {
                e.column += t, e.offset += t, e._bufferIndex += t
            }
            let eL = {
                    name: "labelStartLink",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                        };

                        function i(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    },
                    resolveAll: eC.resolveAll
                },
                eT = {
                    42: et,
                    43: et,
                    45: et,
                    48: et,
                    49: et,
                    50: et,
                    51: et,
                    52: et,
                    53: et,
                    54: et,
                    55: et,
                    56: et,
                    57: et,
                    62: ei
                },
                ez = {
                    91: {
                        name: "definition",
                        tokenize: function(e, t, n) {
                            let r;
                            let i = this;
                            return function(t) {
                                return e.enter("definition"), el.call(i, e, o, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                            };

                            function o(t) {
                                return (r = es(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), ea(e, eo(e, e.attempt(ec, B(e, l, "whitespace"), B(e, l, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                            }

                            function l(o) {
                                return null === o || (0, j.Ch)(o) ? (e.exit("definition"), i.parser.defined.includes(r) || i.parser.defined.push(r), t(o)) : n(o)
                            }
                        }
                    }
                },
                eM = {
                    [-2]: ef,
                    [-1]: ef,
                    32: ef
                },
                eI = {
                    35: {
                        name: "headingAtx",
                        tokenize: function(e, t, n) {
                            let r = this,
                                i = 0;
                            return function(o) {
                                return e.enter("atxHeading"), e.enter("atxHeadingSequence"),
                                    function o(l) {
                                        return 35 === l && i++ < 6 ? (e.consume(l), o) : null === l || (0, j.z3)(l) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(l) : function n(r) {
                                            return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
                                                return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r))
                                            }(r)) : null === r || (0, j.Ch)(r) ? (e.exit("atxHeading"), t(r)) : (0, j.xz)(r) ? B(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
                                                return null === r || 35 === r || (0, j.z3)(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t)
                                            }(r))
                                        }(l)) : n(l)
                                    }(o)
                            }
                        },
                        resolve: function(e, t) {
                            let n, r, i = e.length - 2,
                                o = 3;
                            return "whitespace" === e[3][1].type && (o += 2), i - 2 > o && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4), i > o && (n = {
                                type: "atxHeadingText",
                                start: e[o][1].start,
                                end: e[i][1].end
                            }, r = {
                                type: "chunkText",
                                start: e[o][1].start,
                                end: e[i][1].end,
                                contentType: "text"
                            }, M(e, o, i - o + 1, [
                                ["enter", n, t],
                                ["enter", r, t],
                                ["exit", r, t],
                                ["exit", n, t]
                            ])), e
                        }
                    },
                    42: ee,
                    45: [eh, ee],
                    60: {
                        name: "htmlFlow",
                        tokenize: function(e, t, n) {
                            let r, i, o, l, u;
                            let a = this;
                            return function(t) {
                                return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), s
                            };

                            function s(l) {
                                return 33 === l ? (e.consume(l), c) : 47 === l ? (e.consume(l), h) : 63 === l ? (e.consume(l), r = 3, a.interrupt ? t : L) : (0, j.jv)(l) ? (e.consume(l), o = String.fromCharCode(l), i = !0, d) : n(l)
                            }

                            function c(i) {
                                return 45 === i ? (e.consume(i), r = 2, f) : 91 === i ? (e.consume(i), r = 5, o = "CDATA[", l = 0, p) : (0, j.jv)(i) ? (e.consume(i), r = 4, a.interrupt ? t : L) : n(i)
                            }

                            function f(r) {
                                return 45 === r ? (e.consume(r), a.interrupt ? t : L) : n(r)
                            }

                            function p(r) {
                                return r === o.charCodeAt(l++) ? (e.consume(r), l === o.length ? a.interrupt ? t : w : p) : n(r)
                            }

                            function h(t) {
                                return (0, j.jv)(t) ? (e.consume(t), o = String.fromCharCode(t), d) : n(t)
                            }

                            function d(l) {
                                return null === l || 47 === l || 62 === l || (0, j.z3)(l) ? 47 !== l && i && eg.includes(o.toLowerCase()) ? (r = 1, a.interrupt ? t(l) : w(l)) : ed.includes(o.toLowerCase()) ? (r = 6, 47 === l) ? (e.consume(l), g) : a.interrupt ? t(l) : w(l) : (r = 7, a.interrupt && !a.parser.lazy[a.now().line] ? n(l) : i ? m(l) : function t(n) {
                                    return (0, j.xz)(n) ? (e.consume(n), t) : S(n)
                                }(l)) : 45 === l || (0, j.H$)(l) ? (e.consume(l), o += String.fromCharCode(l), d) : n(l)
                            }

                            function g(r) {
                                return 62 === r ? (e.consume(r), a.interrupt ? t : w) : n(r)
                            }

                            function m(t) {
                                return 47 === t ? (e.consume(t), S) : 58 === t || 95 === t || (0, j.jv)(t) ? (e.consume(t), y) : (0, j.xz)(t) ? (e.consume(t), m) : S(t)
                            }

                            function y(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, j.H$)(t) ? (e.consume(t), y) : x(t)
                            }

                            function x(t) {
                                return 61 === t ? (e.consume(t), v) : (0, j.xz)(t) ? (e.consume(t), x) : m(t)
                            }

                            function v(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), u = t, b) : (0, j.xz)(t) ? (e.consume(t), v) : (u = null, function t(n) {
                                    return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0, j.z3)(n) ? x(n) : (e.consume(n), t)
                                }(t))
                            }

                            function b(t) {
                                return null === t || (0, j.Ch)(t) ? n(t) : t === u ? (e.consume(t), k) : (e.consume(t), b)
                            }

                            function k(e) {
                                return 47 === e || 62 === e || (0, j.xz)(e) ? m(e) : n(e)
                            }

                            function S(t) {
                                return 62 === t ? (e.consume(t), C) : n(t)
                            }

                            function C(t) {
                                return (0, j.xz)(t) ? (e.consume(t), C) : null === t || (0, j.Ch)(t) ? w(t) : n(t)
                            }

                            function w(t) {
                                return 45 === t && 2 === r ? (e.consume(t), O) : 60 === t && 1 === r ? (e.consume(t), F) : 62 === t && 4 === r ? (e.consume(t), T) : 63 === t && 3 === r ? (e.consume(t), L) : 93 === t && 5 === r ? (e.consume(t), D) : (0, j.Ch)(t) && (6 === r || 7 === r) ? e.check(em, T, E)(t) : null === t || (0, j.Ch)(t) ? E(t) : (e.consume(t), w)
                            }

                            function E(t) {
                                return e.exit("htmlFlowData"),
                                    function t(n) {
                                        return null === n ? z(n) : (0, j.Ch)(n) ? e.attempt({
                                            tokenize: A,
                                            partial: !0
                                        }, t, z)(n) : (e.enter("htmlFlowData"), w(n))
                                    }(t)
                            }

                            function A(e, t, n) {
                                return function(t) {
                                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r
                                };

                                function r(e) {
                                    return a.parser.lazy[a.now().line] ? n(e) : t(e)
                                }
                            }

                            function O(t) {
                                return 45 === t ? (e.consume(t), L) : w(t)
                            }

                            function F(t) {
                                return 47 === t ? (e.consume(t), o = "", P) : w(t)
                            }

                            function P(t) {
                                return 62 === t && eg.includes(o.toLowerCase()) ? (e.consume(t), T) : (0, j.jv)(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), P) : w(t)
                            }

                            function D(t) {
                                return 93 === t ? (e.consume(t), L) : w(t)
                            }

                            function L(t) {
                                return 62 === t ? (e.consume(t), T) : 45 === t && 2 === r ? (e.consume(t), L) : w(t)
                            }

                            function T(t) {
                                return null === t || (0, j.Ch)(t) ? (e.exit("htmlFlowData"), z(t)) : (e.consume(t), T)
                            }

                            function z(n) {
                                return e.exit("htmlFlow"), t(n)
                            }
                        },
                        resolveTo: function(e) {
                            let t = e.length;
                            for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                            return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
                        },
                        concrete: !0
                    },
                    61: eh,
                    95: ee,
                    96: ey,
                    126: ey
                },
                eR = {
                    38: eb,
                    92: ek
                },
                ej = {
                    [-5]: eS,
                    [-4]: eS,
                    [-3]: eS,
                    33: eO,
                    38: eb,
                    42: eP,
                    60: [{
                        name: "autolink",
                        tokenize: function(e, t, n) {
                            let r = 1;
                            return function(t) {
                                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i
                            };

                            function i(t) {
                                return (0, j.jv)(t) ? (e.consume(t), o) : (0, j.n9)(t) ? u(t) : n(t)
                            }

                            function o(t) {
                                return 43 === t || 45 === t || 46 === t || (0, j.H$)(t) ? function t(n) {
                                    return 58 === n ? (e.consume(n), l) : (43 === n || 45 === n || 46 === n || (0, j.H$)(n)) && r++ < 32 ? (e.consume(n), t) : u(n)
                                }(t) : u(t)
                            }

                            function l(t) {
                                return 62 === t ? (e.exit("autolinkProtocol"), s(t)) : null === t || 32 === t || 60 === t || (0, j.Av)(t) ? n(t) : (e.consume(t), l)
                            }

                            function u(t) {
                                return 64 === t ? (e.consume(t), r = 0, a) : (0, j.n9)(t) ? (e.consume(t), u) : n(t)
                            }

                            function a(t) {
                                return (0, j.H$)(t) ? function t(i) {
                                    return 46 === i ? (e.consume(i), r = 0, a) : 62 === i ? (e.exit("autolinkProtocol").type = "autolinkEmail", s(i)) : function i(o) {
                                        return (45 === o || (0, j.H$)(o)) && r++ < 63 ? (e.consume(o), 45 === o ? i : t) : n(o)
                                    }(i)
                                }(t) : n(t)
                            }

                            function s(n) {
                                return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                            }
                        }
                    }, {
                        name: "htmlText",
                        tokenize: function(e, t, n) {
                            let r, i, o, l;
                            let u = this;
                            return function(t) {
                                return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), a
                            };

                            function a(t) {
                                return 33 === t ? (e.consume(t), s) : 47 === t ? (e.consume(t), S) : 63 === t ? (e.consume(t), b) : (0, j.jv)(t) ? (e.consume(t), w) : n(t)
                            }

                            function s(t) {
                                return 45 === t ? (e.consume(t), c) : 91 === t ? (e.consume(t), i = "CDATA[", o = 0, g) : (0, j.jv)(t) ? (e.consume(t), v) : n(t)
                            }

                            function c(t) {
                                return 45 === t ? (e.consume(t), f) : n(t)
                            }

                            function f(t) {
                                return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), p) : h(t)
                            }

                            function p(e) {
                                return null === e || 62 === e ? n(e) : h(e)
                            }

                            function h(t) {
                                return null === t ? n(t) : 45 === t ? (e.consume(t), d) : (0, j.Ch)(t) ? (l = h, L(t)) : (e.consume(t), h)
                            }

                            function d(t) {
                                return 45 === t ? (e.consume(t), z) : h(t)
                            }

                            function g(t) {
                                return t === i.charCodeAt(o++) ? (e.consume(t), o === i.length ? m : g) : n(t)
                            }

                            function m(t) {
                                return null === t ? n(t) : 93 === t ? (e.consume(t), y) : (0, j.Ch)(t) ? (l = m, L(t)) : (e.consume(t), m)
                            }

                            function y(t) {
                                return 93 === t ? (e.consume(t), x) : m(t)
                            }

                            function x(t) {
                                return 62 === t ? z(t) : 93 === t ? (e.consume(t), x) : m(t)
                            }

                            function v(t) {
                                return null === t || 62 === t ? z(t) : (0, j.Ch)(t) ? (l = v, L(t)) : (e.consume(t), v)
                            }

                            function b(t) {
                                return null === t ? n(t) : 63 === t ? (e.consume(t), k) : (0, j.Ch)(t) ? (l = b, L(t)) : (e.consume(t), b)
                            }

                            function k(e) {
                                return 62 === e ? z(e) : b(e)
                            }

                            function S(t) {
                                return (0, j.jv)(t) ? (e.consume(t), C) : n(t)
                            }

                            function C(t) {
                                return 45 === t || (0, j.H$)(t) ? (e.consume(t), C) : function t(n) {
                                    return (0, j.Ch)(n) ? (l = t, L(n)) : (0, j.xz)(n) ? (e.consume(n), t) : z(n)
                                }(t)
                            }

                            function w(t) {
                                return 45 === t || (0, j.H$)(t) ? (e.consume(t), w) : 47 === t || 62 === t || (0, j.z3)(t) ? E(t) : n(t)
                            }

                            function E(t) {
                                return 47 === t ? (e.consume(t), z) : 58 === t || 95 === t || (0, j.jv)(t) ? (e.consume(t), A) : (0, j.Ch)(t) ? (l = E, L(t)) : (0, j.xz)(t) ? (e.consume(t), E) : z(t)
                            }

                            function A(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, j.H$)(t) ? (e.consume(t), A) : function t(n) {
                                    return 61 === n ? (e.consume(n), O) : (0, j.Ch)(n) ? (l = t, L(n)) : (0, j.xz)(n) ? (e.consume(n), t) : E(n)
                                }(t)
                            }

                            function O(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, F) : (0, j.Ch)(t) ? (l = O, L(t)) : (0, j.xz)(t) ? (e.consume(t), O) : (e.consume(t), r = void 0, D)
                            }

                            function F(t) {
                                return t === r ? (e.consume(t), P) : null === t ? n(t) : (0, j.Ch)(t) ? (l = F, L(t)) : (e.consume(t), F)
                            }

                            function P(e) {
                                return 62 === e || 47 === e || (0, j.z3)(e) ? E(e) : n(e)
                            }

                            function D(t) {
                                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || (0, j.z3)(t) ? E(t) : (e.consume(t), D)
                            }

                            function L(t) {
                                return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B(e, T, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                            }

                            function T(t) {
                                return e.enter("htmlTextData"), l(t)
                            }

                            function z(r) {
                                return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                            }
                        }
                    }],
                    91: eL,
                    92: [{
                        name: "hardBreakEscape",
                        tokenize: function(e, t, n) {
                            return function(t) {
                                return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), r
                            };

                            function r(r) {
                                return (0, j.Ch)(r) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(r)) : n(r)
                            }
                        }
                    }, ek],
                    93: eC,
                    95: eP,
                    96: {
                        name: "codeText",
                        tokenize: function(e, t, n) {
                            let r, i, o = 0;
                            return function(t) {
                                return e.enter("codeText"), e.enter("codeTextSequence"),
                                    function t(n) {
                                        return 96 === n ? (e.consume(n), o++, t) : (e.exit("codeTextSequence"), l(n))
                                    }(t)
                            };

                            function l(a) {
                                return null === a ? n(a) : 96 === a ? (i = e.enter("codeTextSequence"), r = 0, function n(l) {
                                    return 96 === l ? (e.consume(l), r++, n) : r === o ? (e.exit("codeTextSequence"), e.exit("codeText"), t(l)) : (i.type = "codeTextData", u(l))
                                }(a)) : 32 === a ? (e.enter("space"), e.consume(a), e.exit("space"), l) : (0, j.Ch)(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(a))
                            }

                            function u(t) {
                                return null === t || 32 === t || 96 === t || (0, j.Ch)(t) ? (e.exit("codeTextData"), l(t)) : (e.consume(t), u)
                            }
                        },
                        resolve: function(e) {
                            let t, n, r = e.length - 4,
                                i = 3;
                            if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                                for (t = i; ++t < r;)
                                    if ("codeTextData" === e[t][1].type) {
                                        e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
                                        break
                                    }
                            }
                            for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                            return e
                        },
                        previous: function(e) {
                            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                        }
                    }
                },
                eB = {
                    null: [eP, W]
                },
                e_ = {
                    null: [42, 95]
                },
                eN = {
                    null: []
                },
                eH = /[\0\t\n\r]/g;

            function eU(e, t) {
                let n = Number.parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
            }
            let eq = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function e$(e) {
                return e.replace(eq, eV)
            }

            function eV(e, t, n) {
                if (t) return t;
                let r = n.charCodeAt(0);
                if (35 === r) {
                    let i = n.charCodeAt(1),
                        o = 120 === i || 88 === i;
                    return eU(n.slice(o ? 2 : 1), o ? 16 : 10)
                }
                return ev(n) || e
            }
            let eY = {}.hasOwnProperty,
                eW = function(e, t, n) {
                    let i, o, l, u;
                    return "string" != typeof t && (n = t, t = void 0), (function(e = {}) {
                        let t = function e(t, n) {
                                let r = -1;
                                for (; ++r < n.length;) {
                                    let i = n[r];
                                    Array.isArray(i) ? e(t, i) : function(e, t) {
                                        let n;
                                        for (n in t)
                                            if (eY.call(t, n)) {
                                                let r = "canContainEols" === n || "transforms" === n,
                                                    i = eY.call(e, n) ? e[n] : void 0,
                                                    o = i || (e[n] = r ? [] : {}),
                                                    l = t[n];
                                                l && (r ? e[n] = [...o, ...l] : Object.assign(o, l))
                                            }
                                    }(t, i)
                                }
                                return t
                            }({
                                transforms: [],
                                canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                                enter: {
                                    autolink: l(k),
                                    autolinkProtocol: h,
                                    autolinkEmail: h,
                                    atxHeading: l(x),
                                    blockQuote: l(function() {
                                        return {
                                            type: "blockquote",
                                            children: []
                                        }
                                    }),
                                    characterEscape: h,
                                    characterReference: h,
                                    codeFenced: l(y),
                                    codeFencedFenceInfo: u,
                                    codeFencedFenceMeta: u,
                                    codeIndented: l(y, u),
                                    codeText: l(function() {
                                        return {
                                            type: "inlineCode",
                                            value: ""
                                        }
                                    }, u),
                                    codeTextData: h,
                                    data: h,
                                    codeFlowValue: h,
                                    definition: l(function() {
                                        return {
                                            type: "definition",
                                            identifier: "",
                                            label: null,
                                            title: null,
                                            url: ""
                                        }
                                    }),
                                    definitionDestinationString: u,
                                    definitionLabelString: u,
                                    definitionTitleString: u,
                                    emphasis: l(function() {
                                        return {
                                            type: "emphasis",
                                            children: []
                                        }
                                    }),
                                    hardBreakEscape: l(v),
                                    hardBreakTrailing: l(v),
                                    htmlFlow: l(b, u),
                                    htmlFlowData: h,
                                    htmlText: l(b, u),
                                    htmlTextData: h,
                                    image: l(function() {
                                        return {
                                            type: "image",
                                            title: null,
                                            url: "",
                                            alt: null
                                        }
                                    }),
                                    label: u,
                                    link: l(k),
                                    listItem: l(function(e) {
                                        return {
                                            type: "listItem",
                                            spread: e._spread,
                                            checked: null,
                                            children: []
                                        }
                                    }),
                                    listItemValue: function(e) {
                                        if (n.expectingFirstListItemValue) {
                                            let t = this.stack[this.stack.length - 2];
                                            t.start = Number.parseInt(this.sliceSerialize(e), 10), n.expectingFirstListItemValue = void 0
                                        }
                                    },
                                    listOrdered: l(S, function() {
                                        n.expectingFirstListItemValue = !0
                                    }),
                                    listUnordered: l(S),
                                    paragraph: l(function() {
                                        return {
                                            type: "paragraph",
                                            children: []
                                        }
                                    }),
                                    reference: function() {
                                        n.referenceType = "collapsed"
                                    },
                                    referenceString: u,
                                    resourceDestinationString: u,
                                    resourceTitleString: u,
                                    setextHeading: l(x),
                                    strong: l(function() {
                                        return {
                                            type: "strong",
                                            children: []
                                        }
                                    }),
                                    thematicBreak: l(function() {
                                        return {
                                            type: "thematicBreak"
                                        }
                                    })
                                },
                                exit: {
                                    atxHeading: c(),
                                    atxHeadingSequence: function(e) {
                                        let t = this.stack[this.stack.length - 1];
                                        if (!t.depth) {
                                            let n = this.sliceSerialize(e).length;
                                            t.depth = n
                                        }
                                    },
                                    autolink: c(),
                                    autolinkEmail: function(e) {
                                        d.call(this, e);
                                        let t = this.stack[this.stack.length - 1];
                                        t.url = "mailto:" + this.sliceSerialize(e)
                                    },
                                    autolinkProtocol: function(e) {
                                        d.call(this, e);
                                        let t = this.stack[this.stack.length - 1];
                                        t.url = this.sliceSerialize(e)
                                    },
                                    blockQuote: c(),
                                    characterEscapeValue: d,
                                    characterReferenceMarkerHexadecimal: m,
                                    characterReferenceMarkerNumeric: m,
                                    characterReferenceValue: function(e) {
                                        let t;
                                        let r = this.sliceSerialize(e),
                                            i = n.characterReferenceType;
                                        i ? (t = eU(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), n.characterReferenceType = void 0) : t = ev(r);
                                        let l = this.stack.pop();
                                        l.value += t, l.position.end = o(e.end)
                                    },
                                    codeFenced: c(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), n.flowCodeInside = void 0
                                    }),
                                    codeFencedFence: function() {
                                        !n.flowCodeInside && (this.buffer(), n.flowCodeInside = !0)
                                    },
                                    codeFencedFenceInfo: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.lang = e
                                    },
                                    codeFencedFenceMeta: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.meta = e
                                    },
                                    codeFlowValue: d,
                                    codeIndented: c(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e.replace(/(\r?\n|\r)$/g, "")
                                    }),
                                    codeText: c(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e
                                    }),
                                    codeTextData: d,
                                    data: d,
                                    definition: c(),
                                    definitionDestinationString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.url = e
                                    },
                                    definitionLabelString: function(e) {
                                        let t = this.resume(),
                                            n = this.stack[this.stack.length - 1];
                                        n.label = t, n.identifier = es(this.sliceSerialize(e)).toLowerCase()
                                    },
                                    definitionTitleString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.title = e
                                    },
                                    emphasis: c(),
                                    hardBreakEscape: c(g),
                                    hardBreakTrailing: c(g),
                                    htmlFlow: c(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e
                                    }),
                                    htmlFlowData: d,
                                    htmlText: c(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e
                                    }),
                                    htmlTextData: d,
                                    image: c(function() {
                                        let e = this.stack[this.stack.length - 1];
                                        n.inReference ? (e.type += "Reference", e.referenceType = n.referenceType || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label), n.referenceType = void 0
                                    }),
                                    label: function() {
                                        let e = this.stack[this.stack.length - 1],
                                            t = this.resume(),
                                            r = this.stack[this.stack.length - 1];
                                        n.inReference = !0, "link" === r.type ? r.children = e.children : r.alt = t
                                    },
                                    labelText: function(e) {
                                        let t = this.stack[this.stack.length - 2],
                                            n = this.sliceSerialize(e);
                                        t.label = e$(n), t.identifier = es(n).toLowerCase()
                                    },
                                    lineEnding: function(e) {
                                        let r = this.stack[this.stack.length - 1];
                                        if (n.atHardBreak) {
                                            let i = r.children[r.children.length - 1];
                                            i.position.end = o(e.end), n.atHardBreak = void 0;
                                            return
                                        }!n.setextHeadingSlurpLineEnding && t.canContainEols.includes(r.type) && (h.call(this, e), d.call(this, e))
                                    },
                                    link: c(function() {
                                        let e = this.stack[this.stack.length - 1];
                                        n.inReference ? (e.type += "Reference", e.referenceType = n.referenceType || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label), n.referenceType = void 0
                                    }),
                                    listItem: c(),
                                    listOrdered: c(),
                                    listUnordered: c(),
                                    paragraph: c(),
                                    referenceString: function(e) {
                                        let t = this.resume(),
                                            r = this.stack[this.stack.length - 1];
                                        r.label = t, r.identifier = es(this.sliceSerialize(e)).toLowerCase(), n.referenceType = "full"
                                    },
                                    resourceDestinationString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.url = e
                                    },
                                    resourceTitleString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.title = e
                                    },
                                    resource: function() {
                                        n.inReference = void 0
                                    },
                                    setextHeading: c(function() {
                                        n.setextHeadingSlurpLineEnding = void 0
                                    }),
                                    setextHeadingLineSequence: function(e) {
                                        let t = this.stack[this.stack.length - 1];
                                        t.depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                                    },
                                    setextHeadingText: function() {
                                        n.setextHeadingSlurpLineEnding = !0
                                    },
                                    strong: c(),
                                    thematicBreak: c()
                                }
                            }, e.mdastExtensions || []),
                            n = {};
                        return function(e) {
                            let n = {
                                    type: "root",
                                    children: []
                                },
                                l = [n],
                                a = [],
                                c = [],
                                h = {
                                    stack: l,
                                    tokenStack: a,
                                    config: t,
                                    enter: s,
                                    exit: f,
                                    buffer: u,
                                    resume: p,
                                    setData: r,
                                    getData: i
                                },
                                d = -1;
                            for (; ++d < e.length;)
                                if ("listOrdered" === e[d][1].type || "listUnordered" === e[d][1].type) {
                                    if ("enter" === e[d][0]) c.push(d);
                                    else {
                                        let g = c.pop();
                                        d = function(e, t, n) {
                                            let r, i, o, l, u = t - 1,
                                                a = -1,
                                                s = !1;
                                            for (; ++u <= n;) {
                                                let c = e[u];
                                                if ("listUnordered" === c[1].type || "listOrdered" === c[1].type || "blockQuote" === c[1].type ? ("enter" === c[0] ? a++ : a--, l = void 0) : "lineEndingBlank" === c[1].type ? "enter" === c[0] && (!r || l || a || o || (o = u), l = void 0) : "linePrefix" === c[1].type || "listItemValue" === c[1].type || "listItemMarker" === c[1].type || "listItemPrefix" === c[1].type || "listItemPrefixWhitespace" === c[1].type || (l = void 0), !a && "enter" === c[0] && "listItemPrefix" === c[1].type || -1 === a && "exit" === c[0] && ("listUnordered" === c[1].type || "listOrdered" === c[1].type)) {
                                                    if (r) {
                                                        let f = u;
                                                        for (i = void 0; f--;) {
                                                            let p = e[f];
                                                            if ("lineEnding" === p[1].type || "lineEndingBlank" === p[1].type) {
                                                                if ("exit" === p[0]) continue;
                                                                i && (e[i][1].type = "lineEndingBlank", s = !0), p[1].type = "lineEnding", i = f
                                                            } else if ("linePrefix" === p[1].type || "blockQuotePrefix" === p[1].type || "blockQuotePrefixWhitespace" === p[1].type || "blockQuoteMarker" === p[1].type || "listItemIndent" === p[1].type);
                                                            else break
                                                        }
                                                        o && (!i || o < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : c[1].end), e.splice(i || u, 0, ["exit", r, c[2]]), u++, n++
                                                    }
                                                    "listItemPrefix" === c[1].type && (r = {
                                                        type: "listItem",
                                                        _spread: !1,
                                                        start: Object.assign({}, c[1].start)
                                                    }, e.splice(u, 0, ["enter", r, c[2]]), u++, n++, o = void 0, l = !0)
                                                }
                                            }
                                            return e[t][1]._spread = s, n
                                        }(e, g, d)
                                    }
                                }
                            for (d = -1; ++d < e.length;) {
                                let m = t[e[d][0]];
                                eY.call(m, e[d][1].type) && m[e[d][1].type].call(Object.assign({
                                    sliceSerialize: e[d][2].sliceSerialize
                                }, h), e[d][1])
                            }
                            if (a.length > 0) {
                                let y = a[a.length - 1],
                                    x = y[1] || eX;
                                x.call(h, void 0, y[0])
                            }
                            for (n.position = {
                                    start: o(e.length > 0 ? e[0][1].start : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    }),
                                    end: o(e.length > 0 ? e[e.length - 2][1].end : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    })
                                }, d = -1; ++d < t.transforms.length;) n = t.transforms[d](n) || n;
                            return n
                        };

                        function r(e, t) {
                            n[e] = t
                        }

                        function i(e) {
                            return n[e]
                        }

                        function o(e) {
                            return {
                                line: e.line,
                                column: e.column,
                                offset: e.offset
                            }
                        }

                        function l(e, t) {
                            return function(n) {
                                s.call(this, e(n), n), t && t.call(this, n)
                            }
                        }

                        function u() {
                            this.stack.push({
                                type: "fragment",
                                children: []
                            })
                        }

                        function s(e, t, n) {
                            let r = this.stack[this.stack.length - 1];
                            return r.children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), e.position = {
                                start: o(t.start)
                            }, e
                        }

                        function c(e) {
                            return function(t) {
                                e && e.call(this, t), f.call(this, t)
                            }
                        }

                        function f(e, t) {
                            let n = this.stack.pop(),
                                r = this.tokenStack.pop();
                            if (r) {
                                if (r[0].type !== e.type) {
                                    if (t) t.call(this, e, r[0]);
                                    else {
                                        let i = r[1] || eX;
                                        i.call(this, e, r[0])
                                    }
                                }
                            } else throw Error("Cannot close `" + e.type + "` (" + a({
                                start: e.start,
                                end: e.end
                            }) + "): it’s not open");
                            return n.position.end = o(e.end), n
                        }

                        function p() {
                            return L(this.stack.pop())
                        }

                        function h(e) {
                            let t = this.stack[this.stack.length - 1],
                                n = t.children[t.children.length - 1];
                            n && "text" === n.type || ((n = {
                                type: "text",
                                value: ""
                            }).position = {
                                start: o(e.start)
                            }, t.children.push(n)), this.stack.push(n)
                        }

                        function d(e) {
                            let t = this.stack.pop();
                            t.value += this.sliceSerialize(e), t.position.end = o(e.end)
                        }

                        function g() {
                            n.atHardBreak = !0
                        }

                        function m(e) {
                            var t;
                            t = e.type, n.characterReferenceType = t
                        }

                        function y() {
                            return {
                                type: "code",
                                lang: null,
                                meta: null,
                                value: ""
                            }
                        }

                        function x() {
                            return {
                                type: "heading",
                                depth: void 0,
                                children: []
                            }
                        }

                        function v() {
                            return {
                                type: "break"
                            }
                        }

                        function b() {
                            return {
                                type: "html",
                                value: ""
                            }
                        }

                        function k() {
                            return {
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }
                        }

                        function S(e) {
                            return {
                                type: "list",
                                ordered: "listOrdered" === e.type,
                                start: null,
                                spread: e._spread,
                                children: []
                            }
                        }
                    })(n)(function(e) {
                        for (; !q(e););
                        return e
                    }((function(e = {}) {
                        let t = function(e) {
                                let t = {},
                                    n = -1;
                                for (; ++n < e.length;) ! function(e, t) {
                                    let n;
                                    for (n in t) {
                                        let r;
                                        let i = R.call(e, n) ? e[n] : void 0,
                                            o = i || (e[n] = {}),
                                            l = t[n];
                                        for (r in l) {
                                            R.call(o, r) || (o[r] = []);
                                            let u = l[r];
                                            ! function(e, t) {
                                                let n = -1,
                                                    r = [];
                                                for (; ++n < t.length;)("after" === t[n].add ? e : r).push(t[n]);
                                                M(e, 0, 0, r)
                                            }(o[r], Array.isArray(u) ? u : u ? [u] : [])
                                        }
                                    }
                                }(t, e[n]);
                                return t
                            }([r].concat(e.extensions || [])),
                            n = {
                                defined: [],
                                lazy: {},
                                constructs: t,
                                content: i(_),
                                document: i(N),
                                flow: i(Y),
                                string: i(X),
                                text: i(Q)
                            };
                        return n;

                        function i(e) {
                            return function(t) {
                                return function(e, t, n) {
                                    let r = Object.assign(n ? Object.assign({}, n) : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        }, {
                                            _index: 0,
                                            _bufferIndex: -1
                                        }),
                                        i = {},
                                        o = [],
                                        l = [],
                                        u = [],
                                        a = {
                                            consume: function(e) {
                                                (0, j.Ch)(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, m()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = e
                                            },
                                            enter: function(e, t) {
                                                let n = t || {};
                                                return n.type = e, n.start = p(), s.events.push(["enter", n, s]), u.push(n), n
                                            },
                                            exit: function(e) {
                                                let t = u.pop();
                                                return t.end = p(), s.events.push(["exit", t, s]), t
                                            },
                                            attempt: d(function(e, t) {
                                                g(e, t.from)
                                            }),
                                            check: d(h),
                                            interrupt: d(h, {
                                                interrupt: !0
                                            })
                                        },
                                        s = {
                                            previous: null,
                                            code: null,
                                            containerState: {},
                                            events: [],
                                            parser: e,
                                            sliceStream: f,
                                            sliceSerialize: function(e, t) {
                                                return function(e, t) {
                                                    let n, r = -1,
                                                        i = [];
                                                    for (; ++r < e.length;) {
                                                        let o;
                                                        let l = e[r];
                                                        if ("string" == typeof l) o = l;
                                                        else switch (l) {
                                                            case -5:
                                                                o = "\r";
                                                                break;
                                                            case -4:
                                                                o = "\n";
                                                                break;
                                                            case -3:
                                                                o = "\r\n";
                                                                break;
                                                            case -2:
                                                                o = t ? " " : "	";
                                                                break;
                                                            case -1:
                                                                if (!t && n) continue;
                                                                o = " ";
                                                                break;
                                                            default:
                                                                o = String.fromCharCode(l)
                                                        }
                                                        n = -2 === l, i.push(o)
                                                    }
                                                    return i.join("")
                                                }(f(e), t)
                                            },
                                            now: p,
                                            defineSkip: function(e) {
                                                i[e.line] = e.column, m()
                                            },
                                            write: function(e) {
                                                return (l = I(l, e), function() {
                                                    let e;
                                                    for (; r._index < l.length;) {
                                                        var t;
                                                        let n = l[r._index];
                                                        if ("string" == typeof n)
                                                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) c = c(n.charCodeAt(r._bufferIndex));
                                                        else c = c(n)
                                                    }
                                                }(), null !== l[l.length - 1]) ? [] : (g(t, 0), s.events = J(o, s.events, s), s.events)
                                            }
                                        },
                                        c = t.tokenize.call(s, a);
                                    return t.resolveAll && o.push(t), s;

                                    function f(e) {
                                        return function(e, t) {
                                            let n;
                                            let r = t.start._index,
                                                i = t.start._bufferIndex,
                                                o = t.end._index,
                                                l = t.end._bufferIndex;
                                            return r === o ? n = [e[r].slice(i, l)] : (n = e.slice(r, o), i > -1 && (n[0] = n[0].slice(i)), l > 0 && n.push(e[o].slice(0, l))), n
                                        }(l, e)
                                    }

                                    function p() {
                                        return Object.assign({}, r)
                                    }

                                    function h(e, t) {
                                        t.restore()
                                    }

                                    function d(e, t) {
                                        return function(n, i, o) {
                                            let l, c, f, h;
                                            return Array.isArray(n) ? d(n) : "tokenize" in n ? d([n]) : function(e) {
                                                let t = null !== e && n[e],
                                                    r = null !== e && n.null,
                                                    i = [...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []];
                                                return d(i)(e)
                                            };

                                            function d(e) {
                                                return (l = e, c = 0, 0 === e.length) ? o : g(e[c])
                                            }

                                            function g(e) {
                                                return function(n) {
                                                    return (h = function() {
                                                        let e = p(),
                                                            t = s.previous,
                                                            n = s.currentConstruct,
                                                            i = s.events.length,
                                                            o = Array.from(u);
                                                        return {
                                                            restore: function() {
                                                                r = e, s.previous = t, s.currentConstruct = n, s.events.length = i, u = o, m()
                                                            },
                                                            from: i
                                                        }
                                                    }(), f = e, e.partial || (s.currentConstruct = e), e.name && s.parser.constructs.disable.null.includes(e.name)) ? x(n) : e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, a, y, x)(n)
                                                }
                                            }

                                            function y(t) {
                                                return e(f, h), i
                                            }

                                            function x(e) {
                                                return (h.restore(), ++c < l.length) ? g(l[c]) : o
                                            }
                                        }
                                    }

                                    function g(e, t) {
                                        e.resolveAll && !o.includes(e) && o.push(e), e.resolve && M(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s)), e.resolveTo && (s.events = e.resolveTo(s.events, s))
                                    }

                                    function m() {
                                        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
                                    }
                                }(n, e, t)
                            }
                        }
                    })(n).document().write((o = 1, l = "", u = !0, function(e, t, n) {
                        let r, a, s, c, f;
                        let p = [];
                        for (e = l + e.toString(t), s = 0, l = "", u && (65279 === e.charCodeAt(0) && s++, u = void 0); s < e.length;) {
                            if (eH.lastIndex = s, c = (r = eH.exec(e)) && void 0 !== r.index ? r.index : e.length, f = e.charCodeAt(c), !r) {
                                l = e.slice(s);
                                break
                            }
                            if (10 === f && s === c && i) p.push(-3), i = void 0;
                            else switch (i && (p.push(-5), i = void 0), s < c && (p.push(e.slice(s, c)), o += c - s), f) {
                                case 0:
                                    p.push(65533), o++;
                                    break;
                                case 9:
                                    for (a = 4 * Math.ceil(o / 4), p.push(-2); o++ < a;) p.push(-1);
                                    break;
                                case 10:
                                    p.push(-4), o = 1;
                                    break;
                                default:
                                    i = !0, o = 1
                            }
                            s = c + 1
                        }
                        return n && (i && p.push(-5), l && p.push(l), p.push(null)), p
                    })(e, t, !0))))
                };

            function eX(e, t) {
                if (e) throw Error("Cannot close `" + e.type + "` (" + a({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + t.type + "`, " + a({
                    start: t.start,
                    end: t.end
                }) + ") is open");
                throw Error("Cannot close document, a token (`" + t.type + "`, " + a({
                    start: t.start,
                    end: t.end
                }) + ") is still open")
            }
            let eQ = {}.hasOwnProperty;

            function eK(e, t) {
                let n, r = -1;
                if (t.extensions)
                    for (; ++r < t.extensions.length;) eK(e, t.extensions[r]);
                for (n in t) "extensions" === n || ("unsafe" === n || "join" === n ? e[n] = [...e[n] || [], ...t[n] || []] : "handlers" === n ? e[n] = Object.assign(e[n], t[n] || {}) : e.options[n] = t[n]);
                return e
            }

            function eG(e) {
                let t = e || {},
                    n = t.now || {},
                    r = t.lineShift || 0,
                    i = n.line || 1,
                    o = n.column || 1;
                return {
                    move: function(e = "") {
                        let t = e.split(/\r?\n|\r/g),
                            n = t[t.length - 1];
                        return i += t.length - 1, o = 1 === t.length ? o + n.length : 1 + n.length + r, e
                    },
                    current: function() {
                        return {
                            now: {
                                line: i,
                                column: o
                            },
                            lineShift: r
                        }
                    },
                    shift: function(e) {
                        r += e
                    }
                }
            }

            function eZ(e, t, n) {
                let r = t.indexStack,
                    i = e.children || [],
                    o = eG(n),
                    l = [],
                    u = -1;
                for (r.push(-1); ++u < i.length;) {
                    let a = i[u];
                    r[r.length - 1] = u, l.push(o.move(t.handle(a, e, t, {
                        before: "\n",
                        after: "\n",
                        ...o.current()
                    }))), "list" !== a.type && (t.bulletLastUsed = void 0), u < i.length - 1 && l.push(o.move(function(n, r) {
                        let i = t.join.length;
                        for (; i--;) {
                            let o = t.join[i](n, r, e, t);
                            if (!0 === o || 1 === o) break;
                            if ("number" == typeof o) return "\n".repeat(1 + o);
                            if (!1 === o) return "\n\n<!---->\n\n"
                        }
                        return "\n\n"
                    }(a, i[u + 1])))
                }
                return r.pop(), l.join("")
            }
            let eJ = /\r?\n|\r/g;

            function e0(e, t) {
                let n;
                let r = [],
                    i = 0,
                    o = 0;
                for (; n = eJ.exec(e);) l(e.slice(i, n.index)), r.push(n[0]), i = n.index + n[0].length, o++;
                return l(e.slice(i)), r.join("");

                function l(e) {
                    r.push(t(e, o, !e))
                }
            }

            function e1(e, t, n) {
                return ">" + (n ? "" : " ") + e
            }

            function e2(e, t) {
                return e3(e, t.inConstruct, !0) && !e3(e, t.notInConstruct, !1)
            }

            function e3(e, t, n) {
                if (!t) return n;
                "string" == typeof t && (t = [t]);
                let r = -1;
                for (; ++r < t.length;)
                    if (e.includes(t[r])) return !0;
                return !1
            }

            function e6(e, t, n, r) {
                let i = -1;
                for (; ++i < n.unsafe.length;)
                    if ("\n" === n.unsafe[i].character && e2(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
                return "\\\n"
            }

            function e4(e, t) {
                return Boolean(!t.options.fences && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))
            }

            function e5(e) {
                if (!e._compiled) {
                    let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
                    e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
                }
                return e._compiled
            }

            function e9(e, t, n) {
                let r = (n.before || "") + (t || "") + (n.after || ""),
                    i = [],
                    o = [],
                    l = {},
                    u = -1;
                for (; ++u < e.unsafe.length;) {
                    let a;
                    let s = e.unsafe[u];
                    if (!e2(e.stack, s)) continue;
                    let c = e5(s);
                    for (; a = c.exec(r);) {
                        let f = "before" in s || Boolean(s.atBreak),
                            p = "after" in s,
                            h = a.index + (f ? a[1].length : 0);
                        i.includes(h) ? (l[h].before && !f && (l[h].before = !1), l[h].after && !p && (l[h].after = !1)) : (i.push(h), l[h] = {
                            before: f,
                            after: p
                        })
                    }
                }
                i.sort(e7);
                let d = n.before ? n.before.length : 0,
                    g = r.length - (n.after ? n.after.length : 0);
                for (u = -1; ++u < i.length;) {
                    let m = i[u];
                    !(m < d) && !(m >= g) && (!(m + 1 < g) || i[u + 1] !== m + 1 || !l[m].after || l[m + 1].before || l[m + 1].after) && (i[u - 1] !== m - 1 || !l[m].before || l[m - 1].before || l[m - 1].after) && (d !== m && o.push(e8(r.slice(d, m), "\\")), d = m, !/[!-/:-@[-`{-~]/.test(r.charAt(m)) || n.encode && n.encode.includes(r.charAt(m)) ? (o.push("&#x" + r.charCodeAt(m).toString(16).toUpperCase() + ";"), d++) : o.push("\\"))
                }
                return o.push(e8(r.slice(d, g), n.after)), o.join("")
            }

            function e7(e, t) {
                return e - t
            }

            function e8(e, t) {
                let n;
                let r = /\\(?=[!-/:-@[-`{-~])/g,
                    i = [],
                    o = [],
                    l = e + t,
                    u = -1,
                    a = 0;
                for (; n = r.exec(l);) i.push(n.index);
                for (; ++u < i.length;) a !== i[u] && o.push(e.slice(a, i[u])), o.push("\\"), a = i[u];
                return o.push(e.slice(a)), o.join("")
            }

            function te(e, t, n) {
                return (n ? "" : "    ") + e
            }

            function tt(e) {
                return e.label || !e.identifier ? e.label || "" : e$(e.identifier)
            }

            function tn(e) {
                let t = e.options.quote || '"';
                if ('"' !== t && "'" !== t) throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
                return t
            }

            function tr(e, t, n) {
                let r = t.indexStack,
                    i = e.children || [],
                    o = [],
                    l = -1,
                    u = n.before;
                r.push(-1);
                let a = eG(n);
                for (; ++l < i.length;) {
                    let s;
                    let c = i[l];
                    if (r[r.length - 1] = l, l + 1 < i.length) {
                        let f = t.handle.handlers[i[l + 1].type];
                        f && f.peek && (f = f.peek), s = f ? f(i[l + 1], e, t, {
                            before: "",
                            after: "",
                            ...a.current()
                        }).charAt(0) : ""
                    } else s = n.after;
                    o.length > 0 && ("\r" === u || "\n" === u) && "html" === c.type && (o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " "), u = " ", (a = eG(n)).move(o.join(""))), o.push(a.move(t.handle(c, e, t, { ...a.current(),
                        before: u,
                        after: s
                    }))), u = o[o.length - 1].slice(-1)
                }
                return r.pop(), o.join("")
            }

            function ti(e, t, n, r) {
                let i = function(e) {
                        let t = e.options.emphasis || "*";
                        if ("*" !== t && "_" !== t) throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
                        return t
                    }(n),
                    o = n.enter("emphasis"),
                    l = eG(r),
                    u = l.move(i);
                return u += l.move(tr(e, n, {
                    before: u,
                    after: i,
                    ...l.current()
                })) + l.move(i), o(), u
            }
            ti.peek = function(e, t, n) {
                return n.options.emphasis || "*"
            };
            var to = n(6393),
                tl = n(55765);

            function tu(e, t) {
                let n = !1;
                return (0, to.Vn)(e, e => {
                    if ("value" in e && /\r?\n|\r/.test(e.value) || "break" === e.type) return n = !0, tl.BK
                }), Boolean((!e.depth || e.depth < 3) && L(e) && (t.options.setext || n))
            }

            function ta(e) {
                return e.value || ""
            }

            function ts(e, t, n, r) {
                let i = tn(n),
                    o = n.enter("image"),
                    l = n.enter("label"),
                    u = eG(r),
                    a = u.move("![");
                return a += u.move(e9(n, e.alt, {
                    before: a,
                    after: "]",
                    ...u.current()
                })) + u.move("]("), l(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), a += u.move("<"), a += u.move(e9(n, e.url, {
                    before: a,
                    after: ">",
                    ...u.current()
                })) + u.move(">")) : (l = n.enter("destinationRaw"), a += u.move(e9(n, e.url, {
                    before: a,
                    after: e.title ? " " : ")",
                    ...u.current()
                }))), l(), e.title && (l = n.enter("title" + ('"' === i ? "Quote" : "Apostrophe")), a += u.move(" " + i), a += u.move(e9(n, e.title, {
                    before: a,
                    after: i,
                    ...u.current()
                })) + u.move(i), l()), a += u.move(")"), o(), a
            }

            function tc(e, t, n, r) {
                let i = e.referenceType,
                    o = n.enter("imageReference"),
                    l = n.enter("label"),
                    u = eG(r),
                    a = u.move("!["),
                    s = e9(n, e.alt, {
                        before: a,
                        after: "]",
                        ...u.current()
                    });
                a += u.move(s + "]["), l();
                let c = n.stack;
                n.stack = [], l = n.enter("reference");
                let f = e9(n, tt(e), {
                    before: a,
                    after: "]",
                    ...u.current()
                });
                return l(), n.stack = c, o(), "full" !== i && s && s === f ? "shortcut" === i ? a = a.slice(0, -1) : a += u.move("]") : a += u.move(f + "]"), a
            }

            function tf(e, t, n) {
                let r = e.value || "",
                    i = "`",
                    o = -1;
                for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
                for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length;) {
                    let l;
                    let u = n.unsafe[o],
                        a = e5(u);
                    if (u.atBreak)
                        for (; l = a.exec(r);) {
                            let s = l.index;
                            10 === r.charCodeAt(s) && 13 === r.charCodeAt(s - 1) && s--, r = r.slice(0, s) + " " + r.slice(l.index + 1)
                        }
                }
                return i + r + i
            }

            function tp(e, t) {
                let n = L(e);
                return Boolean(!t.options.resourceLink && e.url && !e.title && e.children && 1 === e.children.length && "text" === e.children[0].type && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url))
            }

            function th(e, t, n, r) {
                let i, o;
                let l = tn(n),
                    u = eG(r);
                if (tp(e, n)) {
                    let a = n.stack;
                    n.stack = [], i = n.enter("autolink");
                    let s = u.move("<");
                    return s += u.move(tr(e, n, {
                        before: s,
                        after: ">",
                        ...u.current()
                    })) + u.move(">"), i(), n.stack = a, s
                }
                i = n.enter("link"), o = n.enter("label");
                let c = u.move("[");
                return c += u.move(tr(e, n, {
                    before: c,
                    after: "](",
                    ...u.current()
                })) + u.move("]("), o(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), c += u.move("<"), c += u.move(e9(n, e.url, {
                    before: c,
                    after: ">",
                    ...u.current()
                })) + u.move(">")) : (o = n.enter("destinationRaw"), c += u.move(e9(n, e.url, {
                    before: c,
                    after: e.title ? " " : ")",
                    ...u.current()
                }))), o(), e.title && (o = n.enter("title" + ('"' === l ? "Quote" : "Apostrophe")), c += u.move(" " + l), c += u.move(e9(n, e.title, {
                    before: c,
                    after: l,
                    ...u.current()
                })) + u.move(l), o()), c += u.move(")"), i(), c
            }

            function td(e, t, n, r) {
                let i = e.referenceType,
                    o = n.enter("linkReference"),
                    l = n.enter("label"),
                    u = eG(r),
                    a = u.move("["),
                    s = tr(e, n, {
                        before: a,
                        after: "]",
                        ...u.current()
                    });
                a += u.move(s + "]["), l();
                let c = n.stack;
                n.stack = [], l = n.enter("reference");
                let f = e9(n, tt(e), {
                    before: a,
                    after: "]",
                    ...u.current()
                });
                return l(), n.stack = c, o(), "full" !== i && s && s === f ? "shortcut" === i ? a = a.slice(0, -1) : a += u.move("]") : a += u.move(f + "]"), a
            }

            function tg(e) {
                let t = e.options.bullet || "*";
                if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
                return t
            }

            function tm(e) {
                let t = e.options.bulletOrdered || ".";
                if ("." !== t && ")" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
                return t
            }

            function ty(e) {
                let t = e.options.rule || "*";
                if ("*" !== t && "-" !== t && "_" !== t) throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
                return t
            }

            function tx(e, t, n, r) {
                let i = function(e) {
                        let t = e.options.strong || "*";
                        if ("*" !== t && "_" !== t) throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
                        return t
                    }(n),
                    o = n.enter("strong"),
                    l = eG(r),
                    u = l.move(i + i);
                return u += l.move(tr(e, n, {
                    before: u,
                    after: i,
                    ...l.current()
                })) + l.move(i + i), o(), u
            }
            ta.peek = function() {
                return "<"
            }, ts.peek = function() {
                return "!"
            }, tc.peek = function() {
                return "!"
            }, tf.peek = function() {
                return "`"
            }, th.peek = function(e, t, n) {
                return tp(e, n) ? "<" : "["
            }, td.peek = function() {
                return "["
            }, tx.peek = function(e, t, n) {
                return n.options.strong || "*"
            };
            let tv = {
                    blockquote: function(e, t, n, r) {
                        let i = n.enter("blockquote"),
                            o = eG(r);
                        o.move("> "), o.shift(2);
                        let l = e0(eZ(e, n, o.current()), e1);
                        return i(), l
                    },
                    break: e6,
                    code: function(e, t, n, r) {
                        let i = function(e) {
                                let t = e.options.fence || "`";
                                if ("`" !== t && "~" !== t) throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
                                return t
                            }(n),
                            o = e.value || "",
                            l = "`" === i ? "GraveAccent" : "Tilde";
                        if (e4(e, n)) {
                            let u = n.enter("codeIndented"),
                                a = e0(o, te);
                            return u(), a
                        }
                        let s = eG(r),
                            c = i.repeat(Math.max(function(e, t) {
                                let n = String(e),
                                    r = n.indexOf(t),
                                    i = r,
                                    o = 0,
                                    l = 0;
                                if ("string" != typeof t) throw TypeError("Expected substring");
                                for (; - 1 !== r;) r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
                                return l
                            }(o, i) + 1, 3)),
                            f = n.enter("codeFenced"),
                            p = s.move(c);
                        if (e.lang) {
                            let h = n.enter("codeFencedLang" + l);
                            p += s.move(e9(n, e.lang, {
                                before: p,
                                after: " ",
                                encode: ["`"],
                                ...s.current()
                            })), h()
                        }
                        if (e.lang && e.meta) {
                            let d = n.enter("codeFencedMeta" + l);
                            p += s.move(" "), p += s.move(e9(n, e.meta, {
                                before: p,
                                after: "\n",
                                encode: ["`"],
                                ...s.current()
                            })), d()
                        }
                        return p += s.move("\n"), o && (p += s.move(o + "\n")), p += s.move(c), f(), p
                    },
                    definition: function(e, t, n, r) {
                        let i = tn(n),
                            o = n.enter("definition"),
                            l = n.enter("label"),
                            u = eG(r),
                            a = u.move("[");
                        return a += u.move(e9(n, tt(e), {
                            before: a,
                            after: "]",
                            ...u.current()
                        })) + u.move("]: "), l(), !e.url || /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), a += u.move("<"), a += u.move(e9(n, e.url, {
                            before: a,
                            after: ">",
                            ...u.current()
                        })) + u.move(">")) : (l = n.enter("destinationRaw"), a += u.move(e9(n, e.url, {
                            before: a,
                            after: e.title ? " " : "\n",
                            ...u.current()
                        }))), l(), e.title && (l = n.enter("title" + ('"' === i ? "Quote" : "Apostrophe")), a += u.move(" " + i), a += u.move(e9(n, e.title, {
                            before: a,
                            after: i,
                            ...u.current()
                        })) + u.move(i), l()), o(), a
                    },
                    emphasis: ti,
                    hardBreak: e6,
                    heading: function(e, t, n, r) {
                        let i = Math.max(Math.min(6, e.depth || 1), 1),
                            o = eG(r);
                        if (tu(e, n)) {
                            let l = n.enter("headingSetext"),
                                u = n.enter("phrasing"),
                                a = tr(e, n, { ...o.current(),
                                    before: "\n",
                                    after: "\n"
                                });
                            return u(), l(), a + "\n" + (1 === i ? "=" : "-").repeat(a.length - (Math.max(a.lastIndexOf("\r"), a.lastIndexOf("\n")) + 1))
                        }
                        let s = "#".repeat(i),
                            c = n.enter("headingAtx"),
                            f = n.enter("phrasing");
                        o.move(s + " ");
                        let p = tr(e, n, {
                            before: "# ",
                            after: "\n",
                            ...o.current()
                        });
                        return /^[\t ]/.test(p) && (p = "&#x" + p.charCodeAt(0).toString(16).toUpperCase() + ";" + p.slice(1)), p = p ? s + " " + p : s, n.options.closeAtx && (p += " " + s), f(), c(), p
                    },
                    html: ta,
                    image: ts,
                    imageReference: tc,
                    inlineCode: tf,
                    link: th,
                    linkReference: td,
                    list: function(e, t, n, r) {
                        let i = n.enter("list"),
                            o = n.bulletCurrent,
                            l = e.ordered ? tm(n) : tg(n),
                            u = e.ordered ? function(e) {
                                let t = tm(e),
                                    n = e.options.bulletOrderedOther;
                                if (!n) return "." === t ? ")" : ".";
                                if ("." !== n && ")" !== n) throw Error("Cannot serialize items with `" + n + "` for `options.bulletOrderedOther`, expected `*`, `+`, or `-`");
                                if (n === t) throw Error("Expected `bulletOrdered` (`" + t + "`) and `bulletOrderedOther` (`" + n + "`) to be different");
                                return n
                            }(n) : function(e) {
                                let t = tg(e),
                                    n = e.options.bulletOther;
                                if (!n) return "*" === t ? "-" : "*";
                                if ("*" !== n && "+" !== n && "-" !== n) throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
                                if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
                                return n
                            }(n),
                            a = n.bulletLastUsed,
                            s = !1;
                        if (t && (e.ordered ? n.options.bulletOrderedOther : n.options.bulletOther) && a && l === a && (s = !0), !e.ordered) {
                            let c = e.children ? e.children[0] : void 0;
                            if ("*" !== l && "-" !== l || !c || c.children && c.children[0] || "list" !== n.stack[n.stack.length - 1] || "listItem" !== n.stack[n.stack.length - 2] || "list" !== n.stack[n.stack.length - 3] || "listItem" !== n.stack[n.stack.length - 4] || 0 !== n.indexStack[n.indexStack.length - 1] || 0 !== n.indexStack[n.indexStack.length - 2] || 0 !== n.indexStack[n.indexStack.length - 3] || (s = !0), ty(n) === l && c) {
                                let f = -1;
                                for (; ++f < e.children.length;) {
                                    let p = e.children[f];
                                    if (p && "listItem" === p.type && p.children && p.children[0] && "thematicBreak" === p.children[0].type) {
                                        s = !0;
                                        break
                                    }
                                }
                            }
                        }
                        s && (l = u), n.bulletCurrent = l;
                        let h = eZ(e, n, r);
                        return n.bulletLastUsed = l, n.bulletCurrent = o, i(), h
                    },
                    listItem: function(e, t, n, r) {
                        let i = function(e) {
                                let t = e.options.listItemIndent || "tab";
                                if (1 === t || "1" === t) return "one";
                                if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                                return t
                            }(n),
                            o = n.bulletCurrent || tg(n);
                        t && "list" === t.type && t.ordered && (o = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + o);
                        let l = o.length + 1;
                        ("tab" === i || "mixed" === i && (t && "list" === t.type && t.spread || e.spread)) && (l = 4 * Math.ceil(l / 4));
                        let u = eG(r);
                        u.move(o + " ".repeat(l - o.length)), u.shift(l);
                        let a = n.enter("listItem"),
                            s = e0(eZ(e, n, u.current()), function(e, t, n) {
                                return t ? (n ? "" : " ".repeat(l)) + e : (n ? o : o + " ".repeat(l - o.length)) + e
                            });
                        return a(), s
                    },
                    paragraph: function(e, t, n, r) {
                        let i = n.enter("paragraph"),
                            o = n.enter("phrasing"),
                            l = tr(e, n, r);
                        return o(), i(), l
                    },
                    root: function(e, t, n, r) {
                        return eZ(e, n, r)
                    },
                    strong: tx,
                    text: function(e, t, n, r) {
                        return e9(n, e.value, r)
                    },
                    thematicBreak: function(e, t, n) {
                        let r = (ty(n) + (n.options.ruleSpaces ? " " : "")).repeat(function(e) {
                            let t = e.options.ruleRepetition || 3;
                            if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
                            return t
                        }(n));
                        return n.options.ruleSpaces ? r.slice(0, -1) : r
                    }
                },
                tb = [function(e, t, n, r) {
                    if ("code" === t.type && e4(t, r) && ("list" === e.type || e.type === t.type && e4(e, r)) || "list" === e.type && e.type === t.type && Boolean(e.ordered) === Boolean(t.ordered) && !(e.ordered ? r.options.bulletOrderedOther : r.options.bulletOther)) return !1;
                    if ("spread" in n && "boolean" == typeof n.spread) {
                        if ("paragraph" === e.type && (e.type === t.type || "definition" === t.type || "heading" === t.type && tu(t, r))) return;
                        return n.spread ? 1 : 0
                    }
                }],
                tk = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"],
                tS = [{
                    character: "	",
                    after: "[\\r\\n]",
                    inConstruct: "phrasing"
                }, {
                    character: "	",
                    before: "[\\r\\n]",
                    inConstruct: "phrasing"
                }, {
                    character: "	",
                    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
                }, {
                    character: "\r",
                    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
                }, {
                    character: "\n",
                    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
                }, {
                    character: " ",
                    after: "[\\r\\n]",
                    inConstruct: "phrasing"
                }, {
                    character: " ",
                    before: "[\\r\\n]",
                    inConstruct: "phrasing"
                }, {
                    character: " ",
                    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
                }, {
                    character: "!",
                    after: "\\[",
                    inConstruct: "phrasing",
                    notInConstruct: tk
                }, {
                    character: '"',
                    inConstruct: "titleQuote"
                }, {
                    atBreak: !0,
                    character: "#"
                }, {
                    character: "#",
                    inConstruct: "headingAtx",
                    after: "(?:[\r\n]|$)"
                }, {
                    character: "&",
                    after: "[#A-Za-z]",
                    inConstruct: "phrasing"
                }, {
                    character: "'",
                    inConstruct: "titleApostrophe"
                }, {
                    character: "(",
                    inConstruct: "destinationRaw"
                }, {
                    before: "\\]",
                    character: "(",
                    inConstruct: "phrasing",
                    notInConstruct: tk
                }, {
                    atBreak: !0,
                    before: "\\d+",
                    character: ")"
                }, {
                    character: ")",
                    inConstruct: "destinationRaw"
                }, {
                    atBreak: !0,
                    character: "*"
                }, {
                    character: "*",
                    inConstruct: "phrasing",
                    notInConstruct: tk
                }, {
                    atBreak: !0,
                    character: "+"
                }, {
                    atBreak: !0,
                    character: "-"
                }, {
                    atBreak: !0,
                    before: "\\d+",
                    character: ".",
                    after: "(?:[ 	\r\n]|$)"
                }, {
                    atBreak: !0,
                    character: "<",
                    after: "[!/?A-Za-z]"
                }, {
                    character: "<",
                    after: "[!/?A-Za-z]",
                    inConstruct: "phrasing",
                    notInConstruct: tk
                }, {
                    character: "<",
                    inConstruct: "destinationLiteral"
                }, {
                    atBreak: !0,
                    character: "="
                }, {
                    atBreak: !0,
                    character: ">"
                }, {
                    character: ">",
                    inConstruct: "destinationLiteral"
                }, {
                    atBreak: !0,
                    character: "["
                }, {
                    character: "[",
                    inConstruct: "phrasing",
                    notInConstruct: tk
                }, {
                    character: "[",
                    inConstruct: ["label", "reference"]
                }, {
                    character: "\\",
                    after: "[\\r\\n]",
                    inConstruct: "phrasing"
                }, {
                    character: "]",
                    inConstruct: ["label", "reference"]
                }, {
                    atBreak: !0,
                    character: "_"
                }, {
                    character: "_",
                    inConstruct: "phrasing",
                    notInConstruct: tk
                }, {
                    atBreak: !0,
                    character: "`"
                }, {
                    character: "`",
                    inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
                }, {
                    character: "`",
                    inConstruct: "phrasing",
                    notInConstruct: tk
                }, {
                    atBreak: !0,
                    character: "~"
                }];

            function tC(e) {
                throw Error("Cannot handle value `" + e + "`, expected node")
            }

            function tw(e) {
                throw Error("Cannot handle unknown node `" + e.type + "`")
            }

            function tE(e, t) {
                if ("definition" === e.type && e.type === t.type) return 0
            }
            let tA = S().use(function(e) {
                let t = t => {
                    let n = this.data("settings");
                    return eW(t, Object.assign({}, n, e, {
                        extensions: this.data("micromarkExtensions") || [],
                        mdastExtensions: this.data("fromMarkdownExtensions") || []
                    }))
                };
                Object.assign(this, {
                    Parser: t
                })
            }).use(function(e) {
                let t = t => {
                    let n = this.data("settings");
                    return function(e, t = {}) {
                        let n = {
                            enter: function(e) {
                                return n.stack.push(e),
                                    function() {
                                        n.stack.pop()
                                    }
                            },
                            stack: [],
                            unsafe: [],
                            join: [],
                            handlers: {},
                            options: {},
                            indexStack: []
                        };
                        eK(n, {
                            unsafe: tS,
                            join: tb,
                            handlers: tv
                        }), eK(n, t), n.options.tightDefinitions && eK(n, {
                            join: [tE]
                        }), n.handle = function(e, t) {
                            let n = t || {};

                            function r(t, ...n) {
                                let i = r.invalid,
                                    o = r.handlers;
                                if (t && eQ.call(t, e)) {
                                    let l = String(t[e]);
                                    i = eQ.call(o, l) ? o[l] : r.unknown
                                }
                                if (i) return i.call(this, t, ...n)
                            }
                            return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r
                        }("type", {
                            invalid: tC,
                            unknown: tw,
                            handlers: n.handlers
                        });
                        let r = n.handle(e, null, n, {
                            before: "\n",
                            after: "\n",
                            now: {
                                line: 1,
                                column: 1
                            },
                            lineShift: 0
                        });
                        return r && 10 !== r.charCodeAt(r.length - 1) && 13 !== r.charCodeAt(r.length - 1) && (r += "\n"), r
                    }(t, Object.assign({}, n, e, {
                        extensions: this.data("toMarkdownExtensions") || []
                    }))
                };
                Object.assign(this, {
                    Compiler: t
                })
            }).freeze()
        },
        19645: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return r
                }
            });
            let r = function(e) {
                if (null == e) return o;
                if ("string" == typeof e) return i(function(t) {
                    return t && t.type === e
                });
                if ("object" == typeof e) return Array.isArray(e) ? function(e) {
                    let t = [],
                        n = -1;
                    for (; ++n < e.length;) t[n] = r(e[n]);
                    return i(function(...e) {
                        let n = -1;
                        for (; ++n < t.length;)
                            if (t[n].call(this, ...e)) return !0;
                        return !1
                    })
                }(e) : i(function(t) {
                    let n;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !0
                });
                if ("function" == typeof e) return i(e);
                throw Error("Expected function, string, or object as test")
            };

            function i(e) {
                return function(...t) {
                    return Boolean(e.call(this, ...t))
                }
            }

            function o() {
                return !0
            }
        },
        55765: function(e, t, n) {
            "use strict";
            n.d(t, {
                BK: function() {
                    return i
                },
                S4: function() {
                    return o
                }
            });
            var r = n(19645);
            let i = !1,
                o = function(e, t, n, o) {
                    "function" == typeof t && "function" != typeof n && (o = n, n = t, t = null);
                    let l = (0, r.O)(t),
                        u = o ? -1 : 1;
                    (function e(r, a, s) {
                        let c;
                        let f = "object" == typeof r && null !== r ? r : {};
                        return "string" == typeof f.type && (c = "string" == typeof f.tagName ? f.tagName : "string" == typeof f.name ? f.name : void 0, Object.defineProperty(p, "name", {
                            value: "node (" + f.type + (c ? "<" + c + ">" : "") + ")"
                        })), p;

                        function p() {
                            var c;
                            let f, p, h, d = [];
                            if ((!t || l(r, a, s[s.length - 1] || null)) && (d = Array.isArray(c = n(r, s)) ? c : "number" == typeof c ? [!0, c] : [c])[0] === i) return d;
                            if (r.children && "skip" !== d[0])
                                for (p = (o ? r.children.length : -1) + u, h = s.concat(r); p > -1 && p < r.children.length;) {
                                    if ((f = e(r.children[p], p, h)())[0] === i) return f;
                                    p = "number" == typeof f[1] ? f[1] : p + u
                                }
                            return d
                        }
                    })(e, null, [])()
                }
        },
        6393: function(e, t, n) {
            "use strict";
            n.d(t, {
                Vn: function() {
                    return i
                }
            });
            var r = n(55765);
            let i = function(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), (0, r.S4)(e, t, function(e, t) {
                    let r = t[t.length - 1];
                    return n(e, r ? r.children.indexOf(e) : null, r)
                }, i)
            }
        }
    }
]);