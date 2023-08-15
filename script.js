$(document).ready(function() {

// Parallax Images effect
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  timeline
  .to('#sixth', 6, {
    y: -800
})
.to('#fifth', 6, {
    y: -800
}, '-=6')
.to('#forth', 6, {
    y: -550,
}, '-=6')
.to('#third', 6, {
    y: -550,
   
}, '-=6')
.to('#second', 6, {
    y: -500
}, '-=6')
.to('#first', 6, {
    y: -500
}, '-=6')
.to('.content, .blur', 6, {
    top: '0%'
}, '-=6')
.to('.title', 6, {
    y: -1200,
}, '-=6')

  new ScrollMagic.Scene({
    triggerElement: 'header',
    duration: '180%', 
    triggerHook: 0,
    revarse: false
  })
  .setTween(timeline)
  .setPin('header')
  .addTo(controller)

// Grid section images fadeOut effect
  document.querySelectorAll('.grid-image').forEach((image, index) => {
    let fadeInTimeline = new TimelineMax();
    let percentageMove;

    if(index === 0){
        percentageMove = 50;
    } else if ( index === 1){
        percentageMove = 75;
    } else if ( index === 2) {
        percentageMove = 100;
    } else if (index === 3){
        percentageMove = 25;
    }

    fadeInTimeline
        .to(image, 2, {
            opacity: 1,
            x: `${percentageMove}%`
        })

    new ScrollMagic.Scene({
        triggerElement: image,
        triggerHook: 0.5,
     
    })
        .setTween(fadeInTimeline)
        .addTo(controller)

});


// Navigation bar sticky effect
let navigationBar = new ScrollMagic.Controller();

 new ScrollMagic.Scene({
    triggerElement: ".title",
    triggerHook: 0,

})
.setClassToggle(".navigation", "sticky")
.addTo(navigationBar)


// Typewriter
let typeWriter = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".typewriter-section",
    triggerHook: 0.5,  

})
.setClassToggle('.typewrite-div', 'animate-typewriter')
.addTo(typeWriter)
.addIndicators()



});

