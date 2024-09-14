'use strict';

const modal = document.querySelector('.modal');
const hiddenFeature = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  // hiddenFeature.style.display = 'block'; //length way
  console.log('btn clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalFx = function () {
  console.log('cross clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
  closeModal.addEventListener('click', closeModalFx);
  overlay.addEventListener('click',closeModalFx);
}
