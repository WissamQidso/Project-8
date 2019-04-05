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

var kaick = document.querySelector("#cake");
var samm = document.querySelector("#sammoun");
var cupCake = document.querySelector("#cup-cake");

var cake = document.querySelector(".img-1");
var sammoun = document.querySelector(".img-3");
var cupp = document.querySelector(".img-6");

kaick.onclick = function(){
   cake.style.boxShadow = "-1px -1px 4px 4px #83b6dc";
   sammoun.style.boxShadow = "none";
   cupp.style.boxShadow = "none";
};

samm.onclick = function(){
   cake.style.boxShadow = "none";
   sammoun.style.boxShadow = "-1px -1px 4px 4px #83b6dc";
   cupp.style.boxShadow = "none";
};

cupCake.onclick = function(){
   cake.style.boxShadow = "none";
   sammoun.style.boxShadow = "none";
   cupp.style.boxShadow = "-1px -1px 4px 4px #83b6dc";
};
