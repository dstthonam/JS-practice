// $(selector).action();
// $("#myId").action();
// $(".myClass").action();
// $("p").action();

let clickBtn = $(".conBtn");
let input01 = $("#input01");
let input02 = $("#input02");
let errStack = 0;

$(document).ready(function(){
    clickBtn.click (function() {
        if (input01.value === 'admin@naver.com') {
            if (input02.value === '1234') {
                alert("로그인 되었습니다.");
            } else {
                alert("이메일과 비밀번호를 다시 한 번 더 확인해주세요.");
                errStack++;
            }
        } else {
            alert("존재하지 않는 계정입니다.");
        }
        if (errStack >= 5){
            alert("비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.");
        }
    });
});

