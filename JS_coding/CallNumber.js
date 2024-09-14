// 1초마다 from부터 to까지 숫자 출력

// setInterval을 이용해 만든 함수

/*
let from = parseInt(prompt("숫자를 입력해주세요"), 10);
let to = parseInt(prompt("숫자를 입력해주세요"), 10);

printNumbers = (from, to) => {
    let firstNumber = from;

    // if 조건문 처리
    if (firstNumber <= to) {
        const checkNumber = setInterval(() => {
            console.log(firstNumber);
            
            if (firstNumber === to) {
                clearTimeout(checkNumber);
            }
            firstNumber++;

        }, 1000);
    } else {
        return 0;
    }
} 
printNumbers(from, to);
*/


// setTimeout을 이용해 만든 함수

let from = parseInt(prompt("숫자를 입력해주세요"), 10);
let to = parseInt(prompt("숫자를 입력해주세요"), 10);

function printNumbers(from, to) {
    if (from <= to) {
        console.log(from);
        setTimeout(() => printNumbers(from + 1, to), 1000);
    } else {
        return 0;
    }
} 

printNumbers(from, to);
