(async () => {
    const status = document.getElementById('status');
    const backend = document.getElementById('backend');
    const myVideo = document.getElementById('myVideo');
    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext('2d');

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = processServerResponse;

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
      setTimeout(() => predict(), 300);
    }

    async function serverPredict(cnv) {
      xhttp.open('POST', '/inference/api/canvas', true);
      xhttp.send();
    }

    function processServerResponse() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        //status.innerHTML = `Predictions: ${predictions[0].className}@${predictions[0].probability.toPrecision(1)}`;
        //backend.innerHTML = `Backend: ${tf.getBackend()}`;
      }
    }
  })();
