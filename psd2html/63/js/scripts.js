$(document).ready(function(){

// анимация
    function animationFun() {
        $('.main5 ul').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop() + ($(window).height()/1.6);
                if (imagePos < topOfWindow) {
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(1)').addClass("bounceIn");
                        $('.main5 ul li:nth-child(1)').css("opacity", "1");
                    }, 0);
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(2)').addClass("bounceIn");
                        $('.main5 ul li:nth-child(2)').css("opacity", "1");
                    }, 200);
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(3)').addClass("bounceIn");
                        $('.main5 ul li:nth-child(3)').css("opacity", "1");
                    }, 400);
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(4)').addClass("bounceIn");
                        $('.main5 ul li:nth-child(4)').css("opacity", "1");
                    }, 600);
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(1) img').addClass("bounceIn");
                        $('.main5 ul li:nth-child(1) img').css("opacity", "1");
                    }, 800);
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(2) img').addClass("bounceIn");
                        $('.main5 ul li:nth-child(2) img').css("opacity", "1");
                    }, 1000);
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(3) img').addClass("bounceIn");
                        $('.main5 ul li:nth-child(3) img').css("opacity", "1");
                    }, 1200);
                    setTimeout(function (){
                        $('.main5 ul li:nth-child(4) img').addClass("bounceIn");
                        $('.main5 ul li:nth-child(4) img').css("opacity", "1");
                    }, 1400);
                }
        });
    }
// END анимация
    
    
    
// main кнопки "бизнес", "дом"
    $(".main3__btn-business").click(function(){
        $(".main3__ul-home").slideUp("slow");
        $(".main3__ul-business").slideDown("slow");
        return false;
    });
    $(".main3__btn-home").click(function(){ 
        $(".main3__ul-business").slideUp("slow");
        $(".main3__ul-home").slideDown("slow");
        return false;
    });
//END main кнопки "бизнес", "дом"
    
    
    
// боковая колонка на десктопах
    $(".kolonka-menu strong").click(function(){ 
        if ($(this).hasClass("rotate-180")){
            $(this).removeClass("rotate-180");
        } else{
            $(this).addClass("rotate-180");
        }           
        
        $(".kolonka-menu__url").slideToggle();
        
        return false;
    });
    
    
    $(".kolonka-usluga strong").click(function(){ 
        if ($(this).hasClass("rotate-180")){
            $(this).removeClass("rotate-180");
        } else{
            $(this).addClass("rotate-180");
        }           
        
        $(".kolonka-usluga__url").slideToggle();
        
        return false;
    });
// END боковая колонка на десктопах  
    
    
    
    
    
    $(".main6 ul li strong").click(function(){
        $(".main6 ul li").removeClass('main6__active');
        $(this).parent().addClass('main6__active');
        return false;
    });   
    
    
    $(".company4 ul li strong").click(function(){
        $(".company4 ul li").removeClass('company4__active');
        $(this).parent().addClass('company4__active');
        return false;
    });
    
    
    

// menu_nav
    // крестил, bar
    $(".nav__bars").click(function(){
        $("nav ul").slideToggle();
        
        if ($(".nav__bars-block").css("display") === 'none') {
            $(".nav__bars img").hide();
            $(".nav__bars-block").show();
            return false;
        }
        if ($(".nav__bars img").css("display") === 'none') {
            $(".nav__bars-block").hide();
            $(".nav__bars img").show();
            return false;
        }
        return false;
    });
    
    // высота меню
    function setHeiHeight() {
        var ulHeight = $('nav ul').height();
        var winHeight = $(window).height();
        if (ulHeight > (winHeight - 100) ){
            $('nav ul').css({
                height: winHeight - 100 + 'px'
            });
        }
    }
    setHeiHeight(); 
    
    
    // раскрытие списков
    $(".nav__down").click(function(){ 
        
        if ($(this).hasClass("rotate-180")){
            $(this).removeClass("rotate-180");
        } else{
            $(this).addClass("rotate-180");
        }    
        
        $(this).parent().children(".nav__submenu").slideToggle();
    });
//END       menu_nav


