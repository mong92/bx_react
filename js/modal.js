$(function(){

    function modalOn(){
        $(".modal_back").addClass("back_on");
       // $("body").addClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    function modalOff(){
        $(".modal_back").removeClass("back_on");
      //  $("body").removeClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    $(".hm img").click(function(){
        modalOn();
    });
    $(".cross").click(function(){
        modalOff();
    });
    
});