function startIntro(){
    var intro = introJs().setOptions({ 'hidePrev': true, 'hideNext': true, 'exitOnOverlayClick': false, 'showStepNumbers':false, 'showBullets':false, 'scrollToElement':true, 'doneLabel':'Done &#10003', 'tooltipClass':'blueTooltip'});
      intro.setOptions({
        steps: [
          {
            intro: "Now you get to explore the TestDrive timeline! You can read what others have posted, respond, or make your own posts."
          },
          {
            intro: "As you look through the timeline, see if you can find features that grab your attention and think about what you can do to build healthy social media habits."
        
          }
        ]
      });
      intro.start().onexit(function() {
        freePlayPageViewTimer = Date.now();
        //record this date as the start of the habits timeline
        $.post("/habitsTimer", { habitsStart: freePlayPageViewTimer, _csrf : $('meta[name="csrf-token"]').attr('content') }).then(function(data){
          window.location.href=data.url;
        });
    });


  };
$(window).on("load", function() {startIntro();});
