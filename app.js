let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        return(e);
    }
});

userNum.focus();

let counter = 0;

function run() {
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter")

    if (a != b) {
        z.innerHTML = "Numbers nohjhj   hj  hjkhubij;kl'? same. Computer got " + b + ", and user got " + a;
        z.style.color = "#bd171f";
        z.style.backgroundColor = "#5e0000";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times.";
        c.style.color = "#3094D6";
        c.style.backgroundColor = "#1E203B";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "#2A1334";

    } else if ( a == b) {
        z.innerHTML = "Numbers yay same. Computer got " + b + ", and user got " + a;
        z.style.color = "#3dbd20";
        z.style.backgroundColor = "#012E00";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times to get it right.";
        c.style.color = "#3094D6";
        c.style.backgroundColor = "#1E203B";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "#2A1334";
    }

    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}