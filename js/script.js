/*
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili
come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
BONUS: Provare ad aggiungere una casella di testo che renda possibile filtrare
anche per nome dell'icona
SUPER INCREDIBLE MEGA BONUS: effettuare la ricerca dalla casella di testo
in "tempo reale", cioè man mano che l'utente digita.
*/

// funzioni
const printIcons = (arr, element) => {
    let iconTemplate = "";

    arr.forEach((icon) => {
        iconTemplate += `
        <div class="col-2">
            <div class="card">
                <div class="card-body text-center">
                    <i class="${icon.family} ${icon.prefix}${icon.name} fa-2x ${icon.type}"></i>
                    <h6>${icon.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
        `
    });

    element.innerHTML = iconTemplate;
};

// stampare in pagina tutte le icone
const cardDisplay = document.querySelector("#cards .row");

printIcons(icons, cardDisplay);



