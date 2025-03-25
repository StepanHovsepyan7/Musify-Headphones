let changeMode = document.getElementsByClassName('mode')[0];
let sunIcon = document.getElementsByClassName('fa-sun')[0];
let body = document.querySelector('body');
let titles = document.querySelectorAll('h1');


changeMode.addEventListener('click', () => {
    if (sunIcon.classList.contains('fa-sun')) {
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
        body.classList.add('bodycolor');
        titles.forEach(title => {
            title.classList.remove('dark-mode');
            title.classList.add('lightMode');
        });
    } else {
        sunIcon.classList.remove('fa-moon');
        sunIcon.classList.add('fa-sun');
        body.classList.remove('bodycolor');
        titles.forEach(title => {
            title.classList.remove('lightMode');
            title.classList.add('dark-mode');
        });
    }
});
