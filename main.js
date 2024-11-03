function initAnim() {
    $('.intro').addClass('enhanced');
}
function openVideo() {
    $('.project_card_content').click(function () {
        $(this).addClass("opened");
        var videoSrc = $(this).data('video-src');
        console.log(videoSrc)
        $('.video').attr('src', videoSrc);
    });
}

function animateSlideIn() {
    const atargets = document.querySelectorAll(".animation");
    const options = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -15% 0px"
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
            } else {
                entry.target.classList.remove("animated");
            }
        });
    }, options);
    atargets.forEach(target => observer.observe(target));
}
$(function () {
    initAnim();
    openVideo();
    animateSlideIn();
});

