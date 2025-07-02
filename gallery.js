const galleryImgs = document.querySelectorAll('.gallery-container img');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<img src="${img.src}" /><span class="close">&times;</span>`;
    document.body.appendChild(popup);

    popup.querySelector('.close').onclick = () => {
      popup.remove();
    };
  });
});
