(function (App) {

    let thumbsArray = [],
        numThumbs = null;

    const model = App.model;

    const init = () => {
        numThumbs = model.getVideosDataArray().length;
        $(document).on(model.VIDEO_CHANGED, () => {
            reset(model.getCurrVideoNum());
        });
        for (let i = 0; i < numThumbs; i++) {
            $('.thumbs-container .thumbs').append('<li class="video video' + i + '" style="background-image: url(' + model.getVideosDataArray()[i].thumbSrc + ')"></li>');
        }
        for (let i = 0; i < numThumbs; i++) {
            const thumb = $('.thumbs-container .video' + i);
            thumbsArray.push(thumb);
        }
        for (let i = 0; i < numThumbs; i++) {
            const thumb = thumbsArray[i];
            thumb.on('click', (e) => {
                model.setCurrVideoNum(i);
            });
        }
    }
    const reset = (num) => {
        for (let i = 0; i < numThumbs; i++) {
            const thumb = thumbsArray[i];
            thumbsArray[i].removeClass("active");
        }
        thumbsArray[num].addClass("active");
    }

    init();

}(window.App));