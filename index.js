const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const argsToWrite = core.getInput('args');
  console.log(argsToWrite);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log(process.version);
} catch (error) {
  core.setFailed(error.message);
}
