const core = require('@actions/core');

async function run() {
    const files = core.getInput('changed-files');
    const emails = core.getInput('emails');
    core.setOutput('if-notified', false);

    if (!files.includes('No Changes')) {
        let changedFiles = files.split(',');
        fileTypeArray = ['html', 'css'];

        for (let i = 0; i < changedFiles.length; i++) {
            fileTypeArray.map(type => {
                if (changedFiles[i].includes(type)) {
                    core.setOutput('if-notified', true);
                }
            });
        }
    }
    core.setOutput('if-notified', true);
}

run();

