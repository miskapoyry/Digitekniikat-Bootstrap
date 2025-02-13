function sendFakeMail(){

    /* HAE EMAIL JA MESSAGE MUUTTUJAT KOODISTA */

    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    /* TARKISTA ONKO EMAIL TAI MESSAGE EMPTY, JOS ON ALERTAA */

    if (email == '' || message == '') {
        bootstrapAlert('Täytä kaikki kentät', 'danger');
        return;
    }

    /* NÄYTÄ FAKE ALERT, ETTÄ VIESTI OLISI LÄHETETTY */

    bootstrapAlert('Viestisi on lähetetty!', 'success');

    /* TYHJENNÄ MUUTTUJAT */

    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

/* TEE BOOTSTRAPILLA ALERT */

function bootstrapAlert(message, color) {

/* ETSI OIKEA KOHTA KOODISTA, JOHON ALERT TULEE */
  let mailAlerts = document.getElementById("mailAlerts");

  /* LUO ALERT BOOTSTRAPILLA */

  let alertBootstrap = `
        <div class="alert alert-${color} show" role="alert">
            ${color === 'success' ? 'Onnistui!' : 'Virhe!'} ${message}
        </div>
    `;

    /* LISÄÄ ALERT innerHTML, JOLLOIN SE MENEE HTML */

    mailAlerts.innerHTML = alertBootstrap;

    /* TYHJENNÄ innerHTML 3 SEKUNNIN JÄLKEEN */

    setTimeout(() => {
        mailAlerts.innerHTML = '';
    }, 3000);
}

/* NÄYTÄ KAIKKI CLASSILLA TYPING ANIMOIDUT TEKSTIT KERRAN KÄYTTÄJÄN NÄHDESSÄ ELEMENTIN */

document.addEventListener("DOMContentLoaded", function () {
    
    // ETSI KAIKKI TYPING CLASSIT
    let typings = document.querySelectorAll(".typing");

    //MIKÄLI NÄYTTÄ ON MOBIILI, NIIN LAITA TEKSTI NÄKYMÄÄN ILMAN ANIMAATIOTA
    if (window.innerWidth < 768) {
        typings.forEach(element => {
            element.style.width = "100%";
            element.style.whiteSpace = "normal";
        });
        return;
    }

    // KÄYTÄ INTERSECTION OBSERVERIA, JOTTA NÄHDÄÄN KUN ELEMENTTI ON NÄKYVISSÄ
    let observer = new IntersectionObserver(entries => {
        // FOR LOOPPAA JOKAINEN LÖYDETTY TYPING ELEMENTTI
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // MUUTA ANIMAATIO CSS NONESTA NIIN, ETTÄ SE NÄKYY JA TOIMII
                entry.target.style.animation = "typing 5s steps(100, end) forwards";
                // POISTA OBSERVAUS, JOTTA ANIMAATIOT NÄKYY VAIN KERRAN
                observer.unobserve(entry.target);
            }
        });
        // VAATII 60% NÄKYVYYDEN, JOTTA ANIMAATIO ALKAA
    }, { threshold: 0.6 });

    typings.forEach(element => observer.observe(element));
});

function sendFakeFeedback() {
  let freeFeedback = document.getElementById("freeFeedback").value.trim();
  let selectedRadio = document.querySelector('input[name="inlineRadioOptions"]:checked');

  // Tarkista onko feedback tai radiot empty
  if (freeFeedback === "" || selectedRadio === null) {
    feedbackAlert("Täytä kaikki kentät", "danger");
    return;
  }

  // Onnistumiusen alert
  feedbackAlert("Kiitos palautteesta!", "success");

  // Tyhjennä kaikki
  document.getElementById("freeFeedback").value = "";
  selectedRadio.checked = false;
}

function feedbackAlert(message, color) {
  /* ETSI OIKEA KOHTA KOODISTA, JOHON ALERT TULEE */
  let feedbackAlerts = document.getElementById("feedbackAlerts");

  /* LUO ALERT BOOTSTRAPILLA */
  let alertBootstrap = `
      <div class="alert alert-${color} show" role="alert">
          ${color === "success" ? "Lähettäminen onnistui" : "Lähettäminen epäonnistui!"} ${message}
      </div>
  `;

  /* LISÄÄ ALERT innerHTML, JOLLOIN SE MENEE HTML */
  feedbackAlerts.innerHTML = alertBootstrap;

  /* TYHJENNÄ innerHTML 3 SEKUNNIN JÄLKEEN */
  setTimeout(() => {
    feedbackAlerts.innerHTML = "";
  }, 3000);
}