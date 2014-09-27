$(function(){
      $(".context-link").click(function() {
          $(".back-menu").toggleClass("hidden");
        });
      $(".project-link").click(function() {
          $(".back-menu").toggleClass("hidden");
        });
          $(".result-link").click(function() {
            $(".back-menu").toggleClass("hidden");
        });
      $(".team-link").click(function() {
          $(".back-menu").toggleClass("hidden");
        });
      $(".back-menu").click(function() {
          $(".back-menu").toggleClass("hidden");
        });


        $(".context-link").click(function() {
              $("body").animate({
               scrollTop: $("#context").offset().top
           }, 2000);
        });
        $(".project-link").click(function() {
              $("body").animate({
               scrollTop: $("#project").offset().top
           }, 2000);
        });
        $(".result-link").click(function() {
              $("body").animate({
               scrollTop: $("#result").offset().top
           }, 2000);
        });
        $(".team-link").click(function() {
              $("body").animate({
               scrollTop: $("#team").offset().top
           }, 2000);
        });
        $(".back-top").click(function() {
              $("body").animate({
               scrollTop: $(".menu").offset().top
           }, 2000);
        });

});
