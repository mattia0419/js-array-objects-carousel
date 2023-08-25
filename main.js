const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];

  const contenitore = document.getElementById("big-img");
  const buttonNext = document.getElementById("button-next");
  const buttonPrev = document.getElementById("button-prev");
  let i = 0;
buttonNext.addEventListener("click", function(){
    nextSlide();
})
buttonPrev.addEventListener("click", function(){
    prevSlide();
})
  function nextSlide(){
        i++;
        if(i >= images.length){
        i = 0;
        }
        
        
        const imageActive = images[i];
        contenitore.innerHTML = `<div id="big-img" class="central-img d-flex">
        <img id="active-image" src="./${imageActive.image}" alt="">
        
        <div class="description">
            <h2>${imageActive.title}</h2>
            <p>${imageActive.text}</p>
        </div>
    </div>`
    
    }
    function prevSlide(){
        i--;
        if(i <= 0){
        i = images.length - 1;
        }
        
    
        const imageActive = images[i];
        contenitore.innerHTML = `<div id="big-img" class="central-img d-flex">
        <img id="active-image" src="./${imageActive.image}" alt="">
        
        <div class="description">
            <h2>${imageActive.title}</h2>
            <p>${imageActive.text}</p>
        </div>
    </div>`
    
    }