// фиксированное меню и колонка
    function fixMenu() {
        if (($(this).scrollTop() >= 113) && ($(".container").width() > 720)) {
            $('nav').css('position', 'fixed');
            $('nav').css('top', '0');
            $('.head').css('margin-bottom', '69px');
        } else if ($(".container").width() > 720){
            $('nav').css('position', 'relative');
            $('.head').css('margin-bottom', '0');
        } else if ($(".container").width() <= 720){
            $('nav').css('position', 'fixed');
            $('nav').css('top', '69px');
        }
    }
    
    function fixKolonka() {
        if (($(this).scrollTop() >= 270) && ($(".container").width() > 720)) {
            $('.kolonka-menu').css('position', 'fixed');
            $('.kolonka-menu').css('top', '100px');
            $('.kolonka-menu').css('margin-left', '920px');
            $('.kolonka-menu-left').css('margin-left', '0px'); 
        } else if (($(this).scrollTop() < 270) && ($(".container").width() > 720)){
            $('.kolonka-menu').css('position', 'relative');
            $('.kolonka-menu').css('top', '0');
            $('.kolonka-menu').css('margin-left', '0');
        } 
    }
//END фиксированное меню и колонка
    
    
    $(window).scroll(function() {
        fixMenu();
        fixKolonka();
        animationFun();
    });
    
    
    $(window).resize(function(){
        setHeiHeight();  // высота меню
        fixMenu();
        fixKolonka();
        Dim_center_pop();
    });
    
    
    
    
    $("#owl-example").owlCarousel({  
        itemsCustom : false,
        itemsDesktop : [3400,4],
        itemsDesktopSmall : [1250,2],
        itemsTablet: [840,2],
        itemsTabletSmall: false,
        itemsMobile : [560,1],
        navigation : true,
        navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });

    







//popup открытие нового окна    
    //подсказка
    $(".usluga1__cell b").click(function(){
        $('.usluga1__box').fadeOut();
        $(this).parent().children('.usluga1__box').fadeIn();
        return false;
    });
    
    $(".usluga1__close").click(function(){
        $('.usluga1__box').fadeOut();
        return false;
    });
    //END подсказка
    
    
    
    $(".main1__btn-calc, .usluga1__btn-calc, .head__btn-popup, .footer__btn-popup").click(function(){
        $("html").attr('style', 'overflow-y: hidden;');
        scrollCompensation();
        $(".fix_block").css('display','none');
        $(".scroll, .scroll__order").fadeIn();
        Dim_center_pop();
        return false;
    });
    $(".main1__btn-invite, .usluga1__btn-invite").click(function(){
        $("html").attr('style', 'overflow-y: hidden;');
        scrollCompensation();
        $(".fix_block").css('display','none');
        $(".scroll, .scroll__order2").fadeIn();
        Dim_center_pop();
        return false;
    });
    
    $(".head__btn-city").click(function(){
        $("html").attr('style', 'overflow-y: hidden;');
        scrollCompensation();
        $(".fix_block").css('display','none');
        $(".scroll, .scroll__city").fadeIn();
        Dim_center_pop();
        return false;
    });

	
    $(".scroll__hover, .scroll__close, .close-sps").click(function(){
        $(".scroll__order, .scroll__order2, .scroll__spasibo, .scroll__city").fadeOut();  
        $(".scroll").fadeOut(function(){
            $(this).end().remove();
            $("html").attr('style', 'overflow: none;');
            if($(".container").width() > 720){
                $(".fix_block").css('display','block');
            }
        }) 
        return false;
    });
  
        
    
    $(".scroll__phone-pop, .scroll__phone-pop2, .main4__phone, .company6__phone").mask("+7 (999) 999-9999"); 
    

    $(".scroll__name-pop, .scroll__name-pop2, .main4__name, .company6__name").DimPlaceHolder("Ваше имя");
    $(".scroll__phone-pop, .scroll__phone-pop2, .main4__phone, .company6__phone").DimPlaceHolder("Ваш телефон");
    $(".main4__email, .company6__email").DimPlaceHolder("Ваш e-mail");


    $(".scroll__btn-pop").DimSend(".scroll__name-pop", ".scroll__phone-pop", "Ваше имя", "Ваш телефон");   
    $(".scroll__btn-pop2").DimSend(".scroll__name-pop2", ".scroll__phone-pop2", "Ваше имя", "Ваш телефон");







