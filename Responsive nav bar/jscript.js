let toggleButton=document.getElementsByClassName('toggle-button')[0];
let navBar=document.getElementsByClassName('navigation')[0];
toggleButton.addEventListener('click',function(){
    navBar.classList.toggle('is-active');
})