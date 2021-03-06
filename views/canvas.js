(async () => {
    const status = document.getElementById('status');
    const backend = document.getElementById('backend');
    const network = document.getElementById('network');
    const latency = document.getElementById('latency');
    const myVideo = document.getElementById('myVideo');
    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext('2d');

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        processInferenceResult(this.responseText);
      }
    };

    const videoStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'environment'
      }
    });
    myVideo.srcObject = videoStream;
    
    predict();
    async function predict() {
      ctx.drawImage(myVideo, 0, 0, 500, 500);
      await serverPredict(myCanvas);
      //requestAnimationFrame(predict);
      setTimeout(() => predict(), 5000);
    }

    async function serverPredict(cnv) {
      var imageJpg = myCanvas.toDataURL('image/jpeg', 1.0);
      xhttp.open('POST', '/inference/api/canvas', true);
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      const encodedImage = encodeURIComponent(imageJpg);
      xhttp.send("imgData=" + encodedImage);
      network.innerHTML = `${(encodedImage.length/1024).toFixed(2)}kb/frame`;
    }

    function processInferenceResult(resultStr) {
      console.log(resultStr);
      const result = JSON.parse(resultStr);
      status.innerHTML = `${result.className}@${result.probability.toPrecision(1)}`;
      backend.innerHTML = result.backend;
      latency.innerHTML = `${result.inferenceDurationMs.toFixed(2)}ms (${(1000/result.inferenceDurationMs).toFixed(1)}FPS)`;
    }
  })();
