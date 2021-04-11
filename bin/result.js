"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var template_1 = __importDefault(require("./template"));
var cli_color_1 = __importDefault(require("cli-color"));
var Result = /** @class */ (function () {
    function Result(getText) {
        this.getText = getText;
    }
    Result.prototype.format = function () {
        console.log(cli_color_1.default.blueBright(template_1.default(this.getText)));
    };
    return Result;
}());
exports.default = Result;
