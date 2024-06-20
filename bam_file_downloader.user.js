// ==UserScript==
// @name         BAM File Downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a download link for BAM files on specific pages.
// @author       YourName
// @match        https://ionreporter.thermofisher.com/ir/secure/irgv/getIRGVLightwindow.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to parse the filename from the URL
    function getFilename(url) {
        const parts = url.split('/');
        return parts[parts.length - 5]; // This gets the sample name from the URL
    }

    // Function to create a download link
    function createDownloadLink(url) {
        const filename = getFilename(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename + '.bam';
        a.textContent = 'Download BAM file';
        a.style.position = 'fixed';
        a.style.top = '10px';
        a.style.right = '10px';
        a.style.zIndex = '1000';
        a.style.backgroundColor = 'white';
        a.style.padding = '10px';
        a.style.border = '1px solid black';
        a.style.borderRadius = '5px';
        a.style.color = 'black';
        document.body.appendChild(a);
    }

    // Listen to XHR and fetch requests
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        this.addEventListener('load', function() {
            if (url.includes('/outputs/VariantCallerActor-00/merged.bam.ptrim.bam')) {
                createDownloadLink(url);
            }
        });
        origOpen.apply(this, arguments);
    };

    const origFetch = window.fetch;
    window.fetch = function() {
        return origFetch.apply(this, arguments).then(response => {
            const url = response.url;
            if (url.includes('/outputs/VariantCallerActor-00/merged.bam.ptrim.bam')) {
                createDownloadLink(url);
            }
            return response;
        });
    };

})();
