/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/pages/main.js":
/*!***************************!*\
  !*** ./app/pages/main.js ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/cards */ \"./data/cards.js\");\n;\ndocument.querySelector('.checkbox').disabled = true;\ndocument.querySelector('.switch').addEventListener('click', function () {\n  if (document.querySelector('.checkbox').disabled === true) {\n    // eslint-disable-next-line no-alert\n    alert('Для начала игры выберите категорию');\n  }\n});\ndocument.querySelector('#menu_toggle').addEventListener('click', function () {\n  if (document.querySelector('#menu_toggle').checked === true) {\n    document.body.setAttribute('style', 'overflow: hidden;');\n  } else {\n    document.body.removeAttribute('style', 'overflow: hidden;');\n  }\n});\nvar blackout = document.querySelector('.blackout');\nblackout.addEventListener('click', function () {\n  document.querySelector('#menu_toggle').click();\n});\nvar categoriesList = document.querySelector('.cards_list');\n\nvar addCategories = function addCategories(element) {\n  return categoriesList.insertAdjacentHTML('beforeend', \"<div class=\\\"card category \".concat(element.name.toLowerCase(), \"\\\" data-categories=\\\"\").concat(element.name.toLowerCase(), \"\\\">\\n\\n    <img class=\\\"card-img\\\" src=\\\"\").concat(element.src, \"\\\" alt=\\\"\").concat(element.name, \"\\\">\\n\\n    <div class=\\\"card-body\\\">\\n        <h3>\").concat(element.name, \"</h3>\\n    </div>\\n\\n</div>\"));\n};\n\n_data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.categories.forEach(addCategories);\n\nvar addCards = function addCards(element) {\n  return categoriesList.insertAdjacentHTML('beforeend', \"<div class=\\\"card word_card\\\">\\n\\n    <div class=\\\"front-face\\\">\\n        <img class=\\\"card-img\\\" src=\\\"\".concat(element.image, \"\\\" alt=\\\"\").concat(element.word, \"\\\">\\n\\n        <div class=\\\"card-body words\\\">\\n            <h3>\").concat(element.translation, \"</h3>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"back-face\\\" data-card=\\\"\").concat(element.word, \"\\\">\\n        <img class=\\\"card-img\\\" src=\\\"\").concat(element.image, \"\\\" alt=\\\"\").concat(element.word, \"\\\">\\n\\n        <div class=\\\"card-body words\\\">\\n            <h3>\").concat(element.word, \"</h3>\\n            <div class=\\\"reverse-btn\\\"><i class=\\\"fas fa-undo\\\"></i></div>\\n        </div>\\n    </div>\\n\\n</div>\"));\n};\n\nvar cardDiv = document.querySelector('.cards_list');\nvar refreshDiv = document.querySelectorAll('.menu_item');\n\nfunction deletePrev() {\n  while (cardDiv.firstChild) {\n    cardDiv.removeChild(cardDiv.firstChild);\n  }\n\n  document.querySelector('.checkbox').checked = false;\n  document.querySelector('.checkbox').disabled = false;\n  document.querySelector('.cards_list').removeAttribute('style');\n}\n\nfunction activeItem() {\n  refreshDiv.forEach(function (div) {\n    return div.classList.remove('active');\n  });\n  this.classList.add('active');\n}\n\nrefreshDiv.forEach(function (div) {\n  div.addEventListener('click', deletePrev, false);\n  div.addEventListener('click', activeItem, true);\n});\nrefreshDiv.forEach(function (div) {\n  div.addEventListener('click', function () {\n    document.querySelector('#menu_toggle').click();\n    document.querySelector('.checkbox').disabled = false;\n  }, false);\n});\ndocument.querySelector('.main').addEventListener('click', function () {\n  _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.categories.forEach(addCategories);\n  document.querySelector('.checkbox').checked = false;\n  document.querySelector('.checkbox').disabled = true;\n}, true);\ndocument.querySelector('.main').addEventListener('click', function () {\n  document.querySelectorAll('.card.category').forEach(function (div) {\n    div.addEventListener('click', function (e) {\n      document.querySelector(\".menu_item.\".concat(e.target.closest('.card.category').getAttribute('data-categories').toLowerCase())).click();\n      document.querySelector(\".menu_item.\".concat(e.target.closest('.card.category').getAttribute('data-categories').toLowerCase())).click();\n    }, true);\n  });\n}, true);\ndocument.querySelectorAll('.card.category').forEach(function (div) {\n  div.addEventListener('click', function (e) {\n    document.querySelector(\".menu_item.\".concat(e.target.closest('.card.category').getAttribute('data-categories').toLowerCase())).classList.add('active');\n  }, true);\n});\ndocument.querySelectorAll('.animals').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.animals.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.animals').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.animals.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.clothes').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.clothes.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.clothes').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.clothes.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.colors').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.colors.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.colors').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.colors.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.fruits').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.fruits.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.fruits').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.fruits.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.places').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.places.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.places').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.places.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.sports').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.sports.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.sports').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.sports.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.transport').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.transport.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.transport').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.transport.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.weather').forEach(function (div) {\n  return div.removeEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.weather.forEach(addCards);\n  }, true);\n});\ndocument.querySelectorAll('.weather').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    deletePrev();\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards.weather.forEach(addCards);\n  }, true);\n});\n\n//# sourceURL=webpack:///./app/pages/main.js?");

