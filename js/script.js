let changeMode = document.getElementsByClassName('mode')[0];
let sunIcon = document.getElementsByClassName('fa-sun')[0];
let body = document.querySelector('body');
let titles = document.querySelectorAll('h1')

changeMode.addEventListener('click',() =>{
    if(sunIcon.classList.contains('fa-sun')){
        sunIcon.classList.toggle('fa-moon');
        body.classList.toggle('bodycolor');
        titles.forEach(title => {
            title.classList.remove('dark-mode');
            title.classList.add('lightMode');
        });
    }else{
        titles.forEach(title => {
            title.classList.remove('lightMode');
            title.classList.add('dark-mode');
        });
    }
})


