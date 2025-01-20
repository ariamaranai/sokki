chrome.action.onClicked.addListener(() =>
  chrome.scripting.getRegisteredContentScripts(async scripts =>
    await chrome.action.setIcon({
      path: scripts.length
        ? (
          await chrome.scripting.unregisterContentScripts(),
          "off.png"
        )
        : (
          await chrome.scripting.registerContentScripts([{
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
chrome.scripting.getRegisteredContentScripts(async scripts =>
  scripts.length || await chrome.scripting.registerContentScripts([{
    id: "0",
    css: ["main.css"],
    matches: ["<all_urls>"],
    runAt: "document_start",
    allFrames: !0
  }])
);