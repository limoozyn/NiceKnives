$(document).ready(function() {
  
  $(".thing").on("mouseenter",function() {

    $(this).addClass("highlight");
    //$(this).find(".comment").animate({"top": "-14px","opacity": "1"}, "slow");
   
    //$(this).find(".comment").removeClass("hidden");
    /*$("p.comment").removeClass("hidden");*/
  });
  $(".thing").on("mouseleave", function() {
    $(this).removeClass("highlight");
    //$(this).find(".comment").addClass("hidden");
    //$(this).find(".comment").animate({"top": "14px","opacity": "0"}, "slow");
  });
});