// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-aboutus-js": () => import("./../../../src/pages/aboutus.js" /* webpackChunkName: "component---src-pages-aboutus-js" */)
}

