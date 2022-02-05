"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryURI = void 0;
function urlParams() {
    var url = new URL(window.location);
    var urlSearch = new URLSearchParams(url.search);
    return { urlSearch: urlSearch, url: url };
}
function queryURI(params) {
    var _a, _b;
    var _c;
    var url = urlParams();
    var objectAssing = {};
    var search = ((_c = url.url) === null || _c === void 0 ? void 0 : _c.search) || "";
    if (search) {
        var arrSearch = search.replace("?", "").split("&");
        var verifyIfNotExistsSearch = !!arrSearch.find(function (item) {
            return item.includes(params.name);
        });
        if (!verifyIfNotExistsSearch) {
            Object.assign(objectAssing, (_a = {}, _a[params.name] = params.value, _a));
        }
        arrSearch.forEach(function (item) {
            var _a;
            var structure = item.split("=");
            var name = structure[0];
            var value = params.name === name ? params.value : structure[1];
            Object.assign(objectAssing, (_a = {}, _a[name] = value, _a));
        });
    }
    else {
        Object.assign(objectAssing, (_b = {}, _b[params.name] = params.value, _b));
    }
    var res = Object.keys(objectAssing).map(function (key) {
        return "".concat(key, "=").concat(objectAssing[key]);
    });
    return "?".concat(res.join("&"));
}
exports.queryURI = queryURI;
