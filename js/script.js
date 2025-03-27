let changeMode = document.getElementsByClassName('mode')[0];
let sunIcon = document.getElementsByClassName('fa-sun')[0];
let topParagraph = document.getElementsByClassName('topParagraph')[0]
let body = document.querySelector('body');
let trendsCard = document.querySelectorAll('.trendsCard');
let descriptionHeadphones  = document.querySelectorAll('.descriptionHeadphones');
let typeOfHeadphones = document.querySelectorAll('.typeOfHeadphones');
let previousPrice = document.querySelectorAll('.previousPrice');
let titles = document.querySelectorAll('h1');


changeMode.addEventListener('click', () => {

    if (sunIcon.classList.contains('fa-sun')) {
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
        body.classList.add('bodycolor');
        topParagraph.style.color = '#f14a16';
        
        titles.forEach(title => {
            title.classList.remove('dark-mode');
            title.classList.add('lightMode');
        });

        trendsCard.forEach(card => {
            card.classList.remove('dark-mode');
            card.classList.add('light-mode');
        });

          descriptionHeadphones.forEach((e)=>{
            e.classList.remove('dark-mode');
            e.classList.add('light-mode2');
        })

          typeOfHeadphones.forEach((e)=>{
            e.classList.remove('dark-mode');
            e.classList.add('lightMode');
        })

          previousPrice.forEach((e)=>{
            e.classList.remove('dark-mode');
            e.classList.add('lightMode');
        })

    } else {
        sunIcon.classList.remove('fa-moon');
        sunIcon.classList.add('fa-sun');
        body.classList.remove('bodycolor');
        topParagraph.style.color = '#A4A4A4';
        titles.forEach(title => {
            title.classList.remove('lightMode');
            title.classList.add('dark-mode');
        });

        trendsCard.forEach(card => {
            card.classList.add('dark-mode');
            card.classList.remove('light-mode');
        });

        descriptionHeadphones.forEach((e)=>{
            e.classList.add('dark-mode');
            e.classList.remove('light-mode2');
        })

          typeOfHeadphones.forEach((e)=>{
            e.classList.add('dark-mode');
            e.classList.remove('lightMode');
        })

          previousPrice.forEach((e)=>{
            e.classList.add('dark-mode');
            e.classList.remove('lightMode');
        })
          
    }
});
