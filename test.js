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

var radio1 = document.querySelector("label[for='ban-1']");
var radio2 = document.querySelector("label[for='ban-2']");
var radio3 = document.querySelector("label[for='ban-3']");
var img1 = document.querySelector(".banner");
var img2 = document.querySelector(".banner-1");
var img3 = document.querySelector(".banner-2");


window.onload = function(){
   
   var x = 0;
   slider();
   function slider(){
      var imgs = document.querySelectorAll(".img");
      for(i = 0; i < imgs.length; i++){
         imgs[i].style.display = "none";
      }
      
      x++;
   
      if(x > imgs.length){
         x = 1;
      }
      
      imgs[x - 1].style.display = "block";
      setTimeout(slider, 2000);
   }
   
   radio1.onclick = function(){
      img1.style.display = "block";
      img2.style.display = "none";
      img3.style.display = "none";
      radio1.style.transition = "all 0.3s linear";
   };

   radio2.onclick = function(){
      img1.style.display = "none";
      img2.style.display = "block";
      img3.style.display = "none";
      radio2.style.transition = "all 0.3s linear";
   };

   radio3.onclick = function(){
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "block";
      radio3.style.transition = "all 0.3s linear";  
   };
   
};

var feature = document.querySelectorAll("#sections .feature");

var kaick = document.querySelector("#cake");
var samm = document.querySelector("#sammoun");
var cupCake = document.querySelector("#cup-cake");

var cake = document.querySelectorAll("#menu .a");
var sammoun = document.querySelectorAll("#menu .b");
var cupp = document.querySelectorAll("#menu .c");

Array.from(feature).forEach(function(e){
   
   e.addEventListener("change", function(i){
      if(kaick.checked){
         Array.from(cake).forEach(function(a){
            a.style.boxShadow = "-1px -1px 4px 4px #83b6dc";
         });
         Array.from(sammoun).forEach(function(a){
            a.style.boxShadow = "none";
         });
         Array.from(cupp).forEach(function(a){
            a.style.boxShadow = "none";
         }); 
      } else if(samm.checked){
         Array.from(sammoun).forEach(function(a){
            a.style.boxShadow = "-1px -1px 4px 4px #83b6dc";
         }); 
         Array.from(cake).forEach(function(a){
            a.style.boxShadow = "none";
         });
         Array.from(cupp).forEach(function(a){
            a.style.boxShadow = "none";
         });
      } else if(cupCake.checked){
         Array.from(cupp).forEach(function(a){
            a.style.boxShadow = "-1px -1px 4px 4px #83b6dc";
         }); 
         Array.from(cake).forEach(function(a){
            a.style.boxShadow = "none";
         });
         Array.from(sammoun).forEach(function(a){
            a.style.boxShadow = "none";
         });       
      }     
   });
});

