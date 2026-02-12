const intro = document.getElementById("introContainer");
const slides = document.querySelectorAll(".slide");
const bgm = document.getElementById("bgm");

let current = 0;

document.getElementById("newGameBtn").onclick = () => {
  intro.style.display = "block";
  showSlide(0);
  current = 0;
  bgm.play();
};

function showSlide(i){
  slides.forEach(s => s.style.display="none");
  slides[i].style.display="block";
}

intro.onclick = () => {
  current++;
  if(current < slides.length){
    showSlide(current);
  }else{
    intro.style.display="none";
  }
};

/* ⭐ 파티클 */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];
for(let i=0;i<80;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2,d:Math.random()*1});
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,182,255,0.6)";
  ctx.beginPath();
  particles.forEach(p=>{
    ctx.moveTo(p.x,p.y);
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
  });
  ctx.fill();
  particles.forEach(p=>{
    p.y+=p.d;
    if(p.y>canvas.height){p.y=0;p.x=Math.random()*canvas.width;}
  });
}
setInterval(draw,33);
