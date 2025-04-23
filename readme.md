# Bienvenu dans cet atelier sur l'authentification

## Introduction

Cet atelier est un puzzle en 3 parties :

- La création d'un compte [partie 1](./partOne.md)
- L'authentification [partie 2](./partTwo.md)
- L'autorisation [partie 3](./partThree.md)

Chaque partie est isolée dans le sens où le code doit ^tre fonctionnel à la fin. Tu ne peux cependant pas passer à lapartie suivante tant que le code précedent n'est pas dans l'ordre.

Pour chaque partie, tu vas trouver une série de pièce de code. As toi de retrouver où celles ci doivent se mettre pour que tout fonctionne et communique correctement.

:warning: certaine pièce d'une partie peuvent être potentiellement écrasée par celle d'après totalement ou partiellement.
De plus, pour faciliter le développement, l'ensemble des libraires (package) associé aux pièces est déjà inclus dans les `packages.json`

## Tour du propriétaire

Un fichier `makefile` est présent et permet de lancer le projet.
Une source de données est initialisé à l'instanciation du container `Postgres`. En complément, un process de migration est mis en place.
Pour le lancer:

- Copie le fichier `.env-sample` et `.env` et remplis le avec tes données
- Lance le projet : `make dev`
- Dans un second terminal: `docker ps`pour retrouver l'`îd` du container `api`
- Execute le terminal du container `api`: `docker exec -it <id_du_container> sh`
- Dans le Terminal du container: `npm run migration:up`

Ce process de migration devra être renouvellé à chauqe fois que le container de `db` est `down`. Ceci peut être nécessaire pour supprimer le cache applicatif lié à `Docker`.
