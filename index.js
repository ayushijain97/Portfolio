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
        const offsetTop=document.querySelector("html").offsetTop;
        scroll({
          top: offsetTop,
          behavior: "auto",
        });
  });
document.querySelector(".menu-btn").addEventListener("click",function(){
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
});


var i = 0;
var txt = ["Front-End-Developer","Comp-Science Engineer"];
var speed = 350;
var count=0;
var currentText="";
var letter="";

(function typeWriter() {
  if(count === txt.length){
    count=0;
  }
  currentText=txt[count];
  letter = currentText.slice(0, ++i);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    i = 0;
  }
  setTimeout(typeWriter,speed);
})();

(function typeWriter() {
  if (count === txt.length) {
    count = 0;
  }
  currentText = txt[count];
  letter = currentText.slice(0, ++i);
  document.querySelector(".typing-2").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    i = 0;
  }
  setTimeout(typeWriter, speed);
})();
