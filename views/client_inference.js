(async () => {
    const status = document.getElementById('status');
    const backend = document.getElementById('backend');
    const modelLoad = document.getElementById('modelLoad');
    const latency = document.getElementById('latency');
    const myVideo = document.getElementById('myVideo');
    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext('2d');

    tf.enableProdMode(); // remove checks for performance
    const t1 = performance.now();
    const model = await mobilenet.load();
    const delay = performance.now() - t1;
    modelLoad.innerHTML = `${delay.toFixed(2)}ms`;

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
      const t1 = performance.now();
      const predictions = await model.classify(myCanvas);
      const duration = performance.now() - t1;

      console.log(predictions);
      status.innerHTML = `${predictions[0].className}@${predictions[0].probability.toFixed(2)}`;
      latency.innerHTML = `${duration.toFixed(2)}ms (${(1000/duration).toFixed(1)}FPS)`;
      //requestAnimationFrame(predict);
      setTimeout(() => predict(), 300);
    }
  })();
