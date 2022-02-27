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
reponses.classList.add("reponses1");

});
button2.addEventListener("click",() =>{
    reponses.style.visibility ="visible";
    reponses.style.background="yellow";
    reponses.classList.add("reponses1");

});
const mouseves=document.getElementById("mousemove");
window.addEventListener("mousemove",(e)=>{
    mouseves.style.left=e.pageX + "px";
    mouseves.style.top=e.pageY + "px";
    
    

});