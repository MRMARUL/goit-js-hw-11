import { fetchImages } from './pixabay-api';
import { renderGallery } from './render-gallery';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import '../css/style.css';
import '../css/loader.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();

  if (!query) return;

  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      gallery.insertAdjacentHTML('beforeend', renderGallery(data.hits));
      lightbox.refresh();
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
});
