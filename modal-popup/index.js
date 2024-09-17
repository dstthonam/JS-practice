// body 요소의 overflow를 hidden으로 변경하여 스크롤 비활성화
let disableScroll = () => {
    document.body.style.overflow = 'hidden';
}

// body 요소의 overflow를 다시 visible로 변경하여 스크롤 활성화
let enableScroll = () => {
document.body.style.overflow = 'visible';
}

$(function(){
    $("#modal-open").click(function(){        
        $("#popup").css('display','flex').stop().hide().fadeIn();
        disableScroll();
        //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#confirm").click(function(){
        modalClose();//모달 닫기 함수 호출
        enableScroll();
    });
    $("#close").click(function(){
        modalClose(); //모달 닫기 함수 호출
        enableScroll();
    });
    function modalClose(){
        $("#popup").stop().fadeOut(); //페이드아웃 효과
}
});