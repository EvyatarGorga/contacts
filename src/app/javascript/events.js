$('.loaderPage').hide();
$('.modalSearch').hide();
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.modalSearch').fadeIn();
    $('.searchContainer').hide();
  }
});
