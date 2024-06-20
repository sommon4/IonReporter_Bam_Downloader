chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  const url = item.finalUrl;
  if (url.includes('/outputs/VariantCallerActor-00/merged.bam.ptrim.bam')) {
    const parts = url.split('/');
    const filename = parts[parts.length - 5]; // Extract the sample name
    suggest({ filename: filename + '.ptrim' + '.bam' });
  }
});
