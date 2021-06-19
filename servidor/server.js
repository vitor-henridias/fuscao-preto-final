// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()

// Ta dando erro com esse comando abaixo.
// const path = require('path')
// const router = jsonServer.router(path.join(__dirname, 'db.json'))

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
