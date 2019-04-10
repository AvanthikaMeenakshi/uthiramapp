(function($) {

    $.fn.backTop = function(options) {
        
        var backBtn = this;
        
        var settings = $.extend({
            'position' : 400,
            'speed' : 500,
            'color' : 'white',
            'theme' : '' // red, green, white, custom
        }, options);
        
        //Settings
        
        var position = settings['position'];
        var speed = settings['speed'];
        var color = settings['color'];
        var theme = settings['theme'];
        
        if(theme == 'white'){
            backBtn.addClass('white');
        } else if(theme == 'red'){
            backBtn.addClass('red');
        }else if(theme == 'green'){
            backBtn.addClass('green');
        }else if(theme == 'custom'){
            backBtn.addClass('custom');
        } else{
            backBtn.addClass('black');
        }
        
        backBtn.css({
            'right' : 24,
            'bottom' : 24,
            'position' : 'fixed'
        });
        
        $(document).scroll(function(){
            var pos = $(window).scrollTop();
//            console.log(pos);
            
            if(pos >= position){
                backBtn.fadeIn(speed);
            } else{
                backBtn.fadeOut(speed);
            }
        });
        
        backBtn.click(function(){
            $("html, body").animate({ 
                scrollTop:0 
            }, 
            {
                duration: 1200
            }); 
        });

    }

}(jQuery));