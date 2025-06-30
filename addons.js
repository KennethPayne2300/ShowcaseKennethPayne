// navBar
let nav = document.createElement("nav");

nav.innerHTML = `
    <div class="nav">
        <nav>
            <ul>
                <button class="switch" id="darkmode">Toggle dark mode</button>
                <a href="index.html"><img class="logo" src="Assets/KennethPayneLogo.png" alt="Keneth Payne Logo"></a>
                <li><a href="index.html" class="link" id="home">Home</a></li>
                <li><a href="About.html" class="link" id="about">About Me!</a></li>
                <li><a href="Python.html" class="link" id="python"><i class="fa-brands fa-bold fa-python"></i>Python</a></li>
                <li><a href="HTML.html" class="link" id="html"><i class="fa-brands fa-bold fa-html5"></i>HTML</a></li>
                <li><a href="Hobbies.html" class="link" id="hobbies">Hobbies</a></li>
            </ul>
        </nav>
    </div>`;

document.querySelector(".content").appendChild(nav);

// dragons
let dragons = document.createElement("div");
dragons.innerHTML = `
    <img src="https://i.gifer.com/XwYs.gif" class="dragon" id="dragon1">
    <img src="https://img1.picmix.com/output/stamp/normal/8/9/8/7/1307898_35e87.gif" class="dragon" id="dragon2">
    <img src="https://i.pinimg.com/originals/0f/f6/67/0ff667c1fc9c66b56b5e4c25ff7cc406.gif" class="dragon" id="dragon3">
    <img src="https://cdnb.artstation.com/p/assets/images/images/052/586/091/original/cecihoney-dragon-flight.gif?1660165746" class="dragon" id="dragon4">
    <img src="https://www.kadrane.com/divers/dragon-fly-col-550.gif" class="dragon" id="dragon5">`;

document.querySelector(".content").appendChild(dragons);

// footer
let footer = document.createElement("footer");

footer.innerHTML = `
    <div class="small divider"></div>
    <footer>
        <p>
            Evansville IN USA<br>
            Contact: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kennethpayne353@gmail.com" target="_blank">Kenneth.payne353@gmail.com</a><br>
            <a href="tel:812-604-3956" class="mobile">812-604-3956</a>
            <span class="desktop">812-604-3956</span>
        </p>
    </footer>`;
    
document.querySelector(".content").appendChild(footer);