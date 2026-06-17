/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-smart-home-main/edit.js"
/*!*******************************************!*\
  !*** ./src/block-smart-home-main/edit.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    sectionTitle,
    sectionDescription,
    rows
  } = attributes;
  const [slideIndices, setSlideIndices] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(rows.map(() => 0));
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const updateRow = (rowIndex, key, value) => {
    const newRows = rows.map((row, i) => i === rowIndex ? {
      ...row,
      [key]: value
    } : row);
    setAttributes({
      rows: newRows
    });
  };
  const updateColumn = (rowIndex, colIndex, key, value) => {
    const newRows = rows.map((row, i) => {
      if (i === rowIndex) {
        const newCols = row.columns.map((col, j) => j === colIndex ? {
          ...col,
          [key]: value
        } : col);
        return {
          ...row,
          columns: newCols
        };
      }
      return row;
    });
    setAttributes({
      rows: newRows
    });
  };
  const addSlide = (rowIndex, colIndex) => {
    const newSlide = {
      type: "image",
      url: "",
      poster: "",
      rotatingText: ""
    };
    const newRows = rows.map((row, i) => {
      if (i === rowIndex) {
        const newCols = row.columns.map((col, j) => j === colIndex ? {
          ...col,
          media: [...col.media, newSlide]
        } : col);
        return {
          ...row,
          columns: newCols
        };
      }
      return row;
    });
    setAttributes({
      rows: newRows
    });
  };
  const removeSlide = (rowIndex, colIndex, slideIndex) => {
    const newRows = rows.map((row, i) => {
      if (i === rowIndex) {
        const newCols = row.columns.map((col, j) => j === colIndex ? {
          ...col,
          media: col.media.filter((_, k) => k !== slideIndex)
        } : col);
        return {
          ...row,
          columns: newCols
        };
      }
      return row;
    });
    setAttributes({
      rows: newRows
    });
    // сдвигаем индекс текущего слайда, если удалили активный
    const newSlides = rows[rowIndex].columns[colIndex].media.filter((_, k) => k !== slideIndex);
    setSlideIndices(prev => {
      const newIndices = [...prev];
      if (newIndices[rowIndex] >= newSlides.length) {
        newIndices[rowIndex] = Math.max(0, newSlides.length - 1);
      }
      return newIndices;
    });
  };
  const updateSlide = (rowIndex, colIndex, slideIndex, key, value) => {
    const newRows = rows.map((row, i) => {
      if (i === rowIndex) {
        const newCols = row.columns.map((col, j) => j === colIndex ? {
          ...col,
          media: col.media.map((slide, k) => k === slideIndex ? {
            ...slide,
            [key]: value
          } : slide)
        } : col);
        return {
          ...row,
          columns: newCols
        };
      }
      return row;
    });
    setAttributes({
      rows: newRows
    });
  };

  // Рендер слайдера для редактора (одна колонка)
  const renderSlider = (rowIndex, colIndex, column) => {
    const currentIndex = slideIndices[rowIndex] || 0;
    const slides = column.media || [];
    const currentSlide = slides[currentIndex];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "smart-home__slider",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "smart-home__slider-viewport",
        children: currentSlide && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "smart-home__slide",
          children: currentSlide.type === "video" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "smart-home__video-block",
            children: [currentSlide.poster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: currentSlide.poster,
              alt: "",
              className: "smart-home__video-poster"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "smart-home__play-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                width: "30",
                height: "21",
                viewBox: "0 0 30 21",
                fill: "none",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.3131 10.9002L12.5578 14.6051C12.2643 14.7639 12 14.5512 12 14.2178V6.6123C12 6.27422 12.2725 6.06211 12.5666 6.2291L19.3682 10.1291C19.6688 10.3008 19.6178 10.735 19.3131 10.9002ZM30 6.53086C30 2.92383 27.0762 0 23.4697 0H6.53086C2.92441 0 0 2.92383 0 6.53086V14.4691C0 18.0762 2.92441 21 6.53086 21H23.4697C27.0762 21 30 18.0762 30 14.4691V6.53086Z",
                  fill: "white"
                })
              })
            }), currentSlide.rotatingText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "smart-home__rotating-text",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                viewBox: "0 0 200 200",
                className: "smart-home__rotating-svg",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    id: `rotating-path-${rowIndex}-${colIndex}`,
                    d: "M100,40 a60,60 0 1,1 -0.1,0"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("text", {
                  fontSize: "14",
                  fill: "white",
                  fontWeight: "bold",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textPath", {
                    href: `#rotating-path-${rowIndex}-${colIndex}`,
                    startOffset: "0%",
                    children: currentSlide.rotatingText
                  })
                })]
              })
            })]
          }) : currentSlide.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: currentSlide.url,
            alt: "",
            className: "smart-home__slide-image"
          })
        })
      }), slides.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "smart-home__slider-arrows",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "smart-home__arrow smart-home__arrow--left",
          onClick: () => setSlideIndices(prev => {
            const newIndices = [...prev];
            newIndices[rowIndex] = newIndices[rowIndex] === 0 ? slides.length - 1 : newIndices[rowIndex] - 1;
            return newIndices;
          }),
          children: "\u2039"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "smart-home__arrow smart-home__arrow--right",
          onClick: () => setSlideIndices(prev => {
            const newIndices = [...prev];
            newIndices[rowIndex] = newIndices[rowIndex] === slides.length - 1 ? 0 : newIndices[rowIndex] + 1;
            return newIndices;
          }),
          children: "\u203A"
        })]
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Текст блока"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Заголовок"),
          value: sectionTitle,
          onChange: v => setAttributes({
            sectionTitle: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Описание"),
          value: sectionDescription,
          onChange: v => setAttributes({
            sectionDescription: v
          })
        })]
      }), rows.map((row, rowIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: `Строка ${rowIndex + 1}`,
        initialOpen: false,
        children: row.columns.map((col, colIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            marginBottom: 20,
            border: "1px solid #ddd",
            padding: 10
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
            children: ["\u041A\u043E\u043B\u043E\u043D\u043A\u0430 ", colIndex + 1]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Название"),
            value: col.title,
            onChange: v => updateColumn(rowIndex, colIndex, "title", v)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Текст кнопки"),
            value: col.buttonText,
            onChange: v => updateColumn(rowIndex, colIndex, "buttonText", v)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ссылка кнопки"),
            value: col.buttonUrl,
            onChange: v => updateColumn(rowIndex, colIndex, "buttonUrl", v)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", {
            children: "\u041C\u0435\u0434\u0438\u0430 (\u0441\u043B\u0430\u0439\u0434\u044B)"
          }), col.media.map((slide, slideIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              marginBottom: 10,
              padding: 8,
              border: "1px solid #eee"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Тип"),
              value: slide.type,
              options: [{
                label: "Изображение",
                value: "image"
              }, {
                label: "Видео",
                value: "video"
              }],
              onChange: v => updateSlide(rowIndex, colIndex, slideIndex, "type", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: media => updateSlide(rowIndex, colIndex, slideIndex, "url", media.url),
              allowedTypes: slide.type === "video" ? ["video", "image"] : ["image"],
              value: slide.url,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: open,
                children: slide.url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Заменить медиа") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Добавить медиа")
              })
            }), slide.type === "video" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => updateSlide(rowIndex, colIndex, slideIndex, "poster", media.url),
                allowedTypes: ["image"],
                value: slide.poster,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "secondary",
                  onClick: open,
                  children: slide.poster ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Заменить постер") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Добавить постер")
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Вращающийся текст"),
                value: slide.rotatingText,
                onChange: v => updateSlide(rowIndex, colIndex, slideIndex, "rotatingText", v)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              onClick: () => removeSlide(rowIndex, colIndex, slideIndex),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Удалить слайд")
            })]
          }, slideIndex)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "primary",
            onClick: () => addSlide(rowIndex, colIndex),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Добавить слайд")
          })]
        }, colIndex))
      }, rowIndex))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "smart-home-scaler",
        id: "smart-home-scaler",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "smart-home-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "smart-home__title",
            children: sectionTitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "smart-home__description",
            children: sectionDescription
          }), rows.map((row, rowIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: `smart-home__row smart-home__row--${row.layout}`,
            children: [row.layout === "first" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "smart-home__text-col"
            }), row.columns.map((col, colIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: `smart-home__col smart-home__col--w${col.width}`,
              children: [renderSlider(rowIndex, colIndex, col), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "smart-home__card-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "smart-home__card-title",
                  children: col.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: col.buttonUrl,
                  className: "smart-home__card-button",
                  children: col.buttonText
                })]
              })]
            }, colIndex))]
          }, rowIndex))]
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/block-smart-home-main/index.js"
/*!********************************************!*\
  !*** ./src/block-smart-home-main/index.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block-smart-home-main/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block-smart-home-main/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block-smart-home-main/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block-smart-home-main/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/block-smart-home-main/save.js"
/*!*******************************************!*\
  !*** ./src/block-smart-home-main/save.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    sectionTitle,
    sectionDescription,
    rows
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "smart-home-scaler",
      id: "smart-home-scaler",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "smart-home-block",
        children: rows.map((row, rowIndex) => {
          if (row.layout === "first") {
            // Первая строка: две колонки — текст + слайдер
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "smart-home__row smart-home__row--first",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "smart-home__text-col",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                  className: "smart-home__title",
                  children: sectionTitle
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  className: "smart-home__description",
                  children: sectionDescription
                })]
              }), row.columns.map((col, colIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: `smart-home__col smart-home__col--w${col.width}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "smart-home__slider",
                  "data-slider-id": `slider-${rowIndex}-${colIndex}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "smart-home__slider-viewport",
                    children: col.media.map((slide, slideIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      className: "smart-home__slide",
                      "data-slide-index": slideIndex,
                      style: {
                        display: slideIndex === 0 ? "block" : "none"
                      },
                      children: slide.type === "video" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "smart-home__video-block",
                        children: [slide.poster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                          src: slide.poster,
                          alt: "",
                          className: "smart-home__video-poster"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video", {
                          className: "smart-home__video-element",
                          style: {
                            display: "none"
                          },
                          controls: true,
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source", {
                            src: slide.url,
                            type: "video/mp4"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                          className: "smart-home__play-icon",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                            width: "30",
                            height: "21",
                            viewBox: "0 0 30 21",
                            fill: "none",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M19.3131 10.9002L12.5578 14.6051C12.2643 14.7639 12 14.5512 12 14.2178V6.6123C12 6.27422 12.2725 6.06211 12.5666 6.2291L19.3682 10.1291C19.6688 10.3008 19.6178 10.735 19.3131 10.9002ZM30 6.53086C30 2.92383 27.0762 0 23.4697 0H6.53086C2.92441 0 0 2.92383 0 6.53086V14.4691C0 18.0762 2.92441 21 6.53086 21H23.4697C27.0762 21 30 18.0762 30 14.4691V6.53086Z",
                              fill: "white"
                            })
                          })
                        }), slide.rotatingText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                          className: "smart-home__rotating-text",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                            viewBox: "0 0 200 200",
                            className: "smart-home__rotating-svg",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                id: `rotating-path-${rowIndex}-${colIndex}`,
                                d: "M100,40 a60,60 0 1,1 -0.1,0"
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
                              fontSize: "14",
                              fill: "white",
                              fontWeight: "bold",
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textPath", {
                                href: `#rotating-path-${rowIndex}-${colIndex}`,
                                startOffset: "0%",
                                children: slide.rotatingText
                              })
                            })]
                          })
                        })]
                      }) : slide.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                        src: slide.url,
                        alt: "",
                        className: "smart-home__slide-image"
                      })
                    }, slideIndex))
                  }), col.media.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "smart-home__slider-arrows",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                      className: "smart-home__arrow smart-home__arrow--left",
                      "data-action": "prev",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        width: "7",
                        height: "12",
                        viewBox: "0 0 7 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                          d: "M6.06445 0.353516L0.707311 5.71066L6.06445 11.0678",
                          stroke: "#262626"
                        })
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                      className: "smart-home__arrow smart-home__arrow--right",
                      "data-action": "next",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        width: "7",
                        height: "12",
                        viewBox: "0 0 7 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                          d: "M0.353516 0.353516L5.71066 5.71066L0.353516 11.0678",
                          stroke: "#262626"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "smart-home__card-info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    className: "smart-home__card-title",
                    children: col.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                    href: col.buttonUrl,
                    className: "black-button card-button",
                    children: col.buttonText
                  })]
                })]
              }, colIndex))]
            }, rowIndex);
          } else {
            // Вторая и третья строки
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: `smart-home__row smart-home__row--${row.layout}`,
              children: row.columns.map((col, colIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: `smart-home__col smart-home__col--w${col.width}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "smart-home__slider",
                  "data-slider-id": `slider-${rowIndex}-${colIndex}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "smart-home__slider-viewport",
                    children: col.media.map((slide, slideIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      className: "smart-home__slide",
                      "data-slide-index": slideIndex,
                      style: {
                        display: slideIndex === 0 ? "block" : "none"
                      },
                      children: slide.type === "video" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "smart-home__video-block",
                        children: [slide.poster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                          src: slide.poster,
                          alt: "",
                          className: "smart-home__video-poster"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video", {
                          className: "smart-home__video-element",
                          style: {
                            display: "none"
                          },
                          controls: true,
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source", {
                            src: slide.url,
                            type: "video/mp4"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                          className: "smart-home__play-icon",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                            width: "30",
                            height: "21",
                            viewBox: "0 0 30 21",
                            fill: "none",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M19.3131 10.9002L12.5578 14.6051C12.2643 14.7639 12 14.5512 12 14.2178V6.6123C12 6.27422 12.2725 6.06211 12.5666 6.2291L19.3682 10.1291C19.6688 10.3008 19.6178 10.735 19.3131 10.9002ZM30 6.53086C30 2.92383 27.0762 0 23.4697 0H6.53086C2.92441 0 0 2.92383 0 6.53086V14.4691C0 18.0762 2.92441 21 6.53086 21H23.4697C27.0762 21 30 18.0762 30 14.4691V6.53086Z",
                              fill: "white"
                            })
                          })
                        }), slide.rotatingText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                          className: "smart-home__rotating-text",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                            viewBox: "0 0 200 200",
                            className: "smart-home__rotating-svg",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                                id: `rotating-path-${rowIndex}-${colIndex}`,
                                d: "M100,40 a60,60 0 1,1 -0.1,0"
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
                              fontSize: "14",
                              fill: "white",
                              fontWeight: "bold",
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textPath", {
                                href: `#rotating-path-${rowIndex}-${colIndex}`,
                                startOffset: "0%",
                                children: slide.rotatingText
                              })
                            })]
                          })
                        })]
                      }) : slide.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                        src: slide.url,
                        alt: "",
                        className: "smart-home__slide-image"
                      })
                    }, slideIndex))
                  }), col.media.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "smart-home__slider-arrows",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                      className: "smart-home__arrow smart-home__arrow--left",
                      "data-action": "prev",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        width: "7",
                        height: "12",
                        viewBox: "0 0 7 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                          d: "M6.06445 0.353516L0.707311 5.71066L6.06445 11.0678",
                          stroke: "#262626"
                        })
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                      className: "smart-home__arrow smart-home__arrow--right",
                      "data-action": "next",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        width: "7",
                        height: "12",
                        viewBox: "0 0 7 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                          d: "M0.353516 0.353516L5.71066 5.71066L0.353516 11.0678",
                          stroke: "#262626"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "smart-home__card-info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    className: "smart-home__card-title",
                    children: col.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                    href: col.buttonUrl,
                    className: "black-button card-button",
                    children: col.buttonText
                  })]
                })]
              }, colIndex))
            }, rowIndex);
          }
        })
      })
    })
  });
}

/***/ },

