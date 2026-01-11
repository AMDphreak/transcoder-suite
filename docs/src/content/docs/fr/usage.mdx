---
title: Guide d'utilisation
description: Instructions détaillées sur l'utilisation du script Transcoder Suite.
---

Ce guide couvre les différentes manières d'exécuter le script `convert.ps1` et les paramètres de ligne de commande disponibles.

## Exécution de base

Lancez le script depuis la racine du dépôt :

```powershell
.\app\convert.ps1
```

Par défaut, le script va :
1.  Vous demander de sélectionner un **Playbook**.
2.  Vous demander un **Nom de session**.
3.  Scanner récursivement le répertoire de travail actuel à la recherche d'extensions vidéo courantes (`.mp4`, `.mkv`, `.avi`, etc.).
4.  Traiter les fichiers un par un, en enregistrant la progression dans `app/convert_jobs/`.

## Paramètres de ligne de commande

Vous pouvez automatiser la configuration en passant des paramètres au script :

| Paramètre | Alias | Description |
| :--- | :--- | :--- |
| `-Path` | `FullName`, `FilePath` | Chemin(s) vers les fichiers ou répertoires à traiter. Supporte l'entrée par pipeline. |
| `-Session` | | Nom de la session. Utile pour reprendre des travaux spécifiques. |
| `-Playbook` | | Chemin vers un fichier JSON de playbook. |
| `-NoRecurse` | | Désactiver le scan récursif des dossiers. |
| `-RetryFailed` | | Forcer le script à réessayer les fichiers qui ont échoué lors d'une session précédente. |

### Exemples

**Traiter un dossier spécifique avec un playbook spécifique :**
```powershell
.\app\convert.ps1 -Path "D:\Videos\Movies" -Playbook "app\playbooks\av1-archive.json" -Session "MovieArchival"
```

**Utilisation du pipeline pour traiter des fichiers spécifiques :**
```powershell
Get-ChildItem "C:\RawFootage" -Filter "*.mov" | .\app\convert.ps1 -Playbook "app\playbooks\av1-archive.json"
```

## Gestion des sessions

Chaque travail créé est stocké dans `app/convert_jobs/<NomDeSession>.json`. 

- **Reprise** : Si vous relancez le script avec le même nom `-Session` (ou si vous le sélectionnez interactivement), il ignorera les fichiers déjà marqués comme `Completed` (Terminé).
- **Opérations atomiques** : Les fichiers sont d'abord encodés dans un fichier `.tmp`. Ce n'est qu'après une réussite complète (code de sortie FFmpeg 0) que le fichier original est "remplacé" (ou que le nouveau fichier est finalisé).
- **Sécurité** : Le script ne supprime jamais vos fichiers originaux, sauf configuration spécifique dans un profil personnalisé (pas le comportement par défaut).
