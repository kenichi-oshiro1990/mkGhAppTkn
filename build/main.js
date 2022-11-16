var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getInput, setFailed, setOutput } from "@actions/core";
import { createAppAuth } from "@octokit/auth-app";
const appId = getInput("appId");
const privateKey = getInput("PK");
const installationId = getInput("installationId");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = createAppAuth({
            appId,
            privateKey,
            installationId,
        });
        const installationAuth = yield auth({
            type: 'installation'
        });
        setOutput("outputToken", installationAuth.token);
    }
    catch (error) {
        setFailed(error.message);
    }
});
main();
//# sourceMappingURL=main.js.map