

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/404.js"))),
  "component---src-pages-aboutus-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/aboutus.js"))),
  "component---src-pages-affiliate-disclosure-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/AffiliateDisclosure.js"))),
  "component---src-pages-disclaimer-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/disclaimer.js"))),
  "component---src-pages-privacy-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/privacy.js"))),
  "component---src-pages-starthere-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/pages/starthere.js"))),
  "component---src-templates-blog-page-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/templates/blog-page.js"))),
  "component---src-templates-blog-post-archive-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/templates/blog-post-archive.js"))),
  "component---src-templates-blog-post-js": (preferDefault(require("/home/tgk/code/sites/gatsby/top10hw/src/templates/blog-post.js")))
}

