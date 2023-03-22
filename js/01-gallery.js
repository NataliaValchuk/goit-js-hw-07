import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let instance;

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>
`;

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const imageSrc = event.target.dataset.source;

  if (imageSrc) {
    instance = basicLightbox.create(`
      <img src="${imageSrc}">
    `);

    instance.show();
  }
});

const renderGallery = () => {
  const galleryMarkup = galleryItems
    .map((item) => createGalleryItem(item))
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
};

const openModal = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  document
    .querySelector('.modal__button')
    .addEventListener('click', closeModal);
};

const closeModal = () => {
  instance.close();
};

renderGallery();
