"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-async-script";
exports.ids = ["vendor-chunks/react-async-script"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-async-script/lib/esm/async-script-loader.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-async-script/lib/esm/async-script-loader.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeAsyncScript)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ \"(ssr)/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _inheritsLoose(subClass, superClass) {\n    subClass.prototype = Object.create(superClass.prototype);\n    subClass.prototype.constructor = subClass;\n    subClass.__proto__ = superClass;\n}\n\n\n\nvar SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function\nvar idCount = 0;\nfunction makeAsyncScript(getScriptURL, options) {\n    options = options || {};\n    return function wrapWithAsyncScript(WrappedComponent) {\n        var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || \"Component\";\n        var AsyncScriptLoader = /*#__PURE__*/ function(_Component) {\n            _inheritsLoose(AsyncScriptLoader, _Component);\n            function AsyncScriptLoader(props, context) {\n                var _this;\n                _this = _Component.call(this, props, context) || this;\n                _this.state = {};\n                _this.__scriptURL = \"\";\n                return _this;\n            }\n            var _proto = AsyncScriptLoader.prototype;\n            _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {\n                if (!this.__scriptLoaderID) {\n                    this.__scriptLoaderID = \"async-script-loader-\" + idCount++;\n                }\n                return this.__scriptLoaderID;\n            };\n            _proto.setupScriptURL = function setupScriptURL() {\n                this.__scriptURL = typeof getScriptURL === \"function\" ? getScriptURL() : getScriptURL;\n                return this.__scriptURL;\n            };\n            _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {\n                var _this2 = this;\n                // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry\n                this.setState(state, function() {\n                    return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);\n                });\n            };\n            _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {\n                var mapEntry = SCRIPT_MAP[this.__scriptURL];\n                if (!mapEntry || !mapEntry.loaded) {\n                    throw new Error(\"Script is not loaded.\");\n                }\n                for(var obsKey in mapEntry.observers){\n                    mapEntry.observers[obsKey](mapEntry);\n                }\n                delete window[options.callbackName];\n            };\n            _proto.componentDidMount = function componentDidMount() {\n                var _this3 = this;\n                var scriptURL = this.setupScriptURL();\n                var key = this.asyncScriptLoaderGetScriptLoaderID();\n                var _options = options, globalName = _options.globalName, callbackName = _options.callbackName, scriptId = _options.scriptId; // check if global object already attached to window\n                if (globalName && typeof window[globalName] !== \"undefined\") {\n                    SCRIPT_MAP[scriptURL] = {\n                        loaded: true,\n                        observers: {}\n                    };\n                } // check if script loading already\n                if (SCRIPT_MAP[scriptURL]) {\n                    var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then \"finish\"\n                    if (entry && (entry.loaded || entry.errored)) {\n                        this.asyncScriptLoaderHandleLoad(entry);\n                        return;\n                    } // if still loading then callback to observer queue\n                    entry.observers[key] = function(entry) {\n                        return _this3.asyncScriptLoaderHandleLoad(entry);\n                    };\n                    return;\n                }\n                /*\n         * hasn't started loading\n         * start the \"magic\"\n         * setup script to load and observers\n         */ var observers = {};\n                observers[key] = function(entry) {\n                    return _this3.asyncScriptLoaderHandleLoad(entry);\n                };\n                SCRIPT_MAP[scriptURL] = {\n                    loaded: false,\n                    observers: observers\n                };\n                var script = document.createElement(\"script\");\n                script.src = scriptURL;\n                script.async = true;\n                for(var attribute in options.attributes){\n                    script.setAttribute(attribute, options.attributes[attribute]);\n                }\n                if (scriptId) {\n                    script.id = scriptId;\n                }\n                var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {\n                    if (SCRIPT_MAP[scriptURL]) {\n                        var mapEntry = SCRIPT_MAP[scriptURL];\n                        var observersMap = mapEntry.observers;\n                        for(var obsKey in observersMap){\n                            if (func(observersMap[obsKey])) {\n                                delete observersMap[obsKey];\n                            }\n                        }\n                    }\n                };\n                if (callbackName && \"undefined\" !== \"undefined\") {}\n                script.onload = function() {\n                    var mapEntry = SCRIPT_MAP[scriptURL];\n                    if (mapEntry) {\n                        mapEntry.loaded = true;\n                        callObserverFuncAndRemoveObserver(function(observer) {\n                            if (callbackName) {\n                                return false;\n                            }\n                            observer(mapEntry);\n                            return true;\n                        });\n                    }\n                };\n                script.onerror = function() {\n                    var mapEntry = SCRIPT_MAP[scriptURL];\n                    if (mapEntry) {\n                        mapEntry.errored = true;\n                        callObserverFuncAndRemoveObserver(function(observer) {\n                            observer(mapEntry);\n                            return true;\n                        });\n                    }\n                };\n                document.body.appendChild(script);\n            };\n            _proto.componentWillUnmount = function componentWillUnmount() {\n                // Remove tag script\n                var scriptURL = this.__scriptURL;\n                if (options.removeOnUnmount === true) {\n                    var allScripts = document.getElementsByTagName(\"script\");\n                    for(var i = 0; i < allScripts.length; i += 1){\n                        if (allScripts[i].src.indexOf(scriptURL) > -1) {\n                            if (allScripts[i].parentNode) {\n                                allScripts[i].parentNode.removeChild(allScripts[i]);\n                            }\n                        }\n                    }\n                } // Clean the observer entry\n                var mapEntry = SCRIPT_MAP[scriptURL];\n                if (mapEntry) {\n                    delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];\n                    if (options.removeOnUnmount === true) {\n                        delete SCRIPT_MAP[scriptURL];\n                    }\n                }\n            };\n            _proto.render = function render() {\n                var globalName = options.globalName; // remove asyncScriptOnLoad from childProps\n                var _this$props = this.props, asyncScriptOnLoad = _this$props.asyncScriptOnLoad, forwardedRef = _this$props.forwardedRef, childProps = _objectWithoutPropertiesLoose(_this$props, [\n                    \"asyncScriptOnLoad\",\n                    \"forwardedRef\"\n                ]); // eslint-disable-line no-unused-vars\n                if (globalName && \"undefined\" !== \"undefined\") {}\n                childProps.ref = forwardedRef;\n                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, childProps);\n            };\n            return AsyncScriptLoader;\n        }(react__WEBPACK_IMPORTED_MODULE_0__.Component); // Note the second param \"ref\" provided by React.forwardRef.\n        // We can pass it along to AsyncScriptLoader as a regular prop, e.g. \"forwardedRef\"\n        // And it can then be attached to the Component.\n        var ForwardedComponent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(props, ref) {\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AsyncScriptLoader, _extends({}, props, {\n                forwardedRef: ref\n            }));\n        });\n        ForwardedComponent.displayName = \"AsyncScriptLoader(\" + wrappedComponentName + \")\";\n        ForwardedComponent.propTypes = {\n            asyncScriptOnLoad: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)\n        };\n        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(ForwardedComponent, WrappedComponent);\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtYXN5bmMtc2NyaXB0L2xpYi9lc20vYXN5bmMtc2NyaXB0LWxvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0E7SUFBYUEsV0FBV0MsT0FBT0MsTUFBTSxJQUFJLFNBQVVDLE1BQU07UUFBSSxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUMsVUFBVUMsTUFBTSxFQUFFRixJQUFLO1lBQUUsSUFBSUcsU0FBU0YsU0FBUyxDQUFDRCxFQUFFO1lBQUUsSUFBSyxJQUFJSSxPQUFPRCxPQUFRO2dCQUFFLElBQUlOLE9BQU9RLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNKLFFBQVFDLE1BQU07b0JBQUVMLE1BQU0sQ0FBQ0ssSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUk7Z0JBQUU7WUFBRTtRQUFFO1FBQUUsT0FBT0w7SUFBUTtJQUFHLE9BQU9ILFNBQVNZLEtBQUssQ0FBQyxJQUFJLEVBQUVQO0FBQVk7QUFFNVQsU0FBU1EsOEJBQThCTixNQUFNLEVBQUVPLFFBQVE7SUFBSSxJQUFJUCxVQUFVLE1BQU0sT0FBTyxDQUFDO0lBQUcsSUFBSUosU0FBUyxDQUFDO0lBQUcsSUFBSVksYUFBYWQsT0FBT2UsSUFBSSxDQUFDVDtJQUFTLElBQUlDLEtBQUtKO0lBQUcsSUFBS0EsSUFBSSxHQUFHQSxJQUFJVyxXQUFXVCxNQUFNLEVBQUVGLElBQUs7UUFBRUksTUFBTU8sVUFBVSxDQUFDWCxFQUFFO1FBQUUsSUFBSVUsU0FBU0csT0FBTyxDQUFDVCxRQUFRLEdBQUc7UUFBVUwsTUFBTSxDQUFDSyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSTtJQUFFO0lBQUUsT0FBT0w7QUFBUTtBQUVsVCxTQUFTZSxlQUFlQyxRQUFRLEVBQUVDLFVBQVU7SUFBSUQsU0FBU1YsU0FBUyxHQUFHUixPQUFPb0IsTUFBTSxDQUFDRCxXQUFXWCxTQUFTO0lBQUdVLFNBQVNWLFNBQVMsQ0FBQ2EsV0FBVyxHQUFH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VTtvQkFDWixPQUFPQSxTQUFTSSxTQUFTLENBQUMsSUFBSSxDQUFDWixrQ0FBa0MsR0FBRztvQkFFcEUsSUFBSWQsUUFBUXNELGVBQWUsS0FBSyxNQUFNO3dCQUNwQyxPQUFPMUQsVUFBVSxDQUFDbUMsVUFBVTtvQkFDOUI7Z0JBQ0Y7WUFDRjtZQUVBbEIsT0FBTzhDLE1BQU0sR0FBRyxTQUFTQTtnQkFDdkIsSUFBSTFCLGFBQWFqQyxRQUFRaUMsVUFBVSxFQUFFLDJDQUEyQztnQkFFaEYsSUFBSTJCLGNBQWMsSUFBSSxDQUFDcEQsS0FBSyxFQUN4Qlksb0JBQW9Cd0MsWUFBWXhDLGlCQUFpQixFQUNqRHlDLGVBQWVELFlBQVlDLFlBQVksRUFDdkNDLGFBQWFsRiw4QkFBOEJnRixhQUFhO29CQUFDO29CQUFxQjtpQkFBZSxHQUFHLHFDQUFxQztnQkFHekksSUFBSTNCLGNBQWMsZ0JBQWtCLGFBQWEsRUFFaEQ7Z0JBRUQ2QixXQUFXRSxHQUFHLEdBQUdIO2dCQUNqQixxQkFBT3JFLG9EQUFhQSxDQUFDVSxrQkFBa0I0RDtZQUN6QztZQUVBLE9BQU94RDtRQUNULEVBQUVmLDRDQUFTQSxHQUFHLDREQUE0RDtRQUMxRSxtRkFBbUY7UUFDbkYsZ0RBQWdEO1FBR2hELElBQUkwRSxtQ0FBcUJ4RSxpREFBVUEsQ0FBQyxTQUFVZSxLQUFLLEVBQUV3RCxHQUFHO1lBQ3RELHFCQUFPeEUsb0RBQWFBLENBQUNjLG1CQUFtQnZDLFNBQVMsQ0FBQyxHQUFHeUMsT0FBTztnQkFDMURxRCxjQUFjRztZQUNoQjtRQUNGO1FBQ0FDLG1CQUFtQjdELFdBQVcsR0FBRyx1QkFBdUJELHVCQUF1QjtRQUMvRThELG1CQUFtQkMsU0FBUyxHQUFHO1lBQzdCOUMsbUJBQW1CMUIsd0RBQWM7UUFDbkM7UUFDQSxPQUFPQyw4REFBWUEsQ0FBQ3NFLG9CQUFvQi9EO0lBQzFDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmRpYW4vLi9ub2RlX21vZHVsZXMvcmVhY3QtYXN5bmMtc2NyaXB0L2xpYi9lc20vYXN5bmMtc2NyaXB0LWxvYWRlci5qcz8xMzI2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCwgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tIFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtcbnZhciBTQ1JJUFRfTUFQID0ge307IC8vIEEgY291bnRlciB1c2VkIHRvIGdlbmVyYXRlIGEgdW5pcXVlIGlkIGZvciBlYWNoIGNvbXBvbmVudCB0aGF0IHVzZXMgdGhlIGZ1bmN0aW9uXG5cbnZhciBpZENvdW50ID0gMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VBc3luY1NjcmlwdChnZXRTY3JpcHRVUkwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aEFzeW5jU2NyaXB0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xuXG4gICAgdmFyIEFzeW5jU2NyaXB0TG9hZGVyID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKEFzeW5jU2NyaXB0TG9hZGVyLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gQXN5bmNTY3JpcHRMb2FkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICBfdGhpcy5fX3NjcmlwdFVSTCA9IFwiXCI7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IEFzeW5jU2NyaXB0TG9hZGVyLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQgPSBmdW5jdGlvbiBhc3luY1NjcmlwdExvYWRlckdldFNjcmlwdExvYWRlcklEKCkge1xuICAgICAgICBpZiAoIXRoaXMuX19zY3JpcHRMb2FkZXJJRCkge1xuICAgICAgICAgIHRoaXMuX19zY3JpcHRMb2FkZXJJRCA9IFwiYXN5bmMtc2NyaXB0LWxvYWRlci1cIiArIGlkQ291bnQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9fc2NyaXB0TG9hZGVySUQ7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2V0dXBTY3JpcHRVUkwgPSBmdW5jdGlvbiBzZXR1cFNjcmlwdFVSTCgpIHtcbiAgICAgICAgdGhpcy5fX3NjcmlwdFVSTCA9IHR5cGVvZiBnZXRTY3JpcHRVUkwgPT09IFwiZnVuY3Rpb25cIiA/IGdldFNjcmlwdFVSTCgpIDogZ2V0U2NyaXB0VVJMO1xuICAgICAgICByZXR1cm4gdGhpcy5fX3NjcmlwdFVSTDtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5hc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQgPSBmdW5jdGlvbiBhc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQoc3RhdGUpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgLy8gdXNlIHJlYWN0cyBzZXRTdGF0ZSBjYWxsYmFjayB0byBmaXJlIHByb3BzLmFzeW5jU2NyaXB0T25Mb2FkIHdpdGggbmV3IHN0YXRlL2VudHJ5XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzLmFzeW5jU2NyaXB0T25Mb2FkICYmIF90aGlzMi5wcm9wcy5hc3luY1NjcmlwdE9uTG9hZChfdGhpczIuc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5hc3luY1NjcmlwdExvYWRlclRyaWdnZXJPblNjcmlwdExvYWRlZCA9IGZ1bmN0aW9uIGFzeW5jU2NyaXB0TG9hZGVyVHJpZ2dlck9uU2NyaXB0TG9hZGVkKCkge1xuICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3RoaXMuX19zY3JpcHRVUkxdO1xuXG4gICAgICAgIGlmICghbWFwRW50cnkgfHwgIW1hcEVudHJ5LmxvYWRlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNjcmlwdCBpcyBub3QgbG9hZGVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIG9ic0tleSBpbiBtYXBFbnRyeS5vYnNlcnZlcnMpIHtcbiAgICAgICAgICBtYXBFbnRyeS5vYnNlcnZlcnNbb2JzS2V5XShtYXBFbnRyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgd2luZG93W29wdGlvbnMuY2FsbGJhY2tOYW1lXTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgc2NyaXB0VVJMID0gdGhpcy5zZXR1cFNjcmlwdFVSTCgpO1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5hc3luY1NjcmlwdExvYWRlckdldFNjcmlwdExvYWRlcklEKCk7XG4gICAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgICAgICBnbG9iYWxOYW1lID0gX29wdGlvbnMuZ2xvYmFsTmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrTmFtZSA9IF9vcHRpb25zLmNhbGxiYWNrTmFtZSxcbiAgICAgICAgICAgIHNjcmlwdElkID0gX29wdGlvbnMuc2NyaXB0SWQ7IC8vIGNoZWNrIGlmIGdsb2JhbCBvYmplY3QgYWxyZWFkeSBhdHRhY2hlZCB0byB3aW5kb3dcblxuICAgICAgICBpZiAoZ2xvYmFsTmFtZSAmJiB0eXBlb2Ygd2luZG93W2dsb2JhbE5hbWVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgU0NSSVBUX01BUFtzY3JpcHRVUkxdID0ge1xuICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZXJzOiB7fVxuICAgICAgICAgIH07XG4gICAgICAgIH0gLy8gY2hlY2sgaWYgc2NyaXB0IGxvYWRpbmcgYWxyZWFkeVxuXG5cbiAgICAgICAgaWYgKFNDUklQVF9NQVBbc2NyaXB0VVJMXSkge1xuICAgICAgICAgIHZhciBlbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTsgLy8gaWYgbG9hZGVkIG9yIGVycm9yZWQgdGhlbiBcImZpbmlzaFwiXG5cbiAgICAgICAgICBpZiAoZW50cnkgJiYgKGVudHJ5LmxvYWRlZCB8fCBlbnRyeS5lcnJvcmVkKSkge1xuICAgICAgICAgICAgdGhpcy5hc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQoZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gaWYgc3RpbGwgbG9hZGluZyB0aGVuIGNhbGxiYWNrIHRvIG9ic2VydmVyIHF1ZXVlXG5cblxuICAgICAgICAgIGVudHJ5Lm9ic2VydmVyc1trZXldID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLmFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZChlbnRyeSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgKiBoYXNuJ3Qgc3RhcnRlZCBsb2FkaW5nXG4gICAgICAgICAqIHN0YXJ0IHRoZSBcIm1hZ2ljXCJcbiAgICAgICAgICogc2V0dXAgc2NyaXB0IHRvIGxvYWQgYW5kIG9ic2VydmVyc1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB7fTtcblxuICAgICAgICBvYnNlcnZlcnNba2V5XSA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkKGVudHJ5KTtcbiAgICAgICAgfTtcblxuICAgICAgICBTQ1JJUFRfTUFQW3NjcmlwdFVSTF0gPSB7XG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBvYnNlcnZlcnM6IG9ic2VydmVyc1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHNjcmlwdFVSTDtcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBhdHRyaWJ1dGUgaW4gb3B0aW9ucy5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIG9wdGlvbnMuYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY3JpcHRJZCkge1xuICAgICAgICAgIHNjcmlwdC5pZCA9IHNjcmlwdElkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIGNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlcihmdW5jKSB7XG4gICAgICAgICAgaWYgKFNDUklQVF9NQVBbc2NyaXB0VVJMXSkge1xuICAgICAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyc01hcCA9IG1hcEVudHJ5Lm9ic2VydmVycztcblxuICAgICAgICAgICAgZm9yICh2YXIgb2JzS2V5IGluIG9ic2VydmVyc01hcCkge1xuICAgICAgICAgICAgICBpZiAoZnVuYyhvYnNlcnZlcnNNYXBbb2JzS2V5XSkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JzZXJ2ZXJzTWFwW29ic0tleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrTmFtZSAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLmFzeW5jU2NyaXB0TG9hZGVyVHJpZ2dlck9uU2NyaXB0TG9hZGVkKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuXG4gICAgICAgICAgaWYgKG1hcEVudHJ5KSB7XG4gICAgICAgICAgICBtYXBFbnRyeS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2JzZXJ2ZXIobWFwRW50cnkpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG5cbiAgICAgICAgICBpZiAobWFwRW50cnkpIHtcbiAgICAgICAgICAgIG1hcEVudHJ5LmVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgICBvYnNlcnZlcihtYXBFbnRyeSk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAvLyBSZW1vdmUgdGFnIHNjcmlwdFxuICAgICAgICB2YXIgc2NyaXB0VVJMID0gdGhpcy5fX3NjcmlwdFVSTDtcblxuICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmVPblVubW91bnQgPT09IHRydWUpIHtcbiAgICAgICAgICB2YXIgYWxsU2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxTY3JpcHRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoYWxsU2NyaXB0c1tpXS5zcmMuaW5kZXhPZihzY3JpcHRVUkwpID4gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKGFsbFNjcmlwdHNbaV0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGFsbFNjcmlwdHNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhbGxTY3JpcHRzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBDbGVhbiB0aGUgb2JzZXJ2ZXIgZW50cnlcblxuXG4gICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcblxuICAgICAgICBpZiAobWFwRW50cnkpIHtcbiAgICAgICAgICBkZWxldGUgbWFwRW50cnkub2JzZXJ2ZXJzW3RoaXMuYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCgpXTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92ZU9uVW5tb3VudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGVsZXRlIFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBnbG9iYWxOYW1lID0gb3B0aW9ucy5nbG9iYWxOYW1lOyAvLyByZW1vdmUgYXN5bmNTY3JpcHRPbkxvYWQgZnJvbSBjaGlsZFByb3BzXG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFzeW5jU2NyaXB0T25Mb2FkID0gX3RoaXMkcHJvcHMuYXN5bmNTY3JpcHRPbkxvYWQsXG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYgPSBfdGhpcyRwcm9wcy5mb3J3YXJkZWRSZWYsXG4gICAgICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImFzeW5jU2NyaXB0T25Mb2FkXCIsIFwiZm9yd2FyZGVkUmVmXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICAgICAgaWYgKGdsb2JhbE5hbWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGNoaWxkUHJvcHNbZ2xvYmFsTmFtZV0gPSB0eXBlb2Ygd2luZG93W2dsb2JhbE5hbWVdICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93W2dsb2JhbE5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGRQcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWY7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIGNoaWxkUHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIEFzeW5jU2NyaXB0TG9hZGVyO1xuICAgIH0oQ29tcG9uZW50KTsgLy8gTm90ZSB0aGUgc2Vjb25kIHBhcmFtIFwicmVmXCIgcHJvdmlkZWQgYnkgUmVhY3QuZm9yd2FyZFJlZi5cbiAgICAvLyBXZSBjYW4gcGFzcyBpdCBhbG9uZyB0byBBc3luY1NjcmlwdExvYWRlciBhcyBhIHJlZ3VsYXIgcHJvcCwgZS5nLiBcImZvcndhcmRlZFJlZlwiXG4gICAgLy8gQW5kIGl0IGNhbiB0aGVuIGJlIGF0dGFjaGVkIHRvIHRoZSBDb21wb25lbnQuXG5cblxuICAgIHZhciBGb3J3YXJkZWRDb21wb25lbnQgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChBc3luY1NjcmlwdExvYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGZvcndhcmRlZFJlZjogcmVmXG4gICAgICB9KSk7XG4gICAgfSk7XG4gICAgRm9yd2FyZGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJBc3luY1NjcmlwdExvYWRlcihcIiArIHdyYXBwZWRDb21wb25lbnROYW1lICsgXCIpXCI7XG4gICAgRm9yd2FyZGVkQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAgIGFzeW5jU2NyaXB0T25Mb2FkOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG4gICAgcmV0dXJuIGhvaXN0U3RhdGljcyhGb3J3YXJkZWRDb21wb25lbnQsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xufSJdLCJuYW1lcyI6WyJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwia2V5cyIsImluZGV4T2YiLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX19wcm90b19fIiwiQ29tcG9uZW50IiwiY3JlYXRlRWxlbWVudCIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJob2lzdFN0YXRpY3MiLCJTQ1JJUFRfTUFQIiwiaWRDb3VudCIsIm1ha2VBc3luY1NjcmlwdCIsImdldFNjcmlwdFVSTCIsIm9wdGlvbnMiLCJ3cmFwV2l0aEFzeW5jU2NyaXB0IiwiV3JhcHBlZENvbXBvbmVudCIsIndyYXBwZWRDb21wb25lbnROYW1lIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiQXN5bmNTY3JpcHRMb2FkZXIiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJjb250ZXh0IiwiX3RoaXMiLCJzdGF0ZSIsIl9fc2NyaXB0VVJMIiwiX3Byb3RvIiwiYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCIsIl9fc2NyaXB0TG9hZGVySUQiLCJzZXR1cFNjcmlwdFVSTCIsImFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZCIsIl90aGlzMiIsInNldFN0YXRlIiwiYXN5bmNTY3JpcHRPbkxvYWQiLCJhc3luY1NjcmlwdExvYWRlclRyaWdnZXJPblNjcmlwdExvYWRlZCIsIm1hcEVudHJ5IiwibG9hZGVkIiwiRXJyb3IiLCJvYnNLZXkiLCJvYnNlcnZlcnMiLCJ3aW5kb3ciLCJjYWxsYmFja05hbWUiLCJjb21wb25lbnREaWRNb3VudCIsIl90aGlzMyIsInNjcmlwdFVSTCIsIl9vcHRpb25zIiwiZ2xvYmFsTmFtZSIsInNjcmlwdElkIiwiZW50cnkiLCJlcnJvcmVkIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJzcmMiLCJhc3luYyIsImF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlciIsImZ1bmMiLCJvYnNlcnZlcnNNYXAiLCJvbmxvYWQiLCJvYnNlcnZlciIsIm9uZXJyb3IiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZU9uVW5tb3VudCIsImFsbFNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbmRlciIsIl90aGlzJHByb3BzIiwiZm9yd2FyZGVkUmVmIiwiY2hpbGRQcm9wcyIsInVuZGVmaW5lZCIsInJlZiIsIkZvcndhcmRlZENvbXBvbmVudCIsInByb3BUeXBlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-async-script/lib/esm/async-script-loader.js\n");

/***/ })

};
;