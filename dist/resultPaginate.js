"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultPaginate = void 0;
var paginate_1 = require("./paginate");
function resultPaginate(data) {
    var page = data.page, paginate = data.paginate, _a = data.minNumber, minNumber = _a === void 0 ? 5 : _a;
    return (0, paginate_1.getPaginate)(paginate.total, Number(page), paginate.limit, minNumber);
}
exports.resultPaginate = resultPaginate;
