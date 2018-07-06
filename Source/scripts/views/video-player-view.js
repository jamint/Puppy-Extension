(function (App) {

    const model = App.model,
        content = $('#content'),
        bottomBar = $('.bottom-bar'),
        headerTitle = $('.header-container__title');

    let currVideo = 0;

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
        headerTitle.html(videosData[currVideo].title);
        vidSrc = videosData[currVideo].src;
        content.html('<iframe width="100%" height="100%" allow="autoplay; encrypted-media" src="https://www.youtube.com/embed/' + vidSrc + '?autoplay=1&mute=1"  frameborder="0" allowfullscreen></iframe>');
    }

    init();

}(window.App));