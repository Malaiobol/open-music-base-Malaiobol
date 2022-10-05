function darkMode() {
    const darkMode = document.querySelector(".dark-mode-toggle");
    const html = document.querySelector("html");

    darkMode.addEventListener("click", () => {

        html.classList.toggle("darkMode");
    });

    const userPref = localStorage.getItem('darkmode');

    if(!userPref) {
      localStorage.setItem('darkmode', true);
    }

    if(userPref) {
      localStorage.removeItem('darkmode');
    }

    if(html.classList.contains("darkMode")){
        darkMode.src = "./assets/img/moon.png"
    } else {
        darkMode.src = "./assets/img/sun.png"
    }
}

darkMode();

