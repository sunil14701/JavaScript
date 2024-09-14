'use strict';

const modal = document.querySelector('.modal');
const hiddenFeature = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);


const openModal = function(){
    hiddenFeature.style.display = 'block';
    overlay.style21
};

const closeModalFx = function(){
    hiddenFeature.style.display = 'none';
}


for(let i=0;i<btnsOpenModal.length;i++){
    console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFx)
}


