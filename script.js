const dobHolder = document.querySelector("#dob");
const luckyNumberHolder = document.querySelector("#luckyNumber");
const checkBtn = document.querySelector("#checkBtn");
const resultHolder = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
    let dob = dobHolder.value;
    dob = sumDob(dob);
    let luckyNumber = luckyNumberHolder.value;
    let result = checkDivisibility(dob, luckyNumber);
    updateUi(result);
});

function sumDob(dob) {
    let sum = 0;
    for(let i = 0; i < dob.length; i++) {
        if(dob[i] != '-')
            sum += parseInt(dob[i]);
    }
    return sum;
}
function checkDivisibility(dob, luckyNumber) {
    return (dob % luckyNumber === 0);
}

function updateUi(result) {
    let msg = "";
    if(result === true) {
        msg = "Your birthday is lucky";
    } 
    else {
        msg = "Your birthday is not lucky";
    }
    resultHolder.textContent = msg;   
}
