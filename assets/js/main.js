//= require popper
//= require bootstrap-sprockets

/* PLAY BUTTON */
function playButton(video, overlay) {
    if(video.paused) {
        video.play()
        overlay.style.display = 'none';
    } else {
        video.pause();
        overlay.style.display = 'block';
    }
}


/* THEMES */
const themeToggle = document.querySelector("#theme-toggle");

if(getCookie('theme') === 'dark') themeToggle.checked = true;

function toggleTheme(e) {
    document.body.style.transition = 'background-color 300ms ease-in-out, color 300ms ease-in-out';

    if (e.target.checked) {
        setCookie('theme', "dark", 360)
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        setCookie('theme', "light", 360)

        document.documentElement.setAttribute('data-theme', 'light');
    }
}

themeToggle.addEventListener('change', toggleTheme, false);