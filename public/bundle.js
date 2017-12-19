/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar persona = {\n  nome: 'Simone',\n  eta: 27,\n  luogo: {\n    citta: 'Philadelphia',\n    temp: 88\n  }\n};\n\nvar _persona$nome = persona.nome,\n    nomeProprio = _persona$nome === undefined ? 'Anonimo' : _persona$nome,\n    eta = persona.eta;\n\n\nconsole.log(nomeProprio + ' ha ' + eta + ' anni.');\n\nvar _persona$luogo = persona.luogo,\n    citta = _persona$luogo.citta,\n    temperature = _persona$luogo.temp;\n\n\nif (citta && temperature) {\n  console.log('Ci sono ' + temperature + ' gradi in ' + citta + '.');\n}\n\nvar book = {\n  title: 'Ego is the Enemy',\n  author: 'Ryan Holiday',\n  publisher: {\n    name: 'Penguin'\n  }\n};\n\nvar _book$publisher$name = book.publisher.name,\n    publisherName = _book$publisher$name === undefined ? 'Self-Published' : _book$publisher$name;\n\n\nconsole.log(publisherName); // Penguin , Self-Published//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGxheWdyb3VuZC9kZXN0cnVjdHVyaW5nLmpzP2Y2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGVyc29uYSA9IHtcbiAgbm9tZTogJ1NpbW9uZScsXG4gIGV0YTogMjcsXG4gIGx1b2dvOiB7XG4gICAgY2l0dGE6ICdQaGlsYWRlbHBoaWEnLFxuICAgIHRlbXA6IDg4XG4gIH1cbn07XG5cbmNvbnN0IHsgbm9tZTogbm9tZVByb3ByaW8gPSAnQW5vbmltbycsIGV0YSB9ID0gcGVyc29uYTtcblxuY29uc29sZS5sb2coYCR7bm9tZVByb3ByaW99IGhhICR7ZXRhfSBhbm5pLmApO1xuXG5jb25zdCB7IGNpdHRhLCB0ZW1wOiB0ZW1wZXJhdHVyZSB9ID0gcGVyc29uYS5sdW9nbztcblxuaWYoY2l0dGEgJiYgdGVtcGVyYXR1cmUpIHtcbiAgY29uc29sZS5sb2coYENpIHNvbm8gJHt0ZW1wZXJhdHVyZX0gZ3JhZGkgaW4gJHtjaXR0YX0uYCk7XG59XG5cbmNvbnN0IGJvb2sgPSB7XG4gIHRpdGxlOiAnRWdvIGlzIHRoZSBFbmVteScsXG4gIGF1dGhvcjogJ1J5YW4gSG9saWRheScsXG4gIHB1Ymxpc2hlcjoge1xuICAgIG5hbWU6ICdQZW5ndWluJ1xuICB9XG59XG5cbmNvbnN0IHsgbmFtZTogcHVibGlzaGVyTmFtZSA9ICdTZWxmLVB1Ymxpc2hlZCcgfSA9IGJvb2sucHVibGlzaGVyXG5cblxuY29uc29sZS5sb2cocHVibGlzaGVyTmFtZSk7IC8vIFBlbmd1aW4gLCBTZWxmLVB1Ymxpc2hlZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGxheWdyb3VuZC9kZXN0cnVjdHVyaW5nLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);