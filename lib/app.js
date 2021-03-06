module.exports = function(exports, imports) {
  return imports(function
    ( run
    , route
    , html
    , staticHandler
    , ws$listen
    , app$chatListener
    , app$css
    ) {
    var title = "chat app"
      , port = 80

    with (html) return run()
      (ws$listen, port, app$chatListener)
      (route, /^\/static\/base.css$/)
        (app$css)
      ()
      (route, /^\/static/)
        (staticHandler, "/static")
      ()
        (undefined, {status: 200, headers: {"Content-Type": "text/html"}})
        (DOCTYPE, "html")
        (HTML)
          (HEAD)
            (META, {charset: "utf-8"})
            (TITLE)(title)()
            (LINK, {rel: "stylesheet", href: "/static/base.css", type: "text/css"})
            (SCRIPT, {src: "/static/json.js"})()
            (SCRIPT, {src: "/socket.io/socket.io.js"})()
            (SCRIPT, {src: "/static/app.js"})()
          ()
          (BODY)
            (H1)(title)()
            (DIV, {id: "chat"})(P)("Connecting...")()()
            (FORM, {id: "form", onsubmit: "send(); return false"})
              (INPUT, {type: "text", autocomplete: "off", id: "text"})
              (INPUT, {type: "submit", value: "Send"})
            ()
            (DIV, {id: "footer"})
              (P)
                (A, {href: "http://twitter.com/nsyee"})("@nsyee")()
                ("&nbsp;&nbsp;")(A, {href: "http://github.com/nsyee/joyent-app"})("source code")()
                ("&nbsp;&nbsp;")(A, {href: "http://github.com/jed/fab"})("(fab)")()
              ()
            ()
          ()
        ()
        ()
      ()
     //   ("not found", {status: 404})
     // ()
    ()
  })
}
