const burger = document.getElementById("burger");
const navlist = document.getElementById("nav-list");
burger.addEventListener('click',() =>{
    navlist.classList.toggle('open');
});

const form = document.getElementById('contactForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzwkLIz1rLPwR-ugjVJkVBPiop154x_clPpJHWIU-PcWTFbczgEJyUDep4to0ppl_3DKA/exec';

  form.addEventListener('submit', e => {
    e.preventDefault();

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Message envoyé et enregistré 📥');
        form.reset();
      } else {
        alert('Erreur lors de l’enregistrement.');
      }
    })
    .catch(err => {
      console.error(err);
      alert('La requête a échoué.');
    });
  });
