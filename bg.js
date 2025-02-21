chrome.action.onClicked.addListener(() =>
  chrome.scripting.getRegisteredContentScripts(scripts =>
    chrome.action.setIcon({
      path: scripts.length
        ? (
          chrome.scripting.unregisterContentScripts(),
          "off.png"
        )
        : (
          chrome.scripting.registerContentScripts([{
            id: "0",
            css: ["main.css"],
            matches: ["<all_urls>"],
            runAt: "document_start",
            allFrames: !0
          }]),
         "on.png"
        )
    })
  )
);
chrome.scripting.getRegisteredContentScripts(scripts =>
  scripts.length || (
    chrome.scripting.registerContentScripts([{
      id: "0",
      css: ["main.css"],
      matches: ["<all_urls>"],
      runAt: "document_start",
      allFrames: !0
    }]),
    chrome.action.setIcon({ path: "on.png" })
  )
);