Gestion des Employés

Ce projet est une petite application en JavaScript qui permet de gérer des employés simplement. On peut ajouter ou supprimer des employés en utilisant un tableau qui est stocké en mémoire.

Ce que l'application permet de faire

Ajouter un employé avec un ID, un nom et un poste.
Supprimer un employé en utilisant son ID.
Utiliser une interface pour effectuer ces actions facilement.

Comment ça fonctionne ?

Le code repose sur plusieurs fonctions principales :

ajouterEmploye(id, nom, poste) : ajoute un employé au tableau.
supprimerEmploye(id) : supprime un employé du tableau grâce à son ID.
ajouterEmployeManuel() : permet d'ajouter un employé en récupérant les infos saisies dans l'interface utilisateur.
supprimerEmployeManuel() : permet de supprimer un employé en récupérant son ID via l'interface utilisateur.


Pour l'utiliser

Il faut connecter ce code à une interface HTML. Les fonctions ajouterEmployeManuel() et supprimerEmployeManuel() sont faites pour être reliées à des champs de formulaire dans votre page.

Exemple d'intégration avec du HTML :

<!-- Section pour ajouter un employé -->
    <h3>Ajouter un employé</h3>
    <input type="text" id="ajout-nom" placeholder="Nom">
    <input type="text" id="ajout-poste" placeholder="Poste">
    <button onclick="ajouterEmployeManuel()">Ajouter</button>

    <!-- Section pour supprimer un employé -->
    <h3>Supprimer un employé</h3>
    <input type="number" id="supprimer-id" placeholder="ID">
    <button onclick="supprimerEmployeManuel()">Supprimer</button>