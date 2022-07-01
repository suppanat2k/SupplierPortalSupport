function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

let num;

function toggle(num) {
  var video = document.querySelector(".plate");
  video.classList.toggle("activevideo");
  var video = document.querySelector("video");
  video.classList.toggle("activevideo");

  if(num==1){
    video.src = ('video/video-cost/cost-form.mp4');
    return;
  }
  if(num==2){
    video.src = ('video/video-cost/cost-upload.mp4');
    return;
  }
  if(num==3)
  {
    video.src = ('video/video-invoice/invoice-form.mp4');
    return;
  }
  if(num==4)
  {
    video.src = ('video/video-invoice/invoice-upload.mp4');
    return;
  }
  if(num==5)
  {
    video.src = ('video/video-invoice/invoice-amend.mp4');
    return;
  }
  if(num==6)
  {
    video.src = ('video/video-deals/video-deal1.mp4');
    return;
  }

  video.pause();
  video.currentTime = 0;
}

function toggle2(num) {
  var content = document.querySelector(".plate2");
  content.classList.toggle("activecontent");
  var content = document.querySelector(".costcontent1");
  content.classList.remove("activecontent");
  var content = document.querySelector(".costcontent2");
  content.classList.remove("activecontent");
  var content = document.querySelector(".costcontent3");
  content.classList.remove("activecontent");
  var content = document.querySelector(".costcontent4");
  content.classList.remove("activecontent");
  var content = document.querySelector(".costcontent5");
  content.classList.remove("activecontent");
  var content = document.querySelector(".costcontent6");
  content.classList.remove("activecontent");
  document.querySelector(".costcontent1").style.transform = "translateX(0%)";
  document.querySelector(".costcontent2").style.transform = "translateX(0%)";
  document.querySelector(".costcontent3").style.transform = "translateX(0%)";
  document.querySelector(".costcontent4").style.transform = "translateX(0%)";
  document.querySelector(".costcontent5").style.transform = "translateX(0%)";
  document.querySelector(".costcontent6").style.transform = "translateX(0%)";
  if(num==1){
    var content = document.querySelector(".costcontent1");
    content.classList.toggle("activecontent");
    document.querySelector(".pre").style.visibility = "hidden";
    document.querySelector(".go").style.visibility = "visible";
    return;
  }
  if(num==2){
    var content = document.querySelector(".costcontent2");
    content.classList.toggle("activecontent");
    document.querySelector(".pre").style.visibility = "hidden";
    document.querySelector(".go").style.visibility = "visible";
    return;
  }
  if(num==3){
    var content = document.querySelector(".costcontent3");
    content.classList.toggle("activecontent");
    document.querySelector(".pre").style.visibility = "hidden";
    document.querySelector(".go").style.visibility = "visible";
    return;
  }
  if(num==4){
    var content = document.querySelector(".costcontent4");
    content.classList.toggle("activecontent");
    document.querySelector(".pre").style.visibility = "hidden";
    document.querySelector(".go").style.visibility = "visible";
    return;
  }
  if(num==5){
    var content = document.querySelector(".costcontent5");
    content.classList.toggle("activecontent");
    document.querySelector(".pre").style.visibility = "hidden";
    document.querySelector(".go").style.visibility = "visible";
    return;
  }
  if(num==6){
    var content = document.querySelector(".costcontent6");
    content.classList.toggle("activecontent");
    document.querySelector(".pre").style.visibility = "hidden";
    document.querySelector(".go").style.visibility = "hidden";
    return;
  }
}

function next() {
  let page = document.querySelector("figure.activecontent").style.transform;
  let page2 = document.querySelector(".costcontent2.activecontent");
  let page3 = document.querySelector(".costcontent3.activecontent");
  let page4 = document.querySelector(".costcontent4.activecontent");
  let page5 = document.querySelector(".costcontent5.activecontent");

  if(page == "translateX(-20%)"){
    document.querySelector("figure.activecontent").style.transform = "translateX(-40%)";
    return;
  }
  if(page == "translateX(-40%)"){
    if(page4){
      document.querySelector(".go").style.visibility = "hidden";
    }
    document.querySelector("figure.activecontent").style.transform = "translateX(-60%)";
    return;
  }
  if(page == "translateX(-60%)"){
    document.querySelector("figure.activecontent").style.transform = "translateX(-80%)";
    document.querySelector(".go").style.visibility = "hidden";
    return;
  }
  else{
    if(page2 || page3 || page5){
      document.querySelector(".go").style.visibility = "hidden";
    }
    document.querySelector("figure.activecontent").style.transform = "translateX(-20%)";
    document.querySelector(".pre").style.visibility = "visible";
    return;
  }
}

function pre() {
  let page = document.querySelector("figure.activecontent").style.transform;

  if(page == "translateX(-20%)"){
    document.querySelector("figure.activecontent").style.transform = "translateX(0%)";
    document.querySelector(".pre").style.visibility = "hidden";
    document.querySelector(".go").style.visibility = "visible";
    return;
  }
  if(page == "translateX(-40%)"){
    document.querySelector("figure.activecontent").style.transform = "translateX(-20%)";
    return;
  }
  if(page == "translateX(-60%)"){
    document.querySelector("figure.activecontent").style.transform = "translateX(-40%)";
    return;
  }
  if(page == "translateX(-80%)"){
    document.querySelector("figure.activecontent").style.transform = "translateX(-60%)";
    document.querySelector(".go").style.visibility = "visible";
    return;
  }
}