chrome.action.onClicked.addListener(async () => {
  try {
    chrome.action.setIcon({
      path: (await chrome.scripting.getRegisteredContentScripts()).length
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
  } catch {}
});
{
  let isCalled;
  chrome.runtime.onStartup.addListener(async () => {
    try {
      isCalled ??=
        (await chrome.scripting.getRegisteredContentScripts()).length || (
          await chrome.scripting.registerContentScripts([{
            id: "0",
            css: ["main.css"],
            matches: ["<all_urls>"],
            runAt: "document_start",
            allFrames: !0
          }]),
          chrome.action.setIcon({ path: "on.png" })
        )
    } catch {}
  });
}
chrome.runtime.onStartup.dispatch();