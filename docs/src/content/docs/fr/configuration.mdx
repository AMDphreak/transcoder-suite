---
title: Configuration
description: Comment personnaliser les playbooks et les profils pour vos besoins de transcodage.
---

Transcoder Suite repose sur un système de configuration modulaire utilisant des fichiers JSON.

## Profils

Les profils définissent les paramètres spécifiques de l'encodeur pour la vidéo ou l'audio. Ils sont situés dans `app/profiles/`.

### Profils Vidéo
Exemple (`app/profiles/video/av1-high.json`) :
```json
{
    "Codec": "libsvtav1",
    "CRF": "24",
    "Preset": "6",
    "PixFmt": "yuv420p10le",
    "Params": "tune=0:enable-overlays=1"
}
```

### Profils Audio
Le script fait la distinction entre le son stéréo et le son surround pour permettre des débits différents.
Exemple (`app/profiles/audio/opus-surround.json`) :
```json
{
    "Codec": "libopus",
    "Bitrate": "192k",
    "VBR": "on"
}
```

## Playbooks

Les playbooks sont des "recettes" qui combinent un profil vidéo, un profil audio stéréo et un profil audio surround dans un seul travail. Ils sont situés dans `app/playbooks/`.

Exemple (`app/playbooks/av1-archive.json`) :
```json
{
    "PlaybookName": "AV1 Master Archive",
    "Description": "Recette d'archivage complète : Vidéo AV1 High + gestion Opus Stéréo/Surround.",
    "Video": "profiles/video/av1-high.json",
    "AudioStereo": "profiles/audio/opus-stereo.json",
    "AudioSurround": "profiles/audio/opus-surround.json",
    "Other": {
        "Map": "0",
        "CopySubtitles": true,
        "CopyData": true,
        "CopyAttachments": true
    }
}
```

### Résolution des chemins
Les chemins à l'intérieur des playbooks sont relatifs à l'emplacement de `convert.ps1` (le dossier `app/`).

## Personnalisation

Pour créer votre propre recette :
1.  Créez de nouveaux fichiers JSON dans `app/profiles/video/` ou `app/profiles/audio/` si nécessaire.
2.  Créez un nouveau playbook dans `app/playbooks/` faisant référence à vos profils.
3.  La prochaine fois que vous lancerez `convert.ps1`, votre nouveau playbook apparaîtra dans la liste de sélection.
