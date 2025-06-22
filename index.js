document.getElementById('btnMore').addEventListener('click', () => {
  const valuesSection = document.getElementById('values');
  if (valuesSection.classList.contains('hidden')) {
    valuesSection.classList.remove('hidden');
    window.scrollTo({ top: valuesSection.offsetTop, behavior: 'smooth' });
  } else {
    valuesSection.classList.add('hidden');
  }
});
