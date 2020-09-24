// array defined to map the video urls to the video elements in index.html file
const videoArray = [
    "https://player.vimeo.com/video/35055590?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/163662857?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/60735314?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/81229520?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673",
    "https://player.vimeo.com/video/229651971?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=147673"
];

// task 1 - declare a var to target video play list element
const videoPlayList = document.querySelectorAll(".video");
const videoClass = document.getElementsByClassName("video");
const videoSubSection = document.getElementById("videoList");

// task 2 - write a function setVideos where it loops through the video play list elements in index.html file then apply click event handler to pass url from videoArray to another function
function setVideos (videoList) {
  for (let i = 0; i < videoPlayList.length; i++){
    let currVideoElement = videoList[i];
    let currVideoUrl = videoArray[i];
    currVideoElement.addEventListener("click", function(e) {
       loadVideo(currVideoUrl, i);
    });
  }
}

// task 3 - write a function loadVideo where it takes an url as a parameter to render the video as an iframe in the video container element
function loadVideo (url, i) {
  //render iframe in video container element
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.name = "frame";
  videoSubSection.insertBefore(iframe, videoClass[i]);
}

// task 4 - call setVideos function to pass in the above video play list element
setVideos(videoPlayList);