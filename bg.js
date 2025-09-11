chrome.action.onClicked.addListener(async () => {
  try {
    let path;
    (await chrome.scripting.getRegisteredContentScripts()).length
      ? (
        await chrome.scripting.unregisterContentScripts(),
        path = "off.png"
      )
      : (
        await chrome.scripting.registerContentScripts([{
          id: "0",
          css: ["main.css"],
          matches: ["<all_urls>"],
          runAt: "document_start",
          allFrames: !0
        }]),
        path = "on.png"
      );
    chrome.action.setIcon({ path });
  } catch {}
});
{
  let isCalled;
  chrome.runtime.onStartup.addListener(async () => {
    try {
      isCalled ??= chrome.action.setIcon({
        path: (await chrome.scripting.getRegisteredContentScripts()).length ? "on.png" : "off.png"
      });
    } catch {}
  });
}
chrome.runtime.onInstalled.addListener(() => chrome.action.onClicked.dispatch());
chrome.runtime.onStartup.dispatch();