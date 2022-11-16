import { getInput, info, setFailed, setOutput } from "@actions/core";
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

        setOutput("token", installationAuth.token);

        info("setOutPut OK");
        info(installationAuth.token);


    }
    catch (error: any) {
        setFailed(error.message)
    }
};

main();
