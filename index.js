"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function waitFor(checkFn, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const timeout = options.timeout || 5000;
        const interval = options.interval || 100;
        const startTime = +new Date();
        do {
            if ((yield checkFn())) {
                return;
            }
            yield new Promise((resolve) => setTimeout(resolve(), interval));
        } while (startTime > (+new Date()) - timeout);
        throw new Error("Timeout expired after " + timeout + "ms");
    });
}
exports.waitFor = waitFor;
exports.default = waitFor;
