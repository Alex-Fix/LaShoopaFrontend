$(function () {
  // Nav Toggle
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
    $(this).toggleClass("active");
  });
});
