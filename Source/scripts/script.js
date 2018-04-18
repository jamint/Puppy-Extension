var headerTitle = $('.header-container__title'),
    content = $('#content'),
    topMenu = $('.left-menu'),
    video0 = $('.thumbs-container .video0'),
    video1 = $('.thumbs-container .video1'),
    video2 = $('.thumbs-container .video2'),
    video3 = $('.thumbs-container .video3'),
    video4 = $('.thumbs-container .video4'),
    overlay = $('.overlay'),
    currVideo = null,
    panelOpen = false,
    thumbsContainer = $('.thumbs-container'),
    headerContainer = $('.header-container'),
    mouseMovedBeforeTimerEnded = false,
    currMouseX,
    currMouseY,
    oldMouseX,
    oldMouseY,
    int,
    evt;

// var thumbsShowDelay = 5000;
var thumbsShowDelay = 0.3;

var ran = Math.floor(Math.random() * otherVideos.length);
// var ran = 12;

$(window).ready(function () {
    init();
});
function init() {
    showVideo();
    initListeners();
    document.addEventListener("visibilitychange", handleVisibilityChange, false);
    setTimeout(function () {
        animateThumbPanelOpen();
    }, thumbsShowDelay);
    setTimeout(function () {
        animateThumbPanelClosed();
        $(document).mousemove(handleMouseMove);
        window.requestAnimationFrame(tick);
    }, 7000);
}
function createThumb5() {
    // ran = Math.floor(Math.random() * otherVideos.length);
    console.log(ran)
    $('.thumbs-container .video5 .image').css('background-image', 'url(assets/youtube-thumbs/' + otherVideos[ran].src + '.jpg)');
}
function tick() {
    oldMouseX = currMouseX;
    if (evt) {
        currMouseX = evt.clientX;
    }
    if (currMouseX != oldMouseX && currMouseX != undefined) {
        animateThumbPanelOpen();
    }
    window.requestAnimationFrame(tick);
}
function handleMouseMove(e) {
    evt = e;
    clearInterval(int);
    int = setTimeout(function () {
        animateThumbPanelClosed();
    }, 2000);
    animateThumbPanelOpen();
}
function handleVisibilityChange() {
    if (document.hidden) {
        removeVideo();
    } else {
        showVideo();
    }
}
function setVideoNum() {
    const prevSceneViewedIndex = JSON.parse(localStorage.getItem("lastVideo"));
    if (prevSceneViewedIndex === null) {
        currVideo = 0;
    } else {
        currVideo = prevSceneViewedIndex;
    }
}
const showVideo = () => {
    setVideoNum();
    setTimeout(function () {
        changeVideo(currVideo);
    }, 800);
}
function removeVideo() {
    content.empty();
}
function initListeners() {
    video0.click(function () {
        changeVideo(0);
    });
    video1.click(function () {
        changeVideo(1);
    });
    video2.click(function () {
        changeVideo(2);
    });
    video3.click(function () {
        changeVideo(3);
    });
    video4.click(function () {
        changeVideo(4);
    });
}
function changeVideo(num) {
    let vidSrc;
    if (num === 5) {
        overlay.addClass('hidden');
    } else {
        overlay.removeClass('hidden');
    }
    currVideo = num;
    if (currVideo == 5) {
        headerTitle.html(otherVideos[ran].title);
        vidSrc = otherVideos[ran].src;
    } else {
        headerTitle.html(videos[currVideo].title);
        vidSrc = videos[currVideo].src;
    }


    

    content.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidSrc + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    for (var i = 0; i < 4; i++) {
        var thumb = $('.thumbs-container .video' + i);
        thumb.css('border-width', 0);
        thumb.css('border-color', 'orange');
        thumb.css('border-style', 'solid');
        thumb.css('pointer-events', 'auto');
    }
    var thumbSelected = $('.thumbs-container .video' + currVideo);
    thumbSelected.css('border-width', '7px');
    thumbSelected.css('pointer-events', 'none');
    if (currVideo === 5) {
        // console.log("it's 5");
        $('.thumbs-container .video5 .new').css('display', 'none');
    } else {
        $('.thumbs-container .video5 .new').css('display', 'block');
    }
    setTimeout(() => {
        localStorage.setItem("lastVideo", JSON.stringify(currVideo));
    }, 4000);
}
function animateThumbPanelOpen() {
    TweenMax.to(thumbsContainer, 1, { alpha: 1, ease: Power4.easeOut });
    TweenMax.to(headerContainer, 1, { alpha: 1, ease: Power4.easeOut });
}
function animateThumbPanelClosed() {
    TweenMax.to(thumbsContainer, 0.5, { alpha: 0, ease: Power4.easeOut });
    TweenMax.to(headerContainer, 0.5, { alpha: 0, ease: Power4.easeOut });
}




// // Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];

// tag.html(firstScriptTag)
// // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // Replace the 'ytplayer' element with an <iframe> and
// // YouTube player after the API code downloads.
// var player;
// function onYouTubePlayerAPIReady() {
//     player = new YT.Player('content', {
//         videoId: 'tNMfBs6kKK0',
//         events: {
//             'onReady': handleReady,
//             'onStateChange': handleStateChange
//         }
//     });
//     console.log("Poop!!")
// }

// function handleReady() {
//     player.playVideo();
//     console.log("ready")
// }
// function handleStateChange() {
//     console.log('change')
// }
