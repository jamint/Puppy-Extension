(function (App) {

    const model = App.model,
        headerTitle = $('.header-container__title'),
        headerLink = $('.header-container__link');

    const init = () => {
        $(document).on(model.VIDEO_CHANGED, () => {
            updateTitle();
        });
    }
    function updateTitle() {
        const videoNum = model.getCurrVideoNum(),
            videosData = model.getVideosDataArray();
        headerTitle.html(videosData[videoNum].title);
        console.log(videosData[videoNum].link)
        if (videosData[videoNum].link === undefined) {
            headerLink.html("");
        } else {
            headerLink.html('>> <a href="' + videosData[videoNum].link + '" target="_blank">  More info</a>');
        }
    }

    init();

}(window.App));