/*
    localStorage["bt"] = '';

    $(".sec1__btn-popup").click(function() {localStorage["bt"]  = "Меню - заказать звонок";});
    $(".sec2__btn1").click(function() {localStorage["bt"]  = "Получить ответ";});
    $(".sec3__btn-popup").click(function() {localStorage["bt"]  = "Заказать консультацию";});
    $(".sec5__btn2").click(function() {localStorage["bt"]  = "Вызвать мастера - 1";});
    $(".sec8__btn3").click(function() {localStorage["bt"]  = "Вызвать мастера - 2";});
    $(".sec10__btn4").click(function() {localStorage["bt"] = "Отправить запрос";});
*/

});







$.fn.DimSend = function(name, phone, nameIF, phoneIF) {
    $(this).click(function() {
            if ($(name).val() == "" || $(name).val() == nameIF) 
                { $(name).attr('style', "color: #f00;");  var $nameTRU = false;}  
            if ($(phone).val() == "" || $(phone).val() == phoneIF) 
                { $(phone).attr('style', "color: #f00;");  var $phoneTRU = false;}  


            if ($nameTRU != false && $phoneTRU != false) 
                {   var nameVal = $(name).val(); var phoneVal = $(phone).val(); 
                    $.post("send-message.php",
                        { 
                            name: nameVal,
                            phone: phoneVal /*,
                            buttonName: localStorage["bt"]  */
                        }, 
                        function(data){ 
                            $(name).DimPlaceHolder(nameIF);
                            $(phone).DimPlaceHolder(phoneIF);
                            $("html").attr('style', 'overflow-y: hidden;');
                            scrollCompensation();  
                            $(".scroll__order, .scroll__order2").fadeOut();  
                            $(".scroll, .scroll__spasibo, .scroll__hover").fadeIn(); 
                            Dim_center_pop();
                        }); 
                }
         return false;
    });                                                           
}; 




$.fn.DimPlaceHolder=function(x) {
    this.val(x);
    this.attr('style', "color: #AAA;");
        $(this).focus(function(){ 
            if ($(this).val() == x) { $(this).val("");  } 
            if ((this.className == "sec8__name-3") ||
                (this.className == "sec8__phone-3") ||
                (this.className == "sec10__name-4") ||
                (this.className == "sec10__phone-4")) 
            {
                $(this).attr('style', "color: #fff;");
            } 
            else{
                $(this).attr('style', "color: #000;");
            }  
        });
        $(this).blur(function(){  if ( $(this).val() == "" || !/\S/.test($(this).val()) )  
            { $(this).val(x).attr('style', "color: #AAA;");}  });
};







//scroll
    // Функция для вычисления ширины скроллбара
    function getScrollWidth(){
      var measure = $('<div />').css({
          width: 100,
          height: 100,
          overflowY: 'scroll',
          visibility: 'hidden'
        }).appendTo('html'),
          sw = measure.prop('offsetWidth') - measure.prop('clientWidth');
      measure.remove();    
      return sw;
    }
    // Собственно, сама функция компенсатора скролла
    function scrollCompensation(){
      var d = document,
          rootEl = d.compatMode == 'BackCompat'? d.body : d.documentElement,
          hasScroll = rootEl.scrollHeight > rootEl.clientHeight,
          scrollW = getScrollWidth();
      $('html').css('padding-right', (hasScroll ? scrollW : 0));
      return false;
    }
//END       scroll




function Dim_center_pop(){     
    var thisName;  
    if($(".scroll__order").is(":visible")){
        thisName = ".scroll__order";
    }   
    if($(".scroll__order2").is(":visible")){
        thisName = ".scroll__order2";
    }    
    if($(".scroll__city").is(":visible")){
        thisName = ".scroll__city";
    }
    if($(".scroll__spasibo").is(":visible")){
        thisName = ".scroll__spasibo";
    }   

    winHeight = $(window).height();
    thisHeight = $(thisName).height();
    if (winHeight > thisHeight+60){ // 60 = margin: 30px auto;
        $(thisName).css('margin-top', (winHeight - thisHeight) / 2 + 'px');
        $('.scroll__hover').css('height', '100%');
    }else{
        $(thisName).css('margin-top', '30px');
        $('.scroll__hover').css('height', thisHeight + 60 + 'px');  // 60 = margin: 30px auto;
    }


    return false;
}