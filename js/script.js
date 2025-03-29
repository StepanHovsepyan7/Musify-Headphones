let changeMode = document.getElementsByClassName('mode')[0];
let sunIcon = document.getElementsByClassName('fa-sun')[0] || document.getElementsByClassName('fa-moon')[0]; 
let topParagraph = document.getElementsByClassName('topParagraph')[0];
let body = document.querySelector('body');
let trendsCard = document.querySelectorAll('.trendsCard');
let descriptionHeadphones = document.querySelectorAll('.descriptionHeadphones');
let typeOfHeadphones = document.querySelectorAll('.typeOfHeadphones');
let previousPrice = document.querySelectorAll('.previousPrice');
let titles = document.querySelectorAll('h1');

function windowSize() {
    let isLightMode = sunIcon.classList.contains('fa-moon');
    
    if (window.innerWidth <= 470) {
        descriptionHeadphones.forEach((e) => {
            e.style.background = isLightMode ? '#282828B2' : '';
            e.style.border = isLightMode ? '1px solid #0000001F' : '';
        });
        
        previousPrice.forEach((e) => {
            e.style.color = isLightMode ? '#FFFFFF' : '#000000'; 
        });
        typeOfHeadphones.forEach((e) => {
            e.style.color = isLightMode ? '#FFFFFF' : '#000000'; 
        });

    } else {
        descriptionHeadphones.forEach((e) => {
            e.style.background = ''; 
            e.style.border = ''; 
        });

        previousPrice.forEach((e) => {
            e.style.color = isLightMode ? '#000000' : '#FFFFFF'; 
        });
        typeOfHeadphones.forEach((e) => {
            e.style.color = isLightMode ? '#000000' : '#FFFFFF'; 
        });
    }
}

changeMode.addEventListener('click', () => {
    let isDarkMode = sunIcon.classList.contains('fa-moon');

    if (isDarkMode) {
        
        sunIcon.classList.remove('fa-moon');
        sunIcon.classList.add('fa-sun');
        body.classList.remove('bodycolor');
        topParagraph.classList.remove('light-mode-text');

        titles.forEach(title => title.classList.replace('lightMode', 'dark-mode'));
        trendsCard.forEach(card => card.classList.replace('light-mode', 'dark-mode'));
        descriptionHeadphones.forEach(e => e.classList.replace('light-mode2', 'dark-mode'));
        typeOfHeadphones.forEach(e => e.classList.replace('lightMode', 'dark-mode'));
        previousPrice.forEach(e => e.classList.replace('lightMode', 'dark-mode'));

    } else {
        
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
        body.classList.add('bodycolor');
        topParagraph.classList.add('light-mode-text');

        titles.forEach(title => title.classList.replace('dark-mode', 'lightMode'));
        trendsCard.forEach(card => card.classList.replace('dark-mode', 'light-mode'));
        descriptionHeadphones.forEach(e => e.classList.replace('dark-mode', 'light-mode2'));
        typeOfHeadphones.forEach(e => e.classList.replace('dark-mode', 'lightMode'));
        previousPrice.forEach(e => e.classList.replace('dark-mode', 'lightMode'));
    }

    windowSize(); 
});

window.addEventListener("resize", windowSize);
