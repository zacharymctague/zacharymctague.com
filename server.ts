import next from 'next'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const { PORT, NODE_ENV } = process.env

const port = parseInt(PORT || '3000', 10)
const app = next({ dev: NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(cookieParser())

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err: Error) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
