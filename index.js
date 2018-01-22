const fs = require('fs')
const config = {
  urls: ['/a', '/b']
}

const siteMapStart = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`

const writeXML = (string) => {
  fs.writeFileSync('sitemap.xml', string)
}

const createSiteMap = (config) => {
  let sitemap = siteMapStart
  config.urls.forEach(url => {
    sitemap = sitemap.concat(`<url><loc>${url}</loc></url>\n`)
  })
  sitemap = sitemap.concat(`</urlset>`)
  writeXML(sitemap)
}

createSiteMap(config)