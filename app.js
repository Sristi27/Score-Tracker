var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var re=document.querySelector("#re");
var sp1=document.querySelector("#sp1");
var sp2=document.querySelector("#sp2");
var w=document.querySelector("p span");
var ip=document.querySelector("input");
var p1score=0;
var p2score=0;
var gameover=false;
var wins=5;

//for palyer 1
p1.addEventListener("click",function(){
  if(!gameover){
  p1score++;
    if (p1score===wins){
      gameover=true;
      sp1.classList.add("green");
      }
    sp1.textContent=p1score;
}});

//For Player 2

p2.addEventListener("click",function(){
  if(!gameover){
  p2score++;
    if (p2score===wins){
      gameover=true;
      sp2.classList.add("green");
      }
    sp2.textContent=p2score;
}});

// For resetting

function reset(){
   p1score=0;
  p2score=0;
  sp1.textContent=0;
  sp2.textContent=0;
  sp1.classList.remove("green");
  sp2.classList.remove("green");
  gameover=false;
};

re.addEventListener("click",function(){
 reset();});

//for any input

ip.addEventListener("change",function(){
  w.textContent=ip.value;
  wins=Number(ip.value);
  reset();
  
});

