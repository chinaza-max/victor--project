function onClickMenu(){
    document.getElementById('menu').classList.toggle("change");
    document.getElementById('nav2').classList.toggle("change");
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.height = "70px";
    document.getElementById("logo").style.width = "130px";
    document.getElementById("nav").style.height = "60px";


    
  } else {
    document.getElementById("logo").style.height = "115px";
    document.getElementById("logo").style.width = "217px";
    document.getElementById("nav").style.height = "95px";  }
}