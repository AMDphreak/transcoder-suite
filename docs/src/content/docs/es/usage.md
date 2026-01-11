---
title: Guía de uso
description: Instrucciones detalladas sobre cómo utilizar el script Transcoder Suite.
---

Esta guía cubre las diversas formas de ejecutar el script `convert.ps1` y los parámetros de línea de comandos disponibles.

## Ejecución básica

Ejecute el script desde la raíz del repositorio:

```powershell
.\app\convert.ps1
```

Por defecto, el script:
1.  Le pedirá que seleccione un **Playbook**.
2.  Le pedirá un **Nombre de sesión**.
3.  Escaneará recursivamente el directorio de trabajo actual en busca de extensiones de video comunes (`.mp4`, `.mkv`, `.avi`, etc.).
4.  Procesará los archivos uno por uno, guardando el progreso en `app/convert_jobs/`.

## Parámetros de línea de comandos

Puede automatizar la configuración pasando parámetros al script:

| Parámetro | Alias | Descripción |
| :--- | :--- | :--- |
| `-Path` | `FullName`, `FilePath` | Ruta(s) a archivos o directorios a procesar. Admite entrada por tubería (pipeline). |
| `-Session` | | Nombre de la sesión. Útil para reanudar trabajos específicos. |
| `-Playbook` | | Ruta a un archivo JSON de playbook. |
| `-NoRecurse` | | Desactiva el escaneo recursivo de carpetas. |
| `-RetryFailed` | | Fuerza al script a reintentar los archivos que fallaron en una sesión anterior. |

### Ejemplos

**Procesar una carpeta específica con un playbook específico:**
```powershell
.\app\convert.ps1 -Path "D:\Videos\Movies" -Playbook "app\playbooks\av1-archive.json" -Session "MovieArchival"
```

**Uso de la tubería (pipeline) para procesar archivos específicos:**
```powershell
Get-ChildItem "C:\RawFootage" -Filter "*.mov" | .\app\convert.ps1 -Playbook "app\playbooks\av1-archive.json"
```

## Gestión de sesiones

Cada trabajo creado se almacena en `app/convert_jobs/<NombreDeSesion>.json`. 

- **Reanudación**: Si ejecuta el script de nuevo con el mismo nombre de `-Session` (o lo selecciona interactivamente), omitirá los archivos ya marcados como `Completed` (Completados).
- **Operaciones atómicas**: Los archivos se codifican primero en un archivo `.tmp`. Solo tras la finalización exitosa (código de salida de FFmpeg 0) se "reemplaza" el archivo original (o se finaliza el nuevo archivo).
- **Seguridad**: El script nunca elimina sus archivos originales a menos que se configure específicamente en un perfil personalizado (no es el comportamiento por defecto).
