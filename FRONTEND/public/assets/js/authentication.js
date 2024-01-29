// authentication.js

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(start);

async function start() {
    const video = document.createElement('video');
    document.body.append(video);

    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    video.srcObject = stream;

    video.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(video);
        document.body.append(canvas);

        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, resizedDetections);
        }, 100);
    });
}

function performFaceRecognition() {
    const faceRecognitionResult = 'success'; // Replace with your actual face recognition logic
    document.getElementById('faceRecognitionResult').innerText = `Face Recognition Result: ${faceRecognitionResult}`;
}

function performCombinedAuthentication() {
    const faceRecognitionResult = /* Call your face recognition function */;
    
    if (faceRecognitionResult === 'success') {
        alert('Login successful!');
    } else {
        alert('Login failed. Please try again.');
    }
}
