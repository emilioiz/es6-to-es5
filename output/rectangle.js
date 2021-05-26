"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rectangle = /*#__PURE__*/function () {
  function Rectangle(height, width) {
    var _this = this;

    _classCallCheck(this, Rectangle);

    _defineProperty(this, "calcArea", function () {
      return _this.height + _this.width;
    });

    this.height = height;
    this.width = width;
  }

  _createClass(Rectangle, [{
    key: "area",
    get: function get() {
      return this.calcArea();
    }
  }]);

  return Rectangle;
}();

exports.Rectangle = Rectangle;