---
title: Configuración
description: Cómo personalizar playbooks y perfiles para sus necesidades de transcodificación.
---

Transcoder Suite se basa en un sistema de configuración modular que utiliza archivos JSON.

## Perfiles

Los perfiles definen los ajustes específicos del codificador para video o audio. Se encuentran en `app/profiles/`.

### Perfiles de video
Ejemplo (`app/profiles/video/av1-high.json`):
```json
{
    "Codec": "libsvtav1",
    "CRF": "24",
    "Preset": "6",
    "PixFmt": "yuv420p10le",
    "Params": "tune=0:enable-overlays=1"
}
```

### Perfiles de audio
El script distingue entre sonido estéreo y envolvente para permitir diferentes tasas de bits.
Ejemplo (`app/profiles/audio/opus-surround.json`):
```json
{
    "Codec": "libopus",
    "Bitrate": "192k",
    "VBR": "on"
}
```

## Playbooks

Los playbooks son "recetas" que combinan un perfil de video, un perfil de audio estéreo y un perfil de audio envolvente en un solo trabajo. Se encuentran en `app/playbooks/`.

Ejemplo (`app/playbooks/av1-archive.json`):
```json
{
    "PlaybookName": "AV1 Master Archive",
    "Description": "Receta de archivo completa: Video AV1 High + manejo de Opus Estéreo/Envolvente.",
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

### Resolución de rutas
Las rutas dentro de los playbooks son relativas a la ubicación de `convert.ps1` (la carpeta `app/`).

## Personalización

Para crear su propia receta:
1.  Cree nuevos archivos JSON en `app/profiles/video/` o `app/profiles/audio/` si es necesario.
2.  Cree un nuevo playbook en `app/playbooks/` haciendo referencia a sus perfiles.
3.  La próxima vez que ejecute `convert.ps1`, su nuevo playbook aparecerá en la lista de selección.
