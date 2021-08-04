/* eslint-disable no-undef */
const popup = document.querySelector('.modal');
const link = document.querySelector('.link');
const linkPopup = document.querySelector('.link-2');
const overLay = document.querySelector('.overlay');
const close = popup.querySelector('.modal-close');

const form = popup.querySelector('form');
const phone = popup.querySelector('.phone');

link.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add('modal-visible');
  overLay.classList.add('modal-visible');

});

linkPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add('modal-visible');
  overLay.classList.add('modal-visible');

});

close.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove('modal-visible');
  overLay.classList.remove('modal-visible');
  popup.classList.remove('modal-error');
  phone.classList.remove('empty-value-error');
});


form.addEventListener('submit', (evt) => {
  if (!phone.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    // eslint-disable-next-line no-self-assign
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
    phone.classList.add('empty-value-error');
  }
});

$('.phone').mask('+7(999)999-9999');
