chrome.action.onClicked.addListener(async () => {
  try {
    (await chrome.scripting.getRegisteredContentScripts()).length
      ? (
        await chrome.scripting.unregisterContentScripts(),
        chrome.action.setIcon({
          path: "off.png"
        })
      )
      : chrome.runtime.onInstalled.dispatch();
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
chrome.runtime.onInstalled.addListener(() => (
  chrome.scripting.registerContentScripts([{
    id: "0",
    css: ["main.css"],
    matches: ["<all_urls>"],
    runAt: "document_start",
    allFrames: !0
  }]),
  chrome.action.setIcon({
    path: "on.png"
  })
));
chrome.runtime.onStartup.dispatch();