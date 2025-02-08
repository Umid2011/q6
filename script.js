let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");

let p1 = document.getElementById("info1");
let p2 = document.getElementById("info2");
let p3 = document.getElementById("info3");
let p4 = document.getElementById("info4");
inp1.addEventListener("keyup",()=>{
    if(inp1.value.length <8){
        p1.innerHTML = "Введите текст длиной больше восьми";
        p1.style.color = "red";
    } else{
        p1.innerHTML = "Все верно";
        p1.style.color = "green";
    }
});
inp4.addEventListener("keyup", () => {
    if(inp3.value === inp4.value){
        p4.innerHTML = "Пароли совподают";
        p4.style.color = "green";
    } else {
        p4.innerHTML = "Пороли Совподают";
        p4.style.color = "red";
    }
});