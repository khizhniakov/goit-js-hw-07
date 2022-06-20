import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener('click', onModalOpen);


function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
        .join('');
 
};


const instance = basicLightbox.create(`
    <img src="" alt="" width="800" height="600">
`);


function onModalOpen(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.element().querySelector('img').alt = event.target.alt;

  instance.show();

  window.addEventListener('keydown', onCloseModal);
};

function onCloseModal(event) {
  console.log("Keydown: ", event);
  if (event.code === 'Escape') {
    instance.close();

    window.removeEventListener('keydown', onCloseModal);

  };
};