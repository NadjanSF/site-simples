
'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function openLinkedIn() {
    window.open("https://www.linkedin.com/in/nadjan-santos-florencio-b87453138/", "_blank");
    document.body.classList.toggle('cyber-theme');
});
