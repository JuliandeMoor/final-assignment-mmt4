

$( document ).ready(function() {

    $('#accordion').accordion({ autoHeight: false, animate: 500, heightStyle: "content", header:".accordion-container-wrapper h3"});
   
    

    var geklikt = false;

   $('video').each(function(){
    var player = videojs(this.id);
       console.log(this.id);
    $(this).parents('.video-wrapper').find('.toggle').click(function(){
           
        if(!geklikt){
            player.play();
            geklikt = true;
            $('body').removeClass('clickedPlay');
        } else{
            player.pause();
            geklikt = false;
            $('body').addClass('clickedPlay');
        }
     
        $('.rewind').click(function () {
            player.currentTime(player.currentTime() - 10);
        });
       });
    
    console.log($(this));
    $(this).parents('.video-wrapper').find('.controls').find('.checkIcon').click(function(){
        console.log(0);
        $(this).parents('.accordion-container-wrapper').find('.check').css({"display":"inline-block"});
        $(this).parents('body').find('.pop-up-modal').css({"display":"block"});
        
    });
    // $(this).parents('.video-wrapper').find('.checkIcon').click(function(){
    //     console.log(0);
    //     $(this).parents('#accordion').find('.header-wrapper').find('.check').css({"display":"inline-block"});
    //     $('body').addClass('show');
    // });

});
   


   

    // $('button.toggle').click(function(){
       
    //         if(!geklikt){
    //             player.play();
    //             geklikt = true;
    //             $('body').removeClass('clickedPlay');
    //         } else{
    //             player.pause();
    //             geklikt = false;
    //             $('body').addClass('clickedPlay');
    //         }
    
    // });

    

    $('.pop-up-modal button').click(function(){
        $('.pop-up-modal').css({"display":"none"});
    })

  

    $('.ml2').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
      });
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml2 .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: function(el, i) {
            return 70*i;
          }
        }).add({
          targets: '.ml2',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
 
    

    $('#switch').on('click', () => {
        if ($('#switch').prop('checked')) {
            $('body').addClass('dark');
            $('header .img').addClass('white-logo');
        } else {
            $('body').removeClass('dark');
            $('header .img').removeClass('white-logo');
        }
    })
    
    
    
});
