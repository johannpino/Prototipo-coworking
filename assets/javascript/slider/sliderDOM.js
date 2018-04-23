import Slider from './slider';
import e from './elements';
import Preloader from '../preloader/preloader';

let sliderTitle = document.querySelector('#slider-title');
let sliderSubTitle = document.querySelector('#slider-subtitle');
let sliderText = document.querySelector('#slider-text');
let sliderImage = document.querySelector('#slider-image');
let textContent = document.querySelector('#slider-text-content');

let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

let slider = new Slider({
    e,
    animationFunc: function(e){

        textContent.classList.add('hide');
        sliderImage.classList.add('hide');

        setTimeout(function(){
            sliderTitle.innerHTML = e.title;
            sliderSubTitle.innerHTML = e.subtitle;
            sliderText.innerHTML = e.text;
            sliderImage.src = e.image;

            textContent.classList.remove("hide");
            sliderImage.classList.remove("hide");
        },600);

    },
    speed: 5000
})

slider.play();

leftArrow.addEventListener('click',slider.prev);
rightArrow.addEventListener('click',slider.next);

const imagePaths = e.map(el => el.image)
//console.log(imagePaths)

Preloader.preloadImages({
    images : imagePaths,
    completed: function(){
        document.querySelector('.controls').style.display = "block";
    }
})