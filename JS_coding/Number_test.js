// 입력된 값이 숫자인지 확인하는 함수
const NumberTest = () => {
    const number = prompt("숫자를 입력해주세요:")

    if (!isNaN(number) && number !== null && number.trim() !== "") {
        const num = Number(number);
        if (num > 0) {
            console.log("1");
        } else if (num < 0) {
            console.log("-1");
        } else {
            console.log("0");
        }
    } else {
        alert('숫자를 입력해주세요!');
        NumberTest();
    }
};

NumberTest();