/***/ }),

/***/ "./app/tools/audio.js":
/*!****************************!*\
  !*** ./app/tools/audio.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (function() {

eval("var refreshDiv = document.querySelectorAll('.menu_item');\nvar refreshDivByCategory = document.querySelectorAll('.card.category');\n\nfunction playAudio(e) {\n  var audio = new Audio();\n  audio.src = \"./assets/cards-audio/\".concat(e.target.closest('.back-face').getAttribute('data-card'), \".mp3\");\n\n  if (document.querySelector('.checkbox').checked !== true && e.target.className !== 'fas fa-undo') {\n    audio.play();\n  }\n}\n\nrefreshDivByCategory.forEach(function (div) {\n  div.addEventListener('click', function () {\n    document.querySelectorAll('.back-face').forEach(function (card) {\n      return card.addEventListener('click', playAudio);\n    });\n  }, false);\n});\nrefreshDiv.forEach(function (div) {\n  div.addEventListener('click', function () {\n    document.querySelectorAll('.back-face').forEach(function (card) {\n      return card.addEventListener('click', playAudio);\n    });\n  }, false);\n});\n\n//# sourceURL=webpack:///./app/tools/audio.js?");

/***/ }),

/***/ "./app/tools/game_mode.js":
/*!********************************!*\
  !*** ./app/tools/game_mode.js ***!
  \********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/cards */ \"./data/cards.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./app/tools/modal.js\");\n;\n\nvar check = document.querySelector('.checkbox');\ndocument.querySelector('.main').addEventListener('click', function () {\n  document.querySelector('.cards_list').setAttribute('data-category', 'main');\n}, true);\ndocument.querySelectorAll('.animals').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'animals');\n  });\n}, true);\ndocument.querySelectorAll('.clothes').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'clothes');\n  });\n}, true);\ndocument.querySelectorAll('.colors').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'colors');\n  });\n}, true);\ndocument.querySelectorAll('.fruits').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'fruits');\n  });\n}, true);\ndocument.querySelectorAll('.places').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'places');\n  });\n}, true);\ndocument.querySelectorAll('.sports').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'sports');\n  });\n}, true);\ndocument.querySelectorAll('.transport').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'transport');\n  });\n}, true);\ndocument.querySelectorAll('.weather').forEach(function (div) {\n  return div.addEventListener('click', function () {\n    document.querySelector('.cards_list').setAttribute('data-category', 'weather');\n  });\n}, true);\nvar counter = 0;\nvar wordsArr = [];\nvar wordList;\nvar answers = 0;\nvar rightAnswers = 0;\nvar wrongAnswers = 0;\n\nfunction sayWord() {\n  wordList = new Audio(\"./assets/cards-audio/\".concat(wordsArr[counter], \".mp3\"));\n  setTimeout(function () {\n    wordList.play();\n  }, 750);\n}\n\nfunction rightOrNot(e) {\n  if (counter === wordsArr.length - 1) {\n    document.querySelectorAll('.card.word_card').forEach(function (card) {\n      return card.classList.remove('disable');\n    });\n    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.default)(answers, rightAnswers, wrongAnswers);\n    document.body.setAttribute('style', 'overflow: hidden;');\n    setTimeout(function () {\n      document.body.removeAttribute('style', 'overflow: hidden;');\n      document.querySelector('.menu_item.main').click();\n      document.querySelector('.menu_item.main').click();\n      document.getElementById('modal-wrapper').remove();\n      wordsArr = [];\n      counter = 0;\n      answers = 0;\n      rightAnswers = 0;\n      wrongAnswers = 0;\n    }, 4000);\n  } else {\n    console.log(\"\".concat(wordsArr[counter]));\n\n    if (e.target.getAttribute('alt') === \"\".concat(wordsArr[counter])) {\n      e.target.closest('.card.word_card').classList.add('disable');\n      document.querySelector('.result_container').innerHTML += '★';\n      var right = new Audio('./assets/cards-audio/right.mp3');\n      right.play();\n      answers += 1;\n      rightAnswers += 1;\n      counter++;\n      sayWord();\n    } else {\n      document.querySelector('.result_container').innerHTML += '☆';\n      var wrong = new Audio('./assets/cards-audio/wrong.mp3');\n      wrong.play();\n      answers += 1;\n      wrongAnswers += 1;\n    }\n  }\n}\n\nfunction startGame() {\n  document.querySelectorAll('.card.word_card').forEach(function (card) {\n    return card.addEventListener('click', rightOrNot);\n  });\n  document.querySelector('.start_btn').classList.add('started');\n  sayWord();\n  document.querySelector('.repeat_btn').addEventListener('click', sayWord);\n}\n\nfunction changeMode() {\n  if (check.checked === true) {\n    wordsArr = [];\n    counter = 0;\n    document.querySelectorAll('.card.word_card').forEach(function (card) {\n      return card.classList.add('gameOn');\n    });\n    document.querySelectorAll('.card-body.words').forEach(function (card) {\n      return card.classList.add('gameOn');\n    });\n    document.querySelectorAll('.card-img').forEach(function (card) {\n      return card.classList.add('gameOn');\n    });\n    document.querySelectorAll('.card.word_card')[document.querySelectorAll('.card.word_card').length - 1].insertAdjacentHTML('afterEnd', \"<div class=\\\"game\\\">\\n            <button class=\\\"start_btn\\\">\\n            Start Game<i class=\\\"fas fa-play\\\"></i>\\n            </button>\\n\\n            <button class=\\\"repeat_btn\\\">\\n            <i class=\\\"fas fa-redo\\\"></i>\\n            </button>\\n        \\n            <div class=\\\"result_container\\\">\\n            </div>\\n        </div>\");\n  } else {\n    wordsArr = [];\n    counter = 0;\n    document.querySelectorAll('.card.word_card').forEach(function (card) {\n      return card.removeEventListener('click', rightOrNot);\n    });\n    document.querySelectorAll('.card.word_card').forEach(function (card) {\n      return card.classList.remove('gameOn');\n    });\n    document.querySelectorAll('.card.word_card').forEach(function (card) {\n      return card.classList.remove('disable');\n    });\n    document.querySelectorAll('.card-body.words').forEach(function (card) {\n      return card.classList.remove('gameOn');\n    });\n    document.querySelectorAll('.card-img').forEach(function (card) {\n      return card.classList.remove('gameOn');\n    });\n    document.querySelector('.game').remove();\n    document.querySelector('.start_btn').classList.remove('started');\n  }\n}\n\nfunction shuffle(array) {\n  for (var i = array.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var _ref = [array[j], array[i]];\n    array[i] = _ref[0];\n    array[j] = _ref[1];\n  }\n}\n\ncheck.addEventListener('click', function () {\n  changeMode();\n  document.querySelector('.start_btn').addEventListener('click', function () {\n    var source = document.querySelector('.cards_list').getAttribute('data-category');\n    _data_cards__WEBPACK_IMPORTED_MODULE_0__.cards[source].forEach(function (item) {\n      return wordsArr.push(item.word);\n    });\n    shuffle(wordsArr);\n  });\n  document.querySelector('.start_btn').addEventListener('click', startGame);\n});\n\n//# sourceURL=webpack:///./app/tools/game_mode.js?");

