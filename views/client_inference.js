(async () => {
    const status = document.getElementById('status');
    const backend = document.getElementById('backend');
    const myVideo = document.getElementById('myVideo');
    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext('2d');

    tf.enableProdMode(); // remove checks for performance
    const model = await mobilenet.load();
    backend.innerHTML = tf.getBackend();

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
      const predictions = await model.classify(myCanvas);
      console.log(predictions);
      status.innerHTML = `${predictions[0].className}@${predictions[0].probability.toPrecision(1)}`;

      //requestAnimationFrame(predict);
      setTimeout(() => predict(), 300);
    }
  })();
