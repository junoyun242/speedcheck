"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var template = function (getText) {
    var text = "  \nSpeed of your Internet\n\nPing: " + getText.ping + "\n\nDownload Speed: " + getText.download + "\n\nUpload Speed: " + getText.upload + "\n";
    return text;
};
exports.default = template;
