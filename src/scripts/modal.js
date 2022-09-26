import '../styles/modal.scss';
import { preventBubble } from './helper';

let modalImg, modalWrap;

const hideModal = () => {
  modalWrap.classList.remove('show');
  document.body.style.overflow = 'auto';
}

const createModal = () => {
  modalWrap = document.createElement('div');
  modalWrap.classList.add('modal-wrap');
  modalWrap.addEventListener('click', hideModal);

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.addEventListener('click', preventBubble);

  const closeButton = document.createElement('div');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = 'x';
  closeButton.addEventListener('click', hideModal);

  modalImg = document.createElement('img');

  modal.appendChild(modalImg);
  modalWrap.appendChild(closeButton);
  modalWrap.appendChild(modal);
  document.body.appendChild(modalWrap);
}

const viewImage = e => {
  if (!modalImg)
    createModal();

  setTimeout(() => {
    modalImg.setAttribute('src', e.target.src);
    modalWrap.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
};

export default () => {
  const viewableImages = document.querySelectorAll('.answer-body-needs img');

  for (let i = 0; i < viewableImages.length; i++) {
    viewableImages[i].addEventListener('click', viewImage);
  }
}
