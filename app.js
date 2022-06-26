function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
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