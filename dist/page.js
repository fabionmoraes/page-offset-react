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
exports.Page = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var offset_1 = require("./offset");
var paginate_1 = require("./paginate");
var queryURI_1 = require("./queryURI");
var Page = function (_a) {
    var paginate = _a.paginate, page = _a.page, custom_class = _a.custom_class, prev = _a.prev, next = _a.next, handlePage = _a.handlePage, handleNextOrPrev = _a.handleNextOrPrev, _b = _a.minNumber, minNumber = _b === void 0 ? 5 : _b;
    var totalPages = (0, offset_1.lastPage)(paginate);
    var numberPage = Number(page);
    var resultNav = (0, paginate_1.getPaginate)(paginate.total, numberPage, paginate.limit, minNumber);
    var handleNextOrPrevT = function (type) {
        if (type === "next") {
            var next_1 = Number(page) + 1;
            var params_1 = (0, queryURI_1.queryURI)({
                name: "page",
                value: String(next_1),
            });
            var result_1 = {
                params: params_1,
                page: page,
            };
            handleNextOrPrev(result_1);
            return;
        }
        var prev = Number(page) - 1;
        var params = (0, queryURI_1.queryURI)({
            name: "page",
            value: String(prev),
        });
        var result = {
            params: params,
            page: page,
        };
        handleNextOrPrev(result);
        return;
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex" }, className: (custom_class === null || custom_class === void 0 ? void 0 : custom_class.page) || "page-offset" }, { children: [resultNav.pages[0] >= 3 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: function () { return handlePage && handlePage("1"); } }, { children: "1" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: function () { return handlePage && handlePage("2"); } }, { children: "2" }), void 0), (0, jsx_runtime_1.jsx)("small", __assign({ style: { marginRight: "6px" } }, { children: "..." }), void 0)] }, void 0)), resultNav.pages.map(function (item) { return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: Number(page) === item ? "active" : "nd", onClick: function () { return handlePage && handlePage(String(item)); } }, { children: item }), item)); }), resultNav.pages[minNumber - 1] <= resultNav.totalPages - 2 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("small", __assign({ style: { marginRight: "6px" } }, { children: "..." }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: function () {
                                    return handlePage && handlePage(String(resultNav.totalPages));
                                } }, { children: resultNav.totalPages }), void 0)] }, void 0))] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", marginLeft: "12px" }, className: (custom_class === null || custom_class === void 0 ? void 0 : custom_class.nextOrPrev) || "next-prev-offset" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ type: "button", disabled: Number(page) === 1, onClick: function () { return handleNextOrPrevT("prev"); } }, { children: prev || "Prev" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: function () { return handleNextOrPrevT("next"); }, disabled: Number(page) >= totalPages }, { children: next || "Next" }), void 0)] }), void 0)] }), void 0));
};
exports.Page = Page;
