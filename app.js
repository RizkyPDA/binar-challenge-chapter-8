const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

//import swagger ui untuk tampilan dokumentasi
const swaggerUI = require('swagger-ui-express')
// import konfigurasi swagger 
const swaggerJSON = require('./docs/swagger.json')

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

// middleware untuk panggil swagger ui supaya ada tampilannya
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))


/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})