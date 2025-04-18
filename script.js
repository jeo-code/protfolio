const burger = document.getElementById("burger");
const navlist = document.getElementById("nav-list");
burger.addEventListener('click',() =>{
    navlist.classList.toggle('open');
});

const form = document.getElementById('contactForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyO49DhAoDtF6POKqTZqXT9-lifqgnyPSaIzeSpsPjGXM96fAZLpkotcjQasxng6q9a/exec';  // colle ici l'URL du Web App

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
