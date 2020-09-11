import * as path from 'path'

import { default as express } from 'express'
import * as bodyParser from 'body-parser'
import { default as helmet } from 'helmet'
import { default as morgan } from 'morgan'

import { Request, Response, NextFunction } from 'express'

const PORT = 3000

const app = express()

app.use(helmet())
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const pathToIndex = path.join(__dirname, 'dist/client/index.html')
  console.log(pathToIndex)
  console.log(path.resolve('../../dist/client/index.html'))
  res.sendFile(pathToIndex)

  next()
})

app.listen(PORT, () => {
  console.log(`Server stating at http://localhost:${PORT}`)
})
