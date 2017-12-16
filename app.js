const resources = require('./resources')
const models = require('./models')
const path = require("path")
const bodyParser = require('body-parser')
const mockData = require('./mock-data')
const login = require('./resources/login')

// Priority serve any static files.
resources.app.use(resources.express.static(path.resolve(__dirname, './build')))

models.sequelize.sync().then(()  => {
  // mock data for testing
  mockData(models)

  // All remaining requests return the React app, so it can handle routing.
  resources.app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './build', 'index.html'))
  })

  resources.app.listen(process.env.PORT || 5000)
})
