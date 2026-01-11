---
title: Usage Guide
description: Detailed instructions on how to use the Transcoder Suite script.
---

This guide covers the various ways to run the `convert.ps1` script and the command-line parameters available.

## Basic Execution

Run the script from the root of the repository:

```powershell
.\app\convert.ps1
```

By default, the script will:
1.  Ask you to select a **Playbook**.
2.  Ask for a **Session Name**.
3.  Recursively scan the current working directory for common video extensions (`.mp4`, `.mkv`, `.avi`, etc.).
4.  Process files one by one, saving progress to `app/convert_jobs/`.

## Command Line Parameters

You can automate the setup by passing parameters to the script:

| Parameter | Alias | Description |
| :--- | :--- | :--- |
| `-Path` | `FullName`, `FilePath` | Path(s) to files or directories to process. Supports pipeline input. |
| `-Session` | | Name of the session. Useful for resuming specific jobs. |
| `-Playbook` | | Path to a playbook JSON file. |
| `-NoRecurse` | | Disable recursive folder scanning. |
| `-RetryFailed` | | Force the script to re-attempt files that failed in a previous session. |

### Examples

**Process a specific folder with a specific playbook:**
```powershell
.\app\convert.ps1 -Path "D:\Videos\Movies" -Playbook "app\playbooks\av1-archive.json" -Session "MovieArchival"
```

**Using the pipeline to process specific files:**
```powershell
Get-ChildItem "C:\RawFootage" -Filter "*.mov" | .\app\convert.ps1 -Playbook "app\playbooks\av1-archive.json"
```

## Session Management

Every job created is stored in `app/convert_jobs/<SessionName>.json`. 

- **Resuming**: If you run the script again with the same `-Session` name (or select it interactively), it will skip files already marked as `Completed`.
- **Atomic Operations**: Files are encoded to a `.tmp` file first. Only upon successful completion (FFmpeg exit code 0) is the original file "replaced" (or the new file finalized).
- **Safety**: The script never deletes your original files unless specifically configured in a custom profile (not default behavior).
