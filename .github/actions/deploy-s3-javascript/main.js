const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  const bucketName = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const buildDistFolder = core.getInput("dist-folder", { required: true });

  // Upload files to AWS S3 Bucket
  const s3Uri = `s3://${bucketName}`;
  exec.exec(
    `aws s3 sync ${buildDistFolder} ${s3Uri} --region ${bucketRegion} --delete`
  );

  const websiteUrl = `http://${bucketName}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput("website-url", websiteUrl);
}

run();

