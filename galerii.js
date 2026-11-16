const photos = [
  { src: 'assets/salong.jpg', alt: 'Hubane ilusalong peeglite, tugitoolide ja roheliste taimedega', caption: 'Sinu väike paus argipäevast.' },
  { src: 'assets/manikuur.jpg', alt: 'Hoolitsetud käed ja õrn roosa maniküür', caption: 'Ilu peitub väikestes detailides.' }
];
let current = 0;
function showPhoto(step) {
  current = (current + step + photos.length) % photos.length;
  const image = document.getElementById('gallery-image');
  image.src = photos[current].src;
  image.alt = photos[current].alt;
  document.getElementById('gallery-caption').textContent = photos[current].caption;
  document.getElementById('gallery-counter').textContent = `0${current + 1} / 0${photos.length}`;
}
document.getElementById('previous').addEventListener('click', () => showPhoto(-1));
document.getElementById('next').addEventListener('click', () => showPhoto(1));
