<a id="readme-top"></a>
<div align="center">
  <a href="https://github.com/AMDphreak/transcoder-suite/graphs/contributors"><img src="https://img.shields.io/github/contributors/AMDphreak/transcoder-suite.svg?style=for-the-badge" alt="Contributors"></a>
  <a href="https://github.com/AMDphreak/transcoder-suite/network/members"><img src="https://img.shields.io/github/forks/AMDphreak/transcoder-suite.svg?style=for-the-badge" alt="Forks"></a>
  <a href="https://github.com/AMDphreak/transcoder-suite/stargazers"><img src="https://img.shields.io/github/stars/AMDphreak/transcoder-suite.svg?style=for-the-badge" alt="Stargazers"></a>
  <a href="https://github.com/AMDphreak/transcoder-suite/issues"><img src="https://img.shields.io/github/issues/AMDphreak/transcoder-suite.svg?style=for-the-badge" alt="Issues"></a>
  <a href="https://github.com/AMDphreak/transcoder-suite/blob/master/LICENSE"><img src="https://img.shields.io/github/license/AMDphreak/transcoder-suite.svg?style=for-the-badge" alt="License"></a>

  <h1>Transcoder Suite</h1>
  <p>Modular, playbook-driven video transcoding for high-quality archival and batch processing (PowerShell 7 + FFmpeg).</p>
  <p>
    <a href="https://amdphreak.github.io/transcoder-suite/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AMDphreak/transcoder-suite/issues">Report Bug</a>
    &middot;
    <a href="https://github.com/AMDphreak/transcoder-suite/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

Transcoder Suite automates complex transcoding with reusable profiles and playbooks, session-based resumable jobs, and a focus on high-efficiency codecs like AV1 and Opus.

### Project Goals

* **Quality**: Focus on high-bitrate, high-efficiency codecs like AV1 and Opus.
* **Consistency**: Ensure all media in a collection follows the same encoding standards.
* **Resilience**: Session-based processing that can be resumed after interruptions.
* **Automation**: Minimize manual configuration through reusable profiles and playbooks.

### Features

* **Modular Profiles**: Separate video and audio settings into reusable JSON components.
* **Playbook Orchestration**: Combine profiles into named "Playbooks" for different use cases (e.g., Deep Archival, Mobile Sync).
* **Session Management**: Resumable jobs stored in `app/convert_jobs/`. Never lose progress on a 100-file batch.
* **Smart Audio Handling**: Automatically detects and handles stereo vs. surround sound with appropriate bitrates.
* **SVT-AV1 Optimized**: Pre-configured for high-efficiency 10-bit AV1 encoding.
* **Atomic Writes**: Encodes to `.tmp` files to prevent file corruption on interruption.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* **Pipeline** — PowerShell 7
  * [![FFmpeg][FFmpeg.org]][FFmpeg-url] / FFprobe
* **Docs** — [![Starlight][Starlight.astro]][Starlight-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* Install FFmpeg and FFprobe and ensure they are in your PATH.
* PowerShell 7+.

### Installation / run

Clone the repository, then run the converter from the `app/` directory:

```powershell
.\app\convert.ps1
```

Select a Playbook from `app/playbooks/`.

### Documentation

Published docs: [amdphreak.github.io/transcoder-suite/](https://amdphreak.github.io/transcoder-suite/).

Local docs site:

```bash
cd docs
pnpm install
pnpm dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

* `app/profiles/`: Individual encoder settings (Video/Audio).
* `app/playbooks/`: Orchestration recipes.
* `app/convert_jobs/`: Session progress and failure logs (ignored by git).
* `app/convert.ps1`: The main entry point script.

Docs are available in English, Spanish, and French under `docs/`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Fork, branch, and open a pull request. Bug reports and feature requests welcome via GitHub Issues.

### Top contributors

<a href="https://github.com/AMDphreak/transcoder-suite/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AMDphreak/transcoder-suite" alt="contributors" />
</a>

For per-person profile links, prefer [all-contributors](https://allcontributors.org/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

GNU General Public License v3.0 — see [LICENSE](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Ryan Johnson — [@amdphreak](https://twitter.com/amdphreak)

Project Link: [https://github.com/AMDphreak/transcoder-suite](https://github.com/AMDphreak/transcoder-suite)

Docs: [https://amdphreak.github.io/transcoder-suite/](https://amdphreak.github.io/transcoder-suite/)

Site: [https://ryanjohnson.dev](https://ryanjohnson.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[FFmpeg.org]: https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=ffmpeg&logoColor=white
[FFmpeg-url]: https://ffmpeg.org/
[Starlight.astro]: https://img.shields.io/badge/Starlight-D41F00?style=for-the-badge&logo=astro&logoColor=white
[Starlight-url]: https://starlight.astro.build/
