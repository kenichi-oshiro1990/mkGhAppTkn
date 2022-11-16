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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const auth_app_1 = require("@octokit/auth-app");
const appId = (0, core_1.getInput)("appId");
const privateKey = (0, core_1.getInput)("PK");
const installationId = (0, core_1.getInput)("installationId");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = (0, auth_app_1.createAppAuth)({
            appId,
            privateKey,
            installationId,
        });
        const installationAuth = yield auth({
            type: 'installation'
        });
        (0, core_1.setOutput)("outputToken", installationAuth.token);
    }
    catch (error) {
        (0, core_1.setFailed)(error.message);
    }
});
main();
//# sourceMappingURL=main.js.map