/***/ }),

/***/ "./app/tools/modal.js":
/*!****************************!*\
  !*** ./app/tools/modal.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ showModal; }\n/* harmony export */ });\nfunction showModal(answers, rightAnswers, wrongAnswers) {\n  var modal = document.createElement('div');\n  var content = document.createElement('div');\n  var congrats = document.createElement('div');\n  modal.id = 'modal-wrapper';\n  congrats.classList = 'congrats';\n  document.body.append(modal);\n  document.getElementById('modal-wrapper').append(content);\n\n  if (answers - rightAnswers === 0) {\n    content.classList = 'winner';\n    document.querySelector('.winner').append(congrats);\n    var win = new Audio('./assets/cards-audio/win.mp3');\n    win.play();\n    congrats.innerHTML = 'Ура! Все ответы правильные!';\n  } else {\n    content.classList = 'loser';\n    document.querySelector('.loser').append(congrats);\n    var lose = new Audio('./assets/cards-audio/lose.mp3');\n    lose.play();\n    congrats.innerHTML = \"\\u041D\\u0443\\u0436\\u043D\\u043E \\u0435\\u0449\\u0451 \\u043D\\u0435\\u043C\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0442\\u0440\\u0435\\u043D\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F!\\n        \\u0412\\u0441\\u0435\\u0433\\u043E \\u043E\\u0448\\u0438\\u0431\\u043E\\u043A: \".concat(wrongAnswers, \".\");\n  }\n}\n\n//# sourceURL=webpack:///./app/tools/modal.js?");

/***/ }),

