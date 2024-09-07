function func() {
    let prompt_value = prompt("당신의 이름은 무엇인가요?", '')
    if (prompt_value) {
        alert(`당신의 이름은 ${prompt_value}입니다!`);
        console.log(`당신의 이름은 ${prompt_value}입니다!`);
    } else {
        alert("이름을 입력하지 않으셨습니다!");
        func();
    }
} 

func();