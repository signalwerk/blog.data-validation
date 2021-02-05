var plugins = [{
      plugin: require('/Users/signalwerk/CODE/blog.data-validation/new/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-reference-footnotes","options":{}},{"resolve":"gatsby-remark-table-of-contents","options":{"exclude":"Inhaltsverzeichnis|Table of Contents","tight":false,"fromHeading":2,"toHeading":6}},{"resolve":"gatsby-remark-copy-linked-files"},"gatsby-remark-slug",{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1800,"backgroundColor":"transparent"}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-prismjs"}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/signalwerk/CODE/blog.data-validation/new/sites/example"},
    },{
      plugin: require('/Users/signalwerk/CODE/blog.data-validation/new/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
