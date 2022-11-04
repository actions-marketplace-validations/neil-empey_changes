const core = require('@actions/core');

async function run() {
    const temp = core.getInput('temp');
    console.log(`The temperature is ${temp} degrees.`);
}

run();

