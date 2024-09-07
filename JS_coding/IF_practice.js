// if문 사용
/*
function func() {
    const prompt_values = prompt("자바스크립트의 '공식' 이름은 무엇일까요?", '');
    if (prompt_values == 'ECMAScript') {
        alert("정답입니다!");
        console.log("정답입니다!");
    } else {
        alert("모르셨나요? 정답은 ECMAScript 입니다!");
        console.log("모르셨나요? 정답은 ECMAScript 입니다!");
    }
}

func()
*/


// 삼항연산자 사용
/*
const prompt_values = prompt("자바스크립트의 '공식' 이름은 무엇일까요?");
function func() {
    prompt_values === 'ECMAScript'
    ? alert("정답입니다!")
    : alert("모르셨나요? 정답은 ECMAScript 입니다!")
}

func()
*/

// 화살표 함수 사용
/*
const prompt_values = prompt("자바스크립트의 '공식' 이름은 무엇일까요?", '');

const func = () => {
    if (prompt_values == 'ECMAScript') {
        alert("정답입니다!");
        console.log("정답입니다!");
    } else {
        alert("모르셨나요? 정답은 ECMAScript 입니다!");
        console.log("모르셨나요? 정답은 ECMAScript 입니다!");
    }
};

func();
*/

// 삼항연산자 + 화살표 함수

const prompt_values = prompt("자바스크립트의 '공식' 이름은 무엇일까요?")
func = () => prompt_values === 'ECMAScript'
    ? alert("정답입니다!")
    : alert("모르셨나요? 정답은 ECMAScript 입니다!")

func()
