# IonReporter_Bam_Downloader
A tampermonkey Script and Chrome Extension to download the ptrim bam file directly from IonReporter

# BAM File Downloader and Renamer

This repository contains a TamperMonkey script and a Chrome extension to download and rename BAM files from the specified URL.

## TamperMonkey Script

The TamperMonkey script injects a download link into the page. To install the script:

1. Install [TamperMonkey](https://www.tampermonkey.net/) extension in your browser.
2. Create a new script in TamperMonkey and paste the content of `bam_file_downloader.user.js` file.
3. Save and enable the script.

## Chrome Extension

The Chrome extension listens for downloads and renames the file based on the URL. To install the extension:

1. Clone this repository or download the zip file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (toggle in the top right).
4. Click "Load unpacked" and select the `chrome_extension` folder from this repository.

## How to Use

1. Navigate to [Ion Reporter](https://ionreporter.thermofisher.com).
2. The TamperMonkey script will inject a download link into the page.
3. Click the download link. The Chrome extension will rename the file based on the URL.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
