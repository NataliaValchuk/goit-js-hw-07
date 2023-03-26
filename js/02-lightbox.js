import { galleryItems } from './gallery-items.js';

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>
`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

document.addEventListener('DOMContentLoaded', function () {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
