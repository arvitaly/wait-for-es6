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
const _1 = require(".");
it("when resolved success before timeout", () => __awaiter(this, void 0, void 0, function* () {
    yield _1.waitFor(() => __awaiter(this, void 0, void 0, function* () { return true; }));
}));
it("when rejected if waitFn rejected", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield _1.waitFor(() => __awaiter(this, void 0, void 0, function* () { return Promise.reject("err1"); })).catch((err) => {
        return err;
    })).toBe("err1");
}));
it("when rejected after timeout", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield _1.waitFor(() => false, { timeout: 100 }).catch((err) => err)).toEqual(new Error("Timeout expired after 100ms"));
}));
