document.addEventListener('DOMContentLoaded', () => {
  const greet = () => {
    alert("Welcome to BEStch! Tomorrow, Today.");
  };

  greet();

  const btnMore = document.getElementById('btnMore');
  const valuesSection = document.getElementById('values');

  btnMore.addEventListener('click', () => {
    if (valuesSection.classList.contains('hidden')) {
      valuesSection.classList.remove('hidden');
      btnMore.textContent = "Hide Values";
    } else {
      valuesSection.classList.add('hidden');
      btnMore.textContent = "Learn More";
    }
  });
});
