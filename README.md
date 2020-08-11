Taken from a course:

- <https://www.youtube.com/watch?v=G8uL0lFFoN0>
- <https://getbuzz.io/c/learning-expressjs>
- <https://github.com/buzz-software/expressjs-mvp-landing-page>

# POST canvas to server

<https://stackoverflow.com/questions/13198131/how-to-save-an-html5-canvas-as-an-image-on-a-server>

<https://www.askingbox.com/tutorial/jquery-send-html5-canvas-to-server-via-ajax> - with jQuery

# AJAX Tutorial

<https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp>
<https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp>
<https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp> 

Use the returned `responseText` in the `xhttp.onreadystatechange`.

# Return data in the POST request

<https://expressjs.com/en/api.html#res.json>
<https://stackoverflow.com/questions/1226810/is-http-post-request-allowed-to-send-back-a-response-body>

Return 200 and JSON with the inference results in the body.

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
 