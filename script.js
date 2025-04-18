const burger = document.getElementById("burger");
const navlist = document.getElementById("nav-list");
burger.addEventListener('click',() =>{
    navlist.classList.toggle('open');
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = contactForm.elements["name"].value
    const email = contactForm.elements["email"].value
    const message = contactForm.elements["message"].value

    fetch("https://script.google.com/macros/s/AKfycbxunA_non4c4m-Q_rXgufpAPbtiG6G5Z5D7Bb4TxlMH3nKUQfHjTEYkIIUldPQBSC7i/exec",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name, email, message})
    })
    .then(res =>{
        if (res.ok){
            alert("Message sent successfully");
            contactForm.reset();
        }else{
            alert('there was a problem. please try again')
        }
    })
    .catch(err => alert("Error : " + err.message));
});