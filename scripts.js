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