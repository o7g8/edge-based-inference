# Examples of client- and server-side inference with TensorFlow.js/MobileNet on Express.js

## Client-side inference with TensorFlow.js/MobileNet

Open <http://localhost:3000/inference>
Backend: WebGL (depends on the browser/platform)

## Server-side inference with TensorFlow.js/MobileNet

Open <http://localhost:3000/inference/canvas>
CPU inference: 50ms
Model load (incl. network latency): 2500ms

- Prerequisites:
  - Install nodejs, for Amazon Linux look at <https://tecadmin.net/install-latest-nodejs-amazon-linux/> or <https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html>
  - Install node-gyp (for Mac OS X check XCode CLI tools <https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md#installing-node-gyp-using-the-xcode-command-line-tools-via-manual-download>):

`sudo npm install -g node-gyp`

- Install modules:

`npm install`

## Test the application

- Run the app (http is server on port 3000, https on 3001):

`DEBUG=* npm start` (debug mode)

`node bin/www` ("production" mode)

- If necessary, expose the public endpoint with ngrok:

`./ngrok_https.sh`

- Open the https enpoint in your browser.

## Build Docker image

- Build the image `gg-edge-inference:latest`:

`./docker_build.sh`

- Test the image:

```
docker run -p 3001:3001 gg-edge-inference:latest
wget https://localhost:3001 --no-check-certificate
```