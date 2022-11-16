import { getInput, setFailed, setOutput } from "@actions/core";
import { createAppAuth } from "@octokit/auth-app";

const appId = getInput("appId");
const privateKey = getInput("PK");
const installationId = getInput("installationId");

const main = async () => {

    try {

        const auth = createAppAuth({
            appId,
            privateKey,
            installationId,
        });

        const installationAuth = await auth({
            type: 'installation'
        });

        setOutput("outputToken", installationAuth.token);

    }
    catch (error: any) {
        setFailed(error.message)
    }
};

main();
