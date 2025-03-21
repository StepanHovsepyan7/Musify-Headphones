let changeMode = document.getElementsByClassName('mode')[0];
let sunIcon = document.getElementsByClassName('fa-sun')[0];

changeMode.addEventListener('click',() =>{
    if(sunIcon.classList.contains('fa-sun')){
        sunIcon.classList.toggle('fa-moon')
    }
})


