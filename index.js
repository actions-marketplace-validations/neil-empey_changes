const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    try {
        const files = core.getInput('files', { required: true });
        const token = core.getInput('token', { required: true });

        console.log('PIZZA')
        console.log(files)
        console.log('PIZZA')

        const octokit = new Octokit({
            auth: token,
        })

    } catch (error) {
        core.setFailed(error.message);
    }

}