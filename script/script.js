const carts = document.querySelectorAll('.cart');
const startMenu = document.querySelector('.start-menu');
const nextLevel = document.querySelector('.next-level');
const defaultCartClassName = 'cart';
let maxGameCart = 20;
let activeElement = 0;

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', mainAction);
}

function check(element){
    if (element.classList.contains('active') || element.classList.contains('hidden')) {
        return false;
    }
    return true;
}

function mainAction(){
    if(!check(this)) return;
    showContent(this);
}

function showContent(element){
    element.style.animation = '1.5s rotateAnimation';
    element.className = element.className + ' active';
    element.firstChild.style.animation = '1.5s opacityAnimation';
    element.firstChild.className = 'visible';
    activeElement++;
    if(activeElement == 2) compareEements();
}

function compareEements(){
    const comparingElements = document.querySelectorAll('.active');
    if(comparingElements[0].classList.contains(comparingElements[1].classList[1])){
        setTimeout(() => {
            comparingElements[0].classList.replace('active', 'hidden');
            comparingElements[1].classList.replace('active', 'hidden'); 
            comparingElements[0].style.animation = '1.5s rotateAnimationReverse';
            comparingElements[1].style.animation = '1.5s rotateAnimationReverse';
            comparingElements[0].firstChild.style.animation = '1.5s opacityAnimationReverse';
            comparingElements[1].firstChild.style.animation = '1.5s opacityAnimationReverse';
            comparingElements[0].firstChild.classList.remove('visible');    
            comparingElements[1].firstChild.classList.remove('visible');
            let hiddenCarts = document.querySelectorAll('.hidden');
            if(hiddenCarts.length == maxGameCart) showNextLevelMenu();
        }, 1000)
    } else {
        setTimeout(() => {
            setTimeout(hideContent(comparingElements),1000);
        }, 1500) 
    }
    activeElement = 0;
    // setTimeout(() => {
        
    // });
}

function hideContent(comparingElements){
    comparingElements[0].style.animation = '1.5s rotateAnimationReverse';
    comparingElements[1].style.animation = '1.5s rotateAnimationReverse';
    comparingElements[0].classList.remove('active');
    comparingElements[1].classList.remove('active');
    comparingElements[0].firstChild.style.animation = '1.5s opacityAnimationReverse';
    comparingElements[1].firstChild.style.animation = '1.5s opacityAnimationReverse';
    comparingElements[0].firstChild.classList.remove('visible');    
    comparingElements[1].firstChild.classList.remove('visible');
}

const cartObj = [
    {className: 'car', src: 'style/car.png'},//1
    {className: 'car', src: 'style/car.png'},//2
    {className: 'steering-wheel', src: 'style/steering-wheel.png'},//3
    {className: 'steering-wheel', src: 'style/steering-wheel.png'},//4
    {className: 'smile', src: 'style/smile.png'},//5
    {className: 'smile', src: 'style/smile.png'},//6
    {className: 'tumblr-logo', src: 'style/tumblr-logo.png'},//7
    {className: 'tumblr-logo', src: 'style/tumblr-logo.png'},//8
    {className: 'sad', src: 'style/sad.png'},//9
    {className: 'sad', src: 'style/sad.png'},//10
    {className: 'facebook', src: 'style/facebook.png'},//11
    {className: 'facebook', src: 'style/facebook.png'},//12
    {className: 'sun', src: 'style/sun.png'},//13
    {className: 'sun', src: 'style/sun.png'},//14
    {className: 'moon', src: 'style/moon.png'},//15
    {className: 'moon', src: 'style/moon.png'},//16
    {className: 'racing', src: 'style/racing.png'},//17
    {className: 'racing', src: 'style/racing.png'},//18
    {className: 'telephone-call', src: 'style/telephone-call.png'},//19
    {className: 'telephone-call', src: 'style/telephone-call.png'}//20
]

function randomPosition(){
    let cartImages = [...cartObj];
    for (let i = 0; i < carts.length; i++) {
        let indexElement = Math.floor(Math.random() * (carts.length - i));
        element = cartImages[indexElement];
        carts[i].className = defaultCartClassName + ' ' + element.className;
        carts[i].firstChild.src = element.src;
        cartImages.splice(indexElement, 1);
    }
}

function startGame(startMenu){
    randomPosition();
    if(startMenu) hideStartMenu();
    if(!startMenu){
        hideNextLevelMenu();
    } 
}

function hideStartMenu(){
    startMenu.remove();
}

function hideNextLevelMenu(){
    nextLevel.style.zIndex = '-1';
}

function showNextLevelMenu(){
    nextLevel.style.zIndex = '1';
}


function closeGame(){
    window.close();
}