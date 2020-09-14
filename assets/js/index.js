$(function () {
  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
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
  let intro = $("#intro");
  let header = $("#header");

  let introH = getElemH(intro);
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    introH = getElemH(intro);
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introH);
  });

  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;
    $("html, body").animate(
      {
        scrollTop: elementOffset - $("#header").innerHeight(),
      },
      750
    );
  });
});
