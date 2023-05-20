(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        45728: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(71668)
            }])
        },
        71668: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return eh
                },
                default: function() {
                    return em
                }
            });
            var a = n(85893),
                r = n(67294),
                s = n(9008),
                i = n.n(s);
            let l = () => (0, a.jsxs)(i(), {
                    children: [(0, a.jsx)("meta", {
                        name: "description",
                        content: "My name is Raphael Aleixo, and I am a Brazilian product designer and creative front-end developer currently living in Montreal. This is my online portfolio. "
                    }), (0, a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
                    }), (0, a.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "apple-touch-icon.ico"
                    }), (0, a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "favicon-32x32.ico"
                    }), (0, a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "favicon-16x16.ico"
                    }), (0, a.jsx)("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }), (0, a.jsx)("link", {
                        rel: "preload",
                        href: "/fonts/CodecCold-Heavy.woff2",
                        as: "font"
                    }), (0, a.jsx)("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#20bf55"
                    }), (0, a.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#2d89ef"
                    }), (0, a.jsx)("meta", {
                        name: "theme-color",
                        content: "#20bf55"
                    }), (0, a.jsx)("meta", {
                        name: "apple-mobile-web-app-title",
                        content: "Raphael Aleixo"
                    }), (0, a.jsx)("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }), (0, a.jsx)("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "black"
                    }), (0, a.jsx)("meta", {
                        name: "application-name",
                        content: "Raphael Aleixo"
                    }), (0, a.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, a.jsx)("meta", {
                        property: "og:url",
                        content: "https://aleixo.me/"
                    }), (0, a.jsx)("meta", {
                        property: "og:title",
                        content: "Raphael Aleixo"
                    }), (0, a.jsx)("meta", {
                        property: "og:description",
                        content: "Front end developer and UX specialist. Online portfolio and CV."
                    }), (0, a.jsx)("meta", {
                        property: "og:image",
                        content: "https://aleixo.me/social.jpg"
                    }), (0, a.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), (0, a.jsx)("meta", {
                        property: "twitter:url",
                        content: "https://aleixo.me/"
                    }), (0, a.jsx)("meta", {
                        property: "twitter:title",
                        content: "Raphael Aleixo"
                    }), (0, a.jsx)("meta", {
                        property: "twitter:description",
                        content: "Front end developer and UX specialist. Online portfolio and CV."
                    }), (0, a.jsx)("meta", {
                        property: "twitter:image",
                        content: "https://aleixo.me/social.jpg"
                    })]
                }),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l, {}), t]
                    })
                };
            var c = n(39351),
                d = n.n(c);
            let h = e => {
                let {
                    children: t
                } = e, n = () => r.Children.map(t, e => r.cloneElement(e, {
                    className: "".concat(e.props.className, " ").concat(d().wrapper)
                }));
                return (0, a.jsx)(n, {})
            };
            var m = n(82500),
                u = n.n(m);
            let x = e => {
                let {
                    component: t,
                    onClick: n,
                    href: r,
                    target: s,
                    children: i,
                    download: l = !1,
                    loader: o = !1,
                    loading: c
                } = e, d = o ? u().loader : u().button;
                return (0, a.jsx)("a" === t ? "a" : "button", {
                    className: "".concat(d, " ").concat(c ? "loading" : ""),
                    onClick: n,
                    href: r,
                    target: s,
                    download: l,
                    children: i
                })
            };
            var p = n(60215),
                f = n.n(p);
            let j = e => {
                let {
                    activeSection: t
                } = e, [n, s] = (0, r.useState)("");
                return (0, r.useEffect)(() => {
                    0 === t.length ? s("in") : s("out")
                }, [t]), (0, a.jsx)("svg", {
                    className: f().rect,
                    children: (0, a.jsx)("rect", {
                        className: f()[n],
                        width: "100%",
                        height: "100%",
                        vectorEffect: "non-scaling-stroke",
                        strokeWidth: "0.1",
                        shapeRendering: "crispEdges"
                    })
                })
            };
            var g = n(28481),
                _ = n.n(g),
                v = n(9719),
                w = n(84520);
            async function b(e) {
                let t = await (0, v.j)().use(w.Z).process(e);
                return t.toString()
            }
            let y = e => {
                let {
                    data: t,
                    activeSection: n
                } = e, [s, i] = (0, r.useState)("");
                return (0, r.useEffect)(() => {
                    let e = async () => {
                        let e = await b(t.content);
                        i(e)
                    };
                    e()
                }, [t]), (0, a.jsx)(h, {
                    children: (0, a.jsxs)("header", {
                        className: _().header,
                        id: "hi",
                        children: [(0, a.jsx)(j, {
                            activeSection: n
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h1", {
                                children: t.description
                            }), (0, a.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: s
                                }
                            }), (0, a.jsx)(x, {
                                component: "a",
                                href: "#selected-work",
                                children: "View my works"
                            })]
                        })]
                    })
                })
            };
            var k = n(19231),
                N = n(11914),
                S = n.n(N);
            let E = e => {
                let {
                    children: t,
                    delay: n = 0
                } = e, [s, i] = (0, r.useState)(!1), l = (0, r.useRef)(), {
                    inViewport: o
                } = (0, k.NM)(l, {
                    rootMargin: "32px 0px"
                });
                (0, r.useEffect)(() => {
                    o ? i(!0) : i(!1)
                }, [o]);
                let c = s ? "".concat(S().fadeUp, " ").concat(S().active) : S().fadeUp;
                return (0, a.jsx)("span", {
                    className: c,
                    ref: l,
                    style: {
                        transitionDelay: "".concat(n, "ms")
                    },
                    children: t
                })
            };
            var A = n(54592),
                R = n.n(A);
            let C = e => {
                    let {
                        highlight: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: R().highlight,
                        "data-aos": "fade-up",
                        children: [(0, a.jsx)("figure", {
                            children: (0, a.jsx)("img", {
                                src: t.coverImage,
                                alt: "Fingerprint icon"
                            })
                        }), (0, a.jsx)("h3", {
                            children: t.title
                        }), (0, a.jsx)("p", {
                            children: t.description
                        })]
                    })
                },
                L = e => {
                    let {
                        highlights: t
                    } = e;
                    return (0, a.jsx)("article", {
                        className: R().highlights,
                        children: (0, a.jsx)("div", {
                            children: t.map((e, t) => (0, a.jsx)(E, {
                                delay: 200 * t,
                                children: (0, a.jsx)(C, {
                                    highlight: e
                                })
                            }, e.title))
                        })
                    })
                };
            var M = n(28161),
                F = n.n(M);
            let I = e => {
                let {
                    children: t,
                    className: n = "",
                    id: r,
                    title: s,
                    extra: i,
                    introduction: l,
                    forwardRef: o
                } = e;
                return (0, a.jsxs)("section", {
                    id: r,
                    className: "".concat(n, " ").concat(F().section),
                    ref: o,
                    children: [(0, a.jsxs)("header", {
                        children: [(0, a.jsx)("h2", {
                            children: s
                        }), (0, a.jsx)("p", {
                            children: l
                        }), i]
                    }), t]
                })
            };
            var T = n(45592),
                U = n.n(T);
            let W = e => {
                let {
                    data: t,
                    highlights: n,
                    setActiveSection: s,
                    unsetSection: i
                } = e, l = (0, r.useRef)(), {
                    inViewport: o
                } = (0, k.NM)(l, {
                    threshold: .3
                });
                return (0, r.useEffect)(() => {
                    o ? s("about-me") : i("about-me")
                }, [o]), (0, a.jsxs)(I, {
                    id: "about-me",
                    forwardRef: l,
                    title: t.title,
                    className: U().about,
                    introduction: t.description,
                    extra: (0, a.jsx)(x, {
                        component: "a",
                        href: "/raphael-aleixo-cv.pdf",
                        download: !0,
                        children: "Download my resum\xe9e"
                    }),
                    children: [(0, a.jsx)("figure", {
                        children: (0, a.jsx)(E, {
                            children: (0, a.jsx)("img", {
                                src: "images/bhavya.png",
                                width: "808",
                                height: "493",
                                alt: "A picture of myself, working."
                            })
                        })
                    }), (0, a.jsx)(L, {
                        highlights: n
                    })]
                })
            };
            var B = n(7930),
                z = n.n(B);
            let H = e => {
                    let {
                        name: t,
                        label: n,
                        type: s = "text",
                        component: i = "input"
                    } = e, [l, o] = (0, r.useState)(""), c = e => {
                        let {
                            type: t,
                            value: n
                        } = e.target, a = n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                        "email" === t && null === a ? o("Please enter a valid email address.") : "" !== n ? o("valid") : o("This field is required")
                    };
                    return (0, a.jsxs)("div", {
                        className: z().formItem,
                        children: [(0, a.jsx)("input" === i ? "input" : "textarea", {
                            id: t,
                            name: t,
                            required: !0,
                            type: s,
                            className: "valid" === l ? "valid" : "" !== l ? "invalid" : "",
                            onChange: c
                        }), "valid" !== l && "" !== l ? (0, a.jsx)("label", {
                            class: "error",
                            htmlFor: t,
                            children: l
                        }) : null, (0, a.jsx)("label", {
                            htmlFor: t,
                            children: n
                        })]
                    })
                },
                X = () => {
                    let [e, t] = (0, r.useState)(!1), [n, s] = (0, r.useState)(""), [i, l] = (0, r.useState)(""), o = e => {
                        t(!0), s(""), l(""), e.preventDefault();
                        let n = new FormData(e.target);
                        fetch("https://getform.io/f/8f4e2ebe-b120-4629-a5e6-043f777b165a", {
                            method: "POST",
                            body: n,
                            headers: {
                                Accept: "application/json"
                            }
                        }).then(() => {
                            s("Got it! I will reply as soon as possible. Thank you!"), l("form-success")
                        }).catch(() => {
                            s("There was a problem sending your request. You can try again later, or send me an e-mail"), l("form-error")
                        }).finally(() => {
                            t(!1)
                        })
                    };
                    return (0, a.jsx)("div", {
                        className: z().form,
                        "data-aos": "fade-up",
                        children: (0, a.jsxs)(E, {
                            children: [(0, a.jsxs)("form", {
                                id: "form",
                                onSubmit: o,
                                children: [(0, a.jsx)(H, {
                                    label: "Your name",
                                    name: "name"
                                }), (0, a.jsx)(H, {
                                    label: "Your e-mail",
                                    name: "email",
                                    type: "email"
                                }), (0, a.jsx)(H, {
                                    label: "Your message",
                                    name: "message",
                                    component: "textarea"
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsxs)(x, {
                                        loader: !0,
                                        loading: e,
                                        children: [(0, a.jsx)("span", {
                                            children: "Let's talk"
                                        }), (0, a.jsx)("div", {
                                            children: (0, a.jsx)("svg", {
                                                viewBox: "0 0 80 80",
                                                children: (0, a.jsx)("rect", {
                                                    x: "8",
                                                    y: "8",
                                                    width: "64",
                                                    height: "64"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("output", {
                                    className: i,
                                    children: n
                                })]
                            }), (0, a.jsx)("p", {
                                children: "(I can speak English, Hindi and French!)"
                            })]
                        })
                    })
                };
            var O = n(66350),
                P = n.n(O);
            let G = [{
                    name: "Twitter",
                    href: "",
                    logo: ""
                }, {
                    name: "Github",
                    href: "https://github.com/bhavya-chaurasia/",
                    logo: "/images/github-circle.svg"
                }, {
                    name: "Linked In",
                    href: "https://www.linkedin.com/in/bhavya-chaurasia/",
                    logo: "/images/linkedin.svg"
                }, {
                    name: "Medium",
                    href: "",
                    logo: ""
                }],
                V = e => {
                    let {
                        data: t,
                        setActiveSection: n,
                        unsetSection: s
                    } = e, i = (0, r.useRef)(), {
                        inViewport: l
                    } = (0, k.NM)(i, {
                        threshold: .3
                    });
                    return (0, r.useEffect)(() => {
                        l ? n("contact") : s("contact")
                    }, [l]), (0, a.jsx)(I, {
                        id: "contact",
                        title: t.title,
                        className: P().contact,
                        forwardRef: i,
                        children: (0, a.jsx)("div", {
                            children: (0, a.jsxs)("article", {
                                children: [(0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h3", {
                                        children: "Reach me at:"
                                    }), (0, a.jsx)("a", {
                                        href: "mailto:bhavyamchaurasia@gmail.com",
                                        children: "bhavyamchaurasia@gmail.com"
                                    }), (0, a.jsx)("a", {
                                        href: "tel:+91-910-950-2001",
                                        children: "+91 910 950-2001"
                                    })]
                                }), (0, a.jsxs)("aside", {
                                    children: [(0, a.jsx)("p", {
                                        children: t.description
                                    }), (0, a.jsx)("div", {
                                        children: G.map((e, t) => (0, a.jsx)(E, {
                                            delay: 100 * t,
                                            children: (0, a.jsxs)(x, {
                                                component: "a",
                                                target: "_blank",
                                                href: e.href,
                                                children: [(0, a.jsx)("span", {
                                                    className: "helptext",
                                                    children: e.name
                                                }), (0, a.jsx)("img", {
                                                    src: e.logo
                                                })]
                                            })
                                        }, e.name))
                                    })]
                                }), (0, a.jsx)(X, {})]
                            })
                        })
                    })
                };
            var Y = n(64076),
                D = n.n(Y);
            let Z = () => (0, a.jsxs)("footer", {
                className: "".concat(F().section, " ").concat(D().footer),
                children: [(0, a.jsx)("header", {
                    children: (0, a.jsx)("h2", {
                        children: "Colophon"
                    })
                }), (0, a.jsx)("div", {
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("dl", {
                            children: [(0, a.jsx)("dt", {
                                children: "Fonts"
                            }), (0, a.jsxs)("dd", {
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://www.huertatipografica.com/en/fonts/bitter-ht",
                                    children: "Bitter"
                                }), ", a Google Font by Sol Matas for Huerta Tipogr\xe1fica."]
                            }), (0, a.jsxs)("dd", {
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://www.zetafonts.com/codec",
                                    children: "Codec Cold"
                                }), ", designed by Cosimo Lorenzo Pancini, Francesco Canovaro and Andrea Tartarelli (Zetafonts)."]
                            }), (0, a.jsx)("dt", {
                                children: "Icons"
                            }), (0, a.jsxs)("dd", {
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://materialdesignicons.com/",
                                    children: "Material Design Icons"
                                }), ", maintained by Austin Andrews."]
                            }), (0, a.jsxs)("dd", {
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://graphicriver.net/item/1700-simple-line-icons/8639072",
                                    children: "1700 Simple Line Icons"
                                }), ", designed by mir_design."]
                            }), (0, a.jsx)("dt", {
                                children: "Resources"
                            }), (0, a.jsxs)("dd", {
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://nextjs.org/",
                                    children: "Next.js"
                                }), ", by Vercel as the framework of choice."]
                            }), (0, a.jsxs)("dd", {
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://vercel.com/home",
                                    children: "Vercel"
                                }), ", cloud platform for serverless deployment."]
                            }), (0, a.jsxs)("dd", {
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://outstatic.com/",
                                    children: "Outstatic"
                                }), ", a static CMS for Next.js."]
                            })]
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("p", {
                                children: "I want to express my gratitude for the joy and effort I've put into developing and constructing this website. However, I couldn't have achieved everything I envisioned without the abundant inspiration and assistance from remarkable online tools."
                            }), (0, a.jsx)("p", {
                                children: "In this final section, I aim to extend my appreciation and offer others a glimpse into the invaluable tools and resources that have played a significant role in bringing this portfolio to life."
                            }), (0, a.jsx)("p", {
                                children: "Thanks for stopping by."
                            })]
                        }), (0, a.jsx)("figure", {
                            children: (0, a.jsx)("img", {
                                alt: "My logo",
                                src: "apple-touch-icon.ico"
                            })
                        })]
                    })
                })]
            });
            var q = n(61524),
                J = n.n(q);
            let Q = () => {
                let e = (0, r.useRef)(),
                    [t, n] = (0, r.useState)("");
                return (0, r.useEffect)(() => {
                    let t = -100,
                        a = -100,
                        r = e.current;
                    if (r) {
                        document.addEventListener("mousemove", e => {
                            t = e.clientX, a = e.clientY, ["A", "BUTTON", "INPUT", "TEXTAREA"].includes(e.target.tagName) ? n("link") : e.target.closest(".draggable") ? n("drag") : n("")
                        }), document.addEventListener("mousedown", () => {
                            r.setAttribute("data-pressed", "pressed")
                        }), document.addEventListener("mouseup", () => {
                            r.setAttribute("data-pressed", "")
                        });
                        let s = () => {
                            r.style.transform = "translate(".concat(t, "px, ").concat(a, "px)"), requestAnimationFrame(s)
                        };
                        requestAnimationFrame(s)
                    }
                }, [e]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "".concat(J().cursor, " ").concat(J().pointer, " ").concat(J()[t] || ""),
                        ref: e
                    }), (0, a.jsx)("canvas", {
                        className: "".concat(J().cursor, " ").concat(J().canvas)
                    })]
                })
            };
            var K = n(78213),
                $ = n.n(K);
            let ee = e => {
                let {
                    selectedWork: t,
                    setSelectedWork: n
                } = e, [s, i] = (0, r.useState)(!1), [l, o] = (0, r.useState)("");
                return (0, r.useEffect)(() => {
                    if (t) {
                        let e = async () => {
                            let e = await b(t.content);
                            o(e)
                        };
                        e()
                    }
                }, [t]), (0, r.useEffect)(() => {
                    {
                        let e = document.documentElement;
                        0 === e.classList.length && null !== t ? (e.classList.add("overlay"), i(!0)) : e.classList.length > 0 && null !== t ? (e.classList.replace("remove-overlay", "overlay"), i(!0)) : (e.classList.replace("overlay", "remove-overlay"), i(!1))
                    }
                }, [t]), (0, a.jsxs)("div", {
                    className: $().modal,
                    children: [(0, a.jsxs)(x, {
                        onClick: () => n(null),
                        children: [(0, a.jsx)("span", {
                            className: "helptext",
                            children: "Close modal"
                        }), (0, a.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            children: (0, a.jsx)("path", {
                                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "".concat($().content, " ").concat(s ? "loaded" : ""),
                        children: t ? (0, a.jsx)(h, {
                            children: (0, a.jsxs)("div", {
                                children: [(0, a.jsxs)("header", {
                                    children: [(0, a.jsx)("h2", {
                                        children: t.title
                                    }), (0, a.jsx)("h3", {
                                        children: t.author.name
                                    })]
                                }), (0, a.jsx)("section", {
                                    children: (0, a.jsx)("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: l
                                        }
                                    })
                                })]
                            })
                        }) : null
                    })]
                })
            };
            var et = n(79621);
            let en = () => {
                    var e = document.createElement("div");
                    e.style.visibility = "hidden", e.style.width = "100px", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
                    var t = e.offsetWidth;
                    e.style.overflow = "scroll";
                    var n = document.createElement("div");
                    n.style.width = "100%", e.appendChild(n);
                    var a = n.offsetWidth;
                    return e.parentNode.removeChild(e), t - a
                },
                ea = e => {
                    let [t, n] = (0, r.useState)(null), [a, s] = (0, r.useState)(0), [i, l] = (0, r.useState)(0), [o, c] = (0, r.useState)(0), d = () => {
                        n({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    };
                    return (0, r.useEffect)(() => {
                        window.addEventListener("resize", d, !1)
                    }, []), (0, r.useEffect)(() => {
                        if (e.current) {
                            let t = e.current.firstChild;
                            l(t.offsetHeight), s(t.offsetWidth)
                        }
                        c(en() + 2)
                    }, [e, t]), {
                        width: a,
                        height: i,
                        scrollbarSize: o
                    }
                };
            var er = n(60392),
                es = n.n(er);
            let ei = e => {
                    let {
                        setSelectedWork: t,
                        project: n
                    } = e, s = (0, r.useRef)(), {
                        height: i,
                        scrollbarSize: l
                    } = ea(s), [o] = (0, et.G)({
                        direction: "horizontal",
                        friction: .1,
                        scrollMode: "native"
                    });
                    return (0, a.jsxs)("div", {
                        className: es().work,
                        children: [(0, a.jsx)(E, {
                            children: (0, a.jsx)("article", {
                                className: "draggable",
                                ref: s,
                                style: {
                                    height: i ? "".concat(i - l, "px") : "100%",
                                    "--scrollbar": "".concat(l, "px")
                                },
                                children: (0, a.jsx)("div", {
                                    ref: o,
                                    children: (0, a.jsx)("figure", {
                                        children: (0, a.jsx)("img", {
                                            src: n.coverImage,
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)("article", {
                            children: (0, a.jsxs)("div", {
                                children: [(0, a.jsx)("h3", {
                                    children: n.title
                                }), (0, a.jsx)("h4", {
                                    children: n.author.name
                                }), (0, a.jsx)("p", {
                                    children: n.description
                                }), (0, a.jsx)("button", {
                                    onClick: () => t(n),
                                    children: "More about this project"
                                })]
                            })
                        })]
                    })
                },
                el = e => {
                    let {
                        projects: t,
                        setActiveSection: n,
                        unsetSection: s
                    } = e, [i, l] = (0, r.useState)(null), o = (0, r.useRef)(), {
                        inViewport: c
                    } = (0, k.NM)(o, {
                        threshold: .2
                    });
                    (0, r.useEffect)(() => {
                        {
                            let e = new URL(document.location).searchParams,
                                n = e.get("project"),
                                a = t.find(e => e.title === n);
                            a && a !== i && l(a)
                        }
                    }, []), (0, r.useEffect)(() => {
                        c ? n("selected-work") : s("selected-work")
                    }, [c]);
                    let d = e => {
                        l(e); {
                            let t = new URLSearchParams(window.location.search);
                            null === e ? t.delete("project") : t.set("project", e.title);
                            let n = t.toString(),
                                a = window.location.pathname + !!n ? "?".concat(n) : "";
                            history.pushState(null, "", a)
                        }
                    };
                    return (0, a.jsxs)(I, {
                        id: "selected-work",
                        title: "Recent Projects",
                        forwardRef: o,
                        children: [t.map(e => (0, a.jsx)(ei, {
                            project: e,
                            setSelectedWork: d
                        }, e.slug)), (0, a.jsx)(ee, {
                            selectedWork: i,
                            setSelectedWork: d
                        })]
                    })
                };
            var eo = n(83692),
                ec = n.n(eo);
            let ed = e => {
                let {
                    activeSection: t
                } = e;
                return (0, a.jsxs)("nav", {
                    id: "nav",
                    className: ec()["fixed-nav"],
                    children: [(0, a.jsx)("h1", {
                        children: (0, a.jsx)("a", {
                            href: "#hi",
                            className: ec().logo,
                            children: "Bhavya Chaurasia: UX/UI and front end specialist"
                        })
                    }), (0, a.jsx)("div", {
                        className: ec().navigation,
                        children: (0, a.jsx)("ul", {
                            children: [{
                                target: "contact",
                                text: "Get in touch"
                            }, {
                                target: "about-me",
                                text: "Something About Myself"
                            }, {
                                target: "selected-work",
                                text: "Recent Projects"
                            }].map(e => (0, a.jsx)("li", {
                                className: t.includes(e.target) ? "active" : "",
                                children: (0, a.jsx)("a", {
                                    href: "#".concat(e.target),
                                    children: e.text
                                })
                            }, e.target))
                        })
                    })]
                })
            };
            var eh = !0;

            function em(e) {
                let {
                    pageContents: t,
                    highlights: n,
                    projects: s
                } = e, l = (0, r.useMemo)(() => {
                    let e = t.map(e => e.slug),
                        n = {};
                    return e.forEach(e => {
                        n[e] = t.find(t => t.slug === e)
                    }), n
                }, [t]), [c, d] = (0, r.useState)([]), h = e => {
                    d(t => [...t, e])
                }, m = e => {
                    d(t => t.filter(t => t !== e))
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(o, {
                        children: [(0, a.jsx)(i(), {
                            children: (0, a.jsx)("title", {
                                children: "Bhavya: UI/UX Designer and Creative Front-End Developer"
                            })
                        }), (0, a.jsx)(ed, {
                            activeSection: c
                        }), (0, a.jsx)(y, {
                            data: l.header,
                            activeSection: c
                        }), (0, a.jsx)(el, {
                            projects: s,
                            setActiveSection: h,
                            unsetSection: m
                        }), (0, a.jsx)(W, {
                            data: l.about,
                            highlights: n,
                            setActiveSection: h,
                            unsetSection: m
                        }), (0, a.jsx)(V, {
                            data: l.contact,
                            setActiveSection: h,
                            unsetSection: m
                        }), (0, a.jsx)(Z, {}), (0, a.jsx)(Q, {})]
                    })
                })
            }
        },
        45592: function(e) {
            e.exports = {
                about: "AboutBlock_about__ld6Hg"
            }
        },
        60215: function(e) {
            e.exports = {
                rect: "AnimatedRect_rect__HM1A2",
                in: "AnimatedRect_in__zJ1zU",
                draw: "AnimatedRect_draw__lvB9T",
                out: "AnimatedRect_out__JY8bG",
                undraw: "AnimatedRect_undraw__JXvEb"
            }
        },
        82500: function(e) {
            e.exports = {
                button: "Button_button__etXCZ",
                loader: "Button_loader__gx7FH",
                pathRect: "Button_pathRect__6Ue0A"
            }
        },
        66350: function(e) {
            e.exports = {
                contact: "Contact_contact__N15Ry"
            }
        },
        61524: function(e) {
            e.exports = {
                cursor: "Cursor_cursor__VC90n",
                pointer: "Cursor_pointer__YJlAr",
                link: "Cursor_link__ah8Bo",
                drag: "Cursor_drag__eb3VF",
                canvas: "Cursor_canvas__w9y4z"
            }
        },
        11914: function(e) {
            e.exports = {
                fadeUp: "FadeUp_fadeUp__ej_5s",
                active: "FadeUp_active__DcAVv"
            }
        },
        64076: function(e) {
            e.exports = {
                footer: "Footer_footer__5bZGY"
            }
        },
        7930: function(e) {
            e.exports = {
                form: "Form_form__OpGZl",
                formItem: "Form_formItem__Ctq_Z"
            }
        },
        28481: function(e) {
            e.exports = {
                header: "Header_header__JAW_Z"
            }
        },
        54592: function(e) {
            e.exports = {
                highlights: "Highlights_highlights__bek0I",
                highlight: "Highlights_highlight__I0Kzj"
            }
        },
        83692: function(e) {
            e.exports = {
                "fixed-nav": "Nav_fixed-nav__QoX6B",
                logo: "Nav_logo__UEWaR",
                navigation: "Nav_navigation__o2ac3",
                active: "Nav_active__3EK_o"
            }
        },
        28161: function(e) {
            e.exports = {
                section: "Section_section__QV_9w"
            }
        },
        60392: function(e) {
            e.exports = {
                work: "Works_work__6QBYk"
            }
        },
        78213: function(e) {
            e.exports = {
                modal: "Modal_modal__4W_v9",
                roadRunnerIn: "Modal_roadRunnerIn__TA8PJ",
                roadRunnerOut: "Modal_roadRunnerOut__rrhuu",
                content: "Modal_content__8EGWM",
                modal__editable: "Modal_modal__editable__4XiXV"
            }
        },
        39351: function(e) {
            e.exports = {
                wrapper: "Wrapper_wrapper___M12Y"
            }
        }
    },
    function(e) {
        e.O(0, [455, 774, 888, 179], function() {
            return e(e.s = 45728)
        }), _N_E = e.O()
    }
]);