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
    const html = `
      <img src="${imageSrc}">
    `;

    instance = basicLightbox.create(html, {
      onShow: () =>
        document.addEventListener('keydown', closeModalOnEsc),
      onClose: () =>
        document.removeEventListener('keydown', closeModalOnEsc),
    });

    instance.show();
  }
});

const renderGallery = () => {
  const galleryMarkup = galleryItems
    .map((item) => createGalleryItem(item))
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
};

const closeModal = () => {
  instance.close();
};

const closeModalOnEsc = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

renderGallery();
