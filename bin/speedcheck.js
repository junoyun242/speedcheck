#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = __importDefault(require("puppeteer"));
var result_1 = __importDefault(require("./result"));
var cli_color_1 = __importDefault(require("cli-color"));
var browserMode = true;
if (process.argv[2] === "browser") {
    browserMode = false;
    console.log(cli_color_1.default.blueBright.bold("\nSpeed Check with Browser Mode\n"));
}
else {
    console.log(cli_color_1.default.blueBright.bold("\nSpeed Check with Non-Browser Mode\n"));
    console.log(cli_color_1.default.yellow("If you want to see the progress in browser, type 'speedcheck browser'\n"));
}
console.log(cli_color_1.default.red("If error occurs, please try it again\n"));
console.log(cli_color_1.default.greenBright("Tesing..."));
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, getText, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer_1.default.launch({
                    headless: browserMode,
                })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.goto("https://www.speedtest.net")];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.waitForSelector(".start-text")];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.click(".start-text")];
            case 5:
                _a.sent();
                return [4 /*yield*/, page.click(".start-ring")];
            case 6:
                _a.sent();
                return [4 /*yield*/, page.waitForTimeout(30000)];
            case 7:
                _a.sent();
                console.log(cli_color_1.default.greenBright("\nTesing..."));
                return [4 /*yield*/, page.waitForSelector(".audience-survey-answers")];
            case 8:
                _a.sent();
                return [4 /*yield*/, page.evaluate(function () {
                        var _a, _b, _c;
                        var ping = (_a = document.querySelector(".ping-speed")) === null || _a === void 0 ? void 0 : _a.innerHTML;
                        var download = (_b = document.querySelector(".download-speed")) === null || _b === void 0 ? void 0 : _b.innerHTML;
                        var upload = (_c = document.querySelector(".upload-speed")) === null || _c === void 0 ? void 0 : _c.innerHTML;
                        return {
                            ping: ping,
                            download: download,
                            upload: upload,
                        };
                    })];
            case 9:
                getText = _a.sent();
                result = new result_1.default(getText);
                result.format();
                return [4 /*yield*/, browser.close()];
            case 10:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
