(function (App) {

    let currVideoNum = null;

    const videosDataArray = [
        { src: "3xQRVD4JdoE", thumbSrc: "assets/video6-thumb.jpg", title: "Old Friends Senior Dog Sanctuary", link: "http://ofsds.org/index.html" },
        { src: "r3qKh8VLcZM", thumbSrc: "assets/video7-thumb.jpg", title: "Guiding Eyes for the Blind Guide Dog Puppies", link: "https://www.guidingeyes.org/givingtuesday/" }, 
        { src: "DzNqu7_pevQ", thumbSrc: "assets/video0-thumb.jpg", title: "Great Danes Nursery" }, // warrior canine connection - nursery cam - http://explore.org/live-cams/player/service-puppy-cam
        { src: "wJ5M8dTpMaI", thumbSrc: "assets/video1-thumb.jpg", title: "Warrior Canine Connection Nursery Cam", link: "https://warriorcanineconnection.org/" }, // warrior canine connection - nursery cam - http://explore.org/live-cams/player/service-puppy-cam-3
        { src: "AK0_-qGixYE", thumbSrc: "assets/video2-thumb.jpg", title: "Golden Retriever Puppies - Daisy's Litter at ECAD", link: "https://www.ecad1.org/" }, // Golden Retriever Puppies - Daisy’s Litter at ECAD - http://explore.org/live-cams/player/east-coast-assistance-dogs-cam-2
        // { src: "RTfKYDIhlVE", thumbSrc: "assets/video3-thumb.jpg", title: "Golden Retriever Puppies - Midori's Litter at ECAD", link: "https://www.ecad1.org/" }, // ECAD - Midori's Litter - http://explore.org/live-cams/player/east-coast-assistance-dogs-cam
    ];
    const VIDEO_CHANGED = "VIDEO_CHANGED",
        APP_READY = "APP_READY";

    const getVideosDataArray = () => {
        return videosDataArray;
    }
    const getCurrVideoNum = () => {
        return currVideoNum;
    }
    const setCurrVideoNum = (num) => {
        currVideoNum = num;
        localStorage.setItem("lastVideo2", JSON.stringify(currVideoNum));
        $(document).trigger(VIDEO_CHANGED);
    }
    const init = () => {
        const prevSceneViewedIndex = JSON.parse(localStorage.getItem("lastVideo2"));
        setTimeout(() => {
            if (prevSceneViewedIndex === null) {
                setCurrVideoNum(0);
            } else {
                setCurrVideoNum(prevSceneViewedIndex);
            }
            $(document).trigger("APP_READY");
        }, 300);
    }
    init();

    App.model = {
        getVideosDataArray,
        getCurrVideoNum,
        setCurrVideoNum,
        APP_READY,
        VIDEO_CHANGED
    }
}(window.App));