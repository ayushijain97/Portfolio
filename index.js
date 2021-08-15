document.addEventListener('scroll', function(e) {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }

    if (window.scrollY > 500) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }

});
document.querySelector(".scroll-up-btn").addEventListener("click",function()
{
        document.querySelector("html").animate({scrollTop: 0});
//     // removing smooth scroll on slide-up button click
//     $("html").css("scrollBehavior", "auto");
        document.querySelector("html").css("scrollBehavior", "auto");
  });
document.querySelector(".menu-btn").addEventListener("click",function(){
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
});

document.querySelector(".navbar .menu li a").addEventListener("click",function(){
   document.querySelector("html").css("scrollBehavior", "smooth");
})

var i = 0;
var txt = "Web-Developer";
var speed = 250;
var letter="";

(function typeWriter() {
  letter=txt.slice(0,++i);
  document.querySelector(".typing").textContent = letter;
  if(letter.length === txt.length){
    i=0;
  }
  setTimeout(typeWriter,speed);
}());


(function typeWriter() {
  letter = txt.slice(0, ++i);
  document.querySelector(".typing-2").textContent = letter;
  if (letter.length === txt.length) {
    i = 0;
  }
  setTimeout(typeWriter, speed);
})();
