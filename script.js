const burger = document.getElementById("burger");
const navlist = document.getElementById("nav-list");
burger.addEventListener('click',() =>{
    navlist.classList.toggle('open');
});

const form = document.getElementById('contactForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzjA5Rdj9R0XqQPDmeJLF6qJlwxPv4JB1oaBY_jNPhG_jR0dpBcTGeYMwJyQGj78vP6/exec';

  form.addEventListener('submit', e => {
    e.preventDefault();

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    fetch(scriptURL, {
      method: 'POST',
      mode: 'cors',
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
