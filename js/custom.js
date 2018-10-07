/* global $, alert, console */

$(function(){
    'use strict';
    var $header = $('.header');
    

    /** Throttle Menu of nav items*/
    var navbtn= $('.nav .nav-btn');
    var clicked = false;
    
    navbtn.click(function(){
        if(!clicked){
            clicked= true;
            navbtn.parent().toggleClass('active');
            
            setTimeout(function(){
                clicked = false;
            }, 1750)
        }
    });

    
    
    // Adjust Header Height
    $header.height($(window).height());
    



    $(window).resize(function(){
        $header.height($(window).height());
    });




    $('.tabs ul li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.tabs .tab-content div').hide();        
        $("." +$(this).data('tabno')).show();
    });


});