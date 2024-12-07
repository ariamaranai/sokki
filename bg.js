(async c=> (
  c.action.setIcon({
    path:(await c.storage.local.get("0"))[0] ? "off.png": "on.png"
  }),
  c.action.onClicked.addListener(async ()=>
    c.storage.local.set({
      0: (await c.storage.local.get("0"))[0] ?
        (c.action.setIcon({path: "off.png"}),
         c.scripting.unregisterContentScripts(),
         0) :
        (c.action.setIcon({path: "on.png"}),
         c.scripting.registerContentScripts([{
          id: "0",
          css: ["main.css"],
          matches: ["<all_urls>"],
          runAt: "document_start",
          allFrames: !0
        }]),
        1)
    })
  )
))(chrome)