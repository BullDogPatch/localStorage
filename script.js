// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const band = formData.get('band');
//   console.log(band);

//   localStorage.setItem('band', band);
// });

// const band = localStorage.getItem('band');

// if (band) {
//   const input = document.querySelector('input');
//   input.value = band;
// }

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const band = formData.get('band');
  console.log(band);

  // const favouriteBand = {
  //   band: band
  // }

  const favouriteBand = {
    band,
  };

  localStorage.setItem('favourite-band', JSON.stringify(favouriteBand));
});

const loadBestBand = () => {
  const bestBand = JSON.parse(localStorage.getItem('favourite-band'));

  if (bestBand) {
    const h3 = document.querySelector('.music-details');
    console.log(bestBand);
    h3.textContent = bestBand.band || 'Metallica';
  }

  if (bestBand.band === 'Oasis') {
    const img = document.createElement('img');
    img.src = 'https://fontmeme.com/images/Oasis-Logo-1.jpg';
    document.querySelector('.music-details-container').appendChild(img);
  }
};

const clearButton = document.querySelector('.clear-storage');
clearButton.addEventListener('click', () => {
  localStorage.removeItem('favourite-band');
});

// loadBestBand();
document.addEventListener('DOMContentLoaded', loadBestBand);
