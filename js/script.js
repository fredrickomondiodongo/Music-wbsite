var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){
    videoPlayer.style.display = "none";
     myVideo.muted = true;
}
function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block";
    myVideo.muted = false;
}


// // Function to stop YouTube video playback
// function stopYoutubeVideo() {
//     // Add code to stop the YouTube video player
//     document.getElementById("youtubePlayer").innerHTML = "";
//     document.getElementById("youtubePlayer").style.display = "none";
// }

// // Function to play YouTube video
// function playYoutubeVideo(videoId) {
//     var embedCode = '<iframe  src="https://www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//     document.getElementById("youtubePlayer").innerHTML = embedCode;
//     document.getElementById("youtubePlayer").style.display = "block";

//     var youtubePlayerDiv =document.getElementById("youtubePlayer")
//     youtubePlayerDiv.style.left = "50%";
//     youtubePlayerDiv.style.top = "50%";
//      youtubePlayerDiv.style.width = "750px";


// }