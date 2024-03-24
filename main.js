function animateWaypoint() {
  var atarget = $(".animation");
  atarget.each(function (idx, el) {
      $(el).waypoint(
          function (direction) {
              if (direction === "down") {
                  $(el).addClass("animated");
              }
          },
          {
              offset: "98%",
          }
      );
  });
}

$(function () {
  animateWaypoint();
})