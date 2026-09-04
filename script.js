function startSite(){

const video=document.getElementById("bg-video");

video.play();

document.getElementById("enter").style.opacity="0";

setTimeout(()=>{
document.getElementById("enter").style.display="none";
document.getElementById("card").style.display="block";
},600);

}