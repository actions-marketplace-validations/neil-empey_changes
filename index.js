const core = require('@actions/core');

async function run() {
    const files = core.getInput('changed-files');
    const emails = core.getInput('emails');

    console.log(files);
    console.log(emails);
}

run();

