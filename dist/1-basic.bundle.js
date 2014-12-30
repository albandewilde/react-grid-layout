webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _objectWithoutProperties = function (obj, keys) {
	  var target = {};
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	"use strict";
	var React = __webpack_require__(8);
	var _ = __webpack_require__(30);
	var ReactGridLayout = __webpack_require__(28);

	var BasicLayout = module.exports = React.createClass({
	  displayName: "BasicLayout",
	  mixins: [React.addons.PureRenderMixin],

	  propTypes: {
	    onLayoutChange: React.PropTypes.func.isRequired
	  },

	  getDefaultProps: function () {
	    return {
	      isDraggable: true,
	      isResizable: true,
	      items: 20,
	      w: 2,
	      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
	    };
	  },

	  getInitialState: function () {
	    var layout = this.generateLayout();
	    return {
	      layout: layout,
	      initialLayout: layout
	    };
	  },

	  generateDOM: function () {
	    return _.map(_.range(this.props.items), function (i) {
	      return React.createElement("div", {
	        key: i
	      }, React.createElement("span", {
	        className: "text"
	      }, i));
	    });
	  },

	  generateLayout: function () {
	    var p = this.props;
	    return _.map(new Array(p.items), function (item, i) {
	      var w = _.result(p, "w") || Math.ceil(Math.random() * 4);
	      var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
	      return { x: i * 2 % 12, y: Math.floor(i / 6) * y, w: w, h: y, i: i };
	    });
	  },

	  onLayoutChange: function (layout) {
	    this.props.onLayoutChange(layout);
	    this.setState({ layout: layout });
	  },

	  render: function () {
	    var layout = this.props.layout;
	    var gridProps = _objectWithoutProperties(this.props, ["layout"]);

	    return React.createElement(ReactGridLayout, React.__spread({
	      className: "layout",
	      initialLayout: this.state.initialLayout,
	      cols: 12,
	      onLayoutChange: this.onLayoutChange,
	      rowHeight: 30
	    }, gridProps), this.generateDOM());
	  }
	});

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(29)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }
]);