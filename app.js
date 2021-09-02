const express = require('express')
const serveIndex = require('serve-index')

const app = express();

app.use(
    '/ftp',
    express.static('public'),
    serveIndex('public', {icons: true})
)

app.listen(5000, () => console.log('rocket on 5000...'));