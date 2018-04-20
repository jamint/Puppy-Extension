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
    evt,
    thumbsShowDelay = 0.3;

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
    // overlay.removeClass('hidden');
    currVideo = num;
    headerTitle.html(videos[currVideo].title);
    vidSrc = videos[currVideo].src;
    console.log(vidSrc);
    // content.html('<iframe width="640" height="385" src="http://www.youtube.com/embed/0319ZgKMLzw?autoplay=1"> </iframe>');
    // content.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + "a6KGPBflhiM" + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    // setTimeout(function() {
    content.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidSrc + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    // console.log("ok, again")
    // }, 2000);
    for (var i = 0; i < 5; i++) {
        var thumb = $('.thumbs-container .video' + i);
        thumb.css('border-width', 0);
        thumb.css('border-color', 'orange');
        thumb.css('border-style', 'solid');
        thumb.css('pointer-events', 'auto');
    }
    var thumbSelected = $('.thumbs-container .video' + currVideo);
    thumbSelected.css('border-width', '7px');
    thumbSelected.css('pointer-events', 'none');
    localStorage.setItem("lastVideo", JSON.stringify(currVideo));
}
function animateThumbPanelOpen() {
    TweenMax.to(thumbsContainer, 1, { alpha: 1, ease: Power4.easeOut });
    TweenMax.to(headerContainer, 1, { alpha: 1, ease: Power4.easeOut });
}
function animateThumbPanelClosed() {
    TweenMax.to(thumbsContainer, 0.5, { alpha: 0, ease: Power4.easeOut });
    TweenMax.to(headerContainer, 0.5, { alpha: 0, ease: Power4.easeOut });
}