'use strict';

const previewImg = document.querySelector('.preview-img');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onClick);

function onClick(event) {
    if (event.target.tagName === 'IMG') {
        previewImg.src = event.target.src;
        previewImg.alt = event.target.alt;
        console.log(previewImg.attributes);
        document.querySelector('figcaption').textContent = previewImg.alt;
    }
}




