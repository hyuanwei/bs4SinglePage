(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict

function playFilm(link) {

  var videoFrame = $(".embed-responsive-item");

  if (link === "link2") {
    videoFrame.attr('src', 'https://www.youtube.com/embed/pGnszxqCU5s');
  } else if (link === "link3") {
    videoFrame.attr('src', 'https://www.youtube.com/embed/CGPfgz58JtA');
  } else {
    videoFrame.attr('src', 'https://www.youtube.com/embed/bDmSL31nnfo');
  }

  $('#filmModal').modal('show');
}

$("#filmModal").on('hidden.bs.modal', function (e) {
  $("#filmModal iframe").attr("src", $("#filmModal iframe").attr("src"));
});


$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox({
  });
});

function viewPhoto() {
  var mobilePhoto = $("#mobilePhoto");
  mobilePhoto.ekkoLightbox({});
}