const paragraphs = [
    "Slunce pomalu zapadalo za obzor a barvilo nebe do odstínů růžové a oranžové.",
    "V zahradě se ozývaly zvuky ptáků, kteří hledali útočiště na noc.",
    "Na stole voněla čerstvě upečená bábovka, která lákala svou vůní celou rodinu.",
    "Ve městě začal ruch, jak lidé spěchali domů po náročném dni v práci.",
    "Kniha na nočním stolku byla otevřená na stránce plné napínavého děje.",
    "Déšť jemně bubnoval na okna a vytvářel uklidňující melodii.",
    "Pes ležel stočený na měkké dece a tiše pochrupoval.",
    "V dálce bylo slyšet zvuk vlakové píšťaly, který se mísil s šuměním větru.",
    "Děti si hrály na zahradě a smály se, jakoby svět neznal starosti.",
    "Hvězdy na noční obloze zářily jasněji než kdy jindy, jako by chtěly vyprávět svůj příběh."
];

const itemInput = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function generate() {
    const numberOfItems = parseInt(itemInput.value);

    if (isNaN(numberOfItems) || numberOfItems <= 0) {
        alert("Prosím, zadejte platné číslo větší než 0.");
        return;
    }

    if (numberOfItems > paragraphs.length) {
        alert("Počet přesahuje dostupné odstavce. Zobrazí se všechny dostupné odstavce.");
    }

    const shuffledParagraphs = shuffle([...paragraphs]);
    const selectedParagraphs = shuffledParagraphs.slice(0, Math.min(numberOfItems, paragraphs.length));
    const paragraphsHTML = selectedParagraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
    
    dataContainer.innerHTML = paragraphsHTML;
}
