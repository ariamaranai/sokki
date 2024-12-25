chrome.action.onClicked.addListener(async () =>
  chrome.action.setIcon({
    path: (await chrome.scripting.getRegisteredContentScripts()).length
      ? (chrome.scripting.unregisterContentScripts(), "off.png")
      : (chrome.scripting.registerContentScripts([{
          id: "0",
          css: ["main.css"],
          matches: ["<all_urls>"],
          runAt: "document_start",
          allFrames: !0
         }]),
         "on.png")
  })
);
chrome.management.onEnabled.addListener(async info =>
  info.id == chrome.runtime.id &&
  (await chrome.scripting.getRegisteredContentScripts()).length ||
  chrome.action.setIcon({ path: "off.png" })
);