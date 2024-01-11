//  Fonction Tache TODO List En JavaScript
    document.getElementById('form-tache').addEventListener('submit', ajouterTache);

    // Function ajouter tache
    function ajouterTache(e) {
        e.prenventDefault();
        const inputTache = document.getElementById('input-tache');
        const texteTache = inputTache.value.trim();
    
    if (texteTache !== '') {
        const li = document.createElement('li');
        li.textContent = texteTache;
        li.addEventListener('clik', supprimerTache);
        document.getElementById('liste-taches').appendChild(li);
        inputTache.value = '';

        // Locale Storage
        let taches;
        if (localStorage.getItem('taches') === null) {
            taches = [];
        } else {
            taches = JSON.parse(localStorage.getItem('taches'));
        }
        taches.push(texteTache);
        localStorage.setItem('taches', JSON.stringify(taches));
        }
    }
    
    // Function supprimer tache
    function supprimerTache(e) {
        e.target.remove();
    }
    // Partie Réserver Au LocalStorage =>
    // Supprimer la tâche du localStorage
        let taches = JSON.parse(localStorage.getItem('taches'));
        const index = taches.indexOf(e.target.textContent);
    if (index > -1) {
        taches.splice(index, 1);
    }
    localStorage.setItem('taches', JSON.stringify(taches));

    // LocalStorage pour la page une fois charger =>
    function chargerTaches() {
        let taches;
    if (localStorage.getItem('taches') === null) {
        taches = [];
    } else {
        taches = JSON.parse(localStorage.getItem('taches'));
    }

    taches.forEach(function (tache) {
        const li = document.createElement('li');
        li.textContent = tache;
        li.addEventListener('click', supprimerTache);
        document.getElementById('liste-taches').appendChild(li);
    });
}
// Charger les tâches lors du chargement de la page
document.addEventListener('DOMContentLoaded', chargerTaches);