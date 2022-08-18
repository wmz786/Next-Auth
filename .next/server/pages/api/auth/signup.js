module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: hashPassword, verifyPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hashPassword\", function() { return hashPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyPassword\", function() { return verifyPassword; });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(p) {\n  try {\n    const hashedPassword = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"hash\"])(p, 12);\n    return hashedPassword;\n  } catch (error) {\n    console.log(\"hash\" + error);\n  }\n}\nasync function verifyPassword(password, hashedPassword) {\n  const isValid = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"compare\"])(password, hashedPassword);\n  return isValid;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInAiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ2ZXJpZnlQYXNzd29yZCIsInBhc3N3b3JkIiwiaXNWYWxpZCIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLFlBQWYsQ0FBNEJDLENBQTVCLEVBQStCO0FBQ3BDLE1BQUk7QUFDRixVQUFNQyxjQUFjLEdBQUcsTUFBTUMscURBQUksQ0FBQ0YsQ0FBRCxFQUFJLEVBQUosQ0FBakM7QUFDQSxXQUFPQyxjQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9FLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFTRixLQUFyQjtBQUNEO0FBQ0Y7QUFFTSxlQUFlRyxjQUFmLENBQThCQyxRQUE5QixFQUF3Q04sY0FBeEMsRUFBd0Q7QUFDN0QsUUFBTU8sT0FBTyxHQUFHLE1BQU1DLHdEQUFPLENBQUNGLFFBQUQsRUFBV04sY0FBWCxDQUE3QjtBQUNBLFNBQU9PLE9BQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHApIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2gocCwgMTIpO1xuICAgIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhc2hcIiArIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XG4gIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBjb21wYXJlKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XG4gIHJldHVybiBpc1ZhbGlkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  try {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://wais:TNUQSaUC5lb0Mcyo@cluster0.pknnx6q.mongodb.net/auth-demo?retryWrites=true&w=majority\");\n    return client;\n  } catch (error) {\n    console.log(\"db: \" + error);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIuanM/YmI1MSJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGlCQUFmLEdBQW1DO0FBQ3hDLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQix3R0FEbUIsQ0FBckI7QUFHQSxXQUFPRixNQUFQO0FBQ0QsR0FMRCxDQUtFLE9BQU9HLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFTRixLQUFyQjtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9saWIvZGIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgXCJtb25nb2RiK3NydjovL3dhaXM6VE5VUVNhVUM1bGIwTWN5b0BjbHVzdGVyMC5wa25ueDZxLm1vbmdvZGIubmV0L2F1dGgtZGVtbz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICAgICk7XG4gICAgcmV0dXJuIGNsaWVudDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImRiOiBcIiArIGVycm9yKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\nasync function handler(req, res) {\n  if (req.method !== \"POST\") {\n    return;\n  }\n\n  try {\n    const data = req.body;\n    const {\n      email,\n      password\n    } = data;\n\n    if (!email || !email.includes(\"@\") || !password || password.trim().length < 7) {\n      res.status(422).json({\n        message: \"invalid email or password is less then 7 characters long.\"\n      });\n      return;\n    }\n\n    const hashedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_0__[\"hashPassword\"])(password);\n    const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"connectToDatabase\"])();\n    const db = client.db();\n    const existing = await db.collection(\"user\").findOne({\n      email: email\n    });\n\n    if (existing) {\n      res.status(422).json({\n        message: \"User already exits!\"\n      });\n      client.close();\n      return;\n    }\n\n    const result = await db.collection(\"user\").insertOne({\n      email: email,\n      password: hashedPassword\n    });\n    res.status(201).json({\n      message: \"Created user!\"\n    });\n    client.close();\n  } catch (error) {\n    console.log(\"signup: \" + error);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanM/YzUyZiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJ0cmltIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJoYXNoZWRQYXNzd29yZCIsImhhc2hQYXNzd29yZCIsImNsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiZGIiLCJleGlzdGluZyIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBQ0QsTUFBSTtBQUNGLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQjtBQUNBLFVBQU07QUFBRUMsV0FBRjtBQUFTQztBQUFULFFBQXNCSCxJQUE1Qjs7QUFFQSxRQUNFLENBQUNFLEtBQUQsSUFDQSxDQUFDQSxLQUFLLENBQUNFLFFBQU4sQ0FBZSxHQUFmLENBREQsSUFFQSxDQUFDRCxRQUZELElBR0FBLFFBQVEsQ0FBQ0UsSUFBVCxHQUFnQkMsTUFBaEIsR0FBeUIsQ0FKM0IsRUFLRTtBQUNBUixTQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsZUFBTyxFQUFFO0FBRFUsT0FBckI7QUFHQTtBQUNEOztBQUNELFVBQU1DLGNBQWMsR0FBRyxNQUFNQyw4REFBWSxDQUFDUixRQUFELENBQXpDO0FBRUEsVUFBTVMsTUFBTSxHQUFHLE1BQU1DLGlFQUFpQixFQUF0QztBQUNBLFVBQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFQLEVBQVg7QUFFQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxVQUFILENBQWMsTUFBZCxFQUFzQkMsT0FBdEIsQ0FBOEI7QUFBRWYsV0FBSyxFQUFFQTtBQUFULEtBQTlCLENBQXZCOztBQUVBLFFBQUlhLFFBQUosRUFBYztBQUNaakIsU0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQUcsWUFBTSxDQUFDTSxLQUFQO0FBQ0E7QUFDRDs7QUFFRCxVQUFNQyxNQUFNLEdBQUcsTUFBTUwsRUFBRSxDQUFDRSxVQUFILENBQWMsTUFBZCxFQUFzQkksU0FBdEIsQ0FBZ0M7QUFDbkRsQixXQUFLLEVBQUVBLEtBRDRDO0FBRW5EQyxjQUFRLEVBQUVPO0FBRnlDLEtBQWhDLENBQXJCO0FBS0FaLE9BQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0FHLFVBQU0sQ0FBQ00sS0FBUDtBQUNELEdBbkNELENBbUNFLE9BQU9HLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhRixLQUF6QjtBQUNEO0FBQ0Y7O0FBRWN6QixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xuXG4gICAgaWYgKFxuICAgICAgIWVtYWlsIHx8XG4gICAgICAhZW1haWwuaW5jbHVkZXMoXCJAXCIpIHx8XG4gICAgICAhcGFzc3dvcmQgfHxcbiAgICAgIHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPCA3XG4gICAgKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCBpcyBsZXNzIHRoZW4gNyBjaGFyYWN0ZXJzIGxvbmcuXCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlclwiKS5maW5kT25lKHsgZW1haWw6IGVtYWlsIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXRzIVwiIH0pO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJcIikuaW5zZXJ0T25lKHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJDcmVhdGVkIHVzZXIhXCIgfSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJzaWdudXA6IFwiICsgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/signup.js\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });