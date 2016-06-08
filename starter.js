function moveIt() {
  console.log("click")
  $('#ball').addClass("animated bounceIn")
};


$(function (){
  $('#aniBut').click(function(){
    $('#ball')
      .removeClass()
      .addClass('animated bounceIn')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
      });

    })

})
