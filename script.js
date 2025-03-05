// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn= document.querySelector("#play")
videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1,
    })
})
videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0,
    })
})
videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
       left:dets.x-58,
       top:dets.y-55,
    })
})
}
videoconAnimation()

function loadinganimation(){
    gsap.from("#page1 h1",{
        y: 100,
        opacity: 0,
        delay:0.5,
        duration:0.9,
        stagger: 0.3
    })
}
loadinganimation()
function loadingvideocon(){
    gsap.from("#page1 #video-container",{
        scale: 0.9,
        opacity: 0,
        delay:1.3,
        duration:0.5,
        
    })
}
loadingvideocon()