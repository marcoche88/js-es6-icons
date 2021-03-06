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

// FUNZIONI

// stampa le icone sulla pagina
const printIcons = (arr, element) => {
    let iconTemplate = "";

    // cicla su tutte le icone del file data.js
    arr.forEach((icon, index) => {

        // layout a cinque colonne, inserisce off-set ogni 5 elementi
        const offSet = index % 5 === 0 ? "offset-md-1" : "";

        // costruisce il template da stampare in pagina
        iconTemplate += `
        <div class="col-4 col-md-2 ${offSet}">
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

// funzione per inserire le option nella pagina
const printOptions = (arr, element) => {
    const iconType = [];
    arr.forEach((icon) => {
        if (!iconType.includes(icon.type)) {
            iconType.push(icon.type);
        }
    });

    let option = `<option value="all" selected>TUTTE LE ICONE</option>`;
    iconType.forEach((type) => {
        option += `<option value="${type}">${type.toUpperCase()}</option>`
    });

    element.innerHTML = option;
};
// fine FUNZIONI


// stampa le option in pagina
const filterSelect = document.getElementById("filter-select");

printOptions(icons, filterSelect);

// stampare in pagina tutte le icone
const cardDisplay = document.querySelector("#cards .row");

printIcons(icons, cardDisplay);

// filtrare per tipo le icone con la SELECT
filterSelect.addEventListener("change", () => {
    const selectValue = filterSelect.value;

    // se è selezionato all stampa tutte le icone in pagina
    if (selectValue === "all") {
        printIcons(icons, cardDisplay);
        return;
    }

    // filtra per valore della select che è stato selezionato
    const filterIcons = icons.filter((icon) => {
        return icon.type === selectValue;
    });

    printIcons(filterIcons, cardDisplay);
});

// BONUS
// filtrare per INPUT inserito dall'utente
const filterInput = document.getElementById("filter-input");

filterInput.addEventListener("input", () => {
    const inputValue = filterInput.value;

    // se è vuoto stampa tutte le icone in pagina
    if (inputValue === "") {
        printIcons(icons, cardDisplay);
        return;
    }

    // filtra per valore della input che è stato inserito
    const filterIconsInput = icons.filter((icon) => {
        return icon.name.includes(inputValue.toLowerCase());
    });

    printIcons(filterIconsInput, cardDisplay);
});




