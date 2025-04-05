const lightbio = document.getElementById('light-bio');

let i = 0;
let txtIndex = 0;
let speed = 50;
let isDeleting = false;

let displayText = '';

const texts = [":3", "Hello!", "Is anyone even gonna read this?", "fr fr fr", "I luv3 code xd!!1", "Netflix could lowkey hire me ngl", "always UD", "config buttons png filetype:png google search", "int main() std::cout << 'lol' << std::endl; "];
let txt = texts[Math.floor(Math.random() * texts.length)];

function typeWriter() {
    if (!isDeleting) {
        if (i < txt.length) {
            displayText += txt.charAt(i);
            lightbio.textContent = displayText;
            i++;
            setTimeout(typeWriter, speed);
        } else {
            isDeleting = true;
            setTimeout(typeWriter, 1000);
        }
    } else {
        if (i > 0) {
            displayText = displayText.substring(0, displayText.length - 1);
            lightbio.textContent = displayText;
            i--;
            setTimeout(typeWriter, speed);
        } else {
            txtIndex = (txtIndex + 1) % texts.length;
            txt = texts[txtIndex];
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);
