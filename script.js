$(document).ready(function() {
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
    y: -600,
}, '-=6')


  let scene = new ScrollMagic.Scene({
    triggerElement: 'header',
    duration: '180%', 
    triggerHook: 0,
    revarse: false
  })
  .setTween(timeline)
  .setPin('header')
  .addTo(controller)
  .addIndicators()

  document.querySelectorAll('.grid-image').forEach((image, index) => {
    let fadeInTimeline = new TimelineMax();
    let percentageMove = (index + 1) * 25;

    if(percentageMove <= 25 || percentageMove === 75){
        percentageMove = 50;
    } else if ( percentageMove === 50){
        percentageMove = 100;
    } else {
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
        .addIndicators()
});
});

