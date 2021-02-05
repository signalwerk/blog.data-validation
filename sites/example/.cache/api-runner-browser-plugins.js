module.exports = [{
      plugin: require('../../../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-reference-footnotes","options":{}},{"resolve":"gatsby-remark-table-of-contents","options":{"exclude":"Inhaltsverzeichnis|Table of Contents","tight":false,"fromHeading":2,"toHeading":6}},{"resolve":"gatsby-remark-copy-linked-files"},"gatsby-remark-slug",{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1800,"backgroundColor":"transparent"}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-prismjs"}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/signalwerk/CODE/blog.data-validation/new/sites/example"},
    },{
      plugin: require('../../../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1800,"backgroundColor":"transparent","linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    }]
