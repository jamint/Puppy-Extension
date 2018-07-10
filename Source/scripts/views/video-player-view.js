(function (App) {

    const model = App.model,
        content = $('#content');

    const init = () => {
        $(document).on(model.VIDEO_CHANGED, () => {
            const videoNum = model.getCurrVideoNum();
            changeVideo(videoNum);
        });
    }
    function changeVideo(num) {
        let vidSrc = null,
            currVideo = model.getCurrVideoNum(),
            videosData = model.getVideosDataArray();
        vidSrc = videosData[currVideo].src;
        content.html('<iframe width="100%" height="100%" allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/' + vidSrc + '?autoplay=1&mute=1"  frameborder="0" allowfullscreen></iframe>');
    }

    init();

}(window.App));