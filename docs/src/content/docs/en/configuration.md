---
title: Configuration
description: How to customize playbooks and profiles for your transcoding needs.
---

Transcoder Suite is built on a modular configuration system using JSON files.

## Profiles

Profiles define the specific encoder settings for video or audio. They are located in `app/profiles/`.

### Video Profiles
Example (`app/profiles/video/av1-high.json`):
```json
{
    "Codec": "libsvtav1",
    "CRF": "24",
    "Preset": "6",
    "PixFmt": "yuv420p10le",
    "Params": "tune=0:enable-overlays=1"
}
```

### Audio Profiles
The script distinguishes between Stereo and Surround sound to allow different bitrates.
Example (`app/profiles/audio/opus-surround.json`):
```json
{
    "Codec": "libopus",
    "Bitrate": "192k",
    "VBR": "on"
}
```

## Playbooks

Playbooks are "recipes" that combine a video profile, stereo audio profile, and surround audio profile into a single job. They are located in `app/playbooks/`.

Example (`app/playbooks/av1-archive.json`):
```json
{
    "PlaybookName": "AV1 Master Archive",
    "Description": "Complete archival recipe: AV1 High Video + Opus Stereo/Surround handling.",
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

### Path Resolution
Paths inside playbooks are relative to the location of `convert.ps1` (the `app/` folder).

## Customizing

To create your own recipe:
1.  Create new JSON files in `app/profiles/video/` or `app/profiles/audio/` if needed.
2.  Create a new playbook in `app/playbooks/` referencing your profiles.
3.  The next time you run `convert.ps1`, your new playbook will appear in the selection list.
