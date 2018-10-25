$(document).ready(function(){
 
    $("span.burger-nav").on("click", function(){
        
        $(".dropdown-menu").toggleClass("opened");
        
    });
      
});

$(document).ready(function(){
 
    $("span.burger-nav").on("click", function(){
        
        $(this).toggleClass("opened");
        
    });
      
});