/***/ "./app/tools/reverse.js":
/*!******************************!*\
  !*** ./app/tools/reverse.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (function() {

eval("var refreshDiv = document.querySelectorAll('.menu_item');\nvar refreshDivByCategory = document.querySelectorAll('.card.category');\n\nfunction reverseCard() {\n  this.closest('.word_card').classList.toggle('reverse');\n}\n\nrefreshDiv.forEach(function (div) {\n  div.addEventListener('click', function () {\n    document.querySelectorAll('.reverse-btn').forEach(function (card) {\n      return card.addEventListener('click', reverseCard);\n    });\n  }, false);\n});\nrefreshDivByCategory.forEach(function (div) {\n  div.addEventListener('click', function () {\n    document.querySelectorAll('.reverse-btn').forEach(function (card) {\n      return card.addEventListener('click', reverseCard);\n    });\n  }, false);\n});\n\nfunction dereverseCard() {\n  this.closest('.word_card').classList.remove('reverse');\n}\n\nrefreshDiv.forEach(function (div) {\n  div.addEventListener('click', function () {\n    document.querySelectorAll('.word_card').forEach(function (card) {\n      return card.addEventListener('mouseleave', dereverseCard);\n    });\n  }, false);\n});\nrefreshDivByCategory.forEach(function (div) {\n  div.addEventListener('click', function () {\n    document.querySelectorAll('.word_card').forEach(function (card) {\n      return card.addEventListener('mouseleave', dereverseCard);\n    });\n  }, false);\n});\n\n//# sourceURL=webpack:///./app/tools/reverse.js?");

/***/ }),

/***/ "./app/tools/statistic.js":
/*!********************************!*\
  !*** ./app/tools/statistic.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ../../data/stats */ \"./data/stats.js\"),\n    statistics = _require.statistics;\n\nvar categoriesList = document.querySelector('.cards_list');\nvar cardDiv = document.querySelector('.cards_list');\nvar refreshDiv = document.querySelectorAll('.menu_item');\n\nfunction deletePrev() {\n  while (cardDiv.firstChild) {\n    cardDiv.removeChild(cardDiv.firstChild);\n  }\n\n  document.querySelector('.checkbox').checked = false;\n  document.querySelector('.checkbox').disabled = true;\n}\n\nfunction setStatisticsTable() {\n  categoriesList.append(document.createElement('table'));\n  document.querySelector('table').insertAdjacentHTML('beforeend', \"<thead>\\n        <tr>\\n          <th>Category</th>\\n          <th>Word</th>\\n          <th>Translation</th>\\n          <th>Train</th>\\n          <th>Right</th>\\n          <th>Wrong</th>\\n          <th>%</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n    </tbody>\\n  \");\n}\n\nfunction showStatistics(element) {\n  document.querySelector('tbody').insertAdjacentHTML('beforeend', \"\\n    <tr class=\\\"word-line\\\">\\n      <td>\".concat(element.category, \"</td>\\n      <td>\").concat(element.word, \"</td>\\n      <td>\").concat(element.translation, \"</td>\\n      <td>\").concat(element.train, \"</td>\\n      <td>\").concat(element.right, \"</td>\\n      <td>\").concat(element.wrong, \"</td>\\n      <td>\").concat(element.percent, \"</td>\\n    </tr>\\n  \"));\n}\n\ndocument.querySelector('.statistics').addEventListener('click', function () {\n  deletePrev();\n  refreshDiv.forEach(function (div) {\n    return div.classList.remove('active');\n  });\n  document.querySelector('.cards_list').setAttribute('style', 'overflow: auto');\n  setStatisticsTable();\n  statistics.forEach(showStatistics);\n});\n\n//# sourceURL=webpack:///./app/tools/statistic.js?");

/***/ }),

/***/ "./data/cards.js":
/*!***********************!*\
  !*** ./data/cards.js ***!
  \***********************/
