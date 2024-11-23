// Tableau Employés
let employes = [
    { id: 1, nom: "Dupont", poste: "Développeur" },
    { id: 2, nom: "Durand", poste: "Designer" },
    { id: 3, nom: "Martin", poste: "Chef de projet" }
];

// Fonction pour ajouter un nouvel objet employé avec push
function ajouterEmploye(nom, poste) {
    let id = employes.length + 1;
    employes.push({ id, nom, poste });
    console.log(`Nouvel employé ajouté : ${nom}, ${poste}`);
}

// Fonction supprimé employé a partir de l'ID, splice permlet supprimer un elements, emp nom de variable representant un objet employe,
function supprimerEmploye(id) {
    let index = employes.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employes.splice(index, 1);
        console.log(`Employé avec l'ID ${id} supprimé`);
    } else {
        console.log(`Aucun employé trouvé avec l'ID ${id}`);
    }
}

// Fonction ajouterEmployeManuel cette fonction récupère les informations saisies par l'utilisateur, génère un nouvel ID, et ajoute un nouvel employé si les champs nécessaires sont remplis
function ajouterEmployeManuel(nom, poste) {
    if (nom && poste) {
        ajouterEmploye(nom, poste);
    } else {
        console.log("Veuillez fournir un nom et un poste");
    }
}

// Fonction supprimerEmployeManuel  cette fonction récupère un ID saisi par l'utilisateur, vérifie que c'est bien un nombre, et si c'est le cas, elle appelle la fonction pour supprimer l'employé correspondan
function supprimerEmployeManuel(id) {
    id = parseInt(id);
    if (!isNaN(id)) {
        supprimerEmploye(id);
    } else {
        console.log("Veuillez fournir un ID valide");
    }
}

// Fonction pour afficher tous les employés
function afficherEmployes() {
    console.log("Liste des employés :");
    employes.forEach(emp => console.log(`ID: ${emp.id}, Nom: ${emp.nom}, Poste: ${emp.poste}`));
}

// Exemples d'utilisation
ajouterEmployeManuel("Nouveau", "Testeur");
supprimerEmployeManuel("2");
afficherEmployes();