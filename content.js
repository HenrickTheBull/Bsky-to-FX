chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'copyToClipboard') {
    navigator.clipboard.writeText(request.text)
      .then(() => sendResponse({ success: true }))
      .catch(err => sendResponse({ success: false, error: err }));
    return true; // Keep the message channel open for sendResponse
  }
});