// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-templates-page-js": () => import("./../../../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-post-js": () => import("./../../../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-posts-js": () => import("./../../../src/templates/posts.js" /* webpackChunkName: "component---src-templates-posts-js" */)
}

