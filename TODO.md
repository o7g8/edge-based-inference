# Proof following points

Check for the each case:

- page load time (show in the html - time to the 1st result);
- client FPS (show in the html);
- network traffic/FPS;
- server load = f(reqs), draw a graph;
- N reqs when FPS<=1 (server collapses) - cut-off point;
- GPU effect (if available)

- client-based (at GG):
  - (image on client, model on client) read own video into canvas 500x500.
  - (image on server, model on client) get image from the server (random 500x500 picture) and infer locally.
  - (image on server, model on client) get image from CloudFront (random 500x500 picture) and infer locally.

- edge-based (at GG):
  - (image on client, model on server) send canvas 500x500 to the server
  - (image on server, model on server) request inference results of 500x500 images already stored on the server

- edge-based (Lambda@Edge/CloudFront):
  - (image on client, model on server) send canvas 500x500 to the server
  - (image on server, model on server) request inference results of 500x500 images already stored on the server

- Do model conversion from Keras to Tensorflow.js:
  - find YOLO3-tiny and others

- Actor-based ingestion in a container comms over UNIX-sockets with inference in another container.