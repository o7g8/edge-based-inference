# Examples of client- and server-side inference with TensorFlow.js/MobileNet on Express.js

## Client-side inference with TensorFlow.js/MobileNet

Open <http://localhost:3000/inference>
Backend: WebGL (depends on the browser/platform)

## Server-side inference with TensorFlow.js/MobileNet

Open <http://localhost:3000/inference/canvas>
CPU inference: 50ms
Model load (incl. network latency): 2500ms

- Prerequisite: Install node-gyp (for Mac OS X check XCode CLI tools <https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md#installing-node-gyp-using-the-xcode-command-line-tools-via-manual-download>):

`npm install -g node-gyp`

- The server-side dependes on @tensorflow/tfjs @tensorflow/tfjs-node @tensorflow-models/mobilenet.

