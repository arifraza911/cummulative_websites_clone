let menu= document.querySelector("#humberger");
let links= document.querySelector("#hum_nav");
let heading= document.querySelector("#hero-part1");
var flag=true;
menu.addEventListener("click", function()
{
   
 if(flag==true)
 {
    heading.style.opacity="0"
    links.style.display="block";
//    links.classList.add("x")
    links.style.display="flex";
    flag=false
 }
    
 else
 {
    heading.style.opacity="1";

    links.style.display="none";
     flag = true;
 }
})


  