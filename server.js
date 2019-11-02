require('express-group-routes')
const express = require('express')
      bodyParser = require('body-parser');

const webtoonRoutes = require('./routes/webtoon')
      userRoutes = require('./routes/user')
      indexRoutes = require('./routes/index')

const app = express()
app.use(bodyParser.json())
app.use('/storage',express.static('storage'))

const port = 5000

app.group("/api/v1", (routing) => {
  routing.use('/',indexRoutes)
  routing.use('/webtoons',webtoonRoutes)
  routing.use('/user',userRoutes)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
