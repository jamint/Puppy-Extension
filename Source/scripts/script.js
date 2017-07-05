var headerTitle = $('.header__title'),
	content = $('.content'),
	offlineMessage = $('.offline-message'),
	topMenu = $('.left-menu'),
	video0 = $('.thumbs-container .video0'),
	video1 = $('.thumbs-container .video1'),
	video2 = $('.thumbs-container .video2'),
	video3 = $('.thumbs-container .video3'),
	video4 = $('.thumbs-container .video4'),
	video5 = $('.thumbs-container .video5'),
	currVideo = 0,
	panelOpen = false;

$(window).ready(function() {
	init();
});
function init() {
	showVideo();
	showThumbVideos();
	animateThumbPanel();
	document.addEventListener("visibilitychange", handleVisibilityChange, false);
	$(document).mousemove(handleMouseMove)
}
function handleMouseMove() {
console.log('move')
}
function openVideoPanel() {

}
function closeVideoPanel() {
}
function handleVisibilityChange() {
	if (document.hidden) {
		removeVideo();
	} else  {
		showVideo();
	}
}
function showVideo() {
	setTimeout(function() {
		changeVideo(currVideo)
	}, 800);
}
function removeVideo() {
	content.empty();
}
function showThumbVideos() {
	video0.click(function() {
		// warrior canine connection - nursery cam - http://explore.org/live-cams/player/service-puppy-cam
		changeVideo(0);
	});
	video1.click(function() {
		// warrior canine connection - nursery cam - http://explore.org/live-cams/player/service-puppy-cam-3
		changeVideo(1);
	});
	video2.click(function() {
		// Warrior Canine Connection - Patio Puppy Cam - http://explore.org/live-cams/player/service-puppy-cam-2
		changeVideo(2);
	});
	video3.click(function() {
		// Golden Retriever Puppies - Daisy’s Litter at ECAD - http://explore.org/live-cams/player/east-coast-assistance-dogs-cam-2
		changeVideo(3);
	});
	video4.click(function() {
		// ECAD - Midori's Litter - http://explore.org/live-cams/player/east-coast-assistance-dogs-cam
		changeVideo(4);
	});
	video5.click(function() {
		// Great Danes Indoor Puppy Room - http://explore.org/live-cams/player/great-danes-indoor-room-puppy-cam-2
		changeVideo(5);
	});
}
function changeVideo(num, title) {
	currVideo = num;
	headerTitle.html(videos[currVideo].title);
	content.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videos[currVideo].src + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
	for (var i = 0; i<6; i++) {
		var thumb = $('.thumbs-container .video' + i);
		thumb.css('border-width', 0);
		thumb.css('border-color', 'orange');
		thumb.css('border-style', 'solid');
		thumb.css('pointer-events', 'auto');
		// thumb.css('opacity', 'inherit');
	}
	var thumbSelected = $('.thumbs-container .video' + currVideo);
	thumbSelected.css('border-width', '7px');
	thumbSelected.css('pointer-events', 'none');
	// thumbSelected.css('opacity', 0.7);
}
function animateThumbPanel() {
	const thumbsContainer = $('.thumbs-container');
	TweenMax.set(thumbsContainer, {opacity: 1});
	TweenMax.from(thumbsContainer, 1, {y: "+=170", delay: 2, ease: Expo.easeOut})
}
