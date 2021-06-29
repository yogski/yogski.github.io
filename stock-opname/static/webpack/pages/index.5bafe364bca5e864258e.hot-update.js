self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/notification */ "./src/components/notification.tsx");
/* harmony import */ var _utilities_localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/localStorage */ "./src/utilities/localStorage.ts");
/* harmony import */ var _utilities_barcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/barcode */ "./src/utilities/barcode.ts");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\yogisaputro\\pro\\stock-opname\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// External dependencies



 // Internal dependencies





function Home() {
  _s();

  var _this = this;

  var emptyForm = {
    barcodeForm: '',
    productNameForm: '',
    editFormCode: '',
    editFormName: '',
    editFormQuantity: 0
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(emptyForm),
      formInputs = _useState[0],
      setFormInputs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      inventoryData = _useState2[0],
      setInventoryData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      formVisible = _useState3[0],
      setFormVisible = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      editModalVisible = _useState4[0],
      seteditModalVisible = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {}, [inventoryData]);
  var Search = antd__WEBPACK_IMPORTED_MODULE_10__.Input.Search;
  var columns = [{
    title: 'Barcode',
    dataIndex: 'code',
    key: 'code',
    sorter: {
      compare: function compare(a, b) {
        return a.code - b.code;
      },
      multiple: 1
    },
    render: function render(text) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 31
      }, _this);
    }
  }, {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: function compare(a, b) {
        return a.name.localeCompare(b.name);
      },
      multiple: 2
    }
  }, {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: {
      compare: function compare(a, b) {
        return a.quantity - b.quantity;
      },
      multiple: 3
    }
  }, {
    title: 'Action',
    key: 'action',
    dataIndex: 'key',
    render: function render(e) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Space, {
        size: "middle",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Popover, {
          content: "Edit Record",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
            type: "primary",
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.EditFilled, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }, _this),
            size: "middle",
            onClick: function onClick() {
              return toggleEditModal(true, e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Popover, {
          content: "Delete Record",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
            type: "primary",
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.DeleteFilled, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, _this),
            size: "middle",
            danger: true,
            onClick: function onClick() {
              return deleteRecord(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this);
    }
  }];

  var handleInputs = function handleInputs(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFormInputs(_objectSpread(_objectSpread({}, formInputs), {}, (0,C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)({}, name, value)));
  };

  var clearForm = function clearForm() {
    setFormInputs(emptyForm);
  };

  var saveEdit = function saveEdit(record) {
    var _document$getElementB2;

    if (record.code === '' || !_utilities_barcode__WEBPACK_IMPORTED_MODULE_9__.isValid(record.code)) {
      var _document$getElementB;

      _components_notification__WEBPACK_IMPORTED_MODULE_7__.err("invalid barcode format: '".concat(record.code, "'"));
      clearForm();
      (_document$getElementB = document.getElementById("barcodeForm")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.focus();
      return;
    }

    setInventoryData([].concat((0,C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(inventoryData.filter(function (x) {
      return x.key !== record.key;
    })), [record]));
    toggleEditModal(false);
    (_document$getElementB2 = document.getElementById("barcodeForm")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.focus();
    return;
  };

  var deleteRecord = function deleteRecord(key) {
    setInventoryData(inventoryData.filter(function (x) {
      return x.key !== key;
    }));
    _components_notification__WEBPACK_IMPORTED_MODULE_7__.info("Record with identifier ".concat(key, " has been deleted."));
  };

  var toggleEditModal = function toggleEditModal(bool, key) {
    if (key) {
      var record = inventoryData.filter(function (x) {
        return x.key === key;
      })[0];
      setFormInputs(_objectSpread(_objectSpread({}, formInputs), {}, {
        editFormCode: record.code,
        editFormName: record.name,
        editFormQuantity: record.quantity
      }));
    }

    seteditModalVisible(bool);
  };

  var editModal = function editModal() {
    var saveData = {
      code: formInputs.editFormCode.replaceAll(/\s/g, ''),
      name: formInputs.editFormName,
      quantity: formInputs.editFormQuantity,
      key: _utilities_barcode__WEBPACK_IMPORTED_MODULE_9__.hashBarcode(formInputs.editFormCode)
    };
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Modal, {
      visible: editModalVisible,
      title: "Edit Record",
      footer: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
        type: "primary",
        danger: true,
        onClick: function onClick() {
          return toggleEditModal(false);
        },
        children: "Cancel"
      }, "cancel", false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
        type: "primary",
        onClick: function onClick() {
          return saveEdit(saveData);
        },
        children: "Save"
      }, "save", false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }, _this)],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Space, {
        direction: "vertical",
        style: {
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input, {
            id: "editFormName",
            name: "editFormName",
            value: formInputs.editFormName,
            allowClear: true,
            onChange: handleInputs
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Quantity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input, {
            id: "editFormQuantity",
            name: "editFormQuantity",
            value: formInputs.editFormQuantity,
            allowClear: true,
            onChange: handleInputs
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, _this);
  };

  var generateFilename = function generateFilename() {
    var d = new Date();
    return "csv_stockopname_".concat(d.toLocaleDateString('id-ID'), "_").concat(Number(d).toString(16), ".csv");
  }; // definitely can be improved, maybe using map()


  var getCsvOutput = function getCsvOutput() {
    var output = [];
    inventoryData.forEach(function (item) {
      output.push({
        code: item.code,
        name: item.name,
        quantity: item.quantity
      });
    });
    return output;
  };

  var inputBarcode = /*#__PURE__*/function () {
    var _ref = (0,C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var barcode, match, _document$getElementB3;

      return C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              barcode = formInputs.barcodeForm.replaceAll(/\s/g, '');

              if (!(barcode === '' || !_utilities_barcode__WEBPACK_IMPORTED_MODULE_9__.isValid(barcode))) {
                _context.next = 5;
                break;
              }

              _components_notification__WEBPACK_IMPORTED_MODULE_7__.err("invalid barcode format: '".concat(barcode, "'"));
              clearForm();
              return _context.abrupt("return");

            case 5:
              match = inventoryData.findIndex(function (x) {
                return x.code === barcode;
              });

              if (match !== -1) {
                inventoryData[match].quantity++;
                setInventoryData(inventoryData);
                _components_notification__WEBPACK_IMPORTED_MODULE_7__.info("".concat(inventoryData[match].name, " (").concat(inventoryData[match].code, "): quantity updated."));
                clearForm();
              } else {
                (_document$getElementB3 = document.getElementById("productNameForm")) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.focus();
                setFormVisible(true);
              }

              return _context.abrupt("return");

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function inputBarcode(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var addNewProduct = function addNewProduct() {
    var _document$getElementB4;

    var newProduct = {
      code: formInputs.barcodeForm.replaceAll(/\s/g, ''),
      name: formInputs.productNameForm,
      quantity: 1,
      key: _utilities_barcode__WEBPACK_IMPORTED_MODULE_9__.hashBarcode(formInputs.barcodeForm)
    };
    setInventoryData([].concat((0,C_Users_yogisaputro_pro_stock_opname_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(inventoryData), [newProduct]));
    setFormVisible(false);
    _components_notification__WEBPACK_IMPORTED_MODULE_7__.info("".concat(newProduct.name, " (").concat(newProduct.code, "): new product added."));
    clearForm();
    (_document$getElementB4 = document.getElementById("barcodeForm")) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.focus();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().title),
        children: "Stock Opname"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Search, {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().searchbar),
        id: "barcodeForm",
        name: "barcodeForm",
        value: formInputs.barcodeForm,
        placeholder: "input barcode here ...",
        allowClear: true,
        enterButton: "Add",
        size: "large",
        onChange: handleInputs,
        onSearch: inputBarcode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 7
      }, this), formVisible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Input, {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().searchbar),
        id: "productNameForm",
        name: "productNameForm",
        value: formInputs.productNameForm,
        placeholder: "Input product name, then press Enter",
        allowClear: true,
        autoFocus: true,
        size: "large",
        onChange: handleInputs,
        onPressEnter: addNewProduct
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 9
      }, this) : null, editModalVisible ? editModal() : null, inventoryData.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Space, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_csv__WEBPACK_IMPORTED_MODULE_6__.CSVLink, {
            data: getCsvOutput(),
            separator: ",",
            filename: generateFilename(),
            children: "Download CSV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
          onClick: function onClick() {
            return _utilities_localStorage__WEBPACK_IMPORTED_MODULE_8__.saveInventory(inventoryData);
          },
          children: "Save Inventory"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
          onClick: function onClick() {
            return setInventoryData(_utilities_localStorage__WEBPACK_IMPORTED_MODULE_8__.getInventory());
          },
          children: "Load Inventory"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Space, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
          onClick: function onClick() {
            return setInventoryData(_utilities_localStorage__WEBPACK_IMPORTED_MODULE_8__.getInventory());
          },
          children: "Load Inventory"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Table, {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().tableDisplay),
        columns: columns,
        dataSource: inventoryData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_s(Home, "EsrsZumQk9qUj+9CxPo2tOKX/JM=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiZW1wdHlGb3JtIiwiYmFyY29kZUZvcm0iLCJwcm9kdWN0TmFtZUZvcm0iLCJlZGl0Rm9ybUNvZGUiLCJlZGl0Rm9ybU5hbWUiLCJlZGl0Rm9ybVF1YW50aXR5IiwidXNlU3RhdGUiLCJmb3JtSW5wdXRzIiwic2V0Rm9ybUlucHV0cyIsImludmVudG9yeURhdGEiLCJzZXRJbnZlbnRvcnlEYXRhIiwiZm9ybVZpc2libGUiLCJzZXRGb3JtVmlzaWJsZSIsImVkaXRNb2RhbFZpc2libGUiLCJzZXRlZGl0TW9kYWxWaXNpYmxlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwiSW5wdXQiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJzb3J0ZXIiLCJjb21wYXJlIiwiYSIsImIiLCJjb2RlIiwibXVsdGlwbGUiLCJyZW5kZXIiLCJ0ZXh0IiwibmFtZSIsImxvY2FsZUNvbXBhcmUiLCJxdWFudGl0eSIsImUiLCJ0b2dnbGVFZGl0TW9kYWwiLCJkZWxldGVSZWNvcmQiLCJoYW5kbGVJbnB1dHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2xlYXJGb3JtIiwic2F2ZUVkaXQiLCJyZWNvcmQiLCJiYXJjb2RlVXRpbHMiLCJub3RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvY3VzIiwiZmlsdGVyIiwieCIsImJvb2wiLCJlZGl0TW9kYWwiLCJzYXZlRGF0YSIsInJlcGxhY2VBbGwiLCJ3aWR0aCIsImdlbmVyYXRlRmlsZW5hbWUiLCJkIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIk51bWJlciIsInRvU3RyaW5nIiwiZ2V0Q3N2T3V0cHV0Iiwib3V0cHV0IiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiaW5wdXRCYXJjb2RlIiwiYmFyY29kZSIsIm1hdGNoIiwiZmluZEluZGV4IiwiYWRkTmV3UHJvZHVjdCIsIm5ld1Byb2R1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dEI7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsRE4sZUF5REUsOERBQUMsd0NBQUQ7QUFBTyxpQkFBUyxFQUFFRiw4RUFBbEI7QUFBdUMsZUFBTyxFQUFFdEQsT0FBaEQ7QUFBeUQsa0JBQVUsRUFBRVQ7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQWdFRDs7R0F0UnVCVixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViYWZlMzY0YmNhNWU4NjQyNThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHRlcm5hbCBkZXBlbmRlbmNpZXNcbmltcG9ydCB7IElucHV0LCBUYWJsZSwgU3BhY2UsIEJ1dHRvbiwgUG9wb3ZlciwgTW9kYWwsIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBEZWxldGVGaWxsZWQsIEVkaXRGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gXCJyZWFjdC1jc3ZcIjtcblxuLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBub3RlIGZyb20gJy4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uJztcbmltcG9ydCAqIGFzIHN0b3JlIGZyb20gJy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0ICogYXMgYmFyY29kZVV0aWxzIGZyb20gJy4uL3V0aWxpdGllcy9iYXJjb2RlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgZm9ybUlucHV0IHtcbiAgYmFyY29kZUZvcm06IHN0cmluZztcbiAgcHJvZHVjdE5hbWVGb3JtOiBzdHJpbmc7XG4gIGVkaXRGb3JtQ29kZTogc3RyaW5nO1xuICBlZGl0Rm9ybU5hbWU6IHN0cmluZztcbiAgZWRpdEZvcm1RdWFudGl0eTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBpbnZlbnRvcnlEYXRhIHtcbiAgY29kZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIGtleTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBlbXB0eUZvcm0gPSB7XG4gICAgYmFyY29kZUZvcm06ICcnLFxuICAgIHByb2R1Y3ROYW1lRm9ybTogJycsXG4gICAgZWRpdEZvcm1Db2RlOiAnJyxcbiAgICBlZGl0Rm9ybU5hbWU6ICcnLFxuICAgIGVkaXRGb3JtUXVhbnRpdHk6IDBcbiAgfTtcblxuICBjb25zdCBbZm9ybUlucHV0cywgc2V0Rm9ybUlucHV0c10gPSB1c2VTdGF0ZTxmb3JtSW5wdXQ+KGVtcHR5Rm9ybSk7XG4gIGNvbnN0IFtpbnZlbnRvcnlEYXRhLHNldEludmVudG9yeURhdGFdID0gdXNlU3RhdGU8QXJyYXk8aW52ZW50b3J5RGF0YT4+KFtdKTtcbiAgY29uc3QgW2Zvcm1WaXNpYmxlLCBzZXRGb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtlZGl0TW9kYWxWaXNpYmxlLCBzZXRlZGl0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCk9Pnt9LCBbaW52ZW50b3J5RGF0YV0pXG5cbiAgY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdCYXJjb2RlJyxcbiAgICAgIGRhdGFJbmRleDogJ2NvZGUnLFxuICAgICAga2V5OiAnY29kZScsXG4gICAgICBzb3J0ZXI6IHtcbiAgICAgICAgY29tcGFyZTogKGE6IGFueSwgYjogYW55KSA9PiBhLmNvZGUgLSBiLmNvZGUsXG4gICAgICAgIG11bHRpcGxlOiAxLFxuICAgICAgfSxcbiAgICAgIHJlbmRlcjogKHRleHQgOiBhbnkpID0+IDxhPnt0ZXh0fTwvYT5cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUHJvZHVjdCBOYW1lJyxcbiAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxuICAgICAga2V5OiAnbmFtZScsXG4gICAgICBzb3J0ZXI6IHtcbiAgICAgICAgY29tcGFyZTogKGE6IGFueSwgYjogYW55KSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpLFxuICAgICAgICBtdWx0aXBsZTogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1F1YW50aXR5JyxcbiAgICAgIGRhdGFJbmRleDogJ3F1YW50aXR5JyxcbiAgICAgIGtleTogJ3F1YW50aXR5JyxcbiAgICAgIHNvcnRlcjoge1xuICAgICAgICBjb21wYXJlOiAoYTogYW55LCBiOiBhbnkpID0+IGEucXVhbnRpdHkgLSBiLnF1YW50aXR5LFxuICAgICAgICBtdWx0aXBsZTogMyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQWN0aW9uJyxcbiAgICAgIGtleTogJ2FjdGlvbicsXG4gICAgICBkYXRhSW5kZXg6ICdrZXknLFxuICAgICAgcmVuZGVyOiAoZSA6IGFueSkgPT4gKFxuICAgICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxuICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9e2BFZGl0IFJlY29yZGB9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGljb249ezxFZGl0RmlsbGVkIC8+fVxuICAgICAgICAgICAgc2l6ZT1cIm1pZGRsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVFZGl0TW9kYWwodHJ1ZSwgZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgPFBvcG92ZXIgY29udGVudD17YERlbGV0ZSBSZWNvcmRgfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBpY29uPXs8RGVsZXRlRmlsbGVkIC8+fVxuICAgICAgICAgICAgc2l6ZT1cIm1pZGRsZVwiXG4gICAgICAgICAgICBkYW5nZXJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVJlY29yZChlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9TcGFjZT5cbiAgICAgICksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVJbnB1dHMgPSAoZXZlbnQgOiBhbnkpID0+IHtcbiAgICBsZXQge25hbWUsIHZhbHVlfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZvcm1JbnB1dHMoeyAuLi5mb3JtSW5wdXRzLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9XG5cbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIHNldEZvcm1JbnB1dHMoZW1wdHlGb3JtKTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVFZGl0ID0gKHJlY29yZCA6IGludmVudG9yeURhdGEpID0+IHtcbiAgICBpZiAocmVjb3JkLmNvZGUgPT09ICcnIHx8ICFiYXJjb2RlVXRpbHMuaXNWYWxpZChyZWNvcmQuY29kZSkpIHtcbiAgICAgIG5vdGUuZXJyKGBpbnZhbGlkIGJhcmNvZGUgZm9ybWF0OiAnJHtyZWNvcmQuY29kZX0nYCk7XG4gICAgICBjbGVhckZvcm0oKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyY29kZUZvcm1cIik/LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEludmVudG9yeURhdGEoWy4uLmludmVudG9yeURhdGEuZmlsdGVyKCh4KSA9PiB4LmtleSAhPT0gcmVjb3JkLmtleSksIHJlY29yZF0pO1xuICAgIHRvZ2dsZUVkaXRNb2RhbChmYWxzZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXJjb2RlRm9ybVwiKT8uZm9jdXMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkZWxldGVSZWNvcmQgPSAoa2V5IDogbnVtYmVyKSA9PiB7XG4gICAgc2V0SW52ZW50b3J5RGF0YShpbnZlbnRvcnlEYXRhLmZpbHRlcigoeCkgPT4geC5rZXkgIT09IGtleSkpO1xuICAgIG5vdGUuaW5mbyhgUmVjb3JkIHdpdGggaWRlbnRpZmllciAke2tleX0gaGFzIGJlZW4gZGVsZXRlZC5gKTtcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUVkaXRNb2RhbCA9IChib29sIDogYm9vbGVhbiwga2V5PyA6IGFueSkgPT4ge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGNvbnN0IHJlY29yZCA9IGludmVudG9yeURhdGEuZmlsdGVyKCh4KSA9PiB4LmtleSA9PT0ga2V5KVswXTtcbiAgICAgIHNldEZvcm1JbnB1dHMoe1xuICAgICAgICAuLi5mb3JtSW5wdXRzLFxuICAgICAgICBlZGl0Rm9ybUNvZGU6IHJlY29yZC5jb2RlLFxuICAgICAgICBlZGl0Rm9ybU5hbWU6IHJlY29yZC5uYW1lLFxuICAgICAgICBlZGl0Rm9ybVF1YW50aXR5OiByZWNvcmQucXVhbnRpdHlcbiAgICAgIH0pXG4gICAgfVxuICAgIHNldGVkaXRNb2RhbFZpc2libGUoYm9vbCk7XG4gIH1cblxuICBjb25zdCBlZGl0TW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZURhdGEgOiBpbnZlbnRvcnlEYXRhID0ge1xuICAgICAgY29kZSA6IGZvcm1JbnB1dHMuZWRpdEZvcm1Db2RlLnJlcGxhY2VBbGwoL1xccy9nLCcnKSxcbiAgICAgIG5hbWUgOiBmb3JtSW5wdXRzLmVkaXRGb3JtTmFtZSxcbiAgICAgIHF1YW50aXR5IDogZm9ybUlucHV0cy5lZGl0Rm9ybVF1YW50aXR5LFxuICAgICAga2V5OiBiYXJjb2RlVXRpbHMuaGFzaEJhcmNvZGUoZm9ybUlucHV0cy5lZGl0Rm9ybUNvZGUpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17ZWRpdE1vZGFsVmlzaWJsZX1cbiAgICAgICAgdGl0bGU9XCJFZGl0IFJlY29yZFwiXG4gICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgIDxCdXR0b24ga2V5PVwiY2FuY2VsXCIgdHlwZT1cInByaW1hcnlcIiBkYW5nZXIgb25DbGljaz17KCkgPT4gdG9nZ2xlRWRpdE1vZGFsKGZhbHNlKX0+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgPEJ1dHRvbiBrZXk9XCJzYXZlXCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzYXZlRWRpdChzYXZlRGF0YSl9PlxuICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgIGlkPVwiZWRpdEZvcm1OYW1lXCIgXG4gICAgICAgICAgICBuYW1lPVwiZWRpdEZvcm1OYW1lXCIgXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybUlucHV0cy5lZGl0Rm9ybU5hbWV9XG4gICAgICAgICAgICBhbGxvd0NsZWFyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICA8bGFiZWw+UXVhbnRpdHk8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgIGlkPVwiZWRpdEZvcm1RdWFudGl0eVwiIFxuICAgICAgICAgICAgbmFtZT1cImVkaXRGb3JtUXVhbnRpdHlcIiBcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtSW5wdXRzLmVkaXRGb3JtUXVhbnRpdHl9XG4gICAgICAgICAgICBhbGxvd0NsZWFyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3BhY2U+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGdlbmVyYXRlRmlsZW5hbWUgPSAoKSA9PiB7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBgY3N2X3N0b2Nrb3BuYW1lXyR7ZC50b0xvY2FsZURhdGVTdHJpbmcoJ2lkLUlEJyl9XyR7TnVtYmVyKGQpLnRvU3RyaW5nKDE2KX0uY3N2YDtcbiAgfVxuXG4gIC8vIGRlZmluaXRlbHkgY2FuIGJlIGltcHJvdmVkLCBtYXliZSB1c2luZyBtYXAoKVxuICBjb25zdCBnZXRDc3ZPdXRwdXQgPSAoKSA9PiB7XG4gICAgbGV0IG91dHB1dCA6IEFycmF5PGFueT4gPSBbXTtcbiAgICBpbnZlbnRvcnlEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG91dHB1dC5wdXNoKHtcbiAgICAgICAgY29kZSA6IGl0ZW0uY29kZSxcbiAgICAgICAgbmFtZSA6IGl0ZW0ubmFtZSxcbiAgICAgICAgcXVhbnRpdHkgOiBpdGVtLnF1YW50aXR5XG4gICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBjb25zdCBpbnB1dEJhcmNvZGUgPSBhc3luYyAoZXZlbnQgOiBhbnkpID0+IHtcbiAgICBsZXQgYmFyY29kZSA9IGZvcm1JbnB1dHMuYmFyY29kZUZvcm0ucmVwbGFjZUFsbCgvXFxzL2csJycpO1xuICAgIGlmIChiYXJjb2RlID09PSAnJyB8fCAhYmFyY29kZVV0aWxzLmlzVmFsaWQoYmFyY29kZSkpIHtcbiAgICAgIG5vdGUuZXJyKGBpbnZhbGlkIGJhcmNvZGUgZm9ybWF0OiAnJHtiYXJjb2RlfSdgKTtcbiAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbWF0Y2ggOiBudW1iZXIgPSBpbnZlbnRvcnlEYXRhLmZpbmRJbmRleCgoeCkgPT4geC5jb2RlID09PSBiYXJjb2RlKTtcbiAgICBpZiAobWF0Y2ggIT09IC0xKSB7XG4gICAgICBpbnZlbnRvcnlEYXRhW21hdGNoXS5xdWFudGl0eSsrO1xuICAgICAgc2V0SW52ZW50b3J5RGF0YShpbnZlbnRvcnlEYXRhKTtcbiAgICAgIG5vdGUuaW5mbyhgJHtpbnZlbnRvcnlEYXRhW21hdGNoXS5uYW1lfSAoJHtpbnZlbnRvcnlEYXRhW21hdGNoXS5jb2RlfSk6IHF1YW50aXR5IHVwZGF0ZWQuYCk7XG4gICAgICBjbGVhckZvcm0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0TmFtZUZvcm1cIik/LmZvY3VzKCk7XG4gICAgICBzZXRGb3JtVmlzaWJsZSh0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYWRkTmV3UHJvZHVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9kdWN0IDogaW52ZW50b3J5RGF0YSA9IHtcbiAgICAgIGNvZGUgOiBmb3JtSW5wdXRzLmJhcmNvZGVGb3JtLnJlcGxhY2VBbGwoL1xccy9nLCcnKSxcbiAgICAgIG5hbWUgOiBmb3JtSW5wdXRzLnByb2R1Y3ROYW1lRm9ybSxcbiAgICAgIHF1YW50aXR5IDogMSxcbiAgICAgIGtleTogYmFyY29kZVV0aWxzLmhhc2hCYXJjb2RlKGZvcm1JbnB1dHMuYmFyY29kZUZvcm0pXG4gICAgfVxuICAgIHNldEludmVudG9yeURhdGEoWy4uLmludmVudG9yeURhdGEsIG5ld1Byb2R1Y3RdKTtcbiAgICBzZXRGb3JtVmlzaWJsZShmYWxzZSk7XG4gICAgbm90ZS5pbmZvKGAke25ld1Byb2R1Y3QubmFtZX0gKCR7bmV3UHJvZHVjdC5jb2RlfSk6IG5ldyBwcm9kdWN0IGFkZGVkLmApO1xuICAgIGNsZWFyRm9ybSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyY29kZUZvcm1cIik/LmZvY3VzKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5TdG9jayBPcG5hbWU8L2gxPlxuXG4gICAgICA8U2VhcmNoXG4gICAgICAgIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2VhcmNoYmFyfVxuICAgICAgICBpZCA9IFwiYmFyY29kZUZvcm1cIlxuICAgICAgICBuYW1lID0gXCJiYXJjb2RlRm9ybVwiXG4gICAgICAgIHZhbHVlID0ge2Zvcm1JbnB1dHMuYmFyY29kZUZvcm19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiaW5wdXQgYmFyY29kZSBoZXJlIC4uLlwiXG4gICAgICAgIGFsbG93Q2xlYXJcbiAgICAgICAgZW50ZXJCdXR0b249XCJBZGRcIlxuICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRzfVxuICAgICAgICBvblNlYXJjaD17aW5wdXRCYXJjb2RlfVxuICAgICAgLz5cblxuICAgICAge2Zvcm1WaXNpYmxlID8gXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2VhcmNoYmFyfVxuICAgICAgICAgIGlkPVwicHJvZHVjdE5hbWVGb3JtXCJcbiAgICAgICAgICBuYW1lPVwicHJvZHVjdE5hbWVGb3JtXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybUlucHV0cy5wcm9kdWN0TmFtZUZvcm19XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBwcm9kdWN0IG5hbWUsIHRoZW4gcHJlc3MgRW50ZXJcIlxuICAgICAgICAgIGFsbG93Q2xlYXJcbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dHN9XG4gICAgICAgICAgb25QcmVzc0VudGVyPXthZGROZXdQcm9kdWN0fVxuICAgICAgICAvPlxuICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAgIHtlZGl0TW9kYWxWaXNpYmxlID8gZWRpdE1vZGFsKCkgOiBudWxsfVxuICAgICAgeyBpbnZlbnRvcnlEYXRhLmxlbmd0aCA+IDAgP1xuICAgICAgICA8U3BhY2U+XG4gICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICA8Q1NWTGluayBcbiAgICAgICAgICAgIGRhdGE9e2dldENzdk91dHB1dCgpfVxuICAgICAgICAgICAgc2VwYXJhdG9yPXtcIixcIn1cbiAgICAgICAgICAgIGZpbGVuYW1lPXtnZW5lcmF0ZUZpbGVuYW1lKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG93bmxvYWQgQ1NWXG4gICAgICAgICAgPC9DU1ZMaW5rPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc3RvcmUuc2F2ZUludmVudG9yeShpbnZlbnRvcnlEYXRhKX0+XG4gICAgICAgICAgICBTYXZlIEludmVudG9yeVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SW52ZW50b3J5RGF0YShzdG9yZS5nZXRJbnZlbnRvcnkoKSl9PlxuICAgICAgICAgICAgTG9hZCBJbnZlbnRvcnlcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgOiA8U3BhY2U+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJbnZlbnRvcnlEYXRhKHN0b3JlLmdldEludmVudG9yeSgpKX0+XG4gICAgICAgICAgICBMb2FkIEludmVudG9yeVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1NwYWNlPlxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZURpc3BsYXl9IGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2ludmVudG9yeURhdGF9IC8+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9