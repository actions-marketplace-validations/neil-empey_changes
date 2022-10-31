const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    try {
        const owner = core.getInput('owner', { required: true });
        const repo = core.getInput('repo', { required: true });
        const token = core.getInput('token', { required: true });

        const octokit = new Octokit({
            auth: token,
        })

        console.log(await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: owner,
            repo: repo,
        }))
    } catch (error) {
        core.setFailed(error.message);
    }

}