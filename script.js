$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,  
        adaptiveHeight:true,
        centerMode:true, 
        variableWidth:true, 

    });
    $('.slider').on('beforeChange', function(event,slick,currentSlide,nextSlide){
        console.log(nextSlide);
    });
    $('.slider').slick('setPosition');
});