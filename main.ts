import { getInput, info, setFailed, setOutput, setSecret } from "@actions/core";
import { createAppAuth } from "@octokit/auth-app";

const appId = getInput("appId");
const privateKey = getInput("PK");
const installationId = getInput("installationId");

const main = async () => {

    try {
        info("appId:" + appId);
        info("privateKey:" + privateKey);
        info("installationId:" + installationId);
        
        const auth = createAppAuth({
            appId,
            privateKey,
            installationId,
        });

        info("createAppAuth OK");

        const installationAuth = await auth({
            type: 'installation'
        });

        info("instalationAuth OK");

        const appToken = installationAuth.token;
        setSecret(appToken);
        setOutput("token", appToken);

        info("setOutPut OK");
    }
    catch (error: any) {
        setFailed(error.message)
    }
};

main();
