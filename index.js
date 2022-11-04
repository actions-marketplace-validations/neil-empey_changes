const core = require('@actions/core');

async function run() {
    const files = core.getInput('changed-files');
    const emails = core.getInput('emails');
    const notify = core.setOutput('notify', true);

    if (files.includes('No Changes')) {
        let changedFiles = files.split(',');
        fileTypeArray = ['html', 'css'];

        for (let i = 0; i < changedFiles.length; i++) {
            fileTypeArray.map(type => {
                if (type.includes(changedFiles[i])) {
                    notify(emails);
                }
            });
        }
    }
}

run();

