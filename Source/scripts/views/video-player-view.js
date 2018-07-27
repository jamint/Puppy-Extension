(function (App) {

    const model = App.model,
        content = $('#content'),
        soundBtn = $('.sound-btn');

    let playWithSound = false;

    const init = () => {
        $(document).on(model.VIDEO_CHANGED, () => {
            changeVideo();
        });
        document.addEventListener("visibilitychange", handleVisibilityChange, false);
        soundBtn.on('click', () => {
            content.empty();
            playWithSound = !playWithSound;
            changeVideo();
        });
    }
    const handleVisibilityChange = () => {
        if (document.hidden) {
            removeVideo();
        } else {
            showVideo();
        }
    }
    const changeVideo = () => {
        let vidSrc = null,
            currVideo = model.getCurrVideoNum(),
            videosData = model.getVideosDataArray();
        vidSrc = videosData[currVideo].src;
        if (playWithSound && currVideo === 0) {
            content.html('<iframe width="100%" height="100%" allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/' + vidSrc + '?autoplay=1"  frameborder="0" allowfullscreen></iframe>');
        } else {
            content.html('<iframe width="100%" height="100%" allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/' + vidSrc + '?autoplay=1&mute=1"  frameborder="0" allowfullscreen></iframe>');
        }
        if (currVideo === 0) {
            soundBtn.css('display', 'block')
        } else {
            soundBtn.css('display', 'none')
        }
    }
    const showVideo = () => {
        changeVideo();
    }
    function removeVideo() {
        content.empty();
    }

    init();

}(window.App));