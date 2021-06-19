
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/gaz/Desktop/gatsby/kaleblub.github.io/.cache/dev-404-page.js")),
  "component---src-templates-page-js": preferDefault(require("/home/gaz/Desktop/gatsby/kaleblub.github.io/src/templates/page.js")),
  "component---src-templates-post-js": preferDefault(require("/home/gaz/Desktop/gatsby/kaleblub.github.io/src/templates/post.js")),
  "component---src-templates-posts-js": preferDefault(require("/home/gaz/Desktop/gatsby/kaleblub.github.io/src/templates/posts.js"))
}

