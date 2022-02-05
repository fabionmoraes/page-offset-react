"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromToTotal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var FromToTotal = function (_a) {
    var data = _a.data;
    var page = data.page, paginate = data.paginate;
    var skip = Number(page || 0) * Number((paginate === null || paginate === void 0 ? void 0 : paginate.limit) || 0);
    var from = skip - Number((paginate === null || paginate === void 0 ? void 0 : paginate.limit) || 0);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "page-off-from" }, { children: [(data === null || data === void 0 ? void 0 : data.from) || "from", " ", from, " ", (data === null || data === void 0 ? void 0 : data.to) || "to", " ", paginate === null || paginate === void 0 ? void 0 : paginate.total] }), void 0));
};
exports.FromToTotal = FromToTotal;
