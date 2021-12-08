const query = 'input[type=radio]:checked';
const selected = document.querySelectorAll(query);

let numE = 0;
let numI = 0;
let numN = 0;
let numS = 0;
let numT = 0;
let numF = 0;
let numP = 0;
let numJ = 0;
let mbtiResult = ''

function checkResult()  {

    let result = '';
    selected.forEach((el) => {
        result = el.value;
        if(result === "E"){
            numE++;
        }else if(result === "I"){
            numI++;
        }else if(result === "N"){
            numN++;
        }else if(result === "S"){
            numS++;
        }else if(result === "T"){
            numT++;
        }else if(result === "F"){
            numF++;
        }else if(result === "P"){
            numP++;
        }else if(result === "P"){
            numJ++;
        }else{
            alert("하나의 선택지만 고르세요");
        }
    })

    if(numE > numI){
        mbtiResult += "E";
    }else{
        mbtiResult += "I";
    }

    if(numN > numS){
        mbtiResult += "N";
    }else{
        mbtiResult += "S";
    }

    if(numT > numF){
        mbtiResult += "T";
    }else{
        mbtiResult += "F";
    }

    if(numP > numJ){
        mbtiResult += "P";
    }else{
        mbtiResult += "J";
    }

}

function goToResult() {
    location.href = "/" + mbtiResult;
}

fetch("/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
