const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// async function to select a media stream 

async function selectMediaStream() {
    try{
        const mediaStrean = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObjet = mediaStrean;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error){
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;

    // start pic in pic
    await videoElement.requestPictureInPicture();
    //reset the button
    button.disabled = false ; 
});

selectMediaStream();