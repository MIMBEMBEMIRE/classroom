const yell=document.getElementById("col");
const button1=document.getElementById("bnt1");
const button2=document.getElementById("bnt2");
const reponses=document.getElementById("reponse");
yell.addEventListener("click",() => {
    yell.classList.toggle("yell1");

});
button1.addEventListener("click",() => {
reponses.style.visibility = "visible";
reponses.style.background="green";

});
button2.addEventListener("click",() =>{
    reponses.style.visibility ="visible";
    reponses.style.background="yellow";
});