/*! namespace exports */
/*! export cards [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cards\": function() { return /* binding */ cards; }\n/* harmony export */ });\nvar cards = {\n  categories: [{\n    name: 'Animals',\n    src: './assets/cards-images/animals.png',\n    url: '/animals'\n  }, {\n    name: 'Clothes',\n    src: './assets/cards-images/clothes.png',\n    url: '/clothes'\n  }, {\n    name: 'Colors',\n    src: './assets/cards-images/colors.png',\n    url: '/colors'\n  }, {\n    name: 'Fruits',\n    src: './assets/cards-images/fruits.png',\n    url: '/fruits'\n  }, {\n    name: 'Places',\n    src: './assets/cards-images/desert.png',\n    url: '/places'\n  }, {\n    name: 'Sports',\n    src: './assets/cards-images/sports.png',\n    url: '/sports'\n  }, {\n    name: 'Transport',\n    src: './assets/cards-images/transport.png',\n    url: '/transport'\n  }, {\n    name: 'Weather',\n    src: './assets/cards-images/weather.png',\n    url: '/weather'\n  }],\n  animals: [{\n    word: 'cat',\n    translation: 'кошка',\n    image: './assets/cards-images/cat.png',\n    audioSrc: './assets/cards-audio/cat.mp3'\n  }, {\n    word: 'dog',\n    translation: 'собака',\n    image: './assets/cards-images/dog.png',\n    audioSrc: './assets/cards-audio/dog.mp3'\n  }, {\n    word: 'elephant',\n    translation: 'слон',\n    image: './assets/cards-images/elephant.png',\n    audioSrc: './assets/cards-audio/elephant.mp3'\n  }, {\n    word: 'giraffe',\n    translation: 'жираф',\n    image: './assets/cards-images/giraffe.png',\n    audioSrc: './assets/cards-audio/giraffe.mp3'\n  }, {\n    word: 'lion',\n    translation: 'лев',\n    image: './assets/cards-images/lion.png',\n    audioSrc: './assets/cards-audio/lion.mp3'\n  }, {\n    word: 'monkey',\n    translation: 'обезьяна',\n    image: './assets/cards-images/monkey.png',\n    audioSrc: './assets/cards-audio/monkey.mp3'\n  }, {\n    word: 'rabbit',\n    translation: 'кролик',\n    image: './assets/cards-images/rabbit.png',\n    audioSrc: './assets/cards-audio/rabbit.mp3'\n  }, {\n    word: 'turtle',\n    translation: 'черепаха',\n    image: './assets/cards-images/turtle.png',\n    audioSrc: './assets/cards-audio/turtle.mp3'\n  }],\n  clothes: [{\n    word: 'boot',\n    translation: 'сапог',\n    image: './assets/cards-images/boot.png',\n    audioSrc: './assets/cards-audio/boot.mp3'\n  }, {\n    word: 'dress',\n    translation: 'платье',\n    image: './assets/cards-images/dress.png',\n    audioSrc: './assets/cards-audio/dress.mp3'\n  }, {\n    word: 'hat',\n    translation: 'шапка',\n    image: './assets/cards-images/hat.png',\n    audioSrc: './assets/cards-audio/hat.mp3'\n  }, {\n    word: 'hoodie',\n    translation: 'толстовка',\n    image: './assets/cards-images/hoodie.png',\n    audioSrc: './assets/cards-audio/hoodie.mp3'\n  }, {\n    word: 'scarf',\n    translation: 'шарф',\n    image: './assets/cards-images/scarf.png',\n    audioSrc: './assets/cards-audio/scarf.mp3'\n  }, {\n    word: 'sock',\n    translation: 'носок',\n    image: './assets/cards-images/sock.png',\n    audioSrc: './assets/cards-audio/sock.mp3'\n  }, {\n    word: 'sweater',\n    translation: 'свитер',\n    image: './assets/cards-images/sweater.png',\n    audioSrc: './assets/cards-audio/sweater.mp3'\n  }, {\n    word: 't-shirt',\n    translation: 'футболка',\n    image: './assets/cards-images/tshirt.png',\n    audioSrc: './assets/cards-audio/tshirt.mp3'\n  }],\n  colors: [{\n    word: 'blue',\n    translation: 'голубой',\n    image: './assets/cards-images/blue.png',\n    audioSrc: './assets/cards-audio/blue.mp3'\n  }, {\n    word: 'gray',\n    translation: 'серый',\n    image: './assets/cards-images/gray.png',\n    audioSrc: './assets/cards-audio/gray.mp3'\n  }, {\n    word: 'green',\n    translation: 'зелёный',\n    image: './assets/cards-images/green.png',\n    audioSrc: './assets/cards-audio/green.mp3'\n  }, {\n    word: 'orange',\n    translation: 'оранжевый',\n    image: './assets/cards-images/orange.png',\n    audioSrc: './assets/cards-audio/orange.mp3'\n  }, {\n    word: 'pink',\n    translation: 'розовый',\n    image: './assets/cards-images/pink.png',\n    audioSrc: './assets/cards-audio/pink.mp3'\n  }, {\n    word: 'red',\n    translation: 'красный',\n    image: './assets/cards-images/red.png',\n    audioSrc: './assets/cards-audio/red.mp3'\n  }, {\n    word: 'violet',\n    translation: 'фиолетовый',\n    image: './assets/cards-images/violet.png',\n    audioSrc: './assets/cards-audio/violet.mp3'\n  }, {\n    word: 'yellow',\n    translation: 'жёльый',\n    image: './assets/cards-images/yellow.png',\n    audioSrc: './assets/cards-audio/yellow.mp3'\n  }],\n  fruits: [{\n    word: 'apple',\n    translation: 'яблоко',\n    image: './assets/cards-images/apple.png',\n    audioSrc: './assets/cards-audio/apple.mp3'\n  }, {\n    word: 'apricot',\n    translation: 'абрикос',\n    image: './assets/cards-images/apricot.png',\n    audioSrc: './assets/cards-audio/apricot.mp3'\n  }, {\n    word: 'banana',\n    translation: 'банан',\n    image: './assets/cards-images/banana.png',\n    audioSrc: './assets/cards-audio/banana.mp3'\n  }, {\n    word: 'lemon',\n    translation: 'лимон',\n    image: './assets/cards-images/lemon.png',\n    audioSrc: './assets/cards-audio/lemon.mp3'\n  }, {\n    word: 'orange',\n    translation: 'апельсин',\n    image: './assets/cards-images/orange_fruit.png',\n    audioSrc: './assets/cards-audio/orange.mp3'\n  }, {\n    word: 'pineapple',\n    translation: 'ананас',\n    image: './assets/cards-images/pineapple.png',\n    audioSrc: './assets/cards-audio/pineapple.mp3'\n  }, {\n    word: 'pomegranate',\n    translation: 'гранат',\n    image: './assets/cards-images/pomegranate.png',\n    audioSrc: './assets/cards-audio/pomegranate.mp3'\n  }, {\n    word: 'watermelon',\n    translation: 'арбуз',\n    image: './assets/cards-images/watermelon.png',\n    audioSrc: './assets/cards-audio/watermelon.mp3'\n  }],\n  places: [{\n    word: 'city',\n    translation: 'город',\n    image: './assets/cards-images/city.png',\n    audioSrc: './assets/cards-audio/city.mp3'\n  }, {\n    word: 'desert',\n    translation: 'пустыня',\n    image: './assets/cards-images/desert.png',\n    audioSrc: './assets/cards-audio/desert.mp3'\n  }, {\n    word: 'field',\n    translation: 'поле',\n    image: './assets/cards-images/field.png',\n    audioSrc: './assets/cards-audio/field.mp3'\n  }, {\n    word: 'forest',\n    translation: 'лес',\n    image: './assets/cards-images/forest.png',\n    audioSrc: './assets/cards-audio/forest.mp3'\n  }, {\n    word: 'jungle',\n    translation: 'джунгли',\n    image: './assets/cards-images/jungle.png',\n    audioSrc: './assets/cards-audio/jungle.mp3'\n  }, {\n    word: 'mountain',\n    translation: 'горы',\n    image: './assets/cards-images/mountain.png',\n    audioSrc: './assets/cards-audio/mountain.mp3'\n  }, {\n    word: 'seashore',\n    translation: 'побережье',\n    image: './assets/cards-images/seashore.png',\n    audioSrc: './assets/cards-audio/seashore.mp3'\n  }, {\n    word: 'waterfall',\n    translation: 'водопад',\n    image: './assets/cards-images/waterfall.png',\n    audioSrc: './assets/cards-audio/waterfall.mp3'\n  }],\n  sports: [{\n    word: 'archery',\n    translation: 'стрельба из лука',\n    image: './assets/cards-images/archery.png',\n    audioSrc: './assets/cards-audio/archery.mp3'\n  }, {\n    word: 'baseball',\n    translation: 'бейсбол',\n    image: './assets/cards-images/baseball.png',\n    audioSrc: './assets/cards-audio/baseball.mp3'\n  }, {\n    word: 'basketball',\n    translation: 'баскетбол',\n    image: './assets/cards-images/basketball.png',\n    audioSrc: './assets/cards-audio/basketball.mp3'\n  }, {\n    word: 'football',\n    translation: 'футбол',\n    image: './assets/cards-images/football.png',\n    audioSrc: './assets/cards-audio/football.mp3'\n  }, {\n    word: 'hockey',\n    translation: 'хоккей',\n    image: './assets/cards-images/hockey.png',\n    audioSrc: './assets/cards-audio/hockey.mp3'\n  }, {\n    word: 'karate',\n    translation: 'карате',\n    image: './assets/cards-images/karate.png',\n    audioSrc: './assets/cards-audio/karate.mp3'\n  }, {\n    word: 'tennis',\n    translation: 'теннис',\n    image: './assets/cards-images/tennis.png',\n    audioSrc: './assets/cards-audio/tennis.mp3'\n  }, {\n    word: 'volleyball',\n    translation: 'волейбол',\n    image: './assets/cards-images/volleyball.png',\n    audioSrc: './assets/cards-audio/volleyball.mp3'\n  }],\n  transport: [{\n    word: 'bus',\n    translation: 'автобус',\n    image: './assets/cards-images/bus.png',\n    audioSrc: './assets/cards-audio/bus.mp3'\n  }, {\n    word: 'car',\n    translation: 'машина',\n    image: './assets/cards-images/car.png',\n    audioSrc: './assets/cards-audio/car.mp3'\n  }, {\n    word: 'excavator',\n    translation: 'экскаватор',\n    image: './assets/cards-images/excavator.png',\n    audioSrc: './assets/cards-audio/excavator.mp3'\n  }, {\n    word: 'helicopter',\n    translation: 'вертолёт',\n    image: './assets/cards-images/helicopter.png',\n    audioSrc: './assets/cards-audio/helicopter.mp3'\n  }, {\n    word: 'motorcycle',\n    translation: 'мотоцикл',\n    image: './assets/cards-images/motorcycle.png',\n    audioSrc: './assets/cards-audio/motorcycle.mp3'\n  }, {\n    word: 'plane',\n    translation: 'самолёт',\n    image: './assets/cards-images/plane.png',\n    audioSrc: './assets/cards-audio/plane.mp3'\n  }, {\n    word: 'ship',\n    translation: 'корабль',\n    image: './assets/cards-images/ship.png',\n    audioSrc: './assets/cards-audio/ship.mp3'\n  }, {\n    word: 'train',\n    translation: 'поезд',\n    image: './assets/cards-images/train.png',\n    audioSrc: './assets/cards-audio/train.mp3'\n  }],\n  weather: [{\n    word: 'cloudy',\n    translation: 'облачно',\n    image: './assets/cards-images/cloudy.png',\n    audioSrc: './assets/cards-audio/cloudy.mp3'\n  }, {\n    word: 'hurricane',\n    translation: 'ураган',\n    image: './assets/cards-images/hurricane.png',\n    audioSrc: './assets/cards-audio/hurricane.mp3'\n  }, {\n    word: 'rainbow',\n    translation: 'радуга',\n    image: './assets/cards-images/rainbow.png',\n    audioSrc: './assets/cards-audio/rainbow.mp3'\n  }, {\n    word: 'rainy',\n    translation: 'дождливо',\n    image: './assets/cards-images/rainy.png',\n    audioSrc: './assets/cards-audio/rainy.mp3'\n  }, {\n    word: 'snowy',\n    translation: 'снежно',\n    image: './assets/cards-images/snowy.png',\n    audioSrc: './assets/cards-audio/snowy.mp3'\n  }, {\n    word: 'sunny',\n    translation: 'солнечно',\n    image: './assets/cards-images/sunny.png',\n    audioSrc: './assets/cards-audio/sunny.mp3'\n  }, {\n    word: 'thunderstorm',\n    translation: 'гроза',\n    image: './assets/cards-images/thunderstorm.png',\n    audioSrc: './assets/cards-audio/thunderstorm.mp3'\n  }, {\n    word: 'windy',\n    translation: 'ветренно',\n    image: './assets/cards-images/windy.png',\n    audioSrc: './assets/cards-audio/windy.mp3'\n  }]\n};\n\n//# sourceURL=webpack:///./data/cards.js?");

