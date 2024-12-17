const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const band = formData.get('band');
  console.log(band);

  localStorage.setItem('band', band);
});

const band = localStorage.getItem('band');

if (band) {
  const input = document.querySelector('input');
  input.value = band;
}
