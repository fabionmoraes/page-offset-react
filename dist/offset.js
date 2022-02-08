"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastPage = exports.offset = void 0;
var offset = function (data) {
    var page = data.page, limit = data.limit;
    var subPage = Number(page) - 1;
    var offset = Number(subPage) * Number(limit);
    return offset;
};
exports.offset = offset;
var lastPage = function (paginate) {
    return Number((paginate.total / paginate.limit).toFixed());
};
exports.lastPage = lastPage;