/***/ }),

/***/ "./data/stats.js":
/*!***********************!*\
  !*** ./data/stats.js ***!
  \***********************/
/*! namespace exports */
/*! export statistics [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statistics\": function() { return /* binding */ statistics; }\n/* harmony export */ });\nvar statistics = [{\n  category: 'Animals',\n  word: 'cat',\n  translation: 'кошка',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Animals',\n  word: 'dog',\n  translation: 'собака',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Animals',\n  word: 'elephant',\n  translation: 'слон',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Animals',\n  word: 'giraffe',\n  translation: 'жираф',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Animals',\n  word: 'lion',\n  translation: 'лев',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Animals',\n  word: 'monkey',\n  translation: 'обезьяна',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Animals',\n  word: 'rabbit',\n  translation: 'кролик',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Animals',\n  word: 'turtle',\n  translation: 'черепаха',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 'boot',\n  translation: 'сапог',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 'dress',\n  translation: 'платье',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 'hat',\n  translation: 'шапка',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 'hoodie',\n  translation: 'толстовка',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 'scarf',\n  translation: 'шарф',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 'sock',\n  translation: 'носок',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 'sweater',\n  translation: 'свитер',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Clothes',\n  word: 't-shirt',\n  translation: 'футболка',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'blue',\n  translation: 'голубой',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'gray',\n  translation: 'серый',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'green',\n  translation: 'зелёный',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'orange',\n  translation: 'оранжевый',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'pink',\n  translation: 'розовый',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'red',\n  translation: 'красный',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'violet',\n  translation: 'фиолетовый',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Colors',\n  word: 'yellow',\n  translation: 'жёлтый',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'apple',\n  translation: 'яблоко',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'apricot',\n  translation: 'абрикос',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'banana',\n  translation: 'банан',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'lemon',\n  translation: 'лимон',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'orange',\n  translation: 'апельсин',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'pineapple',\n  translation: 'ананас',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'pomegranate',\n  translation: 'гранат',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Fruits',\n  word: 'watermelon',\n  translation: 'арбуз',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'city',\n  translation: 'город0',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'desert',\n  translation: 'пустыня',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'field',\n  translation: 'поле',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'forest',\n  translation: 'лес',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'jungle',\n  translation: 'джунгли',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'mountain',\n  translation: 'горы',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'seashore',\n  translation: 'побережье',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Places',\n  word: 'waterfall',\n  translation: 'водопад',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'archery',\n  translation: 'стрельба из лука',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'baseball',\n  translation: 'бейсбол',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'basketball',\n  translation: 'баскетбол',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'football',\n  translation: 'футбол',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'hockey',\n  translation: 'хоккей',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'karate',\n  translation: 'карате',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'tennis',\n  translation: 'теннис',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Sports',\n  word: 'volleyball',\n  translation: 'волейбол',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'bus',\n  translation: 'автобус',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'car',\n  translation: 'машина',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'excavator',\n  translation: 'экскаватор',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'helicopter',\n  translation: 'вертолёт',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'motorcycle',\n  translation: 'мотоцикл',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'plane',\n  translation: 'самолёт',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'ship',\n  translation: 'корабль',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Transport',\n  word: 'train',\n  translation: 'поезд',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'cloudy',\n  translation: 'облачно',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'hurricane',\n  translation: 'ураган',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'rainbow',\n  translation: 'радуга',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'rainy',\n  translation: 'дождливо',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'snowy',\n  translation: 'снежно',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'sunny',\n  translation: 'солнечно',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'thunderstorm',\n  translation: 'гроза',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}, {\n  category: 'Weather',\n  word: 'windy',\n  translation: 'ветренно',\n  train: 0,\n  right: 0,\n  wrong: 0,\n  percent: 0\n}];\n\n//# sourceURL=webpack:///./data/stats.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _app_pages_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/pages/main */ \"./app/pages/main.js\");\n/* harmony import */ var _app_tools_reverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/tools/reverse */ \"./app/tools/reverse.js\");\n/* harmony import */ var _app_tools_reverse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_tools_reverse__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_tools_audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/tools/audio */ \"./app/tools/audio.js\");\n/* harmony import */ var _app_tools_audio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_tools_audio__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_tools_game_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/tools/game_mode */ \"./app/tools/game_mode.js\");\n/* harmony import */ var _app_tools_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/tools/modal */ \"./app/tools/modal.js\");\n/* harmony import */ var _app_tools_statistic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/tools/statistic */ \"./app/tools/statistic.js\");\n/* harmony import */ var _app_tools_statistic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_tools_statistic__WEBPACK_IMPORTED_MODULE_6__);\n;\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js"],
/******/ 			["./index.js","vendors-node_modules_babel_polyfill_lib_index_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = function() {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;