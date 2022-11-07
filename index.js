const core = require('@actions/core');

async function run() {
    const files = core.getInput('changed-files');
    const emails = core.getInput('emails');
    let notify = false;

    if (files.length > 0) {
        console.log('pizza')
        console.log(files, emails);
        let changedFiles = files.split(',');
        fileTypeArray = ['html', 'css'];

        for (let i = 0; i < changedFiles.length; i++) {
            fileTypeArray.map(type => {
                if (changedFiles[i].includes(type)) {
                    notify = true
                    console.log('Pizza');
                    console.log(notify)
                    core.setOutput('if-notified', notify);
                }
            });
        }
    }
}

run();

