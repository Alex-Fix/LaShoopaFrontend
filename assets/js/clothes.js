$(function () {
  function checkScroll(scrollPos, filtersH) {
    if (scrollPos > filtersH + 157) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  function getElemH(elem) {
    if (elem != null) {
      return elem.innerHeight();
    }
    return $(window).scrollTop();
  }

  // Fixed Header
  let filters = $("#filters");
  let header = $("#header");

  let filtersH = getElemH(filters);
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, filtersH);

  $(window).on("scroll resize", function () {
    filtersH = getElemH(filters);
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, filtersH);
  });
});