/***/ "./src/block-smart-home-main/style.scss"
/*!**********************************************!*\
  !*** ./src/block-smart-home-main/style.scss ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/block-smart-home-main/block.json"
/*!**********************************************!*\
  !*** ./src/block-smart-home-main/block.json ***!
  \**********************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blocks-smarttech/block-smart-home-main","version":"0.1.0","title":"Block Smart Home for Main page","category":"smarttech","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"attributes":{"sectionTitle":{"type":"string","default":"SmartHome"},"sectionDescription":{"type":"string","default":"Разрабатываем концепции, проектируем и производим модульные дома по prefab-технологии для загородных отелей и клубных коттеджных поселков"},"rows":{"type":"array","default":[{"layout":"first","columns":[{"width":560,"media":[{"type":"image","url":"","poster":"","rotatingText":""}],"title":"GLASS VILLA","buttonText":"Подробнее","buttonUrl":"#"}]},{"layout":"second","columns":[{"width":560,"media":[],"title":"GLASS VILLA XL","buttonText":"Подробнее","buttonUrl":"#"},{"width":270,"media":[],"title":"Отель HELTON","buttonText":"Подробнее","buttonUrl":"#"}]},{"layout":"third","columns":[{"width":560,"media":[],"title":"Модель X GREY GLASS","buttonText":"Подробнее","buttonUrl":"#"},{"width":270,"media":[],"title":"Дом, 125 м2","buttonText":"Подробнее","buttonUrl":"#"}]}]}},"supports":{"html":false},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-smart-home-main/index": 0,
/******/ 			"block-smart-home-main/style-index": 0
/******/ 		};
/******/ 		
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkblocks_smarttech"] = globalThis["webpackChunkblocks_smarttech"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-smart-home-main/style-index"], () => (__webpack_require__("./src/block-smart-home-main/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map