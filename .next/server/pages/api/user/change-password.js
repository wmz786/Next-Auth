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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/change-password.js");
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

/***/ "./pages/api/user/change-password.js":
/*!*******************************************!*\
  !*** ./pages/api/user/change-password.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\n\nasync function handler(req, res) {\n  if (req.method !== \"PATCH\") {\n    return;\n  }\n\n  const session = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_0__[\"getSession\"])({\n    req: req\n  });\n\n  if (!session) {\n    res.status(401).json({\n      message: \"Not authenticated\"\n    });\n    return;\n  }\n\n  const userEmail = session.user.email;\n  const oldPassword = req.body.oldPassword;\n  const newPassword = req.body.newPassword;\n  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"connectToDatabase\"])();\n  const usersCollection = client.db().collection(\"user\");\n  const user = await usersCollection.findOne({\n    email: userEmail\n  });\n\n  if (!user) {\n    res.status(404).json({\n      message: \"User not found!\"\n    });\n    client.close();\n    return;\n  }\n\n  const currentPassword = user.password;\n  const passwordsAreEqual = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"verifyPassword\"])(oldPassword, currentPassword);\n\n  if (!passwordsAreEqual) {\n    res.status(401).json({\n      message: \"Invalid password\"\n    });\n    client.close();\n    return;\n  }\n\n  const hashedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"hashPassword\"])(newPassword);\n  const result = await usersCollection.updateOne({\n    email: userEmail\n  }, {\n    $set: {\n      password: hashedPassword\n    }\n  });\n  client.close();\n  res.status(200).json({\n    message: \"Password updated!\"\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQuanM/NzQ1YyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJFbWFpbCIsInVzZXIiLCJlbWFpbCIsIm9sZFBhc3N3b3JkIiwiYm9keSIsIm5ld1Bhc3N3b3JkIiwiY2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJjdXJyZW50UGFzc3dvcmQiLCJwYXNzd29yZCIsInBhc3N3b3Jkc0FyZUVxdWFsIiwidmVyaWZ5UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2hQYXNzd29yZCIsInJlc3VsdCIsInVwZGF0ZU9uZSIsIiRzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE9BQW5CLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLGtFQUFVLENBQUM7QUFBRUosT0FBRyxFQUFFQTtBQUFQLEdBQUQsQ0FBaEM7O0FBRUEsTUFBSSxDQUFDRyxPQUFMLEVBQWM7QUFDWkYsT0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNEOztBQUVELFFBQU1DLFNBQVMsR0FBR0wsT0FBTyxDQUFDTSxJQUFSLENBQWFDLEtBQS9CO0FBQ0EsUUFBTUMsV0FBVyxHQUFHWCxHQUFHLENBQUNZLElBQUosQ0FBU0QsV0FBN0I7QUFDQSxRQUFNRSxXQUFXLEdBQUdiLEdBQUcsQ0FBQ1ksSUFBSixDQUFTQyxXQUE3QjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxpRUFBaUIsRUFBdEM7QUFDQSxRQUFNQyxlQUFlLEdBQUdGLE1BQU0sQ0FBQ0csRUFBUCxHQUFZQyxVQUFaLENBQXVCLE1BQXZCLENBQXhCO0FBQ0EsUUFBTVQsSUFBSSxHQUFHLE1BQU1PLGVBQWUsQ0FBQ0csT0FBaEIsQ0FBd0I7QUFBRVQsU0FBSyxFQUFFRjtBQUFULEdBQXhCLENBQW5COztBQUVBLE1BQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1RSLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0FPLFVBQU0sQ0FBQ00sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsUUFBTUMsZUFBZSxHQUFHWixJQUFJLENBQUNhLFFBQTdCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTUMsZ0VBQWMsQ0FBQ2IsV0FBRCxFQUFjVSxlQUFkLENBQTlDOztBQUVBLE1BQUksQ0FBQ0UsaUJBQUwsRUFBd0I7QUFDdEJ0QixPQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNBTyxVQUFNLENBQUNNLEtBQVA7QUFDQTtBQUNEOztBQUVELFFBQU1LLGNBQWMsR0FBRyxNQUFNQyw4REFBWSxDQUFDYixXQUFELENBQXpDO0FBRUEsUUFBTWMsTUFBTSxHQUFHLE1BQU1YLGVBQWUsQ0FBQ1ksU0FBaEIsQ0FDbkI7QUFBRWxCLFNBQUssRUFBRUY7QUFBVCxHQURtQixFQUVuQjtBQUFFcUIsUUFBSSxFQUFFO0FBQUVQLGNBQVEsRUFBRUc7QUFBWjtBQUFSLEdBRm1CLENBQXJCO0FBS0FYLFFBQU0sQ0FBQ00sS0FBUDtBQUNBbkIsS0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBckI7QUFDRDs7QUFFY1Isc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgaGFzaFBhc3N3b3JkLCB2ZXJpZnlQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUEFUQ0hcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXEgfSk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIk5vdCBhdXRoZW50aWNhdGVkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xuICBjb25zdCBvbGRQYXNzd29yZCA9IHJlcS5ib2R5Lm9sZFBhc3N3b3JkO1xuICBjb25zdCBuZXdQYXNzd29yZCA9IHJlcS5ib2R5Lm5ld1Bhc3N3b3JkO1xuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2VyXCIpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoeyBlbWFpbDogdXNlckVtYWlsIH0pO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZCFcIiB9KTtcbiAgICBjbGllbnQuY2xvc2UoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSB1c2VyLnBhc3N3b3JkO1xuICBjb25zdCBwYXNzd29yZHNBcmVFcXVhbCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKG9sZFBhc3N3b3JkLCBjdXJyZW50UGFzc3dvcmQpO1xuXG4gIGlmICghcGFzc3dvcmRzQXJlRXF1YWwpIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBwYXNzd29yZFwiIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24udXBkYXRlT25lKFxuICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxuICAgIHsgJHNldDogeyBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSB9XG4gICk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXNzd29yZCB1cGRhdGVkIVwiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/change-password.js\n");

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

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcmVhY3RcIj8xMmY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/react\n");

/***/ })

/******/ });