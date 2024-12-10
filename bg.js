chrome.action.onClicked.addListener(async ()=> c.action.setIcon({
  path: (await c.scripting.getRegisteredContentScripts).length ?
    (c.scripting.unregisterContentScripts(), "off.png") :
    (c.scripting.registerContentScripts([{id: "0", css: ["main.css"], matches: ["<all_urls>"], runAt: "document_start", allFrames: !0}]), "on.png")
}))