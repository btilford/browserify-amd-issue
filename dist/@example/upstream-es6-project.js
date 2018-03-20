require=(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
define(["exports", "./thing1", "./thing2"], function (exports, _thing, _thing2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.publicApi = undefined;
    var publicApi = exports.publicApi = {
        Thing1: _thing.Thing1,
        Thing2: _thing2.Thing2
    };
});

},{}],"@example/upstream-es6-project/thing1":[function(require,module,exports){
define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Thing1 = exports.Thing1 = function () {
        function Thing1() {
            _classCallCheck(this, Thing1);
        }

        _createClass(Thing1, [{
            key: 'log',
            value: function log() {
                console.log('thing 1');
            }
        }]);

        return Thing1;
    }();
});

},{}],"@example/upstream-es6-project/thing2":[function(require,module,exports){
define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Thing2 = exports.Thing2 = function () {
        function Thing2() {
            _classCallCheck(this, Thing2);
        }

        _createClass(Thing2, [{
            key: 'log',
            value: function log() {
                console.log('thing 2');
            }
        }]);

        return Thing2;
    }();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdXBzdHJlYW0tZXM2LXByb2plY3QuanMiLCJsaWIvdGhpbmcxLmpzIiwibGliL3RoaW5nMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTs7Ozs7O0FBSU8sUUFBTSxnQ0FBWTtBQUNyQiw2QkFEcUI7QUFFckI7QUFGcUIsS0FBbEI7Ozs7O0FDSlA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVhLE0sV0FBQSxNOzs7Ozs7O2tDQUNIO0FBQ0Ysd0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDSDs7Ozs7Ozs7O0FDTEw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVhLE0sV0FBQSxNOzs7Ozs7O2tDQUNIO0FBQ0Ysd0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHtUaGluZzF9IGZyb20gXCIuL3RoaW5nMVwiO1xuaW1wb3J0IHtUaGluZzJ9IGZyb20gXCIuL3RoaW5nMlwiO1xuXG5leHBvcnQgY29uc3QgcHVibGljQXBpID0ge1xuICAgIFRoaW5nMTogVGhpbmcxLFxuICAgIFRoaW5nMjogVGhpbmcyXG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNsYXNzIFRoaW5nMSB7XG4gICAgbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpbmcgMScpO1xuICAgIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjbGFzcyBUaGluZzIge1xuICAgIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaW5nIDInKTtcbiAgICB9XG59Il19
