

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/404.js"))),
  "component---src-pages-aboutus-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/aboutus.js")))
}

