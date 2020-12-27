const range = 100;
const answer = Math.ceil(Math.random() * range);
console.log(answer);


const inputTag = document.getElementById("input");
const resultDiv = document.getElementById("result");
const forBtn = document.getElementById("formBtn");
// const displayLife = document.getElementById("lifeCnt");

// 각 id를 변수에 저장한다

// let life = 5;
formBtn.onclick = (event) => {
    // life = life - 1;
    // displayLife.textContent = life;
    const userInput = Number(inputTag.value);
    event.preventDefault();




    if (userInput === answer) {

        alert("정답입니다");
    } else if (userInput > answer) {
        alert("Down");
    } else if (userInput < answer) {
        alert("Up");
    }
    // } else {
    //     alert("실패했습니다");
    // }
}



// input 하고 formBtn을 누르면 onclick 이벤트 실행되며
// onclick 이벤트는 number 변수로 들어가 값을 낸다
// else {
//     if (life > 0) {
//         event.preventDefault();
//         (userInput > answer) ? (result.textContent += "Down") : (result.textContent += "up");

//     }