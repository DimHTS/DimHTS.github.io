$(document).ready(function(){


/*
    $(".lightgallery").lightGallery(); 

    $("#owl-example").owlCarousel({  
        itemsCustom : false,   
        items : 3,
        itemsDesktop : [1400,3],
        itemsDesktopSmall : [1100,3],
        itemsTablet: [840,2],
        itemsTabletSmall: false,
        itemsMobile : [560,1],
        navigation : true,
        navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });
*/
	

//popup открытие нового окна    

    $(".politik").click(function(){
        $("html").attr('style', 'overflow-y: hidden;');
        scrollCompensation();
        $(".scroll, .polit").fadeIn(); 
        Dim_center_pop();
        return false;
    });


    $(".btn-popup").click(function(){
        $("html").attr('style', 'overflow-y: hidden;');
        scrollCompensation();
        $(".scroll, .popup-order").fadeIn(); 
        Dim_center_pop();
        return false;
    });

	
    $("#hover, .close, .close-sps").click(function(){
        $(".popup-order, .popup-rev, .popup-spasibo, .polit").fadeOut();  
        $(".scroll").fadeOut(function(){
            $(this).end().remove();
            $("html").attr('style', 'overflow: none;'); 
        }) 
        return false;
    });
  
        
    
    $(".phone-3, .phone-pop").mask("+7 (999) 999-9999"); 
    

    $(".name-3, .name-pop").DimPlaceHolder("Введите имя");
    $(".phone-3, .phone-pop").DimPlaceHolder("Введите телефон");
    $(".mail-3").DimPlaceHolder("Введите E-mail");


    $(".btn-pop").DimSend(".name-3", ".phone-3", ".mail-3", "Введите имя", "Введите телефон", "Введите E-mail");   
    

    $(window).resize(function(){
        Dim_center_pop();
    });
});




$.fn.DimSend = function(name, phone, mail, nameIF, phoneIF, mailIF) {
    $(this).click(function() {
            if ($(name).val() == "" || $(name).val() == nameIF) 
                { $(name).attr('style', "color: #f00;");  var $nameTRU = false;}  
            if ($(phone).val() == "" || $(phone).val() == phoneIF) 
                { $(phone).attr('style', "color: #f00;");  var $phoneTRU = false;}  


            var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
            if ($(mail).val() == "" || $(mail).val() == mailIF || $(mail).val().search(pattern) != 0) 
                { $(mail).attr('style', "color: #f00;");  var $mailTRU = false;}  


            if ($nameTRU != false && $phoneTRU != false && $mailTRU != false) 
                {   var nameVal = $(name).val(); var phoneVal = $(phone).val(); var mailVal = $(mail).val();
                    $.post("send-message.php",
                        { 
                            name: nameVal,
                            phone: phoneVal,
                            mail: mailVal
                        }, 
                        function(data){ 
                            $(name).DimPlaceHolder(nameIF);
                            $(phone).DimPlaceHolder(phoneIF);
                            $(mail).DimPlaceHolder(mailIF);
                            $(".popup-order").fadeOut();  
                            $(".scroll, .popup-spasibo, #hover").fadeIn(); 
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
            $(this).attr('style', "color: #000;");  
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
    if($(".popup-order").is(":visible")){
        thisName = ".popup-order";
    }   
    if($(".popup-spasibo").is(":visible")){
        thisName = ".popup-spasibo";
    }    
    if($(".polit").is(":visible")){
        thisName = ".polit";
    }

    winHeight = $(window).height();
    thisHeight = $(thisName).height();
    if (winHeight > thisHeight+60){ // 60 = margin: 30px auto;
        $(thisName).css('margin-top', (winHeight - thisHeight) / 2 + 'px');
        $('#hover').css('height', '100%');
    }else{
        $(thisName).css('margin-top', '30px');
        $('#hover').css('height', thisHeight + 60 + 'px');  // 60 = margin: 30px auto;
    }


    return false;
}