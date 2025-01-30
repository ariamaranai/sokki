{
  isDisable = 0;
  chrome.action.onClicked.addListener(() =>
    chrome.action.setIcon({
      path: (isDisable = !isDisable)
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
  );
}
chrome.scripting.registerContentScripts([{
  id: "0",
  css: ["main.css"],
  matches: ["<all_urls>"],
  runAt: "document_start",
  allFrames: !0
}])