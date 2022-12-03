l = document.querySelector(".l")
m = document.querySelector(".m")
b = document.querySelector(".b")
load = document.querySelector(".load")
function btn() {
  l.style.display = "block"
  m.style.display = "block"
  b.style.display = "block"
  load.style.display = "none"

}
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

// Wrap every letter in a span

right = document.querySelector("#right")
down = document.querySelector("#down")
// console.log(right);
use1 = document.querySelector(".use1")
home = document.querySelector("#home")
function hom() {

  if (home.style.display != "none") {
    home.style.display = "none"
    right.classList.add("fa-angle-right")



  }
  else {
    home.style.display = "block"
    right.classList.remove("fa-angle-right")
    right.classList.add("fa-angle-down")

  }
}

use2 = document.querySelector(".use2")
more = document.querySelector("#moray")
use2.addEventListener("click", () => {
  if (more.style.display != "none") {
    more.style.display = "none"
    down.classList.add("fa-angle-right")
  }
  else {
    more.style.display = "block"
    down.classList.remove("fa-angle-right")
    down.classList.add("fa-angle-down")
  }
})


k = document.querySelector(".k")
q = document.querySelector(".q")
carrer = document.querySelector(".carrer")

lod = document.querySelector(".lod")
function bt() {
  q.style.display = "block"
  k.style.display = "block"
  // b.style.display = "block"
  lod.style.display = "none"
  carrer.style.display = "block"

}

window.addEventListener("scroll", () => {
  scroll = window.innerHeight;
  // console.log(scroll);
})

// header=document.querySelector(".header")
// boss=document.querySelector("#boss")
closee = document.querySelector(".close")
// opena=document.querySelector(".open")

// // console.log(closee);
// image=document.querySelector("#image")
// opena.addEventListener("click",()=>{
//   header.classList.add("hnav")
//   closee.style.display="block"
//   opena.style.display="none"
//   // boss.style.display="block"
//   image.style.left=180+"px"

// })
// closee.addEventListener("click",()=>{
//   header.classList.remove("hnav")
//   closee.style.display="none"
//   opena.style.display="block"
//   // boss.style.display="none"
//   image.style.left=-72+"px"
// })
header = document.querySelector(".header")
openaa = document.querySelector(".opene")
opened = document.querySelectorAll(".ok")
console.log(opened);

boss = document.querySelector("#boss")
closee = document.querySelector(".close")
console.log(openaa);

function myfun() {

  if (header.classList.toggle("hnav")) {
    boss.style.display = "block"
  }

  else {
    boss.style.display = "none"
  }



}
const herosection = document.querySelector(".container")

const footele = document.querySelector(".footer")
const scrollTotop = document.createElement("div")
scrollTotop.classList.add("scrolltop-style")


scrollTotop.innerHTML = `<i class="fa-solid fa-2x fa-arrow-up-long scroll-top"></i>`
footele.after(scrollTotop)

const scrolltop = () => {
    herosection.scrollIntoView({ behavior: "smooth" })
}
scrollTotop.addEventListener("click", scrolltop)

//searchbox
searchbox=document.querySelector("#searchbox")
icon=document.querySelector(".icon")
console.log(searchbox);
console.log(icon);
const word=["full stack web","api","game","web","programming","technology","contact","website","seo","form"]
// console.log("weba" in word);
icon.addEventListener("click",()=>{
  for (let i = 0; i < word.length; i++) {
    if(word[0]==searchbox.value){
      window.location.href="/post2.html"
  
    }
    else if(word[3]==searchbox.value){
      window.location.href="/post1.html"
  
    }
    else if(word[4]==searchbox.value){
      window.location.href="/post1.html"
  
    }
    else if(word[5]==searchbox.value){
      window.location.href="/post3.html"
  
    }
    else if(word[1]==searchbox.value){
      window.location.href="/post10.html"
  
    }
    else if(word[2]==searchbox.value){
      window.location.href="/post4.html"
  
    }
    else if(word[8]==searchbox.value){
      window.location.href="/post6.html"
      
    }
    else if(word[9]==searchbox.value){
      window.location.href="/post5.html"
      
    }
    else if(word[6]==searchbox.value){
      window.location.href="/contact.html"
      
    }
    else if(searchbox.value==""){
      window.location.href="/index.html"

    }
    else{
      window.location.href="/error.html"
      
    }
    
  }
  
  
  
})

