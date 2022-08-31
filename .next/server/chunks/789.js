"use strict";
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 5789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8010);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Rings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5245);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Rings__WEBPACK_IMPORTED_MODULE_5__]);
_Rings__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Layout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            console.log(url);
            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
        };
        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "container py-4",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: "text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container p-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Hecho por @pablolezcano"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "2022"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8010:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Navbar = ()=>/*#__PURE__*/ _jsx("nav", {
        class: "navbar navbar-expand-lg",
        children: /*#__PURE__*/ _jsxs("div", {
            class: "container-fluid",
            children: [
                /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: /*#__PURE__*/ _jsx("a", {
                        class: "navbar-brand",
                        children: "Pablo Lezcano"
                    })
                }),
                /*#__PURE__*/ _jsx("button", {
                    class: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarNav",
                    "aria-controls": "navbarNav",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ _jsx("span", {
                        class: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    class: "collapse navbar-collapse",
                    id: "navbarNav",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        class: "navbar-nav",
                        children: [
                            /*#__PURE__*/ _jsx("li", {
                                class: "nav-item",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: "/blog",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        class: "nav-link",
                                        children: "Blog"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                class: "nav-item",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: "/github",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        class: "nav-link",
                                        children: "GitHub"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                class: "nav-item",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: "/cv",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        class: "nav-link",
                                        children: "CV"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Navbar)));


/***/ }),

/***/ 5245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7064);
/* harmony import */ var vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_3__]);
three__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Rings = ()=>{
    const { 0: vantaEffect , 1: setVantaEffect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const vantaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!vantaEffect) {
            setVantaEffect(vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_2___default()({
                el: vantaRef.current,
                THREE: three__WEBPACK_IMPORTED_MODULE_3__,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xffffff
            }));
        }
        return ()=>{
            if (vantaEffect) vantaEffect.destory();
        };
    }, [
        vantaEffect
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "landing-header",
        ref: vantaRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "header-text",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "name text-nowrap ",
                        children: "Pablo Lezcano"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Desarrollador JS"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "header-links p-0 d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "m-2 card-small-a",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "github.svg",
                                                alt: "",
                                                width: "35",
                                                height: "auto"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "m-2 card-small-a",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "linkedin.svg",
                                                alt: "",
                                                width: "35",
                                                height: "auto"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "m-2 card-small-a",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "mail4.svg",
                                                alt: "",
                                                width: "35",
                                                height: "auto"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: " Ver m\xe1s"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;