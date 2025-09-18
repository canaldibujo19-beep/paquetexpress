
let slideIndex=0;let slides=document.querySelectorAll('.slide');let dotsContainer=document.querySelector('.dots');
if(slides.length){slides.forEach((_,i)=>{let dot=document.createElement('span');dot.addEventListener('click',()=>showSlide(i));dotsContainer.appendChild(dot);});}
function showSlide(i){slideIndex=(i+slides.length)%slides.length;document.querySelector('.slides').style.transform='translateX('+(-slideIndex*100)+'%)';document.querySelectorAll('.dots span').forEach((d,j)=>d.classList.toggle('active',j===slideIndex));}
function nextSlide(){showSlide(slideIndex+1);}function prevSlide(){showSlide(slideIndex-1);}
if(slides.length){showSlide(0);setInterval(nextSlide,5000);document.querySelector('.next').onclick=nextSlide;document.querySelector('.prev').onclick=prevSlide;}
let form=document.getElementById('rastreoForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();let guia=document.getElementById('guia').value;let res=document.getElementById('resultado');res.innerHTML='<p>Guía '+guia+' → En tránsito (demo)</p>';});}
