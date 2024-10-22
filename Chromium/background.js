chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    const modifiedUrl = url.replace(/bsky\.app/, "fxbsky.app");

    chrome.tabs.sendMessage(tabs[0].id, { action: 'copyToClipboard', text: modifiedUrl }, (response) => {
      if (response && response.success) {
        console.log("Copied to clipboard!");
      } else {
        console.error("Failed to copy:", response ? response.error : "Unknown error");
      }
    });
  });
});