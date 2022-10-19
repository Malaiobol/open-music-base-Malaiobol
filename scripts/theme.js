function defaultPref(){
  if(!localStorage.getItem("darkmode")){
    localStorage.setItem("darkmode", false)
  }
  DMToggle();
  changeIcon();
}
defaultPref();

function verifyPref(){
  if(localStorage.getItem("darkmode") === "false"){ 
    localStorage.setItem("darkmode", true);
  } 
  else if (localStorage.getItem("darkmode") === "true"){
    localStorage.setItem("darkmode", false);
  }
}

function buttonToggle(){
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  darkModeToggle.addEventListener("click", ()=>{
    verifyPref();
    DMToggle();
    changeIcon();
  })
};
buttonToggle();

function changeIcon(){
  const siteBody = document.querySelector("html");
  const imgDM = document.getElementById("img-toggle");

  if(siteBody.classList.contains("darkMode")){
    imgDM.src = "/assets/img/sun.png"
  } else {
    imgDM.src = "/assets/img/moon.png"
  }
}

function DMToggle(){
  const siteBody = document.querySelector("html");
  const userPref = localStorage.getItem("darkmode");

  if(userPref === "false"){
    siteBody.classList.remove("darkMode");
  }  

  if (userPref === "true"){
    siteBody.classList.add("darkMode");
  }
}
