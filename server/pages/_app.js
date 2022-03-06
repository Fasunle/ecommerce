"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/utilities.jsx

const SvgIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 28 28",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: props === null || props === void 0 ? void 0 : props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: props === null || props === void 0 ? void 0 : props.d,
                ...props === null || props === void 0 ? void 0 : props.path
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Footer.jsx


const Footer = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "flex flex-col items-center text-center absolute bottom-0 right-0 left-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "http://github.com/Fasunle/ecommerce",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SvgIcon, {
                                className: "icon",
                                viewBox: "0 0 16 16",
                                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
                                title: "Github"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Github"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "https://twitter.com/epitomekennie",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SvgIcon, {
                                className: "icon",
                                d: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",
                                title: "Twitter"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Follow me"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "https://www.linkedin.com/in/husseinblack",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SvgIcon, {
                                className: "icon",
                                d: "M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z",
                                title: "LinkedIn"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Follow me"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "mailto:kfasunle@gmail.com",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SvgIcon, {
                                className: "icon",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                fill: "none",
                                path: {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                },
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: "3",
                                title: "Hire Me"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Hire Me!"
                            })
                        ]
                    })
                })
            ]
        })
    })
;
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Nav.jsx


const Nav = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex flex-col items-center md:flex-row md:justify-between h-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo h-16 w-16 mt-12 mb-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/favicon.ico",
                    alt: "logo",
                    layout: "responsive",
                    width: 64,
                    height: 64
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "uppercase text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "md:flex justify-around md:space-x-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: "news"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: "products"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: "blog"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: "testimonials"
                            })
                        })
                    ]
                })
            })
        ]
    })
;
/* harmony default export */ const components_Nav = (Nav);

;// CONCATENATED MODULE: ./components/Layout.jsx



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "relative top-40 md:top-0",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(245)));
module.exports = __webpack_exports__;

})();