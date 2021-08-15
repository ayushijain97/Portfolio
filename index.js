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
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".typing-1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.querySelector(".hire").addEventListener("click",typeWriter);