let flag = false;

function onHamburgerClick(){
  let ham = document.getElementById("hamburger")
  let slider = document.getElementById("slider");
  let close = document.getElementById("close");	
  if(flag){
    ham.style.display = "none"
    slider.style.display = "block";
    close.style.display = "block";
    flag = false 
  }
  else{
    ham.style.display = "block"
    slider.style.display = "none";
    close.style.display = "none";
    flag = true
  }
}
