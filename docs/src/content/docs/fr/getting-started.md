---
title: Pour commencer
description: Apprenez à configurer et à exécuter Transcoder Suite pour la première fois.
---

Transcoder Suite est un système puissant et modulaire pour le transcodage vidéo par lots utilisant PowerShell 7 et FFmpeg. Ce guide vous aidera à démarrer rapidement.

## Prérequis

Avant d'utiliser la suite, assurez-vous que les éléments suivants sont installés et configurés sur votre système :

1.  **PowerShell 7+** : Le script est optimisé pour les fonctionnalités de PowerShell 7.
2.  **FFmpeg & FFprobe** : Ces outils doivent être installés et accessibles dans le `PATH` de votre système.
    - Vous pouvez les télécharger sur [ffmpeg.org](https://ffmpeg.org/download.html).
    - Vérifiez l'installation en exécutant `ffmpeg -version` dans votre terminal.

## Installation

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/amdphreak/transcoder-suite.git
    cd transcoder-suite
    ```

2.  **Vérifier la structure** : Assurez-vous de voir le dossier `app/` contenant `convert.ps1`, `playbooks/` et `profiles/`.

## Exécuter votre première conversion

La façon la plus simple d'exécuter le transcodeur est depuis la racine du projet :

```powershell
.\app\convert.ps1
```

### Configuration interactive

Lorsque vous lancez le script sans arguments, il vous guidera à travers :
1.  **Sélection du Playbook** : Choisissez une recette de transcodage (ex: AV1 Master Archive).
2.  **Nom de la session** : Donnez un nom à votre travail (par défaut, l'horodatage actuel).
3.  **Découverte de fichiers** : Le script scannera le répertoire actuel à la recherche de fichiers vidéo.

### Étapes suivantes

- Apprenez-en plus sur l' [utilisation avancée](./usage), y compris les arguments de ligne de commande.
- Comprenez comment personnaliser les [playbooks et les profils](./configuration).
