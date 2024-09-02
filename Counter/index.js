//counter program
const  decreasebtn = document.getElementById("decreaseBtn");
const resetbtn =document.getElementById("reset");
const increasebtn=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");
let count=0;
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;

}
increasebtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
