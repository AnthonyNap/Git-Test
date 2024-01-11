// Fonction Tache TODO List En JavaScript
document.getElementById('form-tache').addEventListener('submit', ajouterTache);

// Ajouter une tâche
function ajouterTache(e) {
    e.preventDefault();
    const inputTache = document.getElementById('input-tache');
    const texteTache = inputTache.value.trim();

    if (texteTache !== '') {
        ajouterTacheDOM(texteTache);
        inputTache.value = '';
        ajouterTacheLocalStorage(texteTache);
    }
}

// Ajouter une tâche au DOM
function ajouterTacheDOM(texte) {
    const li = document.createElement('li');
    li.textContent = texte;
    li.addEventListener('click', supprimerTache);
    document.getElementById('liste-taches').appendChild(li);
}

// Supprimer une tâche
function supprimerTache(e) {
    e.target.remove();
    supprimerTacheLocalStorage(e.target.textContent);
}

// Gérer les tâches dans le LocalStorage
function obtenirTachesLocalStorage() {
    return localStorage.getItem('taches') === null ? [] : JSON.parse(localStorage.getItem('taches'));
}

function ajouterTacheLocalStorage(tache) {
    const taches = obtenirTachesLocalStorage();
    taches.push(tache);
    localStorage.setItem('taches', JSON.stringify(taches));
}

function supprimerTacheLocalStorage(tache) {
    const taches = obtenirTachesLocalStorage();
    const index = taches.indexOf(tache);
    if (index > -1) {
        taches.splice(index, 1);
    }
    localStorage.setItem('taches', JSON.stringify(taches));
}

// Charger les tâches lors du chargement de la page
function chargerTaches() {
    const taches = obtenirTachesLocalStorage();
    taches.forEach(tache => ajouterTacheDOM(tache));
}
document.addEventListener('DOMContentLoaded', chargerTaches);